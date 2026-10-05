<script setup>
const appUrl = useRuntimeConfig().public.appUrl
</script>

<template>
  <section class="closing">
    <div class="wrap">
      <h2>
        Menos tempo orçando.<br /><em>Mais espaço para fazer acontecer.</em>
      </h2>
      <a class="button light" :href="appUrl"
        >Criar meu primeiro orçamento <span>↗</span></a
      ><span class="closing-note">Seu próximo negócio começa aqui.</span>
    </div>
    <span class="closing-decoration" aria-hidden="true">✳</span>
  </section>
</template>

<style scoped>
.closing {
  background: #183e31;
  color: #f3f6e8;
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
  font-size: 43px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -1.8px;
  margin: 20px 0 28px;
}

.closing em {
  font-size: 51px;
  color: #c1d2a4;
}

.light {
  background: #e8efd6;
  color: #24422f;
}

.closing-note {
  font-size: 10px;
  color: #b0bea2;
  margin-left: 20px;
}

.closing-decoration {
  position: absolute;
  font-size: 460px;
  line-height: 1;
  color: #2b5140;
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

.closing {
  background:
    radial-gradient(ellipse at 95% 80%, #356247 0, transparent 62%),
    linear-gradient(110deg, #103c2b, #1d4934);
}

.closing em {
  color: #d5e9b6;
}

.closing-note {
  color: #cedbc0;
}

.closing-decoration {
  color: #60895135;
}

[data-theme='dark'] .closing {
  background:
    radial-gradient(ellipse at 95% 80%, #38563a, transparent 62%),
    linear-gradient(110deg, #0a281b, #1b3825);
}
</style>
