<template>
  <div class="flex items-center space-x-3">
    <!-- Logo Icon -->
    <div class="relative">
      <svg 
        :width="size" 
        :height="size" 
        viewBox="0 0 120 120" 
        class="drop-shadow-lg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#60A5FA;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#3B82F6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <!-- Main Logo Shape (Infinity/S) -->
        <path 
          d="M20 60 C20 30, 40 20, 60 40 C80 60, 100 50, 100 60 C100 90, 80 100, 60 80 C40 60, 20 70, 20 60 Z" 
          fill="url(#logoGradient)" 
          filter="url(#glow)"
          class="transition-all duration-300 hover:scale-110"
        />
        
        <!-- Spark/Pixel Effect -->
        <g opacity="0.8">
          <rect x="85" y="45" width="4" height="4" fill="#8B5CF6" rx="1"/>
          <rect x="90" y="50" width="3" height="3" fill="#8B5CF6" rx="1"/>
          <rect x="95" y="40" width="2" height="2" fill="#A855F7" rx="1"/>
          <rect x="88" y="55" width="3" height="3" fill="#8B5CF6" rx="1"/>
          <rect x="92" y="35" width="2" height="2" fill="#A855F7" rx="1"/>
          <rect x="97" y="45" width="2" height="2" fill="#C084FC" rx="1"/>
        </g>
        
        <!-- Additional Spark Details -->
        <g opacity="0.6">
          <rect x="82" y="48" width="2" height="2" fill="#8B5CF6" rx="1"/>
          <rect x="94" y="52" width="2" height="2" fill="#A855F7" rx="1"/>
          <rect x="89" y="38" width="2" height="2" fill="#C084FC" rx="1"/>
        </g>
      </svg>
    </div>
    
    <!-- Logo Text -->
    <div v-if="showText" class="flex flex-col">
      <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        WebSpark Creative
      </span>
      <span v-if="showSubtitle" class="text-xs text-gray-500 -mt-1">
        Agência Digital
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  showText?: boolean
  showSubtitle?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 40,
  showText: true,
  showSubtitle: false
})
</script>
