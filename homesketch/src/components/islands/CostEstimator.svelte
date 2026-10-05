<script>
  let typology = $state('residensial-bespoke');
  let area = $state(500);
  let scope = $state('full-integrated');
  let location = $state('jakarta');

  // Rates in IDR (Million) per m² for construction benchmark
  const typologyConfig = {
    'residensial-bespoke': {
      label: 'Hunian Tapak & Vila Bespoke',
      desc: 'Pembangunan baru hunian privat atau vila eksklusif (350 - 1.500 m²)',
      minCostPerSqm: 12,
      maxCostPerSqm: 22,
    },
    'renovasi-total': {
      label: 'Renovasi Total Penthouse / Hunian',
      desc: 'Restrukturisasi tata ruang, fasad, interior, dan sistem MEP menyeluruh',
      minCostPerSqm: 9,
      maxCostPerSqm: 16,
    },
    'komersial-wellness': {
      label: 'Komersial, Butik & Wellness Lounge',
      desc: 'Restoran fine dining, coffee tasting room, butik, dan klinik estetika',
      minCostPerSqm: 10,
      maxCostPerSqm: 18,
    },
  };

  // Fee percentage based on scope
  const scopeConfig = {
    'full-integrated': {
      label: 'Layanan Terpadu Satu Pintu',
      desc: 'Arsitektur + Interior + DED Lengkap + Pengawasan Berkala Eksekusi Lapangan',
      feePercentage: 0.08,
      terminDesc: '4 Termin Transparan (20% Konsep, 30% Pengembangan, 30% DED/RAB, 20% Supervisi)',
    },
    'architecture-interior': {
      label: 'Arsitektur & Interior + DED',
      desc: 'Konsep terpadu arsitektur & interior hingga dokumen teknis siap tender',
      feePercentage: 0.065,
      terminDesc: '3 Termin (25% Konsep, 35% Pengembangan, 40% DED & Spesifikasi Material)',
    },
    'architecture-only': {
      label: 'Arsitektur & Studi Tapak',
      desc: 'Tata massa bangunan, fasad, denah fungsional, dan gambar kerja DED',
      feePercentage: 0.05,
      terminDesc: '3 Termin (30% Konsep & Tapak, 35% Skematik, 35% Dokumen DED)',
    },
  };

  const locationConfig = {
    jakarta: 'Jakarta & Bodetabek',
    bali: 'Bali (Canggu, Ubud, Uluwatu)',
    remote: 'Luar Kota / Mancanegara (Remote)',
  };

  let minConstructionRAB = $derived(area * typologyConfig[typology].minCostPerSqm);
  let maxConstructionRAB = $derived(area * typologyConfig[typology].maxCostPerSqm);

  let minFee = $derived(minConstructionRAB * scopeConfig[scope].feePercentage);
  let maxFee = $derived(maxConstructionRAB * scopeConfig[scope].feePercentage);

  function formatIDR(millions) {
    if (millions >= 1000) {
      const billions = (millions / 1000).toFixed(2).replace(/\.00$/, '');
      return `Rp ${billions} Miliar`;
    }
    return `Rp ${Math.round(millions)} Juta`;
  }

  let waMessage = $derived(
    encodeURIComponent(
      `Halo HomeSketch Studio, saya telah melakukan simulasi estimasi proyek:\n` +
      `• Jenis: ${typologyConfig[typology].label}\n` +
      `• Luas Bangunan: ${area} m²\n` +
      `• Lingkup Layanan: ${scopeConfig[scope].label}\n` +
      `• Lokasi: ${locationConfig[location]}\n` +
      `• Estimasi Nilai Konstruksi: ${formatIDR(minConstructionRAB)} - ${formatIDR(maxConstructionRAB)}\n` +
      `• Estimasi Honorarium Arsitek: ${formatIDR(minFee)} - ${formatIDR(maxFee)}\n\n` +
      `Saya ingin menjadwalkan konsultasi privat untuk membahas rencana ini lebih lanjut.`
    )
  );
</script>

