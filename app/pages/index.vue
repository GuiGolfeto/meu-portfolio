<!-- app/pages/index.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '~/data/projects'
import { hero, profile, metrics, services } from '~/data/site'
import { useSeoMeta, useHead } from '#imports'

const waLink = computed(() => {
    const num = (profile as any)?.whatsapp
    const first = ((profile as any)?.name || 'Olá').split(' ')[0]
    return num
        ? `https://wa.me/${num}?text=${encodeURIComponent(`Oi ${first}, quero um orçamento`)}`
        : null
})
const mailLink = computed(() => {
    const mail = (profile as any)?.email || 'contato@exemplo.com'
    const subject = 'Orçamento Desenvolvimento Web'
    return `mailto:${mail}?subject=${encodeURIComponent(subject)}`
})

const featured = computed(() => projects.slice(0, 6))

// ✅ Badges com cores determinísticas por nome da tag (em vez de usar o índice)
const palette = [
    'bg-blue-100 text-blue-800',
    'bg-purple-100 text-purple-800',
    'bg-green-100 text-green-800',
    'bg-orange-100 text-orange-800',
    'bg-red-100 text-red-800',
    'bg-indigo-100 text-indigo-800'
]
const getTagClass = (tag: string) => {
    let h = 0
    for (let i = 0; i < tag.length; i++) h = (h << 5) - h + tag.charCodeAt(i)
    const idx = Math.abs(h) % palette.length
    return palette[idx]
}

useSeoMeta({
    title: 'WebSpark Creative — Sites, Apps Mobile & Sistemas',
    description: 'Criamos landing pages, sites, apps iOS/Android e sistemas completos com SEO e alta performance.',
    ogTitle: 'WebSpark Creative — Sites, Apps Mobile & Sistemas',
    ogDescription: 'Sites que atraem clientes. Agora também Apps e Sistemas sob medida.',
    ogImage: '/logo/og-image.png',
    twitterCard: 'summary_large_image'
})

// ✅ JSON-LD básico (Organization + WebSite) no <head>
useHead({
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'WebSpark Creative',
                url: 'https://www.webspark.com.br',
                logo: 'https://www.webspark.com.br/logo/og-image.png',
                sameAs: [
                    'https://www.instagram.com/websparkcreative/'
                ],
                contactPoint: [{
                    '@type': 'ContactPoint',
                    contactType: 'sales',
                    areaServed: 'BR',
                    availableLanguage: ['pt-BR', 'en']
                }]
            })
        },
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'WebSpark Creative',
                url: 'https://www.webspark.com.br'
            })
        }
    ]
})

// --- Pricing -----------------------------------------------------------------
const formatBRL = (n: number) =>
    n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

type Plan = {
    title: string
    priceFrom: number
    ribbon?: string
    desc: string
    benefits: string[]
    highlight?: boolean
}

const plans: Plan[] = [
    {
        title: 'Landing Page',
        priceFrom: 400,
        ribbon: 'Mais pedido',
        desc: 'Página única, focada em conversão e captação de leads.',
        benefits: [
            'Hospedagem + domínio grátis (1 ano)',
            'Entrega em até 5 dias úteis',
            'SEO técnico básico',
            'Integração WhatsApp/Analytics',
            '1 rodada de ajustes'
        ],
        highlight: true
    },
    {
        title: 'Site Institucional',
        priceFrom: 1200,
        desc: 'De 3 a 6 páginas para apresentar sua empresa e serviços.',
        benefits: [
            'Hospedagem + domínio grátis (1 ano)',
            'Blog opcional',
            'Otimização de performance (95+)',
            'Formulário de contato e mapa',
            '2 rodadas de ajustes'
        ]
    },
    {
        title: 'E-commerce',
        priceFrom: 3500,
        desc: 'Loja online completa, pronta para vender.',
        benefits: [
            'Cadastro inicial de produtos',
            'Checkout e meios de pagamento',
            'Frete e cálculo automático',
            'Relatórios e cupons',
            'Treinamento de uso'
        ]
    },
    {
        title: 'App Flutter',
        priceFrom: 4500,
        desc: 'Aplicativos iOS/Android com código único.',
        benefits: [
            'Publicação assistida (stores)',
            'Push notifications',
            'Autenticação e APIs',
            'Layout responsivo',
            'Suporte pós-lançamento'
        ]
    },
    {
        title: 'Sistema Web (Nuxt + Node.js)',
        priceFrom: 6000,
        desc: 'Sistemas sob medida, escaláveis e integrados.',
        benefits: [
            'Arquitetura e banco de dados',
            'APIs REST/GraphQL',
            'Painel administrativo',
            'Autenticação e permissões',
            'Escalabilidade e logs'
        ]
    },
    {
        title: 'Manutenção & SEO',
        priceFrom: 250,
        desc: 'Plano mensal para evoluir e posicionar seu site.',
        benefits: [
            'Correções e melhorias',
            'Otimização de páginas',
            'Relatórios de desempenho',
            'Backups e monitoramento',
            'Suporte prioritário'
        ]
    }
]
</script>

