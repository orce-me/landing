<script setup>
const appUrl = useRuntimeConfig().public.appUrl
const { origin, canonical } = usePageSeo({
  title: 'Como fazer um orçamento de serviços: guia e exemplo | orce-me',
  description:
    'Veja o que incluir em um orçamento de prestação de serviços: escopo, materiais, mão de obra, quantidades e condições, com um exemplo de cálculo.',
  path: '/como-fazer-orcamento-de-servicos',
  type: 'article',
})
if (origin) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'orce-me',
            item: `${origin}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Como fazer um orçamento de serviços',
            item: canonical,
          },
        ],
      },
      {
        '@type': 'Article',
        headline: 'Como fazer um orçamento de prestação de serviços',
        description:
          'Guia prático com checklist e exemplo de cálculo para pequenos negócios.',
        inLanguage: 'pt-BR',
        mainEntityOfPage: canonical,
        image: `${origin}/social-card.png`,
        author: { '@type': 'Organization', name: 'orce-me', url: origin },
        publisher: { '@type': 'Organization', name: 'orce-me', url: origin },
      },
    ],
  }
  useHead({
    script: [
      {
        key: 'structured-data',
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema).replaceAll('<', '\\u003c'),
      },
    ],
  })
}
</script>

<template>
  <article class="guide wrap">
    <GuideBreadcrumbs current="Como fazer um orçamento de serviços" />
    <h1>Como fazer um orçamento<br /><em>de prestação de serviços.</em></h1>
    <p class="intro">
      Um bom orçamento deixa claro o que será feito, quanto custa e quais
      condições o cliente precisa conhecer. Use este roteiro para organizar a
      proposta antes de enviá-la em PDF.
    </p>
    <nav aria-label="Neste guia" class="guide-index">
      <a href="#campos">O que incluir</a
      ><a href="#exemplo">Exemplo de cálculo</a
      ><a href="#revisao">Checklist de revisão</a
      ><a href="#erros">Erros comuns</a>
    </nav>
    <section id="campos">
      <h2>O que incluir no orçamento</h2>
      <ol>
        <li>
          <strong>Identificação da empresa e do cliente.</strong> Informe os
          dados de contato e o local do serviço quando necessário. Use um número
          de referência para encontrar a proposta depois.
        </li>
        <li>
          <strong>Descrição do escopo.</strong> Explique o serviço, os materiais
          incluídos e o que ficará fora da proposta. “Instalação de aquecedor”
          fica mais claro quando acompanhado dos detalhes da instalação.
        </li>
        <li>
          <strong>Produtos, serviços e quantidades.</strong> Separe
          equipamentos, materiais e mão de obra. Indique a unidade de cada item,
          como unidade, metro ou serviço.
        </li>
        <li>
          <strong>Preço unitário e subtotal.</strong> Multiplique a quantidade
          pelo preço de cada item. Deixe os descontos explícitos e confira se o
          total corresponde à soma apresentada.
        </li>
        <li>
          <strong>Condições da proposta.</strong> Registre prazo estimado, forma
          de pagamento, validade do orçamento e condições para executar o
          trabalho. Use informações acordadas para aquele projeto.
        </li>
      </ol>
    </section>
    <section id="exemplo">
      <h2>Exemplo de orçamento de instalação</h2>
      <p>
        Este exemplo é ilustrativo e usa os mesmos itens da demonstração do
        orce-me. Os valores não representam preços de mercado nem uma
        recomendação de cobrança.
      </p>
      <div class="table-scroll">
        <table>
          <caption>
            Produtos e serviços para uma instalação residencial
          </caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Preço unitário</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Aquecedor a gás 26L</th>
              <td>1 unidade</td>
              <td>R$ 3.490,00</td>
              <td>R$ 3.490,00</td>
            </tr>
            <tr>
              <th scope="row">Kit de instalação</th>
              <td>1 conjunto</td>
              <td>R$ 380,00</td>
              <td>R$ 380,00</td>
            </tr>
            <tr>
              <th scope="row">Instalação e configuração</th>
              <td>1 serviço</td>
              <td>R$ 650,00</td>
              <td>R$ 650,00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colspan="3">Total sem desconto</th>
              <td>R$ 4.520,00</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p>
        O cálculo é: quantidade × preço unitário para cada linha; depois, some
        os subtotais. Se a quantidade de serviços passar de um para dois, a mão
        de obra soma R$ 1.300,00 e o total passa a R$ 5.170,00. Uma revisão
        evita enviar o total antigo depois de alterar os itens.
      </p>
    </section>
    <section id="revisao">
      <h2>Confira antes de enviar o PDF</h2>
      <ul>
        <li>O nome do cliente e o local do serviço estão corretos?</li>
        <li>O escopo explica o que está incluído e o que não está?</li>
        <li>As descrições e os preços correspondem ao catálogo atual?</li>
        <li>
          As unidades, quantidades, subtotais e descontos foram revisados?
        </li>
        <li>As condições e a validade da proposta estão claras?</li>
        <li>O PDF está legível e tem os dados da sua empresa?</li>
      </ul>
      <p>
        Guarde uma cópia da versão enviada. Se o cliente pedir uma alteração,
        revise os itens e o total e identifique a nova versão para evitar
        confusão.
      </p>
    </section>
    <section id="erros">
      <h2>Erros comuns que deixam a proposta confusa</h2>
      <p>
        <strong>Copiar o orçamento anterior sem conferir.</strong> O cliente, os
        preços e as condições podem ter mudado. Reutilize o catálogo, mas revise
        os dados de cada projeto.
      </p>
      <p>
        <strong>Juntar tudo em uma única linha.</strong> Uma descrição genérica
        dificulta entender o valor. Separe materiais e execução quando isso
        ajudar o cliente a comparar o escopo.
      </p>
      <p>
        <strong>Alterar a quantidade sem revisar o total.</strong> Recalcule
        cada subtotal e o valor final depois de qualquer ajuste, inclusive
        descontos.
      </p>
      <p>
        <strong>Enviar versões diferentes sem identificação.</strong> Mantenha
        uma referência e registre qual documento foi enviado. Isso facilita
        retomar a conversa e revisar a proposta.
      </p>
    </section>
    <section>
      <h2>Quer simular os custos do seu serviço?</h2>
      <p>
        Use a
        <NuxtLink to="/calculadora-de-orcamento"
          >calculadora de orçamento de serviços</NuxtLink
        >
        para combinar materiais, horas de trabalho e outros custos e entender a
        margem sobre o preço final.
      </p>
    </section>
    <section class="guide-cta">
      <h2>Reutilize seu catálogo no próximo orçamento.</h2>
      <p>
        No orce-me, você seleciona produtos e serviços, ajusta quantidades,
        confere a proposta e exporta um PDF com a identidade da empresa.
      </p>
      <a class="button primary" :href="appUrl"
        >Criar meu orçamento <span>↗</span></a
      >
    </section>
  </article>
</template>

<style scoped>
.guide {
  max-width: 960px;
  padding-top: 45px;
  padding-bottom: 90px;
}
.back-link {
  font-size: 13px;
  color: var(--muted);
}
h1 {
  font-size: 48px;
  letter-spacing: -1.8px;
  font-weight: 500;
  line-height: 1.15;
  margin: 32px 0 22px;
}
h1 em {
  font-size: 56px;
}
.intro {
  font-size: 18px;
  line-height: 1.8;
  color: var(--muted);
  max-width: 720px;
}
.guide-index {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0 45px;
  padding: 20px 0;
  border-block: 1px solid var(--line);
  font-size: 13px;
}
.guide-index a {
  text-decoration: underline;
  text-underline-offset: 4px;
}
section {
  margin-top: 45px;
  scroll-margin-top: 30px;
}
h2 {
  font-size: 27px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
}
p,
li {
  font-size: 15px;
  line-height: 1.9;
  color: var(--muted);
}
li {
  margin-bottom: 14px;
}
strong {
  color: inherit;
}
p {
  margin: 18px 0;
}
ol,
ul {
  padding-left: 24px;
}
.table-scroll {
  overflow-x: auto;
  margin: 25px 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}
caption {
  text-align: left;
  color: var(--muted);
  padding-bottom: 14px;
}
th,
td {
  padding: 15px 10px;
  border-bottom: 1px solid var(--line);
}
tbody th {
  font-weight: 500;
}
thead,
tfoot {
  background: #e9f0df;
}
tfoot {
  font-weight: 600;
}
.guide-cta {
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: #eef3e6;
}
[data-theme='dark'] thead,
[data-theme='dark'] tfoot,
[data-theme='dark'] .guide-cta {
  background: #263c29;
}
@media (max-width: 760px) {
  h1 {
    font-size: 34px;
  }
  h1 em {
    font-size: 40px;
  }
  .intro {
    font-size: 16px;
  }
  .guide {
    padding-top: 25px;
  }
  th,
  td {
    white-space: nowrap;
  }
  .guide-cta {
    padding: 22px;
  }
  h2 {
    font-size: 24px;
  }
}
section a:not(.button) {
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