<div class="w-full bg-[var(--color-canvas-surface)] border border-[var(--color-border-hairline)] p-6 sm:p-10 lg:p-12 shadow-sm flex flex-col gap-10">
  <!-- Controls Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
    <!-- Left Column: Controls (7 cols) -->
    <div class="lg:col-span-7 flex flex-col gap-8">
      <!-- 1. Typology -->
      <div class="flex flex-col gap-3">
        <label for="typology-select" class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
          1. Tipologi Proyek
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {#each Object.entries(typologyConfig) as [key, item]}
            <button
              type="button"
              onclick={() => typology = key}
              class="text-left p-4 border transition-all cursor-pointer {typology === key ? 'border-[var(--color-accent-terracotta)] bg-white shadow-xs' : 'border-[var(--color-border-hairline)] bg-[var(--color-canvas-light)] hover:border-[var(--color-ink-muted)]'}"
            >
              <div class="font-serif text-sm font-semibold text-[var(--color-ink-primary)] leading-tight mb-1">
                {item.label}
              </div>
              <div class="text-[11px] text-[var(--color-ink-muted)] leading-normal line-clamp-2">
                {item.desc}
              </div>
            </button>
          {/each}
        </div>
      </div>

      <!-- 2. Area Slider -->
      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <label for="area-range" class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
            2. Perkiraan Luas Bangunan (m²)
          </label>
          <span class="font-serif text-xl font-bold text-[var(--color-accent-terracotta)]">
            {area} m²
          </span>
        </div>
        <input
          id="area-range"
          type="range"
          min="200"
          max="1500"
          step="25"
          bind:value={area}
          class="w-full accent-[var(--color-accent-terracotta)] cursor-pointer h-2 bg-[var(--color-border-hairline)] rounded-lg"
        />
        <div class="flex justify-between text-[11px] text-[var(--color-ink-muted)]">
          <span>200 m² (Compact Bespoke)</span>
          <span>750 m² (Grand Villa)</span>
          <span>1.500 m²+ (Private Estate)</span>
        </div>
      </div>

      <!-- 3. Scope of Service -->
      <div class="flex flex-col gap-3">
        <label class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
          3. Ruang Lingkup Layanan
        </label>
        <div class="flex flex-col gap-2.5">
          {#each Object.entries(scopeConfig) as [key, item]}
            <button
              type="button"
              onclick={() => scope = key}
              class="flex flex-col sm:flex-row sm:items-center justify-between p-4 text-left border transition-all cursor-pointer gap-2 {scope === key ? 'border-[var(--color-accent-terracotta)] bg-white shadow-xs' : 'border-[var(--color-border-hairline)] bg-[var(--color-canvas-light)] hover:border-[var(--color-ink-muted)]'}"
            >
              <div>
                <div class="font-semibold text-sm text-[var(--color-ink-primary)]">
                  {item.label}
                </div>
                <div class="text-xs text-[var(--color-ink-muted)]">
                  {item.desc}
                </div>
              </div>
              <span class="text-xs font-semibold text-[var(--color-accent-terracotta)] shrink-0 sm:text-right">
                {item.feePercentage * 100}% Nilai RAB
              </span>
            </button>
          {/each}
        </div>
      </div>

      <!-- 4. Location -->
      <div class="flex flex-col gap-3">
        <label class="text-xs uppercase tracking-widest text-[var(--color-ink-muted)] font-semibold">
          4. Wilayah Lokasi Lahan
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {#each Object.entries(locationConfig) as [key, label]}
            <button
              type="button"
              onclick={() => location = key}
              class="p-3 text-center text-xs font-medium border transition-all cursor-pointer {location === key ? 'border-[var(--color-accent-terracotta)] bg-white font-semibold text-[var(--color-accent-terracotta)]' : 'border-[var(--color-border-hairline)] bg-[var(--color-canvas-light)] text-[var(--color-ink-primary)] hover:border-[var(--color-ink-muted)]'}"
            >
              {label}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <!-- Right Column: Calculation & Termin Output (5 cols) -->
    <div class="lg:col-span-5 bg-[var(--color-canvas-dark)] text-[var(--color-ink-light)] p-6 sm:p-8 flex flex-col justify-between border border-[var(--color-border-dark-hairline)] shadow-lg">
      <div class="flex flex-col gap-6">
        <div class="border-b border-[var(--color-border-dark-hairline)] pb-4">
          <div class="font-serif text-lg font-bold text-[var(--color-ink-light)]">
            Transparansi Standar IAI
          </div>
          <div class="text-[11px] uppercase tracking-widest text-[var(--color-accent-sage)] font-semibold mt-1">
            Simulasi Anggaran & Honorarium
          </div>
        </div>

        <!-- Metric 1: RAB -->
        <div class="flex flex-col gap-1">
          <span class="text-xs text-[var(--color-ink-light-muted)]">
            Perkiraan Nilai Konstruksi (RAB Fisik):
          </span>
          <span class="font-serif text-xl sm:text-2xl font-bold text-[var(--color-ink-light)]">
            {formatIDR(minConstructionRAB)} - {formatIDR(maxConstructionRAB)}
          </span>
          <span class="text-[11px] text-[var(--color-ink-light-muted)]/80">
            Tolok ukur spesifikasi luxury Rp {typologyConfig[typology].minCostPerSqm} - {typologyConfig[typology].maxCostPerSqm} jt/m²
          </span>
        </div>

        <!-- Metric 2: Fee -->
        <div class="flex flex-col gap-1 pt-4 border-t border-[var(--color-border-dark-hairline)]">
          <span class="text-xs text-[var(--color-ink-light-muted)]">
            Perkiraan Honorarium Arsitektur & Interior:
          </span>
          <span class="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-accent-terracotta-light)]">
            {formatIDR(minFee)} - {formatIDR(maxFee)}
          </span>
          <span class="text-[11px] text-[var(--color-accent-sage)]">
            {scopeConfig[scope].terminDesc}
          </span>
        </div>

        <!-- Transparent Termin Stages -->
        <div class="pt-4 border-t border-[var(--color-border-dark-hairline)] flex flex-col gap-2 text-xs text-[var(--color-ink-light-muted)]">
          <span class="font-semibold text-[var(--color-ink-light)] uppercase tracking-wider text-[10px]">
            Alokasi Nilai per Tahapan:
          </span>
          <div class="grid grid-cols-2 gap-2 text-[11px]">
            <div class="bg-white/5 p-2 border border-white/5">
              <span class="block text-[var(--color-accent-sage)] font-semibold">Tahap 01 (20%)</span>
              <span>Studi Tapak & Konsep</span>
            </div>
            <div class="bg-white/5 p-2 border border-white/5">
              <span class="block text-[var(--color-accent-sage)] font-semibold">Tahap 02 (30%)</span>
              <span>Pengembangan 3D & Bahan</span>
            </div>
            <div class="bg-white/5 p-2 border border-white/5">
              <span class="block text-[var(--color-accent-sage)] font-semibold">Tahap 03 (30%)</span>
              <span>Gambar Kerja DED & RAB</span>
            </div>
            <div class="bg-white/5 p-2 border border-white/5">
              <span class="block text-[var(--color-accent-sage)] font-semibold">Tahap 04 (20%)</span>
              <span>Supervisi Lapangan</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Button & Disclaimer -->
      <div class="pt-8 flex flex-col gap-3">
        <a
          href="https://wa.me/6281234567890?text={waMessage}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-thunk w-full h-12 bg-[var(--color-accent-terracotta)] hover:bg-[var(--color-accent-terracotta-hover)] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
        >
          <span>Bawa Estimasi ke Konsultasi WhatsApp</span>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <p class="text-[10px] text-[var(--color-ink-light-muted)]/70 leading-relaxed text-center">
          Simulasi panduan non-mengikat berbasis standar IAI. Penawaran resmi disesuaikan setelah studi kebutuhan spesifik tapak.
        </p>
      </div>
    </div>
  </div>
</div>
