<script setup>
import sansFont from '@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2?url'

useHead({
  link: [
    {
      rel: 'preload',
      href: sansFont,
      as: 'font',
      type: 'font/woff2',
      crossorigin: '',
    },
  ],
})
</script>

<template>
  <a class="skip" href="#conteudo">Pular para o conteúdo</a>
  <SiteHeader />
  <main id="conteudo">
    <NuxtPage />
  </main>
  <SiteFooter />
</template>
