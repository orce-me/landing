---
version: alpha
name: orce.me
description: Visual identity of the orce.me landing page. Forest actions, muted plum and lilac product surfaces on warm linen, with concrete quotation UI and accessible layout previews.
colors:
  # Light theme
  primary: '#174c3c'
  primary-hover: '#26634e'
  on-primary: '#ffffff'
  secondary: '#73536e'
  tertiary: '#8aa357'
  neutral: '#f7f4ef'
  surface: '#fcfaf7'
  surface-raised: '#ffffff'
  surface-tint: '#eee5ef'
  band: '#e8dcec'
  on-surface: '#16392d'
  on-surface-muted: '#4e6053'
  outline: '#d8d3ce'
  inverse-surface: '#103c2b'
  on-inverse-surface: '#f3f6e8'
  status-draft: '#f2e8c9'
  on-status-draft: '#786017'
  status-sent: '#dce7f3'
  on-status-sent: '#355776'
  status-accepted: '#dbe9cb'
  on-status-accepted: '#3d6227'
  error: '#8a342a'
  # Dark theme
  primary-dark: '#c1dca2'
  secondary-dark: '#d7bce0'
  primary-hover-dark: '#d3e8bc'
  on-primary-dark: '#163322'
  neutral-dark: '#101c17'
  surface-dark: '#1b2b21'
  surface-raised-dark: '{colors.surface-dark}'
  surface-tint-dark: '#302b34'
  band-dark: '#342938'
  on-surface-dark: '#e5ede0'
  on-surface-muted-dark: '#b3c1ad'
  outline-dark: '#354a39'
  inverse-surface-dark: '#0a281b'
  status-draft-dark: '#463e27'
  on-status-draft-dark: '#eedc9f'
  status-sent-dark: '#293e51'
  on-status-sent-dark: '#c0d9ed'
  status-accepted-dark: '#314c2b'
  on-status-accepted-dark: '#c5e3a7'
  error-dark: '#f3b5a4'
typography:
  display:
    fontFamily: DM Sans Variable
    fontSize: 65px
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: -3.3px
  display-accent:
    fontFamily: Instrument Serif
    fontSize: 76px
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: -2.5px
  headline-lg:
    fontFamily: DM Sans Variable
    fontSize: 43px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -1.8px
  headline-lg-accent:
    fontFamily: Instrument Serif
    fontSize: 51px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -1.8px
  headline-md:
    fontFamily: DM Sans Variable
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.23
    letterSpacing: -1.4px
  headline-md-accent:
    fontFamily: Instrument Serif
    fontSize: 43px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: -0.9px
  title-lg:
    fontFamily: DM Sans Variable
    fontSize: 25px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.4px
  title-md:
    fontFamily: DM Sans Variable
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.4px
  figure:
    fontFamily: DM Sans Variable
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.7px
  brand:
    fontFamily: DM Sans Variable
    fontSize: 29px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -1.5px
  body-lg:
    fontFamily: DM Sans Variable
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.8
  body-md:
    fontFamily: DM Sans Variable
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.8
  body-sm:
    fontFamily: DM Sans Variable
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.9
  label-lg:
    fontFamily: DM Sans Variable
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
  label-md:
    fontFamily: DM Sans Variable
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
  headline-page:
    fontFamily: DM Sans Variable
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -1.5px
  headline-page-accent:
    fontFamily: Instrument Serif
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -1.5px
  title-xl:
    fontFamily: DM Sans Variable
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: -0.5px
  figure-lg:
    fontFamily: DM Sans Variable
    fontSize: 38px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.2px
  lead:
    fontFamily: DM Sans Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.9
  label-sm:
    fontFamily: DM Sans Variable
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.8
rounded:
  sm: 4px
  md: 6px
  lg: 10px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 40px
  5xl: 56px
  container: 1240px
  gutter: 40px
  gutter-tablet: 28px
  gutter-mobile: 22px
  section: 90px
  section-mobile: 60px
  container-content: 1040px
  measure: 780px
