<script setup>
const items = [
  {
    name: 'Bolo de aniversário',
    kind: 'Produto · unidade',
    qty: 1,
    price: 'R$ 350,00',
  },
  {
    name: 'Caixa de docinhos',
    kind: 'Produto · caixa',
    qty: 1,
    price: 'R$ 180,00',
  },
  { name: 'Decoração da mesa', kind: 'Serviço', qty: 1, price: 'R$ 120,00' },
]
const nav = ['Início', 'Orçamentos', 'Catálogo', 'Clientes', 'Configurações']
</script>

<template>
  <figure
    class="quote-gallery"
    role="img"
    aria-label="Exemplo ilustrativo: orçamento nº 0042 para Marina Oliveira com bolo, docinhos e decoração da mesa, total de R$ 650,00, e o PDF gerado."
  >
    <div class="gallery-stage" data-nosnippet>
      <div class="gallery-rail" aria-hidden="true">
        <aside class="sidebar">
          <span class="side-brand"
            ><i></i><span>orce<span class="dot">.</span>me</span></span
          >
          <span
            v-for="entry in nav"
            :key="entry"
            class="side-item"
            :class="{ active: entry === 'Orçamentos' }"
            >{{ entry }}</span
          >
        </aside>

        <div class="editor">
          <div class="crumbs">
            <span>Orçamentos <i>/</i> <b>Nº 0042</b></span
            ><span class="chip">Rascunho</span>
          </div>
          <b class="editor-title">Festa de aniversário</b>
          <div class="fields">
            <div class="field">
              <small>Cliente</small><span>Marina Oliveira</span>
            </div>
            <div class="field"><small>Validade</small><span>15 dias</span></div>
          </div>
          <div class="items">
            <div class="item-head">
              <span>Item</span><span>Qtd.</span><span>Valor</span>
            </div>
            <div
              v-for="(item, index) in items"
              :key="item.name"
              class="item"
              :style="{ '--row': index }"
            >
              <span class="name"
                ><b>{{ item.name }}</b
                ><small>{{ item.kind }}</small></span
              ><span class="qty">{{ item.qty }}</span
              ><span class="price">{{ item.price }}</span>
            </div>
          </div>
          <div class="footer-row">
            <div class="sums">
              <span>Subtotal <b>R$ 650,00</b></span>
              <span>Desconto <b>R$ 0,00</b></span>
            </div>
            <div class="total">
              <small>Total</small><strong>R$ 650,00</strong>
            </div>
            <span class="fake-button">Gerar PDF</span>
          </div>
        </div>

        <div class="preview">
          <small>Prévia do PDF</small>
          <div class="layout-example paper">
            <QuoteDocument layout="essential" />
          </div>
        </div>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.quote-gallery {
  margin: 0;
  min-width: 0;
}
/* The product frame. */
.gallery-stage {
  position: relative;
  padding: var(--spacing-sm);
  border-radius: var(--rounded-xl);
  border: 1px solid var(--color-outline);
  background: color-mix(in srgb, var(--color-surface-raised) 70%, transparent);
  box-shadow: var(--shadow-floating);
  overflow: hidden;
}
.gallery-rail {
  display: grid;
  grid-template-columns: 190px 1fr 300px;
  height: 540px;
  border-radius: var(--rounded-lg);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-outline);
  overflow: hidden;
  font-size: var(--typography-body-sm-font-size);
  font-variant-numeric: tabular-nums;
  animation: quotation-layouts 4s ease-in-out forwards;
}
.gallery-rail small {
  display: block;
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}

/* Sidebar. */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--spacing-xl) var(--spacing-md);
  border-right: 1px solid var(--color-outline);
}
.side-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin: 0 var(--spacing-sm) var(--spacing-xl);
  font-size: var(--typography-title-md-font-size);
  font-weight: 700;
  letter-spacing: -0.5px;
}
.side-brand i {
  width: 20px;
  height: 20px;
  border-radius: var(--rounded-sm);
  background: var(--color-primary);
}
.dot {
  color: var(--color-tertiary);
}
.side-item {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--rounded-md);
  color: var(--color-on-surface-muted);
}
.side-item.active {
  background: var(--color-primary-soft);
  color: var(--color-on-primary-soft);
  font-weight: 600;
}

