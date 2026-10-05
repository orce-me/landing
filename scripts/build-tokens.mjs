// Builds app/assets/css/tokens.css from the YAML front matter of DESIGN.md.
// `pnpm tokens` writes the file. `pnpm tokens:check` fails when it is stale.
import { readFileSync, writeFileSync } from 'node:fs'
import { parse } from 'yaml'

const source = new URL('../DESIGN.md', import.meta.url)
const target = new URL('../app/assets/css/tokens.css', import.meta.url)
const prefixes = {
  colors: 'color',
  rounded: 'rounded',
  spacing: 'spacing',
  typography: 'typography',
}

const frontMatter = readFileSync(source, 'utf8').match(
  /^---\n([\s\S]*?)\n---\n/,
)
if (!frontMatter) throw new Error('DESIGN.md has no YAML front matter.')
const tokens = parse(frontMatter[1])

const kebab = (name) => name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)

// A `{group.name}` reference becomes the custom property of that token.
function cssValue(value) {
  const reference = /^\{(\w+)\.([\w-]+)\}$/.exec(value)
  if (!reference) return value
  const [, group, name] = reference
  if (!prefixes[group] || !(name in tokens[group])) {
    throw new Error(`DESIGN.md has a broken reference: ${value}`)
  }
  return `var(--${prefixes[group]}-${name})`
}

function declarations(group) {
  return Object.entries(tokens[group] ?? {}).flatMap(([name, value]) => {
    const property = `--${prefixes[group]}-${name}`
    if (typeof value !== 'object') return [`${property}: ${cssValue(value)};`]
    return Object.entries(value).map(([key, part]) => {
      const css = key === 'fontFamily' ? `'${part}'` : cssValue(part)
      return `${property}-${kebab(key)}: ${css};`
    })
  })
}

// A color `x-dark` replaces the color `x` in the dark theme.
function darkDeclarations() {
  return Object.keys(tokens.colors)
    .filter((name) => name.endsWith('-dark'))
    .map((name) => {
      const base = name.slice(0, -'-dark'.length)
      if (!(base in tokens.colors)) {
        throw new Error(`DESIGN.md has ${name} but no ${base} color.`)
      }
      return `--color-${base}: var(--color-${name});`
    })
}

const indent = (lines, depth) => lines.map((line) => '  '.repeat(depth) + line)
const css = [
  '/* Generated from DESIGN.md by scripts/build-tokens.mjs. Do not edit. */',
  ':root {',
  ...indent(Object.keys(prefixes).flatMap(declarations), 1),
  '}',
  '/* Print always uses the light theme. */',
  '@media screen {',
  "  :root[data-theme='dark'] {",
  ...indent(darkDeclarations(), 2),
  '  }',
  '}',
  '',
].join('\n')

if (process.argv.includes('--check')) {
  if (readFileSync(target, 'utf8') !== css) {
    console.error('tokens.css is stale. Run `pnpm tokens`.')
    process.exit(1)
  }
} else {
  writeFileSync(target, css)
}
