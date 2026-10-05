<script>
  let goal = $state("fatloss");
  let frequency = $state("3x");
  let experience = $state("beginner");

  const goals = [
    { id: "fatloss", title: "Turun Lemak & Defisit Terukur", desc: "Fokus pembakaran kalori efisien, metabolisme aktif, dan pembentukan postur padat." },
    { id: "hypertrophy", title: "Bangun Otot & Kekuatan", desc: "Fokus progressive overload pada compound movements dan stimulasi massa otot." },
    { id: "stamina", title: "Stamina & Hyrox Conditioning", desc: "Fokus kapasitas paru, sirkuit fungsional, dan ketahanan fisik jangka panjang." },
    { id: "mobility", title: "Mobilitas & Bebas Pegal Kerja", desc: "Fokus koreksi postur bungkuk, pelepas ketegangan bahu/pinggang, dan fleksibilitas." }
  ];

  const frequencies = [
    { id: "2x", label: "2x Seminggu", desc: "Cocok untuk jadwal kerja padat, progres tetap konsisten." },
    { id: "3x", label: "3x Seminggu (Paling Ideal)", desc: "Ritme optimal pembentukan kebiasaan baru tanpa rasa lelah berlebih." },
    { id: "4x", label: "4-5x Seminggu", desc: "Cocok untuk yang ingin intensitas latihan lebih terstruktur." }
  ];

  const experiences = [
    { id: "beginner", label: "Pemula Total", desc: "Belum pernah menyentuh alat gym atau selalu merasa canggung." },
    { id: "intermediate", label: "Pernah ke Gym tapi Berhenti", desc: "Pernah mencoba namun bingung menyusun urutan latihan dan evaluasi form." },
    { id: "experienced", label: "Sudah Terbiasa Latihan", desc: "Mencari fasilitas berkualitas standar kompetisi dengan akses 24 jam bebas antre." }
  ];

  let result = $derived.by(() => {
    if (goal === "fatloss") {
      return {
        programTitle: "30-Day Guided Habit: Functional Metabolic Conditioning",
        zoneRecommendation: "Zone 2 (Functional Turf & Sled Track) + Zone 3 (Smart Cardio Hub)",
        freeClass: "Hyrox Conditioning & Functional Core (Maks 12 Orang)",
        bestHours: "06:30 – 08:30 WIB atau 20:30 – 22:00 WIB (Kepadatan <30%)",
        coachFocus: "Orientasi alat kardio pintar, perhitungan detak jantung zona 2, dan koreksi postur dasar pada 3 sesi gratis pertama."
      };
    }
    if (goal === "hypertrophy") {
      return {
        programTitle: "30-Day Guided Habit: Progressive Strength & Hypertrophy",
        zoneRecommendation: "Zone 1 (Free Weight & Standard Eleiko/Hammer Strength Power Racks)",
        freeClass: "Power Lifting Basic & Form Calibration",
        bestHours: "07:00 – 09:00 WIB atau 13:00 – 16:00 WIB (Rack tersedia bebas)",
        coachFocus: "Setup barbell aman, pengaturan safety pin squat rack, dan pencatatan repetisi di aplikasi."
      };
    }
    if (goal === "stamina") {
      return {
        programTitle: "30-Day Guided Habit: Hyrox Ready & Endurance Protocol",
        zoneRecommendation: "Zone 2 (Sled Track & SkiErg Hub) + Zone 3 (Rowers & Curved Treadmill)",
        freeClass: "Saturday Community Run & Hyrox Simulation",
        bestHours: "06:00 – 08:00 WIB atau 20:00 – 22:30 WIB",
        coachFocus: "Pacing pergerakan fungsional dan transisi energi aerobik tanpa kelelahan berlebih."
      };
    }
    return {
      programTitle: "30-Day Guided Habit: Posture Alignment & Dynamic Mobility",
      zoneRecommendation: "Zone 4 (Recovery & Stretching Lounge) + Functional Core",
      freeClass: "Yoga Mobility & Spinal Alignment Flow",
      bestHours: "09:30 – 11:30 WIB atau 15:00 – 17:00 WIB",
      coachFocus: "De-loading tulang belakang pasca duduk lama dan aktivasi otot penyangga postur leher dan pinggul."
    };
  });
</script>

