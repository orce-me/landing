---
version: alpha
name: orce.me
description: Visual identity of orce.me. Warm and friendly. Cream paper, warm brown text, terracotta actions and soft pastel cards, with a soft serif for headlines and a friendly sans for the product and copy. The product is shown at real, readable size.
colors:
  # Light theme
  primary: '#c2461f'
  primary-hover: '#a83b18'
  on-primary: '#ffffff'
  secondary: '#6a4fb3'
  tertiary: '#f2a65a'
  neutral: '#fbf6ee'
  surface: '#fffdf9'
  surface-raised: '#ffffff'
  surface-tint: '#f5ede1'
  band: '#efe5d6'
  on-surface: '#2b2118'
  on-surface-muted: '#6b5d50'
  outline: '#e8dccb'
  peach: '#ffe3d1'
  butter: '#fdefc3'
  mint: '#d8efdf'
  lavender: '#e7e1fa'
  sky: '#d9ebfa'
  status-draft: '#fbeec4'
  on-status-draft: '#6b5300'
  status-sent: '#dceafb'
  on-status-sent: '#21508a'
  status-accepted: '#d9efdc'
  on-status-accepted: '#2c5e33'
  error: '#b3261e'
  # Dark theme
  primary-dark: '#ff8a63'
  primary-hover-dark: '#ffa182'
  on-primary-dark: '#2b1408'
  secondary-dark: '#b9a8ff'
  neutral-dark: '#1b1611'
  surface-dark: '#241e18'
  surface-raised-dark: '#2b241d'
  surface-tint-dark: '#2e261f'
  band-dark: '#2a221b'
  on-surface-dark: '#f6eee3'
  on-surface-muted-dark: '#bfb1a1'
  outline-dark: '#3d3329'
  peach-dark: '#3d2a20'
  butter-dark: '#3a3220'
  mint-dark: '#213328'
  lavender-dark: '#2c2740'
  sky-dark: '#1f2e3d'
  status-draft-dark: '#463e27'
  on-status-draft-dark: '#eedc9f'
  status-sent-dark: '#233a55'
  on-status-sent-dark: '#c6defa'
  status-accepted-dark: '#2a4229'
  on-status-accepted-dark: '#c5e6bf'
  error-dark: '#ffb4a8'
