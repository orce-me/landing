# orce.me

Landing page of orce.me built with Nuxt.

`DESIGN.md` is the source of truth for the visual design. After you change its tokens, run `pnpm tokens` to rebuild `app/assets/css/tokens.css`, then `pnpm design:lint`.

## Verification

```sh
pnpm tokens:check
pnpm design:lint
pnpm format:check
pnpm build
pnpm test:seo
pnpm generate
```

The production-route tests require `pnpm build` first. Pricing and help are separate routes (`/planos-e-precos`, `/ajuda`); homepage section links are root-qualified to work from every page. Quotation documents are illustrative examples, not a promise of specific template availability.

### Browser regressions

The optional browser suite uses Python Playwright outside the application's dependency graph. It checks the production site in light/dark at 1240, 1050, 760, 390 and 320px, cross-page anchors and mobile navigation, the help accordion, the brief non-looping entrance animation, reduced motion, and closing CTA placement. It writes screenshots to the specified artifact directory and fails on browser errors or horizontal overflow.

```sh
python -m venv .browser-venv
.browser-venv/bin/pip install playwright
.browser-venv/bin/playwright install chromium
PORT=5174 node .output/server/index.mjs
# In a second terminal:
.browser-venv/bin/python scripts/test-landing-browser.py --base-url http://127.0.0.1:5174 --artifacts .browser-artifacts
```

Set `BROWSER_EXECUTABLE` to use an existing Chromium binary. Host-specific library/font configuration belongs in the invoking environment, not in the test or application.
