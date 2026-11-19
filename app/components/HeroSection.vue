<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="hero wrap" aria-labelledby="hero-title">
    <h1 id="hero-title">
      <span class="line"><span>Crie orçamentos.</span></span>
      <span class="line"
        ><span>Envie em <em class="stamp">PDF.</em></span></span
      >
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
  padding-top: var(--spacing-5xl);
  padding-bottom: var(--spacing-section);
}
h1 {
  margin: 0 0 var(--spacing-5xl);
  font-size: var(--typography-display-font-size);
  font-weight: var(--typography-display-font-weight);
  letter-spacing: var(--typography-display-letter-spacing);
  line-height: var(--typography-display-line-height);
}
.line {
  display: block;
  overflow: clip;
  padding-bottom: 0.1em;
  margin-bottom: -0.1em;
}
.line > span {
  display: inline-block;
  animation: line-rise 0.9s var(--ease-editorial) both;
}
.line + .line > span {
  animation-delay: 0.1s;
}
.stamp {
  display: inline-block;
  font-size: var(--typography-display-accent-font-size);
  letter-spacing: var(--typography-display-accent-letter-spacing);
  padding: 0 0.1em;
  border-radius: var(--rounded-md);
  transform: rotate(-3deg);
  animation: stamp 0.5s var(--ease-editorial) 0.9s both;
}
.hero-fade {
  animation: fade-up 0.9s var(--ease-editorial) 0.35s both;
}
.hero-body {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: var(--spacing-5xl);
  align-items: start;
}
.hero-copy {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  padding-top: var(--spacing-sm);
}
.hero-copy > p {
  max-width: 400px;
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
@keyframes stamp {
  from {
    opacity: 0;
    transform: rotate(-12deg) scale(1.6);
  }
}
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
}
@media (max-width: 1050px) {
  h1,
  .stamp {
    font-size: 96px;
    letter-spacing: -3px;
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
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-section-mobile);
  }
  h1 {
    margin-bottom: var(--spacing-3xl);
  }
  h1,
  .stamp {
    font-size: 60px;
    letter-spacing: -2px;
  }
  .hero-copy > p {
    font-size: var(--typography-body-lg-font-size);
  }
}
@media (max-width: 380px) {
  h1,
  .stamp {
    font-size: 50px;
  }
}
</style>
