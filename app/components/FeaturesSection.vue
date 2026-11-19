<template>
  <section class="features" id="recursos" aria-labelledby="features-title">
    <div class="wrap section">
      <div class="feature-heading" v-reveal>
        <h2 id="features-title">
          Do item cadastrado<br /><em>ao documento final.</em>
        </h2>
      </div>
      <div class="feature-grid">
        <article class="feature-card" v-reveal="0">
          <div class="feature-copy">
            <h3>Reutilize itens do catálogo.</h3>
            <p>
              Guarde descrições e preços de produtos e serviços. Importe uma
              planilha CSV ou adicione cada item.
            </p>
          </div>
          <div class="shot" data-nosnippet>
            <img
              src="/screens/catalog.webp"
              width="2020"
              height="880"
              loading="lazy"
              decoding="async"
              alt="Tela de produtos do orce.me: aquecedores, materiais e serviços de instalação com tipo, variações e preço."
            />
          </div>
        </article>
        <article class="feature-card" v-reveal="1">
          <div class="feature-copy">
            <h3>Cliente, itens e total juntos.</h3>
            <p>
              Ajuste quantidades e descontos, confira o total e exporte um PDF
              com os dados da sua empresa.
            </p>
          </div>
          <div class="shot" data-nosnippet>
            <img
              src="/screens/proposal.webp"
              width="1932"
              height="942"
              loading="lazy"
              decoding="async"
              alt="Itens de um orçamento no orce.me: aquecedor, tubo e instalação com quantidade, unidade, preço e total de R$ 3.529,00."
            />
          </div>
        </article>
        <article class="feature-card feature-wide" v-reveal>
          <div class="feature-copy">
            <h3>Acompanhe cada proposta.</h3>
            <p>
              Veja quanto está aguardando resposta, quais propostas vencem nos
              próximos dias e quantas foram aceitas.
            </p>
          </div>
          <div class="shot" data-nosnippet>
            <img
              src="/screens/home.webp"
              width="2020"
              height="1360"
              loading="lazy"
              decoding="async"
              alt="Início do orce.me: valor aguardando resposta, orçamentos por status, taxa de aceite, valor enviado por semana e propostas que precisam de retorno."
            />
          </div>
        </article>
      </div>
      <p class="illustration-note">Telas do orce.me com dados de exemplo.</p>
    </div>
  </section>
</template>

<style scoped>
.feature-heading h2 {
  margin-bottom: 0;
  text-align: center;
}
.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-4xl);
}
.feature-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  border-radius: var(--rounded-xl);
  background: var(--color-surface);
}
.feature-copy {
  padding: var(--spacing-3xl);
}
.feature-copy h3 {
  margin: 0 0 var(--spacing-md);
  max-width: 350px;
  font-size: var(--typography-title-lg-font-size);
  letter-spacing: var(--typography-title-lg-letter-spacing);
  line-height: var(--typography-title-lg-line-height);
}
.feature-copy p {
  max-width: 390px;
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  color: var(--color-on-surface-muted);
}
/* A real screen that enters from the right and is cut by the card edges. */
.shot {
  margin: auto 0 0 var(--spacing-3xl);
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
  width: 150%;
  max-width: none;
  height: auto;
}
.feature-card:hover .shot {
  transform: translateY(-6px);
}
.feature-wide {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  align-items: start;
}
.feature-wide .shot {
  margin: var(--spacing-3xl) 0 0;
  max-height: 420px;
}
.feature-wide .shot img {
  width: 100%;
}
.illustration-note {
  text-align: right;
  margin-top: var(--spacing-lg);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-on-surface-muted);
}
@media (max-width: 760px) {
  .feature-grid,
  .feature-wide {
    grid-template-columns: 1fr;
  }
  .feature-copy {
    padding: var(--spacing-2xl);
  }
  .shot {
    margin-left: var(--spacing-2xl);
  }
  .feature-wide .shot {
    margin: 0 0 0 var(--spacing-2xl);
    max-height: 300px;
  }
  .shot img,
  .feature-wide .shot img {
    width: 180%;
  }
}
</style>
