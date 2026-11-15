<script setup>
const paused = ref(false)
const layouts = [
  { id: 'essential', name: 'Essencial' },
  { id: 'editorial', name: 'Editorial' },
  { id: 'compact', name: 'Compacto' },
]
</script>

<template>
  <figure
    class="quote-gallery"
    :class="{ paused }"
    aria-labelledby="gallery-caption"
  >
    <div class="gallery-stage" data-nosnippet>
      <div class="gallery-rail" aria-hidden="true">
        <div v-for="layout in layouts" :key="layout.id" class="layout-example">
          <span class="layout-name">{{ layout.name }} · prévia</span>
          <QuoteDocument :layout="layout.id" />
        </div>
      </div>
    </div>
    <figcaption id="gallery-caption">
      <div>
        <strong>Layouts em preparação</strong>
        <p>
          Exemplos de apresentação do seu orçamento. Ainda não disponíveis no
          produto.
        </p>
      </div>
      <button
        type="button"
        class="motion-control"
        :aria-pressed="paused"
        @click="paused = !paused"
      >
        {{ paused ? 'Retomar animação' : 'Pausar animação' }}
      </button>
    </figcaption>
  </figure>
</template>

<style scoped>
.quote-gallery {
  margin: 0;
  min-width: 0;
}
.gallery-stage {
  position: relative;
  height: 520px;
  overflow: hidden;
  border-radius: var(--rounded-lg);
  background: var(--color-band);
  border: 1px solid var(--color-outline);
  mask-image: linear-gradient(to bottom, var(--color-band) 96%, transparent);
}
.gallery-rail {
  display: grid;
  grid-template-columns: repeat(3, 310px);
  gap: var(--spacing-2xl);
  width: max-content;
  padding: var(--spacing-3xl);
  transform: rotate(-4deg);
  transform-origin: top left;
  animation: quotation-layouts 18s ease-in-out infinite alternate;
}
.layout-example {
  background: var(--color-surface-raised);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-md);
  box-shadow: var(--shadow-floating);
  overflow: hidden;
}
.layout-example:nth-child(2) {
  transform: translateY(var(--spacing-4xl));
}
.layout-example:nth-child(3) {
  transform: translateY(var(--spacing-lg));
}
.layout-name {
  display: block;
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--typography-label-sm-font-size);
  background: var(--color-surface-tint);
  color: var(--color-secondary);
  border-bottom: 1px solid var(--color-outline);
}
figcaption {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg) 0;
}
figcaption strong {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
}
figcaption p {
  max-width: 320px;
  margin-top: var(--spacing-xs);
  font-size: var(--typography-label-sm-font-size);
  line-height: var(--typography-label-sm-line-height);
  color: var(--color-on-surface-muted);
}
.motion-control {
  flex-shrink: 0;
  background: var(--color-surface);
  color: var(--color-on-surface);
  border: 1px solid var(--color-on-surface-muted);
  padding: var(--spacing-sm) var(--spacing-md);
  min-height: 44px;
  border-radius: var(--rounded-md);
  font-size: var(--typography-label-sm-font-size);
}
.paused .gallery-rail,
.gallery-stage:hover .gallery-rail {
  animation-play-state: paused;
}
@keyframes quotation-layouts {
  to {
    transform: translateX(-620px) rotate(-4deg);
  }
}
@media (max-width: 1050px) {
  figcaption {
    flex-wrap: wrap;
  }
}
@media (max-width: 760px) {
  .gallery-rail {
    grid-template-columns: repeat(3, 280px);
    padding: var(--spacing-3xl) var(--spacing-xl);
  }
  figcaption {
    flex-wrap: nowrap;
  }
  figcaption p {
    max-width: 220px;
  }
}
@media (max-width: 380px) {
  figcaption {
    flex-wrap: wrap;
  }
}
@media (prefers-reduced-motion: reduce) {
  .gallery-rail {
    animation: none;
    transform: none;
    width: 100%;
    padding: var(--spacing-xl);
    grid-template-columns: 1fr;
  }
  .gallery-stage {
    height: auto;
    mask-image: none;
  }
  .layout-example:nth-child(n) {
    transform: none;
  }
  .motion-control {
    display: none;
  }
}
</style>
