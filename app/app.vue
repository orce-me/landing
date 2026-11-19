<script setup>
import sansFont from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url'
import displayFont from '@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-opsz-normal.woff2?url'

useHead({
  link: [
    {
      rel: 'preload',
      href: sansFont,
      as: 'font',
      type: 'font/woff2',
      crossorigin: '',
    },
    {
      rel: 'preload',
      href: displayFont,
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
