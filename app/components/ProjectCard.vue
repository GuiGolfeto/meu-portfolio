<!-- app/components/ProjectCard.vue -->
<script setup lang="ts">
import type { Project } from '~/data/projects'
defineProps<{ project: Project }>()

// 🎨 Cores determinísticas por nome de tag
const palette = [
  'bg-blue-100 text-blue-800 border-blue-200',
  'bg-green-100 text-green-800 border-green-200',
  'bg-purple-100 text-purple-800 border-purple-200',
  'bg-amber-100 text-amber-800 border-amber-200',
  'bg-rose-100 text-rose-800 border-rose-200',
  'bg-cyan-100 text-cyan-800 border-cyan-200'
]
const tagClass = (t: string) => {
  let h = 0
  for (let i = 0; i < t.length; i++) h = (h << 5) - h + t.charCodeAt(i)
  return palette[Math.abs(h) % palette.length]
}
</script>

<template>
  <article
    class="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow hover:shadow-xl transition hover:-translate-y-2 focus-within:ring-2 focus-within:ring-blue-400"
  >
    <!-- imagem 16:9 com lazy + atributos semânticos -->
    <figure class="aspect-[16/9] overflow-hidden">
      <img
        :src="project.cover"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
        width="640"
