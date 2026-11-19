---
version: alpha
name: orce.me
description: Visual identity of orce.me. Bright and friendly. A white, airy page, near-black text, light-grey cards and one vivid emerald for actions and key words, set in a rounded geometric sans, with the real product shown large.
colors:
  # Light theme
  primary: '#12805c'
  primary-hover: '#0d6b4c'
  on-primary: '#ffffff'
  primary-soft: '#e8f6ef'
  on-primary-soft: '#0b5a40'
  secondary: '#12805c'
  tertiary: '#ffc93c'
  tertiary-soft: '#fff6dc'
  neutral: '#ffffff'
  surface: '#f6f6f8'
  surface-raised: '#ffffff'
  surface-tint: '#f0f0f3'
  band: '#ebebef'
  on-surface: '#16171c'
  on-surface-muted: '#5b5d66'
  outline: '#e7e7ec'
  status-draft: '#fbeec4'
  on-status-draft: '#6b5300'
  status-sent: '#e3ecfd'
  on-status-sent: '#234e9a'
  status-accepted: '#dcf2e6'
  on-status-accepted: '#16613f'
  error: '#b3261e'
  # Dark theme
  primary-dark: '#3ccf91'
  primary-hover-dark: '#62dca8'
  on-primary-dark: '#05301f'
  primary-soft-dark: '#122a20'
  on-primary-soft-dark: '#9ff0c8'
  secondary-dark: '#3ccf91'
  tertiary-soft-dark: '#2a2414'
  neutral-dark: '#0f1112'
  surface-dark: '#17191b'
  surface-raised-dark: '#1d2023'
  surface-tint-dark: '#202326'
  band-dark: '#24282b'
  on-surface-dark: '#eef0f2'
  on-surface-muted-dark: '#a3a8ae'
  outline-dark: '#2b2f33'
  status-draft-dark: '#463e27'
  on-status-draft-dark: '#eedc9f'
  status-sent-dark: '#1f3253'
  on-status-sent-dark: '#c9dbfb'
  status-accepted-dark: '#173a2a'
  on-status-accepted-dark: '#b9ecd2'
  error-dark: '#ffb4a8'
typography:
  display:
    fontFamily: Figtree Variable
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -2.2px
  display-accent:
    fontFamily: Figtree Variable
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -2.2px
  headline-lg:
    fontFamily: Figtree Variable
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -1.8px
  headline-lg-accent:
    fontFamily: Figtree Variable
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -1.8px
  headline-md:
    fontFamily: Figtree Variable
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -1.4px
  headline-md-accent:
    fontFamily: Figtree Variable
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -1.4px
  headline-page:
    fontFamily: Figtree Variable
    fontSize: 46px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -1.4px
  headline-page-accent:
    fontFamily: Figtree Variable
    fontSize: 46px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -1.4px
  title-xl:
    fontFamily: Figtree Variable
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.4px
  title-lg:
    fontFamily: Figtree Variable
    fontSize: 21px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: Figtree Variable
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: -0.2px
  figure:
    fontFamily: Figtree Variable
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
  figure-lg:
    fontFamily: Figtree Variable
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.2px
  brand:
    fontFamily: Figtree Variable
    fontSize: 24px
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
    lineHeight: 1.6
  body-md:
    fontFamily: Figtree Variable
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Figtree Variable
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
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
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
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
  section: 112px
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
    size: 28px
    rounded: '{rounded.md}'
  brand-dot:
    textColor: '{colors.tertiary}'
    typography: '{typography.brand}'
  focus-ring:
    textColor: '{colors.secondary}'
  focus-ring-dark:
    textColor: '{colors.secondary-dark}'
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.md}'
    height: 48px
    padding: 22px
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
  button-primary-dark:
    backgroundColor: '{colors.primary-dark}'
    textColor: '{colors.on-primary-dark}'
  button-primary-dark-hover:
    backgroundColor: '{colors.primary-hover-dark}'
  button-quiet:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.md}'
    height: 44px
    padding: 18px
  button-quiet-dark:
    backgroundColor: '{colors.surface-dark}'
    textColor: '{colors.on-surface-dark}'
  soft-pill:
    backgroundColor: '{colors.primary-soft}'
    textColor: '{colors.on-primary-soft}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
  soft-pill-dark:
    backgroundColor: '{colors.primary-soft-dark}'
    textColor: '{colors.on-primary-soft-dark}'
  sun-wash:
    backgroundColor: '{colors.tertiary-soft}'
    textColor: '{colors.on-surface}'
  sun-wash-dark:
    backgroundColor: '{colors.tertiary-soft-dark}'
    textColor: '{colors.on-surface-dark}'
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.xl}'
    padding: 28px
  card-dark:
    backgroundColor: '{colors.surface-dark}'
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
    textColor: '{colors.on-primary-soft}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 8px
  tag-dark:
    backgroundColor: '{colors.surface-tint-dark}'
    textColor: '{colors.on-primary-soft-dark}'
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
    backgroundColor: '{colors.primary-soft}'
    textColor: '{colors.on-surface}'
    typography: '{typography.headline-lg}'
    rounded: '{rounded.xl}'
  closing-card-dark:
    backgroundColor: '{colors.primary-soft-dark}'
    textColor: '{colors.on-surface-dark}'
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