components:
  page:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
  page-dark:
    backgroundColor: '{colors.neutral-dark}'
    textColor: '{colors.on-surface-dark}'
  supporting-text:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.on-surface-muted}'
    typography: '{typography.body-sm}'
  supporting-text-dark:
    backgroundColor: '{colors.neutral-dark}'
    textColor: '{colors.on-surface-muted-dark}'
  headline-accent:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.secondary}'
    typography: '{typography.headline-md-accent}'
  headline-accent-dark:
    backgroundColor: '{colors.neutral-dark}'
    textColor: '{colors.secondary-dark}'
  brand-mark:
    textColor: '{colors.primary}'
    size: 24px
    rounded: '{rounded.full}'
  brand-dot:
    textColor: '{colors.tertiary}'
    typography: '{typography.brand}'
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.md}'
    height: 44px
    padding: 20px
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
  button-primary-dark:
    backgroundColor: '{colors.primary-dark}'
    textColor: '{colors.on-primary-dark}'
  button-primary-dark-hover:
    backgroundColor: '{colors.primary-hover-dark}'
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: 24px
  card-dark:
    backgroundColor: '{colors.surface-dark}'
    textColor: '{colors.on-surface-dark}'
  plan-card:
    backgroundColor: '{colors.surface-tint}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: 32px
  feature-band:
    backgroundColor: '{colors.band}'
    textColor: '{colors.on-surface}'
  feature-band-dark:
    backgroundColor: '{colors.band-dark}'
    textColor: '{colors.on-surface-dark}'
  dialog:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
  dialog-dark:
    backgroundColor: '{colors.surface-raised-dark}'
    textColor: '{colors.on-surface-dark}'
  tag:
    backgroundColor: '{colors.surface-tint}'
    textColor: '{colors.secondary}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.sm}'
    padding: 8px
  tag-dark:
    backgroundColor: '{colors.surface-tint-dark}'
    textColor: '{colors.secondary-dark}'
  divider:
    backgroundColor: '{colors.outline}'
    height: 1px
  divider-dark:
    backgroundColor: '{colors.outline-dark}'
    height: 1px
  status-draft:
    backgroundColor: '{colors.status-draft}'
    textColor: '{colors.on-status-draft}'
    rounded: '{rounded.sm}'
  status-draft-dark:
    backgroundColor: '{colors.status-draft-dark}'
    textColor: '{colors.on-status-draft-dark}'
  status-sent:
    backgroundColor: '{colors.status-sent}'
    textColor: '{colors.on-status-sent}'
    rounded: '{rounded.sm}'
  status-sent-dark:
    backgroundColor: '{colors.status-sent-dark}'
    textColor: '{colors.on-status-sent-dark}'
  status-accepted:
    backgroundColor: '{colors.status-accepted}'
    textColor: '{colors.on-status-accepted}'
    rounded: '{rounded.sm}'
  status-accepted-dark:
    backgroundColor: '{colors.status-accepted-dark}'
    textColor: '{colors.on-status-accepted-dark}'
  closing-band:
    backgroundColor: '{colors.inverse-surface}'
    textColor: '{colors.on-inverse-surface}'
    typography: '{typography.headline-lg}'
  closing-band-dark:
    backgroundColor: '{colors.inverse-surface-dark}'
    textColor: '{colors.on-inverse-surface}'
  input:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.on-surface}'
    typography: '{typography.lead}'
    rounded: '{rounded.md}'
    padding: 12px
  input-dark:
    backgroundColor: '{colors.surface-raised-dark}'
    textColor: '{colors.on-surface-dark}'
  tint-panel:
    backgroundColor: '{colors.surface-tint}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: 24px
  tint-panel-dark:
    backgroundColor: '{colors.surface-tint-dark}'
    textColor: '{colors.on-surface-dark}'
  error-message:
    backgroundColor: '{colors.surface-tint}'
    textColor: '{colors.error}'
    typography: '{typography.body-md}'
  error-message-dark:
    backgroundColor: '{colors.surface-tint-dark}'
    textColor: '{colors.error-dark}'
  quotation-gallery:
    backgroundColor: '{colors.band}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
  quotation-gallery-dark:
    backgroundColor: '{colors.band-dark}'
    textColor: '{colors.on-surface-dark}'
  closing-accent:
    backgroundColor: '{colors.inverse-surface}'
    textColor: '{colors.primary-dark}'
    typography: '{typography.headline-lg-accent}'
