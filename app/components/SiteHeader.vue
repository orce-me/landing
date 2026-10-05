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

<style scoped>
.header {
  height: 108px;
  display: flex;
  align-items: center;
  gap: 45px;
}

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

.mark {
  position: relative;
  border: 2.5px solid var(--green);
  border-radius: 50%;
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
  border-radius: 50%;
  background: #8ba861;
  border: 2px solid #fafbf6;
}

.header nav {
  display: flex;
  gap: 32px;
  margin: auto;
  font-size: 13px;
  font-weight: 500;
}

.login {
  font-size: 13px;
  font-weight: 600;
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
    color: #174c3c;
  }
}

@media (max-width: 760px) {
  .menu-open nav {
    display: flex;
    position: absolute;
    left: 20px;
    right: 20px;
    top: 75px;
    background: #fafbf6;
    border: 1px solid #dce4d3;
    border-radius: 8px;
    padding: 22px;
    z-index: 10;
    justify-content: space-between;
    gap: 15px;
  }
}

.header {
  border-bottom: 1px solid #d8e0ce;
}

@media (max-width: 760px) {
  .menu-open nav {
    background: #f7f8f2;
  }
}

[data-theme='dark'] .header {
  border-color: #2c4132;
}

[data-theme='dark'] .mark span {
  border-color: #101c17;
}

[data-theme='dark'] .menu {
  color: #c5dcaa;
}

[data-theme='dark'] .menu-open nav {
  background: #1b2b21;
  border-color: #405536;
}

@media (max-width: 760px) {
  .header {
    gap: 16px;
  }
}
</style>
