<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="wrap footer-wordmark" aria-hidden="true">
      orce<span class="brand-dot">.</span>me
    </div>
    <div class="wrap footer-links">
      <a class="brand" href="/">orce<span class="brand-dot">.</span>me</a
      ><NuxtLink to="/planos-e-precos">Planos e preços</NuxtLink>
      <NuxtLink to="/ajuda">Ajuda</NuxtLink
      ><NuxtLink to="/como-fazer-orcamento-de-servicos"
        >Guia de orçamentos</NuxtLink
      ><small>© {{ year }} orce.me</small>
    </div>
  </footer>
</template>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: var(--typography-brand-font-weight);
  line-height: var(--typography-brand-line-height);
  letter-spacing: var(--typography-brand-letter-spacing);
}

.brand-dot {
  color: var(--color-tertiary);
}

.footer-wordmark {
  padding-top: var(--spacing-4xl);
  font-size: clamp(88px, 21vw, 290px);
  font-weight: var(--typography-brand-font-weight);
  line-height: 0.8;
  letter-spacing: -0.06em;
  color: var(--color-primary);
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 35px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-top: 1px solid var(--color-outline);
  margin-top: var(--spacing-xl);
}

.footer-links small {
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}

.footer-links > a:not(.brand) {
  font-size: var(--typography-label-sm-font-size);
}

.footer-links > a:nth-child(2) {
  margin-left: auto;
}

@media (max-width: 760px) {
  .footer-links {
    flex-wrap: wrap;
    gap: 18px;
  }
  .footer-links > a:nth-child(2) {
    margin-left: 0;
  }
  .footer-links small {
    margin-left: auto;
  }
}
</style>