typography:
  display:
    fontFamily: Fraunces Variable
    fontSize: 76px
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: -2px
  display-accent:
    fontFamily: Fraunces Variable
    fontSize: 76px
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: -2px
  headline-lg:
    fontFamily: Fraunces Variable
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -1.5px
  headline-lg-accent:
    fontFamily: Fraunces Variable
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -1.5px
  headline-md:
    fontFamily: Fraunces Variable
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.2px
  headline-md-accent:
    fontFamily: Fraunces Variable
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -1.2px
  headline-page:
    fontFamily: Fraunces Variable
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.2px
  headline-page-accent:
    fontFamily: Fraunces Variable
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -1.2px
  title-xl:
    fontFamily: Figtree Variable
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-lg:
    fontFamily: Figtree Variable
    fontSize: 21px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: Figtree Variable
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: -0.2px
  figure:
    fontFamily: Figtree Variable
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.4px
  figure-lg:
    fontFamily: Figtree Variable
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  brand:
    fontFamily: Figtree Variable
    fontSize: 25px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.8px
  lead:
    fontFamily: Figtree Variable
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.6
  body-lg:
    fontFamily: Figtree Variable
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Figtree Variable
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Figtree Variable
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.65
  label-lg:
    fontFamily: Figtree Variable
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
  label-md:
    fontFamily: Figtree Variable
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.3
  label-sm:
    fontFamily: Figtree Variable
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: 8px
  md: 14px
  lg: 24px
  xl: 36px
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
  container: 1200px
  gutter: 40px
  gutter-tablet: 28px
  gutter-mobile: 20px
  section: 104px
  section-mobile: 64px
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
    textColor: '{colors.primary}'
    typography: '{typography.headline-md-accent}'
  headline-accent-dark:
    backgroundColor: '{colors.neutral-dark}'
    textColor: '{colors.primary-dark}'
  brand-mark:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    size: 30px
    rounded: '{rounded.full}'
  brand-dot:
    textColor: '{colors.tertiary}'
    typography: '{typography.brand}'
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    height: 52px
    padding: 26px
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
  button-primary-dark:
    backgroundColor: '{colors.primary-dark}'
    textColor: '{colors.on-primary-dark}'
  button-primary-dark-hover:
    backgroundColor: '{colors.primary-hover-dark}'
  button-light:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    height: 52px
    padding: 26px
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: 28px
  card-dark:
    backgroundColor: '{colors.surface-dark}'
    textColor: '{colors.on-surface-dark}'
  card-peach:
    backgroundColor: '{colors.peach}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.xl}'
  card-peach-dark:
    backgroundColor: '{colors.peach-dark}'
    textColor: '{colors.on-surface-dark}'
  card-butter:
    backgroundColor: '{colors.butter}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.xl}'
  card-butter-dark:
    backgroundColor: '{colors.butter-dark}'
    textColor: '{colors.on-surface-dark}'
  card-mint:
    backgroundColor: '{colors.mint}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.xl}'
  card-mint-dark:
    backgroundColor: '{colors.mint-dark}'
    textColor: '{colors.on-surface-dark}'
  card-lavender:
    backgroundColor: '{colors.lavender}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.xl}'
  card-lavender-dark:
    backgroundColor: '{colors.lavender-dark}'
    textColor: '{colors.on-surface-dark}'
  card-sky:
    backgroundColor: '{colors.sky}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.xl}'
  card-sky-dark:
    backgroundColor: '{colors.sky-dark}'
    textColor: '{colors.on-surface-dark}'
  app-window:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-sm}'
    rounded: '{rounded.lg}'
  app-window-dark:
    backgroundColor: '{colors.surface-raised-dark}'
    textColor: '{colors.on-surface-dark}'
  plan-card:
    backgroundColor: '{colors.surface-tint}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: 32px
  mockup-band:
    backgroundColor: '{colors.band}'
    textColor: '{colors.on-surface}'
  mockup-band-dark:
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
    rounded: '{rounded.full}'
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
    rounded: '{rounded.full}'
  status-draft-dark:
    backgroundColor: '{colors.status-draft-dark}'
    textColor: '{colors.on-status-draft-dark}'
  status-sent:
    backgroundColor: '{colors.status-sent}'
    textColor: '{colors.on-status-sent}'
    rounded: '{rounded.full}'
  status-sent-dark:
    backgroundColor: '{colors.status-sent-dark}'
    textColor: '{colors.on-status-sent-dark}'
  status-accepted:
    backgroundColor: '{colors.status-accepted}'
    textColor: '{colors.on-status-accepted}'
    rounded: '{rounded.full}'
  status-accepted-dark:
    backgroundColor: '{colors.status-accepted-dark}'
    textColor: '{colors.on-status-accepted-dark}'
  closing-card:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.headline-lg}'
    rounded: '{rounded.xl}'
  closing-card-dark:
    backgroundColor: '{colors.primary-dark}'
    textColor: '{colors.on-primary-dark}'
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
  site-header:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-lg}'
    height: 76px
  site-header-dark:
    backgroundColor: '{colors.neutral-dark}'
    textColor: '{colors.on-surface-dark}'
---

# orce.me

This file is the source of truth for the visual design of orce.me. The YAML tokens above are the normative values. The prose below tells you why the values exist and how to apply them.

The spec has no theme modes. Tokens with the `-dark` suffix are the dark theme values. A token `x-dark` replaces the token `x` in the dark theme. A token without a `-dark` partner, such as `tertiary`, is the same in both themes. A component with the `-dark` suffix changes only the properties it lists. All other properties come from the base component.

## Overview

orce.me helps small Brazilian businesses (bakeries, installers, photographers, painters, service providers) turn a catalog into professional quotes. The site has a quotation-focused landing page, separate pricing and help pages, free calculators, and a guide.

The identity is **warm and friendly**: the tone of a neighborhood business, not a corporate SaaS. It must feel welcoming and easy, and it must show the real product instead of decorating around it.

