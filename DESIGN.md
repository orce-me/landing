---
version: alpha
name: orce.me
description: Visual identity of orce.me. Paper, ink and stamp. Ink type on warm paper, a vermilion stamp color for actions, cobalt for the product stage, and a highlighter accent, with a characterful grotesque for display and a mono for figures.
colors:
  # Light theme
  primary: '#ff5a36'
  primary-hover: '#ff7652'
  on-primary: '#141413'
  secondary: '#2f45ff'
  on-secondary: '#ffffff'
  tertiary: '#d6f26a'
  on-tertiary: '#141413'
  stage: '#2f45ff'
  neutral: '#f2eee5'
  surface: '#f9f7f2'
  surface-raised: '#ffffff'
  surface-tint: '#ebe6db'
  band: '#e4ded1'
  on-surface: '#141413'
  on-surface-muted: '#5a564d'
  outline: '#d6cfc0'
  inverse-surface: '#141413'
  on-inverse-surface: '#f2eee5'
  status-draft: '#f6e7b0'
  on-status-draft: '#6b5300'
  status-sent: '#dfe3ff'
  on-status-sent: '#2433b8'
  status-accepted: '#dcefc9'
  on-status-accepted: '#2f5a17'
  error: '#b3261e'
  # Dark theme
  primary-dark: '#ff6b47'
  primary-hover-dark: '#ff8a6b'
  on-primary-dark: '#141413'
  secondary-dark: '#a3adff'
  stage-dark: '#2536d6'
  neutral-dark: '#121210'
  surface-dark: '#1c1b18'
  surface-raised-dark: '{colors.surface-dark}'
  surface-tint-dark: '#26241f'
  band-dark: '#1f1d1a'
  on-surface-dark: '#f2eee5'
  on-surface-muted-dark: '#aba596'
  outline-dark: '#38352e'
  inverse-surface-dark: '#f2eee5'
  on-inverse-surface-dark: '#141413'
  status-draft-dark: '#463e27'
  on-status-draft-dark: '#eedc9f'
  status-sent-dark: '#262f63'
  on-status-sent-dark: '#cdd3ff'
  status-accepted-dark: '#2c4224'
  on-status-accepted-dark: '#c9e6ad'
  error-dark: '#ffb4a8'
