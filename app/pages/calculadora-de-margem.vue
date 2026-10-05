<script setup>
const { origin, canonical } = usePageSeo({
  title: 'Calculadora de margem e markup grátis | orce-me',
  description:
    'Compare a margem sobre o preço de venda com o acréscimo sobre o custo. Simule produtos ou serviços com seus próprios valores.',
  path: '/calculadora-de-margem',
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
              name: 'Calculadora de margem e markup',
              url: canonical,
              inLanguage: 'pt-BR',
              description:
                'Compare a margem sobre o preço de venda com o acréscimo sobre o custo. Simule produtos ou serviços com seus próprios valores.',
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
                  name: 'Calculadora de margem e markup',
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
    title="Calculadora de margem e markup"
    intro="Compare a margem sobre o preço de venda com o acréscimo sobre o custo. Simule produtos ou serviços com seus próprios valores."
  >
    <BusinessCalculator
      kind="margin"
      :labels="['Custo total (R$)', 'Preço de venda (R$)']"
      :initial="[400, 500]"
    />
    <template #explanation>
      <section>
        <h2>Como calcular margem e markup?</h2>
        <p class="formula">Margem (%) = (preço − custo) ÷ preço × 100</p>
        <p>
          Um item que custa R$ 400 e é vendido por R$ 500 tem margem de 20%
          sobre a venda. O markup percentual é 25%, pois a diferença de R$ 100
          representa 25% do custo.
        </p>
      </section>
      <section>
        <h2>Qual é a fórmula do markup?</h2>
        <p>
          Markup (%) = (preço − custo) ÷ custo × 100. Ele mede o acréscimo
          percentual ao custo, não o fator multiplicador. No exemplo, o fator é
          1,25. Se o custo for zero, o markup percentual fica indefinido; a
          margem ainda pode ser calculada para um preço positivo.
        </p>
      </section>
      <section>
        <h2>Essa margem é meu lucro líquido?</h2>
        <p>
          Somente se todos os custos e despesas relevantes estiverem
          considerados. Taxas, impostos, transporte e outros gastos podem
          reduzir o resultado. Um preço abaixo do custo gera margem negativa.
          Para encontrar um preço a partir de uma margem desejada, use a
          calculadora de orçamento.
        </p>
      </section>
    </template>
  </FreeToolPage>
</template>