- **Mood:** Cream paper, warm brown text, terracotta actions and soft pastel cards. Generous rounding and white space.
- **Product first:** The hero and the feature cards show the quotation editor and the generated PDF at a readable size, with the same sample quote everywhere (orçamento nº 0042 for Marina Oliveira, R$ 650,00).
- **Voice:** Plain, concrete and kind. Headlines say what the product does. Use at most one catch phrase, in the closing card.
- **Language:** All copy is Brazilian Portuguese (`lang="pt-BR"`). Currency uses `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.
- **Content pages:** The calculators and the guide put reading and input first. They use a narrower column, larger body text, underlined links, and no mockups.
- **Brand:** The wordmark is lowercase `orce.me` in Figtree 700 with an apricot period. The mark is a terracotta circle with a white `o`.

## Colors

Cream carries the page. Terracotta is the only action color. Pastels group content into friendly cards; each pastel is a background only, always with the regular brown text. Violet appears only in small labels and the focus ring.

**Light theme**

- `primary` Terracotta (#c2461f) with white `on-primary` (5:1) and hover #a83b18. Buttons, links that act, the brand mark, the closing card and headline accents.
- `secondary` Violet (#6a4fb3). Small labels, tags and the focus ring.
- `tertiary` Apricot (#f2a65a). Decorative only: the wordmark period and small dots. Never text.
- `neutral` Cream (#fbf6ee) is the page. `surface` (#fffdf9) and `surface-raised` (#ffffff) are cards and app windows. `surface-tint` (#f5ede1) and `band` (#efe5d6) are panels and mockup fills.
- `on-surface` (#2b2118) and `on-surface-muted` (#6b5d50) carry text. `outline` (#e8dccb) is the hairline.
- Pastels: `peach` (#ffe3d1), `butter` (#fdefc3), `mint` (#d8efdf), `lavender` (#e7e1fa), `sky` (#d9ebfa).
- Quote-status pairs keep semantic amber, blue and green. `error` is #b3261e.

**Dark theme**

- The page is warm cocoa (#1b1611) with surfaces #241e18 and #2b241d, cream text (#f6eee3) and muted #bfb1a1. Hairlines are #3d3329.
- Terracotta brightens to #ff8a63 with dark `on-primary-dark` text. Violet becomes #b9a8ff.
- Each pastel has a deep, low-saturation partner (`peach-dark` #3d2a20 and so on) that keeps the card grouping without glowing.

**Shared rules**

- Never put two pastels side by side without a gap. Never use a pastel as text.
- Status chips use only their semantic pairs.
- The `theme-color` is `primary` in light and `neutral-dark` in dark. Keep the initial meta tag in `nuxt.config.ts` in sync.

## Typography

Two families, self-hosted through Fontsource; `app.vue` preloads the two files that render first.

- **Fraunces** (variable, with the `SOFT` axis at 100 and `opsz` auto) for display, headlines and page titles. Its soft, slightly wonky shapes give the warmth. Weight 500; the accent clause is weight 400 italic.
- **Figtree** (variable) for everything else: body, navigation, buttons, titles, figures and the product UI.

- **Display:** The hero `h1` is 76px, weight 500, line height 1.04, tracking -2px.
- **Headlines:** Section `h2` titles use `headline-md` (44px). The closing card uses `headline-lg` (56px). Content pages use `headline-page` (48px).
- **Accent:** `<em>` sets the second clause of a headline in Fraunces italic, weight 400, in `primary`. Use it once per headline at most.
- **Titles:** `title-md` (18px) for card and step titles, `title-lg` (21px) for feature cards and resource cards, `title-xl` (24px) for content sections.
- **Figures:** Prices and totals use `figure` (22px, 700) and `figure-lg` (40px). Use tabular numbers and keep currency on one line.
- **Body:** `lead` (19px) for the hero paragraph and content intros, `body-lg` (17px) for supporting text, `body-md` (15px) for descriptions, `body-sm` (14px) for help text and the app window.
- **Labels:** `label-lg` (15px, 500) for navigation, `label-md` (15px, 600) for buttons, `label-sm` (12px, 500) for notes, chips and the footer.
- **Responsive sizes:** At 1050px and below, `display` is 60px (-1.6px) and `headline-lg` 46px. At 760px and below, `display` is 44px (-1.2px), `headline-lg` 36px, `headline-md` 32px (-0.8px), `headline-page` 34px, and the hero paragraph 17px. Below 380px, `display` is 38px.
- **Mockup text:** The app window uses real UI sizes (12px to 15px). Only the small PDF paper and the feature mockups use the reduced scale (7px to 11px), which imitates a screenshot. Do not reuse that scale for page text.

## Layout

Each page is a single column. Content sits in a centered container, `.wrap`, with a 1200px maximum width. Content pages narrow the container to `container-content` (1040px) and keep prose at the `measure` (780px).

- **Gutters:** 40px on desktop, 28px at 1050px and below, 20px at 760px and below.
- **Sections:** 104px block padding on desktop, 64px on mobile. Anchored sections have a 100px `scroll-margin-top` so the sticky header never covers their headings.
- **Header:** 76px tall on desktop, 64px on mobile. It sticks to the top with a translucent `neutral` ground (92% mix) and a 14px backdrop blur, and shows a bottom hairline once the page scrolls. Below 380px the brand shrinks and the gaps tighten.
- **Grids:**
  - Hero: copy and showcase in a `0.85fr 1.15fr` grid, vertically centered. One column at 1050px.
  - Workflow: a centered heading over three equal pastel step cards with a 24px gap. One column at 1050px.
  - Features: a centered heading over two pastel feature cards and a full-width history card.
  - Pricing banner: one full-width tint card between features and resources.
  - Resources: a three-column card grid with a 20px gap; the guide card spans the full row. Two columns at 1050px, one at 760px.
  - Closing: a terracotta card inside the container.
  - Pricing: a separate page with a two-column quotation capability and current-options panel.
  - FAQ: a `1fr 1.25fr` grid.
  - Calculators: inputs and result side by side. The quote calculator uses `1.2fr 1fr` with a 32px gap. The small calculators use two equal columns in one bordered box.
- **Breakpoints:** 1050px (tablet) and 760px (mobile). All content grids collapse to one column at 760px. On mobile the showcase stacks the PDF paper under the editor.
- **Spacing scale:** Component spacing uses the 4px scale (`xs` to `5xl`). The layout tokens (`container`, `gutter*`, `section*`) are exact values. Do not round them.
- **Overflow:** `main` uses `overflow-x: clip`.

## Elevation & Depth

Depth is soft and warm. Cards sit on cream with a light warm shadow; the app window floats a little higher.

- **Raised:** `0 1px 2px #2b21180d, 0 10px 30px -12px #2b211826`. Cards, feature windows, resource cards.
- **Floating:** `0 30px 70px -28px #2b211859, 0 2px 6px #2b21180f`. The hero app window and the PDF paper.
- **Dark theme:** raised `0 1px 2px #00000040, 0 14px 34px -14px #00000099`; floating `0 30px 70px -24px #000000b3`.
- **Tilt:** Only the PDF paper in the hero tilts (3deg). Nothing else rotates.
- **Dialog backdrop:** Brown at 60% (`#2b211899`) with a 5px backdrop blur.

