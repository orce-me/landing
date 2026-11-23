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
          'Assistente com IA que monta rascunhos a partir de texto ou áudio',
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
    <AssistantSection />
    <FeaturesSection />
    <div class="wrap">
      <div class="plan-banner" v-reveal>
        <p>Planos e preços.</p>
        <NuxtLink class="arrow-link" to="/planos-e-precos"
          >Ver as condições <span aria-hidden="true">→</span></NuxtLink
        >
      </div>
    </div>
    <ClosingSection />
  </div>
</template>

<style scoped>
.plan-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-2xl);
  padding: var(--spacing-2xl) var(--spacing-3xl);
  background: var(--color-surface);
  border-radius: var(--rounded-xl);
}
.plan-banner p {
  font-size: var(--typography-title-md-font-size);
  font-weight: var(--typography-title-md-font-weight);
}
.plan-banner a {
  flex-shrink: 0;
  color: var(--color-primary);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
}
@media (max-width: 760px) {
  .plan-banner {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
    padding: var(--spacing-xl);
  }
}
</style>