The identity is **bright and friendly**: an airy white page, light type, one vivid emerald and the real product shown large. It should feel light, modern and easy, like a tool a small business owner would enjoy opening.

- **Mood:** White space, near-black text, light-grey cards, and emerald only where it matters: actions, the key words of a headline and small product details.
- **Product first:** The hero and the feature cards show real screens of the app (WebP captures in `public/screens/`, taken from the web app with sample data for a heater business): the quote inbox with its side panel, the product list, the quote items and the home dashboard. The workflow snippets reuse the same sample data (orçamento nº 14 for Rafael Souza, R$ 3.529,00).
- **Voice:** Plain, concrete and kind. Headlines say what the product does. Use at most one catch phrase, in the closing card.
- **Language:** All copy is Brazilian Portuguese (`lang="pt-BR"`). Currency uses `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.
- **Content pages:** The calculators and the guide put reading and input first. They use a narrower column, larger body text, underlined links, and no mockups.
- **Brand:** The wordmark is lowercase `orce.me` in Figtree 700 with a sun-yellow period. The mark is the same drawing as in the web app (`BrandMark.vue`, `public/favicon.svg`): an emerald rounded square lit from the top, holding the white ring of the `o` with a sun-yellow dot above its shoulder, the dot that also ends the wordmark. The header and the footer show it beside the wordmark.

## Colors

White carries the page; light greys group content; emerald is the single brand color. A soft emerald wash and a soft sun wash warm the hero and the closing card. Never introduce a second saturated hue.

**Light theme**

- `primary` Emerald (#12805c) with white `on-primary` (4.9:1) and hover #0d6b4c. Buttons, accent words in headlines, links that act.
- `primary-soft` (#e8f6ef) with `on-primary-soft` (#0b5a40). Small pills, the closing card and the hero wash.
- `secondary` equals emerald and is used for the focus ring.
- `tertiary` Sun (#ffc93c) is decorative only: the wordmark period. `tertiary-soft` (#fff6dc) is the warm half of the hero wash.
- `neutral` (#ffffff) is the page. `surface` (#f6f6f8) is the grey card. `surface-raised` (#ffffff) is the product window and workflow snippets. `surface-tint` (#f0f0f3) and `band` (#ebebef) are panels and mockup fills.
- `on-surface` (#16171c) and `on-surface-muted` (#5b5d66) carry text. `outline` (#e7e7ec) is the hairline.
- Quote-status pairs keep semantic amber, blue and green. `error` is #b3261e.

**Dark theme**

- The page is near-black (#0f1112) with surfaces #17191b and #1d2023, text #eef0f2 and muted #a3a8ae. Hairlines are #2b2f33.
- Emerald brightens to #3ccf91 with dark `on-primary-dark` text. The soft wash becomes a deep green (#122a20).

**Shared rules**

- Emerald on white only for text 18px and larger or weight 600 and up; body links use `on-surface` with an underline.
- Status chips use only their semantic pairs.
- The `theme-color` is `primary` in light and `neutral-dark` in dark. Keep the initial meta tag in `nuxt.config.ts` in sync.

## Typography

One family, **Figtree** (variable), self-hosted through Fontsource; `app.vue` preloads it. Headlines are large and light (weight 400) with tight tracking; UI and titles use 500 to 600.

- **Display:** The hero `h1` is 64px, weight 400, line height 1.08, tracking -2.2px. The accent words are the same size and weight, in `primary`.
- **Headlines:** Section `h2` titles use `headline-md` (44px, 400). The closing card uses `headline-lg` (52px). Content pages use `headline-page` (46px).
- **Accent:** `<em>` is upright and colored `primary`. Use it for the key words of a headline, once per headline.
- **Titles:** `title-md` (18px, 500) for card and step titles, `title-lg` (21px) for feature cards, `title-xl` (24px) for content sections.
- **Figures:** Prices and totals use `figure` (22px, 600) and `figure-lg` (40px). Use tabular numbers and keep currency on one line.
- **Body:** `lead` (19px) for the hero paragraph and content intros, `body-lg` (17px) for supporting text, `body-md` (15px) for descriptions, `body-sm` (14px) for help text and the app window.
- **Labels:** `label-lg` (15px, 500) for navigation, `label-md` (15px, 600) for buttons, `label-sm` (12px, 500) for notes, pills and the footer.
- **Responsive sizes:** At 1050px and below, `display` is 52px (-1.6px) and `headline-lg` 44px. At 760px and below, `display` is 40px (-1.2px), `headline-lg` 34px, `headline-md` 32px (-0.8px), `headline-page` 34px, and the hero paragraph 17px. Below 380px, `display` is 34px.
- **Product screens:** Captures are taken at 2x and saved as WebP. Each `<img>` declares `width` and `height` (so the layout never shifts) and a descriptive `alt` that names the screen and what it shows. Recapture them whenever the app UI changes; never edit a capture by hand.

## Layout

Each page is a single column. Content sits in a centered container, `.wrap`, with a 1200px maximum width. Content pages narrow the container to `container-content` (1040px) and keep prose at the `measure` (780px).

- **Gutters:** 40px on desktop, 28px at 1050px and below, 20px at 760px and below.
- **Sections:** 112px block padding on desktop, 64px on mobile. Anchored sections have a 100px `scroll-margin-top` so the sticky header never covers their headings.
- **Header:** 76px tall on desktop, 64px on mobile. White and sticky, with a bottom hairline once the page scrolls. Brand left, navigation centered, then the quiet login button, the primary button and the theme toggle. Below 380px the brand shrinks and the gaps tighten.
- **Grids:**
  - Hero: centered copy (max 760px) over the product frame, which spans the container. A soft emerald and sun wash sits behind the lower half of the hero.
  - Workflow: a centered heading over three grey step cards with a 20px gap. One column at 1050px.
  - Features: a centered heading over two grey feature cards and a full-width history card.
  - Pricing banner: one full-width grey card between features and resources.
  - Resources: a three-column card grid with a 20px gap; the guide card spans the full row. Two columns at 1050px, one at 760px.
  - Closing: a soft emerald card inside the container.
  - Pricing: a separate page with a two-column quotation capability and current-options panel.
  - FAQ: a `1fr 1.25fr` grid.
  - Calculators: inputs and result side by side. The quote calculator uses `1.2fr 1fr` with a 32px gap. The small calculators use two equal columns in one bordered box.
- **Breakpoints:** 1050px (tablet) and 760px (mobile). All content grids collapse to one column at 760px. The product frame hides the sidebar at 1050px and stacks the PDF under the editor at 760px.
- **Spacing scale:** Component spacing uses the 4px scale (`xs` to `5xl`). The layout tokens (`container`, `gutter*`, `section*`) are exact values. Do not round them.
- **Overflow:** `main` uses `overflow-x: clip`.

## Elevation & Depth

Depth is light and clean. Grey cards sit flat on white; app windows and documents float with a soft neutral shadow.

- **Raised:** `0 1px 2px #16171c0a, 0 8px 24px -10px #16171c1f`. App windows inside cards, resource cards on hover.
- **Floating:** `0 30px 80px -30px #16171c40, 0 2px 8px #16171c0d`. The hero product frame.
- **Dark theme:** raised `0 1px 2px #00000066, 0 10px 30px -12px #000000aa`; floating `0 30px 80px -24px #000000cc`.
- **Washes:** The hero and the closing card use soft radial washes of `primary-soft` and `tertiary-soft` only. No other gradients.
- **Tilt:** Nothing tilts.
- **Dialog backdrop:** Ink at 60% (`#16171c99`) with a 5px backdrop blur.

