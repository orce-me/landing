---
name: design-md
description: Use when changing anything visual in the orce-me landing page, such as CSS, colors, fonts, spacing, radii, shadows, dark mode, or a new section or component, or when editing DESIGN.md itself.
---

# DESIGN.md

## Overview

`DESIGN.md` at the repo root is the source of truth for the visual design. It follows the [google-labs-code DESIGN.md spec](https://github.com/google-labs-code/design.md) (version `alpha`). The YAML tokens are normative. The prose tells you how to apply them.

`scripts/build-tokens.mjs` turns the YAML tokens into custom properties in `app/assets/css/tokens.css`. Do not edit `tokens.css` by hand. `app/assets/css/main.css` holds base and shared styles. Each component keeps its own styles in a `<style scoped>` block. All of them use only the custom properties for token values.

## Before you write CSS

1. Read all of `DESIGN.md`.
2. For each value you need, find its token and use its custom property.
3. If no token fits, add the token to DESIGN.md first. Then run `pnpm tokens` and use the new property.

## Token to CSS map

| DESIGN.md                             | CSS                                                                                               |
| ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `colors.x`                            | `var(--color-x)`. In the dark theme it becomes `x-dark` by itself.                                |
| `colors.x-dark`                       | `var(--color-x-dark)`. It never changes. Use it only on dark islands, such as `.closing`.         |
| `typography.x.fontSize`               | `var(--typography-x-font-size)`. The same pattern applies to each typography property.            |
| `rounded.x`, `spacing.x`              | `var(--rounded-x)`, `var(--spacing-x)`                                                            |
| Shadows, glows, orbit rings, backdrop | `--shadow-*`, `--glow-*`, `--orbit`, `--backdrop`. `main.css` defines them and their dark values. |
| Mockup text (6px to 9px)              | Literal sizes. The mockups have their own scale.                                                  |
| Responsive and glyph sizes            | Literal sizes. Take responsive sizes from the Typography prose in DESIGN.md.                      |

## Done means

A visual change is complete only when all of these are true:

1. Colors, radii, and type in your diff use the custom properties. A hex value is allowed only in the shadow, glow, orbit, and backdrop properties in `main.css`.
2. DESIGN.md records everything new in the same change:
   - A new component gets a `components` entry with `backgroundColor` and `textColor`, so the linter checks its contrast. It also gets a `-dark` entry and a line under `## Components`.
   - A new token goes in the YAML and in the prose of its section. A new themed color also gets an `x-dark` partner.
   - A changed value changes in the YAML and in the prose.
3. `pnpm tokens:check` passes. If it fails, run `pnpm tokens`.
4. `pnpm design:lint` reports 0 errors and 0 warnings.
5. `pnpm format:check` passes.
6. You checked each page you changed in light and dark at 1240px, 1050px, and 760px (`pnpm dev`, port 5174). The pages are the landing page, the four calculators, and the guide. If you cannot render the page, say so in your report.
7. Your report lists any drift you found in CSS rules you did not change. Do not fix that drift without a request.

## Linter traps

- Quote every hex value in the YAML. An unquoted `#174c3c` is a YAML comment.
- Component sub-tokens are `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`. Others, such as `borderColor`, cause a warning. Write a hairline as a `divider` with `backgroundColor` and `height: 1px`. Describe borders in prose.
- A component must reference each color token. If not, `orphaned-tokens` warns.
- The spec has no theme modes. Use `-dark` tokens and `-dark` components. `build-tokens.mjs` fails when `x-dark` has no `x`.
- Dimensions are `px`, `em`, or `rem`. `rounded.full` is `9999px`, not `50%`.
- The linter ignores custom top-level YAML keys. Put breakpoints, shadows, and motion in prose.

## Common mistakes

| Mistake                                                     | Fix                                                                              |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Write a token hex value in CSS                              | Use its custom property, for example `var(--color-secondary)`.                   |
| Edit `tokens.css`                                           | Edit DESIGN.md, then run `pnpm tokens`.                                          |
| Add a `[data-theme='dark']` rule for a token color          | Delete it. `tokens.css` swaps the color.                                         |
| Use `--color-primary-dark` to style the dark theme          | Use `--color-primary`. Keep `-dark` properties for dark islands.                 |
| Add a component but not change DESIGN.md                    | Add the YAML entry, the `-dark` entry, and the prose in the same change.         |
| Set real page text below 10px                               | Use `label-sm` (10px) or larger. Only the mockups go smaller.                    |
| Change `primary` or `neutral-dark` but not `nuxt.config.ts` | Update the initial `theme-color` meta tag there. `useTheme.js` reads the tokens. |
