<script lang="ts">
	import { brand } from '../../data/site.js';

	let step = $state(0);
	let answers: string[] = $state([]);
	let showResult = $state(false);

	const questions = [
		{
			q: 'Apa yang paling kamu inginkan hari ini?',
			options: [
				{ label: 'Kulit bercahaya', icon: 'glow', value: 'facial' },
				{ label: 'Tubuh rileks total', icon: 'relax', value: 'body' },
				{ label: 'Rambut sehat berkilau', icon: 'hair', value: 'hair' },
				{ label: 'Tangan & kuku tertata', icon: 'nail', value: 'nail' },
			],
		},
		{
			q: 'Berapa waktu yang bisa kamu luangkan?',
			options: [
				{ label: 'Cepat, ±45 menit', value: 'quick' },
				{ label: 'Santai, 60–90 menit', value: 'mid' },
				{ label: 'Ritual penuh, 120+ menit', value: 'long' },
			],
		},
		{
			q: 'Prioritasmu saat memilih treatment?',
			options: [
				{ label: 'Hasil terlihat instan', value: 'result' },
				{ label: 'Relaksasi mendalam', value: 'relax' },
				{ label: 'Perawatan jangka panjang', value: 'prevent' },
			],
		},
	];

	const results = [
		{
			match: (a: string[]) => a[0] === 'facial',
			name: 'Signature Glow Facial',
			desc: 'Deep cleanse + eksfoliasi enzim + hidrasi intensif. Kulit tampak cerah segera setelah sesi.',
			time: '60 menit',
			tag: 'Paling dicari',
		},
		{
			match: (a: string[]) => a[0] === 'body' || (a[0] === 'facial' && a[2] === 'relax'),
			name: 'Deep Relax Massage + Hot Stone',
			desc: 'Perpaduan slow-pressure dan batu hangat untuk melepas ketegangan dari kepala sampai kaki.',
			time: '90 menit',
			tag: 'Terapis favorit',
		},
		{
			match: (a: string[]) => a[0] === 'hair',
			name: 'Hair Spa Ritual',
			desc: 'Pijat kepala, masker hangat, dan perawatan kutikula untuk kilau instan yang tahan lama.',
			time: '60 menit',
			tag: 'Ritual favorit',
		},
		{
			match: (a: string[]) => a[0] === 'nail',
			name: 'Luxe Manicure + Paraffin',
			desc: 'Perawatan tangan premium dengan pijat dan parafin hangat untuk hasil yang halus sempurna.',
			time: '75 menit',
			tag: 'Dari nail artist',
		},
		{
			match: () => true,
			name: 'Gold Radiance 24K',
			desc: 'Ritual tanda tangan kami — treatment wajah mewah dengan finishing emas 24K untuk kilau kelas dunia.',
			time: '90 menit',
			tag: 'Signature',
		},
	];

	const result = $derived(results.find((r) => r.match(answers)) ?? results[results.length - 1]);

	function answer(value: string) {
		answers = [...answers.slice(0, step), value];
		if (step < questions.length - 1) {
			step += 1;
		} else {
			showResult = true;
		}
	}
	function reset() {
		step = 0;
		answers = [];
		showResult = false;
	}

	const icons = {
		glow: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.9 2.6L22.5 18.5l-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z"/>',
		relax: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
		hair: '<path d="M4 19c0-8 3-14 16-15-1 8-4 11-8 11l-4-3M8 20c0-3 2-5 5-5l2-2"/>',
		nail: '<path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 6V5a1.5 1.5 0 0 1 3 0v5"/>',
	};
</script>

<div class="relative overflow-hidden rounded-[var(--radius-blob)] border-2 border-ink bg-ink text-cream shadow-[var(--shadow-float)]">
	<div class="noise absolute inset-0"></div>

	{#if !showResult}
		<div class="relative p-7 sm:p-12">
			<div class="mb-8 flex items-center justify-between">
				<span class="sticker sticker--lime" style="--tilt:-2deg">Kuis Treatment</span>
				<div class="flex items-center gap-2">
					{#each questions as _, i}
						<span class="h-2 w-6 rounded-full transition-all {i < step ? 'bg-pink' : i === step ? 'bg-lime' : 'bg-cream/20'}"></span>
					{/each}
				</div>
			</div>

			<h3 class="font-display text-3xl font-black leading-tight sm:text-4xl">
				{#each questions as q, i}
					{#if i === step}<span class="italic text-lime">Pertanyaan {step + 1}</span> — {q.q}{/if}
				{/each}
			</h3>

			<div class="mt-10 grid gap-4 sm:grid-cols-2">
				{#each questions[step].options as opt}
					<button
						class="group flex items-center gap-4 rounded-2xl border-2 border-cream/25 bg-cream/5 p-5 text-left transition-all hover:-translate-y-1 hover:border-lime hover:bg-lime hover:text-ink"
						onclick={() => answer(opt.value)}
					>
						<span class="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-cream/30 group-hover:border-ink">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">{@html icons[opt.icon ?? 'glow'] ?? icons.glow}</svg>
						</span>
						<span class="font-display text-lg font-bold">{opt.label}</span>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto h-5 w-5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
					</button>
				{/each}
			</div>

			<button class="mt-8 font-sans text-xs uppercase tracking-widest text-cream/50 underline-offset-4 hover:text-lime hover:underline" onclick={reset}>
				Ulangi kuis
			</button>
		</div>
	{:else}
		<div class="relative p-7 sm:p-12">
			<div class="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
				<span class="mag-number text-[5rem] leading-none text-lime sm:text-[7rem]">✓</span>
				<div class="flex-1">
					<span class="sticker sticker--pink" style="--tilt:1deg">{result.tag}</span>
					<h3 class="mt-4 font-display text-3xl font-black sm:text-5xl">{result.name}</h3>
					<p class="mt-3 max-w-xl font-sans text-sm leading-relaxed text-cream/75">{result.desc}</p>
					<div class="mt-5 flex flex-wrap items-center gap-3">
						<span class="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-4 py-2 font-sans text-xs font-bold uppercase tracking-widest">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="h-4 w-4"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
							{result.time}
						</span>
						<a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer" class="btn btn--lime">
							Booking {result.name}
						</a>
						<button class="pill-link !text-cream !border-lime" onclick={reset}>
							Coba lagi <span>↗</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
