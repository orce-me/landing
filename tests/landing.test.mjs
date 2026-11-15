import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import test from 'node:test'

const component = (name) => readFileSync(`app/components/${name}.vue`, 'utf8')

test('homepage keeps quotations central and delegates pricing and help to real pages', () => {
  const home = readFileSync('app/pages/index.vue', 'utf8')
  assert.doesNotMatch(home, /<PlansSection|<FaqSection|<AudienceSection/)
  assert.match(home, /to="\/planos-e-precos"/)
  for (const route of ['planos-e-precos', 'ajuda']) {
    const page = readFileSync(`app/pages/${route}.vue`, 'utf8')
    assert.match(page, /usePageSeo/)
    assert.match(page, /<h1/)
  }
})

test('quotation showcase settles after a brief entrance and respects reduced motion', () => {
  const demo = component('QuoteDemo')
  assert.match(demo, /animation: quotation-layouts 4s ease-in-out forwards/)
  assert.doesNotMatch(demo, /infinite|<button|<figcaption/)
  assert.match(demo, /prefers-reduced-motion: reduce/)
  assert.match(demo, /animation: none/)
})

test('navigation reaches every homepage section from secondary pages', () => {
  const header = component('SiteHeader')
  for (const id of ['como-funciona', 'recursos', 'materiais']) {
    assert.ok(header.includes(`href="/#${id}"`))
  }
  for (const route of ['planos-e-precos', 'ajuda']) {
    assert.ok(header.includes(`to="/${route}"`))
  }
  assert.match(header, /aria-expanded/)
  assert.match(header, /@keydown.esc/)
})

test('the public quotation story does not promote speculative services or repeat slogans', () => {
  const publicStory = [
    'HeroSection',
    'WorkflowSection',
    'FeaturesSection',
    'ResourcesSection',
    'ClosingSection',
    'SiteFooter',
  ]
    .map(component)
    .join(' ')
  assert.doesNotMatch(
    publicStory,
    /Seu próximo negócio|Feito para quem faz|PARA QUEM FAZ|Conhecer por dentro|O cuidado está nos detalhes|estoque sincronizado/,
  )
  assert.equal((publicStory.match(/Menos tempo orçando/g) || []).length, 1)
})

test('diagonal arrows are absent from all public components and pages', () => {
  for (const folder of ['app/components', 'app/pages']) {
    for (const file of readdirSync(folder).filter((file) =>
      file.endsWith('.vue'),
    )) {
      assert.doesNotMatch(readFileSync(`${folder}/${file}`, 'utf8'), /↗/, file)
    }
  }
})
