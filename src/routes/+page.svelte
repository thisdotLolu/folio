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

  const overlayOpacity = tweened(0, { duration: 300, easing: cubicOut });
  let triggerSection: HTMLElement;

  let fadeStart = false;

  function handleScroll() {
    if (!fadeStart) return;

    const scrollY = window.scrollY;
    const maxFadeDistance = 100;
    const startScroll = triggerSection.offsetTop;
    const fadeValue = Math.min(Math.max((scrollY - startScroll) / maxFadeDistance, 0), 1);
    overlayOpacity.set(fadeValue);
  }

  onMount(() => {
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


let activeTab='Development'
</script>

<div class="relative min-h-screen w-full overflow-x-hidden">
  <div
    class="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    style="background-color: #222834; opacity: {$overlayOpacity}; transition: opacity 0.3s ease;"
  ></div>

  <div class="relative z-10 max-w-[1300px] mx-auto flex flex-col items-center justify-start">
    <Navbar />
    <Hero />
    <div class="mt-[100px] flex flex-col items-center justify-center w-full px-10">
      <Subnav bind:activeTab />
      <Projects {activeTab} />
    </div>
    <section id="about" class="h-[1700px] bg-transparent" bind:this={triggerSection}>
      <About/>
    </section>
  </div>
</div>

