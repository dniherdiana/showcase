<script>
  export let items = [
    {
      q: "Where does my donation actually go?",
      a: "96% of every dollar contributed goes directly into project execution in our partner villages—purchasing native seeds, clean water piping, solar equipment, and paying fair stipends to local community leaders. Only 4% supports essential administrative oversight and audited accounting."
    },
    {
      q: "How are village partner sites selected?",
      a: "We only enter rural communities upon invitation by local elders and village councils. We conduct a rigorous 3-month participatory assessment to ensure the initiative addresses real community needs, has indigenous community leadership, and preserves local ecology."
    },
    {
      q: "Can I inspect your financial reports and audits?",
      a: "Yes. In accordance with our core commitment to complete transparency, our audited annual financial statements and project impact evaluations are published every single year on our website and open for public review."
    },
    {
      q: "How can I volunteer in person or remotely?",
      a: "We welcome passionate individuals across various fields including environmental science, rural education, documentary storytelling, and community development. Check out our Get Involved page to apply for field placements or remote volunteer roles."
    },
    {
      q: "Is Yayasan Bumi Bersama legally registered?",
      a: "Yes, Yayasan Bumi Bersama was officially established in 2012 as a legally accredited non-profit foundation under national regulations, holding full charity tax-deductible status."
    }
  ];

  let openIndex = 0;

  function toggle(idx) {
    openIndex = openIndex === idx ? -1 : idx;
  }
</script>

<div class="space-y-4">
  {#each items as item, idx}
    <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all duration-200 {openIndex === idx ? 'shadow-md border-emerald-300' : 'hover:border-stone-300'}">
      <button
        type="button"
        on:click={() => toggle(idx)}
        class="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-stone-900 focus:outline-none"
      >
        <span>{item.q}</span>
        <span class="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 transition-transform duration-300 {openIndex === idx ? 'rotate-180 bg-emerald-100 text-emerald-800' : ''}">
          ↓
        </span>
      </button>

      {#if openIndex === idx}
        <div class="px-6 pb-6 text-stone-600 text-sm md:text-base leading-relaxed border-t border-stone-100 pt-4">
          <p>{item.a}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>