<div class="border border-white/[0.08] bg-[#0A0B0D] rounded-xl p-6 sm:p-10">
  <div class="max-w-3xl mb-8">
    <div class="text-xs font-mono uppercase tracking-wider text-[#5E6AD2] mb-1">Target Finder Interaktif</div>
    <h3 class="text-xl sm:text-2xl font-semibold text-[#F7F8F8] tracking-tight">
      Temukan Pola Latihan Paling Realistis untuk Tubuh & Ritme Hidupmu
    </h3>
    <p class="text-xs sm:text-sm text-[#8A8F98] mt-2">
      Pilih tujuan latihan dan ketersediaan waktumu. Kami petakan zona alat, kelas pendukung, dan jam paling nyaman tanpa perlu menebak-nebak.
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    <!-- Quiz Controls (Left 7 Cols) -->
    <div class="lg:col-span-7 space-y-6">
      <!-- Step 1: Target Utama -->
      <div class="space-y-2.5">
        <label class="block text-xs font-mono uppercase text-[#F7F8F8] tracking-wider">
          1. Apa Target Utamamu Saat Ini?
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {#each goals as g}
            <button
              type="button"
              onclick={() => goal = g.id}
              class="text-left p-3.5 rounded-lg border transition-all {goal === g.id ? 'bg-[#5E6AD2]/15 border-[#5E6AD2] text-[#F7F8F8]' : 'bg-[#0F1011] border-white/[0.06] text-[#8A8F98] hover:border-white/[0.15] hover:text-[#F7F8F8]'}"
            >
              <div class="text-xs font-medium text-[#F7F8F8]">{g.title}</div>
              <div class="text-[11px] text-[#8A8F98] mt-1 leading-snug">{g.desc}</div>
            </button>
          {/each}
        </div>
      </div>

      <!-- Step 2: Jadwal Mingguan -->
      <div class="space-y-2.5">
        <label class="block text-xs font-mono uppercase text-[#F7F8F8] tracking-wider">
          2. Berapa Kali Kamu Bisa Latihan Per Minggu?
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {#each frequencies as f}
            <button
              type="button"
              onclick={() => frequency = f.id}
              class="text-left p-3 rounded-lg border transition-all {frequency === f.id ? 'bg-[#5E6AD2]/15 border-[#5E6AD2] text-[#F7F8F8]' : 'bg-[#0F1011] border-white/[0.06] text-[#8A8F98] hover:border-white/[0.15] hover:text-[#F7F8F8]'}"
            >
              <div class="text-xs font-medium text-[#F7F8F8]">{f.label}</div>
              <div class="text-[10px] text-[#8A8F98] mt-0.5 leading-tight">{f.desc}</div>
            </button>
          {/each}
        </div>
      </div>

      <!-- Step 3: Pengalaman -->
      <div class="space-y-2.5">
        <label class="block text-xs font-mono uppercase text-[#F7F8F8] tracking-wider">
          3. Tingkat Pengalamanmu di Gym
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {#each experiences as exp}
            <button
              type="button"
              onclick={() => experience = exp.id}
              class="text-left p-3 rounded-lg border transition-all {experience === exp.id ? 'bg-[#5E6AD2]/15 border-[#5E6AD2] text-[#F7F8F8]' : 'bg-[#0F1011] border-white/[0.06] text-[#8A8F98] hover:border-white/[0.15] hover:text-[#F7F8F8]'}"
            >
              <div class="text-xs font-medium text-[#F7F8F8]">{exp.label}</div>
              <div class="text-[10px] text-[#8A8F98] mt-0.5 leading-tight">{exp.desc}</div>
            </button>
          {/each}
        </div>
      </div>
    </div>

    <!-- Live Generated Plan Card (Right 5 Cols) -->
    <div class="lg:col-span-5 border border-white/[0.12] bg-[#0F1011] rounded-xl p-6 space-y-5">
      <div class="pb-3 border-b border-white/[0.08]">
        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-[#27A644]/15 text-[#27A644] border border-[#27A644]/30">
          <span class="w-1.5 h-1.5 rounded-full bg-[#27A644]"></span>
          Rekomendasi Terpersonalisasi
        </span>
        <h4 class="text-base font-semibold text-[#F7F8F8] mt-2">{result.programTitle}</h4>
      </div>

      <div class="space-y-3.5 text-xs">
        <div>
          <span class="text-[10px] font-mono text-[#8A8F98] uppercase">Zona Alat Utama</span>
          <p class="text-[#F7F8F8] font-medium mt-0.5">{result.zoneRecommendation}</p>
        </div>

        <div>
          <span class="text-[10px] font-mono text-[#8A8F98] uppercase">Kelas Pendukung Gratis</span>
          <p class="text-[#F7F8F8] font-medium mt-0.5">{result.freeClass}</p>
        </div>

        <div>
          <span class="text-[10px] font-mono text-[#8A8F98] uppercase">Jam Latihan Paling Nyaman</span>
          <p class="text-[#27A644] font-medium mt-0.5 font-mono">{result.bestHours}</p>
        </div>

        <div>
          <span class="text-[10px] font-mono text-[#8A8F98] uppercase">Fokus Pendampingan 3 Sesi Gratis</span>
          <p class="text-[#8A8F98] mt-0.5 leading-relaxed">{result.coachFocus}</p>
        </div>
      </div>

      <div class="pt-4 border-t border-white/[0.08]">
        <a
          href="/trial"
          class="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md text-xs font-medium text-white bg-[#5E6AD2] hover:bg-[#7170FF] transition-colors border border-[#7170FF]/30 shadow-xs"
        >
          <span>Coba Pola Ini via 3-Day Free Pass</span>
          <span class="text-[10px] opacity-75">(Gratis Rp0)</span>
        </a>
      </div>
    </div>
  </div>
</div>
