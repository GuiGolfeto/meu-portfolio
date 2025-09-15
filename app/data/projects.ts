// data/projects.ts
export type Project = {
    slug: string
    title: string
    description: string
    tags: string[]
    cover: string      // caminho da capa
    demoPath: string   // caminho público do projeto
}

export const projects: Project[] = [
    {
        slug: 'agencia-de-marketing',
        title: 'Agência de Marketing',
        description: 'Landing page moderna com paleta roxo/preto, criada para destacar serviços digitais, gerar autoridade e aumentar conversões em campanhas pagas.',
        tags: ['Landing Page', 'Bootstrap', 'Conversão'],
        cover: '/projects/agencia-de-marketing/cover.jpg',
        demoPath: '/projects/agencia-de-marketing/'
    },
    {
        slug: 'nutricao',
        title: 'Nutricionista',
        description: 'Página clean e objetiva, pensada para profissionais de saúde que precisam transmitir confiança e oferecer agendamento simples da primeira consulta.',
        tags: ['Landing Page', 'UI Clean', 'Conversão'],
        cover: '/projects/nutricao/cover.jpg',
        demoPath: '/projects/nutricao/'
    },
    {
        slug: 'pagina-de-vendas',
        title: 'Página de Vendas',
        description: 'Estrutura de alta conversão com foco em copywriting, prova social e CTA estratégicos. Desenvolvida para maximizar a taxa de vendas de produtos digitais.',
        tags: ['Landing Page', 'Vendas', 'Conversão'],
        cover: '/projects/pagina-de-vendas/cover.jpg',
        demoPath: '/projects/pagina-de-vendas/'
    },
    {
        slug: 'podcast-criador-de-conteudo',
        title: 'Podcast / Criador de Conteúdo',
        description: 'Landing com player integrado e seção de episódios recentes. Voltada para criadores que desejam aumentar audiência e captar leads de ouvintes.',
        tags: ['Landing Page', 'Podcast', 'Conteúdo'],
        cover: '/projects/podcast-criador-de-conteudo/cover.jpg',
        demoPath: '/projects/podcast-criador-de-conteudo/'
    }
]
