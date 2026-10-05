<script>
  let name = '';
  let email = '';
  let phone = '';
  let destination = '';
  let message = '';
  let submitted = false;
  let errors = {};

  function validate() {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Nama wajib diisi';
    if (!email.trim()) newErrors.email = 'Email wajib diisi';
    else if (!email.includes('@')) newErrors.email = 'Format email tidak valid';
    if (!phone.trim()) newErrors.phone = 'Nomor telepon wajib diisi';
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    errors = newErrors;
    if (Object.keys(newErrors).length === 0) {
      submitted = true;
      name = '';
      email = '';
      phone = '';
      destination = '';
      message = '';
    }
  }

  function clearError(field) {
    if (errors[field]) {
      errors = { ...errors, [field]: undefined };
    }
  }
</script>

<form id="contactForm" class="bg-cream rounded-3xl p-8 shadow-soft" on:submit={handleSubmit} novalidate>
  {#if submitted}
    <div class="text-center py-8">
      <div class="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5B8A72" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <h3 class="font-heading text-2xl font-bold text-charcoal mb-2">Pesan Terkirim!</h3>
      <p class="text-muted">Terima kasih! Kami akan segera menghubungi Anda.</p>
      <button type="button" class="btn-primary mt-6" on:click={() => submitted = false}>Kirim Pesan Lain</button>
    </div>
  {:else}
    <div class="grid md:grid-cols-2 gap-6 mb-6">
      <div>
        <label for="svelte-name" class="block text-sm font-medium text-charcoal mb-2">Nama Lengkap</label>
        <input type="text" id="svelte-name" bind:value={name} on:focus={() => clearError('name')} required class="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all text-charcoal placeholder:text-muted/50" placeholder="Nama Anda" />
        {#if errors.name}
          <p class="text-red-500 text-xs mt-1">{errors.name}</p>
        {/if}
      </div>
      <div>
        <label for="svelte-email" class="block text-sm font-medium text-charcoal mb-2">Email</label>
        <input type="email" id="svelte-email" bind:value={email} on:focus={() => clearError('email')} required class="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all text-charcoal placeholder:text-muted/50" placeholder="email@contoh.com" />
        {#if errors.email}
          <p class="text-red-500 text-xs mt-1">{errors.email}</p>
        {/if}
      </div>
    </div>

    <div class="mb-6">
      <label for="svelte-phone" class="block text-sm font-medium text-charcoal mb-2">Nomor Telepon</label>
      <input type="tel" id="svelte-phone" bind:value={phone} on:focus={() => clearError('phone')} required class="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all text-charcoal placeholder:text-muted/50" placeholder="+62 8xx xxxx xxxx" />
      {#if errors.phone}
        <p class="text-red-500 text-xs mt-1">{errors.phone}</p>
      {/if}
    </div>

    <div class="mb-6">
      <label for="svelte-destination" class="block text-sm font-medium text-charcoal mb-2">Destinasi yang Diinginkan</label>
      <select id="svelte-destination" bind:value={destination} class="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all text-charcoal">
        <option value="">Pilih destinasi</option>
        <option value="bali">Bali & Nusa Tenggara</option>
        <option value="jawa">Jawa & Sumatera</option>
        <option value="kalimantan">Kalimantan & Sulawesi</option>
        <option value="papua">Papua & Maluku</option>
        <option value="luar">Luar Negeri</option>
        <option value="custom">Lainnya (Custom)</option>
      </select>
    </div>

    <div class="mb-6">
      <label for="svelte-message" class="block text-sm font-medium text-charcoal mb-2">Ceritakan Perjalanan Impian Anda</label>
      <textarea id="svelte-message" bind:value={message} rows="4" class="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all text-charcoal placeholder:text-muted/50 resize-none" placeholder="Tanggal keberangkatan, jumlah traveler, budget, dan detail lainnya..."></textarea>
    </div>

    <button type="submit" class="btn-primary w-full justify-center text-base">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
      Kirim Pesan
    </button>

    <p class="text-center text-muted text-xs mt-4">
      Atau hubungi langsung via <a href="https://wa.me/6281234567890" class="text-sage font-semibold hover:underline" target="_blank" rel="noopener">WA</a> untuk respons lebih cepat
    </p>
  {/if}
</form>