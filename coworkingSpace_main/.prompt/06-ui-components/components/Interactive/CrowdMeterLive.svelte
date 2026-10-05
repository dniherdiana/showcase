<script>
  let { title = "Pantau Kepadatan Gym Real-Time", subtitle = "Cek keramaian alat sebelum melangkah keluar rumah agar latihanmu tidak terbuang sia-sia." } = $props();

  let selectedHub = $state("senopati");
  let simulatedHour = $state(new Date().getHours());
  let isLive = $state(true);

  const hubs = {
    senopati: {
      name: "Senopati Central Hub",
      address: "Jl. Senopati No. 42, Kebayoran Baru",
      baseCapacity: 65,
      zones: [
        { name: "Free Weights & Racks", load: "35%", status: "Tersedia 4 Rack" },
        { name: "Functional Turf & Sled", load: "20%", status: "Sangat Lengang" },
        { name: "Smart Cardio Hub", load: "50%", status: "Treadmill Bebas Antre" },
        { name: "Recovery Lounge", load: "15%", status: "Siap Digunakan" }
      ]
    },
    bsd: {
      name: "BSD Technoplex Hub",
      address: "Technoplex Green Office Park 9, BSD City",
      baseCapacity: 45,
      zones: [
        { name: "Free Weights & Racks", load: "25%", status: "Tersedia 6 Rack" },
        { name: "Functional Turf & Sled", load: "10%", status: "Sangat Lengang" },
        { name: "Smart Cardio Hub", load: "30%", status: "Leluasa" },
        { name: "Recovery Lounge", load: "10%", status: "Kosong" }
      ]
    },
    dharmawangsa: {
      name: "Dharmawangsa Sanctuary",
      address: "Jl. Dharmawangsa X No. 18, Jakarta Selatan",
      baseCapacity: 30,
      zones: [
        { name: "Free Weights & Racks", load: "20%", status: "Tersedia 3 Rack" },
        { name: "Functional Turf & Sled", load: "15%", status: "Sangat Lengang" },
        { name: "Smart Cardio Hub", load: "25%", status: "Bebas Antre" },
        { name: "Recovery Lounge", load: "10%", status: "Privat" }
      ]
    }
  };

  // Compute crowd percentage based on simulated hour
  let crowdPercentage = $derived.by(() => {
    const h = simulatedHour;
    if (h >= 0 && h < 6) return Math.min(18, 5 + h * 2);
    if (h >= 6 && h < 9) return 45 + (h - 6) * 10; // morning rush
    if (h >= 9 && h < 16) return 25 + Math.sin(h) * 8; // off-peak quiet
    if (h >= 16 && h < 20) return 65 + (h - 16) * 6; // evening active
    if (h >= 20 && h < 23) return Math.max(22, 60 - (h - 20) * 12);
    return 15;
  });

  let roundedPercentage = $derived(Math.round(crowdPercentage));

  let crowdStatus = $derived.by(() => {
    if (roundedPercentage < 35) {
      return {
        label: "Lengang (Optimal)",
        color: "#27A644",
        bgBadge: "bg-[#27A644]/15",
        textBadge: "text-[#27A644]",
        borderBadge: "border-[#27A644]/30",
        message: "Kondisi sangat nyaman. Seluruh rack dan alat utama bebas antre tanpa hambatan."
      };
    }
    if (roundedPercentage < 70) {
      return {
        label: "Sedang Berjalan Lancar",
        color: "#F59E0B",
        bgBadge: "bg-[#F59E0B]/15",
        textBadge: "text-[#F59E0B]",
        borderBadge: "border-[#F59E0B]/30",
        message: "Aktivitas sedang berjalan tertib. Waktu tunggu antar-set rata-rata di bawah 1 menit."
      };
    }
    return {
      label: "Jam Favorit Aktif",
      color: "#EF4444",
      bgBadge: "bg-[#EF4444]/15",
      textBadge: "text-[#EF4444]",
      borderBadge: "border-[#EF4444]/30",
      message: "Sedang banyak member berlatih. Jika ingin suasana tenang, disarankan hadir setelah pukul 20:30."
    };
  });

  function resetToCurrent() {
    simulatedHour = new Date().getHours();
    isLive = true;
  }

  function handleSliderChange(e) {
    simulatedHour = parseInt(e.target.value, 10);
    isLive = simulatedHour === new Date().getHours();
  }
</script>

