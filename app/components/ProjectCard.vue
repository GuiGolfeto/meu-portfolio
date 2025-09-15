<!-- components/ProjectCard.vue -->
<script setup lang="ts">
import type { Project } from '~/data/projects'
const props = defineProps<{ project: Project }>()
</script>

<template>
    <div
        class="group rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden hover:border-purple-500/50 transition">
        <div class="aspect-[16/9] bg-zinc-900 relative">
            <img :src="project.cover" :alt="project.title" class="w-full h-full object-cover"
                @error="(e: any) => { e.target.style.display = 'none' }" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div class="p-4">
            <h3 class="font-semibold text-lg">{{ project.title }}</h3>
            <p class="text-zinc-400 text-sm mt-1">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mt-3">
                <span v-for="t in project.tags" :key="t"
                    class="text-xs px-2 py-1 rounded-full border border-[color:var(--border)] text-zinc-300">
                    {{ t }}
                </span>
            </div>

            <div class="flex gap-2 mt-4">
                <a :href="project.demoPath" target="_blank"
                    class="px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm">Ver demo</a>
                <NuxtLink :to="`/projetos/${project.slug}`"
                    class="px-3 py-2 rounded-lg border border-[color:var(--border)] hover:border-purple-500/50 text-sm">
                    Prévia
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
