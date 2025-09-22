<!-- components/CaseStudyDemo.client.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  title?: string
  niche?: string         // ex: "Nutricionista", "Advocacia"
  kpis?: { label: string; value: string }[]
}>(), {
  title: 'Redesign de Landing Page',
  niche: 'Negócio local',
  kpis: () => ([
    { label: 'Conversão', value: '+38%' },
    { label: 'Lighthouse', value: '95+' },
    { label: 'Tempo de carga', value: '-42%' }
  ])
})

const value = ref(50) // % do slider
</script>

<template>
  <section class="space-y-4">
    <header class="flex items-center justify-between gap-4">
      <div>
        <h3 class="text-xl font-bold tracking-tight">{{ title }}</h3>
        <p class="text-sm text-zinc-400">{{ niche }} • Exemplo conceitual (sem imagens)</p>
      </div>
      <ul class="hidden md:flex items-center gap-3">
        <li v-for="k in kpis" :key="k.label"
            class="px-3 py-2 rounded-lg border border-white/10 bg-[#111118] text-sm">
          <span class="font-semibold">{{ k.value }}</span>
          <span class="text-zinc-400"> {{ k.label }}</span>
        </li>
      </ul>
    </header>

    <!-- Wrapper do slider -->
    <div class="relative rounded-2xl overflow-hidden border border-white/10 bg-black">
      <div class="aspect-[16/9] relative">

        <!-- “Depois” (limpo) -->
        <div class="absolute inset-0 w-full h-full">
          <div class="h-full w-full bg-[#0e0e14] text-white">
            <!-- hero clean -->
            <div class="p-6 md:p-10">
              <div class="max-w-lg">
                <div class="inline-flex items-center gap-2 text-[11px] text-zinc-300/80">
                  <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
                  versão otimizada
                </div>
                <h4 class="text-3xl md:text-4xl font-extrabold tracking-tight mt-2">
                  Landing page minimalista que gera resultados
                </h4>
                <p class="text-zinc-300 mt-2">
                  Estrutura clara, hierarquia de informação e CTA direto. Foco em velocidade e SEO on-page.
                </p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <button class="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm">Quero um orçamento</button>
                  <button class="px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 text-sm">Ver portfólio</button>
                </div>
              </div>
            </div>

            <!-- features clean -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 px-6 pb-6">
              <div class="rounded-xl border border-white/10 p-4 bg-[#121219]">
                <div class="h-10 w-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 grid place-items-center text-xs">SEO</div>
                <div class="font-semibold mt-3">SEO on-page</div>
                <p class="text-sm text-zinc-400 mt-1">Meta tags, semântica, schema básico.</p>
              </div>
              <div class="rounded-xl border border-white/10 p-4 bg-[#121219]">
                <div class="h-10 w-10 rounded-lg bg-sky-500/15 border border-sky-500/30 grid place-items-center text-xs">UX</div>
                <div class="font-semibold mt-3">Hierarquia clara</div>
                <p class="text-sm text-zinc-400 mt-1">Tipografia e espaçamentos consistentes.</p>
              </div>
              <div class="rounded-xl border border-white/10 p-4 bg-[#121219]">
                <div class="h-10 w-10 rounded-lg bg-violet-500/15 border border-violet-500/30 grid place-items-center text-xs">Perf</div>
                <div class="font-semibold mt-3">Performance</div>
                <p class="text-sm text-zinc-400 mt-1">Carregamento rápido e TTFB baixo.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- “Antes” (poluído) — clip por cima -->
        <div class="absolute inset-0 w-full h-full"
             :style="{ clipPath: `inset(0 ${100 - value}% 0 0)` }">
          <div class="h-full w-full bg-[#0b0b10] text-white">
            <!-- hero bagunçado -->
            <div class="p-3 md:p-6">
              <div class="max-w-2xl">
                <div class="flex flex-wrap gap-2 text-[11px]">
                  <span class="px-2 py-1 rounded bg-red-500/20 border border-red-500/40">POP-UP</span>
                  <span class="px-2 py-1 rounded bg-yellow-500/20 border border-yellow-500/40">BANNER</span>
                  <span class="px-2 py-1 rounded bg-blue-500/20 border border-blue-500/40">SLIDER</span>
                  <span class="px-2 py-1 rounded bg-fuchsia-500/20 border border-fuchsia-500/40">CARROSSEL</span>
                </div>
                <h4 class="text-[26px] md:text-[28px] font-bold mt-2 tracking-tight">
                  Bem-vindo ao melhor site do universo com muitas promoções imperdíveis e novidades incríveis!!!
                </h4>
                <p class="text-zinc-300 mt-2">
                  Texto genérico, sem foco. Muitos elementos competindo por atenção e CTAs confusos.
                </p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <button class="px-3 py-2 rounded bg-white/10 border border-white/20 text-sm">Clique aqui</button>
                  <button class="px-3 py-2 rounded bg-white/10 border border-white/20 text-sm">Saiba mais</button>
                  <button class="px-3 py-2 rounded bg-white/10 border border-white/20 text-sm">Assine já</button>
                </div>
              </div>
            </div>

            <!-- features ruins -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 px-3 pb-4">
              <div class="h-20 rounded border border-white/15 bg-white/5"></div>
              <div class="h-20 rounded border border-white/15 bg-white/5"></div>
              <div class="h-20 rounded border border-white/15 bg-white/5"></div>
              <div class="h-20 rounded border border-white/15 bg-white/5"></div>
            </div>
          </div>
        </div>

        <!-- divisor -->
        <div class="pointer-events-none absolute inset-y-0 w-0.5 bg-purple-500" :style="{ left: value + '%' }"></div>
      </div>

      <!-- slider -->
      <div class="absolute bottom-3 left-1/2 -translate-x-1/2 w-[65%]">
        <input v-model="value" type="range" min="0" max="100"
               class="w-full appearance-none h-1 bg-white/20 rounded-lg cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-purple-500
                      [&::-webkit-slider-thumb]:border-2
                      [&::-webkit-slider-thumb]:border-white"/>
        <div class="flex justify-between text-[11px] text-zinc-400 mt-1">
          <span>Antes</span><span>Depois</span>
        </div>
      </div>
    </div>

    <!-- KPIs (mobile) -->
    <ul class="md:hidden flex items-center gap-3">
      <li v-for="k in kpis" :key="k.label"
          class="px-3 py-2 rounded-lg border border-white/10 bg-[#111118] text-sm">
        <span class="font-semibold">{{ k.value }}</span>
        <span class="text-zinc-400"> {{ k.label }}</span>
      </li>
    </ul>
  </section>
</template>
