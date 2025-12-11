<script lang="ts">
  import { devProjects } from "$lib/projectData";
  export let activeTab;
</script>


{#if activeTab === 'Development'}
<div class="w-full mt-[20px] pb-[20px] border-t border-[#5b5b5b]">
  <p
    class="my-6 text-[.9rem] md:text-[1.3rem] tracking-[-.5px] w-full text-start"
  >
    more works
  </p>
  <div class="flex flex-col gap-[5px]">

    {#each devProjects.slice(9) as {img,title,name}, index}
      <a href="/projects/{name}?tab={activeTab}"
        class="w-full gap-[10px] flex items-center justify-start text-[.8rem] md:text-[1rem]"
      >
        <img class="w-[50px] h-[50px] object-cover border-[5px] shadow border-white rounded-md" srcset={img} alt={title} />
        <p class='text-[#6f6d6d] hover:underline cursor-pointer'>{title}</p>
      </a>
    {/each}
  </div>
</div>
{/if}