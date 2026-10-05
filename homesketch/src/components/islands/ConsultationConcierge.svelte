<script>
  let location = $state('Jakarta Selatan & Bodetabek');
  let typology = $state('Hunian Tapak Bespoke Baru (350 - 1.500 m²)');
  let landStatus = $state('Sudah memiliki lahan siap bangun');
  let priorities = $state(['Privasi & Pola Hidup Keluarga', 'Material Lokal Berkarakter']);
  let clientName = $state('');
  let clientNotes = $state('');

  const locationOptions = [
    'Jakarta Selatan & Bodetabek',
    'Bali (Canggu, Ubud, Uluwatu)',
    'Luar Kota di Indonesia',
    'Mancanegara (Singapura, HK, Australia)',
  ];

  const typologyOptions = [
    'Hunian Tapak Bespoke Baru (350 - 1.500 m²)',
    'Vila Privat & Tropical Sanctuary',
    'Renovasi Total Penthouse / Rumah Mewah',
    'Komersial (Restoran, Butik, Wellness)',
  ];

  const landStatusOptions = [
    'Sudah memiliki lahan siap bangun',
    'Sedang proses akuisisi lahan',
    'Properti eksisting siap renovasi total',
  ];

  const priorityOptions = [
    'Privasi & Pola Hidup Keluarga',
    'Material Lokal Berkarakter (Jati, Andesit, Terracotta)',
    'Integrasi Lanskap, Udara Bersih & Cahaya Alami',
    'Studi Konsep Desain Jarak Jauh (Remote)',
    'Akuntabilitas Penuh hingga Pengawasan Lapangan',
  ];

  function togglePriority(item) {
    if (priorities.includes(item)) {
      priorities = priorities.filter((p) => p !== item);
    } else {
      priorities = [...priorities, item];
    }
  }

  let formattedWaUrl = $derived.by(() => {
    let msg = `Halo HomeSketch Studio, saya ingin menjadwalkan sesi konsultasi privat.\n\n`;
    if (clientName.trim()) {
      msg += `Nama: ${clientName.trim()}\n`;
    }
    msg += `• Lokasi Proyek: ${location}\n`;
    msg += `• Tipologi Proyek: ${typology}\n`;
    msg += `• Status Lahan/Properti: ${landStatus}\n`;
    if (priorities.length > 0) {
      msg += `• Fokus Utama: ${priorities.join(', ')}\n`;
    }
    if (clientNotes.trim()) {
      msg += `• Catatan Tambahan: ${clientNotes.trim()}\n`;
    }
    msg += `\nMohon informasi waktu luang tim prinsipal arsitek untuk diskusi awal via WhatsApp / panggilan privat. Terima kasih.`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`;
  });
</script>

<div class="w-full bg-[var(--color-canvas-surface)] border border-[var(--color-border-hairline)] p-6 sm:p-10 lg:p-12 shadow-sm flex flex-col gap-10">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
    <!-- Left Form Parameters (7 cols) -->
    <div class="lg:col-span-7 flex flex-col gap-8">
      <!-- 1. Lokasi -->
      <div class="flex flex-col gap-3">
        <label class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
          1. Wilayah Lokasi Proyek
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {#each locationOptions as opt}
            <button
              type="button"
              onclick={() => location = opt}
              class="p-3 text-left text-xs font-medium border transition-all cursor-pointer {location === opt ? 'border-[var(--color-accent-terracotta)] bg-white font-semibold text-[var(--color-accent-terracotta)] shadow-xs' : 'border-[var(--color-border-hairline)] bg-[var(--color-canvas-light)] text-[var(--color-ink-primary)] hover:border-[var(--color-ink-muted)]'}"
            >
              {opt}
            </button>
          {/each}
        </div>
      </div>

      <!-- 2. Tipologi -->
      <div class="flex flex-col gap-3">
        <label class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
          2. Tipologi & Skala Proyek
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {#each typologyOptions as opt}
            <button
              type="button"
              onclick={() => typology = opt}
              class="p-3 text-left text-xs font-medium border transition-all cursor-pointer {typology === opt ? 'border-[var(--color-accent-terracotta)] bg-white font-semibold text-[var(--color-accent-terracotta)] shadow-xs' : 'border-[var(--color-border-hairline)] bg-[var(--color-canvas-light)] text-[var(--color-ink-primary)] hover:border-[var(--color-ink-muted)]'}"
            >
              {opt}
            </button>
          {/each}
        </div>
      </div>

      <!-- 3. Status Lahan -->
      <div class="flex flex-col gap-3">
        <label class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
          3. Status Kepemilikan Lahan / Bangunan
        </label>
        <div class="flex flex-col gap-2">
          {#each landStatusOptions as opt}
            <button
              type="button"
              onclick={() => landStatus = opt}
              class="p-3 text-left text-xs font-medium border transition-all cursor-pointer {landStatus === opt ? 'border-[var(--color-accent-terracotta)] bg-white font-semibold text-[var(--color-accent-terracotta)] shadow-xs' : 'border-[var(--color-border-hairline)] bg-[var(--color-canvas-light)] text-[var(--color-ink-primary)] hover:border-[var(--color-ink-muted)]'}"
            >
              {opt}
            </button>
          {/each}
        </div>
      </div>

      <!-- 4. Prioritas Utama -->
      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <label class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
            4. Prioritas & Esensi Hunian
          </label>
          <span class="text-[11px] text-[var(--color-ink-muted)]">Pilih yang relevan</span>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each priorityOptions as opt}
            <button
              type="button"
              onclick={() => togglePriority(opt)}
              class="px-3.5 py-2 text-xs border transition-all cursor-pointer {priorities.includes(opt) ? 'border-[var(--color-accent-terracotta)] bg-[var(--color-accent-terracotta)] text-white font-medium shadow-xs' : 'border-[var(--color-border-hairline)] bg-[var(--color-canvas-light)] text-[var(--color-ink-primary)] hover:border-[var(--color-ink-muted)]'}"
            >
              {opt}
            </button>
          {/each}
        </div>
      </div>

      <!-- 5. Nama & Catatan Singkat -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="flex flex-col gap-1.5">
          <label for="client-name" class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
            Nama Anda (Opsional)
          </label>
          <input
            id="client-name"
            type="text"
            placeholder="Contoh: Bapak Hendra / Ibu Maya"
            bind:value={clientName}
            class="h-11 px-3 text-sm bg-[var(--color-canvas-light)] border border-[var(--color-border-hairline)] focus:border-[var(--color-accent-terracotta)] focus:outline-none"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <label for="client-notes" class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
            Catatan Tambahan (Opsional)
          </label>
          <input
            id="client-notes"
            type="text"
            placeholder="Target mulai konstruksi, preferensi gaya, dll"
            bind:value={clientNotes}
            class="h-11 px-3 text-sm bg-[var(--color-canvas-light)] border border-[var(--color-border-hairline)] focus:border-[var(--color-accent-terracotta)] focus:outline-none"
          />
        </div>
      </div>
    </div>

    <!-- Right Live Preview & Send Card (5 cols) -->
    <div class="lg:col-span-5 bg-[var(--color-canvas-dark)] text-[var(--color-ink-light)] p-6 sm:p-8 flex flex-col justify-between border border-[var(--color-border-dark-hairline)] shadow-lg">
      <div class="flex flex-col gap-6">
        <div class="border-b border-[var(--color-border-dark-hairline)] pb-4">
          <div class="font-serif text-lg font-bold text-[var(--color-ink-light)]">
            Jalur Cepat WhatsApp Privat
          </div>
          <div class="text-[11px] uppercase tracking-widest text-[var(--color-accent-sage)] font-semibold mt-1">
            Ringkasan Permintaan Konsultasi
          </div>
        </div>

        <div class="flex flex-col gap-3 text-xs">
          <div class="flex flex-col">
            <span class="text-[var(--color-ink-light-muted)]">Lokasi Proyek:</span>
            <span class="font-medium text-[var(--color-ink-light)]">{location}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-[var(--color-ink-light-muted)]">Tipologi:</span>
            <span class="font-medium text-[var(--color-ink-light)]">{typology}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-[var(--color-ink-light-muted)]">Status Lahan:</span>
            <span class="font-medium text-[var(--color-ink-light)]">{landStatus}</span>
          </div>
          {#if priorities.length > 0}
            <div class="flex flex-col">
              <span class="text-[var(--color-ink-light-muted)]">Fokus Utama:</span>
              <ul class="flex flex-col gap-1 pt-1 text-[11px] text-[var(--color-accent-sage)]">
                {#each priorities as prio}
                  <li class="flex items-center gap-1.5">
                    <span class="w-1 h-1 rounded-full bg-[var(--color-accent-terracotta-light)]"></span>
                    <span>{prio}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      </div>

      <!-- Action Button -->
      <div class="pt-8 flex flex-col gap-3">
        <a
          href={formattedWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-thunk w-full h-12 bg-[var(--color-accent-terracotta)] hover:bg-[var(--color-accent-terracotta-hover)] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
        >
          <span>Kirim Ringkasan via WhatsApp</span>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <p class="text-[10px] text-[var(--color-ink-light-muted)]/70 leading-relaxed text-center">
          Pesan akan otomatis terisi di aplikasi WhatsApp Anda. Kerahasiaan data terlindungi secara privat.
        </p>
      </div>
    </div>
  </div>
</div>