---

# orce.me

This file is the source of truth for the visual design of the orce.me landing page. The YAML tokens above are the normative values. The prose below tells you why the values exist and how to apply them.

The spec has no theme modes. Tokens with the `-dark` suffix are the dark theme values. A token `x-dark` replaces the token `x` in the dark theme. A token without a `-dark` partner, such as `tertiary`, is the same in both themes. A component with the `-dark` suffix changes only the properties it lists. All other properties come from the base component.

## Overview

orce.me helps small Brazilian businesses (installers, service providers, shops that sell and install) turn a catalog into professional quotes. The site has a quotation-focused landing page, separate pricing and help pages, free calculators, and a guide. Every page must feel calm, competent, and crafted. It must not feel like a loud SaaS template.

- **Mood:** Quiet confidence. Forest green actions on warm linen, contrasted with muted plum text and lilac product surfaces. Generous white space and thin hairlines.
- **Voice:** Lead with concrete functionality in DM Sans. Instrument Serif italic can emphasize a second clause, but is not required on every heading. Use at most one catch phrase, in the closing block.
- **Product proof:** Illustrative mockups of the app (a quote window, a catalog, a printed proposal) show the product instead of describing it. They tilt slightly and float above the page.
- **Language:** All copy is Brazilian Portuguese (`lang="pt-BR"`). Currency uses `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.
- **Content pages:** The calculators and the guide put reading and input first. They use a narrower column, larger body text, underlined links, and no mockups.
- **Brand:** The wordmark is lowercase `orce.me` with a lime period. The mark is a forest ring with a small lime dot at the top right.

## Colors

Forest carries actions; muted Plum carries emphasis; Lilac distinguishes product demonstration surfaces from the warm Linen page. Lime remains a small decorative brand signal. Never tint the whole page green.

**Light theme**

- `primary` Forest (#174c3c), white `on-primary`, and hover #26634e remain the action colors.
- `secondary` Plum (#73536e) is used for serif accents, section labels and focus rings.
- `tertiary` Lime (#8aa357) is decorative only, not a text color.
- `neutral` Linen (#f7f4ef) is the warm page ground. `surface` (#fcfaf7) and `surface-raised` (#ffffff) separate cards and documents.
- `surface-tint` (#eee5ef) and `band` (#e8dcec) create the contrasting lilac product gallery and functionality section.
- `on-surface` (#16392d) and `on-surface-muted` (#4e6053) carry headings and supporting text. `outline` (#d8d3ce) is the neutral hairline.
- `inverse-surface` (#103c2b) and `on-inverse-surface` (#f3f6e8) form the closing island.
- Error and quote-status pairs retain their semantic amber, blue, green and red hues.

**Dark theme**

- `primary-dark` (#c1dca2), hover (#d3e8bc), and `on-primary-dark` (#163322) retain the forest brand's action contrast.
- `secondary-dark` (#d7bce0) is a pale lilac accent, distinct from primary actions.
- `neutral-dark` (#101c17), `surface-dark` (#1b2b21), and `surface-raised-dark` provide dark page and paper surfaces.
- `surface-tint-dark` (#302b34) and `band-dark` (#342938) retain the plum/lilac contrast without bright white papers.
- Text (#e5ede0), supporting text (#b3c1ad), and hairlines (#354a39) retain their established dark pairs.

**Shared rules**

- The closing band is a dark island in both themes. Use the dark-theme accent and button there.
- Status chips use only their semantic pairs. Plum/lilac are brand surfaces, not status colors.
- Product surfaces use solid tokens, with borders and subtle raised shadows instead of green glows. The hero previews have a lilac stage and varied document composition, not unrelated logos.
- The `theme-color` is `primary` in light and `neutral-dark` in dark. Keep the initial meta tag in `nuxt.config.ts` in sync.

## Typography

Two families carry the identity. **DM Sans** (the variable font, weights 400 to 700) does all the work. **Instrument Serif** italic is the accent voice. Both are self-hosted through Fontsource, and `app.vue` preloads the two files that render first.

- **Display:** The hero `h1`, DM Sans Medium at 65px with tight tracking (-3.3px). Its serif clause (`display-accent`) is larger, at 76px, so the two parts look the same optical size.
- **Headlines:** Section `h2` titles use `headline-md` (36px) with a `headline-md-accent` clause (43px). The closing band uses the lighter, larger `headline-lg` (43px, weight 400) with a 51px accent.
- **Titles:** `title-md` (18px) for card and step titles. `title-lg` (25px) for the plan card title.
- **Figures:** Prices and totals use `figure` (22px, weight 500, -0.7px). Keep currency on one line (`white-space: nowrap`).
- **Body:** `lead` (16px) for the hero paragraph; `body-lg` (15px) for supporting introductions. `body-md` (13px) for section intros and FAQ questions. `body-sm` (12px) for card and step text. Keep paragraph width between 305px and 470px.
- **Labels:** `label-lg` (13px, 500) for navigation. `label-md` (12px, 600) for buttons. `label-sm` (10px) for notes, footer text, badges, and disclaimers. Uppercase lead-ins use `label-sm` with 1.2px tracking.
- **Serif accents:** Set the accent with the `<em>` element. It is italic by default. Use it for the second clause of a headline and for document titles inside the mockups. Use it nowhere else.
- **Responsive sizes:** At 1050px and below, `display` is 52px and `display-accent` is 62px. At 760px and below, the hero is one column, so `display` returns to 57px (-2.8px) with a 66px accent, and the hero paragraph is 15px. Below 380px, the hero display and accent are 49px and 58px to keep long Portuguese words inside the gutter. Section headlines drop to 29px and 35px. Closing headlines drop to 32px and 38px.
- **Content pages:** Page titles use `headline-page` (44px) with a `headline-page-accent` clause (52px). Section titles use `title-xl` (26px). Intros use `lead` (16px). Paragraphs, list items, and related links use `body-lg` (15px). Labels, tables, and secondary notes use `body-md` or `label-lg` (13px). Help text and breadcrumbs use `body-sm` (12px). Calculator results use `figure-lg` (38px). At 760px and below, page titles drop to 32px and 38px, and section titles drop to 23px.
- **Mockup text:** The illustrative mockups use their own reduced scale (6px to 9px). That scale imitates a screenshot. Do not reuse it for real page text.

## Layout

Each page is a single column. Content sits in a centered container, `.wrap`, with a 1240px maximum width. The landing page stacks full-width sections. Content pages narrow the container to `container-content` (1040px) and keep prose at the `measure` (780px).

- **Gutters:** 40px on desktop, 28px at 1050px and below, 22px at 760px and below.
- **Sections:** 90px block padding on desktop, 60px on mobile. Anchored sections have a 35px `scroll-margin-top`.
- **Header:** 108px tall on desktop, 82px on mobile. It has a bottom hairline.
- **Grids:**
  - Hero: copy and visual in a `1fr 1.08fr` grid.
  - Workflow: three equal steps with a 40px gap.
  - Features: a two-column product workspace grid with a full-width history strip. It becomes one column at 760px. Each card pairs one function with an illustrative UI.
  - Pricing: a separate page with a two-column quotation capability and current-options panel. The homepage has only a contextual pricing link.
  - FAQ: a `1fr 1.25fr` grid.
  - Resources: two equal columns with a 24px gap.
  - Calculators: inputs and result side by side. The quote calculator uses `1.2fr 1fr` with a 32px gap. The small calculators use two equal columns in one bordered box.
- **Breakpoints:** 1050px (tablet) and 760px (mobile). A 1450px query only adds hero padding. All content grids collapse to one column at 760px. The preview gallery keeps a compact layered composition, and the closing CTA stacks below the heading.
- **Spacing scale:** Component spacing uses the 4px scale (`xs` to `5xl`). The layout tokens (`container`, `gutter*`, `section*`) are exact values. Do not round them.
- **Overflow:** `main` uses `overflow-x: clip`. Glows and orbit rings can extend past the container without a horizontal scroll.

## Elevation & Depth

Depth comes from tonal layers first. The layers, from back to front: `neutral` page, `band`, `surface` cards, `surface-raised` mockups. Shadows are faint and tinted with Ink, never black, in the light theme.

- **Raised:** `0 8px 24px #16392d0a`. Use it for cards, the paper mockup, and floating chips.
- **Floating:** `0 24px 64px #16392d17`. Use it only for the hero app window.
- **Dark theme:** `0 18px 48px #00000022` for every raised element.
- **Tilt:** Illustrative floating elements rotate 2 to 4 degrees. Alternate the direction: app window -2deg, float label 4deg, success chip 2deg, paper mockup -4deg.
- **Legacy decorative properties:** Existing glow/orbit custom properties remain available for other pages, but the homepage does not render green hero glows or orbit rings. The quote gallery uses a solid lilac stage.
- **Dialog backdrop:** Ink at 60% (`#16392d99`) with a 5px backdrop blur.

