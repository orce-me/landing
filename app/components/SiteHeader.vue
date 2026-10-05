<script setup>
const appUrl = useRuntimeConfig().public.appUrl
const menuOpen = ref(false)
</script>

<template>
  <header class="header wrap" :class="{ 'menu-open': menuOpen }">
    <a class="brand" href="/" aria-label="orce-me, início"
      ><span class="mark">o<span></span></span>orce-me<span class="brand-dot"
        >.</span
      ></a
    >
    <nav
      id="site-navigation"
      aria-label="Navegação principal"
      @click="menuOpen = false"
    >
      <a href="/#como-funciona">Como funciona</a
      ><a href="/#recursos">Recursos</a><a href="/#planos">Planos</a>
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

<style scoped>
.header {
  height: 108px;
  display: flex;
  align-items: center;
  gap: 45px;
  border-bottom: 1px solid var(--color-outline);
}

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

.mark {
  position: relative;
  border: 2.5px solid var(--color-primary);
  border-radius: var(--rounded-full);
  font-size: 0;
  width: 24px;
  height: 24px;
  margin-right: 11px;
}

.mark span {
  position: absolute;
  width: 9px;
  height: 9px;
  right: -6px;
  top: -5px;
  border-radius: var(--rounded-full);
  background: var(--color-tertiary);
  border: 2px solid var(--color-neutral);
}

.header nav {
  display: flex;
  gap: 32px;
  margin: auto;
  font-size: var(--typography-label-lg-font-size);
  font-weight: var(--typography-label-lg-font-weight);
}

.login {
  font-size: var(--typography-label-lg-font-size);
  font-weight: var(--typography-label-lg-font-weight);
  display: flex;
  gap: 22px;
}

.menu {
  display: none;
}

@media (max-width: 760px) {
  .header {
    height: 82px;
    gap: 20px;
  }
}

@media (max-width: 760px) {
  .header .brand {
    font-size: 26px;
  }
}

@media (max-width: 760px) {
  .header nav {
    display: none;
  }
}

@media (max-width: 760px) {
  .login {
    margin-left: auto;
  }
}

@media (max-width: 760px) {
  .menu {
    display: block;
    background: none;
    border: 0;
    font-size: 22px;
    color: var(--color-primary);
  }
}

@media (max-width: 760px) {
  .menu-open nav {
    display: flex;
    position: absolute;
    left: 20px;
    right: 20px;
    top: 75px;
    background: var(--color-surface);
    border: 1px solid var(--color-outline);
    border-radius: var(--rounded-lg);
    padding: 22px;
    z-index: 10;
    justify-content: space-between;
    gap: 15px;
  }
}

@media (max-width: 760px) {
  .header {
    gap: 16px;
  }
}
</style>
