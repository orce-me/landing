<script setup>
defineProps({ layout: { type: String, default: 'essential' } })
</script>

<template>
  <div class="app-inner" :class="`document-${layout}`">
    <div class="app-top">
      <span class="mini-logo">se <b>sua empresa</b></span>
      <span class="status">Orçamento</span>
    </div>
    <div class="quote-title">
      <div>
        <small>ORÇAMENTO Nº 0042</small>
        <h3>Festa de aniversário.</h3>
      </div>
    </div>
    <div class="customer">
      <span>PREPARADO PARA<b>Marina Oliveira</b></span
      ><span>PROJETO<b>Festa de aniversário</b></span>
    </div>
    <div class="table">
      <div class="table-head">
        <span>PRODUTO / SERVIÇO</span><span>QTD.</span><span>VALOR</span>
      </div>
      <div class="table-row">
        <span><b>Bolo de aniversário</b><small>Produto · unidade</small></span
        ><span>1</span><span>R$ 350,00</span>
      </div>
      <div class="table-row">
        <span><b>Caixa de docinhos</b><small>Produto · caixa</small></span
        ><span>1</span><span>R$ 180,00</span>
      </div>
      <div class="table-row">
        <span><b>Decoração da mesa</b><small>Mão de obra · serviço</small></span
        ><span>1</span><span>R$ 120,00</span>
      </div>
    </div>
    <div class="total">
      <span>Total do orçamento<small>Produtos e serviços, juntos.</small></span
      ><strong>R$ 650,00</strong>
    </div>
    <div class="document-terms">
      <b>Condições da proposta</b>
      <p>Validade: 15 dias · Entrega e montagem: a combinar.</p>
      <p>Pagamento: 50% na aprovação e 50% na entrega.</p>
    </div>
  </div>
</template>

<style scoped>
/* Illustrative mockup. It uses its own reduced type scale. */
.app-inner {
  padding: 20px;
  font-size: 9px;
  line-height: 1.5;
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
  margin-top: 20px;
}

.quote-title small {
  font-size: 7px;
  letter-spacing: 1px;
  color: var(--color-on-surface-muted);
}

.quote-title h3 {
  font-family: var(--typography-display-accent-font-family), Georgia, serif;
  font-size: 23px;
  margin-top: 6px;
  font-weight: 400;
}

.customer {
  display: flex;
  gap: 20px;
  padding: 15px 0;
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
  grid-template-columns: 1fr 25px 75px;
  align-items: center;
}

.table-head {
  font-size: 6px;
  letter-spacing: 1px;
  color: var(--color-on-surface-muted);
  margin: 14px 0 5px;
}

.table-row {
  border-bottom: 1px solid var(--color-outline);
  padding: 10px 0;
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

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  padding: 12px;
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
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.7px;
  color: var(--color-on-surface);
}

@media (max-width: 760px) {
  .customer {
    gap: 25px;
  }
}

@media (max-width: 760px) {
  .table-head,
  .table-row {
    grid-template-columns: 1fr 20px 70px;
  }
}

.document-terms {
  border-top: 1px solid var(--color-outline);
  padding-top: 14px;
  margin-top: 18px;
  font-size: 7px;
  line-height: 1.8;
  color: var(--color-on-surface-muted);
}
.document-terms b {
  color: var(--color-on-surface);
}
.document-editorial {
  border-top: 6px solid var(--color-secondary);
}
.document-editorial .quote-title {
  margin-top: 24px;
  border-bottom: 1px solid var(--color-secondary);
  padding-bottom: 14px;
}
.document-editorial .quote-title h3 {
  font-family: var(--typography-body-md-font-family), sans-serif;
  font-size: 24px;
  font-weight: 500;
}
.document-editorial .customer {
  flex-direction: column;
  gap: 12px;
}
.document-editorial .total {
  background: var(--color-band);
}
.document-compact .app-top {
  flex-direction: row-reverse;
}
.document-compact .quote-title {
  margin-top: 20px;
}
.document-compact .quote-title h3 {
  font-size: 22px;
}
.document-compact .customer {
  padding: 15px 0;
}
.document-compact .total {
  border-top: 2px solid var(--color-primary);
  border-radius: 0;
  background: none;
  padding-inline: 0;
}
.document-compact .table-row {
  padding: 9px 0;
}
</style>
