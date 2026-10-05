<script>
  let { categories = [], cases = [] } = $props();

  let activeCategory = $state('all');
  let selectedCaseId = $state(null);

  let filteredCases = $derived(
    activeCategory === 'all'
      ? cases
      : cases.filter((c) => c.category === activeCategory)
  );

  function setCategory(id) {
    activeCategory = id;
  }

  function toggleDetail(id) {
    selectedCaseId = selectedCaseId === id ? null : id;
  }
</script>

<div class="space-y-10">
  <!-- Category Filter Bar -->
  <div class="flex flex-wrap items-center gap-2 sm:gap-3 pb-4 border-b border-border-sketch" role="tablist" aria-label="Filter Kategori Proyek">
    {#each categories as category}
      <button
        type="button"
        role="tab"
        aria-selected={activeCategory === category.id}
        onclick={() => setCategory(category.id)}
        class={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-control transition-all duration-200 cursor-pointer ${
          activeCategory === category.id
            ? 'bg-brand-accent text-white shadow-md'
            : 'bg-surface-panel text-ink-primary hover:bg-surface-ground border border-border-sketch'
        }`}
      >
        {category.label}
      </button>
    {/each}
  </div>

  <!-- Asymmetric Masonry Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each filteredCases as project (project.id)}
      <article class="group bg-surface-card sketch-border p-4 shadow-sketch hover:shadow-floating transition-all duration-300 flex flex-col justify-between">
        <!-- Photo with rotation -->
        <div class="relative overflow-hidden rounded-sm aspect-[16/10] mb-4 bg-surface-panel">
          {#if project.imgSrc}
            <img
              src={project.imgSrc}
              alt={`${project.title} - ${project.categoryLabel}`}
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          {/if}
          <div class="absolute top-2.5 left-2.5 bg-surface-ground/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full font-mono text-[10px] font-semibold text-ink-primary border border-border-sketch">
            {project.location}
          </div>
          <div class="absolute top-2.5 right-2.5 bg-brand-accent text-white px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold">
            Deviasi {project.deviation}
          </div>
        </div>

        <!-- Case Header -->
        <div class="space-y-3 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[11px] font-mono text-ink-muted">
              <span>{project.categoryLabel}</span>
              <span class="text-brand-accent font-semibold">{project.duration}</span>
            </div>

            <h2 class="font-display text-2xl font-bold text-ink-primary group-hover:text-brand-accent transition-colors mt-1">
              {project.title}
            </h2>

            <!-- Metrics Table Strip -->
            <div class="grid grid-cols-2 gap-2 p-2.5 my-3 bg-surface-panel rounded-lg text-xs font-mono">
              <div>
                <span class="text-ink-muted block text-[10px]">LUAS LAHAN</span>
                <span class="font-semibold text-ink-primary">{project.area}</span>
              </div>
              <div>
                <span class="text-ink-muted block text-[10px]">NILAI KONSTRUKSI</span>
                <span class="font-semibold text-ink-primary">{project.budget}</span>
              </div>
            </div>

            <!-- Deep Dive Accordion / Toggle -->
            <div class="space-y-2 text-xs">
              <button
                type="button"
                onclick={() => toggleDetail(project.id)}
                class="w-full text-left font-mono font-semibold text-brand-accent flex items-center justify-between py-1.5 border-b border-dashed border-border-sketch hover:text-brand-accent-hover cursor-pointer"
              >
                <span>{selectedCaseId === project.id ? 'Tutup Rincian Teknis' : 'Buka Rincian Teknis Lapangan'}</span>
                <span>{selectedCaseId === project.id ? '−' : '+'}</span>
              </button>

              {#if selectedCaseId === project.id}
                <div class="space-y-3 pt-2 text-ink-muted leading-relaxed">
                  <div>
                    <strong class="text-ink-primary block text-[11px] font-mono uppercase">Tantangan Teknis:</strong>
                    <p class="mt-0.5">{project.challenge}</p>
                  </div>
                  <div>
                    <strong class="text-ink-primary block text-[11px] font-mono uppercase">Solusi Eksekusi DED:</strong>
                    <p class="mt-0.5">{project.solution}</p>
                  </div>
                  <div class="p-2 bg-brand-accent/5 border border-brand-accent/20 rounded">
                    <strong class="text-brand-accent block text-[11px] font-mono uppercase">Hasil Bisnis Klien:</strong>
                    <p class="text-ink-primary mt-0.5 font-medium">{project.businessResult}</p>
                  </div>
                </div>
              {/if}
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="pt-4 mt-2 border-t border-border-sketch flex items-center justify-between">
            <a
              href="/kontak"
              class="text-xs font-mono font-semibold text-ink-primary hover:text-brand-accent flex items-center gap-1"
            >
              Konsultasikan Denah Serupa &rarr;
            </a>
          </div>
        </div>
      </article>
    {/each}
  </div>
</div>
