<script lang='ts'>
  import { ExternalLink } from "@lucide/svelte";
  import Docker from "./hero-cons/Integration icons/docker.svelte";
  import Figma from "./hero-cons/Integration icons/figma.svelte";
  import Firebase from "./hero-cons/Integration icons/firebase.svelte";
  import Framer from "./hero-cons/Integration icons/framer.svelte";
  import Github from "./hero-cons/Integration icons/github.svelte";
  import Mongodb from "./hero-cons/Integration icons/mongodb.svelte";
  import VsCode from "./hero-cons/Integration icons/vs_code.svelte";
  import Webflow from "./hero-cons/Integration icons/webflow.svelte";
  import Wordpress from "./hero-cons/Integration icons/wordpress.svelte";
  import Next from "./hero-cons/next.svelte";
  import Node from "./hero-cons/node.svelte";
  import Svlte from "./hero-cons/svlte.svelte";
  import Typescript from "./hero-cons/typescript.svelte";

import { register } from 'swiper/element/bundle';
  import type { ChangeEventHandler } from "svelte/elements";
register();
 const spaceBetween = 10;
  const onProgress = (e: CustomEvent<[swiper: any, progress: number]>) => {
    const [swiper, progress] = e.detail;
    console.log(progress)
  };


</script>

<div class='w-full'>
    <p class='text-[#7a8293]'>About me</p>
    <div class='flex items-start justify-between mt-[40px] gap-[100px]'>
        <div class='text-[4rem] w-[40%] text-[#d3d3d3] leading-[60px]'>
            Full-Stack Developer & UI/UX Designer
            <div class="flex items-center justify-start gap-[10px] mt-[30px]">
                <Svlte/> <Next/> <Typescript/> <Figma/> <Framer/> <Node/> <Github/> <Webflow/> <Wordpress/> <Mongodb/> <Firebase/> <Docker/> <VsCode/>
            </div>
        </div>

        <div class='text-[#d3d3d3] text-[1.2rem] w-[55%]'>
            I'm a multidisciplinary software engineer and designer with 5+ years of experience building user-focused products and scalable systems. My work blends clean code with elegant UI—solving real business problems with tools like Figma, React, SvelteKit, Nodejs etc.
            I've worked across Fintech, Blockchain, Education, and Ecommerce, partnering with companies across Africa, Europe and the U.S. From MVPs to dashboards, I bring clarity and purpose to every screen I touch.
            Currently open to new opportunities—contract or full-time—where I can help design and build thoughtful digital experiences.
            When I’m not designing or shipping code, you’ll find me exploring animation or deep-diving into the psychology of good UX.
            <a 
            target="_blank"
            href='https://docs.google.com/document/d/1mmzcDGl5LxWBnvOTtY5RSCFmaanbn6sv'
            class='gap-2 mt-[20px] text-[#d3d3d3] bg-transparent w-fit hover:underline h-[35px] rounded-[30px] flex items-center justify-center'>
              Resume 
              <ExternalLink
              size={10}
              />
            </a>
            <hr class='my-[20px]'/>
            <p
            class="mt-[20px] mb-[10px]"
            >Selected Feedbacks</p>
            <swiper-container
            slides-per-view={1}
            space-between={spaceBetween}
            centered-slides={true}
            pagination={{
              hideOnClick: true,
            }}
            autoplay={true}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            on:swiperprogress={onProgress}
          >
            <swiper-slide
            class='h-[200px] w-full'
            >
            <p class='text-[1rem]'>"nice work and communication was good. Looking forward to working more and seeing how we can create more material.The design of the mobile app demonstrates a solid understanding of basic UX principles and visual hierarchy. The layout is structured, and the color choices align with standard design practices."</p>
            <p class='text-[#d3d3d3] text-[.8rem] gap-1 flex items-center mt-[10px]'> - Mark Ligonqvist, <span class='text-[#7a8293]'>client</span></p>

            </swiper-slide>
            <swiper-slide
             class='h-[200px] w-full'
            >
                <p class='text-[1rem]'>"I checked your code and well fucking done mate. This is what i wanted. Code well structured."</p>
                <p class='text-[#d3d3d3] text-[.8rem] gap-1 flex items-center mt-[10px]'> - Furkan Beyler, <span class='text-[#7a8293]'>Colleague</span></p>
            </swiper-slide>
            <swiper-slide
            class='h-[200px] w-full'
           >
               <p class='text-[1rem]'>"The website looks great, I'm honestly very happy with the website, this guy deserves a 10/5 rating"</p>
               <p class='text-[#d3d3d3] text-[.8rem] gap-1 flex items-center mt-[10px]'> - Contractor Lead Flow, <span class='text-[#7a8293]'>Client</span></p>
           </swiper-slide>
            <swiper-slide
            class='h-[200px] w-full'
           >
               <p class='text-[1rem]'>"Thanks for your work here, I would say I am happy with the output."</p>
               <p class='text-[#d3d3d3] text-[.8rem] gap-1 flex items-center mt-[10px]'> - Mike, <span class='text-[#7a8293]'>Client</span></p>
           </swiper-slide>
          </swiper-container>
        </div>
    </div>

    <div class='w-full mt-[40px]'>
        <p class='text-[#7a8293] mb-[10px]'>Dumps</p>
        <p class='text-[#fff]'>Here you can find random ui/ux design related stuff i worked on during my free time</p>
    </div>
</div>