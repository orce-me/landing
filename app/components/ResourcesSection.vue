<template>
  <section class="resources wrap section" id="materiais">
    <h2>Um orçamento melhor começa<br /><em>com informação clara.</em></h2>
    <p class="intro">
      Ferramentas gratuitas e exemplos para tirar a proposta do papel.
    </p>
    <div class="resource-grid">
      <NuxtLink class="resource" to="/como-fazer-orcamento-de-servicos"
        ><h3>
          Como fazer um orçamento de serviços <span aria-hidden="true">↗</span>
        </h3>
        <p>
          Veja os campos da proposta, um exemplo com materiais e mão de obra e
          um checklist antes de enviar.
        </p>
        <span class="resource-action">Ler o guia</span></NuxtLink
      >
      <NuxtLink class="resource" to="/calculadora-de-orcamento"
        ><h3>Calculadora de orçamento <span aria-hidden="true">↗</span></h3>
        <p>
          Simule custos de materiais, horas de trabalho e margem. Entenda a
          diferença entre margem e acréscimo.
        </p>
        <span class="resource-action">Calcular meu serviço</span></NuxtLink
      >
      <NuxtLink class="resource" to="/calculadora-de-desconto"
        ><h3>Calculadora de desconto <span aria-hidden="true">↗</span></h3>
        <p>
          Veja o preço final e quanto você concede de desconto em reais antes de
          enviar uma proposta.
        </p>
        <span class="resource-action">Usar gratuitamente</span></NuxtLink
      >
      <NuxtLink class="resource" to="/calculadora-de-margem"
        ><h3>
          Calculadora de margem e markup <span aria-hidden="true">↗</span>
        </h3>
        <p>
          Compare a margem sobre o preço de venda com o acréscimo sobre o custo.
          Simule produtos ou serviços com seus próprios valores.
        </p>
        <span class="resource-action">Usar gratuitamente</span></NuxtLink
      >
      <NuxtLink class="resource" to="/calculadora-de-custo-hora"
        ><h3>
          Calculadora de custo por hora <span aria-hidden="true">↗</span>
        </h3>
        <p>
          Estime quanto cada hora faturável precisa recuperar dos seus custos
          mensais para preparar orçamentos de serviços.
        </p>
        <span class="resource-action">Usar gratuitamente</span></NuxtLink
      >
      <NuxtLink class="resource" to="/calculadora-de-ponto-de-equilibrio"
        ><h3>
          Calculadora de ponto de equilíbrio <span aria-hidden="true">↗</span>
        </h3>
        <p>
          Descubra quantas vendas cobrem os custos fixos e variáveis do período.
        </p>
        <span class="resource-action">Usar gratuitamente</span></NuxtLink
      >
      <NuxtLink class="resource" to="/calculadora-de-preco-com-taxas"
        ><h3>
          Calculadora de preço com taxas <span aria-hidden="true">↗</span>
        </h3>
        <p>
          Considere taxas sobre a venda e a margem desejada ao formar seu preço.
        </p>
        <span class="resource-action">Usar gratuitamente</span></NuxtLink
      >
    </div>
  </section>
</template>

<style scoped>
.resources {
  border-top: 1px solid var(--color-outline);
}
.intro {
  font-size: var(--typography-body-md-font-size);
  color: var(--color-on-surface-muted);
  line-height: var(--typography-body-md-line-height);
  margin-top: 18px;
}
.resource-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 35px;
}
.resource {
  display: block;
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-lg);
  padding: 24px;
  background: var(--color-surface-tint);
}
.resource h3 {
  display: flex;
  justify-content: space-between;
  gap: 18px;
}
.resource p {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  color: var(--color-on-surface-muted);
  margin: 16px 0;
}
.resource-action {
  font-size: var(--typography-body-sm-font-size);
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media (max-width: 760px) {
  .resource-grid {
    grid-template-columns: 1fr;
  }
  .resource {
    padding: 22px;
  }
}
</style>
