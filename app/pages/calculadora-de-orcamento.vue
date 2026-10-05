<script setup>
const appUrl = useRuntimeConfig().public.appUrl
const { origin, canonical } = usePageSeo({
  title: 'Calculadora de orçamento de serviços: custos e margem | orce-me',
  description:
    'Calcule um orçamento de serviços a partir de materiais, horas de trabalho, outros custos e margem sobre o preço final. Veja a fórmula e simule seus valores.',
  path: '/calculadora-de-orcamento',
})
if (origin) {
  useHead({
    script: [
      {
        key: 'structured-data',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              name: 'Calculadora de orçamento de serviços',
              url: canonical,
              inLanguage: 'pt-BR',
              description:
                'Simulação de custos e margem para montar um orçamento de serviços.',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'orce-me',
                  item: `${origin}/`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Calculadora de orçamento de serviços',
                  item: canonical,
                },
              ],
            },
          ],
        }).replaceAll('<', '\u003c'),
      },
    ],
  })
}
</script>

<template>
  <article class="calculator-page wrap">
    <GuideBreadcrumbs current="Calculadora de orçamento de serviços" />
    <h1>
      Calculadora de orçamento.<br /><em>Dos custos ao preço do serviço.</em>
    </h1>
    <p class="intro">
      Informe materiais, horas de trabalho, custo por hora e outras despesas. A
      calculadora estima o preço necessário para a margem que você escolher
      sobre o valor final.
    </p>
    <QuoteCostCalculator />
    <section id="formula">
      <h2>Como calcular o orçamento de um serviço?</h2>
      <p>
        Primeiro, some materiais, mão de obra e outros custos. A mão de obra é o
        número de horas multiplicado pelo custo de cada hora. Para calcular uma
        margem sobre o preço final, use:
      </p>
      <p class="formula">Preço = custo total ÷ (1 − margem ÷ 100)</p>
      <p>
        Com R$ 250 de materiais, duas horas a R$ 60 e R$ 30 de outros custos, o
        custo total é R$ 400. Uma margem de 20% sobre o preço final resulta em
        R$ 500: a diferença de R$ 100 corresponde a 20% dos R$ 500.
      </p>
    </section>
    <section>
      <h2>Margem e acréscimo são a mesma coisa?</h2>
      <p>
        Não. Acrescentar 20% ao custo de R$ 400 resulta em R$ 480. Nesse caso, a
        diferença de R$ 80 representa cerca de 16,67% do preço final. A
        calculadora usa margem sobre o preço, não acréscimo sobre o custo.
      </p>
    </section>
    <section>
      <h2>O que a estimativa inclui?</h2>
      <p>
        Somente os valores que você informar. Se houver despesas, impostos ou
        taxas que precisem ser considerados, eles devem entrar nos custos
        apropriados. Custos que variam como porcentagem do preço final exigem um
        cálculo próprio e não são tratados automaticamente nesta ferramenta.
      </p>
      <p>
        A diferença entre o preço e os custos informados não representa
        necessariamente lucro líquido. Use a simulação como apoio e confira as
        condições do seu negócio antes de enviar uma proposta.
      </p>
    </section>
    <section class="next-step">
      <h2>Depois do cálculo, organize a proposta.</h2>
      <p>
        <NuxtLink to="/como-fazer-orcamento-de-servicos"
          >Veja o guia de orçamento de prestação de serviços</NuxtLink
        >
        para definir escopo, itens e condições. No orce-me, você reúne seu
        catálogo e os dados do cliente em uma proposta em PDF.
      </p>
      <a class="button primary" :href="appUrl"
        >Conhecer o sistema de orçamentos <span>↗</span></a
      >
    </section>
  </article>
</template>

<style scoped>
.calculator-page {
  max-width: var(--spacing-container-content);
  padding-top: 45px;
  padding-bottom: 80px;
}
h1 {
  font-size: var(--typography-headline-page-font-size);
  line-height: var(--typography-headline-page-line-height);
  font-weight: var(--typography-headline-page-font-weight);
  letter-spacing: var(--typography-headline-page-letter-spacing);
  margin: 30px 0 22px;
}
h1 em {
  font-size: var(--typography-headline-page-accent-font-size);
}
.intro {
  font-size: var(--typography-lead-font-size);
  line-height: var(--typography-lead-line-height);
  color: var(--color-on-surface-muted);
  max-width: var(--spacing-measure);
}
section {
  margin-top: 42px;
  max-width: var(--spacing-measure);
}
h2 {
  font-size: var(--typography-title-xl-font-size);
  letter-spacing: var(--typography-title-xl-letter-spacing);
  font-weight: var(--typography-title-xl-font-weight);
  margin-bottom: 18px;
}
section p {
  font-size: var(--typography-body-lg-font-size);
  line-height: var(--typography-body-lg-line-height);
  color: var(--color-on-surface-muted);
  margin: 16px 0;
}
.formula {
  padding: 20px;
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-md);
  font-weight: 500;
}
.next-step a:not(.button) {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.next-step .button {
  margin-top: 10px;
}
@media (max-width: 760px) {
  .calculator-page {
    padding-top: 25px;
  }
  h1 {
    font-size: 32px;
  }
  h1 em {
    font-size: 38px;
  }
  h2 {
    font-size: 23px;
  }
}
</style>
