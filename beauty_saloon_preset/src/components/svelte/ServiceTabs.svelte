<script lang="ts">
	let {
		categories,
	}: {
		categories: Array<{
			cat: string;
			img: string;
			items: Array<{ name: string; desc: string; duration: string }>;
		}>;
	} = $props();

	let active = $state(0);
	const current = $derived(categories[active]);
</script>

<div class="grid gap-10 lg:grid-cols-12">
	<!-- Tabs -->
	<div class="lg:col-span-4">
		<div class="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
			{#each categories as c, i}
				<button
					class="group flex shrink-0 items-center gap-3 rounded-2xl border-2 border-ink bg-cream px-5 py-4 text-left shadow-[var(--shadow-sticker)] transition-all duration-300 lg:w-full"
					class:bg-violet={active === i}
					class:text-cream={active === i}
					class:hover:-translate-y-1={active !== i}
					class:rotate-0={active === i}
					class:!rotate-2={active !== i}
					onclick={() => (active = i)}
					aria-pressed={active === i}
				>
					<span class="mag-number text-2xl {active === i ? 'text-lime' : 'text-pink'}">{String(i + 1).padStart(2, '0')}</span>
					<span class="flex-1">
						<span class="block font-display text-base font-black">{c.cat}</span>
						<span class="block text-[0.65rem] font-bold uppercase tracking-widest opacity-60">{c.items.length} treatment</span>
					</span>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 {active === i ? 'opacity-100 -rotate-45' : ''}"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
				</button>
			{/each}
		</div>
		<div class="mt-8 hidden rounded-2xl border-2 border-ink bg-lime p-5 lg:block">
			<p class="font-sans text-xs font-bold uppercase tracking-widest">Catatan</p>
			<p class="mt-2 font-display text-sm font-bold leading-snug">
				Harga setiap treatment akan diisi tim kami — kamu bisa langsung tanya via WhatsApp.
			</p>
		</div>
	</div>

	<!-- Active category -->
	<div class="lg:col-span-8">
		<div class="grid gap-8 md:grid-cols-12">
			<div class="img-frame relative hidden overflow-hidden rounded-[var(--radius-blob)] md:col-span-5 md:block">
				<img src={current.img} alt={current.cat} loading="lazy" class="absolute inset-0 h-full w-full object-cover" />
				<span class="sticker sticker--cream absolute left-3 top-3" style="--tilt:-2deg">{current.cat}</span>
			</div>
			<ul class="space-y-4 md:col-span-7">
				{#each current.items as it, i}
					<li
						class="card-raise rounded-2xl border-2 border-ink bg-cream-2 p-5 shadow-[var(--shadow-sticker)]"
					>
						<div class="flex items-start justify-between gap-4">
							<div>
								<h3 class="font-display text-lg font-black">{it.name}</h3>
								<p class="mt-1 font-sans text-sm leading-relaxed text-ink/70">{it.desc}</p>
							</div>
							<span class="sticker sticker--pink shrink-0 !rotate-2" style="--tilt:0deg"><span class="flex items-center gap-1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="h-3 w-3"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>{it.duration}</span></span>
						</div>
						<div class="mt-4 flex flex-wrap items-center gap-3 border-t-2 border-dashed border-ink/15 pt-3">
							<span class="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-ink/50">Harga mulai</span>
							<span class="inline-flex items-center gap-1 rounded-full border-2 border-dashed border-pink bg-pink-soft px-2 py-0.5 font-sans text-[0.65rem] font-bold uppercase tracking-wide text-pink-deep">
								<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-pink"></span>
								Perlu data client
							</span>
							<a href="/kontak" class="ml-auto pill-link !border-violet">Booking <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
