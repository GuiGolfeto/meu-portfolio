<!-- components/ScrollProgress.client.vue -->
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
const progress = ref(0)
const update = () => {
  const h = document.documentElement
  const scrolled = (h.scrollTop) / ((h.scrollHeight - h.clientHeight) || 1)
  progress.value = Math.max(0, Math.min(1, scrolled))
}
onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
    <div class="h-full bg-purple-500 transition-[width] duration-150"
         :style="{ width: (progress*100).toFixed(1) + '%' }"></div>
  </div>
</template>
