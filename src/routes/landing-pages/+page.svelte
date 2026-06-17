<script lang='ts'>
  import { browser } from "$app/environment";
  import Navbar from "$lib/components/navbar.svelte";
  import { landingPageProjects } from "$lib/projectData";
  import { ChevronDown, MoveLeft, ArrowUp } from "@lucide/svelte";
  import "../../app.css";

  let allImagesOpen = false;

  $: allLandingImages = landingPageProjects.flatMap((lp) =>
    lp.images.map((img) => ({ img, projectTitle: lp.title }))
  );

  function nav_back() {
    if (browser) window.history.back();
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function smoothScrollTo(elementId: string) {
    const element = document.getElementById(elementId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
</script>

<div class="relative font-inter bg-white w-full h-full">
  <div class="relative z-10 md:max-w-[1050px] mx-auto flex flex-col items-center justify-start">
    <Navbar on:navigate={(event) => smoothScrollTo(event.detail.hash)} />

    <div class="w-full !pt-[100px] md:max-w-[1200px] max-w-[94vw] mx-auto">

      <!-- Back button -->
      <button
        on:click={nav_back}
        class="bg-[#d5d8dd8b] cursor-pointer mb-[30px] h-[35px] px-[10px] flex items-center gap-1 rounded-[10px] w-fit"
      >
        <MoveLeft size={12} /> Back
      </button>

      <!-- Title + description -->
      <div class="mb-8">
        <h1 class="text-4xl font-medium mb-4 tracking-[-2px] md:tracking-[-1px]">
          Landing Pages
        </h1>
        <p class="text-xl text-[#7a8293] mb-2 tracking-[-.8px] md:tracking-[-.10px]">
          Designer & Developer
        </p>
        <p class="text-lg text-[#7a8293] mb-4 tracking-[-.5px] md:tracking-[-.10px]">
          Landing pages for various startups and companies.
        </p>
        <p class="text-[#7a8293] mb-4 tracking-[-.5px] md:tracking-[-.10px]">
          <strong>Tools:</strong> Figma, Framer, Webflow
        </p>
      </div>

      <hr class="my-[40px] border-[#7a82933b]" />

      <!-- Grid -->
      <div class="mb-8">

        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {#each landingPageProjects as lp (lp.slug)}
            
             <a href={lp.link}
              target="_blank"
              rel="noopener noreferrer"
              class="relative h-[300px] md:h-[400px] w-full shadow-[1px_1px_20px_1px_rgba(0,0,0,0.1)] border-[#fff] rounded-[20px] border-[10px] overflow-hidden bg-[#fff]"
            >
              <img
                srcset={lp.img}
                alt={lp.title}
                class="w-full object-cover rounded-[10px] h-[75%]"
              />
              <div class="absolute bottom-0 left-0 w-full py-2 px-2 bg-white text-black">
                <p class="text-sm font-semibold">{lp.title}</p>
                <p class="text-xs text-[#7a8293]">{lp.shortDescription}</p>
                <div class="flex flex-wrap gap-1 mt-1">
                  {#each lp.toolsUsed.split(",") as tool (tool)}
                    <span class="text-[#000] text-[10px] bg-[#f6f8f7] px-2 py-[2px] rounded-full">
                      {tool.trim()}
                    </span>
                  {/each}
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>

         <!-- Collapsible images accordion -->
      <div class="mb-8 rounded-[16px] border border-[#7a82931a] overflow-hidden">
        <button
          on:click={() => (allImagesOpen = !allImagesOpen)}
          class="w-full flex items-center justify-between px-5 py-4 bg-[#f6f8f7] hover:bg-[#eef0ee] transition-colors cursor-pointer text-left"
        >
          <span class="text-sm font-medium text-[#000]">
            {allImagesOpen ? 'Hide project images' : 'Click to view project images'}
          </span>
          <span
            class="text-[#7a8293] text-xs inline-block transition-transform duration-300"
            style="transform: rotate({allImagesOpen ? 180 : 0}deg)"
          >
            <ChevronDown />
          </span>
        </button>

        {#if allImagesOpen}
          <div class="flex flex-col gap-4 p-4 bg-[#f6f8f7]">
            {#each allLandingImages as { img, projectTitle }}
              <div class="bg-white rounded-[10px] shadow-sm overflow-hidden">
                <img
                  srcset={img}
                  alt="{projectTitle} screenshot"
                  class="w-full object-contain"
                />
              </div>
            {/each}
          </div>
        {/if}
      </div>

      <hr class="my-[40px] border-[#7a82933b]" />

      <!-- Description -->
      <div class="mb-8">
        <h2 class="text-2xl tracking-[-1px] font-semibold mb-1">Description</h2>
        <p class="text-[#7a8293] leading-relaxed font-light tracking-[-.2px]">
          Designed and developed landing pages for various startups and companies, focusing on clear messaging, compelling visuals, and conversion optimization. Each landing page was tailored to the specific brand and target audience, utilizing best practices in UX/UI design to drive engagement and achieve business goals.
        </p>
      </div>
    </div>
  </div>

  <!-- Scroll to top -->
  <button
    on:click={scrollToTop}
    class="fixed right-4 shadow-xl bottom-4 bg-[#d5d8dd8b] text-black rounded-full p-1 cursor-pointer z-[1000]"
  >
    <ArrowUp class="cursor-pointer" />
  </button>
</div>