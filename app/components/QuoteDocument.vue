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
/* Illustrative mockup. It uses its own reduced type scale. */
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
  color: var(--color-tertiary);
}

.mini-logo b {
  font-size: 9px;
  letter-spacing: 0;
  font-weight: 500;
  margin-left: 8px;
}

.status {
  font-size: 8px;
  background: var(--color-status-draft);
  color: var(--color-on-status-draft);
  border-radius: var(--rounded-sm);
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
  color: var(--color-on-surface-muted);
}

.quote-title h2 {
  font-family: var(--typography-display-accent-font-family), Georgia, serif;
  font-size: 26px;
  margin-top: 6px;
  font-weight: 400;
}

.document-icon {
  padding: 9px;
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-sm);
  color: var(--color-on-surface-muted);
  font-size: 13px;
}

.customer {
  display: flex;
  gap: 45px;
  padding: 22px 0;
  border-bottom: 1px solid var(--color-outline);
}

.customer > span {
  font-size: 6px;
  color: var(--color-on-surface-muted);
  letter-spacing: 1px;
}

.customer b {
  display: block;
  font-size: 9px;
  letter-spacing: 0;
  font-weight: 500;
  color: var(--color-on-surface);
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
  color: var(--color-on-surface-muted);
  margin: 19px 0 5px;
}

.table-row {
  border-bottom: 1px solid var(--color-outline);
  padding: 13px 0;
  font-size: 9px;
}

.table-row b {
  font-size: 9px;
  font-weight: 500;
}

.table-row small {
  display: block;
  color: var(--color-on-surface-muted);
  font-size: 7px;
  margin-top: 4px;
}

.table-row > span:last-child,
.table-head > span:last-child {
  text-align: right;
}

.table-row input {
  width: 31px;
  border: 1px solid var(--color-on-surface-muted);
  border-radius: var(--rounded-sm);
  padding: 3px;
  font-size: 9px;
  color: var(--color-on-surface);
  background: var(--color-surface-raised);
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
  padding: 15px;
  background: var(--color-surface-tint);
  border-radius: var(--rounded-sm);
  font-size: 9px;
}

.total small {
  display: block;
  font-size: 7px;
  color: var(--color-on-surface-muted);
  margin-top: 5px;
}

.total strong {
  font-size: 23px;
  font-weight: 500;
  letter-spacing: -0.7px;
  color: var(--color-on-surface);
}

.app-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
  font-size: 6px;
  color: var(--color-on-surface-muted);
}

.app-bottom button {
  font-size: 8px;
  background: var(--color-primary);
  color: var(--color-on-primary);
  border: 0;
  border-radius: var(--rounded-sm);
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
</style>