## Shapes

Round and soft.

- `rounded.sm` (8px): chips inside mockups, small buttons in mockups.
- `rounded.md` (14px): inputs, mockup rows and inner panels.
- `rounded.lg` (24px): cards, app windows, panels, the dialog.
- `rounded.xl` (36px): pastel section cards and the closing card.
- `rounded.full`: every button, tags, status chips, step badges, the brand mark and the theme toggle.
- Borders are 1px hairlines in `outline`.

## Components

- **Primary button:** Terracotta pill, white `label-md` text, 52px tall, 26px inline padding. On hover it lifts 2px and goes to `primary-hover`.
- **Light button:** White pill with terracotta text, used on the terracotta closing card.
- **Text link:** `label-lg` text with a trailing glyph (`↓` in-page, `→` next page) that slides on hover. No underline.
- **Header:** Sticky and translucent (see Layout). Brand left, navigation centered (`label-lg`), then the login link as an outlined pill and the theme toggle. At 760px and below the navigation moves into a menu panel (`surface`, `rounded.lg`, hairline border).
- **Hero showcase:** A peach `rounded.xl` panel holding the quotation editor (`app-window`) at real size: quote number and draft chip, client and validity fields, three item rows with quantity and price, subtotal, discount and total, and an export action rendered as a non-interactive pill. The generated PDF paper (`QuoteDocument`) overlaps the lower right, tilted 3deg. Item rows appear one by one, then the paper slides in, once.
- **Step card:** One pastel card per workflow step (peach, butter, mint), `rounded.xl`, with a numbered `rounded.full` badge, a `title-lg` title, a `body-md` text and a small real UI snippet from the same sample quote.
- **Feature card:** Lavender and sky `rounded.xl` cards, each with copy on top and an `app-window` mockup below. The history strip is a full-width butter card.
- **Resource card:** A `card` link with a `title-md` title, a `body-sm` description and a `→` that slides on hover; the card lifts 4px on hover.
- **Pricing banner:** A full-width `surface-tint` card with a short sentence and a primary text link.
- **Closing card:** A terracotta `rounded.xl` card inside the container, white `headline-lg` text with an italic clause, and the light button.
- **Footer:** Brand, links and copyright in one row, with a top hairline.
- **Theme toggle:** A 36px circle with a hairline border and a 17px stroke icon. Moon in light, sun in dark.
- **Card:** `surface`, `rounded.lg`, 28px padding, raised shadow.
- **Pricing panel:** A card on the separate pricing route explains quotation capabilities and links to current app conditions. No speculative module cards or invented prices appear on any public page.
- **Tag:** `surface-tint` with violet text, `label-sm`, pill, hairline border.
- **Status chip:** Draft, sent, and accepted pairs only, pill, small text.
- **FAQ:** Native `<details>` and `<summary>` with a hairline under each item. A `+` glyph in terracotta rotates 45 degrees when open.
- **Dialog:** The native `<dialog>` for the PDF preview. `surface-raised`, `rounded.lg`, hairline border, and a `surface-tint` toolbar. Print always renders it in the light theme.
- **Input:** `surface-raised`, `on-surface` text at 19px (`lead`), `rounded.md`, 12px padding. The border is `on-surface-muted` for 3:1 contrast. The label sits above in `label-lg`. Help text sits below in `body-sm`.
- **Calculator:** A bordered box (`rounded.lg`) with inputs on one side and a `tint-panel` result on the other. The result uses `figure-lg`. Results update live in an `aria-live="polite"` region.
- **Tint panel:** `surface-tint` with a hairline border, `rounded.lg`, 24px padding. Calculator results, the guide call to action, and table headers and footers.
- **Error message:** `error` text in `body-md` inside the result panel. It replaces the result while the input is invalid.
- **Breadcrumbs:** `body-sm`, `on-surface-muted`, slash separators. The link to the home page is underlined.
- **Inline link:** On content pages, links inside prose are underlined with a 4px offset. They keep the text color.
- **Content table:** Full width, `body-md`, 15px cell padding, hairline rows, and a `surface-tint` header and footer. It scrolls sideways on mobile.
- **Formula:** A bordered box (`rounded.md`, 20px padding) that holds one formula in weight 600.
- **Skip link:** "Pular para o conteúdo" stays above the viewport until it gets focus.

