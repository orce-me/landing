<template>
  <section class="faq wrap section" id="duvidas">
    <div>
      <h2>Antes do primeiro<br /><em>“pode enviar”.</em></h2>
    </div>
    <div class="questions">
      <details>
        <summary>Para quem o orce-me foi feito?<span>+</span></summary>
        <p>
          Para pequenos negócios que vendem produtos e serviços e precisam
          preparar orçamentos com frequência, como instaladores, empresas de
          manutenção e prestadores de serviço.
        </p>
      </details>
      <details>
        <summary>Posso usar meu catálogo atual?<span>+</span></summary>
        <p>
          Sim. Você pode cadastrar seus itens manualmente ou importar um arquivo
          CSV, organizando produtos, serviços e preços para reutilizá-los.
        </p>
      </details>
      <details>
        <summary>
          O orçamento leva a marca da minha empresa?<span>+</span>
        </summary>
        <p>
          Sim. Configure os dados da sua empresa e a identidade do documento
          para gerar uma proposta profissional em PDF.
        </p>
      </details>
      <details>
        <summary>
          A inteligência artificial define meus preços?<span>+</span>
        </summary>
        <p>
          Os preços vêm do seu catálogo e dos ajustes que você faz no orçamento.
          Você confere os itens e os valores antes de finalizar a proposta.
        </p>
      </details>
    </div>
  </section>
</template>

<style scoped>
.faq {
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 70px;
}

.questions details {
  border-bottom: 1px solid #dce3d5;
}

.questions summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 23px 0;
  font-size: 13px;
}

.questions summary::-webkit-details-marker {
  display: none;
}

.questions summary span {
  color: #829568;
  font-size: 18px;
}

.questions details[open] summary span {
  transform: rotate(45deg);
}

.questions p {
  font-size: 12px;
  line-height: 1.9;
  color: var(--muted);
  padding-bottom: 22px;
  max-width: 470px;
}

@media (max-width: 760px) {
  .faq {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 760px) {
  .faq {
    gap: 5px;
  }
}

[data-theme='dark'] .questions details {
  border-color: #405438;
}
</style>
