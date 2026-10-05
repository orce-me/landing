<script setup>
const appUrl = useRuntimeConfig().public.appUrl
const menuOpen = ref(false)
</script>

<template>
  <header class="header wrap" :class="{ 'menu-open': menuOpen }">
    <a class="brand" href="#" aria-label="orce-me, início"
      ><span class="mark">o<span></span></span>orce-me<span class="brand-dot"
        >.</span
      ></a
    >
    <nav
      id="site-navigation"
      aria-label="Navegação principal"
      @click="menuOpen = false"
    >
      <a href="#como-funciona">Como funciona</a><a href="#recursos">Recursos</a
      ><a href="#planos">Planos</a>
    </nav>
    <a class="login" :href="appUrl">Entrar <span>↗</span></a
    ><ThemeToggle /><button
      class="menu"
      :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
      :aria-expanded="menuOpen"
      aria-controls="site-navigation"
      @click="menuOpen = !menuOpen"
    >
      ☰
    </button>
  </header>
</template>