## Shapes

- `rounded.sm` (6px): chips and small buttons inside workflow snippets.
- `rounded.md` (10px): page buttons, inputs, workflow snippets.
- `rounded.lg` (16px): app windows, panels, the dialog, resource cards.
- `rounded.xl` (24px): grey section cards, the product frame and the closing card.
- `rounded.full`: pills, status chips, step badges, the arrow circle in buttons and the theme toggle.
- Borders are 1px hairlines in `outline`.

## Components

- **Primary button:** Emerald, white `label-md` text, 48px tall, 22px inline padding, `rounded.md`. A trailing `→` sits in a 22px translucent white circle. On hover it goes to `primary-hover` and the arrow slides 3px.
- **Quiet button:** `surface` grey with `on-surface` text, `rounded.md`, 44px tall. The header login.
- **Text link:** `label-lg` text with a trailing glyph (`↓` in-page, `→` next page) that slides on hover. No underline.
- **Header:** See Layout. Navigation links turn `primary` on hover. At 760px and below the navigation and the primary button move into a menu panel (`surface-raised`, `rounded.lg`, hairline border).
- **Hero:** Centered `display` headline with emerald accent words, a centered `lead` paragraph, the primary button, and a `label-sm` note below it. The product frame follows.
- **Product frame:** A translucent white `rounded.xl` frame (8px padding, hairline, floating shadow) holding a real capture of the quote inbox in a `rounded.lg` hairline window. It rises in once.
- **Step card:** A grey `rounded.xl` card per workflow step with an emerald numbered badge, a `title-lg` title, a `body-md` text and a small white UI snippet from the same sample quote.
- **Feature card:** Grey `rounded.xl` cards with copy on top and a real screen that enters from the right and is cut by the card edges (top-left radius, hairline on the top and left, raised shadow); the screen lifts 6px on hover. The follow-up card spans the row with the home dashboard beside its copy.
- **Resource card:** A grey `rounded.lg` link with a `title-md` title, a `body-sm` description and an emerald `→`; it turns white with the raised shadow on hover. The guide card spans the row.
- **Pricing banner:** A full-width grey card with a short title and an emerald text link.
- **Closing card:** A `primary-soft` `rounded.xl` card with a sun wash, a centered `headline-lg` with emerald accent words, and the primary button.
- **Footer:** Brand, links and copyright in one row, with a top hairline.
- **Focus ring:** A 3px `secondary` outline with a 5px offset on every interactive element.
- **Soft pill:** `primary-soft` with `on-primary-soft` text, `label-sm`, pill. Mockup states such as the active sidebar item.
- **Theme toggle:** A 36px circle with a hairline border and a 17px stroke icon. Moon in light, sun in dark.
- **Card:** `surface`, `rounded.xl`, 28px padding, flat.
- **Pricing panel:** A card on the separate pricing route explains quotation capabilities and links to current app conditions. No speculative module cards or invented prices appear on any public page.
- **Tag:** `surface-tint` with deep emerald (`on-primary-soft`) text, `label-sm`, pill, hairline border.
- **Status chip:** Draft, sent, and accepted pairs only, pill, small text.
- **FAQ:** Native `<details>` and `<summary>` with a hairline under each item. A `+` glyph in emerald rotates 45 degrees when open.
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
- **Entrance:** The hero copy fades up once and the product frame rises in within four seconds, once. Below-the-fold blocks use the `v-reveal` directive: they fade in and lift 24px over 0.8s, staggered 90ms by the directive value, once per page view.
- The theme toggle reveals the new theme with a circular clip from the pointer, 520ms, through the View Transitions API. Without that API, the theme changes at once.
- `prefers-reduced-motion: reduce` turns off all transitions, smooth scroll, the theme reveal, the reveal directive and the product entrance. Everything renders in its final position.

