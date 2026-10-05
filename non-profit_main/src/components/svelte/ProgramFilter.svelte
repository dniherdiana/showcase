<script>
  export let initialCategory = 'all';

  let selectedCategory = initialCategory;
  let searchQuery = '';

  const programs = [
    {
      id: 1,
      category: 'environment',
      categoryLabel: 'Environment',
      title: 'Community Forest & Watershed Guardian Initiative',
      description: 'Engaging 45 highland villages to reforest degraded river basins with native tree species, establishing community-managed indigenous forest sanctuaries.',
      impact: '120,000+ native trees planted across 850 hectares',
      location: 'Central & East Mountain Ridges',
      status: 'Active Field Operations',
      image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=800&auto=format&fit=crop',
      beneficiaries: '12,400 villagers'
    },
    {
      id: 2,
      category: 'education',
      categoryLabel: 'Education',
      title: 'Rural Eco-Literacy & Mobile Solar Schools',
      description: 'Deploying off-grid solar-powered digital learning pods and hands-on environmental stewardship curricula to remote village elementary schools.',
      impact: '34 rural learning hubs built with 4,200 active young learners',
      location: 'Outer Island & Highland Districts',
      status: 'Expanding to 10 New Sites',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
      beneficiaries: '4,200 children'
    },
    {
      id: 3,
      category: 'community',
      categoryLabel: 'Community Development',
      title: 'Regenerative Farming & Micro-Cooperative Guilds',
      description: 'Training local farmers in organic agroforestry, soil revival, and connecting village cooperatives directly to fair-trade ethical markets.',
      impact: '80+ local community groups & 65% farm income increase',
      location: '145 Partner Villages',
      status: 'Active Guild Network',
      image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=800&auto=format&fit=crop',
      beneficiaries: '3,800 farm families'
    },
    {
      id: 4,
      category: 'disaster',
      categoryLabel: 'Disaster Relief',
      title: 'Climate Resilience & Rapid Community Response Network',
      description: 'Pre-positioning emergency clean water purification units, shelter kits, and community disaster preparedness training for extreme weather events.',
      impact: '24 rapid emergency deployments with zero mortality',
      location: 'High-risk Flood & Landslide Basins',
      status: 'Standby & Preparedness',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop',
      beneficiaries: '15,000+ emergency beneficiaries'
    },
    {
      id: 5,
      category: 'health',
      categoryLabel: 'Health Campaign',
      title: 'Clean Water Springs & Community Health Stations',
      description: 'Constructing gravity-fed spring water pipelines, sanitation infrastructure, and training rural health volunteers in preventative wellness.',
      impact: '98% reduction in waterborne illnesses across 40 target villages',
      location: 'Coastal & Remote Valley Communities',
      status: 'Active Pipeline Infrastructure',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
      beneficiaries: '9,500 residents'
    },
    {
      id: 6,
      category: 'environment',
      categoryLabel: 'Environment',
      title: 'Coastal Mangrove Sanctuary & Sustainable Fishery',
      description: 'Restoring degraded tidal mangrove belts to protect coastal hamlets from erosion while building nursery zones for native marine life.',
      impact: '45,000 mangrove saplings rooted along 12km coastline',
      location: 'Southern Archipelago Estuaries',
      status: 'Ongoing Planting & Protection',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
      beneficiaries: '1,900 coastal fishermen'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'environment', label: 'Environment' },
    { id: 'education', label: 'Education' },
    { id: 'community', label: 'Community Development' },
    { id: 'disaster', label: 'Disaster Relief' },
    { id: 'health', label: 'Health Campaign' }
  ];

  $: filteredPrograms = programs.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
</script>

<div>
  <!-- Search and Category Filters -->
  <div class="space-y-4">
    <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-stone-100 p-3 rounded-2xl border border-stone-200">
      <!-- Category Tabs -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        {#each categories as cat}
          <button
            type="button"
            on:click={() => selectedCategory = cat.id}
            class="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all {selectedCategory === cat.id ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200'}"
          >
            {cat.label}
          </button>
        {/each}
      </div>

      <!-- Search Input -->
      <div class="relative min-w-[240px]">
        <input
          type="text"
          placeholder="Search programs..."
          bind:value={searchQuery}
          class="w-full pl-9 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
        />
        <svg class="w-4 h-4 text-stone-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </div>

  <!-- Programs Grid -->
  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each filteredPrograms as item}
      <article class="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
        <div>
          <!-- Image frame -->
          <div class="relative h-56 overflow-hidden bg-stone-100">
            <img 
              src={item.image} 
              alt={item.title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div class="absolute top-4 left-4 flex flex-wrap gap-2">
              <span class="bg-emerald-950/85 backdrop-blur-md text-emerald-200 border border-emerald-700/60 px-3 py-1 rounded-full text-xs font-semibold">
                {item.categoryLabel}
              </span>
            </div>
            <div class="absolute bottom-4 right-4 bg-stone-950/85 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-md text-xs font-mono">
              📍 {item.location}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span class="text-xs font-bold text-stone-500 uppercase tracking-wider">{item.status}</span>
            </div>

            <h3 class="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug mb-3">
              {item.title}
            </h3>

            <p class="text-sm text-stone-600 leading-relaxed mb-6">
              {item.description}
            </p>
          </div>
        </div>

        <!-- Card Footer Info -->
        <div class="p-6 pt-0 border-t border-stone-100 mt-2 bg-stone-50/50">
          <div class="mt-4 pt-3 space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="text-stone-500 font-medium">Measurable Impact:</span>
              <span class="font-bold text-emerald-800 text-right">{item.impact}</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-stone-500 font-medium">Direct Beneficiaries:</span>
              <span class="font-bold text-stone-800">{item.beneficiaries}</span>
            </div>
          </div>

          <a 
            href="/donate" 
            class="mt-5 w-full bg-stone-900 hover:bg-emerald-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <span>Support This Program</span>
            <span>→</span>
          </a>
        </div>
      </article>
    {/each}

    {#if filteredPrograms.length === 0}
      <div class="col-span-full text-center py-16 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
        <p class="text-stone-500 text-base font-semibold">No programs matched your criteria.</p>
        <button 
          type="button" 
          on:click={() => { selectedCategory = 'all'; searchQuery = ''; }}
          class="mt-3 text-sm text-emerald-800 underline font-bold"
        >
          Reset filters
        </button>
      </div>
    {/if}
  </div>
</div>
