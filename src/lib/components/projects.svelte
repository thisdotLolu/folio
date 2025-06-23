<script lang='ts'>
    import { designProjects, devProjects } from "$lib/projectData";
  import Project from "./project.svelte";
    export let activeTab;
</script>

<div class='w-full mt-[20px] pb-[20px]'>
    <p class='my-6 text-[1.3rem] tracking-[-.5px] w-full text-center'>Selected Works</p>
    {#if activeTab === 'Development'}
    <div class='w-full grid grid-cols-3 place-items-center gap-5'>
        {#each devProjects as project,index}
        <Project
        img={project.img}
        link={project.name}
        title={project.title}
        shortDescription={project.shortDescription}
        toolsUsed={project.toolsUsed}
        />
       {/each}
    </div>
    {:else if activeTab === 'Design'}
    <div class='w-full grid grid-cols-3 place-items-center gap-5'>
        {#each designProjects as project,index}
        <Project
        img={project.img}
        link={project.name}
        title={project.title}
        shortDescription={project.shortDescription}
        toolsUsed={project.toolsUsed}
        />
       {/each}
    </div>
    {/if}
</div>