## Shapes

Shapes are soft but restrained. Corners are small, lines are thin, and circles mark the brand.

- `rounded.sm` (4px): tags, status chips, small mockup buttons, inputs.
- `rounded.md` (6px): page buttons and the catalog list.
- `rounded.lg` (10px): cards, the plan card, the dialog, the app window, floating labels.
- `rounded.full`: the brand mark, the theme toggle, avatars, check icons, and pill badges.
- Borders are 1px hairlines in `outline` or `outline-dark`. The brand ring is 2.5px.

## Components

- **Primary button:** Forest background, white `label-md` text, 44px tall, 20px inline padding, `rounded.md`. On hover it lifts 2px (`translateY(-2px)`) and goes to `primary-hover`. In dark it is Sprout with `on-primary-dark` text. A trailing `↗` glyph sits 24px from the label.
- **Text link:** `label-sm` or `body-sm` text with a trailing glyph (`↓` for in-page, `↗` for outbound) and an 8px gap. It has no underline.
- **Header:** Brand left, navigation centered (`label-lg`, 24px gap), then login and the theme toggle. At 760px and below the navigation moves into a menu panel (`surface` or `surface-dark`, `rounded.lg`, hairline border).
- **Theme toggle:** A 36px circle with a hairline border and a 17px stroke icon (1.6 stroke, round caps). Show the moon in light and the sun in dark.
- **Card:** `surface`, hairline border, `rounded.lg`, 24px padding, raised shadow. Feature cards use 32px copy insets and 24px mockup insets, with equal-width catalog and proposal columns.
- **Pricing panel:** A card on the separate pricing route explains quotation capabilities and links to current app conditions. No speculative module cards or invented prices appear on any public page.
- **Tag:** `surface-tint` with Fern text, `label-sm`, `rounded.sm`, a hairline border. A leading glyph names the item type.
- **Status chip:** Draft, sent, and accepted pairs only, `rounded.sm`, small text.
- **FAQ:** Native `<details>` and `<summary>` with a hairline under each item. A `+` glyph in Fern rotates 45 degrees when open.
- **Quotation gallery:** A lilac stage of three gently angled quotation documents with the same sample company, line items, totals and conditions. Document composition changes across examples. A persistent motion button and preparation disclosure sit outside the decorative papers.
- **Pricing detail:** Uses the existing card and tint-panel tokens. Never invent prices or sell unshipped modules. Link to current options in the application.
- **Closing band:** A full-width dark island in `inverse-surface` with a soft glow, a `headline-lg` statement, a Sprout serif clause, and `button-primary-dark` in both themes. A large rotated `✳` decoration sits at the right edge at low opacity. The CTA sits to the right of the headline near the asterisk on desktop, and stacks on mobile. There is no adjacent slogan.
- **Dialog:** The native `<dialog>` for the PDF preview. `surface-raised`, `rounded.lg`, hairline border, and a `surface-tint` toolbar. Print always renders it in the light theme.
- **Mockups:** The app window, catalog, and paper are illustrations of the product. They use the reduced mockup scale and the floating or raised shadow. The examples are not editable. The hero has a real pause/resume control for its document animation.
- **Input:** `surface-raised` (or `surface-raised-dark`), `on-surface` text at 16px, `rounded.md`, 12px padding. The border is `on-surface-muted`, so the field edge has 3:1 contrast. The label sits above the field in `label-lg`. Help text sits below in `body-sm`, `on-surface-muted`.
- **Calculator:** A bordered box (`rounded.lg`) with inputs on one side and a `tint-panel` result on the other. The result value uses `figure-lg`. Results update live in an `aria-live="polite"` region.
- **Tint panel:** `surface-tint` with a hairline border, `rounded.lg`, 24px padding. Use it for calculator results, the guide call to action, and table headers and footers.
- **Error message:** `error` text in `body-md` inside the result panel. It replaces the result while the input is invalid.
- **Resource card:** A `card` link with a `title-md` heading, a `body-md` description, and an underlined action label.
- **Breadcrumbs:** `body-sm`, `on-surface-muted`, slash separators. The link to the home page is underlined.
- **Inline link:** On content pages, links inside prose are underlined with a 4px offset. They keep the text color.
- **Content table:** Full width, `body-md`, 15px cell padding, hairline rows, and a `surface-tint` header and footer. It scrolls sideways on mobile.
- **Formula:** A bordered box (`rounded.md`, 20px padding) that holds one formula in weight 500.
- **Skip link:** "Pular para o conteúdo" stays above the viewport until it gets focus.

