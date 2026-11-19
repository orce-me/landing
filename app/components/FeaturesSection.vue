<template>
  <section class="features" id="recursos" aria-labelledby="features-title">
    <div class="wrap section">
      <div class="feature-heading" v-reveal>
        <h2 id="features-title">
          Do item cadastrado<br /><em>ao documento final.</em>
        </h2>
      </div>
      <div class="feature-grid">
        <article class="feature-card" v-reveal="0">
          <div class="feature-copy">
            <h3>Reutilize itens do catálogo.</h3>
            <p>
              Guarde descrições e preços de produtos e serviços. Importe uma
              planilha CSV ou adicione cada item.
            </p>
          </div>
          <div
            class="workspace"
            role="img"
            aria-label="Exemplo ilustrativo de catálogo: bolo por R$ 350, docinhos por R$ 180 e decoração da mesa por R$ 120."
          >
            <div class="workspace-bar">
              <b>orce.me</b><span>Catálogo</span
              ><span class="ui-action">+ Novo item</span>
            </div>
            <div class="workspace-body">
              <div class="search-field">
                Buscar no catálogo
                <span class="search-icon" aria-hidden="true"></span>
              </div>
              <div class="catalog-labels">
                <span>ITEM</span><span>PREÇO</span>
              </div>
              <div class="catalog-row">
                <span
                  ><b>Bolo de aniversário</b
                  ><small>Produto · BL-001</small></span
                ><strong>R$ 350,00</strong>
              </div>
              <div class="catalog-row">
                <span
                  ><b>Caixa de docinhos</b><small>Produto · DC-001</small></span
                ><strong>R$ 180,00</strong>
              </div>
              <div class="catalog-row">
                <span
                  ><b>Decoração da mesa</b><small>Serviço · SV-001</small></span
                ><strong>R$ 120,00</strong>
              </div>
            </div>
          </div>
        </article>
        <article class="feature-card" v-reveal="1">
          <div class="feature-copy">
            <h3>Cliente, itens e total juntos.</h3>
            <p>
              Ajuste quantidades e descontos, confira o total e exporte um PDF
              com os dados da sua empresa.
            </p>
          </div>
          <div
            class="workspace"
            role="img"
            aria-label="Exemplo ilustrativo de orçamento número 0042 para Marina Oliveira: três itens, sem desconto, total de R$ 650."
          >
            <div class="workspace-bar">
              <b>orce.me</b><span>Orçamento #0042</span
              ><span class="draft">Rascunho</span>
            </div>
            <div class="workspace-body">
              <div class="client-field">
                <small>CLIENTE</small><b>Marina Oliveira</b
                ><span>Festa de aniversário</span>
              </div>
              <div class="proposal-line">
                <span>Produtos e serviços</span><b>3 itens</b>
              </div>
              <div class="proposal-line">
                <span>Subtotal</span><b>R$ 650,00</b>
              </div>
              <div class="proposal-line">
                <span>Desconto</span><b>R$ 0,00</b>
              </div>
              <div class="proposal-total">
                <span>Total do orçamento</span><strong>R$ 650,00</strong>
              </div>
            </div>
          </div>
        </article>
        <article class="history-card" v-reveal>
          <div class="feature-copy">
            <h3>Histórico de cada proposta.</h3>
            <p>
              Consulte seus orçamentos e registre o andamento de cada conversa.
            </p>
          </div>
          <div
            class="history-preview"
            role="img"
            aria-label="Exemplo ilustrativo de histórico: orçamento 0042 enviado, 0041 aceito e 0040 em rascunho."
          >
            <div>
              <span><b>#0042</b> Festa de aniversário</span
              ><span class="status sent">Enviado</span>
            </div>
            <div>
              <span><b>#0041</b> Ensaio fotográfico</span
              ><span class="status accepted">Aceito</span>
            </div>
            <div>
              <span><b>#0040</b> Pintura de quarto</span
              ><span class="status draft">Rascunho</span>
            </div>
          </div>
        </article>
      </div>
      <p class="illustration-note">
        Interfaces ilustrativas com dados de exemplo.
      </p>
    </div>
  </section>
</template>

