<script lang="ts">
  import { onMount } from 'svelte';
  import { designProjects, landingPageProjects } from '$lib/projectData';
  import { ChevronLeft, ChevronRight } from '@lucide/svelte';
  import { carouselData } from '$lib/dumpData';

  const THUMB_W = 80;
  const THUMB_GAP = 4;

  const allImages = [...carouselData,...landingPageProjects, ...designProjects].flatMap((p:any) =>{
    if(p.images){return p.images}else{return p};
  });

  let imageIndex = 0;
  let thumbStrip: HTMLDivElement;

  let dragStartX = 0;
  let isDragging = false;

  function isVideo(src: string) {
    return /\.(mp4|webm|mov)$/i.test(src);
  }

  function prev() {
    if (imageIndex > 0) imageIndex -= 1;
  }

  function next() {
    if (imageIndex < allImages.length - 1) imageIndex += 1;
  }

  function goTo(index: number) {
    imageIndex = index;
  }

  $: if (thumbStrip && imageIndex !== undefined) {
    const offset =
      imageIndex * (THUMB_W + THUMB_GAP) - thumbStrip.clientWidth / 2 + THUMB_W / 2;
    thumbStrip.scrollTo({ left: offset, behavior: 'smooth' });
  }

  function onPointerDown(e: PointerEvent) {
    dragStartX = e.clientX;
    isDragging = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerUp(e: PointerEvent) {
    if (!isDragging) return;
    isDragging = false;
    const delta = e.clientX - dragStartX;
    if (delta < -50) next();
    else if (delta > 50) prev();
  }
</script>

<div class="mt-[10vh] w-screen h-[90vh] text-white flex flex-col select-none">

  <div class="flex-1 relative overflow-hidden">

    <div
      class="flex h-full lg:items-start items-center lg:mt-0 mt-[20%] cursor-grab active:cursor-grabbing"
      style="transform: translateX(-{imageIndex * 100}%); transition: transform 0.5s cubic-bezier(0, 0.72, 0, 1);"
      on:pointerdown={onPointerDown}
      on:pointerup={onPointerUp}
      role="presentation"
    >
      {#each allImages as media, index}
        <div class="min-w-full h-full flex items-center justify-center p-8">
          {#if isVideo(media)}
            <video
              src={media}
              class="max-h-[80vh] max-w-full object-contain"
              autoplay
              loop
              muted
              playsinline
            ></video>
          {:else}
            <img
              src={media}
              alt="Gallery image {index + 1}"
              class="max-h-[80vh] max-w-full object-contain md:mb-[0] mb-[30%]"
              draggable="false"
            />
          {/if}
        </div>
      {/each}
    </div>

    {#if imageIndex > 0}
      <button
        on:click={prev}
        class="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/55 hover:bg-white/80 transition-colors z-10"
      >
        <ChevronLeft color="black" size={22} />
      </button>
    {/if}

    {#if imageIndex < allImages.length - 1}
      <button
        on:click={next}
        class="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/55 hover:bg-white/80 transition-colors z-10"
      >
        <ChevronRight color="black" size={22} />
      </button>
    {/if}
  </div>

  <div
    bind:this={thumbStrip}
    class="flex gap-1 px-4 py-2 overflow-x-auto"
    style="scrollbar-width: none;"
  >
    {#each allImages as media, index}
      {@const active = index === imageIndex}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click={() => goTo(index)}
        class="cursor-pointer flex-shrink-0 h-14 overflow-hidden"
        style="width: {THUMB_W}px; opacity: {active ? 1 : 0.45}; outline: {active ? '2px solid white' : 'none'}; outline-offset: 2px;"
      >
        {#if isVideo(media)}
          <video
            src={media}
            muted
            playsinline
            class="w-full h-full object-cover"
          ></video>
        {:else}
          <img
            src={media}
            alt="Thumbnail {index + 1}"
            class="w-full h-full object-cover"
            draggable="false"
          />
        {/if}
      </div>
    {/each}
  </div>
</div>