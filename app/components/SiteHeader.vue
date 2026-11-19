<script setup>
const appUrl = useRuntimeConfig().public.appUrl
const menuOpen = ref(false)
const menuButton = ref(null)
const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
const scrolled = ref(false)
function onScroll() {
  scrolled.value = window.scrollY > 8
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
function closeMenu() {
  menuOpen.value = false
  menuButton.value?.focus()
}
</script>

<template>
  <header
    class="site-header"
    :class="{ 'menu-open': menuOpen, scrolled }"
    @keydown.esc="closeMenu"
  >
    <div class="header wrap">
      <a class="brand" href="/" aria-label="orce.me, início"
        ><span class="mark">o<span></span></span>orce<span class="brand-dot"
          >.</span
        >me</a
      >
      <nav
        id="site-navigation"
        aria-label="Navegação principal"
        @click="menuOpen = false"
      >
        <a href="/#como-funciona">Como funciona</a>
        <a href="/#recursos">Funcionalidades</a>
        <a href="/#materiais">Ferramentas</a>
        <NuxtLink to="/planos-e-precos">Planos e preços</NuxtLink>
        <NuxtLink to="/ajuda">Ajuda</NuxtLink>
      </nav>
      <a class="login" :href="appUrl">Entrar</a><ThemeToggle /><button
        ref="menuButton"
        class="menu"
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="menuOpen"
        aria-controls="site-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="menu-icon" aria-hidden="true"><i></i><i></i><i></i></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--color-neutral) 92%, transparent);
  backdrop-filter: blur(14px) saturate(1.2);
  -webkit-backdrop-filter: blur(14px) saturate(1.2);
  border-bottom: 1px solid transparent;
  transition: background 0.2s;
}
.site-header.scrolled {
  border-bottom-color: var(--color-outline);
}
.header {
  position: relative;
  height: 84px;
  display: flex;
  align-items: center;
  gap: 24px;
}
.header nav a {
  position: relative;
  padding: var(--spacing-xs) 0;
}
.header nav a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s var(--ease-editorial);
}
.header nav a:hover::after,
.header nav a.router-link-exact-active::after {
  transform: scaleX(1);
  transform-origin: left;
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
  gap: 24px;
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
.menu-icon {
  display: inline-grid;
  gap: 4px;
  width: 18px;
  vertical-align: middle;
}
.menu-icon i {
  display: block;
  height: 2px;
  background: currentColor;
  border-radius: var(--rounded-full);
}

@media (max-width: 760px) {
  .header {
    height: 72px;
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
    top: 68px;
    background: var(--color-surface);
    border: 1px solid var(--color-outline);
    border-radius: var(--rounded-lg);
    padding: 22px;
    z-index: 10;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
}

@media (max-width: 760px) {
  .header {
    gap: 16px;
  }
}

@media (min-width: 761px) and (max-width: 1050px) {
  .header {
    gap: var(--spacing-lg);
  }
  .header nav {
    gap: var(--spacing-md);
    font-size: var(--typography-body-sm-font-size);
  }
}
@media (max-width: 760px) {
  .header nav a {
    padding: var(--spacing-sm) 0;
    width: 100%;
  }
  .header nav a::after {
    display: none;
  }
  .menu {
    min-width: 36px;
    min-height: 44px;
  }
}
</style>
