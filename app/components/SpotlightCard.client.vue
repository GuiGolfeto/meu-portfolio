<!-- components/SpotlightCard.client.vue -->
<script setup lang="ts">
import { ref } from 'vue'
const x = ref(-999), y = ref(-999)
const move = (e: MouseEvent) => { const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
  x.value = e.clientX - r.left; y.value = e.clientY - r.top }
const leave = () => { x.value = -999; y.value = -999 }
</script>

<template>
  <div class="relative rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden"
       @mousemove="move" @mouseleave="leave">
    <div class="pointer-events-none absolute inset-0"
         :style="{ background: `radial-gradient(200px 200px at ${x}px ${y}px, rgba(168,85,247,.2), transparent 60%)` }"></div>
    <slot />
  </div>
</template>
