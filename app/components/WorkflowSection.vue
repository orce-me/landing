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
  font-size: 13px;
  line-height: 1.8;
  color: var(--muted);
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
  border-top: 1px solid #cfd9c5;
  padding-top: 15px;
  font-size: 12px;
  color: #6e8557;
}

.step-number i {
  font-size: 18px;
  font-style: normal;
}

.steps h3 {
  margin: 22px 0 12px;
}

.steps p {
  font-size: 12px;
  line-height: 1.9;
  color: var(--muted);
  max-width: 305px;
}

.mini-tags {
  display: flex;
  gap: 7px;
  margin-top: 20px;
}

.mini-tags > span {
  background: #f0f3e9;
  border: 1px solid #e0e6d7;
  border-radius: 4px;
  padding: 6px 9px;
  font-size: 9px;
  color: #6d7c5f;
}

.mini-tags .green-tag {
  background: #e6eedb;
  color: #557443;
}

.mini-calc {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 24px;
  font-size: 10px;
  color: #7c8870;
}

.mini-calc b {
  font-weight: 500;
  color: #486e3c;
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

.step-number {
  color: #4b6d35;
}

.mini-tags > span {
  background: #e9efdf;
  border-color: #c7d5b8;
  color: #466038;
}

.mini-calc {
  color: #536746;
}

.mini-calc b {
  color: #345629;
}

[data-theme='dark'] .step-number,
[data-theme='dark'] .mini-calc,
[data-theme='dark'] .mini-calc b {
  color: #c0d79f;
}

[data-theme='dark'] .step-number {
  border-color: #405438;
}

[data-theme='dark'] .mini-tags > span,
[data-theme='dark'] .mini-tags .green-tag {
  background: #2b4029;
  border-color: #4b633b;
  color: #cce0b5;
}
</style>
