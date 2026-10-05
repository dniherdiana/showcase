<script lang="ts">
	let {
		items,
	}: {
		items: Array<{ img: string; cat: string; caption: string }>;
	} = $props();

	const cats = $derived(['Semua', ...Array.from(new Set(items.map((i) => i.cat)))]);
	let active = $state('Semua');
	let lightbox = $state<string | null>(null);

	const filtered = $derived(active === 'Semua' ? items : items.filter((i) => i.cat === active));

	function onKey(e: KeyboardEvent) {
		if (e.key === 'Escape') lightbox = null;
	}
</script>

<svelte:window onkeydown={onKey} />

<div class="mb-8 flex flex-wrap items-center justify-center gap-2">
	{#each cats as c}
		<button
			class="sticker {c === active ? 'sticker--pink' : 'sticker--cream'}"
			style="--tilt:{c === active ? '0deg' : '-1deg'}"
			onclick={() => (active = c)}
		>
			{c}
			<span class="rounded-full bg-ink/15 px-1.5 text-[0.6rem]">
				{c === 'Semua' ? items.length : items.filter((i) => i.cat === c).length}
			</span>
		</button>
	{/each}
</div>

<div class="masonry" style="columns:1; column-gap:1rem">
	{#each filtered as it, i}
		<figure
			class="card-raise mb-4 break-inside-avoid"
			style="--tilt:{(i % 3) - 1 + 0.5}deg"
		>
			<button
				class="img-frame group relative block w-full overflow-hidden rounded-[var(--radius-blob)] text-left"
				onclick={() => (lightbox = it.img)}
				aria-label="Perbesar foto: {it.caption}"
			>
				<img src={it.img} alt={it.caption} loading="lazy" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" style="min-height:220px; max-height:{200 + ((i * 37) % 160)}px" />
				<figcaption class="absolute inset-x-3 bottom-3 translate-y-2 rounded-full border-2 border-ink bg-cream px-4 py-2 font-sans text-[0.68rem] font-bold uppercase tracking-widest opacity-0 shadow-[var(--shadow-sticker)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
					<span class="text-pink">{it.cat}</span> · {it.caption}
				</figcaption>
			</button>
		</figure>
	{/each}
</div>

{#if lightbox}
	<div class="fixed inset-0 z-[70] grid place-items-center bg-ink/90 p-4 backdrop-blur-sm" onclick={() => (lightbox = null)} role="dialog" aria-modal="true" aria-label="Pratinjau foto">
		<div class="relative max-h-[85vh] max-w-4xl">
			<img src={lightbox} alt="" class="max-h-[85vh] w-auto rounded-2xl border-2 border-cream shadow-2xl" />
			<button class="absolute -right-4 -top-4 grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-lime shadow-[var(--shadow-sticker)]" onclick={() => (lightbox = null)} aria-label="Tutup">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" class="h-5 w-5"><path d="M6 6l12 12M18 6L6 18"/></svg>
			</button>
		</div>
	</div>
{/if}

<style>
	@media (min-width: 640px) {
		.masonry { columns: 2; }
	}
	@media (min-width: 1024px) {
		.masonry { columns: 3; }
	}
</style>
