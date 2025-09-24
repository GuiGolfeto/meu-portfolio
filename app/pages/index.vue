<!-- app/pages/index.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '~/data/projects'
import { hero, profile, metrics, services } from '~/data/site'

const waLink = computed(() => {
    const num = (profile as any)?.whatsapp
    const first = ((profile as any)?.name || 'Olá').split(' ')[0]
    return num ? `https://wa.me/${num}?text=Oi%20${encodeURIComponent(first)}%2C%20quero%20um%20or%C3%A7amento` : null
})
const featured = computed(() => projects.slice(0, 6))

// Função para gerar classes de badges coloridos
const getTagClass = (index: number) => {
    const classes = [
        'bg-blue-100 text-blue-800',      // Azul para Landing Page
        'bg-purple-100 text-purple-800',  // Roxo para UI/UX Premium
        'bg-green-100 text-green-800',    // Verde para Alta Conversão
        'bg-orange-100 text-orange-800',  // Laranja para Responsivo
        'bg-red-100 text-red-800',        // Vermelho para Performance
        'bg-indigo-100 text-indigo-800',  // Índigo para outras tags
    ]
    return classes[index % classes.length]
}
</script>

<template>
    <!-- HERO SECTION - Estilo Agência Profissional -->
    <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <!-- Background Effects -->
        <div class="absolute inset-0 opacity-20">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        </div>
        
        <div class="relative container mx-auto px-6 py-20 md:py-32">
            <div class="max-w-4xl mx-auto text-center">
                <!-- Badge -->
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-8">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    WebSpark Creative
                </div>

                <!-- Main Heading -->
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        WebSpark Creative
                    </span>
                    <br>Transforma ideias em resultados
                </h1>

                <!-- Subtitle -->
                <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Criamos landing pages e sites que não apenas impressionam, mas <strong>convertem visitantes em clientes</strong>. 
                    Performance, SEO e design que fazem a diferença.
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <a v-if="waLink" :href="waLink" target="_blank" 
                       class="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <span>Falar com Especialista</span>
                        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                    <NuxtLink to="#portfolio"
                        class="inline-flex items-center px-8 py-4 border-2 border-gray-600 hover:border-white text-white font-semibold rounded-xl transition-all duration-300">
                        Ver Nossos Trabalhos
                    </NuxtLink>
            </div>

                <!-- Metrics -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                    <div v-for="metric in metrics" :key="metric.kpi" class="text-center">
                        <div class="text-3xl md:text-4xl font-bold text-white mb-2">{{ metric.kpi }}</div>
                        <div class="text-sm text-gray-400 uppercase tracking-wider">{{ metric.label }}</div>
                    </div>
                </div>
            </div>
                </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
        </div>
    </section>

    <!-- SERVICES SECTION - Estilo Agência -->
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
                <div v-for="service in services" :key="service.title" 
                     class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
                    <p class="text-gray-600 leading-relaxed">{{ service.desc }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Por que escolher a <span class="text-blue-600">WebSpark Creative</span>?
                    </h2>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                        Somos especialistas em criar experiências digitais que não apenas impressionam, 
                        mas <strong>convertem visitantes em clientes</strong>. Combinamos design moderno, 
                        performance otimizada e estratégias comprovadas de conversão.
                    </p>
                    
                    <div class="space-y-4">
                        <div class="flex items-start space-x-4">
                            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Desenvolvimento Moderno</h4>
                                <p class="text-gray-600">Tecnologias atuais como Nuxt, Vue.js e Tailwind CSS</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Performance Otimizada</h4>
                                <p class="text-gray-600">Sites rápidos com score Lighthouse 95+ garantido</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            </div>
        <div>
                                <h4 class="font-semibold text-gray-900">Suporte Contínuo</h4>
                                <p class="text-gray-600">Acompanhamento e melhorias pós-lançamento</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative">
                    <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                        <div class="text-center">
                            <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <img :src="(profile as any)?.avatar || '/me.png'" :alt="(profile as any)?.name || 'Foto'"
                                    class="h-20 w-20 rounded-full object-cover" />
                            </div>
                            <h3 class="text-2xl font-bold mb-2">{{ (profile as any)?.name }}</h3>
                            <p class="text-blue-100 mb-6">{{ (profile as any)?.role }}</p>
                            <p class="text-white/90 leading-relaxed">
                                Especialista em desenvolvimento web com foco em conversão e performance. 
                                Mais de 10 projetos entregues com resultados comprovados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PORTFOLIO SECTION -->
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
                <a v-if="waLink" :href="waLink" target="_blank"
                    class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300">
                    <span>Quer algo assim?</span>
                    <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>
            
            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="project in featured" :key="project.slug" 
                     class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="relative overflow-hidden">
                        <img :src="project.cover" :alt="project.title" 
                             class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a :href="project.demoPath" target="_blank"
                               class="inline-flex items-center px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                Ver Projeto
                                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
                        <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="(tag, index) in project.tags" :key="tag" 
                                  :class="getTagClass(index)"
                                  class="px-3 py-1 text-sm font-medium rounded-full">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </section>

    <!-- CTA SECTION -->
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
                    <a v-if="waLink" :href="waLink" target="_blank" 
                       class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Falar no WhatsApp
                    </a>
                    <a href="mailto:contato@exemplo.com?subject=Orçamento%20Desenvolvimento%20Web"
                       class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                        <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        Enviar E-mail
                    </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg mb-2">Resposta Rápida</h4>
                        <p class="text-blue-100">Respondemos em até 2 horas úteis</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg mb-2">Orçamento Gratuito</h4>
                        <p class="text-blue-100">Análise completa sem compromisso</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg mb-2">Entrega Rápida</h4>
                        <p class="text-blue-100">Projetos entregues no prazo acordado</p>
                    </div>
            </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
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
                        <!-- Instagram -->
                        <a href="https://www.instagram.com/websparkcreative/" target="_blank" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        
                        <!-- LinkedIn -->
                        <!-- <a href="https://www.linkedin.com/in/guilherme-golfeto/" target="_blank" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a> -->
                        
                        <!-- WhatsApp -->
                        <a :href="waLink" target="_blank" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Serviços</h4>
                    <ul class="space-y-2 text-gray-300">
                        <li><a href="#" class="hover:text-white transition-colors">Landing Pages</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Sites Institucionais</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">E-commerce</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">SEO & Performance</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Manutenção</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Contato</h4>
                    <div class="space-y-3 text-gray-300">
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <span>+55 (18) 99106-5626</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span>golfeto.dev@gmail.com</span>
                        </div>
                        <div class="flex items-start">
                            <svg class="w-5 h-5 mr-3 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
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
</template>
