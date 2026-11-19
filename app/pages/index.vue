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
    <TradeMarquee />
    <WorkflowSection />
    <FeaturesSection />
    <div class="plan-link wrap" v-reveal>
      <NuxtLink class="arrow-link" to="/planos-e-precos"
        >Consultar planos e preços <span aria-hidden="true">→</span></NuxtLink
      >
    </div>
    <ResourcesSection />
    <ClosingSection />
  </div>
</template>

<style scoped>
.plan-link {
  padding-top: var(--spacing-5xl);
  padding-bottom: var(--spacing-5xl);
}
.plan-link a {
  font-size: var(--typography-title-xl-font-size);
  font-weight: var(--typography-title-xl-font-weight);
  letter-spacing: var(--typography-title-xl-letter-spacing);
  border-bottom: 1px solid currentColor;
  padding-bottom: var(--spacing-xs);
}
@media (max-width: 760px) {
  .plan-link a {
    font-size: var(--typography-title-md-font-size);
  }
}
</style>
