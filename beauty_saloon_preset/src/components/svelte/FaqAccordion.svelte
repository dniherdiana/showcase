<script lang="ts">
	let {
		items,
	}: {
		items: Array<{ q: string; a: string }>;
	} = $props();

	let open = $state<number | null>(0);
</script>

<div class="space-y-4">
	{#each items as it, i}
		<div
			class="overflow-hidden rounded-2xl border-2 border-ink bg-cream transition-all duration-300"
			class:shadow-[var(--shadow-sticker)]={open === i}
		>
			<button
				class="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
				onclick={() => (open = open === i ? null : i)}
				aria-expanded={open === i}
				aria-controls={`faq-panel-${i}`}
			>
				<span class="mag-number text-xl text-pink">{String(i + 1).padStart(2, '0')}</span>
				<span class="flex-1 font-display text-base font-bold leading-snug sm:text-lg">{it.q}</span>
				<span
					class="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink transition-transform duration-300 {open === i ? 'rotate-45 bg-pink text-cream' : 'bg-lime'}"
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" class="h-4 w-4"><path d="M12 5v14M5 12h14"/></svg>
				</span>
			</button>
			<div
				id={`faq-panel-${i}`}
				class="grid transition-[grid-template-rows] duration-300"
				style={`grid-template-rows:${open === i ? '1fr' : '0fr'}`}
			>
				<div class="overflow-hidden">
					<p class="px-5 pb-6 pl-[4.2rem] font-sans text-sm leading-relaxed text-ink/75 sm:px-7 sm:pl-[4.7rem]">
						{it.a}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>
