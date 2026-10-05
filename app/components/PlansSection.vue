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
    <div class="plan-card module-plans">
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
