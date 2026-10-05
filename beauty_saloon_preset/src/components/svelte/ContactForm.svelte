<script lang="ts">
	import { brand } from '../../data/site.js';

	let {
		treatments,
	}: {
		treatments: Array<{ name: string }>;
	} = $props();

	let form = $state({ nama: '', email: '', telepon: '', treatment: '', pesan: '' });
	let errors = $state<Record<string, string>>({});
	let submitted = $state(false);

	function validate() {
		const e: Record<string, string> = {};
		if (form.nama.trim().length < 3) e.nama = 'Nama minimal 3 karakter.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Masukkan email yang valid.';
		if (form.telepon.trim().length < 9) e.telepon = 'Nomor telepon tidak valid.';
		if (!form.treatment) e.treatment = 'Pilih treatment terlebih dahulu.';
		errors = e;
		return Object.keys(e).length === 0;
	}

	function submit(ev: SubmitEvent) {
		ev.preventDefault();
		if (!validate()) return;
		const msg = encodeURIComponent(
			`Halo ${brand.name}! Saya ingin booking konsultasi.\n\nNama: ${form.nama}\nTreatment: ${form.treatment}\nPesan: ${form.pesan || '-'}`
		);
		window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, '_blank');
		submitted = true;
	}
</script>

{#snippet field(id: string, labelText: string, opts: { type?: string; placeholder?: string } = {})}
		<div>
			<label for={id} class="mb-1.5 block font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink-3">
				{labelText}
			</label>
			<input
				id={id}
				type={opts.type ?? 'text'}
				placeholder={opts.placeholder}
				class="w-full rounded-xl border-2 border-ink bg-cream px-4 py-3 font-sans text-sm outline-none transition-all focus:border-pink focus:shadow-[var(--shadow-sticker)]"
				class:border-red-500={!!errors[id]}
				bind:value={form[id as keyof typeof form]}
			/>
			{#if errors[id]}
				<p class="mt-1 font-sans text-xs font-bold text-pink-deep">{errors[id]}</p>
			{/if}
		</div>
	{/snippet}

{#if submitted}
	<div class="rounded-[var(--radius-blob)] border-2 border-ink bg-lime p-8 text-center shadow-[var(--shadow-sticker)]">
		<p class="font-display text-2xl font-black">Terima kasih, {form.nama}!</p>
		<p class="mt-2 font-sans text-sm text-ink/70">
			Kami mengarahkanmu ke WhatsApp untuk konfirmasi jadwal. <br class="hidden sm:block" />
			Tim kami merespons dalam 15 menit di jam operasional.
		</p>
	</div>
{:else}
	<form onsubmit={submit} class="space-y-5" novalidate>
		<div class="grid gap-5 sm:grid-cols-2">
			{@render field('nama', 'Nama Lengkap', { placeholder: 'e.g. Sinta Wijaya' })}
			{@render field('email', 'Email', { type: 'email', placeholder: 'nama@email.com' })}
		</div>
		<div class="grid gap-5 sm:grid-cols-2">
			{@render field('telepon', 'No. WhatsApp', { type: 'tel', placeholder: '0812-XXXX-XXXX' })}
			<div>
				<label for="treatment" class="mb-1.5 block font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink-3">
					Treatment Pilihan
				</label>
				<select
					id="treatment"
					bind:value={form.treatment}
					class="w-full rounded-xl border-2 border-ink bg-cream px-4 py-3 font-sans text-sm outline-none transition-all focus:border-pink focus:shadow-[var(--shadow-sticker)]"
					class:border-red-500={!!errors.treatment}
				>
					<option value="" disabled>Pilih treatment…</option>
					{#each treatments as t}
						<option value={t.name}>{t.name}</option>
					{/each}
					<option value="Belum yakin — butuh rekomendasi">Belum yakin — butuh rekomendasi</option>
				</select>
				{#if errors.treatment}
					<p class="mt-1 font-sans text-xs font-bold text-pink-deep">{errors.treatment}</p>
				{/if}
			</div>
		</div>
		<div>
			<label for="pesan" class="mb-1.5 block font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink-3">
				Catatan (opsional)
			</label>
			<textarea
				id="pesan"
				rows="4"
				placeholder="Alergi, preferensi waktu, pertanyaan…"
				class="w-full resize-none rounded-xl border-2 border-ink bg-cream px-4 py-3 font-sans text-sm outline-none transition-all focus:border-pink focus:shadow-[var(--shadow-sticker)]"
				bind:value={form.pesan}
			></textarea>
		</div>
		<button type="submit" class="btn btn--violet w-full sm:w-auto">
			Kirim via WhatsApp
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
		</button>
		<p class="font-sans text-xs text-ink/50">
			Data Anda hanya digunakan untuk menjadwalkan konsultasi — tidak pernah dibagikan ke pihak lain.
		</p>
	</form>
{/if}
