// data/site.ts (refinado)
export const profile = {
    name: 'Guilherme Golfeto',
    role: 'Desenvolvedor & Fundador',
    avatar: '/me.png',
    // formato: DDI+DDD+NÚMERO (sem espaços)
    whatsapp: '5518991065626'
}

export const hero = {
    title: 'Landing pages e sites rápidos que convertem.',
    subtitle: 'Nuxt • Tailwind • SEO • Performance',
    ctas: {
        primaryHref: '#contato',
        primaryText: 'Ver projetos',
        secondaryHref: '#portfolio',
        secondaryText: 'Portfólio'
    }
}

export const services = [
    { title: 'Landing Pages', desc: 'Páginas otimizadas para conversão máxima' },
    { title: 'Sites Institucionais', desc: 'Presença digital profissional e moderna' },
    { title: 'E-commerce', desc: 'Lojas online que vendem mais' },
    { title: 'SEO & Performance', desc: 'Visibilidade e velocidade otimizadas' }
]

export const metrics = [
    { kpi: '+38%', label: 'conversão' },
    { kpi: '95+', label: 'Lighthouse' },
    { kpi: '<1s', label: 'TTFB' },
    { kpi: '10+', label: 'projetos' }
]

export const stack = ['Nuxt', 'Vue', 'Tailwind', 'Bootstrap', 'SEO', 'GA4']
export const testimonials = [
    { name: 'Ana', role: 'E-commerce', text: 'Dobrou as vendas em 3 meses com páginas de produto e LP focadas.' },
    { name: 'Bruno', role: 'Edtech', text: 'Leads mais qualificados e tempo de carregamento bem menor.' },
    { name: 'Marina', role: 'Negócio local', text: 'Mais visitas orgânicas e agendamentos medidos no GA4.' }
]
export const clients = ['Meta', 'Google', 'TikTok', 'RD', 'HubSpot']
export const process = [
    { step: 'Briefing', text: 'Objetivo e público' },
    { step: 'Protótipo', text: 'Estrutura + copy' },
    { step: 'Dev', text: 'Código limpo' },
    { step: 'Lançamento', text: 'DNS + SSL' },
    { step: 'Otimização', text: 'A/B e métricas' }
]
export const faqs = [
    {
        q: 'Qual é o prazo médio para entrega de uma landing page?',
        a: 'De 1 a 4 dias úteis para páginas simples. Projetos com integrações e múltiplas seções podem levar 1–3 semanas, sempre com cronograma claro.'
    },
    {
        q: 'Você também cuida da hospedagem e do domínio?',
        a: 'Sim. Posso orientar compra de domínio, configurar DNS e publicar em Vercel/Hostinger com SSL gratuito.'
    },
    {
        q: 'Integrações externas são possíveis?',
        a: 'GA4, Meta Pixel, RD, HubSpot, Mailchimp e automações via Zapier/Make — sem dor de cabeça.'
    },
    {
        q: 'Como funciona o processo de criação?',
        a: 'Cinco etapas: briefing, protótipo, desenvolvimento, lançamento e otimização inicial. Você acompanha tudo.'
    },
    {
        q: 'Quanto custa uma landing page?',
        a: 'Depende do escopo. Sempre envio orçamento fechado com escopo, prazo e valor definidos antes de iniciar.'
    },
    {
        q: 'E após a entrega?',
        a: 'Suporte de 15 dias para ajustes pontuais e planos mensais para melhorias contínuas, se necessário.'
    }
]
