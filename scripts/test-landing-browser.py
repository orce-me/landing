import argparse
import json
import os
from pathlib import Path

from playwright.sync_api import expect, sync_playwright


parser = argparse.ArgumentParser()
parser.add_argument('--base-url', default='http://127.0.0.1:5174')
parser.add_argument('--artifacts', default='.browser-artifacts')
args = parser.parse_args()
artifacts = Path(args.artifacts)
artifacts.mkdir(parents=True, exist_ok=True)
errors = []
checks = []
routes = [
    '/', '/planos-e-precos', '/ajuda', '/como-fazer-orcamento-de-servicos',
    '/calculadora-de-orcamento', '/calculadora-de-desconto',
    '/calculadora-de-margem', '/calculadora-de-custo-hora',
    '/calculadora-de-ponto-de-equilibrio', '/calculadora-de-preco-com-taxas',
]

with sync_playwright() as playwright:
    executable = os.environ.get('BROWSER_EXECUTABLE')
    browser = playwright.chromium.launch(
        executable_path=executable or None,
        args=['--no-sandbox', '--disable-dev-shm-usage'],
    )
    for theme in ['light', 'dark']:
        context = browser.new_context(viewport={'width': 1240, 'height': 900})
        context.add_init_script(f"localStorage.setItem('orce-theme', '{theme}')")
        page = context.new_page()
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.on('console', lambda message: errors.append(message.text) if message.type == 'error' else None)
        for width in [1240, 1050, 760, 390, 320]:
            page.set_viewport_size({'width': width, 'height': 900})
            for route in routes:
                response = page.goto(args.base_url + route)
                assert response.status == 200, (route, response.status)
                expect(page.locator('h1')).to_have_count(1)
                assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), (theme, width, route, 'horizontal overflow')
                expect(page.locator('html')).to_have_attribute('data-theme', theme)
            page.goto(args.base_url)
            page.evaluate('document.fonts.ready')
            if width in [1240, 390]:
                page.locator('.gallery-rail').evaluate('''(element) => {
                    const animation = element.getAnimations()[0];
                    animation.pause();
                    animation.currentTime = 0;
                }''')
                page.evaluate("window.scrollTo({top: 0, behavior: 'instant'})")
                stage = page.locator('.gallery-stage').bounding_box()
                screen = page.locator('.quote-gallery img').bounding_box()
                assert screen['x'] >= stage['x'] and screen['x'] + screen['width'] <= stage['x'] + stage['width'], (theme, width, 'product screen overflows its frame', stage, screen)
                page.screenshot(path=str(artifacts / f'home-{theme}-{width}.png'), full_page=True)
                page.locator('.hero').screenshot(path=str(artifacts / f'hero-{theme}-{width}.png'), style='.skip:not(:focus) { visibility: hidden; }')
                page.locator('#recursos').screenshot(path=str(artifacts / f'features-{theme}-{width}.png'), style='.skip:not(:focus) { visibility: hidden; }')
            if width == 1240:
                heading = page.locator('.closing h2').bounding_box()
                cta = page.locator('.closing .button').bounding_box()
                assert cta['y'] >= heading['y'] + heading['height'], 'desktop closing CTA is not below heading'
            if width == 390:
                heading = page.locator('.closing h2').bounding_box()
                cta = page.locator('.closing .button').bounding_box()
                assert cta['y'] >= heading['y'] + heading['height'], 'mobile closing CTA is not stacked'
            checks.append(f'{theme} {width}px: all {len(routes)} routes render without overflow')
        for route in ['/planos-e-precos', '/ajuda']:
            page.goto(args.base_url + route)
            page.screenshot(path=str(artifacts / f'{route[1:]}-{theme}-320.png'), full_page=True)
        context.close()

    context = browser.new_context(viewport={'width': 1240, 'height': 900})
    page = context.new_page()
    page.goto(args.base_url)
    rail = page.locator('.gallery-rail')
    expect(page.locator('.quote-gallery button')).to_have_count(0)
    expect(page.locator('.quote-gallery figcaption')).to_have_count(0)
    expect(page.locator('.layout-name')).to_have_count(0)
    expect(page.get_by_text('Layouts em preparação')).to_have_count(0)
    timing = rail.evaluate('(element) => element.getAnimations()[0].effect.getTiming()')
    assert timing['iterations'] == 1 and timing['duration'] <= 5000, timing
    rail.evaluate('(element) => element.getAnimations()[0].finish()')
    assert rail.evaluate('(element) => element.getAnimations()[0].playState') == 'finished'
    before = rail.evaluate('(element) => getComputedStyle(element).transform')
    page.wait_for_timeout(200)
    assert before == rail.evaluate('(element) => getComputedStyle(element).transform')
    checks.append('brief entrance finishes and rests without playback controls or development captions')
    for width in [1240, 390]:
        page.set_viewport_size({'width': width, 'height': 900})
        page.goto(args.base_url)
        page.locator('.gallery-rail').evaluate('''(element) => {
            const animation = element.getAnimations()[0];
            animation.pause();
            animation.currentTime = animation.effect.getTiming().duration;
        }''')
        page.locator('#recursos').scroll_into_view_if_needed()
        page.wait_for_function("[...document.querySelectorAll('.quote-gallery img, #recursos img')].every((img) => img.complete && img.naturalWidth > 0)", timeout=10000)
        stage = page.locator('.gallery-stage').bounding_box()
        screen = page.locator('.quote-gallery img').bounding_box()
        assert screen['x'] >= stage['x'] and screen['x'] + screen['width'] <= stage['x'] + stage['width'], (width, 'product screen overflows its frame', stage, screen)
    checks.append('showcase entrance ends with the real product screens loaded inside their frames')

    for width in [1240, 390]:
        page.set_viewport_size({'width': width, 'height': 900})
        for destination in ['como-funciona', 'recursos']:
            page.goto(args.base_url + '/ajuda')
            if width == 390:
                page.get_by_role('button', name='Abrir menu').click()
                expect(page.get_by_role('button', name='Fechar menu')).to_have_attribute('aria-expanded', 'true')
            page.locator(f'header a[href="/#{destination}"]').click()
            page.wait_for_url(args.base_url + '/#' + destination)
            expect(page.locator('#' + destination)).to_be_in_viewport()
            if width == 390:
                expect(page.get_by_role('button', name='Abrir menu')).to_have_attribute('aria-expanded', 'false')
        page.goto(args.base_url)
        for route in ['/planos-e-precos', '/ajuda']:
            if width == 390:
                page.get_by_role('button', name='Abrir menu').click()
            page.locator(f'header a[href="{route}"]').click()
            page.wait_for_url(args.base_url + route)
            expect(page.locator('h1')).to_have_count(1)
            if width == 390:
                expect(page.get_by_role('button', name='Abrir menu')).to_have_attribute('aria-expanded', 'false')
        checks.append(f'{width}px: all homepage anchors and pricing/help navigation work across pages')
    page.goto(args.base_url + '/planos-e-precos')
    page.get_by_role('button', name='Abrir menu').click()
    page.keyboard.press('Escape')
    expect(page.get_by_role('button', name='Abrir menu')).to_be_focused()
    expect(page.locator('#site-navigation')).not_to_be_visible()
    page.goto(args.base_url + '/ajuda')
    page.locator('summary').first.click()
    expect(page.locator('details').first).to_have_attribute('open', '')
    page.get_by_role('button', name='Ativar tema escuro').click()
    expect(page.locator('html')).to_have_attribute('data-theme', 'dark')
    checks.append('mobile Escape restores menu focus; help accordion and theme toggle work')
    context.close()

    context = browser.new_context(reduced_motion='reduce', viewport={'width': 390, 'height': 900})
    page = context.new_page()
    page.goto(args.base_url)
    expect(page.locator('.gallery-rail')).to_have_css('animation-name', 'none')
    expect(page.locator('.quote-gallery button')).to_have_count(0)
    expect(page.locator('.quote-gallery img')).to_be_visible()
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    page.screenshot(path=str(artifacts / 'home-reduced-motion-390.png'), full_page=True)
    checks.append('reduced motion disables animation and shows the product screen at rest')
    context.close()
    browser.close()

assert not errors, errors
print(json.dumps({'checks': checks, 'browser_errors': errors, 'artifacts': str(artifacts.resolve())}, indent=2))
