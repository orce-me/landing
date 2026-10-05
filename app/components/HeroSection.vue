<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="hero wrap">
    <div class="hero-copy">
      <h1>Um bom orçamento.<br />Um próximo<br /><em>grande negócio.</em></h1>
      <p>
        Transforme produtos e serviços em propostas que dão gosto de enviar. Sem
        refazer planilhas. Sem perder tempo. Com a sua marca.
      </p>
      <div class="actions">
        <a class="button primary" :href="appUrl"
          >Criar meu primeiro orçamento <span>↗</span></a
        ><a class="text-link" href="#demonstracao"
          >Conhecer por dentro <span>↓</span></a
        >
      </div>
    </div>
    <QuoteDemo />
  </section>
</template>
