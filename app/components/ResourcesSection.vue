<script setup>
const resources = [
  {
    to: '/como-fazer-orcamento-de-servicos',
    title: 'Como fazer um orçamento de serviços',
    text: 'Veja os campos da proposta, um exemplo com materiais e mão de obra e um checklist antes de enviar.',
  },
  {
    to: '/calculadora-de-orcamento',
    title: 'Calculadora de orçamento',
    text: 'Simule custos de materiais, horas de trabalho e margem. Entenda a diferença entre margem e acréscimo.',
  },
  {
    to: '/calculadora-de-desconto',
    title: 'Calculadora de desconto',
    text: 'Veja o preço final e quanto você concede de desconto em reais antes de enviar uma proposta.',
  },
  {
    to: '/calculadora-de-margem',
    title: 'Calculadora de margem e markup',
    text: 'Compare a margem sobre o preço de venda com o acréscimo sobre o custo. Simule produtos ou serviços com seus próprios valores.',
  },
  {
    to: '/calculadora-de-custo-hora',
    title: 'Calculadora de custo por hora',
    text: 'Estime quanto cada hora faturável precisa recuperar dos seus custos mensais para preparar orçamentos de serviços.',
  },
  {
    to: '/calculadora-de-ponto-de-equilibrio',
    title: 'Calculadora de ponto de equilíbrio',
    text: 'Descubra quantas vendas cobrem os custos fixos e variáveis do período.',
  },
  {
    to: '/calculadora-de-preco-com-taxas',
    title: 'Calculadora de preço com taxas',
    text: 'Considere taxas sobre a venda e a margem desejada ao formar seu preço.',
  },
]
</script>

<template>
  <section class="resources wrap section" id="materiais">
    <h2 v-reveal>Guias e calculadoras <em>gratuitas.</em></h2>
    <ul class="resource-index">
      <li v-for="item in resources" :key="item.to" v-reveal>
        <NuxtLink class="resource" :to="item.to">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <span class="arrow" aria-hidden="true">→</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.resource-index {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin: var(--spacing-3xl) 0 0;
  padding: 0;
  list-style: none;
}
.resource-index li {
  display: flex;
}
.resource-index li:first-child {
  grid-column: 1 / -1;
}
.resource-index li:first-child .resource {
  background: var(--color-primary-soft);
}
.resource-index li:first-child h3 {
  font-size: var(--typography-title-lg-font-size);
}
.resource {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  width: 100%;
  padding: var(--spacing-2xl);
  background: var(--color-surface);
  border-radius: var(--rounded-lg);
  transition:
    transform 0.4s var(--ease-soft),
    background 0.2s,
    box-shadow 0.2s;
}
.resource:hover {
  transform: translateY(-4px);
  background: var(--color-surface-raised);
  box-shadow: var(--shadow-raised);
}
.resource h3 {
  font-size: var(--typography-title-md-font-size);
  font-weight: var(--typography-title-md-font-weight);
  letter-spacing: var(--typography-title-md-letter-spacing);
  line-height: var(--typography-title-md-line-height);
}
.resource p {
  font-size: var(--typography-body-sm-font-size);
  line-height: var(--typography-body-sm-line-height);
  color: var(--color-on-surface-muted);
}
.arrow {
  margin-top: auto;
  padding-top: var(--spacing-md);
  color: var(--color-primary);
  font-size: var(--typography-title-md-font-size);
  transition: transform 0.4s var(--ease-soft);
}
.resource:hover .arrow {
  transform: translateX(6px);
}
@media (max-width: 1050px) {
  .resource-index {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 760px) {
  .resource-index {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  .resource {
    padding: var(--spacing-xl);
  }
}
</style>
