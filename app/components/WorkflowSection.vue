<template>
  <section class="workflow wrap section" id="como-funciona">
    <h2 v-reveal>Do catálogo ao PDF, <em>em três etapas.</em></h2>
    <ol class="steps">
      <li class="step step-urucum" v-reveal="0">
        <span class="step-number" aria-hidden="true">1</span>
        <h3>Monte seu catálogo.</h3>
        <p>
          Cadastre produtos e serviços ou importe uma planilha. Descrições e
          preços prontos para usar de novo.
        </p>
        <div class="snippet" aria-hidden="true">
          <div><span>Bolo de aniversário</span><b>R$ 350,00</b></div>
          <div><span>Caixa de docinhos</span><b>R$ 180,00</b></div>
          <div><span>Decoração da mesa</span><b>R$ 120,00</b></div>
        </div>
      </li>
      <li class="step step-anil" v-reveal="1">
        <span class="step-number" aria-hidden="true">2</span>
        <h3>Prepare a proposta.</h3>
        <p>
          Escolha o cliente, adicione os itens e ajuste quantidades e descontos.
          Confira cada detalhe antes de enviar.
        </p>
        <div class="snippet" aria-hidden="true">
          <div><span>Marina Oliveira</span><small>3 itens</small></div>
          <div class="snippet-total"><span>Total</span><b>R$ 650,00</b></div>
        </div>
      </li>
      <li class="step step-mata" v-reveal="2">
        <span class="step-number" aria-hidden="true">3</span>
        <h3>Envie o PDF.</h3>
        <p>
          Exporte o PDF com a sua marca e acompanhe o status de cada proposta.
        </p>
        <div class="snippet" aria-hidden="true">
          <div>
            <span class="file"><i></i>orcamento-0042.pdf</span
            ><span class="chip">Enviado</span>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.workflow h2 {
  text-align: center;
}
.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
  margin: var(--spacing-4xl) 0 0;
  padding: 0;
  list-style: none;
}
.step {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-3xl);
  border-radius: var(--rounded-xl);
}
.step-urucum {
  background: var(--color-urucum);
  color: var(--color-on-urucum);
}
.step-anil {
  background: var(--color-anil);
  color: var(--color-on-anil);
}
.step-mata {
  background: var(--color-mata);
  color: var(--color-on-mata);
}
.step-number {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--rounded-full);
  background: var(--color-surface-raised);
  color: var(--color-on-surface);
  font-size: var(--typography-title-md-font-size);
  font-weight: var(--typography-title-md-font-weight);
}
.step h3 {
  font-size: var(--typography-title-lg-font-size);
  font-weight: var(--typography-title-lg-font-weight);
  letter-spacing: var(--typography-title-lg-letter-spacing);
  line-height: var(--typography-title-lg-line-height);
  margin: var(--spacing-2xl) 0 var(--spacing-sm);
}
.step p {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  opacity: 0.82;
}
.snippet {
  margin-top: auto;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-surface-raised);
  border-radius: var(--rounded-md);
  box-shadow: var(--shadow-raised);
  color: var(--color-on-surface);
  font-size: var(--typography-body-sm-font-size);
  font-variant-numeric: tabular-nums;
}
.step p {
  margin-bottom: var(--spacing-2xl);
}
.snippet > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-md);
  padding: 6px 0;
}
.snippet > div + div {
  border-top: 1px solid var(--color-outline);
}
.snippet b {
  font-weight: 600;
  white-space: nowrap;
}
.snippet small {
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}
.snippet-total b {
  font-size: var(--typography-figure-font-size);
  font-weight: var(--typography-figure-font-weight);
  letter-spacing: var(--typography-figure-letter-spacing);
}
.file {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 500;
}
.file i {
  width: 18px;
  height: 22px;
  border-radius: 3px;
  background: var(--color-primary);
}
.chip {
  padding: 2px var(--spacing-md);
  border-radius: var(--rounded-full);
  background: var(--color-status-sent);
  color: var(--color-on-status-sent);
  font-size: var(--typography-label-sm-font-size);
  font-weight: 600;
}
@media (max-width: 1050px) {
  .steps {
    grid-template-columns: 1fr;
  }
  .step p {
    max-width: 520px;
  }
}
@media (max-width: 760px) {
  .workflow h2 {
    text-align: left;
  }
  .step {
    padding: var(--spacing-2xl);
  }
}
</style>
