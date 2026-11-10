import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import test from 'node:test'

const component = (name) => readFileSync(`app/components/${name}.vue`, 'utf8')

test('audience scrolls continuously with an accessible reduced-motion alternative', () => {
  const audience = component('AudienceSection')
  assert.match(audience, /audience-track/)
  assert.match(audience, /aria-hidden/)
  assert.match(audience, /@keyframes audience-scroll/)
  assert.match(audience, /prefers-reduced-motion: reduce/)
  assert.match(audience, /animation-play-state: paused/)
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

test('hero is a static example without editing, preview or redundant labels', () => {
  const demo = component('QuoteDemo')
  const document = component('QuoteDocument')
  assert.doesNotMatch(
    demo,
    /QuotePreview|editable|v-model|Prévia ilustrativa|Pronto para impressionar|Seu catálogo\. Sua marca/,
  )
  assert.match(demo, /Um PDF com a identidade da sua empresa/)
  assert.doesNotMatch(
    document,
    /<input|Visualizar PDF|updateQuantity|Alterações salvas/,
  )
  assert.match(document, /R\$ 4\.520,00/)
  assert.doesNotMatch(
    component('HeroSection'),
    /Sem refazer|em PDF com a sua marca|Sistema de orçamentos para pequenos negócios/,
  )
})
