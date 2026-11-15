<template>
  <section class="features" id="recursos" aria-labelledby="features-title">
    <div class="wrap section">
      <div class="feature-heading">
        <span class="eyebrow">POR DENTRO DO ORCE.ME</span>
        <h2 id="features-title">
          Um orçamento melhor começa<br /><em>com informação clara.</em>
        </h2>
        <p>
          Do item cadastrado ao documento final: veja o que você organiza em
          cada etapa.
        </p>
      </div>
      <div class="feature-grid">
        <article class="feature-card">
          <div class="feature-copy">
            <span class="feature-number">01 / CATÁLOGO</span>
            <h3>Cadastre uma vez. Reutilize nos orçamentos.</h3>
            <p>
              Guarde descrições e preços de produtos e serviços. Importe uma
              planilha CSV ou adicione cada item.
            </p>
          </div>
          <div
            class="workspace"
            role="img"
            aria-label="Exemplo ilustrativo de catálogo: aquecedor por R$ 3.490, kit por R$ 380 e instalação por R$ 650."
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
                  ><b>Aquecedor a gás 26L</b
                  ><small>Produto · AQ-026</small></span
                ><strong>R$ 3.490,00</strong>
              </div>
              <div class="catalog-row">
                <span
                  ><b>Kit de instalação</b><small>Produto · KT-001</small></span
                ><strong>R$ 380,00</strong>
              </div>
              <div class="catalog-row">
                <span
                  ><b>Instalação e configuração</b
                  ><small>Serviço · SV-001</small></span
                ><strong>R$ 650,00</strong>
              </div>
              <div class="workspace-note">
                3 itens prontos para o próximo orçamento
              </div>
            </div>
          </div>
        </article>
        <article class="feature-card">
          <div class="feature-copy">
            <span class="feature-number">02 / PROPOSTA</span>
            <h3>Cliente, itens e valores. Sem informação solta.</h3>
            <p>
              Ajuste quantidades e descontos, confira o total e exporte um PDF
              com os dados da sua empresa.
            </p>
          </div>
          <div
            class="workspace"
            role="img"
            aria-label="Exemplo ilustrativo de orçamento número 0042 para Marina Oliveira: três itens, sem desconto, total de R$ 4.520."
          >
            <div class="workspace-bar">
              <b>orce.me</b><span>Orçamento #0042</span
              ><span class="draft">Rascunho</span>
            </div>
            <div class="workspace-body">
              <div class="client-field">
                <small>CLIENTE</small><b>Marina Oliveira</b
                ><span>Aquecimento residencial</span>
              </div>
              <div class="proposal-line">
                <span>Produtos e serviços</span><b>3 itens</b>
              </div>
              <div class="proposal-line">
                <span>Subtotal</span><b>R$ 4.520,00</b>
              </div>
              <div class="proposal-line">
                <span>Desconto</span><b>R$ 0,00</b>
              </div>
              <div class="proposal-total">
                <span>Total do orçamento</span><strong>R$ 4.520,00</strong>
              </div>
              <div class="export-note">
                <span aria-hidden="true">✓</span> PDF com os dados da sua
                empresa
              </div>
            </div>
          </div>
        </article>
        <article class="history-card">
          <div class="feature-copy">
            <span class="feature-number">03 / HISTÓRICO</span>
            <h3>Retome cada proposta com contexto.</h3>
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
              <span><b>#0042</b> Aquecimento residencial</span
              ><span class="status sent">Enviado</span>
            </div>
            <div>
              <span><b>#0041</b> Instalação comercial</span
              ><span class="status accepted">Aceito</span>
            </div>
            <div>
              <span><b>#0040</b> Manutenção preventiva</span
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
.features {
  background: var(--color-band);
  border-block: 1px solid var(--color-outline);
}
.feature-heading {
  max-width: var(--spacing-measure);
}
.eyebrow,
.feature-number {
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-md-font-weight);
  letter-spacing: 1px;
  color: var(--color-secondary);
}
.feature-heading > p {
  max-width: 470px;
  font-size: var(--typography-body-lg-font-size);
  color: var(--color-on-surface-muted);
  line-height: var(--typography-body-lg-line-height);
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
  background: var(--color-surface);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-lg);
  overflow: hidden;
}
.feature-card {
  display: flex;
  flex-direction: column;
}
.feature-copy {
  padding: var(--spacing-3xl);
}
.feature-copy h3 {
  margin: var(--spacing-md) 0;
  max-width: 350px;
}
.feature-copy p {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  color: var(--color-on-surface-muted);
  max-width: 390px;
}
.workspace {
  margin: auto var(--spacing-2xl) var(--spacing-2xl);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-md);
  background: var(--color-surface-raised);
  box-shadow: var(--shadow-raised);
  overflow: hidden;
  font-size: 11px;
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
  font-size: 10px;
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
  font-size: 8px;
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
  font-size: 9px;
  color: var(--color-on-surface-muted);
  margin-top: var(--spacing-xs);
}
.catalog-row strong {
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
}
.workspace-note {
  margin-top: var(--spacing-md);
  color: var(--color-on-surface-muted);
  font-size: 9px;
}
.client-field {
  display: grid;
  gap: var(--spacing-xs);
  padding-bottom: var(--spacing-lg);
}
.client-field small {
  font-size: 8px;
  letter-spacing: 1px;
  color: var(--color-on-surface-muted);
}
.client-field b {
  font-size: 13px;
}
.client-field > span {
  font-size: 10px;
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
.export-note {
  margin-top: var(--spacing-md);
  font-size: 10px;
  color: var(--color-secondary);
}
.export-note span {
  margin-right: var(--spacing-xs);
}
.history-card {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.history-preview {
  margin: var(--spacing-2xl);
  background: var(--color-surface-raised);
  padding: var(--spacing-lg) var(--spacing-xl);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-md);
}
.history-preview > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  font-size: 11px;
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
  font-size: 10px;
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
    font-size: 10px;
  }
  .workspace-body {
    padding: var(--spacing-lg);
  }
  .history-preview {
    margin: 0 var(--spacing-lg) var(--spacing-lg);
    padding: var(--spacing-md);
  }
  .history-preview > div {
    font-size: 10px;
  }
}
</style>
