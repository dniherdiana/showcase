<script>
  export let beforeImage = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop";
  export let afterImage = "https://images.unsplash.com/photo-1592417817098-8f3d6eb1b7a5?q=80&w=800&auto=format&fit=crop";
  export let beforeTitle = "Degraded Deforested Slope (2018)";
  export let afterTitle = "Restored Community Agroforest (2025)";
  export let location = "Desa Sambangan, Central Highlands";

  let sliderPosition = 50;
  let isDragging = false;

  function handleMove(e) {
    if (!isDragging && e.type !== 'click') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    sliderPosition = (x / rect.width) * 100;
  }
</script>

<div class="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl text-white">
  <div class="p-4 sm:p-6 bg-stone-950 flex flex-wrap items-center justify-between gap-4 border-b border-stone-800">
    <div>
      <span class="text-xs uppercase font-mono tracking-wider text-amber-400 font-semibold">Documentary Case Study</span>
      <h3 class="text-xl font-bold text-white mt-1">{location}</h3>
    </div>
    <div class="flex items-center gap-2 text-xs">
      <span class="bg-red-950/80 text-red-300 border border-red-800/60 px-3 py-1 rounded-full font-medium">Before: {beforeTitle}</span>
      <span class="text-stone-500 font-bold">→</span>
      <span class="bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 px-3 py-1 rounded-full font-medium">After: {afterTitle}</span>
    </div>
  </div>

  <!-- Interactive Image Comparison -->
  <div 
    class="relative w-full h-80 sm:h-[420px] select-none cursor-ew-resize overflow-hidden"
    on:mousedown={() => isDragging = true}
    on:mouseup={() => isDragging = false}
    on:mouseleave={() => isDragging = false}
    on:mousemove={handleMove}
    on:touchstart={() => isDragging = true}
    on:touchend={() => isDragging = false}
    on:touchmove={handleMove}
    on:click={handleMove}
    role="slider"
    aria-valuenow={sliderPosition}
    aria-valuemin="0"
    aria-valuemax="100"
    tabindex="0"
  >
    <!-- After Image (Background) -->
    <img 
      src={afterImage} 
      alt={afterTitle} 
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute bottom-4 right-4 bg-emerald-950/90 text-emerald-200 border border-emerald-700/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
      AFTER: {afterTitle}
    </div>

    <!-- Before Image (Clipped Overlay) -->
    <div 
      class="absolute inset-0 overflow-hidden" 
      style="width: {sliderPosition}%; border-right: 3px solid #e09f3e;"
    >
      <img 
        src={beforeImage} 
        alt={beforeTitle} 
        class="absolute inset-0 w-full h-full object-cover max-w-none"
        style="width: 100%; height: 100%; object-fit: cover;"
      />
      <div class="absolute bottom-4 left-4 bg-stone-950/90 text-stone-200 border border-stone-700/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
        BEFORE: {beforeTitle}
      </div>
    </div>

    <!-- Slider Divider Handle -->
    <div 
      class="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-xl flex items-center justify-center -ml-0.5"
      style="left: {sliderPosition}%;"
    >
      <div class="w-8 h-8 sm:w-10 sm:h-10 bg-amber-400 text-stone-950 rounded-full flex items-center justify-center font-bold text-xs shadow-2xl border-2 border-stone-900">
        ↔
      </div>
    </div>
  </div>

  <div class="p-4 bg-stone-950 text-xs text-stone-400 text-center flex items-center justify-center gap-2">
    <span>💡 Slide or tap across the image to explore the ecological transformation over 7 years</span>
  </div>
</div>
