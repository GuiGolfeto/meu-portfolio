<!-- components/BeforeAfter.vue -->
<script setup lang="ts">
const props = defineProps<{
  beforeSrc: string,
  afterSrc: string,
  type?: 'image'|'iframe' // padrão image
}>()
const value = ref(50)
</script>

<template>
  <div class="relative rounded-2xl overflow-hidden border border-white/10">
    <div class="aspect-[16/9] bg-black relative">
      <component :is="type==='iframe' ? 'iframe' : 'img'"
                 :src="beforeSrc"
                 class="absolute inset-0 w-full h-full object-cover"
                 :style="{ clipPath: `inset(0 ${100 - value}% 0 0)` }"
                 loading="lazy" />
      <component :is="type==='iframe' ? 'iframe' : 'img'"
                 :src="afterSrc"
                 class="absolute inset-0 w-full h-full object-cover"
                 loading="lazy" />
    </div>
    <input type="range" v-model="value" min="0" max="100"
           class="absolute left-0 right-0 -bottom-1 h-1.5 appearance-none bg-white/10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white/80 [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-black" />
  </div>
</template>
