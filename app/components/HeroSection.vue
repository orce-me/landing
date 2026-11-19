<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="hero wrap" aria-labelledby="hero-title">
    <div class="hero-top">
      <span class="eyebrow hero-fade"
        ><span class="pulse" aria-hidden="true"></span>ORÇAMENTOS PARA PEQUENOS
        NEGÓCIOS</span
      >
      <span class="hero-index hero-fade" aria-hidden="true"
        >Nº 0042 — Catálogo, cliente, PDF</span
      >
    </div>
    <h1 id="hero-title">
      <span class="line"><span>Crie orçamentos.</span></span>
      <span class="line line-accent"><em>Envie em PDF.</em></span>
    </h1>
    <div class="hero-body">
      <div class="hero-copy hero-fade">
        <p>
          Reúna produtos e serviços do seu catálogo, ajuste os valores e gere
          uma proposta com os dados da sua empresa. Tudo no mesmo lugar.
        </p>
        <div class="hero-actions">
          <a class="button primary" :href="appUrl"
            >Criar meu primeiro orçamento</a
          >
          <a class="arrow-link see-how" href="#como-funciona"
            >Ver como funciona <span aria-hidden="true">↓</span></a
          >
        </div>
        <dl class="hero-facts">
          <div>
            <dt>Catálogo</dt>
            <dd>Produtos e serviços</dd>
          </div>
          <div>
            <dt>Cálculo</dt>
            <dd>Quantidades e descontos</dd>
          </div>
          <div>
            <dt>Entrega</dt>
            <dd>PDF com sua marca</dd>
          </div>
        </dl>
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
.hero-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-lg);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-outline);
}
.pulse {
  position: relative;
  width: 7px;
  height: 7px;
  border-radius: var(--rounded-full);
  background: var(--color-tertiary);
}
.pulse::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: var(--rounded-full);
  border: 1px solid var(--color-tertiary);
  animation: pulse 2.4s var(--ease-editorial) infinite;
}
.hero-index {
  font-size: var(--typography-label-sm-font-size);
  letter-spacing: 1.2px;
  color: var(--color-on-surface-muted);
  text-transform: uppercase;
}
h1 {
  margin: var(--spacing-4xl) 0 var(--spacing-5xl);
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
.hero-facts {
  display: grid;
  margin: 0;
  border-top: 1px solid var(--color-outline);
}
.hero-facts > div {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-lg);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-outline);
  font-size: var(--typography-body-sm-font-size);
}
.hero-facts dt {
  color: var(--color-secondary);
}
.hero-facts dd {
  margin: 0;
  color: var(--color-on-surface);
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
@keyframes pulse {
  from {
    transform: scale(0.6);
    opacity: 1;
  }
  to {
    transform: scale(1.8);
    opacity: 0;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    padding-top: 0;
  }
  .hero-facts {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
}
@media (max-width: 760px) {
  .hero {
    padding-top: var(--spacing-2xl);
    padding-bottom: var(--spacing-section-mobile);
  }
  .hero-index {
    display: none;
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
  .hero-copy {
    display: flex;
    align-items: stretch;
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
