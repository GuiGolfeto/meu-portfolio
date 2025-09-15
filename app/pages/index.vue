<!-- pages/index.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '~/data/projects'
import {
    hero, services, metrics, stack, testimonials, clients, process, faqs, profile
} from '~/data/site'

const isTwoByTwo = computed(() => projects.length === 4)

const waLink = computed(() => {
    const num = (profile as any)?.whatsapp
    const first = ((profile as any)?.name || 'Olá').split(' ')[0]
    return num ? `https://wa.me/${num}?text=Oi%20${encodeURIComponent(first)}%2C%20quero%20um%20or%C3%A7amento` : null
})
</script>

<template>
    <section class="space-y-12">

        <!-- HERO com foto + WhatsApp -->
        <div class="rounded-2xl p-6 md:p-8 border border-zinc-800 bg-gradient-to-b from-purple-600/10 to-transparent">
            <div class="grid md:grid-cols-[1.2fr_.8fr] items-center gap-6">
                <!-- Texto -->
                <div>
                    <h1 class="text-3xl md:text-4xl font-extrabold leading-tight">
                        {{ hero.title }}
                    </h1>

                    <div class="flex items-center gap-2 mt-2 text-zinc-400 flex-wrap">
                        <span v-for="t in hero.subtitle.split(' • ')" :key="t"
                            class="text-xs md:text-sm px-2 py-1 rounded-full border border-zinc-800">
                            {{ t }}
                        </span>
                    </div>

                    <div class="flex flex-wrap gap-3 mt-5">
                        <a v-if="waLink" :href="waLink" target="_blank"
                            class="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white">
                            Falar no WhatsApp
                        </a>
                        <NuxtLink :to="hero.ctas.secondaryHref"
                            class="px-4 py-2 rounded-lg border border-zinc-800 hover:border-purple-500/50">
                            {{ hero.ctas.secondaryText }}
                        </NuxtLink>
                    </div>

                    <!-- Métricas em badges -->
                    <div class="flex flex-wrap gap-3 mt-6">
                        <div v-for="m in metrics" :key="m.label"
                            class="px-3 py-2 rounded-lg border border-zinc-800 bg-[#111118]">
                            <span class="font-bold">{{ m.kpi }}</span>
                            <span class="text-zinc-400 text-sm"> {{ m.label }}</span>
                        </div>
                    </div>
                </div>

                <!-- Foto -->
                <div class="justify-self-end w-full max-w-[260px]">
                    <div class="relative">
                        <img :src="(profile as any)?.avatar || '/placeholder-avatar.png'"
                            :alt="(profile as any)?.name || 'Foto'"
                            class="w-full aspect-square object-cover rounded-2xl border border-zinc-800" />
                        <div class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-purple-500/30"></div>
                    </div>
                    <div class="mt-3">
                        <div class="font-semibold leading-tight">{{ (profile as any)?.name || 'Seu nome' }}</div>
                        <div class="text-zinc-400 text-sm">{{ (profile as any)?.role || 'Sua função' }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- SERVIÇOS: grid estável -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div v-for="(s, i) in services" :key="s.title"
                class="rounded-xl p-4 border border-zinc-800 bg-[#111118] hover:border-purple-500/40 transition">
                <div class="flex items-center gap-3">
                    <div
                        class="h-9 w-9 rounded-lg bg-purple-600/20 border border-purple-600/30 grid place-items-center">
                        <span class="text-purple-300 text-sm">{{ i + 1 }}</span>
                    </div>
                    <div>
                        <div class="font-semibold">{{ s.title }}</div>
                        <div class="text-zinc-400 text-xs mt-0.5">{{ s.desc }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CLIENTES / STACK: sem animação, com wrap e alinhamento -->
        <div class="rounded-xl border border-zinc-800 overflow-hidden bg-[#101015]">
            <div class="marquee-row px-6 py-3">
                <span v-for="c in clients.concat(stack)" :key="c"
                    class="px-3 py-1 rounded-full border border-zinc-800/80 text-zinc-300 text-sm">
                    {{ c }}
                </span>
            </div>
        </div>

        <!-- PROJETOS: 2×2 quando tiver 4 itens -->
        <div id="portfolio">
            <div class="flex items-end justify-between mb-4">
                <h2 class="text-2xl font-bold">Projetos</h2>
                <a :href="waLink || '#contato'" target="_blank" class="text-sm text-zinc-400 hover:text-white">Quer algo
                    assim? →</a>
            </div>

            <div :class="[
                'grid gap-5',
                isTwoByTwo ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            ]">
                <ProjectCard v-for="p in projects" :key="p.slug" :project="p" />
            </div>
        </div>

        <!-- DEPOIMENTOS: lista/scroll no mobile, grade no desktop -->
        <div class="rounded-xl border border-zinc-800 overflow-hidden">
            <div
                class="flex gap-4 p-4 no-scrollbar overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-4 md:overflow-visible">
                <div v-for="t in testimonials" :key="t.name"
                    class="min-w-[260px] md:min-w-0 md:w-auto snap-start rounded-lg p-4 border border-zinc-800 bg-[#111118]">
                    <p class="text-zinc-300 text-sm">“{{ t.text }}”</p>
                    <div class="text-zinc-500 text-xs mt-2">{{ t.name }} • {{ t.role }}</div>
                </div>
            </div>
        </div>

        <!-- PROCESSO — versão nova -->
        <section aria-labelledby="processo">
            <h2 id="processo" class="text-2xl font-bold mb-4">Como trabalho</h2>

            <!-- Desktop: stepper horizontal -->
            <div class="hidden md:block rounded-2xl border border-zinc-800 p-6 bg-[#0f0f16]">
                <!-- Linha de conexão -->
                <div class="relative h-10 mb-6">
                    <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-zinc-800"></div>

                    <div class="grid grid-cols-5">
                        <div v-for="(p, i) in process" :key="p.step" class="relative">
                            <!-- Ponto numerado -->
                            <div class="mx-auto h-10 w-10 rounded-full grid place-items-center
                      bg-gradient-to-b from-purple-600/25 to-purple-600/10
                      border border-purple-500/30 text-purple-200 font-semibold">
                                {{ i + 1 }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Títulos/descrições alinhados -->
                <div class="grid grid-cols-5 gap-6">
                    <div v-for="(p, i) in process" :key="p.step" class="text-center">
                        <div class="font-semibold">{{ p.step }}</div>
                        <div class="text-zinc-400 text-sm mt-1">{{ p.text }}</div>
                    </div>
                </div>
            </div>

            <!-- Mobile: lista vertical compacta -->
            <div class="md:hidden rounded-2xl border border-zinc-800 p-4 bg-[#0f0f16]">
                <ul class="space-y-4">
                    <li v-for="(p, i) in process" :key="p.step" class="flex items-start gap-3">
                        <div class="h-9 w-9 flex-shrink-0 rounded-full grid place-items-center
                    bg-gradient-to-b from-purple-600/25 to-purple-600/10
                    border border-purple-500/30 text-purple-200 font-semibold">
                            {{ i + 1 }}
                        </div>
                        <div class="flex-1">
                            <div class="font-semibold leading-5">{{ p.step }}</div>
                            <div class="text-zinc-400 text-sm leading-5">{{ p.text }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <!-- FAQ: uma coluna no mobile, 3 no desktop -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <details v-for="f in faqs" :key="f.q" class="rounded-lg border border-zinc-800 bg-[#111118] p-3">
                <summary class="cursor-pointer font-semibold text-sm">{{ f.q }}</summary>
                <p class="text-zinc-400 text-sm mt-2">{{ f.a }}</p>
            </details>
        </div>

        <!-- CTA -->
        <div id="contato"
            class="rounded-2xl p-6 border border-zinc-800 bg-gradient-to-r from-purple-600/15 via-purple-600/5 to-transparent">
            <div class="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h3 class="text-xl font-bold">Bora lançar sua próxima página?</h3>
                    <p class="text-zinc-400 text-sm">Resposta rápida e prazos claros.</p>
                </div>
                <div class="flex gap-2">
                    <a v-if="waLink" :href="waLink" target="_blank"
                        class="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white">WhatsApp</a>
                    <a href="mailto:contato@exemplo.com"
                        class="px-4 py-2 rounded-lg border border-zinc-800 hover:border-purple-500/50">E-mail</a>
                </div>
            </div>
        </div>

    </section>
</template>
