<script>
  export let items = [];

  let activeFilter = 'all';

  function filter(category) {
    activeFilter = category;
  }

  $: filtered = activeFilter === 'all' ? items : items.filter(item => item.category === activeFilter);

  function filterClass(cat) {
    const base = 'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ';
    if (activeFilter === cat) {
      return base + 'bg-sage text-white';
    }
    return base + 'bg-white text-charcoal border border-charcoal/10 hover:border-sage';
  }
</script>

<div class="gallery-filter-wrapper">
  <div class="flex flex-wrap justify-center gap-3 mb-12">
    {#each ['all', 'alam', 'budaya', 'petualangan'] as cat}
      <button class={filterClass(cat)} on:click={() => filter(cat)}>
        {cat === 'all' ? 'Semua' : cat === 'alam' ? 'Alam' : cat === 'budaya' ? 'Budaya' : 'Petualangan'}
      </button>
    {/each}
  </div>

  <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
    {#each filtered as item}
      <div class="break-inside-avoid gallery-item" data-category={item.category}>
        <div class="relative group overflow-hidden rounded-2xl">
          <img src={item.src} alt={item.alt} class="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div>
              <p class="text-white font-heading font-semibold">{item.title}</p>
              <p class="text-white/70 text-sm">{item.label}</p>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>