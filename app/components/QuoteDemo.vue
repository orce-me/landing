<template>
  <figure class="quote-gallery">
    <div class="gallery-stage" data-nosnippet>
      <div class="gallery-rail">
        <img
          class="screen"
          src="/screens/hero-inbox.webp"
          width="2560"
          height="1600"
          fetchpriority="high"
          decoding="async"
          alt="Tela de orçamentos do orce.me: orçamentos agrupados por status, com validade, data e valor, e o orçamento nº 15 aberto ao lado com cliente, total, validade e itens."
        />
      </div>
    </div>
  </figure>
</template>

<style scoped>
.quote-gallery {
  margin: 0;
  min-width: 0;
}
/* The product frame around a real screen of the app. */
.gallery-stage {
  position: relative;
  padding: var(--spacing-sm);
  border-radius: var(--rounded-xl);
  border: 1px solid var(--color-outline);
  background: color-mix(in srgb, var(--color-surface-raised) 70%, transparent);
  box-shadow: var(--shadow-floating);
}
.gallery-rail {
  overflow: hidden;
  border-radius: var(--rounded-lg);
  border: 1px solid var(--color-outline);
  background: var(--color-surface-raised);
  animation: quotation-layouts 4s ease-in-out forwards;
}
.screen {
  display: block;
  width: 100%;
  height: auto;
}
@keyframes quotation-layouts {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  15% {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 760px) {
  .gallery-stage {
    padding: var(--spacing-xs);
  }
}
@media (prefers-reduced-motion: reduce) {
  .gallery-rail {
    animation: none;
  }
}
</style>
