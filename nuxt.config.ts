export default defineNuxtConfig({
  compatibilityDate: '2026-10-04',
  devtools: { enabled: false },
  devServer: { host: '0.0.0.0', port: 5174 },
  css: ['~/assets/css/main.css'],
  runtimeConfig: { public: { appUrl: 'http://localhost:5173/login' } },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'orce-me — Seu próximo negócio começa com um bom orçamento.',
      meta: [
        { name: 'theme-color', content: '#174c3c' },
        {
          name: 'description',
          content:
            'Transforme seu catálogo em orçamentos profissionais. Produtos, serviços, cálculos e PDF com a identidade da sua empresa, em um só lugar.',
        },
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap',
        },
      ],
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
