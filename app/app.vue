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
  titleTemplate: (t) => (t ? `${t} · WebSpark Creative` : `WebSpark Creative · Agência Digital`),
  meta: [
    { name: 'description', content: 'WebSpark Creative - Agência digital especializada em landing pages, sites e e-commerce que convertem. Performance, SEO e design profissional.' },
    { name: 'theme-color', content: '#3B82F6' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
  ]
})
</script>

<template>
  <div class="min-h-screen antialiased">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
html, body { 
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial; 
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
