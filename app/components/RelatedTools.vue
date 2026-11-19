<script setup>
// The free tools, linked from every calculator so each one stays reachable
// without a listing on the home page.
const props = defineProps({ current: { type: String, default: '' } })
const tools = [
  ['/calculadora-de-orcamento', 'Calculadora de orçamento de serviços'],
  ['/calculadora-de-desconto', 'Calculadora de desconto'],
  ['/calculadora-de-margem', 'Calculadora de margem e markup'],
  ['/calculadora-de-custo-hora', 'Calculadora de custo por hora'],
  ['/como-fazer-orcamento-de-servicos', 'Como fazer um orçamento de serviços'],
  ['/calculadora-de-ponto-de-equilibrio', 'Calculadora de ponto de equilíbrio'],
  ['/calculadora-de-preco-com-taxas', 'Calculadora de preço com taxas'],
].filter(([to]) => to !== props.current)
</script>

<template>
  <nav class="related" aria-label="Outras ferramentas gratuitas">
    <h2>Continue preparando seu orçamento</h2>
    <NuxtLink v-for="[to, label] in tools" :key="to" :to="to">{{
      label
    }}</NuxtLink>
  </nav>
</template>

<style scoped>
.related {
  margin-top: 45px;
  display: grid;
  gap: 16px;
}
h2 {
  font-size: var(--typography-title-xl-font-size);
  font-weight: var(--typography-title-xl-font-weight);
  line-height: var(--typography-title-xl-line-height);
  margin-bottom: 18px;
}
.related a {
  font-size: var(--typography-body-lg-font-size);
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media (max-width: 760px) {
  h2 {
    font-size: 23px;
  }
}
</style>
