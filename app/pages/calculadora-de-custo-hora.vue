<script setup>
const { origin, canonical } = usePageSeo({
  title: 'Calculadora de custo por hora grátis | orce-me',
  description:
    'Estime quanto cada hora faturável precisa recuperar dos seus custos mensais para preparar orçamentos de serviços.',
  path: '/calculadora-de-custo-hora',
})
if (origin)
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
              name: 'Calculadora de custo por hora',
              url: canonical,
              inLanguage: 'pt-BR',
              description:
                'Estime quanto cada hora faturável precisa recuperar dos seus custos mensais para preparar orçamentos de serviços.',
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
                  name: 'Calculadora de custo por hora',
                  item: canonical,
                },
              ],
            },
          ],
        }).replaceAll('<', '\u003c'),
      },
    ],
  })
</script>
<template>
  <FreeToolPage
    title="Calculadora de custo por hora"
    intro="Estime quanto cada hora faturável precisa recuperar dos seus custos mensais para preparar orçamentos de serviços."
  >
    <BusinessCalculator
      kind="hourly"
      :labels="['Custos mensais a recuperar (R$)', 'Horas faturáveis no mês']"
      :initial="[6000, 100]"
    />
    <template #explanation>
      <section>
        <h2>Como calcular o custo por hora?</h2>
        <p class="formula">
          Custo por hora = custos mensais ÷ horas faturáveis no mês
        </p>
        <p>
          Com R$ 6.000 de custos mensais e 100 horas faturáveis, cada hora
          precisa recuperar R$ 60. Em um serviço de duas horas, a parcela de mão
          de obra é R$ 120 antes de materiais e margem.
        </p>
      </section>
      <section>
        <h2>Quais custos devo considerar?</h2>
        <p>
          Some a remuneração que você quer recuperar, aluguel, ferramentas,
          software e outros custos do período. Evite contar a mesma despesa
          novamente no orçamento. Esta divisão simples não calcula impostos ou
          taxas sobre a venda automaticamente.
        </p>
      </section>
      <section>
        <h2>Horas trabalhadas e faturáveis são iguais?</h2>
        <p>
          Nem sempre. Atendimento, administração, deslocamento e preparação
          podem ocupar horas que não são cobradas diretamente. Informe as horas
          que você realmente espera faturar no mês. O resultado é uma base de
          custo, não um preço de venda: acrescente materiais e defina sua margem
          na calculadora de orçamento.
        </p>
      </section>
    </template>
  </FreeToolPage>
</template>
