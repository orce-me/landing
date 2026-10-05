<template>
  <section class="features" id="recursos">
    <div class="wrap section">
      <div class="feature-heading">
        <div>
          <h2>
            O cuidado está nos detalhes.<br /><em
              >E no que você não precisa refazer.</em
            >
          </h2>
        </div>
        <p>Menos copiar e colar.<br />Mais clareza em cada proposta.</p>
      </div>
      <div class="feature-grid">
        <article class="feature-main">
          <span class="feature-icon">▦</span>
          <h3>Seu catálogo trabalha com você.</h3>
          <p>
            Produtos, serviços e preços em um lugar só. Atualize uma vez e use
            nos próximos orçamentos.
          </p>
          <div class="catalog">
            <div>
              <span class="product-icon">▣</span
              ><span
                ><b>Aquecedor a gás 26L</b
                ><small>Equipamentos · AQ-026</small></span
              ><strong>R$ 3.490,00</strong>
            </div>
            <div>
              <span class="product-icon">⌁</span
              ><span
                ><b>Instalação e configuração</b
                ><small>Serviços · SV-001</small></span
              ><strong>R$ 650,00</strong>
            </div>
            <div class="catalog-search">
              ⌕ <span>Encontre o próximo item do seu orçamento...</span>
            </div>
          </div>
        </article>
        <article>
          <span class="feature-icon">↗</span>
          <h3>Uma proposta com a sua cara.</h3>
          <p>
            Sua marca, seus dados e uma apresentação profissional. Um documento
            à altura do seu trabalho.
          </p>
          <div class="paper-mini">
            <span class="mini-logo">ac <b>almeida & costa</b></span
            ><strong>Orçamento</strong><i></i><i></i><i></i>
            <div>TOTAL <b>R$ 4.520,00</b></div>
          </div>
        </article>
        <article>
          <span class="feature-icon">◷</span>
          <h3>Nenhum orçamento esquecido.</h3>
          <p>
            Consulte o histórico e registre o que foi enviado, aceito ou
            recusado. Retome a conversa com contexto.
          </p>
          <div class="status-list">
            <span>Reforma residencial <b>Enviado</b></span
            ><span>Instalação comercial <b> Aceito ✓</b></span
            ><span>Manutenção preventiva <b>Rascunho</b></span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mini-logo {
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -2px;
}

.mini-logo b {
  font-size: 9px;
  letter-spacing: 0;
  font-weight: 500;
  margin-left: 8px;
}

.feature-grid p {
  font-size: var(--typography-body-sm-font-size);
  line-height: var(--typography-body-sm-line-height);
  color: var(--color-on-surface-muted);
  max-width: 305px;
}

.features {
  background: linear-gradient(
    125deg,
    var(--color-band),
    var(--color-surface-tint) 55%,
    var(--color-band)
  );
  border-top: 1px solid var(--color-outline);
  border-bottom: 1px solid var(--color-outline);
}

.feature-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.feature-heading > p {
  font-size: var(--typography-body-sm-font-size);
  line-height: var(--typography-body-sm-line-height);
  color: var(--color-on-surface-muted);
  margin-bottom: 20px;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 20px;
  margin-top: 35px;
}

.feature-grid article {
  padding: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-lg);
  box-shadow: var(--shadow-raised);
  overflow: hidden;
}

.feature-icon {
  font-size: 22px;
  color: var(--color-secondary);
}

.feature-grid h3 {
  margin: 21px 0 12px;
}

.catalog {
  background: var(--color-surface-raised);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-md);
  margin-top: 26px;
  overflow: hidden;
}

.catalog > div {
  display: flex;
  gap: 9px;
  align-items: center;
  padding: 13px 10px;
  border-bottom: 1px solid var(--color-outline);
}

.product-icon {
  display: grid;
  place-items: center;
  background: var(--color-surface-tint);
  width: 29px;
  height: 29px;
  color: var(--color-secondary);
  border-radius: var(--rounded-sm);
}

.catalog b {
  display: block;
  font-size: 8px;
  font-weight: 500;
}

.catalog small {
  font-size: 7px;
  color: var(--color-on-surface-muted);
}

.catalog strong {
  font-size: 8px;
  white-space: nowrap;
  font-weight: 500;
  margin-left: auto;
}

.catalog .catalog-search {
  border: 0;
  color: var(--color-on-surface-muted);
  font-size: 14px;
  padding: 12px;
}

.catalog-search > span {
  font-size: 7px;
}

.paper-mini {
  background: var(--color-surface-raised);
  box-shadow: var(--shadow-raised);
  border: 1px solid var(--color-outline);
  padding: 19px;
  margin: 27px 12px -50px;
  transform: rotate(-4deg);
}

.paper-mini .mini-logo {
  font-size: 17px;
  display: block;
}

.paper-mini .mini-logo b {
  font-size: 7px;
}

.paper-mini > strong {
  display: block;
  font-family: var(--typography-display-accent-font-family), Georgia, serif;
  font-size: 25px;
  font-weight: 400;
  margin-top: 20px;
}

.paper-mini > i {
  height: 4px;
  background: var(--color-surface-tint);
  display: block;
  margin-top: 12px;
  width: 100%;
}

.paper-mini > i:nth-of-type(2) {
  width: 70%;
}

.paper-mini > div {
  background: var(--color-surface-tint);
  margin-top: 22px;
  padding: 12px;
  font-size: 7px;
  display: flex;
  justify-content: space-between;
}

.status-list {
  margin-top: 33px;
  display: grid;
  gap: 16px;
}

.status-list > span {
  display: flex;
  justify-content: space-between;
  gap: 6px;
  font-size: 8px;
  align-items: center;
}

.status-list b {
  font-size: 7px;
  font-weight: 500;
  background: var(--color-status-sent);
  color: var(--color-on-status-sent);
  padding: 5px 7px;
  border-radius: var(--rounded-sm);
}

.status-list > span:nth-child(2) b {
  background: var(--color-status-accepted);
  color: var(--color-on-status-accepted);
}

.status-list > span:nth-child(3) b {
  background: var(--color-status-draft);
  color: var(--color-on-status-draft);
}

@media (max-width: 1050px) {
  .feature-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 1050px) {
  .feature-main {
    grid-column: span 2;
  }
}

@media (max-width: 1050px) {
  .catalog {
    max-width: 450px;
  }
}

@media (max-width: 760px) {
  .feature-heading {
    display: block;
  }
}

@media (max-width: 760px) {
  .feature-heading > p {
    margin-top: 20px;
  }
}

@media (max-width: 760px) {
  .feature-grid {
    grid-template-columns: 1fr;
    margin-top: 25px;
  }
}

@media (max-width: 760px) {
  .feature-main {
    grid-column: auto;
  }
}

@media (max-width: 760px) {
  .feature-grid article {
    min-height: 280px;
  }
}

@media (max-width: 760px) {
  .feature-grid p {
    max-width: 100%;
  }
}

@media (max-width: 760px) {
  .paper-mini {
    max-width: 240px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 760px) {
  .status-list {
    gap: 23px;
  }
}

@media (max-width: 760px) {
  .status-list > span {
    font-size: 11px;
  }
}

@media (max-width: 760px) {
  .status-list b {
    font-size: 9px;
  }
}
</style>
