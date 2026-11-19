<script setup>
const layouts = ['essential', 'editorial', 'compact']
const stage = ref(null)
let frame = 0

function canTilt() {
  return (
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function tilt(event) {
  if (!stage.value || !canTilt()) return
  const rect = stage.value.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    stage.value?.style.setProperty('--tilt-x', `${(-y * 6).toFixed(2)}deg`)
    stage.value?.style.setProperty('--tilt-y', `${(x * 6).toFixed(2)}deg`)
  })
}

function reset() {
  cancelAnimationFrame(frame)
  stage.value?.style.setProperty('--tilt-x', '0deg')
  stage.value?.style.setProperty('--tilt-y', '0deg')
}
</script>

<template>
  <figure
    class="quote-gallery"
    role="img"
    aria-label="Exemplos ilustrativos de orçamentos"
  >
    <div
      ref="stage"
      class="gallery-stage"
      data-nosnippet
      @pointermove="tilt"
      @pointerleave="reset"
    >
      <div class="gallery-rail" aria-hidden="true">
        <div class="deck">
          <div v-for="layout in layouts" :key="layout" class="layout-example">
            <QuoteDocument :layout="layout" />
          </div>
        </div>
      </div>
      <div class="chip chip-total" aria-hidden="true">
        <small>Total do orçamento</small><b>R$ 650,00</b>
      </div>
      <div class="chip chip-pdf" aria-hidden="true">
        <span class="check">✓</span>PDF pronto para enviar
      </div>
    </div>
  </figure>
</template>

<style scoped>
.quote-gallery {
  margin: 0;
  min-width: 0;
}
.gallery-stage {
  --tilt-x: 0deg;
  --tilt-y: 0deg;
  position: relative;
  height: 580px;
  overflow: hidden;
  border-radius: var(--rounded-lg);
  background:
    repeating-linear-gradient(
      to right,
      transparent 0 39px,
      color-mix(in srgb, var(--color-outline) 55%, transparent) 39px 40px
    ),
    repeating-linear-gradient(
      to bottom,
      transparent 0 39px,
      color-mix(in srgb, var(--color-outline) 55%, transparent) 39px 40px
    ),
    var(--color-band);
  border: 1px solid var(--color-outline);
  perspective: 1400px;
}
.gallery-rail {
  position: absolute;
  inset: 0;
  display: grid;
  justify-items: center;
  align-items: start;
  padding-top: var(--spacing-3xl);
  transform-style: preserve-3d;
  animation: quotation-layouts 4s ease-in-out forwards;
}
.deck {
  display: grid;
  place-items: center;
  transform-style: preserve-3d;
  transform: rotateX(var(--tilt-x)) rotateY(var(--tilt-y));
  transition: transform 0.5s var(--ease-editorial);
}
.layout-example {
  grid-area: 1 / 1;
  width: 300px;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-md);
  box-shadow: var(--shadow-floating);
  overflow: hidden;
  animation: 1.6s var(--ease-editorial) 0.5s both;
}
.layout-example:nth-child(1) {
  transform: translate(-150px, 26px) rotate(-7deg);
  animation-name: fan-left;
}
.layout-example:nth-child(2) {
  transform: translate(150px, 18px) rotate(6deg);
  animation-name: fan-right;
}
.layout-example:nth-child(3) {
  transform: translateY(-14px) translateZ(40px);
  animation-name: fan-center;
}
.chip {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-lg);
  box-shadow: var(--shadow-raised);
  font-size: var(--typography-label-sm-font-size);
  animation: chip-in 0.9s var(--ease-editorial) both;
}
.chip-total {
  top: var(--spacing-5xl);
  left: var(--spacing-2xl);
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  transform: rotate(-3deg);
  animation-delay: 1.8s;
}
.chip-total small {
  color: var(--color-on-surface-muted);
}
.chip-total b {
  font-size: var(--typography-figure-font-size);
  font-weight: var(--typography-figure-font-weight);
  letter-spacing: var(--typography-figure-letter-spacing);
  white-space: nowrap;
}
.chip-pdf {
  right: var(--spacing-3xl);
  bottom: var(--spacing-3xl);
  transform: rotate(2deg);
  animation-delay: 2.2s;
}
.check {
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border-radius: var(--rounded-full);
  background: var(--color-status-accepted);
  color: var(--color-on-status-accepted);
}
@keyframes quotation-layouts {
  from {
    opacity: 0;
    transform: translateY(36px) rotateX(14deg);
  }
  30% {
    opacity: 1;
  }
}
@keyframes fan-left {
  from {
    transform: translateY(0) rotate(0);
  }
}
@keyframes fan-right {
  from {
    transform: translateY(0) rotate(0);
  }
}
@keyframes fan-center {
  from {
    transform: translateY(0) translateZ(40px);
  }
}
@keyframes chip-in {
  from {
    opacity: 0;
    translate: 0 16px;
  }
}
@media (max-width: 760px) {
  .gallery-stage {
    height: 470px;
  }
  .gallery-rail {
    padding-top: var(--spacing-xl);
  }
  .deck {
    scale: 0.78;
    transform-origin: top center;
  }
  .layout-example:nth-child(1) {
    transform: translate(-100px, 24px) rotate(-7deg);
  }
  .layout-example:nth-child(2) {
    transform: translate(100px, 16px) rotate(6deg);
  }
  .chip-total {
    top: var(--spacing-3xl);
    left: var(--spacing-lg);
  }
  .chip-pdf {
    right: var(--spacing-lg);
    bottom: var(--spacing-lg);
  }
}
@media (prefers-reduced-motion: reduce) {
  .gallery-rail {
    animation: none;
  }
  .deck {
    transform: none;
    transition: none;
  }
  .layout-example,
  .chip {
    animation: none;
  }
}
</style>
