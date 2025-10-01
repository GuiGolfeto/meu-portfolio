<script setup lang="ts">
import { services } from '~/data/site'
</script>

<template>
  <section id="servicos" class="relative bg-gradient-to-b from-[#0B0B0F] to-[#101018] py-16">
    <div class="mx-auto max-w-6xl px-6">
      <h2 class="text-3xl sm:text-4xl font-bold text-white">Nossos Serviços</h2>
      <p class="mt-2 text-white/70 max-w-2xl">Tudo que você precisa: do site ao aplicativo, com SEO e performance.</p>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <a v-for="s in services" :key="s.title" :href="s.href"
           class="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-violet-400/50 transition">
          <div class="text-2xl">{{ s.icon }}</div>
          <h3 class="mt-3 text-lg font-semibold text-white">{{ s.title }}</h3>
          <p class="mt-1 text-sm text-white/70">{{ s.desc }}</p>
          <span class="mt-3 inline-flex items-center gap-1 text-violet-300">
            Saiba mais
            <svg class="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
