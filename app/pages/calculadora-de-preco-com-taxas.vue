<script setup>
import { priceWithFees } from '#shared/utils/priceWithFees'
const { origin, canonical } = usePageSeo({
  title: 'Calculadora de preço com taxas grátis | orce-me',
  description:
    'Estime o preço de venda considerando custos, taxas percentuais e margem sobre o valor final.',
  path: '/calculadora-de-preco-com-taxas',
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
              name: 'Calculadora de preço com taxas',
              url: canonical,
              inLanguage: 'pt-BR',
              description:
                'Estime o preço de venda considerando custos, taxas percentuais e margem sobre o valor final.',
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
                  name: 'Calculadora de preço com taxas',
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
    title="Calculadora de preço com taxas"
    intro="Estime o preço de venda considerando custos, taxas percentuais e margem sobre o valor final."
  >
    <MultiInputCalculator
      :calculate="priceWithFees"
      :fields="[
        { id: 'cost', label: 'Custos a recuperar (R$)', initial: 400 },
        { id: 'fees', label: 'Taxas sobre o preço de venda (%)', initial: 5 },
        {
          id: 'margin',
          label: 'Margem desejada sobre a venda (%)',
          initial: 20,
        },
      ]"
    />
    <template #explanation>
      <section>
        <h2>Como incluir taxas no preço de venda?</h2>
        <p class="formula">Preço = custo ÷ [1 − (taxas + margem) ÷ 100]</p>
        <p>
          Com R$ 400 de custos, taxas de 5% e margem desejada de 20%, o preço
          estimado é R$ 533,33. Desse valor, aproximadamente R$ 26,67 são taxas
          e R$ 106,67 correspondem à diferença após os custos informados. Os
          resultados são exibidos com duas casas decimais; pequenos ajustes
          podem ser necessários ao cobrar em centavos.
        </p>
      </section>
      <section>
        <h2>Quais taxas posso somar?</h2>
        <p>
          Some apenas percentuais calculados sobre a mesma base: o preço total
          de venda. Uma taxa de pagamento e uma comissão podem ter bases
          distintas dependendo do contrato. Tarifas fixas em reais devem entrar
          no campo de custos. A ferramenta usa os percentuais que você informar,
          sem buscar alíquotas ou aplicar regras tributárias.
        </p>
      </section>
      <section>
        <h2>Por que não basta acrescentar a taxa ao custo?</h2>
        <p>
          Uma taxa de 5% sobre a venda é cobrada sobre o preço final, não sobre
          o custo. Acrescentar 5% a R$ 400 gera R$ 420, mas a taxa sobre R$ 420
          é R$ 21 e restam R$ 399. A divisão pela parcela restante do preço
          evita essa diferença. A soma de taxas e margem deve ser menor que
          100%.
        </p>
      </section>
      <section>
        <h2>A diferença calculada é lucro líquido?</h2>
        <p>
          Ela considera somente os custos e taxas informados. Inclua todos os
          gastos pertinentes sem contar despesas duas vezes. O cálculo não trata
          faixas de taxas, parcelamento com juros, antecipação, retenções ou
          impostos com outras bases de cálculo.
        </p>
      </section>
    </template></FreeToolPage
  >
</template>
