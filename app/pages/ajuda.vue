<script setup>
usePageSeo({
  title: 'Ajuda sobre orçamentos online | orce.me',
  description:
    'Tire dúvidas sobre catálogo, clientes e propostas em PDF no orce.me. Encontre também o guia e as calculadoras gratuitas.',
  path: '/ajuda',
})
</script>

<template>
  <div>
    <div class="wrap section help-intro">
      <GuideBreadcrumbs current="Ajuda" />
      <h1>Como podemos ajudar?</h1>
      <p>Respostas sobre o catálogo e a criação de orçamentos no orce.me.</p>
      <div class="help-links">
        <NuxtLink to="/como-fazer-orcamento-de-servicos"
          >Ler o guia de orçamentos</NuxtLink
        >
        <NuxtLink to="/calculadora-de-orcamento"
          >Usar a calculadora de orçamento</NuxtLink
        >
        <NuxtLink to="/planos-e-precos">Consultar planos e preços</NuxtLink>
      </div>
    </div>
    <FaqSection />
  </div>
</template>

<style scoped>
.help-intro h1 {
  font-size: var(--typography-headline-page-font-size);
  font-weight: var(--typography-headline-page-font-weight);
  letter-spacing: var(--typography-headline-page-letter-spacing);
  margin: var(--spacing-3xl) 0 var(--spacing-xl);
}
.help-intro p {
  font-size: var(--typography-lead-font-size);
  line-height: var(--typography-lead-line-height);
  color: var(--color-on-surface-muted);
}
.help-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-2xl);
}
.help-links a {
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media (max-width: 760px) {
  .help-intro h1 {
    font-size: 32px;
  }
  .help-links {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
}
</style>
