<script>
  let duration = $state('monthly');
  let teamSize = $state(1);
  let needMeetingRoom = $state(false);

  const basePrices = {
    daily: 50000,
    weekly: 275000,
    monthly: 950000
  };

  const meetingRoomAddon = {
    daily: 25000,
    weekly: 100000,
    monthly: 250000
  };

  let totalPrice = $derived(() => {
    let price = basePrices[duration] * teamSize;
    if (needMeetingRoom) {
      price += meetingRoomAddon[duration] * teamSize;
    }
    return price;
  });

  function formatIDR(num) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  }
</script>

<div class="bg-white border-[1.5px] border-[rgba(28,25,23,0.15)] rounded-blob p-6 md:p-10 shadow-indie">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div class="space-y-6">
      <div>
        <label class="block font-dmsans text-sm font-bold text-text-primary mb-2" for="duration-select">
          Pilihan Durasi Keanggotaan
        </label>
        <div class="grid grid-cols-3 gap-2" id="duration-select">
          <button
            type="button"
            class={`py-2.5 px-3 rounded-full text-xs md:text-sm font-semibold border transition-all ${
              duration === 'daily'
                ? 'bg-accent text-white border-accent shadow-xs'
                : 'bg-bg-surface text-text-secondary border-border-indie hover:text-text-primary'
            }`}
            onclick={() => (duration = 'daily')}
          >
            Harian
          </button>
          <button
            type="button"
            class={`py-2.5 px-3 rounded-full text-xs md:text-sm font-semibold border transition-all ${
              duration === 'weekly'
                ? 'bg-accent text-white border-accent shadow-xs'
                : 'bg-bg-surface text-text-secondary border-border-indie hover:text-text-primary'
            }`}
            onclick={() => (duration = 'weekly')}
          >
            Mingguan
          </button>
          <button
            type="button"
            class={`py-2.5 px-3 rounded-full text-xs md:text-sm font-semibold border transition-all ${
              duration === 'monthly'
                ? 'bg-accent text-white border-accent shadow-xs'
                : 'bg-bg-surface text-text-secondary border-border-indie hover:text-text-primary'
            }`}
            onclick={() => (duration = 'monthly')}
          >
            Bulanan
          </button>
        </div>
      </div>

      <div>
        <div class="flex justify-between items-center mb-2">
          <label class="font-dmsans text-sm font-bold text-text-primary" for="team-slider">
            Kapasitas Meja Tim
          </label>
          <span class="font-dmsans font-bold text-accent text-sm">
            {teamSize} Orang
          </span>
        </div>
        <input
          id="team-slider"
          type="range"
          min="1"
          max="10"
          bind:value={teamSize}
          class="w-full accent-accent cursor-pointer"
        />
        <div class="flex justify-between text-xs text-text-secondary mt-1 font-dmsans">
          <span>1 Meja Mandiri</span>
          <span>5 Meja Rintisan</span>
          <span>10 Meja Tim</span>
        </div>
      </div>

      <div class="pt-2">
        <label class="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            bind:checked={needMeetingRoom}
            class="w-4 h-4 rounded text-accent accent-accent focus:ring-accent"
          />
          <span class="font-dmsans text-sm text-text-primary">
            Tambahkan kuota prioritas ruang rapat tertutup
          </span>
        </label>
      </div>
    </div>

    <!-- Live Calculation Result Card -->
    <div class="bg-bg-surface p-6 md:p-8 rounded-blob border-[1.5px] border-[rgba(28,25,23,0.15)] flex flex-col justify-between h-full rotate-1">
      <div>
        <p class="font-dmsans text-xs uppercase tracking-wider text-text-secondary font-bold mb-1">
          Estimasi Investasi Transparan
        </p>
        <p class="font-caveat font-bold text-4xl md:text-5xl text-accent my-2">
          {formatIDR(totalPrice())}
        </p>
        <p class="font-dmsans text-xs text-text-secondary leading-relaxed">
          Harga bersih sudah termasuk akses internet kecepatan tinggi terdedikasi, listrik mandiri tanpa batasan watt, minuman kopi dan teh seduh sepuasnya, serta pembebasan biaya administrasi awal.
        </p>
      </div>

      <div class="mt-6 pt-6 border-t border-border-indie">
        <a
          href="/coba-gratis"
          class="btn-thunk block w-full text-center bg-accent text-white font-dmsans font-bold text-sm py-3 px-6 rounded-full shadow-indie hover:bg-accent-hover"
        >
          Klaim Meja Sekarang
        </a>
      </div>
    </div>
  </div>
</div>
