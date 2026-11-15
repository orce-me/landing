<script setup>
const { origin, canonical } = usePageSeo({
  title: 'Sistema de orçamentos para pequenos negócios | orce.me',
  description:
    'Crie orçamentos de produtos e serviços com seu catálogo, dados do cliente e PDF com sua marca. Conheça o orce.me para pequenos negócios.',
  path: '/',
})
if (origin) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${origin}/#organization`,
        name: 'orce.me',
        url: origin,
        logo: `${origin}/favicon.svg`,
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        name: 'orce.me',
        url: origin,
        inLanguage: 'pt-BR',
        publisher: { '@id': `${origin}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${origin}/#webpage`,
        url: canonical,
        name: 'Sistema de orçamentos para pequenos negócios',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${origin}/#website` },
        about: { '@id': `${origin}/#software` },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${origin}/#software`,
        name: 'orce.me',
        url: origin,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        inLanguage: 'pt-BR',
        description:
          'Sistema para criar orçamentos de produtos e serviços, organizar catálogo e clientes e exportar propostas em PDF.',
        featureList: [
          'Catálogo de produtos e serviços',
          'Cadastro de clientes',
          'Criação de orçamentos',
          'Exportação em PDF',
        ],
        publisher: { '@id': `${origin}/#organization` },
      },
    ],
  }
  useHead({
    script: [
      {
        key: 'structured-data',
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema).replaceAll('<', '\u003c'),
      },
    ],
  })
}
</script>

<template>
  <div>
    <HeroSection />
    <WorkflowSection />
    <FeaturesSection />
    <div class="plan-link wrap">
      <p>Quer saber as condições para usar o orce.me?</p>
      <NuxtLink to="/planos-e-precos"
        >Consultar planos e preços <span aria-hidden="true">→</span></NuxtLink
      >
    </div>
    <ResourcesSection />
    <ClosingSection />
  </div>
</template>

<style scoped>
.plan-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-2xl);
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  border-bottom: 1px solid var(--color-outline);
  font-size: var(--typography-body-lg-font-size);
}
.plan-link p {
  color: var(--color-on-surface-muted);
}
.plan-link a {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.plan-link a span {
  margin-left: var(--spacing-sm);
}
@media (max-width: 760px) {
  .plan-link {
    align-items: flex-start;
    flex-direction: column;
    gap: var(--spacing-md);
  }
}
</style>
