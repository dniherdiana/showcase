<script>
  let name = $state('');
  let profession = $state('');
  let selectedDate = $state('');
  let notes = $state('');
  let isSubmitted = $state(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !profession || !selectedDate) return;
    
    const message = `Halo Admin Ranting Creative Space, saya ingin klaim uji coba gratis kerja satu hari.\n\nNama: ${name}\nProfesi: ${profession}\nRencana Kedatangan: ${selectedDate}\nKebutuhan Tambahan: ${notes || 'Tidak ada'}`;
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281234567890?text=${encoded}`;
    
    isSubmitted = true;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  }
</script>

<div class="bg-white border-[1.5px] border-[rgba(28,25,23,0.15)] rounded-blob p-6 md:p-10 shadow-indie">
  {#if !isSubmitted}
    <form onsubmit={handleSubmit} class="space-y-5">
      <div>
        <label for="full-name" class="block font-dmsans text-sm font-bold text-text-primary mb-1.5">
          Nama Lengkap Anda
        </label>
        <input
          id="full-name"
          type="text"
          bind:value={name}
          required
          placeholder="Contoh: Budi Prasetyo"
          class="w-full px-4 py-2.5 rounded-full border-[1.5px] border-border-indie bg-bg-base text-text-primary font-dmsans text-sm focus:outline-hidden focus:border-accent"
        />
      </div>

      <div>
        <label for="user-profession" class="block font-dmsans text-sm font-bold text-text-primary mb-1.5">
          Bidang Profesi atau Nama Usaha
        </label>
        <input
          id="user-profession"
          type="text"
          bind:value={profession}
          required
          placeholder="Contoh: Desainer UI/UX atau Pengembang Web"
          class="w-full px-4 py-2.5 rounded-full border-[1.5px] border-border-indie bg-bg-base text-text-primary font-dmsans text-sm focus:outline-hidden focus:border-accent"
        />
      </div>

      <div>
        <label for="visit-date" class="block font-dmsans text-sm font-bold text-text-primary mb-1.5">
          Pilihan Tanggal Kunjungan Perdana
        </label>
        <input
          id="visit-date"
          type="date"
          bind:value={selectedDate}
          required
          class="w-full px-4 py-2.5 rounded-full border-[1.5px] border-border-indie bg-bg-base text-text-primary font-dmsans text-sm focus:outline-hidden focus:border-accent"
        />
      </div>

      <div>
        <label for="user-notes" class="block font-dmsans text-sm font-bold text-text-primary mb-1.5">
          Catatan Tambahan (Opsional)
        </label>
        <textarea
          id="user-notes"
          bind:value={notes}
          rows="3"
          placeholder="Ceritakan perangkat yang Anda bawa atau kebutuhan khusus lainnya..."
          class="w-full px-4 py-2.5 rounded-2xl border-[1.5px] border-border-indie bg-bg-base text-text-primary font-dmsans text-sm focus:outline-hidden focus:border-accent resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="btn-thunk w-full bg-accent text-white font-dmsans font-bold text-sm py-3.5 px-6 rounded-full shadow-indie hover:bg-accent-hover mt-4 flex items-center justify-center gap-2"
      >
        Konfirmasi Jadwal Uji Coba via WhatsApp
      </button>
      
      <p class="font-dmsans text-xs text-text-secondary text-center">
        Data Anda terenkripsi aman. Manajer lokasi kami akan membalas konfirmasi dalam waktu maksimal 15 menit.
      </p>
    </form>
  {:else}
    <div class="py-8 text-center space-y-4">
      <div class="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
        ✓
      </div>
      <h3 class="font-caveat font-bold text-3xl text-text-primary">
        Jadwal Anda Sedang Diteruskan
      </h3>
      <p class="font-dmsans text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
        Jendela WhatsApp telah dibuka untuk menghubungkan Anda secara langsung dengan Manajer Komunitas kami. Kami menantikan kehadiran Anda di Ranting Creative Space.
      </p>
      <button
        type="button"
        onclick={() => (isSubmitted = false)}
        class="text-xs font-dmsans text-accent underline mt-4 inline-block"
      >
        Kirim jadwal kunjungan lain
      </button>
    </div>
  {/if}
</div>
