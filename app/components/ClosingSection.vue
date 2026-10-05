<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="closing">
    <div class="wrap">
      <h2>
        Menos tempo orçando.<br /><em>Mais espaço para fazer acontecer.</em>
      </h2>
      <a class="button primary-dark" :href="appUrl"
        >Criar meu primeiro orçamento <span>↗</span></a
      ><span class="closing-note">Seu próximo negócio começa aqui.</span>
    </div>
    <span class="closing-decoration" aria-hidden="true">✳</span>
  </section>
</template>

<style scoped>
/* A dark island in both themes. It uses the dark-theme accent and button. */
.closing {
  background:
    radial-gradient(ellipse at 95% 80%, var(--glow-closing), transparent 62%),
    var(--color-inverse-surface);
  color: var(--color-on-inverse-surface);
  position: relative;
  overflow: hidden;
}

.closing > .wrap {
  padding-top: 68px;
  padding-bottom: 68px;
  position: relative;
  z-index: 1;
}

.closing h2 {
  font-size: var(--typography-headline-lg-font-size);
  font-weight: var(--typography-headline-lg-font-weight);
  line-height: var(--typography-headline-lg-line-height);
  letter-spacing: var(--typography-headline-lg-letter-spacing);
  margin: 20px 0 28px;
}

.closing em {
  font-size: var(--typography-headline-lg-accent-font-size);
  letter-spacing: var(--typography-headline-lg-accent-letter-spacing);
  color: var(--color-primary-dark);
}

.closing-note {
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-inverse-surface);
  margin-left: 20px;
}

.closing-decoration {
  position: absolute;
  font-size: 460px;
  line-height: 1;
  color: var(--color-tertiary);
  opacity: 0.2;
  right: 30px;
  top: -40px;
  transform: rotate(15deg);
}

@media (max-width: 760px) {
  .closing h2 {
    font-size: 32px;
    letter-spacing: -1px;
  }
}

@media (max-width: 760px) {
  .closing em {
    font-size: 38px;
    letter-spacing: -1px;
  }
}

@media (max-width: 760px) {
  .closing-decoration {
    right: -160px;
    font-size: 350px;
    top: 20px;
  }
}

@media (max-width: 760px) {
  .closing-note {
    display: block;
    margin: 17px 0 0;
  }
}

@media (max-width: 760px) {
  .closing > .wrap {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>
