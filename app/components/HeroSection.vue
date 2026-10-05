<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="hero wrap">
    <div class="hero-copy">
      <h1>Orçamentos profissionais.<br /><em>Seu próximo negócio.</em></h1>
      <p>
        Sistema de orçamentos para pequenos negócios: reúna produtos, serviços e
        dados do cliente em uma proposta em PDF com a sua marca. Sem refazer
        planilhas a cada pedido.
      </p>
      <div class="actions">
        <a class="button primary" :href="appUrl"
          >Criar meu primeiro orçamento <span>↗</span></a
        ><a class="text-link" href="#demonstracao"
          >Conhecer por dentro <span>↓</span></a
        >
      </div>
    </div>
    <QuoteDemo />
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1.08fr;
  align-items: center;
  gap: 44px;
  padding-top: 57px;
  padding-bottom: 90px;
  position: relative;
}

h1 {
  margin: 0;
}

h1 {
  font-size: var(--typography-display-font-size);
  letter-spacing: var(--typography-display-letter-spacing);
  line-height: var(--typography-display-line-height);
  font-weight: var(--typography-display-font-weight);
  margin: 23px 0;
}

h1 em {
  font-size: var(--typography-display-accent-font-size);
  letter-spacing: var(--typography-display-accent-letter-spacing);
}

.hero-copy > p {
  max-width: 410px;
  font-size: var(--typography-body-lg-font-size);
  color: var(--color-on-surface-muted);
  line-height: var(--typography-body-lg-line-height);
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 31px;
}

.text-link {
  font-size: var(--typography-body-sm-font-size);
  white-space: nowrap;
  display: flex;
  gap: 8px;
}

@media (min-width: 1450px) {
  .hero {
    padding-top: 80px;
    padding-bottom: 120px;
  }
}

@media (max-width: 1050px) {
  .hero {
    gap: 25px;
  }
}

@media (max-width: 1050px) {
  h1 {
    font-size: 52px;
  }
}

@media (max-width: 1050px) {
  h1 em {
    font-size: 62px;
  }
}

@media (max-width: 1050px) {
  .actions {
    flex-wrap: wrap;
    gap: 17px;
  }
}

@media (max-width: 760px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 34px;
    padding-bottom: 55px;
    gap: 55px;
  }
}

@media (max-width: 760px) {
  .hero-copy {
    max-width: 540px;
  }
}

@media (max-width: 760px) {
  h1 {
    font-size: 57px;
    letter-spacing: -2.8px;
  }
}

@media (max-width: 760px) {
  h1 em {
    font-size: 66px;
  }
}

@media (max-width: 760px) {
  .hero-copy > p {
    font-size: 14px;
  }
}
</style>
