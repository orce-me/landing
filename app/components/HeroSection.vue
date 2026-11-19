<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-copy wrap">
      <h1 id="hero-title">
        Crie orçamentos e envie <br class="desktop-break" />
        <em>em PDF com a sua marca.</em>
      </h1>
      <p>
        Reúna produtos e serviços do seu catálogo, ajuste os valores e gere uma
        proposta com os dados da sua empresa.
      </p>
      <div class="hero-actions">
        <a class="button primary" :href="appUrl"
          >Criar meu primeiro orçamento
          <span class="arrow-dot" aria-hidden="true">→</span></a
        >
        <a class="arrow-link see-how" href="#como-funciona"
          >Ver como funciona <span aria-hidden="true">↓</span></a
        >
      </div>
    </div>
    <div class="hero-product wrap">
      <QuoteDemo />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  padding-top: var(--spacing-5xl);
  padding-bottom: var(--spacing-section);
}
/* DESIGN.md, Elevation & Depth: the hero wash. */
.hero::before {
  content: '';
  position: absolute;
  inset: 34% 0 0;
  z-index: -1;
  background:
    radial-gradient(
      60% 70% at 25% 60%,
      var(--color-primary-soft),
      transparent 70%
    ),
    radial-gradient(
      50% 60% at 80% 45%,
      var(--color-tertiary-soft),
      transparent 70%
    );
}
.hero-copy {
  max-width: 860px;
  text-align: center;
  animation: fade-up 0.8s var(--ease-soft) both;
}
h1 {
  margin: 0;
  font-size: var(--typography-display-font-size);
  font-weight: var(--typography-display-font-weight);
  letter-spacing: var(--typography-display-letter-spacing);
  line-height: var(--typography-display-line-height);
}
.hero-copy > p {
  max-width: 580px;
  margin: var(--spacing-2xl) auto 0;
  font-size: var(--typography-lead-font-size);
  line-height: var(--typography-lead-line-height);
  color: var(--color-on-surface-muted);
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg) var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
}
.see-how {
  font-size: var(--typography-label-lg-font-size);
  font-weight: var(--typography-label-lg-font-weight);
}
.see-how:hover span {
  transform: translateY(3px);
}
.hero-product {
  margin-top: var(--spacing-5xl);
}
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}
@media (max-width: 1050px) {
  h1 {
    font-size: 52px;
    letter-spacing: -1.6px;
  }
}
@media (max-width: 760px) {
  .desktop-break {
    display: none;
  }
  .hero {
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-section-mobile);
  }
  .hero-copy {
    text-align: left;
  }
  h1 {
    font-size: 40px;
    letter-spacing: -1.2px;
  }
  .hero-copy > p {
    margin-left: 0;
    font-size: var(--typography-body-lg-font-size);
  }
  .hero-actions {
    justify-content: flex-start;
  }
  .hero-product {
    margin-top: var(--spacing-4xl);
  }
}
@media (max-width: 380px) {
  h1 {
    font-size: 34px;
  }
}
</style>
