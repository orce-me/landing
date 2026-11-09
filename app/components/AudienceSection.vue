<script setup>
const audiences = [
  'Instaladores',
  'Prestadores de serviço',
  'Pequenos negócios',
  'Quem vende e instala',
]
</script>

<template>
  <section class="audience" aria-label="Para quem faz o negócio acontecer">
    <div class="audience-inner wrap">
      <span class="audience-label">PARA QUEM FAZ<br />O NEGÓCIO ACONTECER</span>
      <div
        class="audience-carousel"
        tabindex="0"
        aria-label="Públicos atendidos; passe o mouse ou foque para pausar"
      >
        <div class="audience-track">
          <ul
            v-for="copy in 2"
            :key="copy"
            class="audience-group"
            :aria-hidden="copy === 2 ? 'true' : undefined"
          >
            <li v-for="audience in audiences" :key="audience">
              {{ audience }}<span aria-hidden="true">✳</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.audience {
  border-top: 1px solid var(--color-outline);
  border-bottom: 1px solid var(--color-outline);
}
.audience-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  padding-top: 21px;
  padding-bottom: 21px;
}
.audience-label {
  flex-shrink: 0;
  font-size: 10px;
  line-height: 1.6;
  letter-spacing: 1px;
  color: var(--color-on-surface-muted);
}
.audience-carousel {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 2%,
    #000 98%,
    transparent
  );
}
.audience-carousel:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 5px;
}
.audience-track {
  display: flex;
  width: max-content;
  animation: audience-scroll 32s linear infinite;
}
.audience-group {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  list-style: none;
  padding: 0;
  margin: 0;
}
.audience-group li {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-right: 24px;
  white-space: nowrap;
  font-size: 13px;
  color: var(--color-on-surface-muted);
}
.audience-group li span {
  color: var(--color-tertiary);
  font-size: 15px;
}
.audience-carousel:hover .audience-track,
.audience-carousel:focus-within .audience-track {
  animation-play-state: paused;
}
@keyframes audience-scroll {
  to {
    transform: translateX(-50%);
  }
}
@media (max-width: 760px) {
  .audience-inner {
    flex-direction: column;
    gap: 14px;
  }
  .audience-label {
    text-align: center;
  }
  .audience-carousel {
    flex: auto;
    width: 100%;
  }
}
@media (prefers-reduced-motion: reduce) {
  .audience-track {
    animation: none;
    width: 100%;
  }
  .audience-group {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
  .audience-group[aria-hidden='true'] {
    display: none;
  }
  .audience-group li {
    padding: 0;
    white-space: normal;
  }
  .audience-group li span {
    display: none;
  }
  .audience-carousel {
    mask-image: none;
  }
}
</style>
