<script lang='ts'>
    export let img;
    export let title;
    export let link;
    export let shortDescription;
    export let toolsUsed;
</script>

<a 
  href="/projects/{link}"
  class="relative h-[400px] w-[385px] shadow-[1px_1px_20px_1px_rgba(0,0,0,0.1)] border-[#fff] rounded-[10px] border-[4px] overflow-hidden"
>
  <img
    class="hover:scale-110 scale-100 transition-all delay-200 duration-[600ms] ease-in-out  h-[380px] w-full object-cover rounded-[10px]"
    src={img}
    alt={title}
  />


  <div class="absolute bottom-0 flex items-center justify-between left-0 w-full px-4 py-2 bg-white backdrop-blur-xl text-black">
    <div class="w-[100%]">
      <p class="text-sm font-semibold">{title}</p>
      <p class="text-xs text-[#7a8293]">{shortDescription}</p>
  
      <div class="flex flex-wrap gap-1 mt-1">
        {#each toolsUsed.split(',') as tool (tool)}
          <span class="text-[#000] text-[10px] bg-[#f6f8f7] px-2 py-[2px] rounded-full">{tool.trim()}</span>
        {/each}
      </div>
    </div>
  </div>
</a>
