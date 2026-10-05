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
  font-weight: 700;
  font-size: 29px;
  letter-spacing: -1.5px;
}

.brand-dot {
  color: #8aa357;
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

footer > span {
  font-size: 10px;
  color: #8c9780;
}

footer > a:not(.brand) {
  margin-left: auto;
  font-size: 10px;
}

footer small {
  font-size: 9px;
  color: #8c9780;
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

footer > span,
footer small {
  color: #54664b;
}
[data-theme='dark'] footer > span,
[data-theme='dark'] footer small {
  color: #b3c4a6;
}
</style>
