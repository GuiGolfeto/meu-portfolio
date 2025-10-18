<!-- pages/projetos/[slug].vue -->
<script setup lang="ts">
import { computed, watch } from 'vue'
import { projects } from '~/data/projects'

const route = useRoute()

// slug e project reativos para suportar troca de rota sem recarregar
const slug = computed(() => route.params.slug as string)
const project = computed(() => projects.find(p => p.slug === slug.value))

// Observa mudanças no projeto (ou na rota) e dispara o Pixel
watch(
    project,
    (p) => {
        if (!p) {
            throw createError({ statusCode: 404, statusMessage: 'Projeto não encontrado' })
        }

        // Atualiza o título da página
        useHead({ title: `${p.title} — Prévia` })

        // Dispara evento do Facebook Pixel no client
        if (import.meta.client && (window as any).fbq) {
            (window as any).fbq('track', 'ViewContent', {
                content_name: p.title,
                content_category: 'Portfolio',
                content_ids: [p.slug],
                content_type: 'project'
            })
        }
    },
    { immediate: true }
)
</script>

<template>
    <section v-if="project" class="space-y-4">
        <nav aria-label="breadcrumb" class="text-sm text-zinc-400">
            <NuxtLink to="/" class="hover:text-white">Início</NuxtLink>
            <span class="mx-2">/</span>
            <NuxtLink to="/#portfolio" class="hover:text-white">Projetos</NuxtLink>
            <span class="mx-2">/</span>
            <span class="text-zinc-300">{{ project.title }}</span>
        </nav>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
                <h1 class="text-2xl font-bold tracking-tight">{{ project.title }}</h1>
                <p class="text-zinc-400 text-sm mt-1 max-w-2xl">{{ project.description }}</p>
            </div>
            <div class="flex gap-2">
                <NuxtLink to="/"
                    class="px-3.5 py-2 rounded-lg border border-[color:var(--border)] hover:border-white/20 text-sm">
                    Voltar
                </NuxtLink>
                <a :href="project.demoPath" target="_blank" class="btn-primary">Abrir demo</a>
            </div>
        </div>

        <div class="rounded-xl overflow-hidden border border-[color:var(--border)] bg-black">
            <iframe :src="project.demoPath" class="w-full" style="height: clamp(60vh, 72vh, 80vh);" loading="lazy"
                title="Prévia do projeto"></iframe>
        </div>
    </section>
</template>
