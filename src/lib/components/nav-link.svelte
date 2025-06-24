<script lang="ts">
  export let setSelectedIndicator: (val: string) => void;
  export let data: { title: string; href: string;}
  export let index: number;
  export let isActive: boolean;

  import { fly, scale } from 'svelte/transition';

  const { title, href} = data;
</script>

<button
  on:click={()=>isActive = !isActive}
  on:mouseenter={() => setSelectedIndicator(href)}
  transition:fly={{ x: 80, delay: index * 50, duration: 800, easing: t => t }}
  class="text-[#000] text-[1.2rem] no-underline flex items-center relative cursor-pointer"
>
  {#if isActive}
    <div
      transition:scale={{ duration: 300 }}
      class="w-[10px] h-[10px] bg-white rounded-full absolute left-[-30px]"
    ></div>
  {/if}

  <a href={href}>{title}</a>
</button>
