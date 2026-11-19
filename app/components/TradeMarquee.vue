<script setup>
const trades = [
  'Confeitarias',
  'Instaladores',
  'Fotógrafos',
  'Manutenção',
  'Pintores',
  'Decoradores',
  'Eletricistas',
  'Prestadores de serviço',
]
</script>

<template>
  <div class="marquee" aria-label="Exemplos de pequenos negócios">
    <div class="track">
      <ul v-for="copy in 2" :key="copy" :aria-hidden="copy === 2 || undefined">
        <li v-for="trade in trades" :key="trade">
          <span class="trade">{{ trade }}</span
          ><span class="sep" aria-hidden="true">✳</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  position: relative;
  z-index: 1;
  width: 110%;
  margin-left: -5%;
  overflow: hidden;
  padding: var(--spacing-xl) 0;
  background: var(--color-primary);
  color: var(--color-on-primary);
  transform: rotate(-2deg);
}
.track {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}
.marquee:hover .track {
  animation-play-state: paused;
}
ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.trade {
  font-family: var(--typography-marquee-font-family), Arial, sans-serif;
  font-size: var(--typography-marquee-font-size);
  font-weight: var(--typography-marquee-font-weight);
  line-height: var(--typography-marquee-line-height);
  letter-spacing: var(--typography-marquee-letter-spacing);
}
.sep {
  margin: 0 var(--spacing-3xl);
  font-size: var(--typography-headline-md-font-size);
  line-height: 1;
}
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}
@media (max-width: 760px) {
  .marquee {
    padding: var(--spacing-lg) 0;
  }
  .trade {
    font-size: 40px;
    letter-spacing: -1.4px;
  }
  .sep {
    margin: 0 var(--spacing-xl);
    font-size: 28px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .track {
    animation: none;
    flex-wrap: wrap;
    width: auto;
  }
  ul + ul {
    display: none;
  }
}
</style>
