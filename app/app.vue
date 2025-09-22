<!-- app/app.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { profile } from '~/data/site'

const waLink = computed(() => {
  const num = (profile as any)?.whatsapp
  const first = ((profile as any)?.name || 'Olá').split(' ')[0]
  return num ? `https://wa.me/${num}?text=Oi%20${encodeURIComponent(first)}%2C%20quero%20um%20or%C3%A7amento` : null
})

useHead({
  titleTemplate: (t) => (t ? `${t} · ${profile.name}` : `${profile.name} · Portfólio`),
  meta: [
    { name: 'description', content: 'Landing pages e sites minimalistas, com foco em conversão e performance.' },
    { name: 'theme-color', content: '#FAFAFA' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
  ]
})
</script>

<template>
  <div class="min-h-screen antialiased text-[color:var(--fg)] bg-[color:var(--bg)]">
    <!-- Header -->
    <header class="sticky top-0 z-30 bg-[color:var(--bg)]/80 backdrop-blur border-b border-[color:var(--line)]">
      <div class="container">
        <nav class="h-16 flex items-center justify-between">
          <NuxtLink to="/" class="font-semibold hover:opacity-80">{{ profile.name }}</NuxtLink>
          <div class="flex items-center gap-3">
            <NuxtLink to="/#portfolio" class="nav-link">Portfólio</NuxtLink>
            <NuxtLink to="/#sobre" class="nav-link">Sobre</NuxtLink>
            <NuxtLink to="/#contato" class="nav-link">Contato</NuxtLink>
            <a v-if="waLink" :href="waLink" target="_blank" class="btn-primary">Falar no WhatsApp</a>
          </div>
        </nav>
      </div>
    </header>

    <main class="container py-12 md:py-16">
      <NuxtPage />
    </main>

    <footer class="border-t border-[color:var(--line)] text-sm text-[color:var(--muted)]">
      <div class="container py-10 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {{ new Date().getFullYear() }} {{ profile.name }} — Disponível para projetos.</p>
        <div class="flex items-center gap-4">
          <a href="mailto:contato@exemplo.com" class="hover:text-[color:var(--fg)]">E-mail</a>
          <NuxtLink to="/#portfolio" class="hover:text-[color:var(--fg)]">Portfólio</NuxtLink>
          <a v-if="waLink" :href="waLink" target="_blank" class="hover:text-[color:var(--fg)]">WhatsApp</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
:root{
  /* LIGHT THEME */
  --bg:#FAFAFA;
  --card:#FFFFFF;
  --line:#E5E7EB;
  --fg:#0B0B10;
  --muted:#6B7280;
  --brand:#7C3AED; /* roxo só nos CTAs/links principais */
}
html,body{ font-family:Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial; }
.container{ @apply max-w-6xl mx-auto px-4; }

.nav-link{ @apply px-2 py-1 rounded-md text-[color:var(--muted)] hover:text-[color:var(--fg)] hover:bg-black/5 text-sm; }
.btn-primary{ @apply inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-[color:var(--brand)] hover:bg-purple-500 text-white text-sm font-medium; }
:focus-visible{ outline:2px solid var(--brand); outline-offset:2px; }
</style>
