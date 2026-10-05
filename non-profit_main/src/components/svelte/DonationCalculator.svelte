<script>
  let frequency = 'monthly'; // 'monthly' | 'one-time'
  let amount = 35;
  let customAmount = '';
  let activeTab = 'preset'; // 'preset' | 'custom'

  const presets = [15, 35, 75, 150, 300];

  const impactBreakdown = {
    15: {
      trees: '30 native trees planted',
      families: '3 rural families equipped with organic seeds',
      education: '5 students provided with eco-learning materials'
    },
    35: {
      trees: '70 native trees planted & nurtured',
      families: '8 rural families provided clean gravity water',
      education: '12 children enrolled in community eco-workshops'
    },
    75: {
      trees: '150 native trees & riverbank stabilization',
      families: '18 farmer households trained in regenerative agriculture',
      education: '1 rural learning shelter fully supplied'
    },
    150: {
      trees: '350 forest canopy seedlings nurtured for 2 years',
      families: '1 complete village micro-hydro maintenance kit',
      education: '2 local youth scholarship grants per quarter'
    },
    300: {
      trees: '700 trees planted across 2 hectares of degraded land',
      families: '5 micro-business grants for rural women cooperatives',
      education: 'Full solar electrification for 1 remote school site'
    }
  };

  $: currentImpact = impactBreakdown[amount] || {
    trees: `${Math.round(amount * 2.2)} native trees planted`,
    families: `${Math.round(amount * 0.25)} families supported with sustainable agriculture`,
    education: `${Math.round(amount * 0.4)} learning kits for rural children`
  };

  function selectPreset(val) {
    amount = val;
    customAmount = '';
    activeTab = 'preset';
  }

  function handleCustomInput(e) {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0) {
      amount = val;
    }
  }
</script>

<div class="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-stone-200 text-stone-900">
  <div class="flex items-center justify-between pb-6 border-b border-stone-200">
    <div>
      <span class="text-xs uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
        Direct Impact Calculator
      </span>
      <h3 class="text-2xl font-bold text-stone-900 mt-2">Choose Your Impact Level</h3>
    </div>
    <div class="hidden sm:block text-right">
      <span class="text-xs text-stone-500 block">Financial Transparency</span>
      <span class="text-sm font-bold text-emerald-700">96% Direct Program Use</span>
    </div>
  </div>

  <!-- Frequency Selector -->
  <div class="mt-6 flex bg-stone-100 p-1.5 rounded-xl border border-stone-200">
    <button
      type="button"
      on:click={() => frequency = 'monthly'}
      class="flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 {frequency === 'monthly' ? 'bg-emerald-800 text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'}"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Monthly Sustainer <span class="text-xs opacity-80 bg-amber-400 text-stone-900 px-1.5 py-0.5 rounded font-bold ml-1">Highest Impact</span>
    </button>
    <button
      type="button"
      on:click={() => frequency = 'one-time'}
      class="flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all {frequency === 'one-time' ? 'bg-emerald-800 text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'}"
    >
      One-Time Contribution
    </button>
  </div>

  <!-- Amount Buttons -->
  <div class="mt-6">
    <label class="block text-sm font-semibold text-stone-700 mb-2">Select Gift Amount (USD)</label>
    <div class="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
      {#each presets as val}
        <button
          type="button"
          on:click={() => selectPreset(val)}
          class="py-3 px-2 rounded-xl text-center font-bold text-base border-2 transition-all {amount === val && activeTab === 'preset' ? 'border-emerald-800 bg-emerald-50 text-emerald-950 shadow-sm' : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-stone-50'}"
        >
          ${val}
        </button>
      {/each}
    </div>
  </div>

  <!-- Custom Input -->
  <div class="mt-4">
    <div class="relative">
      <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-stone-400 font-bold text-lg">$</span>
      <input
        type="number"
        placeholder="Enter custom amount..."
        bind:value={customAmount}
        on:input={handleCustomInput}
        on:focus={() => activeTab = 'custom'}
        class="w-full pl-8 pr-4 py-3 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-emerald-700 text-stone-900 font-semibold"
      />
    </div>
  </div>

  <!-- Realtime Impact Card -->
  <div class="mt-6 bg-gradient-to-br from-emerald-900 to-stone-900 text-stone-100 p-5 rounded-xl">
    <div class="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      What Your ${amount} {frequency === 'monthly' ? '/ month' : ''} Generates:
    </div>

    <ul class="space-y-2.5 text-sm">
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-400 mt-0.5">✓</span>
        <span class="text-stone-200"><strong class="text-white">{currentImpact.trees}</strong> in critical watershed areas</span>
      </li>
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-400 mt-0.5">✓</span>
        <span class="text-stone-200"><strong class="text-white">{currentImpact.families}</strong></span>
      </li>
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-400 mt-0.5">✓</span>
        <span class="text-stone-200"><strong class="text-white">{currentImpact.education}</strong></span>
      </li>
    </ul>

    <div class="mt-4 pt-3 border-t border-emerald-800/80 flex items-center justify-between text-xs text-stone-300">
      <span>Tax-deductible non-profit receipt issued</span>
      <span class="font-mono text-emerald-300">Yayasan Bumi Bersama</span>
    </div>
  </div>

  <!-- Checkout Button -->
  <div class="mt-6">
    <a
      href="#donate-form-section"
      class="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-center py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-emerald-900/20 flex items-center justify-center gap-3 group"
    >
      <span>Proceed to Donate ${amount} {frequency === 'monthly' ? 'Monthly' : 'Now'}</span>
      <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
</div>
