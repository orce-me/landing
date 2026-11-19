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
    <NuxtLink class="plan-link" to="/planos-e-precos">
      <span class="wrap plan-inner"
        ><span>Consultar planos e preços</span
        ><span class="plan-arrow" aria-hidden="true">→</span></span
      >
    </NuxtLink>
    <ResourcesSection />
    <ClosingSection />
  </div>
</template>

<style scoped>
.plan-link {
  position: relative;
  display: block;
  overflow: hidden;
  isolation: isolate;
  border-bottom: 1px solid var(--color-outline);
  transition: color 0.5s var(--ease-editorial);
}
.plan-link::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--color-primary);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.5s var(--ease-editorial);
}
.plan-link:hover,
.plan-link:focus-visible {
  color: var(--color-on-primary);
}
.plan-link:hover::before,
.plan-link:focus-visible::before {
  transform: scaleY(1);
}
.plan-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-2xl);
  padding-top: var(--spacing-4xl);
  padding-bottom: var(--spacing-4xl);
  font-family: var(--typography-headline-md-font-family), Arial, sans-serif;
  font-size: var(--typography-headline-md-font-size);
  font-weight: var(--typography-headline-md-font-weight);
  line-height: var(--typography-headline-md-line-height);
  letter-spacing: var(--typography-headline-md-letter-spacing);
}
.plan-arrow {
  transition: transform 0.5s var(--ease-editorial);
}
.plan-link:hover .plan-arrow {
  transform: translateX(12px);
}
@media (max-width: 760px) {
  .plan-inner {
    font-size: 28px;
    letter-spacing: -0.8px;
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }
}
</style>