## Motion

- Transitions are 0.2s and change only `transform` and `background`.
- The quotation gallery uses a slow 18s transform cycle with 620px of horizontal travel, enough to bring the final layout fully into the desktop and standard mobile preview. Its visible pause/resume button persists the paused state, hovering the preview stage also pauses it, and reduced motion renders all examples statically. Layout variants are explicitly labeled as previews in preparation, never advertised as shipped.
- The theme toggle reveals the new theme with a circular clip from the pointer, 520ms, `cubic-bezier(.2,.7,.2,1)`, through the View Transitions API. Without that API, the theme changes at once.
- `prefers-reduced-motion: reduce` turns off all transitions, smooth scroll, and the theme reveal.

## Iconography

The page uses Unicode glyphs instead of an icon library. The glyph set is part of the identity.

- `↗` outbound actions and calls to action. `↓` in-page links.
- `✳` separators and the closing decoration. `✦` the spark in the float label.
- `✓` success and plan features. `+` FAQ expand. `☰` the mobile menu.
- The theme toggle is the only SVG icon. Illustrative search icons use a CSS ring and stem. The mobile menu uses three CSS lines to avoid missing-glyph boxes on systems without the hamburger character. Mark decorative glyphs with `aria-hidden="true"`.

## Do's and Don'ts