<template>
    <!-- HERO SECTION - Estilo Agência Profissional (estrutura mantida; melhorias de a11y/links) -->
    <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div class="absolute inset-0 opacity-20">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        </div>

        <div class="relative container mx-auto px-6 py-20 md:py-32">
            <div class="max-w-4xl mx-auto text-center">
                <div
                    class="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-8">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
                    <span class="sr-only">Marca:</span> WebSpark Creative
                </div>

                <h1 class="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
                        WebSpark Creative
                    </span>
                    <span class="text-3xl md:text-4xl lg:text-5xl font-bold text-white block mt-2">
                        Do conceito ao cliente final
                    </span>
                </h1>

                <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Design, performance e SEO unidos para gerar <strong>resultados reais</strong>.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <a v-if="waLink" :href="waLink" target="_blank" rel="noopener"
                        aria-label="Falar com especialista pelo WhatsApp"
                        class="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <span>Falar com Especialista</span>
                        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <NuxtLink to="#portfolio" aria-label="Ver nossos trabalhos no portfólio"
                        class="inline-flex items-center px-8 py-4 border-2 border-gray-600 hover:border-white text-white font-semibold rounded-xl transition-all duration-300">
                        Ver Nossos Trabalhos
                    </NuxtLink>
                </div>

                <!-- metrics: apenas adicionando keys estáveis e semantic -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto" role="list">
                    <div v-for="(metric, i) in metrics" :key="metric?.label || i" class="text-center" role="listitem">
                        <div class="text-3xl md:text-4xl font-bold text-white mb-2">{{ metric.kpi }}</div>
                        <div class="text-sm text-gray-400 uppercase tracking-wider">{{ metric.label }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
            <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
        </div>
    </section>

    <!-- SERVICES SECTION - Estilo Agência (semântica + foco conversão) -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Nossos <span class="text-blue-600">Serviços</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Oferecemos soluções completas em desenvolvimento web, focadas em resultados e conversão
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <article v-for="service in services" :key="service.title"
                    class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                        aria-hidden="true">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
                    <p class="text-gray-600 leading-relaxed">{{ service.desc }}</p>

                    <!-- CTA leve por card (aumenta clique qualificado) -->
                    <div class="mt-5">
                        <a v-if="waLink" :href="waLink" target="_blank" rel="noopener"
                            class="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
                            :aria-label="`Solicitar orçamento de ${service.title} pelo WhatsApp`">
                            Solicitar orçamento →
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION (só ajustes de alt/aria e mailto dinâmico) -->
    <section class="relative py-24 bg-white">
        <!-- glow de fundo suave -->
        <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b">
        </div>

        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
                <!-- Texto -->
                <div>
                    <!-- <span
                        class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Por que escolher
                    </span> -->

                    <h2 class="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Por que escolher a <span
                            class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WebSpark
                            Creative</span>?
                    </h2>

                    <p class="mt-5 text-lg leading-relaxed text-gray-600">
                        Transformamos <strong>ideias</strong> em produtos digitais com <strong>design moderno</strong>,
                        <strong>performance</strong> e <strong>escala</strong>: sites, apps e sistemas sob medida.
                    </p>

                    <!-- chips de prova social -->
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span
                            class="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 text-sm px-3 py-1">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0" />
                            </svg>
                            Lighthouse 95+
                        </span>
                        <span
                            class="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 text-sm px-3 py-1">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0" />
                            </svg>
                            5+ anos
                        </span>
                        <span
                            class="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 text-sm px-3 py-1">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 7h18M3 12h18M3 17h18" />
                            </svg>
                            40+ projetos
                        </span>
                    </div>

                    <!-- CTA leve -->
                    <div class="mt-8">
                        <a v-if="waLink" :href="waLink" target="_blank" rel="noopener"
                            class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 transition">
                            Falar com especialista
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4-4 4M3 12h18" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Lista de benefícios (glass cards) -->
                <div class="grid sm:grid-cols-2 gap-5">
                    <div
                        class="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-6 ring-1 ring-gray-200 hover:ring-blue-200 transition">
                        <div
                            class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                            ✔
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900">Multiplataforma</h3>
                        <p class="mt-2 text-gray-600 text-sm">
                            Apps iOS/Android com Flutter, e stack web robusta com Nuxt + Node.js.
                        </p>
                    </div>

                    <div
                        class="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-6 ring-1 ring-gray-200 hover:ring-blue-200 transition">
                        <div
                            class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                            ✔
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900">Performance & SEO</h3>
                        <p class="mt-2 text-gray-600 text-sm">
                            Páginas rápidas (LCP/CLS), code-splitting e SEO técnico pronto para ranquear.
                        </p>
                    </div>

                    <div
                        class="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-6 ring-1 ring-gray-200 hover:ring-blue-200 transition">
                        <div
                            class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                            ✔
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900">Suporte contínuo</h3>
                        <p class="mt-2 text-gray-600 text-sm">
                            Evolução pós-lançamento, monitoramento e melhorias recorrentes.
                        </p>
                    </div>

                    <div
                        class="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-6 ring-1 ring-gray-200 hover:ring-blue-200 transition">
                        <div
                            class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                            ✔
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900">Arquitetura escalável</h3>
                        <p class="mt-2 text-gray-600 text-sm">
                            APIs REST/GraphQL, logs, auth e banco pensados para crescer com você.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- TEAM / FOUNDERS (cartões premium com borda gradiente + glow) -->
    <section class="relative py-24 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900">
                    Quem está por trás da <span
                        class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WebSpark</span>
                </h2>
                <p class="mt-3 text-lg text-gray-600">
                    Time enxuto, mãos na massa, foco total em resultado.
                </p>
            </div>

            <div class="mt-14 grid gap-8 lg:grid-cols-2">
                <!-- Guilherme -->
                <article
                    class="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/70 via-purple-500/70 to-fuchsia-500/70">
                    <div class="relative rounded-3xl bg-white p-8 sm:p-10 shadow-xl transition group-hover:shadow-2xl">
                        <!-- halo -->
                        <div
                            class="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-fuchsia-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition">
                        </div>

                        <div class="relative flex flex-col items-center text-center">
                            <!-- avatar -->
                            <div class="relative">
                                <div
                                    class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/40 blur-xl">
                                </div>
                                <img src="/me.png" alt="Foto de Guilherme Golfeto"
                                    class="relative h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-lg" />
                            </div>

                            <h3
                                class="mt-5 text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                                Guilherme Golfeto
                            </h3>
                            <p class="text-blue-700/70 font-medium">Desenvolvedor Full-Stack • Fundador</p>

                            <p class="mt-4 text-gray-600 max-w-md">
                                Especialista em <strong>sites, apps e sistemas completos</strong>, unindo design,
                                performance e conversão.
                                <strong>5+ anos</strong> de experiência e <strong>40+ projetos</strong> entregues.
                            </p>

                            <ul class="mt-6 grid grid-cols-3 gap-3 text-sm text-gray-700">
                                <li class="rounded-xl bg-gray-100 px-3 py-2">Nuxt + Node</li>
                                <li class="rounded-xl bg-gray-100 px-3 py-2">Flutter</li>
                                <li class="rounded-xl bg-gray-100 px-3 py-2">SEO 95+</li>
                            </ul>

                            <div class="mt-7">
                                <a v-if="waLink" :href="waLink" target="_blank" rel="noopener"
                                    class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-semibold text-white shadow hover:opacity-95 transition">
                                    Conversar no WhatsApp
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4-4 4M3 12h18" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Aref -->
                <article
                    class="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/70 via-purple-500/70 to-fuchsia-500/70">
                    <div class="relative rounded-3xl bg-white p-8 sm:p-10 shadow-xl transition group-hover:shadow-2xl">
                        <div
                            class="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-fuchsia-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition">
                        </div>

                        <div class="relative flex flex-col items-center text-center">
                            <div class="relative">
                                <div
                                    class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/40 blur-xl">
                                </div>
                                <img src="/aref.png" alt="Foto de Aref"
                                    class="relative h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-lg" />
                            </div>

                            <h3
                                class="mt-5 text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                                Aref
                            </h3>
                            <p class="text-blue-700/70 font-medium">Desenvolvedor iOS & Mobile • Cofundador</p>

                            <p class="mt-4 text-gray-600 max-w-md">
                                <strong>Desenvolvedor iOS (Swift/SwiftUI)</strong>, focado em
                                <strong>UX, performance e escalabilidade</strong>. <strong>6+ anos</strong> e
                                <strong>40+ apps/projetos</strong> entregues.
                            </p>

                            <ul class="mt-6 grid grid-cols-3 gap-3 text-sm text-gray-700">
                                <li class="rounded-xl bg-gray-100 px-3 py-2">Swift / SwiftUI</li>
                                <li class="rounded-xl bg-gray-100 px-3 py-2">iOS Nativo</li>
                                <li class="rounded-xl bg-gray-100 px-3 py-2">UX Mobile</li>
                            </ul>

                            <div class="mt-7">
                                <a v-if="waLink" :href="waLink" target="_blank" rel="noopener"
                                    class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-semibold text-white shadow hover:opacity-95 transition">
                                    Falar com a equipe
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4-4 4M3 12h18" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </section>



    <!-- PORTFOLIO SECTION (imagem lazy + alt + badges determinísticas) -->
    <section id="portfolio" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Nossos <span class="text-blue-600">Projetos</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Conheça nossa galeria de projetos desenvolvidos com foco em resultados, performance e conversão.
                    Cada projeto é único e personalizado para atender às necessidades específicas do cliente.
                </p>
                <a v-if="waLink" :href="waLink" target="_blank" rel="noopener"
                    class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
                    aria-label="Pedir orçamento pelo WhatsApp">
                    <span>Quer algo assim?</span>
                    <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>

            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="project in featured" :key="project.slug"
                    class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="relative overflow-hidden">
                        <img :src="project.cover" :alt="project.title"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy" width="640" height="360" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <div
                            class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a :href="project.demoPath" target="_blank" rel="noopener"
                                class="inline-flex items-center px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                                :aria-label="`Abrir projeto ${project.title}`">
                                Ver Projeto
                                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
                        <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tag in project.tags" :key="tag" :class="getTagClass(tag)"
                                class="px-3 py-1 text-sm font-medium rounded-full">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="precos" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900">Planos & Preços</h2>
                <p class="mt-3 text-lg text-gray-600">
                    Projetos sob medida, com opções para cada fase do seu negócio. Valores <strong>a partir de</strong>:
                </p>
            </div>

            <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <article v-for="p in plans" :key="p.title" class="relative rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition
               border-gray-200" :class="p.highlight ? 'ring-2 ring-blue-500' : ''">
                    <!-- Ribbon -->
                    <div v-if="p.ribbon"
                        class="absolute -top-3 left-6 inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
                        {{ p.ribbon }}
                    </div>

                    <h3 class="text-xl font-bold text-gray-900">{{ p.title }}</h3>
                    <p class="mt-1 text-gray-600">{{ p.desc }}</p>

                    <div class="mt-5 flex items-baseline gap-2">
                        <span class="text-sm text-gray-500">a partir de</span>
                        <span class="text-3xl font-extrabold text-gray-900">{{ formatBRL(p.priceFrom) }}</span>

                    </div>

                    <ul class="mt-6 space-y-3">
                        <li v-for="b in p.benefits" :key="b" class="flex items-start gap-2">
                            <span
                                class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                            <span class="text-gray-700">{{ b }}</span>
                        </li>
                    </ul>

                    <div class="mt-6">
                        <a v-if="waLink" :href="waLink" target="_blank" rel="noopener"
                            class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                            :aria-label="`Solicitar orçamento do plano ${p.title} no WhatsApp`">
                            Solicitar orçamento
                            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </article>
            </div>

            <p class="mt-8 text-center text-sm text-gray-500">
                * Valores indicativos. O preço final pode variar conforme escopo, integrações e prazos.
            </p>
        </div>
    </section>


    <!-- CTA SECTION (email dinâmico + aria) -->
    <section id="contato" class="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div class="container mx-auto px-6 text-center">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    Pronto para transformar sua <span class="text-yellow-300">presença digital</span>?
                </h2>
                <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Entre em contato conosco hoje e receba um orçamento personalizado para seu projeto.
                    Vamos criar algo incrível juntos!
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a v-if="waLink" :href="waLink" target="_blank" rel="noopener"
                        class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        aria-label="Conversar no WhatsApp">
                        <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Falar no WhatsApp
                    </a>
                    <a :href="mailLink"
                        class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                        aria-label="Enviar e-mail para orçamento">
                        <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Enviar E-mail
                    </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            aria-hidden="true">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg mb-2">Resposta Rápida</h4>
                        <p class="text-blue-100">Respondemos em até 2 horas úteis</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            aria-hidden="true">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg mb-2">Orçamento Gratuito</h4>
                        <p class="text-blue-100">Análise completa sem compromisso</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            aria-hidden="true">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg mb-2">Entrega Rápida</h4>
                        <p class="text-blue-100">Projetos entregues no prazo acordado</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER (mantido; só troquei e-mail/wa dinâmicos e aria) -->
    <footer class="bg-gray-900 text-white py-16">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-8 mb-12">
                <div class="md:col-span-2">
                    <div class="mb-6">
                        <Logo :size="48" :show-text="true" :show-subtitle="true" />
                    </div>
                    <p class="text-gray-300 mb-6 max-w-md">
                        Especialistas em desenvolvimento web moderno, focados em criar experiências digitais
                        que convertem visitantes em clientes.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://www.instagram.com/websparkcreative/" target="_blank" rel="noopener"
                            aria-label="Abrir Instagram da WebSpark Creative"
                            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        <a v-if="waLink" :href="waLink" target="_blank" rel="noopener"
                            aria-label="Abrir WhatsApp da WebSpark Creative"
                            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 class="text-lg font-semibold mb-4">Serviços</h4>
                    <ul class="space-y-2 text-gray-300">
                        <li><a href="#servicos" class="hover:text-white transition-colors">Landing Pages</a></li>
                        <li><a href="#servicos" class="hover:text-white transition-colors">Sites Institucionais</a></li>
                        <li><a href="#servicos" class="hover:text-white transition-colors">E-commerce</a></li>
                        <li><a href="#servicos" class="hover:text-white transition-colors">SEO & Performance</a></li>
                        <li><a href="#servicos" class="hover:text-white transition-colors">Manutenção</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-lg font-semibold mb-4">Contato</h4>
                    <div class="space-y-3 text-gray-300">
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>+55 (18) 99106-5626</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a :href="mailLink" class="hover:underline">contato@webspark.com.br</a>
                        </div>
                        <div class="flex items-start">
                            <svg class="w-5 h-5 mr-3 text-blue-400 mt-1" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Brasil</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2025 WebSpark Creative. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <!-- Botão flutuante: agora usando o waLink (sem hardcode) -->
    <ClientOnly>
        <a v-if="waLink" :href="waLink" target="_blank" rel="noopener"
            class="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-xl hover:bg-green-400 transition"
            aria-label="Conversar agora pelo WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"
                aria-hidden="true">
                <path d="M20 3H4a1 1 0 00-1 1v16l4-4h13a1 1 0 001-1V4a1 1 0 00-1-1z" />
            </svg>
            Falar agora
        </a>
    </ClientOnly>
</template>
