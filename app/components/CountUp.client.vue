<!-- components/CountUp.client.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const props = withDefaults(defineProps<{ end: number, duration?: number, prefix?: string, suffix?: string }>(), {
  duration: 900, prefix: '', suffix: ''
})
const el = ref<HTMLElement|null>(null)
const val = ref(0)
let obs: IntersectionObserver | null = null
const animate = () => {
  const start = performance.now()
  const from = 0, to = props.end, dur = props.duration
  const step = (t:number) => {
    const p = Math.min((t - start) / dur, 1)
    val.value = Math.floor(from + (to - from) * (1 - Math.pow(1 - p, 3))) // easeOutCubic
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
onMounted(() => {
  obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animate(); obs?.disconnect() } })
  }, { threshold: .4 })
  if (el.value) obs.observe(el.value)
})
onBeforeUnmount(() => { obs?.disconnect() })
</script>

<template>
  <span ref="el">{{ prefix }}{{ val }}{{ suffix }}</span>
</template>