typography:
  display:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 132px
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: -4px
  display-accent:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 132px
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: -4px
  numeral:
    fontFamily: Geist Mono Variable
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -4px
  marquee:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -2.4px
  headline-lg:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 88px
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: -3px
  headline-lg-accent:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 88px
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: -3px
  headline-md:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -1.8px
  headline-md-accent:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -1.8px
  title-lg:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.6px
  title-md:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 19px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.3px
  figure:
    fontFamily: Geist Mono Variable
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.8px
  brand:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -1.2px
  body-lg:
    fontFamily: Geist Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Geist Variable
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Geist Variable
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.7
  label-lg:
    fontFamily: Geist Variable
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
  label-md:
    fontFamily: Geist Variable
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.3
  headline-page:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -2px
  headline-page-accent:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -2px
  title-xl:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.6px
  figure-lg:
    fontFamily: Geist Mono Variable
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.5px
  lead:
    fontFamily: Geist Variable
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  label-sm:
    fontFamily: Geist Mono Variable
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 6px
  md: 10px
  lg: 20px
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
  highlight:
    backgroundColor: '{colors.tertiary}'
    textColor: '{colors.on-tertiary}'
    rounded: '{rounded.sm}'
  brand-mark:
    textColor: '{colors.on-surface}'
    size: 26px
    rounded: '{rounded.full}'
  brand-dot:
    textColor: '{colors.primary}'
    typography: '{typography.brand}'
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    height: 48px
    padding: 24px
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
  button-primary-dark:
    backgroundColor: '{colors.primary-dark}'
    textColor: '{colors.on-primary-dark}'
  button-primary-dark-hover:
    backgroundColor: '{colors.primary-hover-dark}'
  button-ink:
    backgroundColor: '{colors.inverse-surface}'
    textColor: '{colors.on-inverse-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    height: 48px
    padding: 24px
  button-ink-dark:
    backgroundColor: '{colors.inverse-surface-dark}'
    textColor: '{colors.on-inverse-surface-dark}'
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
  ink-slab:
    backgroundColor: '{colors.inverse-surface}'
    textColor: '{colors.on-inverse-surface}'
  ink-slab-dark:
    backgroundColor: '{colors.inverse-surface-dark}'
    textColor: '{colors.on-inverse-surface-dark}'
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
  closing-band:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.headline-lg}'
  closing-band-dark:
    backgroundColor: '{colors.primary-dark}'
    textColor: '{colors.on-primary-dark}'
  closing-accent:
    backgroundColor: '{colors.on-primary}'
    textColor: '{colors.primary}'
    typography: '{typography.headline-lg-accent}'
    rounded: '{rounded.md}'
  closing-accent-dark:
    backgroundColor: '{colors.on-primary-dark}'
    textColor: '{colors.primary-dark}'
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
  quotation-stage:
    backgroundColor: '{colors.stage}'
    textColor: '{colors.on-secondary}'
    rounded: '{rounded.lg}'
  quotation-stage-dark:
    backgroundColor: '{colors.stage-dark}'
    textColor: '{colors.on-secondary}'
  site-header:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-lg}'
    height: 76px
  site-header-dark:
    backgroundColor: '{colors.neutral-dark}'
    textColor: '{colors.on-surface-dark}'
  trade-marquee:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.marquee}'
  trade-marquee-dark:
    backgroundColor: '{colors.primary-dark}'
    textColor: '{colors.on-primary-dark}'
  step-numeral:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.secondary}'
    typography: '{typography.numeral}'
  step-numeral-dark:
    backgroundColor: '{colors.neutral-dark}'
    textColor: '{colors.secondary-dark}'
  index-row:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.on-surface}'
    typography: '{typography.title-lg}'
    padding: 28px
  index-row-dark:
    backgroundColor: '{colors.neutral-dark}'
    textColor: '{colors.on-surface-dark}'
  index-row-hover:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
  index-row-hover-dark:
    backgroundColor: '{colors.primary-dark}'
    textColor: '{colors.on-primary-dark}'
  footer-wordmark:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.on-surface}'
    typography: '{typography.brand}'
  footer-wordmark-dark:
    backgroundColor: '{colors.neutral-dark}'
    textColor: '{colors.on-surface-dark}'
---

# orce.me

This file is the source of truth for the visual design of the orce.me landing page. The YAML tokens above are the normative values. The prose below tells you why the values exist and how to apply them.

The spec has no theme modes. Tokens with the `-dark` suffix are the dark theme values. A token `x-dark` replaces the token `x` in the dark theme. A token without a `-dark` partner, such as `tertiary`, is the same in both themes. A component with the `-dark` suffix changes only the properties it lists. All other properties come from the base component.

## Overview

orce.me helps small Brazilian businesses (installers, service providers, shops that sell and install) turn a catalog into professional quotes. The site has a quotation-focused landing page, separate pricing and help pages, free calculators, and a guide.

The identity is **paper, ink and stamp**. A quote is a document that gets approved, so the site borrows from print: warm paper, near-black ink, a vermilion stamp for every action, cobalt as the color of the product stage, and a highlighter that marks the words that matter. It is confident and graphic, never a soft SaaS gradient.

