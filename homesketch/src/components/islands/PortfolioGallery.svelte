<script>
  import { onDestroy } from 'svelte';

  let { projects = [] } = $props();

  let activeFilter = $state('all');
  let selectedProject = $state(null);

  const filters = [
    { id: 'all', label: 'Semua Karya' },
    { id: 'residensial', label: 'Residensial Bespoke' },
    { id: 'komersial', label: 'Komersial & Wellness' },
    { id: 'bali', label: 'Kawasan Bali' },
    { id: 'jakarta', label: 'Kawasan Jakarta' },
  ];

  let filteredProjects = $derived(
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter))
  );

  function openProjectModal(project) {
    selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    selectedProject = null;
    document.body.style.overflow = '';
  }

  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  });

  function onKeyDown(e) {
    if (e.key === 'Escape' && selectedProject) {
      closeProjectModal();
    }
  }
</script>

<svelte:window onkeydown={onKeyDown} />

<div class="flex flex-col gap-10">
  <!-- Filter Tabs -->
  <div class="flex flex-wrap items-center gap-2 pb-4 border-b border-[var(--color-border-hairline)]">
    {#each filters as filter}
      <button
        type="button"
        onclick={() => activeFilter = filter.id}
        class="px-4 py-2 text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer {activeFilter === filter.id ? 'bg-[var(--color-ink-primary)] text-[var(--color-ink-light)]' : 'bg-transparent text-[var(--color-ink-muted)] hover:text-[var(--color-ink-primary)] hover:bg-[var(--color-canvas-surface)]'}"
      >
        {filter.label}
      </button>
    {/each}
  </div>

  <!-- Monograph Project Grid (Editorial Asymmetric Layout) -->
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
    {#each filteredProjects as project, index}
      <!-- Varied column spans for editorial rhythm -->
      <article
        class="flex flex-col gap-4 group cursor-pointer {index % 3 === 0 ? 'md:col-span-12 lg:col-span-7' : index % 3 === 1 ? 'md:col-span-12 lg:col-span-5' : 'md:col-span-6 lg:col-span-6'}"
        onclick={() => openProjectModal(project)}
        onkeydown={(event) => event.key === 'Enter' && openProjectModal(project)}
        role="button"
        tabindex="0"
        aria-label={`Buka monograf ${project.title}`}
      >
        <!-- Project Image Container -->
        <div class="relative overflow-hidden aspect-[16/10] bg-[var(--color-canvas-surface)] border border-[var(--color-border-hairline)]">
          <img
            src={project.imageSrc}
            alt={project.title}
            class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
            loading="lazy"
          />
          <div class="absolute bottom-3 left-3 bg-[var(--color-canvas-dark)]/85 text-[var(--color-ink-light)] text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 backdrop-blur-xs border border-white/10">
            {project.location}
          </div>
        </div>

        <!-- Project Meta & Title -->
        <div class="flex flex-col gap-1.5 pt-1">
          <h3 class="font-serif text-lg sm:text-xl font-semibold text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent-terracotta)] transition-colors">
            {project.title}
          </h3>
          <div class="flex items-center justify-between text-xs text-[var(--color-ink-muted)]">
            <span>{project.type}</span>
            <span class="font-mono text-[11px]">{project.area} &middot; {project.year}</span>
          </div>
          <p class="text-xs sm:text-sm text-[var(--color-ink-muted)] line-clamp-2 leading-relaxed">
            {project.concept}
          </p>
          <div class="pt-2 flex items-center gap-1 text-xs font-semibold text-[var(--color-accent-terracotta)] group-hover:underline underline-offset-4">
            <span>Lihat Spesifikasi & Monograf</span>
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </article>
    {/each}
  </div>

  <!-- Detailed Monograph Modal / Drawer -->
  {#if selectedProject}
    <div
      class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
    >
      <div
        class="bg-[var(--color-canvas-light)] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[var(--color-border-hairline)] shadow-2xl flex flex-col relative"
      >
        <!-- Modal Header -->
        <div class="sticky top-0 z-10 bg-[var(--color-canvas-light)] border-b border-[var(--color-border-hairline)] p-4 sm:p-6 flex items-center justify-between">
          <div class="flex flex-col">
            <span class="text-xs uppercase tracking-widest text-[var(--color-accent-terracotta)] font-semibold">
              Monograf Arsitektur
            </span>
            <h2 id="portfolio-modal-title" class="font-serif text-xl sm:text-2xl font-bold text-[var(--color-ink-primary)]">
              {selectedProject.title}
            </h2>
          </div>
          <button
            type="button"
            onclick={closeProjectModal}
            class="p-2 text-[var(--color-ink-muted)] hover:text-[var(--color-ink-primary)] cursor-pointer"
            aria-label="Tutup Detail"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="p-6 sm:p-8 flex flex-col gap-8">
          <!-- Main Hero Image -->
          <div class="w-full aspect-[16/10] overflow-hidden border border-[var(--color-border-hairline)]">
            <img
              src={selectedProject.imageSrc}
              alt={selectedProject.title}
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Specs Table & Details -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div class="md:col-span-7 flex flex-col gap-4">
              <h4 class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
                Gagasan Desain & Konteks Tapak
              </h4>
              <p class="text-sm sm:text-base text-[var(--color-ink-primary)] leading-relaxed">
                {selectedProject.fullDescription || selectedProject.concept}
              </p>
              <div class="pt-4 border-t border-[var(--color-border-hairline)] flex flex-col gap-2">
                <span class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
                  Material Kunci Terintegrasi:
                </span>
                <p class="text-sm text-[var(--color-ink-muted)]">
                  {selectedProject.keyMaterials}
                </p>
              </div>
            </div>

            <div class="md:col-span-5 bg-[var(--color-canvas-surface)] p-5 border border-[var(--color-border-hairline)] flex flex-col gap-4 text-xs">
              <span class="text-xs uppercase tracking-widest text-[var(--color-ink-primary)] font-semibold pb-2 border-b border-[var(--color-border-hairline)]">
                Parameter Proyek
              </span>
              <div class="flex justify-between py-1 border-b border-[var(--color-border-hairline)]">
                <span class="text-[var(--color-ink-muted)]">Lokasi:</span>
                <span class="font-medium text-[var(--color-ink-primary)]">{selectedProject.location}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-[var(--color-border-hairline)]">
                <span class="text-[var(--color-ink-muted)]">Tipologi:</span>
                <span class="font-medium text-[var(--color-ink-primary)]">{selectedProject.type}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-[var(--color-border-hairline)]">
                <span class="text-[var(--color-ink-muted)]">Luas Terbangun:</span>
                <span class="font-medium text-[var(--color-ink-primary)]">{selectedProject.area}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-[var(--color-border-hairline)]">
                <span class="text-[var(--color-ink-muted)]">Tahun Selesai:</span>
                <span class="font-medium text-[var(--color-ink-primary)]">{selectedProject.year}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-[var(--color-border-hairline)]">
                <span class="text-[var(--color-ink-muted)]">Lingkup Layanan:</span>
                <span class="font-medium text-[var(--color-ink-primary)]">{selectedProject.scope}</span>
              </div>

              <!-- CTA in modal -->
              <div class="pt-4">
                <a
                  href="https://wa.me/6281234567890?text={encodeURIComponent(`Halo HomeSketch, saya tertarik dengan proyek ${selectedProject.title} (${selectedProject.location}). Saya ingin mendiskusikan konsep serupa untuk properti saya.`)}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-thunk w-full h-11 bg-[var(--color-ink-primary)] hover:bg-[var(--color-accent-terracotta)] text-[var(--color-ink-light)] text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <span>Diskusikan Pendekatan Serupa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