<div class="border border-white/[0.08] bg-[#0F1011] rounded-xl p-6 sm:p-8">
  <!-- Header Bar -->
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
    <div>
      <div class="flex items-center gap-2 mb-1">
        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono {crowdStatus.bgBadge} {crowdStatus.textBadge} border {crowdStatus.borderBadge}">
          <span class="w-1.5 h-1.5 rounded-full" style="background-color: {crowdStatus.color}"></span>
          {isLive ? 'LIVE DATA' : 'SIMULASI WAKTU'}
        </span>
        <span class="text-xs text-[#8A8F98]">Diperbarui tiap 60 detik</span>
      </div>
      <h3 class="text-lg sm:text-xl font-semibold text-[#F7F8F8] tracking-tight">{title}</h3>
    </div>

    <!-- Hub Selector Tabs -->
    <div class="flex items-center gap-1.5 bg-[#191A1B] p-1 rounded-lg border border-white/[0.08]">
      {#each Object.entries(hubs) as [key, hub]}
        <button
          type="button"
          onclick={() => selectedHub = key}
          class="px-3 py-1.5 text-xs font-medium rounded-md transition-all {selectedHub === key ? 'bg-[#5E6AD2] text-white shadow-xs' : 'text-[#8A8F98] hover:text-[#F7F8F8]'}"
        >
          {hub.name.split(' ')[0]}
        </button>
      {/each}
    </div>
  </div>

  <!-- Live Status Metric Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6 border-b border-white/[0.08]">
    <!-- Oversized Density Gauge -->
    <div class="lg:col-span-5 flex flex-col justify-center space-y-4">
      <div class="flex items-baseline gap-3">
        <span class="text-6xl sm:text-7xl font-mono font-bold tracking-tighter text-[#F7F8F8]">{roundedPercentage}%</span>
        <div class="flex flex-col">
          <span class="text-xs font-mono uppercase tracking-wider text-[#8A8F98]">Kepadatan Alat</span>
          <span class="text-sm font-medium" style="color: {crowdStatus.color}">{crowdStatus.label}</span>
        </div>
      </div>

      <!-- Capacity Visual Progress Bar -->
      <div class="w-full bg-[#191A1B] h-2.5 rounded-full overflow-hidden border border-white/[0.08]">
        <div
          class="h-full transition-all duration-500 rounded-full"
          style="width: {roundedPercentage}%; background-color: {crowdStatus.color}"
        ></div>
      </div>

      <p class="text-xs text-[#8A8F98] leading-relaxed">
        {crowdStatus.message}
      </p>
    </div>

    <!-- Breakdown per Zona Latihan -->
    <div class="lg:col-span-7 space-y-3">
      <div class="text-xs font-mono uppercase tracking-wide text-[#8A8F98] pb-1">Ketersediaan Zona Latihan ({hubs[selectedHub].name})</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {#each hubs[selectedHub].zones as zone}
          <div class="p-3.5 rounded-lg bg-[#191A1B]/60 border border-white/[0.06] flex items-center justify-between">
            <div>
              <div class="text-xs font-medium text-[#F7F8F8]">{zone.name}</div>
              <div class="text-[11px] text-[#8A8F98]">{zone.status}</div>
            </div>
            <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-[#F7F8F8]">
              {zone.load}
            </span>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Interactive Time Explorer Slider -->
  <div class="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div class="flex-1 space-y-1.5">
      <div class="flex items-center justify-between text-xs">
        <span class="text-[#8A8F98]">Geser untuk cek estimasi keramaian di jam lain:</span>
        <span class="font-mono font-medium text-[#F7F8F8]">Pukul {simulatedHour.toString().padStart(2, '0')}:00 WIB</span>
      </div>
      <input
        type="range"
        min="0"
        max="23"
        value={simulatedHour}
        oninput={handleSliderChange}
        class="w-full accent-[#5E6AD2] cursor-pointer bg-[#191A1B] h-1.5 rounded-lg"
      />
      <div class="flex justify-between text-[10px] font-mono text-[#62666D]">
        <span>00:00 (Malam)</span>
        <span>06:00 (Pagi)</span>
        <span>12:00 (Siang)</span>
        <span>18:00 (Sore)</span>
        <span>23:00</span>
      </div>
    </div>

    <button
      type="button"
      onclick={resetToCurrent}
      class="self-start sm:self-auto px-3.5 py-2 text-xs font-medium rounded-md bg-white/[0.06] hover:bg-white/[0.1] text-[#F7F8F8] border border-white/[0.08] transition-colors whitespace-nowrap"
    >
      Kembali ke Jam Sekarang
    </button>
  </div>
</div>
