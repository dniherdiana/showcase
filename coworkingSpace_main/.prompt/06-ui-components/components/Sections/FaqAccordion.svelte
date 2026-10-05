<script>
  /** @type {{ items?: Array<{q_id: string, q_en: string, a_id: string, a_en: string}> }} */
  let { items = [] } = $props();

  let openIndex = $state(-1);

  function toggle(index) {
    openIndex = openIndex === index ? -1 : index;
  }
</script>

<div style="display:flex;flex-direction:column;">
  {#each items as item, i (i)}
    <div style="border-top:1px solid var(--color-line-hard);">
      <button
        onclick={() => toggle(i)}
        style="
          width:100%;display:grid;grid-template-columns:auto 1fr auto;gap:1.5rem;
          align-items:center;padding:1.5rem 0;cursor:pointer;text-align:left;
          background:transparent;
        "
      >
        <span style="font-family:var(--font-mono);font-size:clamp(1.5rem,2.5vw,2.5rem);font-weight:300;line-height:1;color:var(--color-brand-primary);opacity:0.5;">
          {String(i + 1).padStart(2, '0')}
        </span>
        <span style="font-family:var(--font-display);font-weight:600;font-size:clamp(0.9rem,1.5vw,1.1rem);color:var(--color-text-primary);line-height:1.3;">
          <span data-lang="id">{item.q_id}</span>
          <span data-lang="en">{item.q_en}</span>
        </span>
        <span style="
          font-family:var(--font-mono);font-size:1.25rem;color:var(--color-text-tertiary);
          transform:rotate({openIndex === i ? '45deg' : '0deg'});
          transition:transform 0.4s cubic-bezier(0.16,1,0.3,1);
        ">+</span>
      </button>

      <div style="
        max-height:{openIndex === i ? '500px' : '0'};
        opacity:{openIndex === i ? '1' : '0'};
        overflow:hidden;
        transition:max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease;
      ">
        <div style="padding:0 0 2rem 0;margin-left:calc(2.5rem + 1.5rem);">
          <p style="font-size:0.9rem;color:var(--color-text-secondary);line-height:1.8;max-width:600px;">
            <span data-lang="id">{item.a_id}</span>
            <span data-lang="en">{item.a_en}</span>
          </p>
        </div>
      </div>
    </div>
  {/each}
  <div style="border-top:1px solid var(--color-line-hard);"></div>
</div>
