// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Portfólio — Guilherme',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfólio com projetos em HTML, CSS e JS' },
        { name: 'theme-color', content: '#0b0b10' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' }
      ]
    }
  },

  // Tailwind já é adicionado automaticamente pelo module add
  modules: ['@nuxtjs/tailwindcss'],

  // Regras para SPA fallback em hosts estáticos
  nitro: {
    prerender: {
      crawlLinks: true,
      // fallback de segurança: não matar o build caso algum /projects/ apareça
      failOnError: false
    }
  },
  routeRules: {
    '/**': { prerender: true },
    '/projects/**': { prerender: false } // gera estático
  },

  // gera site estático com `npx nuxi generate`
  future: { compatibilityVersion: 4 }
})