<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="hero wrap" aria-labelledby="hero-title">
    <h1 id="hero-title">
      <span class="line"><span>Crie orçamentos.</span></span>
      <span class="line line-accent"><em>Envie em PDF.</em></span>
    </h1>
    <div class="hero-body">
      <div class="hero-copy hero-fade">
        <p>
          Reúna produtos e serviços do seu catálogo, ajuste os valores e gere
          uma proposta com os dados da sua empresa.
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
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: var(--spacing-4xl);
  padding-bottom: var(--spacing-section);
}
h1 {
  margin: var(--spacing-3xl) 0 var(--spacing-5xl);
  font-size: var(--typography-display-font-size);
  font-weight: var(--typography-display-font-weight);
  letter-spacing: var(--typography-display-letter-spacing);
  line-height: var(--typography-display-line-height);
}
.line {
  display: block;
  overflow: clip;
  padding-bottom: 0.08em;
  margin-bottom: -0.08em;
}
.line > * {
  display: inline-block;
  animation: line-rise 0.9s var(--ease-editorial) both;
}
.line-accent {
  padding-left: 1.45em;
}
.line-accent > em {
  font-size: var(--typography-display-accent-font-size);
  letter-spacing: var(--typography-display-accent-letter-spacing);
  line-height: var(--typography-display-accent-line-height);
  padding-right: 0.08em;
  animation-delay: 0.12s;
}
.hero-fade {
  animation: fade-up 0.9s var(--ease-editorial) 0.35s both;
}
.hero-body {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: var(--spacing-5xl);
  align-items: start;
}
.hero-copy {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  padding-top: var(--spacing-lg);
}
.hero-copy > p {
  max-width: 410px;
  font-size: var(--typography-lead-font-size);
  line-height: var(--typography-lead-line-height);
  color: var(--color-on-surface-muted);
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-xl) var(--spacing-2xl);
}
.see-how {
  font-size: var(--typography-label-lg-font-size);
  font-weight: var(--typography-label-lg-font-weight);
}
.see-how:hover span {
  transform: translateY(3px);
}
@keyframes line-rise {
  from {
    transform: translateY(105%);
  }
}
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
}
@media (max-width: 1050px) {
  h1 {
    font-size: 84px;
    letter-spacing: -4px;
  }
  .line-accent > em {
    font-size: 96px;
  }
  .hero-body {
    grid-template-columns: 1fr;
    gap: var(--spacing-4xl);
  }
  .hero-copy {
    padding-top: 0;
  }
}
@media (max-width: 760px) {
  .hero {
    padding-top: var(--spacing-2xl);
    padding-bottom: var(--spacing-section-mobile);
  }
  h1 {
    margin: var(--spacing-3xl) 0;
    font-size: 60px;
    letter-spacing: -3px;
  }
  .line-accent {
    padding-left: 0;
  }
  .line-accent > em {
    font-size: 70px;
  }
  .line-accent > em {
    letter-spacing: -2px;
  }
  .hero-copy > p {
    font-size: var(--typography-body-lg-font-size);
  }
}
@media (max-width: 380px) {
  h1 {
    font-size: 50px;
  }
  .line-accent > em {
    font-size: 58px;
  }
}
</style>
