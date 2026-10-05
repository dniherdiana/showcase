<script lang="ts">
  export let lang: 'en' | 'id' = 'en';
  export let translations: {
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    categoryLabel: string;
    options: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successMessage: string;
    errorMessage: string;
  };

  let name = '';
  let email = '';
  let category = translations.options[0] || '';
  let message = '';
  let isSubmitting = false;
  let status: 'idle' | 'success' | 'error' = 'idle';

  async function handleSubmit(event: Event) {
    event.preventDefault();
    if (!name || !email || !message) {
      status = 'error';
      return;
    }

    isSubmitting = true;
    status = 'idle';

    // Simulate clean form submission
    setTimeout(() => {
      isSubmitting = false;
      status = 'success';
      name = '';
      email = '';
      message = '';
    }, 1000);
  }
</script>

<div class="bg-[#F4F0EA] border border-[#E6E0D6] rounded-2xl p-6 sm:p-10 shadow-xs">
  <h2 class="font-serif text-2xl sm:text-3xl text-[#1C1B18] mb-6 font-medium">
    {translations.formTitle}
  </h2>

  <form on:submit={handleSubmit} class="space-y-6" novalidate>
    <!-- Name Field -->
    <div>
      <label for="name-field" class="block text-sm font-medium text-[#1C1B18] mb-2">
        {translations.nameLabel} <span class="text-[#C86D51]">*</span>
      </label>
      <input
        type="text"
        id="name-field"
        bind:value={name}
        placeholder={translations.namePlaceholder}
        required
        class="w-full bg-[#FDFBF7] border border-[#E6E0D6] rounded-lg px-4 py-3 text-[#1C1B18] placeholder-[#57534E]/60 focus:outline-hidden focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51] transition-all"
      />
    </div>

    <!-- Email Field -->
    <div>
      <label for="email-field" class="block text-sm font-medium text-[#1C1B18] mb-2">
        {translations.emailLabel} <span class="text-[#C86D51]">*</span>
      </label>
      <input
        type="email"
        id="email-field"
        bind:value={email}
        placeholder={translations.emailPlaceholder}
        required
        class="w-full bg-[#FDFBF7] border border-[#E6E0D6] rounded-lg px-4 py-3 text-[#1C1B18] placeholder-[#57534E]/60 focus:outline-hidden focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51] transition-all"
      />
    </div>

    <!-- Category Selector -->
    <div>
      <label for="category-field" class="block text-sm font-medium text-[#1C1B18] mb-2">
        {translations.categoryLabel}
      </label>
      <select
        id="category-field"
        bind:value={category}
        class="w-full bg-[#FDFBF7] border border-[#E6E0D6] rounded-lg px-4 py-3 text-[#1C1B18] focus:outline-hidden focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51] transition-all"
      >
        {#each translations.options as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </div>

    <!-- Message Textarea -->
    <div>
      <label for="message-field" class="block text-sm font-medium text-[#1C1B18] mb-2">
        {translations.messageLabel} <span class="text-[#C86D51]">*</span>
      </label>
      <textarea
        id="message-field"
        bind:value={message}
        rows="5"
        placeholder={translations.messagePlaceholder}
        required
        class="w-full bg-[#FDFBF7] border border-[#E6E0D6] rounded-lg px-4 py-3 text-[#1C1B18] placeholder-[#57534E]/60 focus:outline-hidden focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51] transition-all resize-y"
      ></textarea>
    </div>

    <!-- Feedback Banner -->
    {#if status === 'success'}
      <div
        role="alert"
        class="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium transition-all"
      >
        {translations.successMessage}
      </div>
    {:else if status === 'error'}
      <div
        role="alert"
        class="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium transition-all"
      >
        {translations.errorMessage}
      </div>
    {/if}

    <!-- Submit Button -->
    <button
      type="submit"
      disabled={isSubmitting}
      class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#1C1B18] text-[#FDFBF7] font-medium text-sm rounded-lg hover:bg-[#C86D51] focus:outline-hidden focus:ring-2 focus:ring-[#C86D51] focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 cursor-pointer"
    >
      {#if isSubmitting}
        <span class="inline-block animate-pulse">{translations.submittingButton}</span>
      {:else}
        {translations.submitButton}
      {/if}
    </button>
  </form>
</div>
