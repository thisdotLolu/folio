<script lang='ts'>
  import '../../../app.css'
  import { page } from "$app/stores";
  import Navbar from "$lib/components/navbar.svelte";
  import { designProjects, devProjects, type DesignProject, type DevProject } from '$lib/projectData';
  import { ExternalLink, Link, Link2Off, MoveLeft } from '@lucide/svelte';
  import { browser } from "$app/environment";
  import { goto } from '$app/navigation';


  let projectId: string;
  projectId = $page.params.id;

  type Project = DevProject & DesignProject;

  let project = [...devProjects, ...designProjects].find(p => p.name === projectId) as Project


  $: title = project?.title || project?.name || 'Project Not Found';
  $: role = project?.role || '';
  $: longDescription = project?.longDescription || '';
  $: images = project?.images || [];
  $: toolsUsed = project?.toolsUsed || '';
  $: link = project?.link || project?.caseStudyLink || '';
  $: shortDescription = project?.shortDescription || '';
  $: tag = project?.tag || 'Design';

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

    function nav_back() {
        if (browser) window.history.back();
        goto('/')

    }

    
</script>

<div class='font-inter bg-white w-full h-full'>
  <div class="relative z-10 md:max-w-[1300px] mx-auto flex flex-col items-center justify-start">
    <Navbar
    on:navigate={(event) => smoothScrollTo(event.detail.hash)}
    />
    
    {#if project}
      <div class="w-full md:p-8 !pt-[100px] md:max-w-[900px] max-w-[94vw] mx-auto">
        <button 
        on:click={nav_back}
        class='bg-[#d5d8dd8b] cursor-pointer mb-[30px] px-[10px] flex items-center gap-1 rounded-full w-fit'>
            <MoveLeft size={12}/> Back
        </button>
        <div class="mb-8">
          <h1 class="text-4xl font-bold mb-4 tracking-[-2px] md:tracking-[-.10px]">{title}</h1>
          <p class="text-xl text-[#7a8293] mb-2 tracking-[-.8px] md:tracking-[-.10px]">{role}</p>
          <p class="text-lg text-[#7a8293] mb-4 tracking-[-.5px] md:tracking-[-.10px]">{shortDescription}</p>
          <!-- {#each toolsUsed.split(',') as tool (tool)}
          <span class="text-[#000] text-[10px] bg-[#f6f8f7] px-2 py-[2px] rounded-full">{tool.trim()}</span>
          {/each} -->
          <p class="text-[#7a8293] mb-4 tracking-[-.5px] md:tracking-[-.10px]"><strong>Tools:</strong> {toolsUsed}</p>
          {#if link}
            <a href={link} target="_blank" rel="noopener noreferrer" 
               class="inline-flex gap-2 items-center rounded-full bg-[#000] text-white px-4 py-1 hover:bg-[#2a2929] transition-colors">
              Visit Project
              <ExternalLink
              size={15}
              />
            </a>
          {/if}
        </div>

        <hr
        class='my-[40px] border-[#7a8293]'
        />
        <div class="mb-8">
          <h2 class="text-2xl tracking-[-1px] font-semibold mb-1">Description</h2>
          <p class="text-[#7a8293] leading-relaxed font-thin tracking-[-.5px]">{longDescription}</p>
        </div>

        {#if (images.length > 0 && title !== 'Pet Health')}
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 tracking-[-1px]">Project Images</h2>
            <div class="flex items-center flex-col justify-start gap-4">
              {#each images as image, index}
                <div class="bg-gray-100 shadow-2xl h-fit rounded-lg overflow-hidden">
                  <img src={image} alt="{title} screenshot {index + 1}" 
                       class="object-contain transition-transform duration-300" />
                </div>
              {/each}
            </div>
          </div>
          {:else}
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 tracking-[-1px]">Project Images</h2>
            <div class="grid md:grid-cols-4 grid-cols-1 gap-4 place-items-center">
              {#each images as image, index}
                  <img src={image} alt="{title} screenshot {index + 1}" 
                       class="object-cover shadow-2xl  transition-transform duration-300 h-[450px]"/>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {:else}
      <div class="w-full p-8 text-center">
        <h1 class="text-4xl font-bold mb-4">Project Not Found</h1>
        <p class="text-xl text-gray-600 font-thin">The project "{projectId}" could not be found.</p>
      </div>
    {/if}
  </div>
</div>