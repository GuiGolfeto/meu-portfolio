<!-- app/components/ProjectCard.vue -->
<script setup lang="ts">
import type { Project } from '~/data/projects'
defineProps<{ project: Project }>()
</script>

<template>
    <article
        class="group rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] overflow-hidden shadow-sm hover:shadow-md transition">
        <div class="aspect-[16/9] bg-black/5">
            <img :src="project.cover" :alt="project.title" class="w-full h-full object-cover" loading="lazy" />
        </div>

        <div class="p-5">
            <h3 class="font-semibold text-lg leading-tight">{{ project.title }}</h3>
            <p class="text-[color:var(--muted)] text-sm mt-1 line-clamp-2">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mt-3">
                <span v-for="t in project.tags" :key="t"
                    class="text-[11px] px-2 py-0.5 rounded-full border border-[color:var(--line)] text-[color:var(--muted)]">
                    {{ t }}
                </span>
            </div>

            <div class="flex gap-2 mt-4">
                <a :href="project.demoPath" target="_blank" class="btn-primary">Ver demo</a>
                <NuxtLink :to="`/projetos/${project.slug}`"
                    class="px-3.5 py-2 rounded-lg border border-[color:var(--line)] hover:bg-black/5 text-sm">
                    Prévia
                </NuxtLink>
            </div>
        </div>
    </article>
</template>
