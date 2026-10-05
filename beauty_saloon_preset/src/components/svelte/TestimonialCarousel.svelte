<script lang="ts">
	let {
		items,
		avatarMode = 'initials',
	}: {
		items: Array<{ quote: string; rating: number; treatment: string; initials?: string; name?: string; avatar?: string }>;
		avatarMode?: 'initials' | 'image';
	} = $props();

	let active = $state(0);
	let timer: ReturnType<typeof setInterval> | undefined;

	const label = (initials?: string) => initials ?? 'Setia';
	const stars = (n: number) => Array.from({ length: 5 }, (_, i) => i < n);

	function go(i: number) {
		active = (i + items.length) % items.length;
	}
	function restart() {
		clearInterval(timer);
		timer = setInterval(() => go(active + 1), 6500);
	}
	$effect(() => {
		restart();
		return () => clearInterval(timer);
	});
</script>

<div class="relative">
	<div class="relative overflow-hidden rounded-[var(--radius-blob)] border-2 border-ink bg-ink text-cream shadow-[var(--shadow-float)]">
		<div class="flex transition-transform duration-700 [transition-timing-function:var(--ease-snappy)]" style="transform: translateX(-{active * 100}%)">
			{#each items as it, i}
				<div class="w-full shrink-0 px-7 py-10 sm:px-14 sm:py-14">
					<div class="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
						<span class="mag-number text-[4.5rem] leading-none text-lime">{String(i + 1).padStart(2, '0')}</span>
						<div class="flex-1">
							<div class="mb-4 flex gap-1 text-lime" aria-label="Rating {it.rating} dari 5">
								{#each stars(it.rating) as on, s}
									<svg viewBox="0 0 24 24" class="h-4 w-4 {on ? 'fill-current' : 'opacity-25'}" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8-4.3-4.1 5.9-.9z"/></svg>
								{/each}
							</div>
							<blockquote class="font-display text-xl font-medium leading-snug italic sm:text-2xl">
								“{it.quote}”
							</blockquote>
							<div class="mt-6 flex items-center gap-4">
								{#if avatarMode === 'image' && it.avatar}
									<img src={it.avatar} alt="" class="h-12 w-12 rounded-full border-2 border-lime object-cover" loading="lazy" />
								{:else}
									<span class="grid h-12 w-12 place-items-center rounded-full border-2 border-lime bg-pink font-display text-sm font-black text-cream">
										{it.initials}
									</span>
								{/if}
								<div>
									<p class="font-sans text-sm font-bold">
										{#if it.name}{it.name}{:else}Klien {label(it.initials)}{/if}
									</p>
									<p class="font-sans text-xs uppercase tracking-widest text-cream/60">{it.treatment}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<button
			class="absolute left-3 top-1/2 hidden -translate-y-1/2 h-11 w-11 place-items-center rounded-full border-2 border-cream/40 transition-all hover:bg-lime hover:text-ink sm:grid"
			onclick={() => go(active - 1)}
			aria-label="Testimoni sebelumnya"
		>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M15 6l-6 6 6 6"/></svg>
		</button>
		<button
			class="absolute right-3 top-1/2 hidden -translate-y-1/2 h-11 w-11 place-items-center rounded-full border-2 border-cream/40 transition-all hover:bg-lime hover:text-ink sm:grid"
			onclick={() => go(active + 1)}
			aria-label="Testimoni berikutnya"
		>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M9 6l6 6-6 6"/></svg>
		</button>
	</div>

	<div class="mt-5 flex justify-center gap-2">
		{#each items as _, i}
			<button
				class="h-3 rounded-full transition-all duration-300 {i === active ? 'w-9 bg-pink' : 'w-3 bg-ink/25 hover:bg-ink/50'}"
				onclick={() => go(i)}
				aria-label="Ke testimoni {i + 1}"
			></button>
		{/each}
	</div>
</div>