- **Mood:** Bold and tactile. Big grotesque headlines, flat solid color blocks, mono figures like a receipt, and hairlines like a ruled form.
- **Voice:** Lead with concrete functionality. Headlines are short and end with a period. Use at most one catch phrase, in the closing block.
- **Product proof:** Illustrative documents (a quotation, a catalog, a history list) show the product instead of describing it.
- **Language:** All copy is Brazilian Portuguese (`lang="pt-BR"`). Currency uses `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.
- **Content pages:** The calculators and the guide put reading and input first. They use a narrower column, larger body text, underlined links, and no mockups.
- **Brand:** The wordmark is lowercase `orce.me` in Bricolage Grotesque 700 with a vermilion period. The mark is an ink ring with a small vermilion dot at the top right.

## Colors

Ink on paper carries the reading. Vermilion is the stamp: buttons, the marquee, the closing slab and hover fills. Cobalt is the stage that holds product illustrations, plus small labels and the focus ring. The highlighter marks one phrase per headline. Large areas are only paper, ink, vermilion or cobalt; never mix two accents in one block.

**Light theme**

- `primary` Vermilion (#ff5a36) with ink `on-primary` (#141413) and hover #ff7652. Text on vermilion is always ink, never white.
- `secondary` Cobalt (#2f45ff) with white `on-secondary`. Small labels, step numerals and the focus ring. `stage` (#2f45ff) is the quotation stage.
- `tertiary` Highlighter (#d6f26a) with ink `on-tertiary`. Only behind text, as the `<em>` highlight.
- `neutral` Paper (#f2eee5) is the page. `surface` (#f9f7f2) and `surface-raised` (#ffffff) are cards and documents. `surface-tint` (#ebe6db) and `band` (#e4ded1) are panels and mockup fills.
- `on-surface` Ink (#141413) and `on-surface-muted` (#5a564d) carry text. `outline` (#d6cfc0) is the hairline.
- `inverse-surface` Ink (#141413) with paper `on-inverse-surface` forms the features slab and the ink button.
- Quote-status pairs keep semantic amber, cobalt and green. `error` is #b3261e.

**Dark theme**

- The page is warm black (#121210) with surfaces #1c1b18 and #26241f, paper text (#f2eee5) and muted #aba596. Hairlines are #38352e.
- Vermilion brightens to #ff6b47 (hover #ff8a6b) and keeps ink text. Cobalt labels become #a3adff and the stage deepens to #2536d6.
- The inverse slab flips to paper (#f2eee5) with ink text, so the features section is a light block in the dark theme.

**Shared rules**

- The closing slab is vermilion in both themes, with ink text and the ink button.
- Status chips use only their semantic pairs.
- The `theme-color` is `primary` in light and `neutral-dark` in dark. Keep the initial meta tag in `nuxt.config.ts` in sync.

## Typography

Three families, all self-hosted through Fontsource; `app.vue` preloads the two files that render first.

- **Bricolage Grotesque** (variable, optical sizes) for display, headlines, titles and the wordmark. Weight 600, 700 for the brand only.
- **Geist** (variable) for body, navigation and buttons.
- **Geist Mono** (variable) for figures, prices, step numerals and small notes (`label-sm`).

- **Display:** The hero `h1` is 132px, weight 600, line height 0.9, tracking -4px. The `-accent` tokens match their base so a highlighted phrase keeps the same size.
- **Headlines:** Section `h2` titles use `headline-md` (56px). The closing slab uses `headline-lg` (88px). Content pages use `headline-page` (52px).
- **Titles:** `title-md` (19px) for card and step titles, `title-lg` (26px) for index rows and feature cards, `title-xl` (28px) for content sections and the pricing link.
- **Figures:** Prices and totals use `figure` (Geist Mono, 22px) and `figure-lg` (40px). Keep currency on one line (`white-space: nowrap`).
- **Body:** `lead` (18px) for the hero paragraph and content intros, `body-lg` (16px) for supporting text, `body-md` (14px) for descriptions, `body-sm` (13px) for help text.
- **Labels:** `label-lg` (14px, 500) for navigation, `label-md` (14px, 600) for buttons, `label-sm` (Geist Mono 11px) for notes, footer text and disclaimers.
- **Highlight:** `<em>` is not italic. It renders upright with a `tertiary` highlighter behind it (`rounded.sm`, 0.08em inline padding, `box-decoration-break: clone`). Use it for one phrase in a headline. In the closing slab it inverts to an ink block with vermilion text (`closing-accent`).
- **Numerals and marquee:** Workflow step numbers use `numeral` (Geist Mono, 64px). The marquee uses `marquee` (64px).
- **Responsive sizes:** At 1050px and below, `display` is 96px (-4px), `headline-lg` is 64px and `headline-md` is 44px. At 760px and below, `display` is 60px (-2.6px), `headline-lg` 44px (-1.8px), `headline-md` 36px (-1.4px), `headline-page` 36px, the marquee 40px, numerals 44px, and the hero paragraph 16px. Below 380px, `display` is 50px. The footer wordmark scales with the viewport (`clamp(88px, 22vw, 300px)`).
- **Mockup text:** The illustrative mockups use their own reduced scale (6px to 9px). That scale imitates a screenshot. Do not reuse it for real page text.

## Layout

Each page is a single column. Content sits in a centered container, `.wrap`, with a 1240px maximum width. The landing page stacks full-width sections. Content pages narrow the container to `container-content` (1040px) and keep prose at the `measure` (780px).

- **Gutters:** 40px on desktop, 28px at 1050px and below, 22px at 760px and below.
- **Sections:** 112px block padding on desktop, 64px on mobile. Anchored sections have a 100px `scroll-margin-top` so the sticky header never covers their headings.
- **Header:** 76px tall on desktop, 64px on mobile. Below 380px the brand is 22px and the gaps tighten to 8px. It sticks to the top with a translucent `neutral` ground (92% mix) and a 14px backdrop blur, and has a bottom hairline.
- **Grids:**
  - Hero: the headline spans the full container, with no eyebrow or status line above it. Below it, supporting copy and CTA sit at the top of a `0.75fr 1.25fr` grid beside the quotation stage.
  - Trade marquee: a full-bleed vermilion band, 110% wide and rotated -2deg, clipped by `main`.
  - Workflow: a `0.9fr 2fr` split, with a sticky heading on the left and three stacked step rows on the right.
  - Features: an ink slab with a two-column card grid and a full-width vermilion history card. It becomes one column at 760px. Each card pairs one function with an illustrative UI.
  - Pricing: a separate page with a two-column quotation capability and current-options panel. The homepage has only a contextual pricing link.
  - FAQ: a `1fr 1.25fr` grid.
  - Resources: an editorial index of full-width rows (title, description, arrow) separated by hairlines.
  - Calculators: inputs and result side by side. The quote calculator uses `1.2fr 1fr` with a 32px gap. The small calculators use two equal columns in one bordered box.
- **Breakpoints:** 1050px (tablet) and 760px (mobile). A 1450px query only adds hero padding. All content grids collapse to one column at 760px. The preview gallery keeps a compact layered composition, and the closing CTA stacks below the heading.
- **Spacing scale:** Component spacing uses the 4px scale (`xs` to `5xl`). The layout tokens (`container`, `gutter*`, `section*`) are exact values. Do not round them.
- **Overflow:** `main` uses `overflow-x: clip`, so the rotated marquee can extend past the viewport without a horizontal scroll.

## Elevation & Depth

Depth comes from flat color blocks first: paper page, ink slab, vermilion slab, cobalt stage. Shadows are reserved for paper that sits on top of something (cards on the ink slab, documents on the stage) and are tinted with ink in the light theme.

- **Raised:** `0 1px 2px #1414130d, 0 12px 32px -14px #14141333`. Cards, the catalog and proposal windows, the history list.
- **Floating:** `0 40px 80px -30px #14141366`. Only the documents on the quotation stage.
- **Dark theme:** raised `0 1px 2px #00000040, 0 18px 40px -16px #000000aa`; floating `0 40px 90px -30px #000000cc`.
- **Tilt:** Illustrative documents fan from -7deg to 6deg. The hero highlight and the approval stamp are rotated (-3deg and -14deg). The trade marquee band is rotated -2deg. Nothing else tilts.
- **Dialog backdrop:** Ink at 65% (`#141413a6`) with a 5px backdrop blur.

