<template>
  <section class="assistant" id="assistente" aria-labelledby="assistant-title">
    <div class="wrap section">
      <h2 id="assistant-title" v-reveal>
        Cole o pedido do cliente.<br /><em>A IA monta o rascunho.</em>
      </h2>
      <div class="assistant-card" v-reveal>
        <ul class="assistant-points">
          <li>
            <h3>Texto, áudio ou WhatsApp.</h3>
            <p>
              Cole a conversa, grave um áudio ou mande pelo WhatsApp. O
              assistente busca os itens no seu catálogo, encontra o cliente e
              monta o orçamento.
            </p>
          </li>
          <li>
            <h3>Ajuste em uma frase.</h3>
            <p>
              Peça mudanças como “usa a chaminé inox, 2 metros” e confira o novo
              total na hora.
            </p>
          </li>
          <li>
            <h3>Você revisa antes de enviar.</h3>
            <p>
              O orçamento fica em rascunho até você conferir e enviar. O
              assistente faz parte dos planos pagos.
            </p>
          </li>
        </ul>
        <div class="shot" data-nosnippet>
          <img
            src="/screens/assistant.webp"
            width="2020"
            height="1676"
            loading="lazy"
            decoding="async"
            alt="Tela do assistente do orce.me: a cliente pede um aquecedor a gás instalado com chaminé, o assistente monta o rascunho, recebe o pedido de usar a chaminé inox do catálogo e o orçamento fica com três itens e total de R$ 3.498,00."
          />
        </div>
      </div>
      <p class="illustration-note">Tela do orce.me com dados de exemplo.</p>
    </div>
  </section>
</template>

<style scoped>
.assistant h2 {
  text-align: center;
}
.assistant-card {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  align-items: start;
  margin-top: var(--spacing-4xl);
  overflow: hidden;
  border-radius: var(--rounded-xl);
  background: var(--color-surface);
}
.assistant-points {
  display: grid;
  gap: var(--spacing-2xl);
  margin: 0;
  padding: var(--spacing-3xl);
  list-style: none;
}
.assistant-points h3 {
  margin: 0 0 var(--spacing-xs);
  font-size: var(--typography-title-md-font-size);
  font-weight: var(--typography-title-md-font-weight);
  line-height: var(--typography-title-md-line-height);
}
.assistant-points p {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  color: var(--color-on-surface-muted);
}
/* The same cut screen as the feature cards: it enters from the right. */
.shot {
  margin-top: var(--spacing-3xl);
  overflow: hidden;
  border: 1px solid var(--color-outline);
  border-right: 0;
  border-bottom: 0;
  border-top-left-radius: var(--rounded-lg);
  background: var(--color-surface-raised);
  box-shadow: var(--shadow-raised);
  transition: transform 0.4s var(--ease-soft);
}
.shot img {
  display: block;
  width: 100%;
  height: auto;
}
.assistant-card:hover .shot {
  transform: translateY(-6px);
}
.illustration-note {
  text-align: right;
  margin-top: var(--spacing-lg);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}
@media (max-width: 1050px) {
  .assistant-card {
    grid-template-columns: 1fr;
  }
  .assistant-points {
    grid-template-columns: repeat(3, 1fr);
  }
  .shot {
    margin: 0 0 0 var(--spacing-3xl);
  }
}
@media (max-width: 760px) {
  .assistant-points {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    padding: var(--spacing-2xl);
  }
  .shot {
    margin-left: var(--spacing-2xl);
  }
}
</style>
