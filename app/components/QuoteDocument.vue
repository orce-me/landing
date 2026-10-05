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

<style scoped>
.app-inner {
  padding: 25px;
}

.app-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mini-logo {
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -2px;
}

.mini-logo > span {
  color: #9aae77;
}

.mini-logo b {
  font-size: 9px;
  letter-spacing: 0;
  font-weight: 500;
  margin-left: 8px;
}

.status {
  font-size: 8px;
  background: #f5f2e7;
  color: #9b8850;
  border-radius: 4px;
  padding: 5px 7px;
}

.quote-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 31px;
}

.quote-title small {
  font-size: 7px;
  letter-spacing: 1px;
  color: #829077;
}

.quote-title h2 {
  font-family: 'Instrument Serif', serif;
  font-size: 26px;
  margin-top: 6px;
  font-weight: 400;
}

.document-icon {
  padding: 9px;
  border: 1px solid #e4e8df;
  border-radius: 5px;
  color: #9aa88c;
  font-size: 13px;
}

.customer {
  display: flex;
  gap: 45px;
  padding: 22px 0;
  border-bottom: 1px solid #e8ece5;
}

.customer > span {
  font-size: 6px;
  color: #8a9584;
  letter-spacing: 1px;
}

.customer b {
  display: block;
  font-size: 9px;
  letter-spacing: 0;
  font-weight: 500;
  color: #4d5d47;
  margin-top: 7px;
}

.table-head,
.table-row {
  display: grid;
  grid-template-columns: 1fr 45px 85px;
  align-items: center;
}

.table-head {
  font-size: 6px;
  letter-spacing: 1px;
  color: #87917f;
  margin: 19px 0 5px;
}

.table-row {
  border-bottom: 1px solid #edf0e9;
  padding: 13px 0;
  font-size: 9px;
}

.table-row b {
  font-size: 9px;
  font-weight: 500;
}

.table-row small {
  display: block;
  color: #909989;
  font-size: 7px;
  margin-top: 4px;
}

.table-row > span:last-child,
.table-head > span:last-child {
  text-align: right;
}

.table-row input {
  width: 31px;
  border: 1px solid #e0e6d8;
  border-radius: 3px;
  padding: 3px;
  font-size: 9px;
  color: #4d5d47;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
  padding: 15px;
  background: #f3f6ed;
  border-radius: 5px;
  font-size: 9px;
}

.total small {
  display: block;
  font-size: 7px;
  color: #86917a;
  margin-top: 5px;
}

.total strong {
  font-size: 23px;
  font-weight: 500;
  letter-spacing: -0.7px;
}

.app-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
  font-size: 6px;
  color: #8d9882;
}

.app-bottom button {
  font-size: 8px;
  background: var(--green);
  color: white;
  border: 0;
  border-radius: 4px;
  padding: 9px 12px;
}

.app-bottom button span {
  margin-left: 7px;
}

@media (max-width: 760px) {
  .customer {
    gap: 25px;
  }
}

@media (max-width: 760px) {
  .table-head,
  .table-row {
    grid-template-columns: 1fr 35px 80px;
  }
}

@media print {
  .total {
    print-color-adjust: exact;
  }
}

.quote-title small,
.customer > span,
.table-head {
  color: #596c4d;
}

.table-row small,
.total small,
.app-bottom {
  color: #596b4e;
}

.customer b,
.table-row input {
  color: #344c2d;
}

.status {
  background: #f2e8c9;
  color: #786017;
}

.total {
  background: #e9f0df;
}

.total strong {
  color: #17452f;
}

[data-theme='dark'] .status {
  background: #473f24;
  color: #edda93;
}

[data-theme='dark'] .quote-title small,
[data-theme='dark'] .customer > span,
[data-theme='dark'] .table-head,
[data-theme='dark'] .table-row small,
[data-theme='dark'] .total small,
[data-theme='dark'] .app-bottom {
  color: #b0c09f;
}

[data-theme='dark'] .customer b,
[data-theme='dark'] .table-row input {
  color: #deebd2;
}

[data-theme='dark'] .table-row input {
  background: #273827;
  border-color: #526447;
}

[data-theme='dark'] .customer,
[data-theme='dark'] .table-row {
  border-color: #354734;
}

[data-theme='dark'] .document-icon {
  color: #c2d5ad;
  border-color: #44573b;
}

[data-theme='dark'] .total {
  background: #2a3e29;
}

[data-theme='dark'] .total strong {
  color: #d4eab9;
}

[data-theme='dark'] .app-bottom button {
  background: #c1dca2;
  color: #173121;
}
</style>
