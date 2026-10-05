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
