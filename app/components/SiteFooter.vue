<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="wrap">
    <a class="brand" href="/">orce-me<span class="brand-dot">.</span></a
    ><span>Feito para quem faz.</span
    ><a href="/#duvidas">Dúvidas frequentes ↗</a
    ><NuxtLink to="/como-fazer-orcamento-de-servicos"
      >Guia de orçamentos</NuxtLink
    ><small>© {{ year }} orce-me</small>
  </footer>
</template>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  font-size: var(--typography-brand-font-size);
  font-weight: var(--typography-brand-font-weight);
  line-height: var(--typography-brand-line-height);
  letter-spacing: var(--typography-brand-letter-spacing);
}

.brand-dot {
  color: var(--color-tertiary);
}

footer {
  display: flex;
  align-items: center;
  gap: 35px;
  padding-top: 32px;
  padding-bottom: 32px;
}

footer .brand {
  font-size: 24px;
}

footer > span,
footer small {
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}

footer > a:not(.brand) {
  margin-left: auto;
  font-size: var(--typography-label-sm-font-size);
}

@media (max-width: 760px) {
  footer {
    flex-wrap: wrap;
    gap: 18px;
  }
}

@media (max-width: 760px) {
  footer > a:not(.brand) {
    margin-left: 0;
  }
}

@media (max-width: 760px) {
  footer small {
    margin-left: auto;
  }
}
</style>
