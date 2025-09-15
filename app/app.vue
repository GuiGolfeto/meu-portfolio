<!-- app.vue -->
<template>
  <div class="min-h-screen bg-[color:var(--bg)] text-white" style="--bg:#0b0b10; --card:#111118; --border:#1b1b25">
    <header class="sticky top-0 z-10 backdrop-blur bg-black/40 border-b border-[color:var(--border)]">
      <nav class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <NuxtLink to="/" class="font-bold">Guilherme • Portfólio</NuxtLink>
        <a href="mailto:golfeto.dev@gmail.com" class="text-sm opacity-80 hover:opacity-100">Contato</a>
      </nav>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-10">
      <NuxtPage />
    </main>

    <footer class="border-t border-[color:var(--border)] text-sm text-zinc-400">
      <div class="max-w-6xl mx-auto px-4 py-6">
        © {{ new Date().getFullYear() }} Guilherme. Feito com Nuxt.
      </div>
    </footer>
  </div>
</template>

<style>
/* ----- Utilidades ----- */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* “Marquee” SEM animação: linha responsiva com wrap e alinhamento central */
.marquee-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  width: 100%;
  white-space: normal;
  /* garante quebra em múltiplas linhas */
}

/* Borda do avatar com leve saturação no hover */
img[alt*="Guilherme"]:hover {
  filter: saturate(1.05);
}
</style>
