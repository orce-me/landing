<script setup>
const quantity = ref(1)
const preview = useTemplateRef('preview')
function openPreview() {
  preview.value?.open()
}
</script>

<template>
  <div class="hero-visual" id="demonstracao">
    <div class="orbit orbit-one"></div>
    <div class="orbit orbit-two"></div>
    <div class="float-label">
      <span class="spark">✦</span> Seu catálogo. Sua marca. Seu jeito.
    </div>
    <div class="app-window" data-nosnippet>
      <div class="window-bar">
        <div class="dots"><i></i><i></i><i></i></div>
        <span>Seu espaço de trabalho</span><span class="avatar">AC</span>
      </div>
      <QuoteDocument
        v-model:quantity="quantity"
        editable
        @preview="openPreview"
      />
    </div>
    <div class="success-float">
      <span class="check-icon">✓</span>
      <div>
        Pronto para impressionar.<small
          >Um PDF com a identidade da sua empresa.</small
        >
      </div>
    </div>
    <p class="demo-caption">
      Prévia ilustrativa · experimente alterar a quantidade
    </p>
  </div>
  <QuotePreview ref="preview" :quantity="quantity" />
</template>

<style scoped>
.hero-visual {
  position: relative;
  padding-top: 70px;
  padding-bottom: 40px;
  isolation: isolate;
}

.hero-visual:before {
  content: '';
  position: absolute;
  z-index: -2;
  inset: -90px -100px;
  background: var(--glow-hero);
  border-radius: 50%;
}

.orbit {
  position: absolute;
  border: 1px solid var(--orbit);
  border-radius: 50%;
  z-index: -1;
  pointer-events: none;
}

.orbit-one {
  width: 570px;
  height: 570px;
  left: -8px;
  top: -66px;
}

.orbit-two {
  width: 450px;
  height: 450px;
  left: 50px;
  top: -6px;
}

.float-label {
  position: absolute;
  right: 15px;
  top: 0;
  z-index: 2;
  border: 1px solid var(--color-outline);
  background: var(--color-surface-tint);
  color: var(--color-on-surface);
  box-shadow: var(--shadow-raised);
  padding: 12px 18px;
  border-radius: var(--rounded-lg);
  font-size: var(--typography-label-sm-font-size);
  transform: rotate(4deg);
}

.spark {
  color: var(--color-tertiary);
  font-size: 16px;
  margin-right: 9px;
}

/* Illustrative mockups use their own reduced type scale. */
.app-window {
  background: var(--color-surface-raised);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-lg);
  box-shadow: var(--shadow-floating);
  transform: rotate(-2deg);
  position: relative;
}

.window-bar {
  display: flex;
  align-items: center;
  padding: 13px 16px;
  background: var(--color-surface-tint);
  border-radius: var(--rounded-lg) var(--rounded-lg) 0 0;
  border-bottom: 1px solid var(--color-outline);
  font-size: 9px;
  color: var(--color-on-surface-muted);
  gap: 13px;
}

.dots {
  display: flex;
  gap: 4px;
}

.dots i {
  width: 5px;
  height: 5px;
  border-radius: var(--rounded-full);
  background: var(--color-on-surface-muted);
  opacity: 0.5;
}

.avatar {
  margin-left: auto;
  border-radius: var(--rounded-full);
  background: var(--color-band);
  padding: 5px;
  font-size: 8px;
  color: var(--color-on-surface-muted);
}

.success-float {
  position: absolute;
  right: -15px;
  bottom: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-lg);
  padding: 15px 20px;
  box-shadow: var(--shadow-raised);
  font-size: 11px;
  transform: rotate(2deg);
}

.success-float small {
  display: block;
  font-size: 8px;
  color: var(--color-on-surface-muted);
  margin-top: 5px;
}

.check-icon {
  display: grid;
  place-items: center;
  border-radius: var(--rounded-full);
  background: var(--color-surface-tint);
  width: 27px;
  height: 27px;
  color: var(--color-secondary);
}

.demo-caption {
  position: absolute;
  bottom: -19px;
  left: 30px;
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}

@media (max-width: 1050px) {
  .hero-visual :deep(.app-inner) {
    padding: 20px;
  }
}

@media (max-width: 1050px) {
  .success-float {
    right: 0;
  }
}

@media (max-width: 1050px) {
  .orbit-one {
    width: 430px;
    height: 430px;
    top: -10px;
  }
}

@media (max-width: 1050px) {
  .orbit-two {
    width: 350px;
    height: 350px;
    top: 25px;
  }
}

@media (max-width: 760px) {
  .hero-visual {
    max-width: 520px;
    width: 100%;
    margin: auto;
  }
}

@media (max-width: 760px) {
  .hero-visual:before {
    inset: -30px -22px;
  }
}

@media (max-width: 760px) {
  .orbit-one {
    width: 100%;
    height: 90%;
    left: 0;
    top: 0;
  }
}

@media (max-width: 760px) {
  .orbit-two {
    width: 80%;
    height: 75%;
    left: 10%;
    top: 10%;
  }
}

@media (max-width: 760px) {
  .app-window {
    margin: 0 7px;
  }
}

@media (max-width: 760px) {
  .float-label {
    right: 20px;
  }
}

@media (max-width: 760px) {
  .success-float {
    right: 3px;
    bottom: 12px;
  }
}
</style>
