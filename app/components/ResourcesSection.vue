<script setup>
const resources = [
  {
    to: '/como-fazer-orcamento-de-servicos',
    title: 'Como fazer um orçamento de serviços',
    text: 'Veja os campos da proposta, um exemplo com materiais e mão de obra e um checklist antes de enviar.',
    action: 'Ler o guia',
  },
  {
    to: '/calculadora-de-orcamento',
    title: 'Calculadora de orçamento',
    text: 'Simule custos de materiais, horas de trabalho e margem. Entenda a diferença entre margem e acréscimo.',
    action: 'Calcular meu serviço',
  },
  {
    to: '/calculadora-de-desconto',
    title: 'Calculadora de desconto',
    text: 'Veja o preço final e quanto você concede de desconto em reais antes de enviar uma proposta.',
    action: 'Usar gratuitamente',
  },
  {
    to: '/calculadora-de-margem',
    title: 'Calculadora de margem e markup',
    text: 'Compare a margem sobre o preço de venda com o acréscimo sobre o custo. Simule produtos ou serviços com seus próprios valores.',
    action: 'Usar gratuitamente',
  },
  {
    to: '/calculadora-de-custo-hora',
    title: 'Calculadora de custo por hora',
    text: 'Estime quanto cada hora faturável precisa recuperar dos seus custos mensais para preparar orçamentos de serviços.',
    action: 'Usar gratuitamente',
  },
  {
    to: '/calculadora-de-ponto-de-equilibrio',
    title: 'Calculadora de ponto de equilíbrio',
    text: 'Descubra quantas vendas cobrem os custos fixos e variáveis do período.',
    action: 'Usar gratuitamente',
  },
  {
    to: '/calculadora-de-preco-com-taxas',
    title: 'Calculadora de preço com taxas',
    text: 'Considere taxas sobre a venda e a margem desejada ao formar seu preço.',
    action: 'Usar gratuitamente',
  },
]
</script>

<template>
  <section class="resources wrap section" id="materiais">
    <div class="resources-heading" v-reveal>
      <span class="eyebrow">MATERIAIS GRATUITOS</span>
      <h2>Guias e calculadoras <em>gratuitas.</em></h2>
      <p class="intro">
        Ferramentas gratuitas e exemplos para tirar a proposta do papel.
      </p>
    </div>
    <ul class="resource-index">
      <li v-for="(item, index) in resources" :key="item.to" v-reveal>
        <NuxtLink class="resource" :to="item.to">
          <span class="resource-number">{{
            String(index + 1).padStart(2, '0')
          }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <span class="resource-action"
            ><span class="sr-label">{{ item.action }}</span
            ><span class="arrow" aria-hidden="true">→</span></span
          >
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.resources-heading {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  align-items: end;
  column-gap: var(--spacing-5xl);
}
.resources-heading .eyebrow {
  grid-column: 1 / -1;
}
.resources-heading h2 {
  margin-bottom: 0;
}
.intro {
  font-size: var(--typography-body-lg-font-size);
  color: var(--color-on-surface-muted);
  line-height: var(--typography-body-lg-line-height);
  padding-bottom: var(--spacing-sm);
}
.resource-index {
  margin: var(--spacing-4xl) 0 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid var(--color-outline);
}
.resource-index li {
  border-top: 1px solid var(--color-outline);
}
.resource {
  position: relative;
  display: grid;
  grid-template-columns: 56px 1.1fr 1.3fr 170px;
  gap: var(--spacing-3xl);
  align-items: center;
  padding: 28px var(--spacing-lg);
  overflow: hidden;
  isolation: isolate;
  transition: color 0.5s var(--ease-editorial);
}
.resource::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--color-primary);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.5s var(--ease-editorial);
}
.resource:hover,
.resource:focus-visible {
  color: var(--color-on-primary);
}
.resource:hover::before,
.resource:focus-visible::before {
  transform: scaleY(1);
}
.resource-number {
  font-size: var(--typography-label-sm-font-size);
  letter-spacing: 1.2px;
  color: var(--color-secondary);
}
.resource h3 {
  font-size: var(--typography-title-lg-font-size);
  font-weight: var(--typography-title-lg-font-weight);
  letter-spacing: var(--typography-title-lg-letter-spacing);
  line-height: var(--typography-title-lg-line-height);
}
.resource p {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  color: var(--color-on-surface-muted);
}
.resource-number,
.resource p {
  transition: color 0.5s var(--ease-editorial);
}
.resource:hover .resource-number,
.resource:hover p,
.resource:focus-visible .resource-number,
.resource:focus-visible p {
  color: var(--color-on-primary);
}
.resource-action {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--typography-body-sm-font-size);
}
.arrow {
  display: inline-block;
  font-size: var(--typography-title-lg-font-size);
  transition: transform 0.5s var(--ease-editorial);
}
.resource:hover .arrow,
.resource:focus-visible .arrow {
  transform: translateX(8px);
}
@media (max-width: 1050px) {
  .resources-heading {
    grid-template-columns: 1fr;
  }
  .resource {
    grid-template-columns: 40px 1fr auto;
    gap: var(--spacing-xs) var(--spacing-xl);
  }
  .resource p {
    grid-column: 2;
    grid-row: 2;
  }
  .resource-action {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
}
@media (max-width: 760px) {
  .resource {
    grid-template-columns: 1fr auto;
    padding: var(--spacing-xl) 0;
  }
  .resource::before {
    display: none;
  }
  .resource:hover,
  .resource:hover .resource-number,
  .resource:hover p {
    color: inherit;
  }
  .resource:hover p {
    color: var(--color-on-surface-muted);
  }
  .resource-number {
    grid-column: 1;
  }
  .resource h3 {
    grid-column: 1;
    font-size: var(--typography-title-md-font-size);
  }
  .resource p {
    grid-column: 1;
    grid-row: auto;
  }
  .resource-action {
    grid-column: 2;
    grid-row: 1 / span 3;
  }
  .sr-label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }
}
</style>
