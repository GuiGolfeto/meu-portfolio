<!-- pages/projetos/[slug].vue -->
<script setup lang="ts">
import { projects } from '~/data/projects'
const route = useRoute()
const slug = route.params.slug as string
const project = projects.find(p => p.slug === slug)

if (!project) {
    throw createError({ statusCode: 404, statusMessage: 'Projeto não encontrado' })
}

useHead({ title: `${project.title} — Prévia` })
</script>

<template>
    <section>
        <div class="mb-3 flex items-center justify-between gap-3">
            <div>
                <h1 class="text-2xl font-bold">{{ project!.title }}</h1>
                <p class="text-zinc-400 text-sm">{{ project!.description }}</p>
            </div>

            <div class="flex gap-2">
                <NuxtLink to="/"
                    class="px-3 py-2 rounded-lg border border-[color:var(--border)] hover:border-purple-500/50 text-sm">
                    Voltar</NuxtLink>
                <a :href="project!.demoPath" target="_blank"
                    class="px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm">Abrir em nova
                    aba</a>
            </div>
        </div>

        <div class="rounded-xl overflow-hidden border border-[color:var(--border)] bg-black">
            <iframe :src="project!.demoPath" class="w-full" style="height: calc(100vh - 220px);"
                loading="lazy"></iframe>
        </div>
    </section>
</template>
