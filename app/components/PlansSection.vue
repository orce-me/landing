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
    <div class="plan-card module-plans" data-nosnippet>
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
  font-size: 13px;
  line-height: 1.8;
  color: var(--muted);
}

.plans {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 90px;
  align-items: center;
}

.plans p {
  max-width: 440px;
  margin: 20px 0 25px;
}

.plan-card {
  border: 1px solid #dbe3d2;
  border-radius: 9px;
  padding: 30px;
  background: #f5f7ef;
}

.plan-card h3 {
  font-size: 30px;
  margin-top: 21px;
}

.plan-card h3 span {
  display: block;
  font-size: 12px;
  letter-spacing: 0;
  color: #839077;
  margin-top: 7px;
}

.plan-card ul {
  list-style: none;
  padding: 20px 0 8px;
  border-top: 1px solid #dfe5d7;
  margin-top: 24px;
}

.plan-card li {
  font-size: 12px;
  margin: 14px 0;
}

.plan-card li:before {
  content: '✓';
  margin-right: 12px;
  color: #6c8b4e;
}

.plan-card small {
  font-size: 9px;
  line-height: 1.7;
  color: #8c967f;
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

.plan-card {
  background: linear-gradient(140deg, #eff4e5, #e4edda);
  border-color: #b8cba6;
}

.plan-card h3 span,
.plan-card small {
  color: #526547;
}

.module-plans .planning-badge {
  display: inline-block;
  padding: 6px 9px;
  border: 1px solid #b9c99f;
  border-radius: 20px;
  font-size: 10px;
  color: #486332;
  background: #e5eed8;
}

.module-plans h3 {
  font-size: 25px;
}

.module-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 23px 0;
  border-bottom: 1px solid var(--line);
}

.module-price:first-of-type {
  margin-top: 20px;
  border-top: 1px solid var(--line);
}

.module-price b {
  font-size: 12px;
  font-weight: 500;
  display: block;
}

.module-price small {
  display: block;
  margin-top: 7px;
}

.module-price strong {
  white-space: nowrap;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.7px;
}

.module-price strong span {
  display: block;
  text-align: right;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--muted);
  margin-top: 4px;
}

.plans .pricing-disclaimer {
  font-size: 10px;
  line-height: 1.8;
  margin: 18px 0 0;
}

.plans .modular-note {
  font-size: 12px;
}

.plans:has(.module-plans) {
  gap: 65px;
  grid-template-columns: 1.25fr 1fr;
}

[data-theme='dark'] .planning-badge {
  background: #31492a;
  color: #d0e6b4;
  border-color: #567043;
}

@media (max-width: 760px) {
  .plans:has(.module-plans) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
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

[data-theme='dark'] .plan-card h3 span,
[data-theme='dark'] .plan-card small {
  color: #b3c4a6;
}

[data-theme='dark'] .plan-card ul {
  border-color: #405438;
}

[data-theme='dark'] .plan-card {
  background: linear-gradient(140deg, #263a26, #1e3022);
  border-color: #4c653c;
}
</style>
