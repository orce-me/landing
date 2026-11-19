<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="closing">
    <div class="wrap">
      <h2 v-reveal>
        Menos tempo orçando.<br /><em>Mais espaço para fazer acontecer.</em>
      </h2>
      <div class="closing-action" v-reveal="1">
        <a class="button ink" :href="appUrl">Criar meu primeiro orçamento</a>
      </div>
    </div>
    <span class="closing-decoration" aria-hidden="true">✳</span>
  </section>
</template>

<style scoped>
/* A vermilion slab in both themes, with ink text and the ink button. */
.closing {
  background: var(--color-primary);
  color: var(--color-on-primary);
  position: relative;
  overflow: hidden;
}

.closing > .wrap {
  padding-top: 120px;
  padding-bottom: 120px;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: var(--spacing-4xl);
}

.closing h2 {
  max-width: 980px;
  font-size: var(--typography-headline-lg-font-size);
  font-weight: var(--typography-headline-lg-font-weight);
  line-height: var(--typography-headline-lg-line-height);
  letter-spacing: var(--typography-headline-lg-letter-spacing);
}

.closing em {
  font-size: var(--typography-headline-lg-accent-font-size);
  letter-spacing: var(--typography-headline-lg-accent-letter-spacing);
  background: var(--color-on-primary);
  color: var(--color-primary);
  border-radius: var(--rounded-md);
}

.closing-decoration {
  position: absolute;
  font-size: 520px;
  line-height: 1;
  color: var(--color-on-primary);
  opacity: 0.12;
  right: -40px;
  top: -80px;
  animation: spin 30s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1050px) {
  .closing h2,
  .closing em {
    font-size: 64px;
    letter-spacing: -2.6px;
  }
}

@media (max-width: 760px) {
  .closing > .wrap {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    padding-top: 72px;
    padding-bottom: 72px;
  }
  .closing h2,
  .closing em {
    font-size: 44px;
    letter-spacing: -1.8px;
  }
  .closing-decoration {
    right: -160px;
    font-size: 350px;
    top: 20px;
  }
}
</style>
