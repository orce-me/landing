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
          <span class="approval">Aceito</span>
        </div>
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
    radial-gradient(
        circle at 1px 1px,
        color-mix(in srgb, var(--color-on-secondary) 22%, transparent) 1px,
        transparent 1.5px
      )
      0 0 / 24px 24px,
    var(--color-stage);
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
  position: relative;
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
.approval {
  position: absolute;
  z-index: 2;
  top: 300px;
  left: 50%;
  margin-left: 40px;
  padding: var(--spacing-xs) var(--spacing-md);
  border: 3px solid var(--color-primary);
  border-radius: var(--rounded-md);
  color: var(--color-primary);
  font-family: var(--typography-display-font-family), Arial, sans-serif;
  font-size: var(--typography-title-lg-font-size);
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  transform: translateZ(60px) rotate(-14deg);
  mix-blend-mode: multiply;
  animation: approval 0.45s var(--ease-editorial) 2.6s both;
}
:root[data-theme='dark'] .approval {
  mix-blend-mode: normal;
}
@keyframes approval {
  from {
    opacity: 0;
    transform: translateZ(60px) rotate(-14deg) scale(2.2);
  }
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
  .approval {
    animation: none;
  }
}
</style>
