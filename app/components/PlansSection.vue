<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="plans wrap section" id="planos">
    <div>
      <h2>
        Você precisa de um serviço.<br /><em
          >Por que pagar pelo pacote inteiro?</em
        >
      </h2>
      <p>
        Seu negócio pode precisar só de orçamentos, ou de um catálogo com
        estoque sincronizado. A ideia é simples: contratar os módulos que fazem
        sentido para você, sem carregar o custo de uma estrutura inteira.
      </p>
      <p class="modular-note">
        Estamos estudando um modelo de assinatura por módulo. Você começa com o
        que precisa e adiciona outros serviços conforme o negócio cresce.
      </p>
      <a class="button primary" :href="appUrl"
        >Conhecer o orce-me <span>↗</span></a
      >
    </div>
    <div class="plan-card" data-nosnippet>
      <span class="planning-badge">Modelo em estudo</span>
      <h3>
        Escolha o que faz sentido.<span
          >Serviços separados. Um só espaço de trabalho.</span
        >
      </h3>
      <div class="module-price">
        <div>
          <b>Gerar orçamentos</b
          ><small>Monte propostas e exporte em PDF.</small>
        </div>
        <strong>R$ 20–30<span>/mês</span></strong>
      </div>
      <div class="module-price">
        <div>
          <b>Sincronizar produtos + estoque</b
          ><small>Proposta de módulo adicional.</small>
        </div>
        <strong>R$ 40<span>/mês</span></strong>
      </div>
      <p class="pricing-disclaimer">
        Valores ilustrativos para estudo, sem oferta comercial vigente. Preços,
        limites, disponibilidade e combinação dos módulos ainda serão definidos.
      </p>
    </div>
  </section>
</template>

<style scoped>
.plans p {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  color: var(--color-on-surface-muted);
}

.plans {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 65px;
  align-items: center;
}

.plans p {
  max-width: 440px;
  margin: 20px 0 25px;
}

.plan-card {
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-lg);
  padding: 32px;
  background: linear-gradient(
    140deg,
    var(--color-surface-tint),
    var(--color-band)
  );
}

.plan-card h3 {
  font-size: var(--typography-title-lg-font-size);
  line-height: var(--typography-title-lg-line-height);
  letter-spacing: var(--typography-title-lg-letter-spacing);
  margin-top: 21px;
}

.plan-card h3 span {
  display: block;
  font-size: var(--typography-body-sm-font-size);
  letter-spacing: 0;
  color: var(--color-on-surface-muted);
  margin-top: 7px;
}

.plan-card small {
  font-size: var(--typography-label-sm-font-size);
  line-height: var(--typography-label-sm-line-height);
  color: var(--color-on-surface-muted);
}

@media (max-width: 1050px) {
  .plans {
    gap: 40px;
  }
}

@media (max-width: 760px) {
  .plans {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 760px) {
  .plans p {
    max-width: 100%;
  }
}

@media (max-width: 760px) {
  .plan-card {
    padding: 26px;
  }
}

.planning-badge {
  display: inline-block;
  padding: 6px 9px;
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-full);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-secondary);
  background: var(--color-surface-tint);
}

.module-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 23px 0;
  border-bottom: 1px solid var(--color-outline);
}

.module-price:first-of-type {
  margin-top: 20px;
  border-top: 1px solid var(--color-outline);
}

.module-price b {
  font-size: var(--typography-body-sm-font-size);
  font-weight: 500;
  display: block;
}

.module-price small {
  display: block;
  margin-top: 7px;
}

.module-price strong {
  white-space: nowrap;
  font-size: var(--typography-figure-font-size);
  font-weight: var(--typography-figure-font-weight);
  line-height: var(--typography-figure-line-height);
  letter-spacing: var(--typography-figure-letter-spacing);
}

.module-price strong span {
  display: block;
  text-align: right;
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  letter-spacing: 0;
  color: var(--color-on-surface-muted);
  margin-top: 4px;
}

.plans .pricing-disclaimer {
  font-size: var(--typography-label-sm-font-size);
  line-height: var(--typography-label-sm-line-height);
  margin: 18px 0 0;
}

.plans .modular-note {
  font-size: var(--typography-body-sm-font-size);
}

@media (max-width: 760px) {
  .module-price {
    gap: 12px;
  }
}

@media (max-width: 760px) {
  .module-price strong {
    font-size: 20px;
  }
}
</style>
