<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="closing">
    <div class="wrap">
      <h2>
        Menos tempo orçando.<br /><em>Mais espaço para fazer acontecer.</em>
      </h2>
      <a class="button light" :href="appUrl"
        >Criar meu primeiro orçamento <span>↗</span></a
      ><span class="closing-note">Seu próximo negócio começa aqui.</span>
    </div>
    <span class="closing-decoration" aria-hidden="true">✳</span>
  </section>
</template>
