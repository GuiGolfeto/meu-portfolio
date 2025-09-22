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
        title: 'Agência de Marketing',
        description: 'Landing moderna (roxo/preto) para destacar serviços digitais e aumentar conversões.',
        tags: ['Landing Page', 'Bootstrap', 'Conversão'],
        cover: '/projects/agencia-de-marketing/cover.jpg',
        demoPath: '/projects/agencia-de-marketing/'
    },
    {
        slug: 'nutricao',
        title: 'Nutricionista',
        description: 'Página clean para profissionais de saúde com agendamento simples da primeira consulta.',
        tags: ['Landing Page', 'UI Clean', 'Conversão'],
        cover: '/projects/nutricao/cover.jpg',
        demoPath: '/projects/nutricao/'
    },
    {
        slug: 'pagina-de-vendas',
        title: 'Página de Vendas',
        description: 'Estrutura de alta conversão com copy, prova social e CTAs estratégicos.',
        tags: ['Landing Page', 'Vendas', 'Conversão'],
        cover: '/projects/pagina-de-vendas/cover.jpg',
        demoPath: '/projects/pagina-de-vendas/'
    },
    {
        slug: 'podcast-criador-de-conteudo',
        title: 'Podcast / Criador de Conteúdo',
        description: 'Landing com player e episódios recentes para crescer audiência e captar leads.',
        tags: ['Landing Page', 'Podcast', 'Conteúdo'],
        cover: '/projects/podcast-criador-de-conteudo/cover.jpg',
        demoPath: '/projects/podcast-criador-de-conteudo/'
    }
]
