<script>
  let { formConfig } = $props();

  let name = $state('');
  let brand = $state('');
  let businessType = $state('');
  let city = $state('');
  let area = $state('');
  let landStatus = $state('');
  let targetTimeline = $state('');
  let budgetRange = $state('');
  let notes = $state('');

  let isSubmitted = $state(false);
  let isSubmitting = $state(false);
  let errorMessage = $state('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !brand || !businessType || !city) {
      errorMessage = 'Mohon lengkapi nama, brand, jenis usaha, dan lokasi kota.';
      return;
    }

    errorMessage = '';
    isSubmitting = true;

    // Simulate submission delay
    setTimeout(() => {
      isSubmitting = false;
      isSubmitted = true;
    }, 600);
  }

  function handleReset() {
    name = '';
    brand = '';
    businessType = '';
    city = '';
    area = '';
    landStatus = '';
    targetTimeline = '';
    budgetRange = '';
    notes = '';
    isSubmitted = false;
  }
</script>

<div class="bg-surface-card sketch-border p-6 sm:p-8 shadow-sketch relative">
  {#if isSubmitted}
    <div class="text-center py-12 space-y-4">
      <div class="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
        ✓
      </div>
      <h3 class="font-display text-3xl font-bold text-ink-primary">
        Briefing Teknis Berhasil Dikirim
      </h3>
      <p class="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
        Terima kasih, <strong>{name}</strong>. Tim Lead Architect Atelier Karsa akan meninjau data ruang <strong>{brand}</strong> dan menghubungi Anda dalam 1 x 24 jam kerja.
      </p>
      <div class="pt-4">
        <button
          type="button"
          onclick={handleReset}
          class="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink-primary border border-border-sketch rounded-control hover:bg-surface-panel transition-colors cursor-pointer"
        >
          Kirim Formulir Proyek Lain
        </button>
      </div>
    </div>
  {:else}
    <form onsubmit={handleSubmit} class="space-y-6" id="briefing-form">
      <div class="border-b border-border-sketch pb-4">
        <h2 class="font-display text-2xl sm:text-3xl font-bold text-ink-primary">
          {formConfig.title}
        </h2>
        <p class="text-xs text-ink-muted mt-1">
          Isi detail awal tapak komersial Anda untuk telaah kelayakan teknis DED & estimasi anggaran.
        </p>
      </div>

      {#if errorMessage}
        <div class="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
          {errorMessage}
        </div>
      {/if}

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <!-- Field 01: Name -->
        <div class="space-y-1.5">
          <label for="f-name" class="block text-xs font-semibold text-ink-primary font-mono">
            {formConfig.fields.name.label} *
          </label>
          <input
            id="f-name"
            type="text"
            required
            bind:value={name}
            placeholder={formConfig.fields.name.placeholder}
            class="w-full px-3.5 py-2.5 bg-surface-ground border border-border-sketch rounded-lg text-sm text-ink-primary focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>

        <!-- Field 02: Brand -->
        <div class="space-y-1.5">
          <label for="f-brand" class="block text-xs font-semibold text-ink-primary font-mono">
            {formConfig.fields.brand.label} *
          </label>
          <input
            id="f-brand"
            type="text"
            required
            bind:value={brand}
            placeholder={formConfig.fields.brand.placeholder}
            class="w-full px-3.5 py-2.5 bg-surface-ground border border-border-sketch rounded-lg text-sm text-ink-primary focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>

        <!-- Field 03: Business Type -->
        <div class="space-y-1.5">
          <label for="f-type" class="block text-xs font-semibold text-ink-primary font-mono">
            {formConfig.fields.businessType.label} *
          </label>
          <select
            id="f-type"
            required
            bind:value={businessType}
            class="w-full px-3.5 py-2.5 bg-surface-ground border border-border-sketch rounded-lg text-sm text-ink-primary focus:outline-none focus:border-brand-accent transition-colors"
          >
            <option value="" disabled selected>Pilih jenis tipologi usaha...</option>
            {#each formConfig.fields.businessType.options as opt}
              <option value={opt}>{opt}</option>
            {/each}
          </select>
        </div>

        <!-- Field 04: City -->
        <div class="space-y-1.5">
          <label for="f-city" class="block text-xs font-semibold text-ink-primary font-mono">
            {formConfig.fields.city.label} *
          </label>
          <select
            id="f-city"
            required
            bind:value={city}
            class="w-full px-3.5 py-2.5 bg-surface-ground border border-border-sketch rounded-lg text-sm text-ink-primary focus:outline-none focus:border-brand-accent transition-colors"
          >
            <option value="" disabled selected>Pilih kota proyek...</option>
            {#each formConfig.fields.city.options as opt}
              <option value={opt}>{opt}</option>
            {/each}
          </select>
        </div>

        <!-- Field 05: Area -->
        <div class="space-y-1.5">
          <label for="f-area" class="block text-xs font-semibold text-ink-primary font-mono">
            {formConfig.fields.area.label}
          </label>
          <input
            id="f-area"
            type="text"
            bind:value={area}
            placeholder={formConfig.fields.area.placeholder}
            class="w-full px-3.5 py-2.5 bg-surface-ground border border-border-sketch rounded-lg text-sm text-ink-primary focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>

        <!-- Field 06: Land Status -->
        <div class="space-y-1.5">
          <label for="f-status" class="block text-xs font-semibold text-ink-primary font-mono">
            {formConfig.fields.landStatus.label}
          </label>
          <select
            id="f-status"
            bind:value={landStatus}
            class="w-full px-3.5 py-2.5 bg-surface-ground border border-border-sketch rounded-lg text-sm text-ink-primary focus:outline-none focus:border-brand-accent transition-colors"
          >
            <option value="" disabled selected>Pilih status penguasaan lahan...</option>
            {#each formConfig.fields.landStatus.options as opt}
              <option value={opt}>{opt}</option>
            {/each}
          </select>
        </div>

        <!-- Field 07: Target Timeline -->
        <div class="space-y-1.5">
          <label for="f-timeline" class="block text-xs font-semibold text-ink-primary font-mono">
            {formConfig.fields.targetTimeline.label}
          </label>
          <input
            id="f-timeline"
            type="text"
            bind:value={targetTimeline}
            placeholder={formConfig.fields.targetTimeline.placeholder}
            class="w-full px-3.5 py-2.5 bg-surface-ground border border-border-sketch rounded-lg text-sm text-ink-primary focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>

        <!-- Field 08: Budget Range -->
        <div class="space-y-1.5">
          <label for="f-budget" class="block text-xs font-semibold text-ink-primary font-mono">
            {formConfig.fields.budgetRange.label}
          </label>
          <select
            id="f-budget"
            bind:value={budgetRange}
            class="w-full px-3.5 py-2.5 bg-surface-ground border border-border-sketch rounded-lg text-sm text-ink-primary focus:outline-none focus:border-brand-accent transition-colors"
          >
            <option value="" disabled selected>Pilih rentang alokasi anggaran...</option>
            {#each formConfig.fields.budgetRange.options as opt}
              <option value={opt}>{opt}</option>
            {/each}
          </select>
        </div>
      </div>

      <!-- Field 09: Notes -->
      <div class="space-y-1.5">
        <label for="f-notes" class="block text-xs font-semibold text-ink-primary font-mono">
          {formConfig.fields.notes.label}
        </label>
        <textarea
          id="f-notes"
          rows="3"
          bind:value={notes}
          placeholder={formConfig.fields.notes.placeholder}
          class="w-full px-3.5 py-2.5 bg-surface-ground border border-border-sketch rounded-lg text-sm text-ink-primary focus:outline-none focus:border-brand-accent transition-colors"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          class="w-full py-4 px-6 text-sm font-semibold uppercase tracking-wider text-white bg-brand-accent hover:bg-brand-accent-hover rounded-control transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer text-center"
        >
          {isSubmitting ? 'Memproses Briefing Teknis...' : formConfig.submitButtonLabel}
        </button>
        <p class="text-center font-mono text-[11px] text-ink-muted mt-2">
          Respons 1 x 24 jam kerja oleh Dedicated Lead Architect.
        </p>
      </div>
    </form>
  {/if}
</div>