## Iconography

The page uses Unicode glyphs instead of an icon library.

- `↓` in-page links. `→` buttons, next page and card links. `✓` success. `+` FAQ expand.
- The theme toggle and the brand mark (`BrandMark.vue`) are the only SVGs. Illustrative search icons use a CSS ring and stem. The mobile menu uses three CSS lines. Mark decorative glyphs with `aria-hidden="true"`.

## Do's and Don'ts

- Do take every color from the tokens. Don't add a hex value near an existing token.
- Do treat the shadow and backdrop values in this file as the only colors outside the tokens.
- Do give every new surface and text pair a `-dark` value. Check contrast in both themes.
- Do use the focus ring as a 3px solid outline with a 5px offset, in `secondary`.
- Don't use `tertiary` as text, or `outline` for control borders. Form control borders use `on-surface-muted` for 3:1 contrast.
- Do keep real page text at 12px or larger. Text inside product captures is part of the image.
- Do keep one primary button per section, plus the header button. Pair it with a text link, not a second filled button.
- Do show the product at a readable size where it explains a feature.
- Do end headlines and step titles with a period, for example "Monte seu catálogo."
- Don't add a second saturated color, heavy weights (above 700), grain, marquees, giant wordmarks or rotating decorations.
- Don't add an icon library or emoji. Use the glyph set.
- Do use `error` only for validation messages.
- Do set input text to 16px or larger, so mobile browsers do not zoom on focus.
- Do underline links inside prose on content pages. Don't underline navigation or buttons.
- Do write all copy in Brazilian Portuguese.
- Don't put eyebrow labels above headings, decorative numbering, or badges and chips that do not reflect real state. Workflow steps keep their numbers because the order is real.
- Don't claim prices, free plans, customer counts or ratings that the product does not publish.
- Do respect `prefers-reduced-motion` for every new animation.
