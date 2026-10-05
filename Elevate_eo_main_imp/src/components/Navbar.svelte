<script>
  import { onMount } from 'svelte';

  export let currentPath = '/';

  let scrolled = false;
  let mobileMenuOpen = false;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Layanan', href: '/services' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Kontak', href: '/contact' }
  ];

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 40;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header
  class={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/60 py-4 shadow-xl'
      : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
  }`}
>
  <div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
    <!-- Brand Logo -->
    <a href="/" class="group flex items-center gap-3 z-50">
      <span class="font-display-expressive font-extrabold text-2xl md:text-3xl tracking-tighter text-white uppercase group-hover:text-amber-400 transition-colors">
        ELEVATE<span class="text-amber-500 font-serif font-normal italic lowercase text-lg md:text-xl">.eo</span>
      </span>
      <span class="hidden sm:inline-block h-4 w-px bg-white/20"></span>
      <span class="hidden sm:inline-block text-[10px] tracking-widest uppercase font-mono text-neutral-400">
        Creative Event Studio
      </span>
    </a>

    <!-- Desktop Nav Links -->
    <nav class="hidden md:flex items-center gap-8">
      {#each navLinks as link}
        <a
          href={link.href}
          class={`relative font-sans text-sm font-medium tracking-wide transition-colors py-1 ${
            currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href))
              ? 'text-white font-semibold'
              : 'text-neutral-300 hover:text-white'
          }`}
        >
          {link.name}
          {#if currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href))}
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 rounded-full"></span>
          {/if}
        </a>
      {/each}
    </nav>

    <!-- Header Action Button -->
    <div class="hidden md:flex items-center gap-4">
      <a
        href="/contact"
        class="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider text-neutral-950 uppercase bg-amber-400 hover:bg-amber-300 transition-all rounded-full shadow-lg shadow-amber-400/10 hover:shadow-amber-400/25 transform hover:-translate-y-0.5"
      >
        Jadwalkan Meeting
      </a>
    </div>

    <!-- Mobile Menu Toggle Button -->
    <button
      on:click={toggleMobileMenu}
      class="md:hidden z-50 p-2 text-white hover:text-amber-400 focus:outline-none"
      aria-label="Toggle Navigation Menu"
    >
      {#if mobileMenuOpen}
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      {/if}
    </button>
  </div>

  <!-- Mobile Dropdown Navigation -->
  {#if mobileMenuOpen}
    <div
      class="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-neutral-950/95 backdrop-blur-xl z-40 flex flex-col justify-center px-8 pt-20 pb-12"
    >
      <div class="space-y-6">
        <p class="text-xs font-mono tracking-widest text-amber-400/80 uppercase mb-4">Navigasi Utama</p>
        {#each navLinks as link}
          <div>
            <a
              href={link.href}
              on:click={() => (mobileMenuOpen = false)}
              class={`block font-serif text-3xl md:text-4xl transition-colors ${
                currentPath === link.href ? 'text-amber-400 italic pl-2 border-l-2 border-amber-400' : 'text-white hover:text-amber-200'
              }`}
            >
              {link.name}
            </a>
          </div>
        {/each}
      </div>

      <div class="mt-12 pt-8 border-t border-neutral-800 space-y-4">
        <a
          href="/contact"
          on:click={() => (mobileMenuOpen = false)}
          class="block w-full py-4 text-center text-sm font-semibold tracking-widest uppercase bg-amber-400 text-neutral-950 rounded-lg shadow-lg"
        >
          Jadwalkan Meeting
        </a>
        <p class="text-xs text-neutral-400 text-center font-mono">
          Jakarta • Bandung • Surabaya • Bali
        </p>
      </div>
    </div>
  {/if}
</header>
