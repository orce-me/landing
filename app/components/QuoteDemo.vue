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
