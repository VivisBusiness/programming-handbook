import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Programming handbook",
  description: "Repositorio de estudio y práctica",
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      
      {
        text: 'Frontend',
        items: [
          { text: 'React', link: '/react/' },
          { text: 'Angular', link: '/angular/' },
        ]
      },
      
      {
        text: 'Backend & Core',
        items: [
          { text: 'Java', link: '/java/' },
          { text: 'Python', link: '/python/' },
        ]
      }
    ],

    sidebar: {
      '/react/': [
        {
          text: '📘 Ecosistema React',
          items: [
            { text: 'Introducción', link: '/react/' },
            //{ text: 'Estrategia de Bundling', link: '/react/bundlers' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VivisBusiness' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/viviana-moreno-gordillo/' },
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'
        },
        link: 'https://viviana-moreno.vercel.app/', ariaLabel: 'Portfolio'
      }
    ]
  }
})
