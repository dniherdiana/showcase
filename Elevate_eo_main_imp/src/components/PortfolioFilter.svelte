<script>
  import { fade, slide } from 'svelte/transition';

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'corporate', label: 'Corporate Event' },
    { id: 'wedding', label: 'Wedding & Gala' },
    { id: 'exhibition', label: 'Exhibition & Expo' },
    { id: 'gathering', label: 'Gathering & Retreat' },
    { id: 'launching', label: 'Brand Activation & Launching' }
  ];

  let selectedCategory = 'all';
  let activeModalProject = null;

  const projects = [
    {
      id: 1,
      title: 'National Digital Banking Summit 2024',
      client: 'PT Bank Central Nusantara Tbk',
      category: 'corporate',
      categoryLabel: 'Corporate Event',
      year: '2024',
      location: 'Ritz-Carlton Pacific Place, Jakarta',
      coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      scopeOfWork: ['Konsep Stage 3D', 'Manajemen 1,200+ VIP Guest', 'Live Streaming Broadcast', 'LED Mapping & Lighting'],
      challenge: 'Mengakomodasi 1,200 eksekutif perbankan nasional dengan sistem registrasi zero-delay dan pengamanan VVIP protokol presiden.',
      solution: 'Membuat infrastruktur RFID smart check-in dan panggung 360-derajat melengkung 48 meter dengan tata suara akustik khusus ballroom.',
      result: '100% kepuasan klien, 4.500+ penonton live streaming, dan apresiasi khusus dari jajaran direksi perbankan nasional.'
    },
    {
      id: 2,
      title: 'Royal Heritage Botanical Wedding',
      client: 'Anindya & Raditya',
      category: 'wedding',
      categoryLabel: 'Wedding & Gala',
      year: '2024',
      location: 'Plataran Candi Borobudur, Magelang',
      coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      scopeOfWork: ['Full Wedding Concept & Flow', 'Floral Installation Design', 'Orchestra Production', 'VVIP Hospitality'],
      challenge: 'Menyusun acara pernikahan di area outdoor cagar budaya dengan kondisi cuaca dinamis dan 800 tamu undangan papan atas.',
      solution: 'Membuat glass dome transparan tahan hujan 1.500 m2 dengan koordinasi orkestra live 40 musisi dan pencahayaan candi sinematik.',
      result: 'Eksekusi sempurna 10 jam tanpa kendala teknis dan diliput oleh majalah gaya hidup nasional.'
    },
    {
      id: 3,
      title: 'IndoTech Expo & Future Forum 2024',
      client: 'Kementerian Riset & Konsorsium Teknologi',
      category: 'exhibition',
      categoryLabel: 'Exhibition & Expo',
      year: '2024',
      location: 'Indonesia Convention Exhibition (ICE) BSD',
      coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
      scopeOfWork: ['Master Exhibition Planning', '150 Booth Construction', 'Keynote Stage Production', 'Media Center'],
      challenge: 'Merancang layout 2 Hall (10.000 m2) yang interaktif untuk 150 perusahaan teknologi dalam waktu setup singkat 36 jam.',
      solution: 'Menggunakan modular aluminium frame ramah lingkungan dengan zoning tematis dan audio directional untuk kenyamanan booth.',
      result: '35,000+ pengunjung selama 3 hari expo dan transaksi B2B senilai miliaran rupiah.'
    },
    {
      id: 4,
      title: 'Global FMCG Annual Leadership Retreat',
      client: 'Unilux Global Indonesia',
      category: 'gathering',
      categoryLabel: 'Gathering & Retreat',
      year: '2023',
      location: 'Ayana Resort & Spa, Jimbaran Bali',
      coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      scopeOfWork: ['3-Day Experience Itinerary', 'Gala Dinner Awarding', 'Team Synergy Outdoor', 'Artistic Stage Setup'],
      challenge: 'Menciptakan momentum apresiasi karyawan yang berkesan untuk 400 manajer senior dari 12 cabang kota.',
      solution: 'Menyajikan sunset cocktail dinner di tepi tebing pantai dengan hiburan tari kontemporer dan award ceremony bertema sinematik.',
      result: 'Retreat dengan rating evaluasi internal 4.95/5.00 dan peningkatan semangat kolaborasi antar tim.'
    },
    {
      id: 5,
      title: 'Next-Gen EV Flagship Launch',
      client: 'AeroMotors Mobility Corporation',
      category: 'launching',
      categoryLabel: 'Brand Activation & Launching',
      year: '2024',
      location: 'Senayan Park Promenade, Jakarta',
      coverImage: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
      scopeOfWork: ['Creative Reveal Mechanism', 'Holographic Stage', 'KOL & Influencer Experience', 'Interactive Test Drive'],
      challenge: 'Meluncurkan mobil listrik flagship dengan standar keamanan global dan wow-factor yang memukau media massa nasional.',
      solution: 'Merancang panggung air melayang dengan proyeksi efek hologram 3D dan momentum unboxing mobil dari glass container berkabut.',
      result: 'Diberitakan di 80+ media nasional, 2.300+ SPK inden dalam kurun waktu 48 jam peluncuran.'
    },
    {
      id: 6,
      title: 'Clifftop Bali Nuptials & Symphony',
      client: 'Clara & Michael',
      category: 'wedding',
      categoryLabel: 'Wedding & Gala',
      year: '2023',
      location: 'Uluwatu Ocean Front, Bali',
      coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
      scopeOfWork: ['Destination Wedding Management', 'Intimate Sunset Ceremony', 'After-Party Production', 'Logistics'],
      challenge: 'Mengoordinasi kedatangan 200 tamu dari 8 negara dengan protokol perjalanan privat dan jam penerbangan terbatas.',
      solution: 'Layanan VVIP concierge dedicated dari bandara hingga akomodasi Villa, disempurnakan dengan fireworks show di tepi samudra.',
      result: 'Pengalaman pesta pernikahan yang hangat, elegan, dan berjalan presisi dari awal hingga penerbangan pulang tamu.'
    },
    {
      id: 7,
      title: 'Future Mobility Automotive Summit',
      client: 'Asosiasi Otomotif Indonesia',
      category: 'corporate',
      categoryLabel: 'Corporate Event',
      year: '2023',
      location: 'Grand Ballroom Hotel Mulia, Jakarta',
      coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      scopeOfWork: ['Plenary Session Management', 'Ministerial Reception', 'Press Conference Suite', 'Multi-Language Audio'],
      challenge: 'Menyelenggarakan konferensi internasional dengan partisipasi 3 menteri Republik Indonesia dan delegasi dari 15 negara.',
      solution: 'Sistem pengamanan protokol khusus dengan tata panggung audio visual standar diplomasi tinggi.',
      result: 'Konferensi berjalan mulus dan melahirkan nota kesepahaman kerja sama energi terbarukan.'
    },
    {
      id: 8,
      title: 'Luxe Beauty Brand Immersion Expo',
      client: 'Velvet Paris Cosmetics',
      category: 'launching',
      categoryLabel: 'Brand Activation & Launching',
      year: '2024',
      location: 'Central Park Atrium, Jakarta',
      coverImage: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
      scopeOfWork: ['Pop-up Architecture', 'Sensory Experiential Booth', 'Masterclass Session', 'VIP Reception'],
      challenge: 'Mengubah area komersial seluas 400 m2 menjadi galeri kecantikan futuristik interaktif selama 7 hari berturut-turut.',
      solution: 'Membuat paviliun cermin kinetik dengan pencahayaan warna warni terkontrol dan aroma diffuser terintegrasi.',
      result: '18.000+ pengunjung berpartisipasi dan memecahkan rekor penjualan produk baru terbanyak di kuartal pertama.'
    }
  ];

  $: filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  function openProjectModal(project) {
    activeModalProject = project;
  }

  function closeModal() {
    activeModalProject = null;
  }
