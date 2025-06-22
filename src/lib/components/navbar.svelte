<script lang='ts'>
  import { tweened } from 'svelte/motion';
    import me from '../assets/me/me.jpg'

    const menuItems: {
    path: string;
    label: string;
  }[] = [
    { path: "#work", label: "Work"},
    { path: "#about", label: "About me"},
    { path: "#contact", label: "Contact"},
  ];

  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';

let greetings: string[] = [];
let currentGreeting = '';
	let greetingIndex = 0;
	let fadeOpacity = tweened(1, { duration: 100 });

function getTimePeriod(): 'morning' | 'afternoon' | 'evening' {
	const hour = new Date().getHours();
	if (hour < 12) return 'morning';
	else if (hour < 18) return 'afternoon';
	else return 'evening';
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

	const loop = async () => {
		while (true) {
			await fadeOpacity.set(0); // fade out
			await new Promise((r) => setTimeout(r, 300)); // small delay for fade

			greetingIndex = (greetingIndex + 1) % greetings.length;
			currentGreeting = greetings[greetingIndex];

			await fadeOpacity.set(1); // fade in
			await new Promise((r) => setTimeout(r, 3000)); // stay visible
		}
	};

	loop();
});


</script>

<div class="font-inter w-full px-10
h-[60px] py-[10px] fixed left-0 top-0 z-50
bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20 rounded-b-lg">
<div class='!max-w-[1200px] flex items-center justify-between mx-auto'>
    <div class='flex items-center gap-1 h-full'>
        <img
        class='border-[#fff] border-[2px] rounded-md h-[35px] w-[35px] object-cover shadow-md'
        src={me}
        alt='Lolu David'
        />    
        <div class='text-[1.4rem] tracking-[-1px] text-[#181b21]'>lolu/<span class='text-[#7a8293]'>david</span>/lu .</div>
        &nbsp;•&nbsp;
        <span
        style="opacity: {$fadeOpacity}"
        class="transition-opacity duration-500 ease-in-out block text-[#7a8293]"
    >
        {currentGreeting}
    </span>
    </div>
 
    <div class="w-[40%] flex justify-end items-center gap-6">
        {#each menuItems as item,index}
        <a 
        class="
          relative overflow-hidden tracking-[-.8px]
          transition-all duration-300 ease-in-out
          before:content-[''] before:absolute before:inset-0 
          before:scale-x-0 before:bg-[#181b21] before:origin-left
          before:transition-transform before:duration-300 before:ease-in-out
          hover:before:scale-x-100 hover:before:text-white hover:after:text-white
        "
        href={item.path}
      >
        <span class="relative z-10 text-[#181b21] transition-colors duration-300 ease-in-out hover:text-white">
          {item.label}
        </span>
      </a>
      {/each}
    </div>
</div>
</div>
