<script setup>
const { dark, toggle } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    id="theme-toggle"
    type="button"
    :aria-label="dark ? 'Ativar tema claro' : 'Ativar tema escuro'"
    :aria-pressed="dark"
    @click="toggle"
  >
    <svg class="moon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 13.5A9 9 0 0 1 10.5 3.5a9 9 0 1 0 10 10Z" /></svg
    ><svg class="sun" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"
      />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: inherit;
  background: transparent;
  margin-left: -23px;
  transition: background 0.2s;
}

.theme-toggle:hover {
  background: #81976c20;
}

.theme-toggle svg {
  width: 17px;
  height: 17px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.theme-toggle .sun {
  display: none;
}

[data-theme='dark'] .theme-toggle .sun {
  display: block;
}

[data-theme='dark'] .theme-toggle .moon {
  display: none;
}

:global(::view-transition-old(root)),
:global(::view-transition-new(root)) {
  animation: none;
  mix-blend-mode: normal;
}

:global(::view-transition-new(root)) {
  z-index: 2;
}

:global(::view-transition-old(root)) {
  z-index: 1;
}

@media (max-width: 760px) {
  .theme-toggle {
    margin-left: 0;
  }
}
</style>