</script>

<div class="space-y-12">
  <!-- Filter Tabs Bar -->
  <div class="flex flex-wrap items-center justify-center gap-3 border-b border-neutral-800/80 pb-6">
    {#each categories as cat}
      <button
        on:click={() => (selectedCategory = cat.id)}
        class={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 uppercase ${
          selectedCategory === cat.id
            ? 'bg-amber-400 text-neutral-950 shadow-lg shadow-amber-400/20 font-semibold scale-105'
            : 'bg-neutral-900/80 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
        }`}
      >
        {cat.label}
        <span class="ml-1 text-[10px] opacity-70 font-mono">
          ({cat.id === 'all' ? projects.length : projects.filter(p => p.category === cat.id).length})
        </span>
      </button>
    {/each}
  </div>

  <!-- Editorial Spatial Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each filteredProjects as project (project.id)}
      <div
        transition:fade={{ duration: 250 }}
        class="group relative bg-neutral-900/60 border border-neutral-800/80 rounded-xl overflow-hidden flex flex-col justify-between hover:border-amber-400/50 transition-all duration-500 hover:-translate-y-1 shadow-2xl"
      >
        <div>
          <!-- Cinematic Image Frame -->
          <div class="relative aspect-[16/10] overflow-hidden bg-neutral-950">
            <img
              src={project.coverImage}
              alt={project.title}
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
            
            <span class="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono tracking-widest text-amber-300 uppercase">
              {project.categoryLabel}
            </span>

            <span class="absolute top-4 right-4 text-xs font-mono text-neutral-300 bg-black/60 px-2.5 py-1 rounded">
              {project.year}
            </span>
          </div>

          <!-- Project Card Meta & Story Preview -->
          <div class="p-6 space-y-4">
            <div class="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
              {project.client} • {project.location}
            </div>
            <h3 class="font-serif text-2xl text-white group-hover:text-amber-300 transition-colors font-medium leading-snug">
              {project.title}
            </h3>
            
            <p class="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
              {project.challenge}
            </p>

            <!-- Scope Tags -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              {#each project.scopeOfWork.slice(0, 3) as scope}
                <span class="text-[10px] font-mono text-neutral-300 bg-neutral-800/90 px-2.5 py-1 rounded border border-neutral-700/50">
                  {scope}
                </span>
              {/each}
              {#if project.scopeOfWork.length > 3}
                <span class="text-[10px] font-mono text-amber-400/80 bg-neutral-800/50 px-2 py-1 rounded">
                  +{project.scopeOfWork.length - 3} lainnya
                </span>
              {/if}
            </div>
          </div>
        </div>

        <!-- Card Footer Trigger -->
        <div class="p-6 pt-0 mt-4 border-t border-neutral-800/50 flex items-center justify-between">
          <span class="text-[11px] font-mono text-neutral-400">Dokumentasi & Studi Kasus</span>
          <button
            on:click={() => openProjectModal(project)}
            class="text-xs font-semibold tracking-wider text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 uppercase transition-colors"
          >
            Buka Cerita Event
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    {/each}
  </div>

  <!-- Detailed Modal Drawer for Event Story -->
  {#if activeModalProject}
    <div
      transition:fade={{ duration: 200 }}
      class="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        transition:slide={{ duration: 300 }}
        class="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
      >
        <!-- Modal Sticky Header -->
        <div class="sticky top-0 bg-neutral-900/95 backdrop-blur-md px-6 py-4 border-b border-neutral-800 flex items-center justify-between z-20">
          <span class="text-xs font-mono tracking-widest text-amber-400 uppercase">
            {activeModalProject.categoryLabel} • {activeModalProject.year}
          </span>
          <button
            on:click={closeModal}
            class="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
            aria-label="Tutup Modal"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal Content Body -->
        <div class="p-6 sm:p-10 space-y-8">
          <!-- Main Hero Image -->
          <div class="relative aspect-[16/9] rounded-xl overflow-hidden bg-black">
            <img
              src={activeModalProject.coverImage}
              alt={activeModalProject.title}
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Title & Meta -->
          <div class="space-y-3">
            <span class="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
              Klien: {activeModalProject.client} — Lokasi: {activeModalProject.location}
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-white font-medium">
              {activeModalProject.title}
            </h2>
          </div>

          <!-- Scope of Work list -->
          <div class="bg-neutral-950 p-6 rounded-xl border border-neutral-800/80 space-y-3">
            <h3 class="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">Scope of Work (Ruang Lingkup)</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {#each activeModalProject.scopeOfWork as scope}
                <div class="flex items-center gap-2 text-xs text-neutral-200">
                  <span class="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                  {scope}
                </div>
              {/each}
            </div>
          </div>

          <!-- Challenge, Solution, Result Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-5 bg-neutral-950/60 rounded-xl border border-neutral-800 space-y-2">
              <h4 class="text-xs font-mono text-neutral-400 uppercase tracking-widest">Tantangan (Challenge)</h4>
              <p class="text-xs text-neutral-300 leading-relaxed">{activeModalProject.challenge}</p>
            </div>

            <div class="p-5 bg-neutral-950/60 rounded-xl border border-neutral-800 space-y-2">
              <h4 class="text-xs font-mono text-amber-400 uppercase tracking-widest">Solusi (Solution)</h4>
              <p class="text-xs text-neutral-300 leading-relaxed">{activeModalProject.solution}</p>
            </div>

            <div class="p-5 bg-neutral-950/60 rounded-xl border border-amber-500/30 space-y-2">
              <h4 class="text-xs font-mono text-amber-300 uppercase tracking-widest">Hasil (Result)</h4>
              <p class="text-xs text-neutral-200 leading-relaxed font-medium">{activeModalProject.result}</p>
            </div>
          </div>

          <div class="pt-4 flex items-center justify-between border-t border-neutral-800">
            <span class="data-client-badge">
              [PERLU DATA CLIENT: video recap link]
            </span>
            <a
              href="/contact"
              class="px-6 py-3 text-xs font-semibold tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-full uppercase transition-colors"
            >
              Diskusi Event Serupa
            </a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
