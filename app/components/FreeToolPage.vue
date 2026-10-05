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
    </nav>
  </article>
</template>
<style scoped>
.tool-page {
  max-width: 1040px;
  padding-top: 45px;
  padding-bottom: 80px;
}
h1 {
  font-size: 44px;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: -1.5px;
  margin: 30px 0 22px;
}
.intro {
  font-size: 16px;
  line-height: 1.9;
  color: var(--muted);
  max-width: 780px;
}
.free {
  font-size: 13px;
  line-height: 1.7;
  margin-top: 15px;
  color: var(--muted);
}
.explanation :deep(section) {
  margin-top: 42px;
  max-width: 780px;
}
.explanation :deep(h2),
h2 {
  font-size: 26px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 18px;
}
.explanation :deep(p) {
  font-size: 14px;
  line-height: 1.9;
  color: var(--muted);
  margin: 16px 0;
}
.explanation :deep(.formula) {
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 6px;
}
.related {
  margin-top: 45px;
  display: grid;
  gap: 16px;
}
.related a {
  font-size: 14px;
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
}
</style>
