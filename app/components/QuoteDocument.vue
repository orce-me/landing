<script setup>
defineProps({
  quantity: { type: Number, default: 1 },
  editable: { type: Boolean, default: false },
})
const emit = defineEmits(['update:quantity', 'preview'])
const currency = (value) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  )
function updateQuantity(event) {
  const value = Math.min(
    10,
    Math.max(1, Math.round(Number(event.target.value) || 1)),
  )
  emit('update:quantity', value)
  if (event.type === 'change') event.target.value = String(value)
}
</script>

<template>
  <div class="app-inner">
    <div class="app-top">
      <span class="mini-logo">a<span>c</span> <b>almeida & costa</b></span
      ><span class="status">{{
        editable ? '● Rascunho' : 'Demonstração'
      }}</span>
    </div>
    <div class="quote-title">
      <div>
        <small>ORÇAMENTO Nº 0042</small>
        <h2>Um projeto para sair do papel.</h2>
      </div>
      <span class="document-icon">↗</span>
    </div>
    <div class="customer">
      <span>PREPARADO PARA<b>Marina Oliveira</b></span
      ><span>PROJETO<b>Aquecimento residencial</b></span>
    </div>
    <div class="table">
      <div class="table-head">
        <span>PRODUTO / SERVIÇO</span><span>QTD.</span><span>VALOR</span>
      </div>
      <div class="table-row">
        <span
          ><b>Aquecedor a gás 26L</b><small>Equipamento · unidade</small></span
        ><span>1</span><span>R$ 3.490,00</span>
      </div>
      <div class="table-row">
        <span><b>Kit de instalação</b><small>Material · conjunto</small></span
        ><span>1</span><span>R$ 380,00</span>
      </div>
      <div class="table-row">
        <span
          ><b>Instalação e configuração</b
          ><small>Mão de obra · serviço</small></span
        ><span
          ><input
            v-if="editable"
            type="number"
            min="1"
            max="10"
            step="1"
            :value="quantity"
            aria-label="Quantidade de serviços de instalação"
            @input="updateQuantity"
            @change="updateQuantity"
          /><template v-else>{{ quantity }}</template></span
        ><span>{{ currency(quantity * 650) }}</span>
      </div>
    </div>
    <div class="total">
      <span>Total do orçamento<small>Produtos e serviços, juntos.</small></span
      ><strong>{{ currency(3870 + quantity * 650) }}</strong>
    </div>
    <div v-if="editable" class="app-bottom">
      <span>✓ Alterações salvas nesta demonstração</span
      ><button type="button" @click="$emit('preview')">
        Visualizar PDF <span>↗</span>
      </button>
    </div>
  </div>
</template>
