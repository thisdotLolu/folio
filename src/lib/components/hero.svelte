<script lang='ts'>
  import { ArrowUpRight, Mail } from "@lucide/svelte";
import DesignerSpan from "./hero-cons/designer-span.svelte";
  import Behance from "./hero-cons/Integration icons/behance.svelte";
  import Github from "./hero-cons/Integration icons/github.svelte";
  import Linkedin from "./hero-cons/Integration icons/linkedin.svelte";
import Span from "./hero-cons/span.svelte";
  import Discord from "./hero-cons/Integration icons/discord.svelte";
  import Telegram from "./hero-cons/Integration icons/telegram.svelte";
  import XIcon from './hero-cons/Integration icons/X_icon.svg';
  import Fiverr from './hero-cons/Integration icons/fiverr-1.svg'

const links = [
  {name:'Github',logo:Github,link:'https://github.com/thisdotlolu'},
  {name:'Behance',logo:Behance,link:'https://behance.com/loludavid'},
  {name:'LinkedIn',logo:Linkedin,link:'https://www.linkedin.com/in/ebe-david-17b6921b0/'},
  {name:'X',logo:XIcon,link:'https://www.linkedin.com/in/ebe-david-17b6921b0/'},
  {name:'Telegram',logo:Telegram,link:'https://t.me/lolu_xz'},
  {name:'Discord',logo:Discord,link:'https://discordapp.com/users/lolu0000/'},
  // {name:'Contra',logo:,link:'https://www.linkedin.com/in/ebe-david-17b6921b0/'},
  {name:'Fiverr',logo:Fiverr,link:'https://www.linkedin.com/in/ebe-david-17b6921b0/'},
]
  </script>


  <div class="font-inter w-full mt-[80px] px-10 flex items-start justify-between pt-[50px]">
      <div class='w-[65%]'>
        <div class="w-fit p-[3px] border border-dashed border-[#b1b6bf] text-[#7a8293] text-[.7rem] rounded-full flex items-center gap-1">
          <span class='bg-green-500 h-[5px] w-[5px] rounded-[100%]'></span>
          Always online ;)
        </div>
        <span 
        style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {1 * 0.2}s; opacity: 0; transform: translateY(10px);"
        class='animation: fadeInUp text-[2rem] font-medium tracking-[-1px]'>Hi there  <span class='text-[#7a8293]'>I'm Lolu.</span></span>
        <div 
        style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {2 * 0.2}s; opacity: 0; transform: translateY(10px);"
        class="mb-[20px] leading-[40px] animation: fadeInUp tracking-[-1px] text-[2rem]">
          I'm a <span class='text-[#7a8293] inline-flex items-center'>Developer <Span/> </span> and <span class='text-[#7a8293] inline-flex items-center'>Designer <DesignerSpan/> </span> focused on delivering <span class="text-[#ccd0d8] bg-[#000]">exceptional</span> user experiences while implementing  <span class='text-[#ccd0d8] bg-[#000]'>complex software</span> functionality with clean, maintainable, and scalable code.
        </div>
        <p class='text-[#7a8293] mt-[10px]'>With over 5 years of experience in software development and ui/ux design across a full spectrum of verticals, solving product and business problems using tools including Figma,Nocode web and e-comms store builders,Typescript,React/Nextjs,React Native,Sveltekit,Nodejs and Databases.</p>
        <div class="mt-[30px] w-full flex items-center">
        <a 
        target="_blank"
        href='mailto:davidebe63@gmail.com'
        class='gap-2 text-[#fff] bg-[#000] w-fit p-[10px] h-[35px] rounded-[30px] flex items-center justify-center px-[20px]'>
          Send an email 
          <Mail
          size={10}
          />
        </a>
        <a 
        target="_blank"
        href='https://calendar.app.google/4PWEEC1grsbukDpe9'
        class='text-[#000] w-fit p-[10px] h-[30px] rounded-2xl flex items-center justify-center '>
          Book a Call <ArrowUpRight size={15}/>
        </a>
        </div>
      </div>
  
      <div class="flex gap-4 my-[20px]">
        <div class="flex flex-col items-start justify-center gap-2">
          {#each links.slice(0,4) as item, index (item.name)}
          <a
            class="group text-[1.6rem] font-medium flex items-center gap-1 text-[#181b21] hover:text-primary transition-all duration-300 relative overflow-hidden"
            href={item.link}
            target="_blank"
            style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {index * 0.2}s; opacity: 0; transform: translateY(10px);"
          >
          {#if typeof item.logo === 'string'}
          <img
          class='h-[32px] w-[32px]'
          src={item.logo}
          alt='logo'
          />
          {:else}
          <span class="w-fit h-fit">
            <svelte:component this={item.logo} />
          </span>
          {/if}

            <span class="relative">
              <span class="relative z-1 tracking-[-1px]">{item.name}</span>
              <span
                class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"
              ></span>
            </span>
            <ArrowUpRight
              class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#7a8293]"
            />
          </a>
        {/each}
        </div>
        <div class="flex flex-col items-start justify-start gap-2">
          {#each links.slice(4,8) as item, index (item.name)}
          <a
            class="group text-[1.6rem] font-medium flex items-center gap-1 text-[#181b21] hover:text-primary transition-all duration-300 relative overflow-hidden"
            href={item.link}
            target="_blank"
            style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {index * 0.2}s; opacity: 0; transform: translateY(10px);"
          >
          {#if typeof item.logo === 'string'}
          <img
          class='h-[32px] w-[32px]'
          src={item.logo}
          alt='logo'
          />
          {:else}
          <span class="w-fit h-fit">
            <svelte:component this={item.logo} />
          </span>
          {/if}

            <span class="relative">
              <span class="relative z-1 tracking-[-1px]">{item.name}</span>
              <span
                class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"
              ></span>
            </span>
            <ArrowUpRight
              class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#7a8293]"
            />
          </a>
        {/each}
        </div>
      </div>
  
  </div>