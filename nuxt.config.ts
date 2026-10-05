export default defineNuxtConfig({
  compatibilityDate: '2026-10-04',
  devtools: { enabled: false },
  devServer: { host: '0.0.0.0', port: 5174 },
  css: [
    '@fontsource-variable/dm-sans/wght.css',
    '@fontsource/instrument-serif/latin-400.css',
    '@fontsource/instrument-serif/latin-400-italic.css',
    '~/assets/css/tokens.css',
    '~/assets/css/main.css',
  ],
  runtimeConfig: {
    public: {
      appUrl: 'http://localhost:5173/login',
      siteUrl: '',
      indexable: false,
    },
  },
  hooks: {
    'nitro:config'(config) {
      if (config.static) {
        config.prerender = {
          ...config.prerender,
          routes: [
            '/',
            '/como-fazer-orcamento-de-servicos',
            '/calculadora-de-orcamento',
            '/calculadora-de-desconto',
            '/calculadora-de-margem',
            '/calculadora-de-custo-hora',

            '/robots.txt',
            '/sitemap.xml',
          ],
        }
      }
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Sistema de orçamentos para pequenos negócios | orce-me',
      meta: [
        { name: 'theme-color', content: '#174c3c' },
        {
          name: 'description',
          content:
            'Transforme seu catálogo em orçamentos profissionais. Produtos, serviços, cálculos e PDF com a identidade da sua empresa, em um só lugar.',
        },
      ],
      link: [{ rel: 'icon', href: '/favicon.svg' }],
      script: [
        {
          innerHTML:
            'try{const t=localStorage.getItem("orce-theme");document.documentElement.dataset.theme=t==="dark"||t==="light"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{document.documentElement.dataset.theme="light"}',
          tagPosition: 'head',
        },
      ],
    },
  },
})
