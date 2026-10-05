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
  font-size: 12px;
  color: var(--muted);
  line-height: 1.7;
}
.breadcrumbs a {
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
