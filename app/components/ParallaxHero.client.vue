<!-- components/ParallaxHero.client.vue -->
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
const props = defineProps<{ strength?: number }>()
const layer1 = ref<HTMLElement|null>(null)
const layer2 = ref<HTMLElement|null>(null)
const s = props.strength ?? 20
const onMove = (e: MouseEvent) => {
  const { innerWidth:w, innerHeight:h } = window
  const x = (e.clientX / w - 0.5) * 2
  const y = (e.clientY / h - 0.5) * 2
  if (layer1.value) layer1.value.style.transform = `translate(${x*s}px, ${y*s}px)`
  if (layer2.value) layer2.value.style.transform = `translate(${x*(s/2)}px, ${y*(s/2)}px)`
}
onMounted(() => window.addEventListener('mousemove', onMove))
onBeforeUnmount(() => window.removeEventListener('mousemove', onMove))
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101015]">
    <div ref="layer2" class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"></div>
    <div ref="layer1" class="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
    <div class="relative">
      <slot />
    </div>
  </div>
</template>
