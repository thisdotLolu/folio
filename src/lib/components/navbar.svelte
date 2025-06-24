<script lang='ts'>
import { tweened } from 'svelte/motion';
import { createEventDispatcher } from 'svelte';
import me from '../assets/me/me.jpg'

export let isOverlayVisible = false;

const dispatch = createEventDispatcher();

const menuItems: {
  path: string;
  label: string;
}[] = [
  { path: "#work", label: "Work"},
  { path: "#about", label: "About me"},
  { path: "#dump", label: "Dump"},
];

import { onMount } from 'svelte';
import clsx from 'clsx';
import { Menu } from '@lucide/svelte';
import MobileNav from './mobile-nav.svelte';

let greetings: string[] = [];
let currentGreeting = '';
let greetingIndex = 0;
let fadeOpacity = tweened(1, { duration: 100 });
$:isActive=false;

function handleNavClick(event: MouseEvent, path: string) {
  event.preventDefault();
  
  window.history.pushState(null, '', path);
  
  dispatch('navigate', { hash: path });
}

function getTimePeriod(): 'morning' | 'afternoon' | 'evening' {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  else if (hour < 18) return 'afternoon';
  else return 'evening';
}

  function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}


onMount(async () => {
  const period = getTimePeriod();

  const greetingsMap = {
    morning: [
      'Good morning',
      'Bonjour',
      'Guten Morgen',
      'Buongiorno',
      'おはよう',
      'صباح الخير',
      'Dobro jutro',
      'Bom dia',
      'Buenos días',
      'Dzień dobry',
      'Bună dimineața',
      'God morgon',
      'Godmorgen',
    ],
    afternoon: [
      'Good afternoon',
      'Bon après-midi',
      'Guten Tag',
      'Buon pomeriggio',
      'こんにちは',
      'مساء الخير',
      'Dobar dan',
      'Buenas tardes',
      'Boa tarde',
      'Dzień dobry',
      'Bună ziua',
      'God eftermiddag',
    ],
    evening: [
      'Good evening',
      'Bonsoir',
      'Guten Abend',
      'Buona sera',
      'こんばんは',
      'مساء الخير',
      'Dobra večer',
      'Boa noite',
      'Buenas noches',
      'Dobry wieczór',
      'Bună seara',
      'God kväll',
      'Godaften',
    ],
  };

  greetings = greetingsMap[period];
  currentGreeting = greetings[greetingIndex];
  console.log("isActive", isActive);


  const loop = async () => {
    while (true) {
      await fadeOpacity.set(0);
      await new Promise((r) => setTimeout(r, 300));

      greetingIndex = (greetingIndex + 1) % greetings.length;
      currentGreeting = greetings[greetingIndex];

      await fadeOpacity.set(1);
      await new Promise((r) => setTimeout(r, 3000));
    }
  };

  loop();
});
</script>

<div class="font-inter w-full md:px-10 px-2 h-[60px] py-[10px] fixed left-0 top-0 z-50 bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20">
  <div class='!max-w-[1200px] flex items-center justify-between mx-auto'>
    <div class='flex items-center gap-1 h-full'>
      <a href='/'>
        <img
          class='border-[#fff] border-[2px] rounded-md h-[35px] w-[35px] object-cover shadow-md'
          src={me}
          alt='Lolu David'
        />    
      </a>
      
      <div class={clsx('md:text-[1.4rem] text-[1.1rem] tracking-[-1px] ', isOverlayVisible?'text-[#d3d3d3]':'text-[#181b21]')}>
        lolu/<span class='text-[#7a8293]'>david</span>/lu .
      </div>
      <span class={isOverlayVisible?'text-[#d3d3d3]':'text-[#181b21]'}>&nbsp;•&nbsp;</span>
      <span
        style="opacity: {$fadeOpacity}"
        class="transition-opacity duration-500 ease-in-out block text-[#7a8293] md:text-[1rem] text-[.8rem] md:mt-0 mt-[4px]"
      >
        {currentGreeting}
      </span>
    </div>
 
    <div class="hidden w-[40%] md:flex justify-end items-center gap-6">
      {#each menuItems as item, index}
        <a 
          class="
            relative overflow-hidden tracking-[-.8px]
            transition-all duration-300 ease-in-out cursor-pointer
            before:content-[''] before:absolute before:inset-0 
            before:scale-x-0 before:bg-[#181b21] before:origin-left
            before:transition-transform before:duration-300 before:ease-in-out
            hover:before:scale-x-100 hover:before:text-white hover:after:text-white
          "
          href={item.path}
          on:click={(e) => handleNavClick(e, item.path)}
        >
          <span class={clsx("relative z-10 transition-colors duration-300 ease-in-out hover:text-white", isOverlayVisible?'text-[#d3d3d3]':'text-[#181b21]')}>
            {item.label}
          </span>
        </a>
      {/each}
    </div>

    <button
         on:click={()=>isActive = !isActive}
            class='md:hidden block'>
                <Menu
                size={30}
                className='text-[#fff]' 
                />
            </button>
            
          {#if isActive}
                <MobileNav 
                on:navigate={(event) => smoothScrollTo(event.detail.hash)}
                bind:isActive
                />
          {/if}
  </div>
</div>