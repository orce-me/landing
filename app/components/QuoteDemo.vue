<script setup>
const layouts = ['essential', 'editorial', 'compact']
</script>

<template>
  <figure
    class="quote-gallery"
    role="img"
    aria-label="Exemplos ilustrativos de orçamentos"
  >
    <div class="gallery-stage" data-nosnippet>
      <div class="gallery-rail" aria-hidden="true">
        <div v-for="layout in layouts" :key="layout" class="layout-example">
          <QuoteDocument :layout="layout" />
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
  animation: quotation-layouts 4s ease-in-out forwards;
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
@keyframes quotation-layouts {
  to {
    transform: translateX(-620px) rotate(-4deg);
  }
}
@media (max-width: 760px) {
  .gallery-rail {
    grid-template-columns: repeat(3, 280px);
    padding: var(--spacing-3xl) var(--spacing-xl);
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
}
</style>
