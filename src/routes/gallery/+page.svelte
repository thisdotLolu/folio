<script lang='ts'>
  import Navbar from "$lib/components/navbar.svelte";
  import Gallery from "../../lib/components/gallery.svelte";

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
</script>

<div class="relative font-inter bg-white w-full h-full">
  <div
    class="relative z-10 md:max-w-[1350px] mx-auto flex flex-col items-center justify-start"
  >
  <Navbar on:navigate={(event) => smoothScrollTo(event.detail.hash)} />
<Gallery/>
</div>
</div>