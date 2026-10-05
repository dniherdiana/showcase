<script lang="ts">
	let {
		before,
		after,
		beforeLabel = 'Sebelum',
		afterLabel = 'Sesudah',
	}: {
		before: string;
		after: string;
		beforeLabel?: string;
		afterLabel?: string;
	} = $props();

	let pos = 50;
	let container: HTMLDivElement | undefined = $state();

	function move(clientX: number) {
		if (!container) return;
		const rect = container.getBoundingClientRect();
		pos = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
	}

	function onDown(e: PointerEvent) {
		(container as HTMLDivElement).setPointerCapture(e.pointerId);
		move(e.clientX);
	}
	function onMove(e: PointerEvent) {
		if (e.buttons === 1) move(e.clientX);
	}
</script>

<div
	bind:this={container}
	class="img-frame relative aspect-[4/5] w-full touch-none select-none overflow-hidden rounded-[var(--radius-blob)] cursor-ew-resize"
	role="slider"
	aria-label="Perbandingan sebelum dan sesudah"
	aria-valuenow={pos}
	onpointerdown={onDown}
	onpointermove={onMove}
>
	<img src={after} alt={afterLabel} class="absolute inset-0 h-full w-full object-cover" draggable="false" />
	<div class="absolute inset-0 overflow-hidden" style="width:{pos}%">
		<img src={before} alt={beforeLabel} class="absolute inset-0 h-full w-full object-cover" style="width:{container?.clientWidth ?? 0}px; max-width:none" draggable="false" />
	</div>

	<div class="absolute inset-y-0 z-10 w-1 bg-lime shadow-[0_0_0_2px_var(--color-ink)]" style="left:{pos}%"></div>
	<button
		class="absolute top-1/2 z-20 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-lime shadow-[var(--shadow-sticker)] text-ink"
		style="left:{pos}%"
		aria-hidden="true"
		tabindex="-1"
	>
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
			<path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
		</svg>
	</button>

	<span class="absolute left-3 top-3 rounded-full border-2 border-ink bg-cream px-3 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-widest shadow-[var(--shadow-sticker)]">
		{beforeLabel}
	</span>
	<span class="absolute right-3 top-3 rounded-full border-2 border-ink bg-pink px-3 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-widest text-cream shadow-[var(--shadow-sticker)]">
		{afterLabel}
	</span>
</div>
