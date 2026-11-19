<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="closing wrap">
    <div class="closing-card" v-reveal>
      <h2>
        Menos tempo orçando.<br /><em>Mais espaço para fazer acontecer.</em>
      </h2>
      <a class="button primary" :href="appUrl"
        >Criar meu primeiro orçamento
        <span class="arrow-dot" aria-hidden="true">→</span></a
      >
    </div>
  </section>
</template>

<style scoped>
/* A soft emerald card with a sun wash and the primary button. */
.closing {
  padding-top: var(--spacing-section);
  padding-bottom: var(--spacing-section);
}
.closing-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-3xl);
  padding: 88px var(--spacing-4xl);
  text-align: center;
  background:
    radial-gradient(
      50% 80% at 85% 20%,
      var(--color-tertiary-soft),
      transparent 70%
    ),
    var(--color-primary-soft);
  color: var(--color-on-surface);
  border-radius: var(--rounded-xl);
}
.closing h2 {
  max-width: 820px;
  font-size: var(--typography-headline-lg-font-size);
  font-weight: var(--typography-headline-lg-font-weight);
  line-height: var(--typography-headline-lg-line-height);
  letter-spacing: var(--typography-headline-lg-letter-spacing);
}
.closing em {
  font-size: var(--typography-headline-lg-accent-font-size);
  letter-spacing: var(--typography-headline-lg-accent-letter-spacing);
}
@media (max-width: 1050px) {
  .closing h2,
  .closing em {
    font-size: 46px;
  }
}
@media (max-width: 760px) {
  .closing {
    padding-top: var(--spacing-section-mobile);
    padding-bottom: var(--spacing-section-mobile);
  }
  .closing-card {
    align-items: flex-start;
    text-align: left;
    gap: var(--spacing-2xl);
    padding: var(--spacing-4xl) var(--spacing-2xl);
  }
  .closing h2,
  .closing em {
    font-size: 36px;
    letter-spacing: -0.8px;
  }
}
</style>
