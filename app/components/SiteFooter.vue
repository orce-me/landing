<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="wrap">
    <a class="brand" href="/"
      ><BrandMark class="mark" />orce<span class="brand-dot">.</span>me</a
    ><NuxtLink to="/planos-e-precos">Planos e preços</NuxtLink>
    <NuxtLink to="/ajuda">Ajuda</NuxtLink
    ><NuxtLink to="/como-fazer-orcamento-de-servicos"
      >Guia de orçamentos</NuxtLink
    ><NuxtLink to="/calculadora-de-orcamento">Calculadora de orçamento</NuxtLink
    ><small>© {{ year }} orce.me</small>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xl);
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  border-top: 1px solid var(--color-outline);
}

.brand {
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: var(--typography-brand-font-weight);
  line-height: var(--typography-brand-line-height);
  letter-spacing: var(--typography-brand-letter-spacing);
}

.mark {
  width: 22px;
  height: 22px;
  margin-right: 8px;
}

.brand-dot {
  color: var(--color-tertiary);
}

footer > a:not(.brand) {
  font-size: var(--typography-label-lg-font-size);
  color: var(--color-on-surface-muted);
}

footer > a:nth-child(2) {
  margin-left: auto;
}

footer small {
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}

@media (max-width: 760px) {
  footer {
    flex-wrap: wrap;
    gap: var(--spacing-lg);
  }
  footer > a:nth-child(2) {
    margin-left: 0;
  }
  footer small {
    width: 100%;
  }
}
</style>
