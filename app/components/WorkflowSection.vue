<template>
  <section class="workflow wrap section" id="como-funciona">
    <h2 v-reveal>Do catálogo ao PDF em <em>três etapas.</em></h2>
    <ol class="steps">
      <li class="draw-line" v-reveal="0">
        <span class="step-number" aria-hidden="true">01</span>
        <h3>Monte seu catálogo.</h3>
        <p>
          Cadastre produtos e serviços ou importe uma planilha. Descrições e
          preços prontos para usar de novo.
        </p>
      </li>
      <li class="draw-line" v-reveal="1">
        <span class="step-number" aria-hidden="true">02</span>
        <h3>Prepare a proposta.</h3>
        <p>
          Escolha o cliente, adicione os itens e ajuste quantidades e descontos.
          Confira cada detalhe antes de enviar.
        </p>
      </li>
      <li class="draw-line" v-reveal="2">
        <span class="step-number" aria-hidden="true">03</span>
        <h3>Envie o PDF.</h3>
        <p>
          Exporte o PDF com a sua marca e acompanhe o status de cada proposta.
        </p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-3xl);
  margin: var(--spacing-5xl) 0 0;
  padding: 0;
  list-style: none;
}
.steps li {
  position: relative;
  padding-top: var(--spacing-2xl);
}
.steps li::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 2px;
  background: var(--color-on-surface);
  transform-origin: left;
  transition: transform 1.2s var(--ease-editorial) 0.2s;
}
.step-number {
  display: block;
  font-family: var(--typography-numeral-font-family), monospace;
  font-size: var(--typography-numeral-font-size);
  font-weight: var(--typography-numeral-font-weight);
  line-height: var(--typography-numeral-line-height);
  letter-spacing: var(--typography-numeral-letter-spacing);
  color: var(--color-secondary);
  transition: transform 0.5s var(--ease-editorial);
}
.steps li:hover .step-number {
  transform: translateX(8px);
}
.steps h3 {
  font-size: var(--typography-title-lg-font-size);
  font-weight: var(--typography-title-lg-font-weight);
  letter-spacing: var(--typography-title-lg-letter-spacing);
  line-height: var(--typography-title-lg-line-height);
  margin: var(--spacing-4xl) 0 var(--spacing-md);
}
.steps p {
  font-size: var(--typography-body-lg-font-size);
  line-height: var(--typography-body-lg-line-height);
  color: var(--color-on-surface-muted);
  max-width: 340px;
}
@media (max-width: 760px) {
  .steps {
    grid-template-columns: 1fr;
    gap: var(--spacing-4xl);
    margin-top: var(--spacing-3xl);
  }
  .step-number {
    font-size: 44px;
    letter-spacing: -2.4px;
  }
  .steps h3 {
    margin-top: var(--spacing-xl);
  }
}
</style>
