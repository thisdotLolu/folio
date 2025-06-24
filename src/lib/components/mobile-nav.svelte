<script lang="ts">
  import { fly } from 'svelte/transition';
  import { createEventDispatcher, onMount } from 'svelte';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import { X } from '@lucide/svelte';
  import NavLink from './nav-link.svelte';
  import me from '../assets/me/me.jpg'


  export let isActive: boolean;
  const dispatch = createEventDispatcher();

  console.log("isActive", isActive);

  const navItems = [
    { title: "Work", href: "#work" },
    { title: "About", href: "#about" },
    { title: "Dump", href: "#dump" }
  ];

  let selectedIndicator = "";

  onMount(() => {
    selectedIndicator = get(page).url.pathname;
  });

  function handleNavLeave() {
    selectedIndicator = get(page).url.pathname;
  }

  function handleNavClick(event: MouseEvent, path: string) {
  event.preventDefault();
  
  window.history.pushState(null, '', path);
  isActive = false;
  dispatch('navigate', { hash: path });
}

</script>

{#if isActive}
<div
  transition:fly={{ x: 300, duration: 500, easing: t => t }}
  class="h-[30vh] bg-white fixed right-0 top-0 text-[#7a8293] w-full z-50"
>
  <button class="absolute top-4 right-4" on:click={()=>isActive = !isActive}>
    <X size={20} />
  </button>

  <div class="box-border h-full w-full p-[30px] flex flex-col justify-between">
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
    aria-label='navigation'
    class="flex flex-col text-[40px] gap-[12px]" on:mouseleave={handleNavLeave}>
    <a href='/'>
        <img
          class='border-[#fff] border-[2px] rounded-md h-[35px] w-[35px] object-cover shadow-md'
          src={me}
          alt='Lolu David'
        />    
      </a>

      {#each navItems as data, index}
      <a
      href={data.href}
      on:click={(e) => handleNavClick(e, data.href)}
      class='w-full'> 
      <NavLink 
          {data}
          index={index}
          isActive={selectedIndicator === data.href}
          setSelectedIndicator={(val: string) => (selectedIndicator = val)}
        />
      </a> 
      {/each}
    </div>

  </div>
</div>
{/if}
