<script setup>
defineProps({
  title: { type: String, required: true },
  intro: { type: String, required: true },
})
</script>
<template>
  <article class="tool-page wrap">
    <GuideBreadcrumbs :current="title" />
    <h1>{{ title }}</h1>
    <p class="intro">{{ intro }}</p>
    <p class="free">
      Grátis e sem cadastro. Os cálculos acontecem no seu navegador.
    </p>
    <slot />
    <div class="explanation"><slot name="explanation" /></div>
    <nav class="related" aria-label="Outras ferramentas gratuitas">
      <h2>Continue preparando seu orçamento</h2>
      <NuxtLink to="/calculadora-de-orcamento"
        >Calculadora de orçamento de serviços</NuxtLink
      >
      <NuxtLink to="/calculadora-de-desconto">Calculadora de desconto</NuxtLink>
      <NuxtLink to="/calculadora-de-margem"
        >Calculadora de margem e markup</NuxtLink
      >
      <NuxtLink to="/calculadora-de-custo-hora"
        >Calculadora de custo por hora</NuxtLink
      >
      <NuxtLink to="/como-fazer-orcamento-de-servicos"
        >Como fazer um orçamento de serviços</NuxtLink
      >
      <NuxtLink to="/calculadora-de-ponto-de-equilibrio"
        >Calculadora de ponto de equilíbrio</NuxtLink
      >
      <NuxtLink to="/calculadora-de-preco-com-taxas"
        >Calculadora de preço com taxas</NuxtLink
      >
    </nav>
  </article>
</template>
<style scoped>
.tool-page {
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
.intro {
  font-size: var(--typography-lead-font-size);
  line-height: var(--typography-lead-line-height);
  color: var(--color-on-surface-muted);
  max-width: var(--spacing-measure);
}
.free {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  margin-top: 15px;
  color: var(--color-on-surface-muted);
}
.explanation :deep(section) {
  margin-top: 42px;
  max-width: var(--spacing-measure);
}
.explanation :deep(h2),
h2 {
  font-size: var(--typography-title-xl-font-size);
  font-weight: var(--typography-title-xl-font-weight);
  line-height: var(--typography-title-xl-line-height);
  margin-bottom: 18px;
}
.explanation :deep(p) {
  font-size: var(--typography-body-lg-font-size);
  line-height: var(--typography-body-lg-line-height);
  color: var(--color-on-surface-muted);
  margin: 16px 0;
}
.explanation :deep(.formula) {
  padding: 20px;
  font-weight: 500;
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-md);
}
.related {
  margin-top: 45px;
  display: grid;
  gap: 16px;
}
.related a {
  font-size: var(--typography-body-lg-font-size);
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media (max-width: 760px) {
  .tool-page {
    padding-top: 25px;
  }
  h1 {
    font-size: 32px;
  }
  .explanation :deep(h2),
  h2 {
    font-size: 23px;
  }
}
</style>