## Motion

- Transitions are 0.2s and change only `transform`, `background` and `color`. Card lifts and arrow slides use 0.4s `cubic-bezier(.2,.7,.2,1)`.
- **Entrance:** The hero copy fades up once. In the showcase, item rows appear one by one and the PDF paper slides in, all within four seconds, once. Below-the-fold blocks use the `v-reveal` directive: they fade in and lift 24px over 0.8s, staggered 90ms by the directive value, once per page view.
- The theme toggle reveals the new theme with a circular clip from the pointer, 520ms, through the View Transitions API. Without that API, the theme changes at once.
- `prefers-reduced-motion: reduce` turns off all transitions, smooth scroll, the theme reveal, the reveal directive and the showcase entrance. Everything renders in its final position.

## Iconography

The page uses Unicode glyphs instead of an icon library.

- `↓` in-page links. `→` next page and card links. `✓` success. `+` FAQ expand.
- The theme toggle is the only SVG icon. Illustrative search icons use a CSS ring and stem. The mobile menu uses three CSS lines. Mark decorative glyphs with `aria-hidden="true"`.

## Do's and Don'ts

- Do take every color from the tokens. Don't add a hex value near an existing token.
- Do treat the shadow and backdrop values in this file as the only colors outside the tokens.
- Do give every new surface and text pair a `-dark` value. Check contrast in both themes.
- Do use the focus ring as a 3px solid outline with a 5px offset, in `secondary`.
- Don't use `tertiary` (apricot) or a pastel as text, or `outline` for control borders. Form control borders use `on-surface-muted` for 3:1 contrast.
- Do keep real page text at 12px or larger. Only the reduced mockups go smaller.
- Do keep one primary button per section. Pair it with a text link, not a second filled button.
- Do show the product at a readable size where it explains a feature. Don't shrink the app window below 12px text.
- Do end headlines and step titles with a period, for example "Monte seu catálogo."
- Don't add gradients, glows, grain, marquees, giant wordmarks or rotating decorations.
- Don't add an icon library or emoji. Use the glyph set.
- Do use `error` only for validation messages.
- Do set input text to 16px or larger, so mobile browsers do not zoom on focus.
- Do underline links inside prose on content pages. Don't underline navigation or buttons.
- Do write all copy in Brazilian Portuguese.
- Don't put eyebrow labels above headings, decorative numbering, or badges and chips that do not reflect real state. Workflow steps keep their numbers because the order is real.
- Do respect `prefers-reduced-motion` for every new animation.
