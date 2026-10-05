<script>
  let name = '';
  let company = '';
  let email = '';
  let phone = '';
  let eventType = 'corporate';
  let targetDate = '';
  let estimatedGuests = '200-500';
  let message = '';

  let isSubmitting = false;
  let isSubmitted = false;

  function handleSubmit() {
    isSubmitting = true;
    setTimeout(() => {
      isSubmitting = false;
      isSubmitted = true;
    }, 1000);
  }
</script>

<div class="bg-neutral-900/80 border border-neutral-800 p-8 sm:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
  <!-- Subtle Background Pattern -->
  <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

  {#if isSubmitted}
    <div class="py-16 text-center space-y-6">
      <div class="w-16 h-16 bg-amber-400/10 border border-amber-400/40 text-amber-400 rounded-full flex items-center justify-center mx-auto">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 class="font-serif text-3xl text-white font-medium">Permintaan Konsultasi Diterima</h3>
      <p class="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
        Terima kasih <span class="text-amber-400 font-semibold">{name}</span>. Tim Business Development Elevate Event Organizer akan menghubungi Anda melalui WhatsApp/Email dalam maksimal 3 jam kerja.
      </p>
      <div class="pt-4">
        <button
          on:click={() => { isSubmitted = false; name = ''; message = ''; }}
          class="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 border border-neutral-700 hover:border-amber-400 rounded-full"
        >
          Kirim Formulir Lain
        </button>
      </div>
    </div>
  {:else}
    <form on:submit|preventDefault={handleSubmit} class="space-y-6 relative z-10">
      <div class="space-y-2">
        <h3 class="font-serif text-2xl sm:text-3xl text-white font-medium">
          Mulai Diskusi & Jadwalkan Meeting
        </h3>
        <p class="text-xs text-neutral-400">
          Isi detail rencana event Anda di bawah ini. Tim kami siap membantu dari tahap konsep hingga eksekusi sempurna.
        </p>
      </div>

      <!-- Grid Form Fields -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
        <div class="space-y-2">
          <label class="block text-xs font-mono text-neutral-300 uppercase tracking-wider">Nama Lengkap *</label>
          <input
            type="text"
            required
            bind:value={name}
            placeholder="Contoh: Budi Santoso"
            class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-xs font-mono text-neutral-300 uppercase tracking-wider">Perusahaan / Organisasi</label>
          <input
            type="text"
            bind:value={company}
            placeholder="Contoh: PT Nusantara Tech"
            class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-xs font-mono text-neutral-300 uppercase tracking-wider">Email Bisnis *</label>
          <input
            type="email"
            required
            bind:value={email}
            placeholder="budi@perusahaan.co.id"
            class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-xs font-mono text-neutral-300 uppercase tracking-wider">Nomor WhatsApp / Phone *</label>
          <input
            type="tel"
            required
            bind:value={phone}
            placeholder="0812-3456-7890"
            class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-xs font-mono text-neutral-300 uppercase tracking-wider">Kategori Event</label>
          <select
            bind:value={eventType}
            class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
          >
            <option value="corporate">Corporate Event & Conference</option>
            <option value="wedding">Royal & Destination Wedding</option>
            <option value="exhibition">Exhibition & MICE</option>
            <option value="launching">Product Launch & Brand Activation</option>
            <option value="gathering">Gathering & Company Retreat</option>
            <option value="other">Event Khusus Lainnya</option>
          </select>
        </div>

        <div class="space-y-2">
          <label class="block text-xs font-mono text-neutral-300 uppercase tracking-wider">Perkiraan Tamu</label>
          <select
            bind:value={estimatedGuests}
            class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
          >
            <option value="<100">Intimate (&lt; 100 orang)</option>
            <option value="100-300">100 - 300 orang</option>
            <option value="300-1000">300 - 1.000 orang</option>
            <option value="1000+">Skala Besar (1.000+ orang)</option>
          </select>
        </div>
      </div>

      <div class="space-y-2">
        <label class="block text-xs font-mono text-neutral-300 uppercase tracking-wider">Target Tanggal / Lokasi Event</label>
        <input
          type="text"
          bind:value={targetDate}
          placeholder="Contoh: Q3 2026 / Jakarta Ballroom atau Bali Resort"
          class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
        />
      </div>

      <div class="space-y-2">
        <label class="block text-xs font-mono text-neutral-300 uppercase tracking-wider">Tujuan Bisnis & Rincian Konsep</label>
        <textarea
          rows="4"
          bind:value={message}
          placeholder="Ceritakan gambaran singkat event, target audiens, dan hasil yang Anda harapkan..."
          class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
        ></textarea>
      </div>

      <div class="pt-4 flex items-center justify-between">
        <span class="data-client-badge">
          [PERLU DATA CLIENT: calendar integration link]
        </span>

        <button
          type="submit"
          disabled={isSubmitting}
          class="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-amber-400/20 transform hover:-translate-y-0.5 disabled:opacity-50"
        >
          {#if isSubmitting}
            Mengirim Rencana Event...
          {:else}
            Jadwalkan Konsultasi Sekarang
          {/if}
        </button>
      </div>
    </form>
  {/if}
</div>
