<script>
  import { onDestroy } from 'svelte';

  let {
    beforeSrc,
    beforeAlt = 'Dokumentasi Pra-Konstruksi & Cetak Biru DED',
    beforeLabel = 'Cetak Biru & Studi Struktur',
    afterSrc,
    afterAlt = 'Hasil Akhir Hunian Bespoke Terwujud',
    afterLabel = 'Hunian Bespoke Selesai',
  } = $props();

  let sliderPos = $state(50);
  let isDragging = $state(false);
  let containerRef = $state(null);

  function handleMove(clientX) {
    if (!containerRef) return;
    const rect = containerRef.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    sliderPos = pos;
  }

  function onPointerDown(e) {
    isDragging = true;
    handleMove(e.clientX);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    handleMove(e.clientX);
  }

  function onPointerUp() {
    isDragging = false;
    removePointerListeners();
  }

  function removePointerListeners() {
    if (typeof window === 'undefined') return;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      sliderPos = Math.max(0, sliderPos - 5);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      sliderPos = Math.min(100, sliderPos + 5);
    }
  }

  onDestroy(() => {
    removePointerListeners();
  });
</script>

<div
  bind:this={containerRef}
  class="relative w-full aspect-[16/10] overflow-hidden select-none cursor-ew-resize border border-[var(--color-border-hairline)] bg-[var(--color-canvas-surface)] shadow-md group"
  onpointerdown={onPointerDown}
  role="slider"
  tabindex="0"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={Math.round(sliderPos)}
  aria-label="Perbandingan Visual Sebelum dan Sesudah Transformasi Arsitektur"
  onkeydown={onKeyDown}
>
  <!-- After Image (Base Full Layer) -->
  <img
    src={afterSrc}
    alt={afterAlt}
    class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
    loading="lazy"
  />

  <!-- Before Image (Clipped Overlay Layer) -->
  <div
    class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
    style="clip-path: inset(0 {100 - sliderPos}% 0 0);"
  >
    <img
      src={beforeSrc}
      alt={beforeAlt}
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      loading="lazy"
    />
  </div>

  <!-- Hairline Divider Handle -->
  <div
    class="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none"
    style="left: {sliderPos}%;"
  >
    <!-- Center Button Pill -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--color-ink-primary)] text-[var(--color-ink-light)] border-2 border-white shadow-lg flex items-center justify-center transition-transform {isDragging ? 'scale-110' : 'group-hover:scale-105'}"
    >
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
      </svg>
    </div>
  </div>

  <!-- Static Corner Descriptive Badges -->
  <div class="absolute top-4 left-4 pointer-events-none bg-[var(--color-canvas-dark)]/85 text-[var(--color-ink-light)] text-[11px] font-medium tracking-wide uppercase px-3 py-1.5 backdrop-blur-xs border border-white/10">
    {beforeLabel}
  </div>
  <div class="absolute top-4 right-4 pointer-events-none bg-[var(--color-canvas-dark)]/85 text-[var(--color-ink-light)] text-[11px] font-medium tracking-wide uppercase px-3 py-1.5 backdrop-blur-xs border border-white/10">
    {afterLabel}
  </div>
</div>
