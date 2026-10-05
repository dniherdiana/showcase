<script>
  let name = '';
  let email = '';
  let role = 'Volunteer';
  let message = '';
  let submitted = false;
  let isSubmitting = false;

  const roles = [
    'Volunteer Application',
    'Donor & Philanthropy',
    'Corporate Partnership',
    'Media & Press Inquiry',
    'General Inquiry'
  ];

  function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    setTimeout(() => {
      isSubmitting = false;
      submitted = true;
    }, 800);
  }
</script>

<div class="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xl">
  {#if submitted}
    <div class="text-center py-12 space-y-4">
      <div class="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center text-3xl mx-auto font-bold">
        ✓
      </div>
      <h3 class="text-2xl font-bold text-stone-900">Thank You for Reaching Out!</h3>
      <p class="text-stone-600 max-w-md mx-auto text-sm">
        Your message has been dispatched directly to our field coordinator team. We will review your inquiry and respond within 24 hours.
      </p>
      <button 
        type="button" 
        on:click={() => submitted = false}
        class="mt-4 bg-stone-900 text-white font-bold text-xs px-6 py-3 rounded-xl hover:bg-emerald-800 transition-colors"
      >
        Send Another Message
      </button>
    </div>
  {:else}
    <form on:submit={handleSubmit} class="space-y-6">
      <div>
        <h3 class="text-2xl font-bold text-stone-900">Send a Direct Message</h3>
        <p class="text-stone-500 text-sm mt-1">Connect with our foundation operations team or field station leaders.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">Your Full Name *</label>
          <input
            type="text"
            required
            bind:value={name}
            placeholder="e.g. Maya Lin"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-emerald-700"
          />
        </div>

        <div>
          <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">Email Address *</label>
          <input
            type="email"
            required
            bind:value={email}
            placeholder="maya@example.com"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-emerald-700"
          />
        </div>
      </div>

      <div>
        <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">Inquiry Category *</label>
        <select
          bind:value={role}
          class="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-emerald-700"
        >
          {#each roles as r}
            <option value={r}>{r}</option>
          {/each}
        </select>
      </div>

      <div>
        <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">Your Message *</label>
        <textarea
          required
          rows="5"
          bind:value={message}
          placeholder="Tell us how you would like to collaborate or ask a question about our programs..."
          class="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-emerald-700"
        ></textarea>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          class="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
        >
          {#if isSubmitting}
            <span>Sending...</span>
          {:else}
            <span>Submit Inquiry</span>
            <span>→</span>
          {/if}
        </button>

        <a 
          href="https://wa.me/6281234567890?text=Hello%20Yayasan%20Bumi%20Bersama,%20I%20would%20like%20to%20inquire%20about..."
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto text-emerald-800 hover:text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 border border-emerald-300 bg-emerald-50 px-4 py-3 rounded-xl"
        >
          <span class="text-base">💬</span> Quick WhatsApp Connect
        </a>
      </div>
    </form>
  {/if}
</div>
