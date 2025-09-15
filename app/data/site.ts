// data/site.ts (versão curta)
export const profile = {
    name: 'Guilherme Golfeto',
    role: 'Front-end Developer',
    avatar: '/me.png',
    // número no formato DDI+DDD+NÚMERO — ex.: 55 18 91234 5678 -> "5518912345678"
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
    { title: 'Landing Pages', desc: 'Conversão' },
    { title: 'Sites', desc: 'Institucional' },
    { title: 'SEO', desc: 'On-page' },
    { title: 'Manutenção', desc: 'Suporte' }
]

export const metrics = [
    { kpi: '+38%', label: 'conv.' },
    { kpi: '95+', label: 'Lighthouse' },
    { kpi: '<1s', label: 'TTFB' },
    { kpi: '10+', label: 'projetos' },
]

export const stack = ['Nuxt', 'Vue', 'Tailwind', 'Bootstrap', 'SEO', 'GA4']
export const testimonials = [
    { name: 'Ana', role: 'E-commerce', text: 'Dobrou as vendas em 3 meses.' },
    { name: 'Bruno', role: 'Edtech', text: 'Leads qualificados e rápido.' },
    { name: 'Marina', role: 'Local', text: 'Mais visitas e medição real.' }
]
export const clients = ['Meta', 'Google', 'TikTok', 'RD', 'HubSpot']
export const process = [
    { step: 'Briefing', text: 'Objetivo claro' },
    { step: 'Protótipo', text: 'Fluxo e copy' },
    { step: 'Dev', text: 'Rápido e limpo' },
    { step: 'Lançamento', text: 'DNS + SSL' },
    { step: 'Otimização', text: 'Testes A/B' },
]
export const faqs = [
    {
        q: 'Qual é o prazo médio para entrega de uma landing page?',
        a: 'Depende da complexidade e do número de seções. Em média, uma landing page simples leva de 1 a 4 dias úteis. Já páginas mais robustas, com integrações (como Google Analytics, CRM ou formulários avançados), podem levar de 1 a 3 semanas. Sempre trabalho com um cronograma claro desde o início.'
    },
    {
        q: 'Você também cuida da hospedagem e do domínio?',
        a: 'Sim, posso orientar e configurar toda a parte técnica. Normalmente recomendo Hostinger ou Vercel para projetos estáticos, e posso auxiliar na compra do domínio, configuração de DNS e instalação de SSL gratuito. Assim você recebe o site já pronto e funcionando no seu domínio.'
    },
    {
        q: 'É possível integrar a landing page com ferramentas externas?',
        a: 'Sim. Faço integrações com ferramentas como Google Analytics 4, Facebook Pixel, RD Station, HubSpot, Mailchimp e até automações via Zapier/Make. Dessa forma, você consegue mensurar resultados e automatizar captação de leads sem complicações.'
    },
    {
        q: 'Como funciona o processo de criação?',
        a: 'Divido em 5 etapas: (1) Briefing para entender público e objetivo, (2) Protótipo em baixa fidelidade para validar estrutura, (3) Desenvolvimento do layout final com código limpo, (4) Lançamento com ajustes de domínio, DNS e SSL, (5) Otimização e pequenos ajustes após os primeiros acessos. Você acompanha cada fase e pode sugerir mudanças.'
    },
    {
        q: 'Quanto custa uma landing page?',
        a: 'O valor varia conforme o escopo. Páginas simples, focadas em captura de leads, têm um custo mais acessível. Já páginas mais complexas, com múltiplas seções e integrações avançadas, exigem mais horas de desenvolvimento. O importante é que antes de começar sempre envio um orçamento fechado com escopo, prazo e valor definidos.'
    },
    {
        q: 'E se eu precisar de ajustes depois da entrega?',
        a: 'Incluo um período de suporte pós-entrega (geralmente 15 dias) para ajustes pontuais. Para manutenções maiores, ofereço planos mensais de suporte e otimização, onde posso cuidar de atualizações, novos testes A/B e melhorias contínuas. Assim você não fica desamparado após a entrega.'
    }
]
