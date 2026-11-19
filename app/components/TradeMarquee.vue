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
          <em>{{ trade }}</em
          ><span class="sep" aria-hidden="true">✳</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  border-block: 1px solid var(--color-outline);
  padding: var(--spacing-2xl) 0;
  mask-image: linear-gradient(
    to right,
    transparent,
    var(--color-neutral) 8%,
    var(--color-neutral) 92%,
    transparent
  );
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
em {
  font-size: var(--typography-marquee-font-size);
  line-height: var(--typography-marquee-line-height);
  letter-spacing: var(--typography-marquee-letter-spacing);
  color: var(--color-on-surface);
}
.sep {
  margin: 0 var(--spacing-3xl);
  font-size: var(--typography-title-lg-font-size);
  color: var(--color-tertiary);
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
  em {
    font-size: 40px;
  }
  .sep {
    margin: 0 var(--spacing-xl);
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
