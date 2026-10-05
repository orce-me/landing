<script setup>
import { breakEven } from '#shared/utils/breakEven'
const { origin, canonical } = usePageSeo({
  title: 'Calculadora de ponto de equilíbrio grátis | orce-me',
  description:
    'Calcule quantas vendas são necessárias para cobrir custos fixos e variáveis no mesmo período.',
  path: '/calculadora-de-ponto-de-equilibrio',
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
              name: 'Calculadora de ponto de equilíbrio',
              url: canonical,
              inLanguage: 'pt-BR',
              description:
                'Calcule quantas vendas são necessárias para cobrir custos fixos e variáveis no mesmo período.',
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
                  name: 'Calculadora de ponto de equilíbrio',
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
    title="Calculadora de ponto de equilíbrio"
    intro="Calcule quantas vendas são necessárias para cobrir custos fixos e variáveis no mesmo período."
  >
    <MultiInputCalculator
      :calculate="breakEven"
      :fields="[
        { id: 'fixed', label: 'Custos fixos do período (R$)', initial: 3000 },
        { id: 'sale', label: 'Preço por venda (R$)', initial: 200 },
        {
          id: 'variable',
          label: 'Custos variáveis por venda (R$)',
          initial: 80,
        },
      ]"
    />
    <template #explanation>
      <section>
        <h2>Como calcular o ponto de equilíbrio?</h2>
        <p class="formula">
          Quantidade = custos fixos ÷ (preço por venda − custo variável por
          venda)
        </p>
        <p>
          Com R$ 3.000 de custos fixos, preço de R$ 200 e custos variáveis de R$
          80 por venda, cada venda contribui com R$ 120. São necessárias 25
          vendas no período, com faturamento de R$ 5.000, para cobrir esses
          custos. A quantidade é arredondada para cima porque a simulação
          considera vendas inteiras.
        </p>
      </section>
      <section>
        <h2>O que entra em cada custo?</h2>
        <p>
          Custos fixos são os que você precisa cobrir no período, como aluguel e
          assinaturas. Custos variáveis acompanham cada venda, como materiais,
          comissões e taxas. Converta taxas percentuais em reais por venda antes
          de incluí-las. Use o mesmo período para os custos e a meta.
        </p>
      </section>
      <section>
        <h2>Funciona para vários produtos ou serviços?</h2>
        <p>
          Esta simulação considera um único preço e custo variável por venda. Um
          catálogo com preços e margens diferentes exige considerar a composição
          das vendas. O equilíbrio cobre apenas os custos informados; ele não
          inclui uma meta adicional de lucro. Se o preço não superar o custo
          variável, aumentar a quantidade não cobre os custos fixos.
        </p>
      </section>
    </template></FreeToolPage
  >
</template>
