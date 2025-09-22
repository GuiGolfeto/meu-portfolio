<!-- app/pages/index.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '~/data/projects'
import { hero, profile } from '~/data/site'

const waLink = computed(() => {
    const num = (profile as any)?.whatsapp
    const first = ((profile as any)?.name || 'Olá').split(' ')[0]
    return num ? `https://wa.me/${num}?text=Oi%20${encodeURIComponent(first)}%2C%20quero%20um%20or%C3%A7amento` : null
})
const featured = computed(() => projects.slice(0, 6))
</script>

<template>
    <!-- HERO editorial: título grande + foto pequena/identidade -->
    <section class="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-8 md:p-12">
        <div class="grid md:grid-cols-[1.2fr_.8fr] gap-10 items-start">
            <div>
                <h1 class="text-[40px] md:text-[56px] leading-[1.03] font-extrabold tracking-tight">
                    {{ hero.title }}
                </h1>
                <p class="mt-4 text-[color:var(--muted)] text-[15px] max-w-2xl">
                    Design direto ao ponto, atenção aos detalhes e código enxuto. Eu cuido de performance e SEO; você
                    foca no negócio.
                </p>

                <div class="mt-6 flex flex-wrap gap-2 text-[13px]">
                    <span class="px-3 py-1.5 rounded-full border border-[color:var(--line)]">+10 projetos</span>
                    <span class="px-3 py-1.5 rounded-full border border-[color:var(--line)]">95+ Lighthouse</span>
                    <span class="px-3 py-1.5 rounded-full border border-[color:var(--line)]">Prazo fechado</span>
                </div>

                <div class="mt-8 flex gap-3">
                    <a v-if="waLink" :href="waLink" target="_blank" class="btn-primary">Pedir orçamento</a>
                    <NuxtLink to="#portfolio"
                        class="px-3.5 py-2 rounded-lg border border-[color:var(--line)] hover:bg-black/5 text-sm">
                        Ver portfólio
                    </NuxtLink>
                </div>
            </div>

            <aside
                class="flex flex-col items-center text-center p-6 rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] shadow-sm">
                <!-- Foto -->
                <img :src="(profile as any)?.avatar || '/me.png'" :alt="(profile as any)?.name || 'Foto'"
                    class="h-32 w-32 rounded-full object-cover border border-[color:var(--line)] mb-4" />

                <!-- Nome e cargo -->
                <div>
                    <div class="text-xl font-semibold">{{ (profile as any)?.name }}</div>
                    <div class="text-[color:var(--muted)] text-sm">{{ (profile as any)?.role }}</div>
                </div>

                <!-- Divisor -->
                <div class="w-12 h-px bg-[color:var(--line)] my-4"></div>

                <!-- Descrição -->
                <p class="text-[color:var(--muted)] text-[15px] leading-snug max-w-xs">
                    Trabalho com Nuxt/Vue, Tailwind e integrações de marketing
                    para sites que precisam converter.
                </p>
            </aside>
        </div>
    </section>

    <!-- divisor simples -->
    <div class="h-px bg-[color:var(--line)] my-12"></div>

    <!-- SOBRE (curto, para dar “voz” autoral) -->
    <section id="sobre" class="grid md:grid-cols-2 gap-8">
        <div>
            <h2 class="text-2xl font-bold tracking-tight">O que eu faço</h2>
            <p class="text-[color:var(--muted)] mt-2">
                Landing pages e sites institucionais com foco em <span
                    class="font-medium text-[color:var(--fg)]">conversão</span>.
                Eu prototipo rápido, valido a estrutura e entrego código limpo, acessível e mensurável.
            </p>
        </div>
        <ul class="grid sm:grid-cols-2 gap-3">
            <li class="rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] p-4">
                <div class="font-semibold">Landing Pages</div>
                <p class="text-[color:var(--muted)] text-sm mt-1">Copy, hierarquia e CTA com foco em resultado.</p>
            </li>
            <li class="rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] p-4">
                <div class="font-semibold">Sites institucionais</div>
                <p class="text-[color:var(--muted)] text-sm mt-1">Arquitetura clara, CMS opcional e SEO on-page.</p>
            </li>
            <li class="rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] p-4">
                <div class="font-semibold">Performance & SEO</div>
                <p class="text-[color:var(--muted)] text-sm mt-1">Boas práticas Lighthouse e schema básico.</p>
            </li>
            <li class="rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] p-4">
                <div class="font-semibold">Manutenção</div>
                <p class="text-[color:var(--muted)] text-sm mt-1">Ajustes, testes A/B e integrações (GA4, RD, HubSpot).
                </p>
            </li>
        </ul>
    </section>

    <!-- divisor -->
    <div class="h-px bg-[color:var(--line)] my-12"></div>

    <!-- PROJETOS -->
    <section id="portfolio">
        <div class="flex items-end justify-between mb-5">
            <h2 class="text-2xl font-bold tracking-tight">Projetos</h2>
            <a :href="waLink || '#contato'" target="_blank"
                class="text-sm text-[color:var(--muted)] hover:text-[color:var(--fg)]">Quer algo assim? →</a>
        </div>
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard v-for="p in featured" :key="p.slug" :project="p" />
        </div>
    </section>

    <!-- divisor -->
    <div class="h-px bg-[color:var(--line)] my-12"></div>

    <!-- CTA final -->
    <section id="contato" class="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h3 class="text-xl font-bold tracking-tight">Pronto para começar?</h3>
                <p class="text-[color:var(--muted)] text-sm mt-1">Envie sua ideia e receba um escopo fechado hoje.</p>
            </div>
            <div class="flex gap-2">
                <a v-if="waLink" :href="waLink" target="_blank" class="btn-primary">Pedir orçamento</a>
                <a href="mailto:contato@exemplo.com?subject=Orçamento%20Landing%20Page"
                    class="px-3.5 py-2 rounded-lg border border-[color:var(--line)] hover:bg-black/5 text-sm">
                    Enviar por e-mail
                </a>
            </div>
        </div>
    </section>
</template>