<style scoped>
.feature-heading h2 {
  margin-bottom: 0;
  text-align: center;
}
.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-4xl);
}
.feature-card,
.history-card {
  min-width: 0;
  border-radius: var(--rounded-xl);
  overflow: hidden;
}
.feature-card,
.history-card {
  background: var(--color-surface);
}
.feature-copy p {
  color: var(--color-on-surface-muted);
}
.workspace,
.history-preview {
  color: var(--color-on-surface);
}
.feature-copy h3 {
  font-size: var(--typography-title-lg-font-size);
  letter-spacing: var(--typography-title-lg-letter-spacing);
  line-height: var(--typography-title-lg-line-height);
}
.workspace,
.history-preview {
  transition: transform 0.4s var(--ease-soft);
}
.feature-card:hover .workspace,
.history-card:hover .history-preview {
  transform: translateY(-6px);
}
.feature-card {
  display: flex;
  flex-direction: column;
}
.feature-copy {
  padding: var(--spacing-3xl);
}
.feature-copy h3 {
  margin: 0 0 var(--spacing-md);
  max-width: 350px;
}
.feature-copy p {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  max-width: 390px;
}
.workspace {
  margin: auto var(--spacing-3xl) var(--spacing-3xl);
  border-radius: var(--rounded-lg);
  background: var(--color-surface-raised);
  box-shadow: var(--shadow-raised);
  overflow: hidden;
  font-size: 13px;
}
.workspace-bar {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-outline);
}
.workspace-bar b {
  font-size: 13px;
  letter-spacing: -0.5px;
}
.workspace-bar > span:last-child {
  margin-left: auto;
}
.ui-action {
  background: var(--color-surface-tint);
  color: var(--color-secondary);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--rounded-sm);
  font-size: 12px;
}
.workspace-body {
  padding: var(--spacing-xl);
}
.search-field {
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-md);
  color: var(--color-on-surface-muted);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-sm);
}
.search-icon {
  position: relative;
  width: 10px;
  height: 10px;
  border: 1.5px solid currentColor;
  border-radius: var(--rounded-full);
  align-self: center;
}
.search-icon::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 1.5px;
  background: currentColor;
  right: -3px;
  bottom: -2px;
  transform: rotate(45deg);
}
.catalog-labels {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-xl);
  padding-bottom: var(--spacing-sm);
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--color-on-surface-muted);
}
.catalog-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-md) 0;
  border-top: 1px solid var(--color-outline);
}
.catalog-row b,
.client-field b {
  display: block;
  font-weight: 500;
}
.catalog-row small {
  display: block;
  font-size: 12px;
  color: var(--color-on-surface-muted);
  margin-top: var(--spacing-xs);
}
.catalog-row strong {
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
}
.client-field {
  display: grid;
  gap: var(--spacing-xs);
  padding-bottom: var(--spacing-lg);
}
.client-field small {
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--color-on-surface-muted);
}
.client-field b {
  font-size: 13px;
}
.client-field > span {
  font-size: 12px;
  color: var(--color-on-surface-muted);
}
.proposal-line {
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-top: 1px solid var(--color-outline);
}
.proposal-line b {
  font-weight: 500;
}
.proposal-total {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-sm);
  align-items: center;
  padding: var(--spacing-md);
  margin-top: var(--spacing-sm);
  background: var(--color-surface-tint);
  border-radius: var(--rounded-sm);
}
.proposal-total strong {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.7px;
  white-space: nowrap;
}
.history-card {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.history-preview {
  margin: var(--spacing-3xl);
  background: var(--color-surface-raised);
  box-shadow: var(--shadow-raised);
  padding: var(--spacing-lg) var(--spacing-xl);
  border-radius: var(--rounded-lg);
}
.history-preview > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  font-size: 13px;
  padding: var(--spacing-md) 0;
}
.history-preview > div + div {
  border-top: 1px solid var(--color-outline);
}
.history-preview b {
  font-weight: 500;
  margin-right: var(--spacing-sm);
  color: var(--color-on-surface-muted);
}
.status,
.draft {
  font-size: 12px;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--rounded-sm);
}
.sent {
  background: var(--color-status-sent);
  color: var(--color-on-status-sent);
}
.accepted {
  background: var(--color-status-accepted);
  color: var(--color-on-status-accepted);
}
.draft {
  background: var(--color-status-draft);
  color: var(--color-on-status-draft);
}

.proposal-total strong,
.catalog-row strong {
  font-variant-numeric: tabular-nums;
}
.illustration-note {
  text-align: right;
  margin-top: var(--spacing-lg);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}
@media (max-width: 760px) {
  .feature-grid,
  .history-card {
    grid-template-columns: 1fr;
  }
  .feature-copy {
    padding: var(--spacing-2xl);
  }
  .workspace {
    margin-inline: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
  }
  .workspace-bar {
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    font-size: 12px;
  }
  .workspace-body {
    padding: var(--spacing-lg);
  }
  .history-preview {
    margin: 0 var(--spacing-lg) var(--spacing-lg);
    padding: var(--spacing-md);
  }
  .history-preview > div {
    font-size: 12px;
  }
}
</style>
