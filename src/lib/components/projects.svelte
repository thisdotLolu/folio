<script lang='ts'>
    import { designProjects, devProjects } from "$lib/projectData";
    import Project from "./project.svelte";
    export let activeTab;
    export let skill;
</script>

<div class='w-full mt-[20px] pb-[20px]'>
    <p class='my-6 text-[1.3rem] tracking-[-.5px] w-full text-center'>Selected Works</p>
    {#if activeTab === 'Development' && skill !== 'design' && skill !== 'Design'}
    <div class='w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-5'>
        {#each devProjects.slice(0,10) as project}
        <Project
        {activeTab}
        img={project.img}
        link={project.name}
        title={project.title}
        shortDescription={project.shortDescription}
        toolsUsed={project.toolsUsed}
        />
       {/each}
    </div>
    {:else if activeTab === 'Design' || skill?.toLowerCase() === 'design'}
    <div class='w-full grid lg:grid-cols-3 grid-cols-1 place-items-center gap-5'>
        {#each designProjects as project,index}
        <Project
        {activeTab}
        img={project.img}
        link={project.name === 'landing-pages' ? '../landing-pages' : project.name}
        title={project.title}
        shortDescription={project.shortDescription}
        toolsUsed={project.toolsUsed}
        />
       {/each}
    </div>
    {/if}
</div>