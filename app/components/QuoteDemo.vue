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
    <div class="app-window">
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
  padding-top: 36px;
  padding-bottom: 40px;
  isolation: isolate;
}

.hero-visual:before {
  content: '';
  position: absolute;
  z-index: -2;
  inset: -90px -100px;
  background: radial-gradient(
    ellipse at 65% 50%,
    #e3ecd0 0%,
    #eff2df 35%,
    transparent 68%
  );
  border-radius: 50%;
}

.orbit {
  position: absolute;
  border: 1px solid #d9e1cb;
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
  border: 1px solid #e1e8d5;
  background: #f6f9ed;
  box-shadow: 0 5px 20px #203d3408;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 10px;
  transform: rotate(4deg);
}

.spark {
  color: #739552;
  font-size: 16px;
  margin-right: 9px;
}

.app-window {
  background: #fff;
  border: 1px solid #dfe5da;
  border-radius: 11px;
  box-shadow: 0 24px 65px #34472b17;
  transform: rotate(-2deg);
  position: relative;
}

.window-bar {
  display: flex;
  align-items: center;
  padding: 13px 16px;
  background: #f4f6f1;
  border-radius: 11px 11px 0 0;
  border-bottom: 1px solid #e7ebe3;
  font-size: 9px;
  color: #8a9285;
  gap: 13px;
}

.dots {
  display: flex;
  gap: 4px;
}

.dots i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #c9d1c0;
}

.avatar {
  margin-left: auto;
  border-radius: 50%;
  background: #e1e7d8;
  padding: 5px;
  font-size: 8px;
  color: #52614b;
}

.success-float {
  position: absolute;
  right: -15px;
  bottom: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border: 1px solid #dfe7d6;
  border-radius: 8px;
  padding: 15px 20px;
  box-shadow: 0 9px 30px #203d3410;
  font-size: 11px;
  transform: rotate(2deg);
}

.success-float small {
  display: block;
  font-size: 8px;
  color: #8a9481;
  margin-top: 5px;
}

.check-icon {
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #e8f0dc;
  width: 27px;
  height: 27px;
  color: #6f8a4e;
}

.demo-caption {
  position: absolute;
  bottom: -19px;
  left: 30px;
  font-size: 8px;
  color: #929a87;
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

.hero-visual:before {
  background: radial-gradient(
    ellipse at 60% 48%,
    #c3dba3 0%,
    #dfebcb 40%,
    #edf2df80 58%,
    transparent 73%
  );
}

.orbit {
  border-color: #b5c99d;
}

.float-label {
  background: #edf4df;
  border-color: #c4d5b0;
  color: #37512c;
}

.demo-caption {
  color: #536449;
}

.window-bar {
  background: #edf2e6;
  color: #56644d;
}

.dots i {
  background: #9ead90;
}

.success-float {
  border-color: #c5d6b5;
}

.success-float small {
  color: #5d6e50;
}

@media (max-width: 760px) {
  .hero-visual:before {
    inset: -30px -22px;
  }
}

.hero-visual {
  padding-top: 70px;
}

.float-label {
  top: 0;
  z-index: 2;
}

[data-theme='dark'] .hero-visual:before {
  background: radial-gradient(
    ellipse at 60% 48%,
    #66874360,
    #384d2a55 40%,
    transparent 73%
  );
}

[data-theme='dark'] .orbit {
  border-color: #50683a80;
}

[data-theme='dark'] .float-label {
  background: #233423;
  border-color: #49613a;
  color: #d3e4bf;
}

[data-theme='dark'] .app-window,
[data-theme='dark'] .success-float {
  background: #1b2b21;
  border-color: #3c5039;
  color: #e3eddb;
  box-shadow: 0 18px 48px #0002;
}

[data-theme='dark'] .window-bar {
  background: #263628;
  border-color: #3b4c35;
  color: #c1cfb6;
}

[data-theme='dark'] .dots i {
  background: #7c916b;
}

[data-theme='dark'] .avatar {
  background: #3e5134;
  color: #d7e5c7;
}

[data-theme='dark'] .success-float small {
  color: #b0c09f;
}

[data-theme='dark'] .check-icon {
  background: #344a2d;
  color: #c8dfa8;
}

[data-theme='dark'] .demo-caption {
  color: #b3c4a6;
}
</style>
