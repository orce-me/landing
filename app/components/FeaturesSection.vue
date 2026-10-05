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

.mini-logo > span {
  color: #9aae77;
}

.mini-logo b {
  font-size: 9px;
  letter-spacing: 0;
  font-weight: 500;
  margin-left: 8px;
}

.feature-grid p {
  font-size: 12px;
  line-height: 1.9;
  color: var(--muted);
  max-width: 305px;
}

.features {
  background: #eef2e8;
  border-top: 1px solid #e4eadc;
  border-bottom: 1px solid #e4eadc;
}

.feature-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.feature-heading > p {
  font-size: 12px;
  color: #7a8670;
  line-height: 1.9;
  margin-bottom: 20px;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 20px;
  margin-top: 35px;
}

.feature-grid article {
  padding: 25px;
  background: #fafbf7;
  border: 1px solid #dfe6d7;
  border-radius: 9px;
  overflow: hidden;
}

.feature-icon {
  font-size: 22px;
  color: #71865b;
}

.feature-grid h3 {
  margin: 21px 0 12px;
}

.catalog {
  background: white;
  border: 1px solid #e0e6d9;
  border-radius: 6px;
  margin-top: 26px;
  overflow: hidden;
}

.catalog > div {
  display: flex;
  gap: 9px;
  align-items: center;
  padding: 13px 10px;
  border-bottom: 1px solid #ebeee7;
}

.product-icon {
  display: grid;
  place-items: center;
  background: #edf1e6;
  width: 29px;
  height: 29px;
  color: #788d61;
  border-radius: 4px;
}

.catalog b {
  display: block;
  font-size: 8px;
  font-weight: 500;
}

.catalog small {
  font-size: 7px;
  color: #929d87;
}

.catalog strong {
  font-size: 8px;
  white-space: nowrap;
  font-weight: 500;
  margin-left: auto;
}

.catalog .catalog-search {
  border: 0;
  color: #9aa38e;
  font-size: 14px;
  padding: 12px;
}

.catalog-search > span {
  font-size: 7px;
}

.paper-mini {
  background: white;
  box-shadow: 0 8px 25px #213d3410;
  border: 1px solid #e7eadf;
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
  font-family: 'Instrument Serif';
  font-size: 25px;
  font-weight: 400;
  margin-top: 20px;
}

.paper-mini > i {
  height: 4px;
  background: #edf0e8;
  display: block;
  margin-top: 12px;
  width: 100%;
}

.paper-mini > i:nth-of-type(2) {
  width: 70%;
}

.paper-mini > div {
  background: #f1f5e9;
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
  background: #e6edf7;
  color: #617c9e;
  padding: 5px 7px;
  border-radius: 4px;
}

.status-list > span:nth-child(2) b {
  background: #e6eedb;
  color: #60814d;
}

.status-list > span:nth-child(3) b {
  background: #f0edde;
  color: #938554;
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

.features {
  background: linear-gradient(125deg, #dce7cf 0%, #eaf0df 55%, #dfe9d2 100%);
  border-color: #c6d5b8;
}

.feature-grid article {
  background: #fafcf5;
  border-color: #bdceb0;
  box-shadow: 0 8px 24px #29482306;
}

.feature-heading > p {
  color: #506445;
}

.feature-icon {
  color: #4b6d35;
}

.catalog small,
.catalog .catalog-search {
  color: #5d7050;
}

.status-list b {
  background: #dce7f3;
  color: #355776;
}

.status-list > span:nth-child(2) b {
  background: #dbe9cb;
  color: #3d6227;
}

.status-list > span:nth-child(3) b {
  background: #ede4c9;
  color: #715a23;
}

[data-theme='dark'] .feature-grid article,
[data-theme='dark'] .catalog,
[data-theme='dark'] .paper-mini {
  background: #1b2b21;
  border-color: #3c5039;
  color: #e3eddb;
  box-shadow: 0 18px 48px #0002;
}

[data-theme='dark'] .catalog small,
[data-theme='dark'] .catalog .catalog-search {
  color: #b0c09f;
}

[data-theme='dark'] .catalog > div {
  border-color: #354734;
}

[data-theme='dark'] .product-icon {
  background: #344a2d;
  color: #c8dfa8;
}

[data-theme='dark'] .feature-heading > p {
  color: #b3c4a6;
}

[data-theme='dark'] .feature-icon {
  color: #c0d79f;
}

[data-theme='dark'] .features {
  background: linear-gradient(125deg, #1b2e21, #233724 55%, #192b20);
  border-color: #3a5035;
}

[data-theme='dark'] .paper-mini > i {
  background: #3d5035;
}

[data-theme='dark'] .paper-mini > div {
  background: #2b4029;
}

[data-theme='dark'] .status-list b {
  background: #293e51;
  color: #c0d9ed;
}

[data-theme='dark'] .status-list > span:nth-child(2) b {
  background: #314c2b;
  color: #c5e3a7;
}

[data-theme='dark'] .status-list > span:nth-child(3) b {
  background: #463e27;
  color: #eedc9f;
}
</style>
