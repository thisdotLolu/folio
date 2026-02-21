<script lang='ts'>
import '../app.css'
import Navbar from "$lib/components/navbar.svelte";
import Hero from '$lib/components/hero.svelte';
import Subnav from '$lib/components/subnav.svelte';
import Projects from '$lib/components/projects.svelte';
import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";
  import About from '$lib/components/about.svelte';
  import Lenis from 'lenis';
  import Footer from '$lib/components/footer.svelte';
  import { page } from '$app/stores';
  import MoreProjects from '$lib/components/more-projects.svelte';

  const overlayOpacity = tweened(0, { duration: 300, easing: cubicOut });
  let triggerSection: HTMLElement;

  let fadeStart = false;

  function handleScroll() {
    if (!fadeStart) return;

    const scrollY = window.scrollY;
    const maxFadeDistance = 0;
    const startScroll = triggerSection.offsetTop;
    const fadeValue = Math.min(Math.max((scrollY - startScroll) / maxFadeDistance, 10), 1);
    overlayOpacity.set(fadeValue);
  }

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

  onMount(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const observer = new IntersectionObserver(
      ([entry]) => {
        fadeStart = entry.isIntersecting;
        if (!fadeStart) overlayOpacity.set(0);
      },
      { threshold: 0.1 }
    );

    if (triggerSection) observer.observe(triggerSection);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (triggerSection) observer.disconnect();
    };
  });


let activeTab = $page.url.searchParams.get("tab") || "Development";
$: isOverlayVisible = $overlayOpacity > 0 ;
$: overlayIntensity = $overlayOpacity;

$:console.log($overlayOpacity)

</script>

<svelte:head>
  <title>Lolu - Developer and Designer</title>
  <meta name="description" content="Lolu is a full-stack developer and UI/UX designer specializing in creating modern, responsive web applications. Explore my portfolio to see my work." />
</svelte:head>

<div class="relative min-h-screen w-full overflow-x-hidden">
  <div
    class="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    style="background-color: #000; opacity: {$overlayOpacity}; transition: opacity 0.3s ease;"
  ></div>

  <div class="relative z-10 max-w-[1300px] mx-auto flex flex-col items-center justify-start">
    <Navbar 
    on:navigate={(event) => smoothScrollTo(event.detail.hash)}
    bind:isOverlayVisible
    />
    <div class="w-full">
    <Hero />
    </div>
    <div 
    id='work'
    class=" mt-[50px] md:mt-[100px] flex flex-col items-center justify-center w-full md:px-10 px-4">
      <Subnav bind:activeTab />
      <Projects {activeTab} />
      <MoreProjects {activeTab}/>
    </div>
  </div>
  <div bind:this={triggerSection} class='w-full'>
     <section id="about" class="bg-transparent py-[100px] h-[1000px] w-full">
    <About/>
  </section>
  <div class="md:mt-[420px] mt-[800px] pt-[200px] bg-[black]">
  <Footer/>
  </div>
</div>
</div>

