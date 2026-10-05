---
name: design-md
description: Use when changing anything visual in the orce-me landing page, such as CSS, colors, fonts, spacing, radii, shadows, dark mode, or a new section or component, or when editing DESIGN.md itself.
---

# DESIGN.md

## Overview

`DESIGN.md` at the repo root is the source of truth for the visual design. It follows the [google-labs-code DESIGN.md spec](https://github.com/google-labs-code/design.md) (version `alpha`). The YAML tokens are normative. The prose tells you how to apply them.

The CSS is older than DESIGN.md and does not agree with it. Many CSS colors are near a token but are not equal to it. When the CSS and DESIGN.md disagree, DESIGN.md is correct.

## Before you write CSS

1. Read all of `DESIGN.md`.
2. For each value you need, find its token. Copy the value from DESIGN.md. Do not copy it from nearby CSS.
3. If no token fits, add the token to DESIGN.md first. Then use it.

## Token to CSS map

| Token                                       | CSS today                                                                                     |
| ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `on-surface-muted`, `on-surface-muted-dark` | `var(--muted)`. It switches with the theme.                                                   |
| `outline`, `outline-dark`                   | `var(--line)`. It switches with the theme.                                                    |
| `primary`                                   | `var(--green)` in light only. In dark, `--green` is `#bcd798`, which is not a token.          |
| All other tokens                            | The hex value from DESIGN.md in `main.css`, plus a `[data-theme='dark']` rule in `theme.css`. |

## Done means

A visual change is complete only when all of these are true:

1. Every color, size, radius, and shadow in your diff matches a DESIGN.md value.
2. Each light color rule you added has a dark rule with the `-dark` token, or it uses `--muted` or `--line`.
3. DESIGN.md records everything new in the same change:
   - A new component gets a `components` entry with `backgroundColor` and `textColor`, so the linter checks its contrast. It also gets a `-dark` entry and a line under `## Components`.
   - A new token goes in the YAML and in the prose of its section.
   - A changed value changes in the YAML and in the prose.
4. `npx @google/design.md lint DESIGN.md` reports 0 errors and 0 warnings.
5. `npx prettier --check <changed files>` passes.
6. You checked light and dark at 1240px, 1050px, and 760px (`pnpm dev`, port 5174). If you cannot render the page, say so in your report.
7. Your report lists any drift you found in CSS rules you did not change. Do not fix that drift without a request.

## Linter traps

- Quote every hex value in the YAML. An unquoted `#174c3c` is a YAML comment.
- Component sub-tokens are `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`. Others, such as `borderColor`, cause a warning. Write a hairline as a `divider` with `backgroundColor` and `height: 1px`. Describe borders in prose.
- A component must reference each color token. If not, `orphaned-tokens` warns.
- The spec has no theme modes. Use `-dark` tokens and `-dark` components.
- Dimensions are `px`, `em`, or `rem`. `rounded.full` is `9999px`, not `50%`.
- The linter ignores custom top-level YAML keys. Put breakpoints, shadows, and motion in prose.

## Common mistakes

| Mistake                                                 | Fix                                                                      |
| ------------------------------------------------------- | ------------------------------------------------------------------------ |
| Copy `#bbd595` from the dark `em` rule                  | Use `primary-dark` (`#c1dca2`).                                          |
| Add a component but not change DESIGN.md                | Add the YAML entry, the `-dark` entry, and the prose in the same change. |
| Add a light color rule only                             | Add the `[data-theme='dark']` rule in `theme.css`.                       |
| Use `#81a669` for the focus ring                        | Use `secondary` in light and `primary-dark` in dark.                     |
| Set real page text below 10px                           | Use `label-sm` (10px) or larger. Only the mockups go smaller.            |
| Change `primary` or `neutral-dark` but not the meta tag | Update `theme-color` in `nuxt.config.ts` and `useTheme.js`.              |
