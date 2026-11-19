<template>
  <section class="workflow wrap section" id="como-funciona">
    <div class="section-heading">
      <div class="sticky" v-reveal>
        <span class="eyebrow">COMO FUNCIONA</span>
        <h2>Do catálogo ao PDF, <em>em três etapas.</em></h2>
        <p>
          Organize os itens, confira os valores e prepare o documento para seu
          cliente.
        </p>
      </div>
    </div>
    <ol class="steps">
      <li class="draw-line" v-reveal>
        <span class="step-number" aria-hidden="true">01</span>
        <div>
          <h3>Monte seu catálogo.</h3>
          <p>
            Cadastre produtos e serviços ou importe uma planilha. Descrições e
            preços prontos para usar de novo.
          </p>
          <div class="mini-tags">
            <span>▧ Produtos</span><span>⌁ Serviços</span><span>↥ CSV</span>
          </div>
        </div>
      </li>
      <li class="draw-line" v-reveal>
        <span class="step-number" aria-hidden="true">02</span>
        <div>
          <h3>Dê forma à proposta.</h3>
          <p>
            Escolha o cliente, adicione os itens e ajuste quantidades e
            descontos. Confira cada detalhe antes de enviar.
          </p>
          <div class="mini-calc">
            <span>Produtos + serviços</span><b>= Seu orçamento</b>
          </div>
        </div>
      </li>
      <li class="draw-line" v-reveal>
        <span class="step-number" aria-hidden="true">03</span>
        <div>
          <h3>Envie com confiança.</h3>
          <p>
            Exporte um PDF profissional com a sua marca e acompanhe o status da
            proposta em um só lugar.
          </p>
          <div class="mini-tags">
            <span class="green-tag">✓ PDF pronto</span><span>Enviado</span>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.workflow {
  display: grid;
  grid-template-columns: 0.9fr 2fr;
  gap: var(--spacing-5xl);
  align-items: start;
}
.sticky {
  position: sticky;
  top: 120px;
}
.section-heading {
  align-self: stretch;
}
.section-heading > div > p {
  max-width: 320px;
  font-size: var(--typography-body-lg-font-size);
  line-height: var(--typography-body-lg-line-height);
  color: var(--color-on-surface-muted);
}
.steps {
  margin: 0;
  padding: 0;
  list-style: none;
}
.steps li {
  position: relative;
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: var(--spacing-3xl);
  padding: var(--spacing-4xl) 0;
}
.steps li::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: var(--color-outline);
  transform-origin: left;
  transition: transform 1.2s var(--ease-editorial) 0.2s;
}
.step-number {
  font-family: var(--typography-numeral-font-family), Georgia, serif;
  font-style: italic;
  font-size: var(--typography-numeral-font-size);
  font-weight: var(--typography-numeral-font-weight);
  line-height: var(--typography-numeral-line-height);
  letter-spacing: var(--typography-numeral-letter-spacing);
  color: var(--color-secondary);
}
.steps h3 {
  font-size: var(--typography-title-lg-font-size);
  font-weight: var(--typography-title-lg-font-weight);
  letter-spacing: var(--typography-title-lg-letter-spacing);
  line-height: var(--typography-title-lg-line-height);
  margin: var(--spacing-sm) 0 var(--spacing-md);
}
.steps p {
  font-size: var(--typography-body-lg-font-size);
  line-height: var(--typography-body-lg-line-height);
  color: var(--color-on-surface-muted);
  max-width: 440px;
}
.mini-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
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
  gap: var(--spacing-md);
  align-items: center;
  margin-top: var(--spacing-xl);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}
.mini-calc b {
  font-weight: 500;
  color: var(--color-secondary);
}
@media (max-width: 1050px) {
  .workflow {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  .sticky {
    position: static;
  }
  .steps li {
    grid-template-columns: 120px 1fr;
  }
}
@media (max-width: 760px) {
  .steps li {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    padding: var(--spacing-3xl) 0;
  }
  .step-number {
    font-size: 64px;
  }
}
</style>
