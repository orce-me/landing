<script setup>
defineProps({ current: { type: String, required: true } })
</script>

<template>
  <nav class="breadcrumbs" aria-label="Caminho da página">
    <ol>
      <li><NuxtLink to="/">orce-me</NuxtLink></li>
      <li aria-hidden="true">/</li>
      <li aria-current="page">{{ current }}</li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--typography-body-sm-font-size);
  color: var(--color-on-surface-muted);
  line-height: var(--typography-body-sm-line-height);
}
.breadcrumbs a {
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
