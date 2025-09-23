// data/projects.ts
export type Project = {
    slug: string
    title: string
    description: string
    tags: string[]
    cover: string
    demoPath: string
}

export const projects: Project[] = [
    {
        slug: 'agencia-de-marketing',
        title: 'Agência de Marketing Digital',
        description: 'Landing page premium com design moderno e estratégias de conversão avançadas. Interface elegante com gradientes sofisticados que aumenta a credibilidade e conversão em 40%.',
        tags: ['Landing Page', 'UI/UX Premium', 'Alta Conversão', 'Responsivo'],
        cover: '/projects/agencia-de-marketing/cover.jpg',
        demoPath: '/projects/agencia-de-marketing/'
    },
    {
        slug: 'nutricao',
        title: 'Clínica de Nutrição Moderna',
        description: 'Site profissional para área da saúde com foco em conversão e agendamento online. Design clean e confiável que transmite credibilidade médica e facilita o contato.',
        tags: ['Site Institucional', 'Agendamento Online', 'Saúde', 'Performance'],
        cover: '/projects/nutricao/cover.jpg',
        demoPath: '/projects/nutricao/'
    },
    {
        slug: 'pagina-de-vendas',
        title: 'Landing de Vendas Premium',
        description: 'Página de vendas otimizada com copy persuasivo, prova social estratégica e CTAs que convertem. Estrutura testada para maximizar conversões e vendas online.',
        tags: ['Sales Page', 'Copy Persuasivo', 'Prova Social', 'ROI Otimizado'],
        cover: '/projects/pagina-de-vendas/cover.jpg',
        demoPath: '/projects/pagina-de-vendas/'
    },
    {
        slug: 'podcast-criador-de-conteudo',
        title: 'Plataforma de Podcast',
        description: 'Landing completa para criadores de conteúdo com player integrado, galeria de episódios e sistema de captação de leads. Focada em crescimento de audiência.',
        tags: ['Podcast', 'Player Integrado', 'Lead Generation', 'Conteúdo'],
        cover: '/projects/podcast-criador-de-conteudo/cover.jpg',
        demoPath: '/projects/podcast-criador-de-conteudo/'
    },
    {
        slug: 'ecommerce-premium',
        title: 'E-commerce Premium',
        description: 'Loja online moderna com carrinho inteligente, checkout otimizado e integração com pagamentos. Design focado em conversão e experiência do usuário.',
        tags: ['E-commerce', 'Checkout Otimizado', 'Pagamentos', 'Mobile First'],
        cover: '/projects/ecommerce-premium/cover.jpg',
        demoPath: '/projects/ecommerce-premium/'
    },
    {
        slug: 'consultoria-digital',
        title: 'Consultoria Digital',
        description: 'Site institucional para consultoria com sistema de agendamento, blog integrado e área de membros. Foco em autoridade e geração de leads qualificados.',
        tags: ['Site Institucional', 'Blog Integrado', 'Área de Membros', 'SEO'],
        cover: '/projects/consultoria-digital/cover.jpg',
        demoPath: '/projects/consultoria-digital/'
    }
]
