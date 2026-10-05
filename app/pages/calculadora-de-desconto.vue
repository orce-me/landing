<script setup>
const { origin, canonical } = usePageSeo({
  title: 'Calculadora de desconto grátis | orce-me',
  description:
    'Veja o preço final e quanto você concede de desconto em reais antes de enviar uma proposta.',
  path: '/calculadora-de-desconto',
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
              name: 'Calculadora de desconto',
              url: canonical,
              inLanguage: 'pt-BR',
              description:
                'Veja o preço final e quanto você concede de desconto em reais antes de enviar uma proposta.',
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
                  name: 'Calculadora de desconto',
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
    title="Calculadora de desconto"
    intro="Veja o preço final e quanto você concede de desconto em reais antes de enviar uma proposta."
  >
    <BusinessCalculator
      kind="discount"
      :labels="['Preço original (R$)', 'Desconto (%)']"
      :initial="[500, 10]"
    />
    <template #explanation>
      <section>
        <h2>Como calcular um desconto percentual?</h2>
        <p class="formula">
          Preço final = preço original × (1 − desconto ÷ 100)
        </p>
        <p>
          Em uma proposta de R$ 500, um desconto de 10% equivale a R$ 50. O
          cliente paga R$ 450. Um desconto de 100% zera o preço.
        </p>
      </section>
      <section>
        <h2>O desconto preserva minha margem?</h2>
        <p>
          Depende dos seus custos. A ferramenta calcula apenas a redução do
          preço; ela não verifica lucro. Se o serviço custa R$ 400 e você vende
          por R$ 450, a diferença é R$ 50, ou 11,11% da venda. Confira a
          calculadora de margem antes de negociar.
        </p>
      </section>
      <section>
        <h2>Posso somar dois descontos?</h2>
        <p>
          Descontos sucessivos não são somados. Dois descontos de 10% sobre R$
          500 resultam em R$ 405: aplique o segundo desconto sobre R$ 450. Para
          calcular aqui, informe o valor já reduzido na segunda etapa.
        </p>
      </section>
    </template>
  </FreeToolPage>
</template>
