<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="hero wrap" aria-labelledby="hero-title">
    <div class="hero-copy">
      <h1 id="hero-title">Crie orçamentos.<br /><em>Envie em PDF.</em></h1>
      <p>
        Reúna produtos e serviços do seu catálogo, ajuste os valores e gere uma
        proposta com os dados da sua empresa.
      </p>
      <div class="hero-actions">
        <a class="button primary" :href="appUrl"
          >Criar meu primeiro orçamento</a
        >
        <a class="arrow-link see-how" href="#como-funciona"
          >Ver como funciona <span aria-hidden="true">↓</span></a
        >
      </div>
    </div>
    <QuoteDemo />
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  align-items: center;
  gap: var(--spacing-5xl);
  padding-top: var(--spacing-4xl);
  padding-bottom: var(--spacing-5xl);
}
.hero-copy {
  animation: fade-up 0.8s var(--ease-soft) both;
}
h1 {
  margin: 0;
  font-size: var(--typography-display-font-size);
  font-weight: var(--typography-display-font-weight);
  letter-spacing: var(--typography-display-letter-spacing);
  line-height: var(--typography-display-line-height);
}
h1 em {
  font-size: var(--typography-display-accent-font-size);
  letter-spacing: var(--typography-display-accent-letter-spacing);
}
.hero-copy > p {
  max-width: 440px;
  margin-top: var(--spacing-2xl);
  font-size: var(--typography-lead-font-size);
  line-height: var(--typography-lead-line-height);
  color: var(--color-on-surface-muted);
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
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
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}
@media (max-width: 1050px) {
  .hero {
    grid-template-columns: 1fr;
    gap: var(--spacing-4xl);
  }
  h1,
  h1 em {
    font-size: 60px;
    letter-spacing: -1.6px;
  }
}
@media (max-width: 760px) {
  .hero {
    padding-top: var(--spacing-2xl);
    gap: var(--spacing-3xl);
  }
  h1,
  h1 em {
    font-size: 44px;
    letter-spacing: -1.2px;
  }
  .hero-copy > p {
    font-size: var(--typography-body-lg-font-size);
  }
}
@media (max-width: 380px) {
  h1,
  h1 em {
    font-size: 38px;
  }
}
</style>
