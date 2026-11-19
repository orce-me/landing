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
</script>

<template>
  <figure
    class="quote-gallery"
    role="img"
    aria-label="Exemplo ilustrativo: orçamento nº 0042 para Marina Oliveira com bolo, docinhos e decoração da mesa, total de R$ 650,00, e o PDF gerado."
  >
    <div class="gallery-stage" data-nosnippet>
      <div class="gallery-rail" aria-hidden="true">
        <div class="app">
          <div class="app-head">
            <div>
              <small>Orçamento nº 0042</small>
              <b>Festa de aniversário</b>
            </div>
            <span class="chip">Rascunho</span>
          </div>
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
          <div class="sums">
            <div><span>Subtotal</span><span>R$ 650,00</span></div>
            <div><span>Desconto</span><span>R$ 0,00</span></div>
            <div class="total">
              <span>Total</span><strong>R$ 650,00</strong>
            </div>
          </div>
          <div class="app-actions">
            <span class="fake-button">Gerar PDF</span>
          </div>
        </div>
        <div class="layout-example paper">
          <QuoteDocument layout="essential" />
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
.gallery-stage {
  position: relative;
  height: 600px;
  border-radius: var(--rounded-xl);
  background: var(--color-maracuja);
  overflow: hidden;
}
.gallery-rail {
  position: absolute;
  inset: 0;
  animation: quotation-layouts 4s ease-in-out forwards;
}

/* The quotation editor, at real UI size. */
.app {
  position: absolute;
  top: var(--spacing-3xl);
  left: var(--spacing-3xl);
  width: 410px;
  padding: var(--spacing-2xl);
  background: var(--color-surface-raised);
  border-radius: var(--rounded-lg);
  box-shadow: var(--shadow-floating);
  font-size: var(--typography-body-sm-font-size);
  font-variant-numeric: tabular-nums;
}
.app small {
  display: block;
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}
.app-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-md);
}
.app-head b {
  display: block;
  margin-top: 2px;
  font-size: var(--typography-title-md-font-size);
  font-weight: var(--typography-title-md-font-weight);
  letter-spacing: var(--typography-title-md-letter-spacing);
}
.chip {
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--rounded-full);
  background: var(--color-status-draft);
  color: var(--color-on-status-draft);
  font-size: var(--typography-label-sm-font-size);
  font-weight: 600;
}
.fields {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
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
  margin-top: var(--spacing-xl);
}
.item-head,
.item {
  display: grid;
  grid-template-columns: 1fr 40px 92px;
  align-items: center;
}
.item-head {
  padding: 0 var(--spacing-md) var(--spacing-sm);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}
.item {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--rounded-md);
  background: var(--color-surface-tint);
  animation: row-in 0.5s var(--ease-soft) both;
  animation-delay: calc(0.6s + var(--row) * 0.3s);
}
.item + .item {
  margin-top: var(--spacing-xs);
}
.item b {
  display: block;
  font-weight: 600;
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
.sums {
  margin-top: var(--spacing-lg);
  padding: 0 var(--spacing-md);
}
.sums > div {
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
  color: var(--color-on-surface-muted);
}
.sums .total {
  margin-top: var(--spacing-sm);
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--color-outline);
  color: var(--color-on-surface);
  align-items: baseline;
}
.total span {
  font-weight: 600;
}
.total strong {
  font-size: var(--typography-figure-font-size);
  font-weight: var(--typography-figure-font-weight);
  letter-spacing: var(--typography-figure-letter-spacing);
  white-space: nowrap;
}
.app-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: var(--spacing-lg);
}
.fake-button {
  padding: var(--spacing-sm) var(--spacing-xl);
  border-radius: var(--rounded-full);
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-weight: 600;
}

/* The generated PDF. */
.paper {
  position: absolute;
  right: var(--spacing-2xl);
  bottom: var(--spacing-2xl);
  width: 260px;
  background: var(--color-surface-raised);
  border-radius: var(--rounded-md);
  box-shadow: var(--shadow-floating);
  overflow: hidden;
  transform: rotate(3deg) scale(0.72);
  transform-origin: bottom right;
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
    transform: translate(40px, 40px) rotate(9deg) scale(0.72);
  }
}
@media (max-width: 1050px) {
  .gallery-stage {
    height: 580px;
  }
}
@media (max-width: 760px) {
  .gallery-stage {
    height: auto;
    padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-2xl);
  }
  .gallery-rail {
    position: relative;
    inset: auto;
  }
  .app {
    position: relative;
    top: auto;
    left: auto;
    width: auto;
    padding: var(--spacing-lg);
  }
  .item-head,
  .item {
    grid-template-columns: 1fr 32px 84px;
  }
  .paper {
    position: relative;
    right: auto;
    bottom: auto;
    width: 220px;
    margin: calc(-1 * var(--spacing-sm)) var(--spacing-sm) 0 auto;
    transform: rotate(3deg);
    transform-origin: center;
  }
  @keyframes paper-in {
    from {
      opacity: 0;
      transform: translateY(30px) rotate(8deg);
    }
  }
}
@media (prefers-reduced-motion: reduce) {
  .gallery-rail {
    animation: none;
  }
  .item,
  .paper {
    animation: none;
  }
}
</style>
