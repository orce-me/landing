<script setup>
import sansFont from '@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2?url'
import serifFont from '@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2?url'

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
      href: serifFont,
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
    <HeroSection />
    <AudienceSection />
    <WorkflowSection />
    <FeaturesSection />
    <PlansSection />
    <FaqSection />
    <ClosingSection />
  </main>
  <SiteFooter />
</template>
