<script lang='ts'>
  import { ArrowUpRight, ExternalLink, Mail } from "@lucide/svelte";
  import Docker from "./hero-cons/Integration icons/docker.svelte";
  import Figma from "./hero-cons/Integration icons/figma.svelte";
  import Firebase from "./hero-cons/Integration icons/firebase.svelte";
  import Framer from "./hero-cons/Integration icons/framer.svelte";
  import Mongodb from "./hero-cons/Integration icons/mongodb.svelte";
  import VsCode from "./hero-cons/Integration icons/vs_code.svelte";
  import Webflow from "./hero-cons/Integration icons/webflow.svelte";
  import Wordpress from "./hero-cons/Integration icons/wordpress.svelte";
  import Next from "./hero-cons/next.svelte";
  import Node from "./hero-cons/node.svelte";
  import Svlte from "./hero-cons/svlte.svelte";
  import Typescript from "./hero-cons/typescript.svelte";

import { register } from 'swiper/element/bundle';
  import Slider from "./slider.svelte";
  import Github2 from "./hero-cons/Integration icons/github2.svelte";
register();
 const spaceBetween = 10;
  const onProgress = (e: CustomEvent<[swiper: any, progress: number]>) => {
  const [swiper, progress] = e.detail;
    console.log(progress);
  };


</script>

<div class='w-full md:max-w-[1300px] max-w-[95vw] md:px-10 mx-auto'>
    <p class='text-[#7a8293] tracking-tighter'>About me</p>
    <div class='md:flex-row flex-col flex items-start justify-between md:mt-[40px] mt-[20px] gap-[100px]'>
        <div 
        style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {1 * 0.2}s; opacity: 0; transform: translateY(10px);"
        class='flex flex-col items-start justify-start md:text-[4rem] text-[3.4rem] md:w-[40%] w-full text-[#d3d3d3] tracking-[-2px] md:leading-[60px] leading-[50px]'>
            Full-Stack Developer & UI/UX Designer
            <div 
            style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {1 * 0.3}s; opacity: 0; transform: translateY(10px);"
            class="flex flex-wrap items-center justify-start gap-[10px] mt-[30px]">
                <Svlte/> <Next/> <Typescript/> <Figma/> <Framer/> <Node/> <Github2/> <Webflow/> <Wordpress/> <Mongodb/> <Firebase/> <Docker/> <VsCode/>
            </div>

        <div 
        style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {1 * 0.4}s; opacity: 0; transform: translateY(10px);"
        class="mt-[30px] w-full flex text-[.9rem] text-white items-center gap-[10px]">
        <a 
        target="_blank"
        href='mailto:davidebe63@gmail.com'
        class='gap-1 !text-[#000] tracking-[0px] !bg-[#fff] w-fit p-[10px] h-[40px] rounded-[30px] flex items-center justify-center px-[20px]'>
          Send an email 
          <Mail
          size={14}
          />
        </a>
        <a 
        target="_blank"
        href='https://calendar.app.google/4PWEEC1grsbukDpe9'
        class=' w-fit tracking-[0px] p-[10px] h-[30px] rounded-2xl flex items-center justify-center '>
          Book a Call <ArrowUpRight size={15}/>
        </a>
        </div>
        </div>

        <div 
        style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {1 * 0.5}s; opacity: 0; transform: translateY(10px);"
        class='text-[#d3d3d3] text-[1.1rem] md:w-[55%] w-full'>
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
            <hr 
            style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {1 * 0.6}s; opacity: 0; transform: translateY(10px);"
            class='my-[20px]'/>
            <p
            style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {1 * 0.7}s; opacity: 0; transform: translateY(10px);"
            class="mt-[20px] mb-[10px]"
            >Selected Feedbacks</p>
            <swiper-container
            slides-per-view={1}
            space-between={spaceBetween}
            centered-slides={true}
            autoplay={true}
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
                <p class='text-[#d3d3d3] text-[.8rem] gap-1 flex items-center mt-[10px]'> - Furkan Boran, <span class='text-[#7a8293]'>Colleague</span></p>
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
</div>

<div 
id='dump'
class=' w-screen md:mt-[40px] mt-[70px] h-fit'>
    <p 
    style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {1 * 0.2}s; opacity: 0; transform: translateY(10px);"
    class='text-[#7a8293] mb-[10px] md:max-w-[1300px] mx-auto md:px-10 px-4 md:text-[3rem] text-[1.5rem]'>Gallery</p>
    <p 
    style="animation: fadeInUp 0.6s ease-out forwards; animation-delay: {1 * 0.2}s; opacity: 0; transform: translateY(10px);"
    class='text-[#fff] md:max-w-[1300px] mx-auto md:px-10 px-4'>Here you can find random ui/ux design related stuff i worked on during my free time</p>
    <Slider/>
</div>

