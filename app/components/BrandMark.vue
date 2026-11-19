<script setup>
import { useId } from 'vue'

// The orce.me mark, the same drawing as in the web app: an emerald rounded
// square lit from the top, holding the white ring of the "o" with a
// sun-yellow dot above its shoulder (the dot that ends the wordmark).
const id = useId()
const fill = `${id}-fill`
const shine = `${id}-shine`
</script>

<template>
  <svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
    <defs>
      <linearGradient :id="fill" x1="0" y1="0" x2="0.9" y2="1">
        <stop
          offset="0"
          style="
            stop-color: color-mix(in oklch, var(--color-primary), white 14%);
          "
        />
        <stop
          offset="1"
          style="
            stop-color: color-mix(in oklch, var(--color-primary), black 28%);
          "
        />
      </linearGradient>
      <linearGradient :id="shine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="white" stop-opacity="0.32" />
        <stop offset="0.5" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="11" :fill="`url(#${fill})`" />
    <rect
      x="0.75"
      y="0.75"
      width="38.5"
      height="38.5"
      rx="10.25"
      fill="none"
      :stroke="`url(#${shine})`"
      stroke-width="1.5"
    />
    <circle
      cx="18"
      cy="22"
      r="8"
      fill="none"
      stroke="white"
      stroke-width="4.25"
    />
    <circle
      cx="29.25"
      cy="10.75"
      r="3.75"
      style="fill: var(--color-tertiary)"
    />
  </svg>
</template>

<style scoped>
.brand-mark {
  flex-shrink: 0;
  overflow: visible;
}
</style>
