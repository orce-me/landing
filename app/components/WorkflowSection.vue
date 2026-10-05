<template>
  <section class="workflow wrap section" id="como-funciona">
    <div class="section-heading">
      <h2>
        Como criar seu orçamento online.<br /><em
          >O trabalho repetitivo fica com a gente.</em
        >
      </h2>
      <p>Você conhece o serviço. O orce-me organiza o resto.</p>
    </div>
    <div class="steps">
      <article>
        <span class="step-number">01 <i>↗</i></span>
        <h3>Monte seu catálogo.</h3>
        <p>
          Cadastre produtos e serviços ou importe uma planilha. Descrições e
          preços prontos para usar de novo.
        </p>
        <div class="mini-tags">
          <span>▧ Produtos</span><span>⌁ Serviços</span><span>↥ CSV</span>
        </div>
      </article>
      <article>
        <span class="step-number">02 <i>↗</i></span>
        <h3>Dê forma à proposta.</h3>
        <p>
          Escolha o cliente, adicione os itens e ajuste quantidades e descontos.
          Confira cada detalhe antes de enviar.
        </p>
        <div class="mini-calc">
          <span>Produtos + serviços</span><b>= Seu orçamento</b>
        </div>
      </article>
      <article>
        <span class="step-number">03 <i>↗</i></span>
        <h3>Envie com confiança.</h3>
        <p>
          Exporte um PDF profissional com a sua marca e acompanhe o status da
          proposta em um só lugar.
        </p>
        <div class="mini-tags">
          <span class="green-tag">✓ PDF pronto</span><span>↗ Enviado</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section-heading {
  text-align: center;
}

.section-heading > p {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  color: var(--color-on-surface-muted);
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 57px;
}

.step-number {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--color-outline);
  padding-top: 15px;
  font-size: var(--typography-body-sm-font-size);
  color: var(--color-secondary);
}

.step-number i {
  font-size: 18px;
  font-style: normal;
}

.steps h3 {
  margin: 22px 0 12px;
}

.steps p {
  font-size: var(--typography-body-sm-font-size);
  line-height: var(--typography-body-sm-line-height);
  color: var(--color-on-surface-muted);
  max-width: 305px;
}

.mini-tags {
  display: flex;
  gap: 7px;
  margin-top: 20px;
}

.mini-tags > span {
  background: var(--color-surface-tint);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-sm);
  padding: 6px 9px;
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-secondary);
}

.mini-tags .green-tag {
  background: var(--color-status-accepted);
  color: var(--color-on-status-accepted);
}

.mini-calc {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 24px;
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}

.mini-calc b {
  font-weight: 500;
  color: var(--color-secondary);
}

@media (max-width: 760px) {
  .steps {
    grid-template-columns: 1fr;
    gap: 35px;
    margin-top: 37px;
  }
}

@media (max-width: 760px) {
  .steps article {
    max-width: 100%;
  }
}

@media (max-width: 760px) {
  .steps p {
    max-width: 100%;
  }
}

@media (max-width: 760px) {
  .steps h3 {
    margin-top: 15px;
  }
}
</style>
