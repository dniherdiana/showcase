<script>
  let fullName = $state("");
  let whatsapp = $state("");
  let selectedBranch = $state("senopati");
  let visitTime = $state("sore");
  let isSubmitted = $state(false);
  let passCode = $state("");

  const branches = [
    { id: "senopati", name: "Senopati Central Hub", area: "Jakarta Selatan" },
    { id: "bsd", name: "BSD Technoplex Hub", area: "Tangerang Selatan" },
    { id: "dharmawangsa", name: "Dharmawangsa Sanctuary", area: "Jakarta Selatan" }
  ];

  const timeSlots = [
    { id: "pagi", label: "Pagi (06:00 – 11:00)" },
    { id: "siang", label: "Siang (11:00 – 16:00)" },
    { id: "sore", label: "Sore / Malam (16:00 – 22:00)" },
    { id: "malam", label: "Larut Malam / 24 Jam" }
  ];

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName || !whatsapp) return;
    passCode = "KTK-" + Math.floor(100000 + Math.random() * 900000);
    isSubmitted = true;
  }

  function resetForm() {
    isSubmitted = false;
    fullName = "";
    whatsapp = "";
  }
</script>

{#if !isSubmitted}
  <form onsubmit={handleSubmit} class="space-y-4">
    <div>
      <label for="fullName" class="block text-xs font-mono uppercase text-[#8A8F98] tracking-wider mb-1.5">
        Nama Lengkap
      </label>
      <input
        type="text"
        id="fullName"
        required
        placeholder="Contoh: Rian Pratama"
        bind:value={fullName}
        class="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1011] border border-white/[0.08] text-sm text-[#F7F8F8] placeholder-[#62666D] focus:border-[#5E6AD2] focus:ring-1 focus:ring-[#5E6AD2] outline-hidden transition-colors"
      />
    </div>

    <div>
      <label for="whatsapp" class="block text-xs font-mono uppercase text-[#8A8F98] tracking-wider mb-1.5">
        Nomor WhatsApp (Untuk Pengiriman QR Pass)
      </label>
      <input
        type="tel"
        id="whatsapp"
        required
        placeholder="Contoh: 081234567890"
        bind:value={whatsapp}
        class="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1011] border border-white/[0.08] text-sm text-[#F7F8F8] placeholder-[#62666D] focus:border-[#5E6AD2] focus:ring-1 focus:ring-[#5E6AD2] outline-hidden transition-colors"
      />
      <span class="text-[11px] text-[#62666D] mt-1 block">Kami tidak akan mengirim spam promosi atau sales push.</span>
    </div>

    <div>
      <label class="block text-xs font-mono uppercase text-[#8A8F98] tracking-wider mb-1.5">
        Pilih Hub Cabang Terdekat
      </label>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {#each branches as b}
          <button
            type="button"
            onclick={() => selectedBranch = b.id}
            class="text-left p-3 rounded-lg border transition-all {selectedBranch === b.id ? 'bg-[#5E6AD2]/15 border-[#5E6AD2] text-[#F7F8F8]' : 'bg-[#0F1011] border-white/[0.08] text-[#8A8F98] hover:border-white/[0.15]'}"
          >
            <div class="text-xs font-medium text-[#F7F8F8]">{b.name}</div>
            <div class="text-[10px] text-[#8A8F98]">{b.area}</div>
          </button>
        {/each}
      </div>
    </div>

    <div>
      <label class="block text-xs font-mono uppercase text-[#8A8F98] tracking-wider mb-1.5">
        Rencana Jam Kunjungan Pertama
      </label>
      <div class="grid grid-cols-2 gap-2">
        {#each timeSlots as slot}
          <button
            type="button"
            onclick={() => visitTime = slot.id}
            class="text-left p-2.5 rounded-lg border text-xs transition-all {visitTime === slot.id ? 'bg-[#5E6AD2]/15 border-[#5E6AD2] text-[#F7F8F8]' : 'bg-[#0F1011] border-white/[0.08] text-[#8A8F98] hover:border-white/[0.15]'}"
          >
            {slot.label}
          </button>
        {/each}
      </div>
    </div>

    <div class="pt-3">
      <button
        type="submit"
        class="w-full py-3 px-4 rounded-lg bg-[#5E6AD2] hover:bg-[#7170FF] text-[#F7F8F8] text-sm font-medium transition-colors border border-[#7170FF]/30 shadow-md flex items-center justify-center gap-2"
      >
        <span>Kirimkan QR Akses Free Pass via WhatsApp</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
      <div class="flex items-center justify-center gap-4 text-[11px] text-[#62666D] mt-3">
        <span>✓ 100% Gratis Rp0</span>
        <span>✓ Tanpa Kartu Kredit</span>
        <span>✓ Tanpa Kewajiban Langganan</span>
      </div>
    </div>
  </form>
{:else}
  <!-- Instant Simulated Digital Pass Card -->
  <div class="border border-[#5E6AD2]/40 bg-[#0F1011] rounded-xl p-6 sm:p-8 space-y-6 text-center">
    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#27A644]/15 text-[#27A644] border border-[#27A644]/30">
      <span class="w-2 h-2 rounded-full bg-[#27A644]"></span>
      3-DAY FREE PASS AKTIF
    </div>

    <div>
      <h4 class="text-xl font-bold text-[#F7F8F8]">QR Pass Siap Digunakan</h4>
      <p class="text-xs text-[#8A8F98] mt-1">
        Salinan digital telah disiapkan untuk WhatsApp <span class="text-[#F7F8F8] font-mono font-medium">{whatsapp}</span>
      </p>
    </div>

    <!-- Digital QR Card Frame -->
    <div class="max-w-xs mx-auto p-5 rounded-lg bg-[#191A1B] border border-white/[0.1] space-y-4">
      <div class="flex justify-between items-center text-[10px] font-mono text-[#8A8F98] border-b border-white/[0.08] pb-2">
        <span>KINETIK ACCESS</span>
        <span class="text-[#27A644]">VERIFIED</span>
      </div>

      <!-- Simulated QR Visual -->
      <div class="w-36 h-36 mx-auto bg-white p-2.5 rounded-lg flex items-center justify-center shadow-inner">
        <div class="w-full h-full border-2 border-dashed border-black flex flex-col items-center justify-center text-[9px] font-mono text-black leading-tight text-center">
          <span class="font-bold text-xs">{passCode}</span>
          <span class="mt-1">SCAN AT TURNSTILE</span>
        </div>
      </div>

      <div class="text-left space-y-1 text-xs pt-1">
        <div class="text-[11px] text-[#8A8F98]">Member: <span class="text-[#F7F8F8] font-medium">{fullName}</span></div>
        <div class="text-[11px] text-[#8A8F98]">Lokasi: <span class="text-[#F7F8F8] font-medium">{branches.find(b => b.id === selectedBranch)?.name}</span></div>
        <div class="text-[11px] text-[#8A8F98]">Masa Berlaku: <span class="text-[#27A644] font-medium">3 Hari Sejak Scan Pertama</span></div>
      </div>
    </div>

    <div class="space-y-2 max-w-sm mx-auto">
      <a
        href={`https://wa.me/6281234567890?text=Halo%20KINETIK%2C%20saya%20sudah%20mengaktifkan%20Free%20Pass%20dengan%20kode%20${passCode}%20atas%20nama%20${encodeURIComponent(fullName)}`}
        target="_blank"
        rel="noopener noreferrer"
        class="w-full py-2.5 px-4 rounded-lg bg-[#27A644] hover:bg-[#2EB84D] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
      >
        <span>Konfirmasi / Tanya Coach via WhatsApp</span>
      </a>

      <button
        type="button"
        onclick={resetForm}
        class="text-xs text-[#8A8F98] hover:text-[#F7F8F8] transition-colors py-1"
      >
        Daftarkan Pass untuk Orang Lain
      </button>
    </div>
  </div>
{/if}