/* Editor. */
.editor {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: var(--spacing-xl) var(--spacing-2xl);
}
.crumbs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-on-surface-muted);
}
.crumbs i {
  font-style: normal;
  margin: 0 var(--spacing-xs);
}
.crumbs b {
  color: var(--color-on-surface);
  font-weight: 500;
}
.chip {
  padding: 2px var(--spacing-md);
  border-radius: var(--rounded-full);
  background: var(--color-status-draft);
  color: var(--color-on-status-draft);
  font-size: var(--typography-label-sm-font-size);
  font-weight: 600;
}
.editor-title {
  margin-top: var(--spacing-lg);
  font-size: var(--typography-title-lg-font-size);
  font-weight: 500;
  letter-spacing: var(--typography-title-lg-letter-spacing);
}
.fields {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}
.field {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-md);
}
.field span {
  font-weight: 500;
}
.items {
  margin-top: var(--spacing-lg);
}
.item-head,
.item {
  display: grid;
  grid-template-columns: 1fr 44px 96px;
  align-items: center;
}
.item-head {
  padding: 0 var(--spacing-md) var(--spacing-sm);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}
.item {
  padding: var(--spacing-sm) var(--spacing-md);
  border-top: 1px solid var(--color-outline);
  animation: row-in 0.5s var(--ease-soft) both;
  animation-delay: calc(0.6s + var(--row) * 0.3s);
}
.item b {
  display: block;
  font-weight: 500;
}
.item-head > span:nth-child(2),
.qty {
  text-align: center;
}
.item-head > span:last-child,
.price {
  text-align: right;
  white-space: nowrap;
}
.footer-row {
  display: flex;
  align-items: flex-end;
  gap: var(--spacing-xl);
  margin-top: auto;
  padding: var(--spacing-lg);
  border-radius: var(--rounded-md);
  background: var(--color-surface);
}
.sums {
  display: grid;
  gap: 2px;
  color: var(--color-on-surface-muted);
}
.sums b {
  margin-left: var(--spacing-xs);
  color: var(--color-on-surface);
  font-weight: 500;
}
.total {
  margin-left: auto;
  text-align: right;
}
.total strong {
  font-size: var(--typography-figure-font-size);
  font-weight: var(--typography-figure-font-weight);
  letter-spacing: var(--typography-figure-letter-spacing);
  white-space: nowrap;
}
.fake-button {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--rounded-md);
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-weight: 600;
  white-space: nowrap;
}

/* PDF preview. */
.preview {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-xl);
  background: var(--color-surface);
  border-left: 1px solid var(--color-outline);
  overflow: hidden;
}
.paper {
  width: 100%;
  background: var(--color-surface-raised);
  border-radius: var(--rounded-sm);
  box-shadow: var(--shadow-raised);
  overflow: hidden;
  animation: paper-in 0.8s var(--ease-soft) 1.9s both;
}

@keyframes quotation-layouts {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  15% {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes row-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}
@keyframes paper-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
}
@media (max-width: 1050px) {
  .gallery-rail {
    grid-template-columns: 1fr 280px;
  }
  .sidebar {
    display: none;
  }
}
@media (max-width: 760px) {
  .gallery-stage {
    padding: var(--spacing-xs);
  }
  .gallery-rail {
    grid-template-columns: 1fr;
    height: auto;
  }
  .editor {
    padding: var(--spacing-lg);
  }
  .item-head,
  .item {
    grid-template-columns: 1fr 32px 84px;
  }
  .footer-row {
    flex-wrap: wrap;
    margin-top: var(--spacing-lg);
  }
  .fake-button {
    width: 100%;
    text-align: center;
  }
  .preview {
    border-left: 0;
    border-top: 1px solid var(--color-outline);
    padding: var(--spacing-lg);
  }
  .paper {
    max-width: 260px;
    margin: 0 auto;
  }
}
@media (prefers-reduced-motion: reduce) {
  .gallery-rail,
  .item,
  .paper {
    animation: none;
  }
}
</style>
