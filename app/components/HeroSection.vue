<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="hero wrap" aria-labelledby="hero-title">
    <div class="hero-copy">
      <span class="eyebrow">ORÇAMENTOS PARA PEQUENOS NEGÓCIOS</span>
      <h1 id="hero-title">Crie orçamentos.<br /><em>Envie em PDF.</em></h1>
      <p>
        Reúna produtos e serviços do seu catálogo, ajuste os valores e gere uma
        proposta com os dados da sua empresa. Tudo no mesmo lugar.
      </p>
      <a class="button primary" :href="appUrl">Criar meu primeiro orçamento</a>
    </div>
    <QuoteDemo />
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1.08fr;
  align-items: center;
  gap: var(--spacing-4xl);
  padding-top: var(--spacing-5xl);
  padding-bottom: var(--spacing-5xl);
}
.hero-copy {
  position: relative;
  z-index: 1;
}
.eyebrow {
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-md-font-weight);
  color: var(--color-secondary);
  letter-spacing: 1.2px;
}
h1 {
  font-size: var(--typography-display-font-size);
  font-weight: var(--typography-display-font-weight);
  letter-spacing: var(--typography-display-letter-spacing);
  line-height: var(--typography-display-line-height);
  margin: var(--spacing-2xl) 0;
}
h1 em {
  font-size: var(--typography-display-accent-font-size);
  letter-spacing: var(--typography-display-accent-letter-spacing);
}
.hero-copy > p {
  max-width: 410px;
  font-size: var(--typography-lead-font-size);
  line-height: var(--typography-lead-line-height);
  color: var(--color-on-surface-muted);
}
.hero-copy > .button {
  margin-top: var(--spacing-3xl);
}
@media (max-width: 1050px) {
  .hero {
    gap: var(--spacing-2xl);
  }
  h1 {
    font-size: 52px;
  }
  h1 em {
    font-size: 62px;
  }
}
@media (max-width: 760px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: var(--spacing-4xl);
    gap: var(--spacing-4xl);
  }
  h1 {
    font-size: 57px;
    letter-spacing: -2.8px;
  }
  h1 em {
    font-size: 66px;
  }
  .hero-copy > p {
    font-size: var(--typography-body-lg-font-size);
  }
}
@media (max-width: 380px) {
  h1 {
    font-size: 49px;
  }
  h1 em {
    font-size: 58px;
  }
}
</style>
