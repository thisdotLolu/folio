<script lang="ts">
  import "../../../app.css";
  import { page } from "$app/stores";
  import Navbar from "$lib/components/navbar.svelte";
  import {
    designProjects,
    devProjects,
    linkify,
    type DesignProject,
    type DevProject,
  } from "$lib/projectData";
  import { ArrowUp, ExternalLink, Link, Link2Off, MoveLeft } from "@lucide/svelte";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";


  const tab = $page.url.searchParams.get("tab") || "Development";

  let projectId: string;
  projectId = $page.params.id;

  type Project = DevProject & DesignProject;

  let project = [...devProjects, ...designProjects].find(
    (p) => p.name === projectId
  ) as Project;

  $: title = project?.title || project?.name || "Project Not Found";
  $: role = project?.role || "";
  $: longDescription = project?.longDescription || "";
  $: images = project?.images || [];
  $: toolsUsed = project?.toolsUsed || "";
  $: link = project?.link || project?.caseStudyLink || "";
  $: shortDescription = project?.shortDescription || "";
  $: tag = project?.tag || "Design";

  function smoothScrollTo(elementId: string) {
    const element = document.getElementById(elementId.replace("#", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

function nav_back() {
  if (browser) window.history.back();
}
  
  function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<div class="relative font-inter bg-white w-full h-full">
  <div
    class="relative z-10 md:max-w-[1350px] mx-auto flex flex-col items-center justify-start"
  >
    <Navbar on:navigate={(event) => smoothScrollTo(event.detail.hash)} />

    {#if project}
      <div
        class="w-full md:p-8 !pt-[100px] md:max-w-[900px] max-w-[94vw] mx-auto"
      >
        <button
          on:click={nav_back}
          class="bg-[#d5d8dd8b] cursor-pointer mb-[30px] h-[35px] px-[10px] flex items-center gap-1 rounded-[10px] w-fit"
        >
          <MoveLeft size={12} /> Back
        </button>
        <div class="mb-8">
          <h1
            class="text-4xl font-bold mb-4 tracking-[-2px] md:tracking-[-.10px]"
          >
            {title}
          </h1>
          <p
            class="text-xl text-[#7a8293] mb-2 tracking-[-.8px] md:tracking-[-.10px]"
          >
            {role}
          </p>
          <p
            class="text-lg text-[#7a8293] mb-4 tracking-[-.5px] md:tracking-[-.10px]"
          >
            {shortDescription}
          </p>
          <!-- {#each toolsUsed.split(',') as tool (tool)}
          <span class="text-[#000] text-[10px] bg-[#f6f8f7] px-2 py-[2px] rounded-full">{tool.trim()}</span>
          {/each} -->
          <p class="text-[#7a8293] mb-4 tracking-[-.5px] md:tracking-[-.10px]">
            <strong>Tools:</strong>
            {toolsUsed}
          </p>
          {#if link}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex gap-2 items-center rounded-full bg-[#000] text-white px-4 py-1 hover:bg-[#2a2929] transition-colors"
            >
              Visit Project
              <ExternalLink size={15} />
            </a>
          {/if}
        </div>

        <hr class="my-[40px] border-[#7a82933b]" />
        <div class="mb-8">
          <h2 class="text-2xl tracking-[-1px] font-semibold mb-1">
            Description
          </h2>
          <p class="text-[#7a8293] leading-relaxed font-thin tracking-[-.5px]">
            {@html linkify(longDescription)}
          </p>
        </div>

        {#if images.length > 0 && (title !== "Pet Health" && title !== "Vently" ) }
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 tracking-[-1px]">
              Project Images
            </h2>
            <div class="flex items-center flex-col justify-start gap-4">
              {#each images as image, index}
                <div
                  class="bg-gray-100 shadow-2xl h-fit rounded-lg overflow-hidden"
                >
                  <img
                    srcset={image}
                    fetchpriority="high"
                    alt="{title} screenshot {index + 1}"
                    class="object-contain transition-transform duration-300"
                  />
                </div>
              {/each}
            </div>
          </div>
        {:else}
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 tracking-[-1px]">
              Project Images
            </h2>
            <div
              class="grid md:grid-cols-4 grid-cols-1 gap-4 place-items-start"
            >
              {#each images as image, index}
                <img
                  srcset={image}
                  fetchpriority="high"
                  alt="{title} screenshot {index + 1}"
                  class="shadow-2xl transition-transform duration-300 rounded-3xl"
                />
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {:else}
      <div class="w-full p-8 text-center">
        <h1 class="text-4xl font-bold mb-4">Project Not Found</h1>
        <p class="text-xl text-gray-600 font-thin">
          The project "{projectId}" could not be found.
        </p>
      </div>
    {/if}
  </div>

  <button
  on:click={scrollToTop}
  class='fixed right-4 shadow-xl bottom-4 bg-[#d5d8dd8b] text-black rounded-full p-1 cursor-pointer z-[1000]'>
    <ArrowUp
    class='cursor-pointer'
    />
  </button>
</div>
