<script setup>
const appUrl = useRuntimeConfig().public.appUrl
usePageSeo({
  title: 'Planos e preços para criar orçamentos | orce.me',
  description:
    'Conheça o foco do orce.me e consulte as opções de contratação disponíveis no aplicativo para criar seus orçamentos.',
  path: '/planos-e-precos',
})
</script>

<template>
  <section class="wrap section plans-page">
    <GuideBreadcrumbs current="Planos e preços" />
    <h1>Planos e preços.<br /><em>Para criar seus orçamentos.</em></h1>
    <p class="lead">
      O orce.me reúne catálogo, clientes e propostas em PDF em um fluxo de
      orçamento. Do primeiro item até o documento pronto para enviar ao cliente.
    </p>
    <article class="offer">
      <div>
        <span class="eyebrow">ORÇAMENTOS</span>
        <h2>O que você pode fazer.</h2>
        <ul>
          <li>Reutilizar produtos, serviços e preços do catálogo.</li>
          <li>
            Montar propostas com dados do cliente, quantidades e descontos.
          </li>
          <li>Exportar um PDF com os dados da sua empresa.</li>
          <li>Consultar o histórico dos seus orçamentos.</li>
        </ul>
      </div>
      <div class="conditions">
        <h2>Consulte as opções disponíveis.</h2>
        <p>
          Confira no aplicativo os planos, valores e limites vigentes antes de
          contratar. Você escolhe com as condições atualizadas, sem depender de
          valores estimados.
        </p>
        <a class="button primary" :href="appUrl">Ver opções no aplicativo</a>
        <NuxtLink to="/ajuda">Tirar dúvidas sobre o produto</NuxtLink>
      </div>
    </article>
  </section>
</template>

<style scoped>
.plans-page {
  max-width: var(--spacing-container-content);
}
h1 {
  font-size: var(--typography-headline-page-font-size);
  line-height: var(--typography-headline-page-line-height);
  letter-spacing: var(--typography-headline-page-letter-spacing);
  font-weight: var(--typography-headline-page-font-weight);
  margin: var(--spacing-3xl) 0 var(--spacing-2xl);
}
.lead {
  max-width: var(--spacing-measure);
  font-size: var(--typography-lead-font-size);
  color: var(--color-on-surface-muted);
  line-height: var(--typography-lead-line-height);
}
.offer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  margin: var(--spacing-4xl) 0 var(--spacing-2xl);
  padding: var(--spacing-3xl);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-lg);
  background: var(--color-surface);
}
.offer h2 {
  font-size: var(--typography-title-lg-font-size);
  margin: var(--spacing-lg) 0;
}
.offer ul {
  padding-left: var(--spacing-xl);
  line-height: 2;
  font-size: var(--typography-body-lg-font-size);
}
.eyebrow {
  color: var(--color-secondary);
  font-size: var(--typography-label-md-font-size);
  letter-spacing: 1px;
}
.conditions p {
  font-size: var(--typography-body-md-font-size);
  color: var(--color-on-surface-muted);
  line-height: var(--typography-body-md-line-height);
}
.conditions .button {
  margin: var(--spacing-2xl) 0;
}
.conditions > a:last-child {
  display: block;
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media (max-width: 760px) {
  h1 {
    font-size: 32px;
  }
  .offer {
    grid-template-columns: 1fr;
    padding: var(--spacing-2xl);
    gap: var(--spacing-xl);
  }
}
</style>
