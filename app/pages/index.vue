<script setup>
const { origin, canonical } = usePageSeo({
  title: 'Sistema de orçamentos para pequenos negócios | orce-me',
  description:
    'Crie orçamentos de produtos e serviços com seu catálogo, dados do cliente e PDF com sua marca. Conheça o orce-me para pequenos negócios.',
  path: '/',
})
if (origin) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${origin}/#organization`,
        name: 'orce-me',
        url: origin,
        logo: `${origin}/favicon.svg`,
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        name: 'orce-me',
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
        name: 'orce-me',
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
    <AudienceSection />
    <WorkflowSection />
    <FeaturesSection />
    <PlansSection />
    <ResourcesSection />
    <FaqSection />
    <ClosingSection />
  </div>
</template>