- Do take every color from the tokens. Don't add a hex value near an existing token. Reuse the token.
- Do treat the glow and orbit values in this file as the only colors outside the tokens. These are the page glows, the hero glow, the orbit rings, and the closing glow. Use them for decoration only, never for text, borders, or surfaces.
- Do give every new surface and text pair a `-dark` value. Check contrast in both themes.
- Do use the focus ring as a 3px solid outline with a 5px offset, in `secondary`. That is Plum in light and pale Lilac in dark. Don't use `#81a669` on light surfaces. It has 2.6:1 contrast.
- Don't use `tertiary` (Lime) or `outline` for text or control borders. Form control borders use `on-surface-muted` to get 3:1 contrast.
- Do keep real page text at 10px or larger. Only the illustrative mockups go smaller.
- Do keep one primary button per section. Pair it with a text link, not a second filled button.
- Do set the serif only for the second clause of a headline and for mockup document titles. Don't use it for body text, labels, or buttons.
- Do end headlines and step titles with a period, for example "Monte seu catálogo."
- Do tilt only illustrative floating elements, and only 2 to 4 degrees.
- Don't add shadows outside the raised and floating levels. Don't use black shadows in the light theme.
- Don't add an icon library or emoji. Use the glyph set.
- Do use `error` only for validation messages.
- Do set input text to 16px or larger, so mobile browsers do not zoom on focus.
- Do underline links inside prose on content pages. Don't underline navigation or buttons.
- Do write all copy in Brazilian Portuguese.
- Do respect `prefers-reduced-motion` for every new animation.