## Shapes

Soft rectangles and pills. Large radii on blocks, full pills on every control.

- `rounded.sm` (6px): the text highlight, tags, small mockup buttons.
- `rounded.md` (10px): inputs, the closing accent block, the approval stamp, mockup windows.
- `rounded.lg` (20px): cards, the quotation stage, panels, the dialog.
- `rounded.full`: every button, the login link, status chips, the brand mark and the theme toggle.
- Borders are 1px hairlines in `outline`. Workflow rules are 1px `on-surface`. The brand ring is 3px.

## Components

- **Primary button:** Vermilion pill, ink `label-md` text, 48px tall, 24px inline padding. On hover it lifts 2px and goes to `primary-hover`. The same in dark with the `-dark` pair.
- **Ink button:** Ink pill with paper text, used on the vermilion closing slab. In dark it flips to a paper pill with ink text.
- **Text link:** `label-lg` text with a trailing glyph (`↓` for in-page, `→` for next page) that slides on hover. No underline.
- **Header:** Sticky and translucent (see Layout). Brand left, navigation centered (`label-lg`, 24px gap) with an underline that grows on hover, then the login pill (1px ink outline, fills with ink on hover) and the theme toggle. At 760px and below the navigation moves into a menu panel (`surface`, `rounded.lg`, hairline border).
- **Hero highlight:** The last word of the hero (`PDF.`) is an `<em>` highlight rotated -3deg that lands with a short stamp animation after the headline rises.
- **Quotation stage:** A cobalt `stage` block (`rounded.lg`) with a 24px dot grid in `on-secondary` at 22%. Three quotation documents with the same sample company, items, totals and conditions fan out from a stack in a perspective scene and tilt up to 6 degrees toward a fine pointer. A vermilion "Aceito" stamp (the product's accepted status) lands on the front document. No other chips or captions.
- **Trade marquee:** A full-bleed vermilion band, rotated -2deg, with business types in `marquee` ink type separated by `✳`, scrolling slowly left. The list is duplicated for a seamless loop; the second copy is `aria-hidden`.
- **Step numeral:** `numeral` (Geist Mono) in `secondary` beside each workflow step. A 1px ink rule above the step draws from left to right when the row enters the viewport. On hover the numeral slides 8px right.
- **Features slab:** A full-width `inverse-surface` block (ink in light, paper in dark). Catalog and proposal cards are `surface` with `rounded.lg`; the history card is a vermilion block with ink text holding a `surface-raised` list. The illustration disclaimer is `label-sm` mono at 72% of `on-inverse-surface`.
- **Index row:** A resource link row with a `title-lg` title, a `body-md` description and a `→` glyph. On hover a vermilion fill rises from the bottom, all text turns ink, and the arrow slides 8px right.
- **Pricing link:** A homepage row with a single `title-xl` underlined link and a sliding `→`.
- **Closing slab:** A full-width vermilion block in both themes, 120px block padding (72px on mobile), a `headline-lg` statement in ink with the `closing-accent` clause (ink block, vermilion text), and the ink button aligned to the baseline on the right. A huge ink `✳` at 12% opacity rotates slowly at the right edge.
- **Footer wordmark:** A giant lowercase `orce.me` in ink (paper in dark) with the vermilion period, above the footer links. Footer notes use `label-sm` mono.
- **Theme toggle:** A 36px circle with a hairline border and a 17px stroke icon (1.6 stroke, round caps). Show the moon in light and the sun in dark.
- **Card:** `surface`, `rounded.lg`, 24px padding, raised shadow. Feature cards use 32px copy insets and 24px mockup insets.
- **Pricing panel:** A card on the separate pricing route explains quotation capabilities and links to current app conditions. No speculative module cards or invented prices appear on any public page.
- **Tag:** `surface-tint` with cobalt text, `label-sm`, `rounded.sm`, a hairline border.
- **Status chip:** Draft, sent, and accepted pairs only, `rounded.full`, small text.
- **FAQ:** Native `<details>` and `<summary>` with a hairline under each item. A `+` glyph in cobalt rotates 45 degrees when open.
- **Mockups:** The documents, catalog, proposal and history list are illustrations of the product. They use the reduced mockup scale, mono figures and the floating or raised shadow. They are not editable.
- **Dialog:** The native `<dialog>` for the PDF preview. `surface-raised`, `rounded.lg`, hairline border, and a `surface-tint` toolbar. Print always renders it in the light theme.
- **Input:** `surface-raised`, `on-surface` text at 18px (`lead`), `rounded.md`, 12px padding. The border is `on-surface-muted` for 3:1 contrast. The label sits above in `label-lg`. Help text sits below in `body-sm`, `on-surface-muted`.
- **Calculator:** A bordered box (`rounded.lg`) with inputs on one side and a `tint-panel` result on the other. The result value uses `figure-lg`. Results update live in an `aria-live="polite"` region.
- **Tint panel:** `surface-tint` with a hairline border, `rounded.lg`, 24px padding. Calculator results, the guide call to action, and table headers and footers.
- **Error message:** `error` text in `body-md` inside the result panel. It replaces the result while the input is invalid.
- **Breadcrumbs:** `body-sm`, `on-surface-muted`, slash separators. The link to the home page is underlined.
- **Inline link:** On content pages, links inside prose are underlined with a 4px offset. They keep the text color.
- **Content table:** Full width, `body-md`, 15px cell padding, hairline rows, and a `surface-tint` header and footer. It scrolls sideways on mobile.
- **Formula:** A bordered box (`rounded.md`, 20px padding) that holds one formula in weight 500.
- **Skip link:** "Pular para o conteúdo" stays above the viewport until it gets focus.

## Motion

- Transitions are 0.2s and change only `transform` and `background`. Editorial hovers (index rows, nav underline, step numerals, arrows) use 0.5s `cubic-bezier(.2,.7,.2,1)`.
- **Entrance:** Hero headline lines rise out of a clipped mask (0.9s, staggered 100ms), then the `PDF.` highlight lands like a stamp (0.5s, from 1.6x and -12deg). The approval stamp on the stage lands the same way at 2.6s. Below-the-fold blocks use the `v-reveal` directive: they fade in and lift 28px over 0.9s with the same curve, staggered 90ms by the directive value, once per page view.
- The trade marquee loops every 40 seconds, and the closing `✳` rotates once every 30 seconds. Both stop under reduced motion.
- The quotation deck rises and fans out once over four seconds, then rests. It has no visible playback controls, layout-name strips, or development-status captions. Reduced motion renders all examples statically. The gallery illustrates quotation output without making template-availability claims.
- The theme toggle reveals the new theme with a circular clip from the pointer, 520ms, `cubic-bezier(.2,.7,.2,1)`, through the View Transitions API. Without that API, the theme changes at once.
- `prefers-reduced-motion: reduce` turns off all transitions, smooth scroll, the theme reveal, the reveal directive, the marquee loop, the stamps, the rotating asterisk and the pointer tilt. Everything renders in its final position.

## Iconography

The page uses Unicode glyphs instead of an icon library. The glyph set is part of the identity.

- `↓` in-page links. `→` index rows and the pricing link.
- `✳` marquee separators and the closing decoration.
- `✓` success and plan features. `+` FAQ expand. `☰` the mobile menu.
- The theme toggle is the only SVG icon. Illustrative search icons use a CSS ring and stem. The mobile menu uses three CSS lines to avoid missing-glyph boxes on systems without the hamburger character. Mark decorative glyphs with `aria-hidden="true"`.

## Do's and Don'ts

- Do take every color from the tokens. Don't add a hex value near an existing token. Reuse the token.
- Do treat the shadow and backdrop values in this file as the only colors outside the tokens.
- Do give every new surface and text pair a `-dark` value. Check contrast in both themes.
- Do use the focus ring as a 3px solid outline with a 5px offset, in `secondary`. That is cobalt in light and pale cobalt in dark.
- Don't use `primary` (vermilion) or `tertiary` (highlighter) as a text color on paper, or `outline` for control borders. Vermilion text appears only on an ink block. Form control borders use `on-surface-muted` to get 3:1 contrast.
- Do keep real page text at 10px or larger. Only the illustrative mockups go smaller.
- Do keep one primary button per section. Pair it with a text link, not a second filled button.
- Do highlight one phrase per headline at most. Don't highlight body text, labels, or buttons.
- Do end headlines and step titles with a period, for example "Monte seu catálogo."
- Do tilt only the elements listed under Elevation & Depth.
- Don't add shadows outside the raised and floating levels. Don't use gradients or glows on surfaces; color blocks are flat.
- Don't add an icon library or emoji. Use the glyph set.
- Do use `error` only for validation messages.
- Do set input text to 16px or larger, so mobile browsers do not zoom on focus.
- Do underline links inside prose on content pages. Don't underline navigation or buttons.
- Do write all copy in Brazilian Portuguese.
- Don't put eyebrow labels above landing headings, decorative `01 / 02` numbering (workflow steps are a real order and keep theirs), or badges and chips that do not reflect real state. Don't add a subtitle that repeats its heading.
- Do respect `prefers-reduced-motion` for every new animation.
