<!-- components/CommandPalette.client.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { profile } from '~/data/site'
const open = ref(false)
const wa = (() => {
  const first = (profile as any)?.name?.split(' ')[0] || 'Olá'
  const num = (profile as any)?.whatsapp
  return num ? `https://wa.me/${num}?text=Oi%20${encodeURIComponent(first)}%2C%20quero%20um%20or%C3%A7amento` : '#'
})()
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault(); open.value = !open.value
    }
  })
})
const items = [
  { label: 'Ver Portfólio', href: '/#portfolio' },
  { label: 'Processo de trabalho', href: '/#processo' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Falar no WhatsApp', href: wa, ext: true }
]
</script>

<template>
  <teleport to="body">
    <div v-if="open" class="fixed inset-0 z-[70] bg-black/60" @click="open=false">
      <div class="max-w-lg mx-auto mt-24 rounded-xl overflow-hidden border border-white/10 bg-[#0f0f14]" @click.stop>
        <div class="px-4 py-3 border-b border-white/10 text-sm text-zinc-400">Command Palette — pressione Esc para fechar</div>
        <ul class="p-2">
          <li v-for="it in items" :key="it.label">
            <a :href="it.href" :target="it.ext ? '_blank' : undefined"
               class="block px-3 py-2 rounded-lg text-zinc-200 hover:bg-white/5 text-sm"
               @click="open=false">{{ it.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </teleport>
</template>
