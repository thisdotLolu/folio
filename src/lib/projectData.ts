export function linkify(text: string) {
  return text.replace(
    /(https?:\/\/[^\s]+)/g,
    (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline">${url}</a>`
  );
}

export const devProjects:DevProject[] = [
  {
    name:'odysee',
    img: '/covers/odysee.png',
    title: 'Odysee',
    link: 'https://odysee.com',
    shortDescription: 'Decentralized Video Platform, Youtube alternative.',
    longDescription: 'I contributed to the development of Odysee’s new Shorts feature, delivering a responsive, high-performance video experience across mobile and desktop. This included implementing autoplay logic, navigation/URL state synchronization, video aspect-ratio handling, scroll-driven UI behavior, and Redux-based state flows for recommended content. I refactored core React components to improve maintainability and performance, managed state with Redux resolved long-standing rendering issues (duplicate key warnings, unnecessary rerenders), and collaborated closely with the engineering team to ship a stable, scalable feature now used in production. My work focused heavily on debugging complex UI behavior, improving performance, and ensuring a polished user experience.',
    tag: 'Development',
    role:'Contractual Senior Frontend Engineer',
    toolsUsed:'React, Redux, Sentry, Flow, Arweave',
    images: [
     '/projects/odysee1.png',
     '/projects/odysee2.png',
     '/projects/odysee3.png',
    ]
  },
  {
    name:'rollpay',
    img: '/covers/rollpay-min.png',
    title: 'Rollpay',
    link: 'https://business.rollpay.app/',
    shortDescription: 'Film industry payroll platform.',
    longDescription: 'Developed frontend of the payroll system tailored for film production in Africa. Built forms, tables, secure auth, and KYC system.',
    tag: 'Development',
    role:'Contractual Senior Frontend Engineer',
    toolsUsed:'Nextjs, Monnify Payment Gateway',
    images: [
     '/projects/rollpay1.webp',
     '/projects/rollpay2.webp',
     '/projects/rollpay3.webp',
    ]
  },
    {
      name:'degendevs',
      img: '/covers/degendevs-min.png',
      title: 'Degen Devs',
      link: 'https://degendevs.com',
      role:'Core member of the Fullstack Development team',
      toolsUsed:'React, Nextjs, Nodejs',
      shortDescription: 'Fullstack Developer.',
      longDescription: `Rebuilt most of the landing page implementation.
      \n\
      Leading FE development of https://blocknite.io Dapp, working with Spine animations/rendering, Mobile responsive Styling and other complex implementations.
      \n\
      Worked on other projects including https://exotic.markets , https://betlifesports.com`,
      tag: 'Development',
      images: [
        '/projects/blocknite-1.png',
        '/projects/blocknite-2.png',
        '/projects/blocknite-3.png',
        '/projects/blocknite-4.png',
        '/projects/degendev1.png',
        '/projects/degendev2.png'
      ]
    },
    {
        name:'learning-with-ai',
        img: '/covers/lwai-min.png',
        title: 'Learning With AI',
        link: 'https://learningwith.ai',
        role:"Contractual Senior Frontend Engineer",
        shortDescription: 'AI assistant interface.',
        longDescription: 'Built chat interface and auth for an AI assistant tool using OpenAI APIs, Firebase for user data/auth, and Reactstrap for clean reusable UI.',
        tag: 'Development',
        toolsUsed:'React,Firebase,Nodejs',
        images: [
          '/projects/lwai1.webp',
          '/projects/lwa2.webp'
        ]
    },
    {
        name:'glfzy',
        img: '/covers/glfzy-min.png',
        title: 'Glfzy - Golf Tee time management platform',
        link: 'https://github.com/thisdotLolu/glfzy-new',
        role:"Svelte Developer",
        shortDescription: 'Groups, Tee times management, Stats, Golf Courses',
        longDescription: 'Built Full App to current look using Supabase, Sveltekit and Shadcn.',
        tag: 'Development',
        toolsUsed:'Sveletkit, Supabase, Shadcn, MapboxGL',
        images: [
         '/projects/glfzy1.png',
         '/projects/glfzy2.png',
         '/projects/glfzy3.png',
         '/projects/glfzy4.png',
         '/projects/glfzy5.png',
         '/projects/glfzy6.png',
         '/projects/glfzy7.png',
         '/projects/glfzy8.png',
        ]
    },
     {
      name:'gldc',
      title:'GLDC',
      link:'https://gldc.world',
      img:'/covers/gldc-min.png',
      shortDescription:'Crypto Token Website',
      longDescription:'Design and Development of website and Swap Implementation for a GOLD backed crypto token on SUI Network',
      toolsUsed:'Figma, Nextjs',
      tag: 'Design',
      role:'Designer and Developer',
      images: [
        '/projects/gldc1.png',
        '/projects/gldc2.png',
        '/projects/gldc3.png'
      ]
    },
      {
      name:'contractor-lead-flow',
      img: '/covers/clf-min.png',
      title: 'Contractor Lead Flow',
      link: 'https://clflow.vercel.app/',
      shortDescription: 'Built full website with Stripe Integration.',
      longDescription: 'Designed and developed the entire website, including landing page, pricing sections, and Stripe payment integration, using Next.js and Framer Motion.',
      tag: 'Design',
      role:'Designer and Developer',
      toolsUsed:'Figma, Nextjs, Framer motion, Stripe Payments',
      images: [
        '/projects/clf1.webp',
        '/projects/clf2.webp',
        '/projects/clf3.webp',
        '/projects/cl4.webp',
      ]
    },
    {
      name:'taoshi',
      img: '/covers/taoshi-min.png',
      title: 'Taoshi Dashboard',
      link: 'https://taoshidashboard.com',
      shortDescription: 'Miner performance dashboard.',
      longDescription: 'Real-time performance tracking and visual dashboards for crypto miner performance. Built from scratch to current look, added all features including complex arithmetic calculations to achieve stats of miners and daily returns of miners using daily crypto asset prices and taoshi api.',
      tag: 'Development',
      role:'Fullstack Developer and Designer',
      toolsUsed:'React, Nodejs, Python, MongoDB',
      images: [
        '/projects/taoshi1.webp',
        '/projects/taoshi2.webp',
        '/projects/taoshi3.webp',
        '/projects/taoshi4.webp',
        '/projects/taoshi5.webp',
      ]
    },
    {
      name:'orma',
      img:'/covers/orma-min.png',
      title: 'Orma',
      link: 'https://app.ourorma.com/',
      shortDescription: 'Event photo app.',
      longDescription: 'Implemented core features like recently viewed, QR scanning, timeline view, and live feeds for the Orma photo management app.',
      tag: 'Development',
      role:'Contractual Senior Frontend Engineer',
      toolsUsed:'React',
      images: [
       '/projects/orma1.webp',
       '/projects/orma2.webp',
       '/projects/orma3.webp',
      ]
    },
    {
      name:'velia',
      img: '/covers/tnc-min.png',
      title: 'Velia Nobili T&C System',
      tag: 'Development',
      role:'Contractual Senior Frontend Engineer',
      toolsUsed:'Nextjs13, Formik, React PDF',
      link: 'https://tnc.velianobili.com/',
      shortDescription: 'Legal T&C system.',
      longDescription: 'Built full app for handling terms and condition agreements for legal services. Used React PDF, Formik and Next.js 13.',
      images: [
        '/projects/velia2.webp',
        '/projects/velia1.webp',
        '/projects/velia3.webp',
      ]
    },
    {
      name:'svelte-musicl',   
      img: '/covers/svelte-musicl-min.png',
      title: 'Sv Music',
      link: 'https://github.com/thisdotLolu/svelte-musical',
      shortDescription: 'Music Previews with Deezer API.',
      longDescription: 'Apple music style previews app using SvelteKit and Deezer API. Features include search, play, pause, plalists, spotify authentication, and more.',
      tag: 'Development',
      role:'Svelte Developer',
      toolsUsed:'Sveltekit, Deezer API',
      images: [
        '/projects/svelte-musicl1.png',
        '/projects/svelte-musicl2.png',
        '/projects/svelte-musicl3.png',
        '/projects/svelte-musicl4.png',
        '/projects/svelte-musicl5.png',
        '/projects/svelte-musicl6.png',
        '/projects/svelte-musicl7.png',
        '/projects/svelte-musicl8.png',
      ]
    },
      {
      name:"verus",
      img: '/covers/verus.png',
      title: 'Verus Mobile',
      link: 'https://github.com/VerusCoin/Verus-Mobile',
      shortDescription: 'Contribution to mobile app features',
      longDescription: 'Added features such as balance visibility toggle, coin tickers on chain list, light and dark mode toggle, send transaction process etc to the existing mobile app',
      tag: 'Development',
      role:'Mobile Engineer',
      toolsUsed:'React Native, Redux',
      images: []
    },
    {
      name:'learniverse',   
      img: '/covers/learniverse-min.png',
      title: 'Learniverse AI',
      link: 'https://learniverse.ai',
      shortDescription: 'Learning paths with AI.',
      longDescription: 'Collaborated with project owner to build blog CMS with Sanity, Stripe payment system, supabase authentication, and dashboard UI.',
      tag: 'Development',
      role:'Fullstack Developer',
      toolsUsed:'Nextjs13, Sanity,Supabase',
      images: [
       '/projects/learniverse1.webp',
       '/projects/learniverse2.webp',
      ]
    },
    {
      name:'777',
      img: '/covers/777sl-min.png',
      title: '777 Sense Labs',
      link: 'https://777senselabs.com/collections',
      shortDescription: 'Web3 collections page.',
      longDescription: 'Developed collection filtering, searching, and detail views using HeadlessUI, SWR, Wagmi, and Ethers.js.',
      tag: 'Development',
      role:'Frontend Developer',
      toolsUsed:'Nextjs13, SWR, Wagmi, Ethers.js',
      images: [
       '/projects/777.webp',
      ]
    },
    {
      name:"carlossy",
      img: '/covers/carlossy-min.png',
      title: 'Carlossy Meme Coin',
      link: 'https://carlossy-updated.vercel.app',
      shortDescription: 'Landing and dashboard UI.',
      longDescription: 'Developed full landing page and dashboard for the Carlossy crypto coin, focused on meme branding.',
      tag: 'Development',
      role:'Web Developer',
      toolsUsed:'Reactjs',
      images: [
        '/projects/carlossy1.png',
        '/projects/carlossy2.png',
        '/projects/carlossy3.png',
        '/projects/carlossy4.png',
        '/projects/carlossy5.png',
      ]
    },
  
  ];


  export const designProjects:DesignProject[] = [
    {
      name:'autoecom',
      title:'AutoEcom',
      slug:'autoecom',
      img:'/covers/autoecomlanding.png',
      shortDescription:'Ecommerce Logistics Landing Page',
      longDescription:'Landing page for an Ecommerce logistics company that provides shipping and delivery solutions for online stores.',
      toolsUsed:'Figma',
      caseStudyLink:'None yet',
      images: [
        '/projects/autoecom-landing.png',
      ]
    },
    {
      name:'vently',
      title:'Vently',
      slug:'vently',
      img:'/covers/vently.png',
      shortDescription:'Event Management Mobile Application',
      longDescription:'Vently is a mobile application that allows users to discover, create, and manage events seamlessly. The app provides features such as event creation, ticketing, social sharing, and real-time updates to enhance the event experience for both organizers and attendees.',
      toolsUsed:'Figma',
      caseStudyLink:'None yet',
      images: [
        '/projects/vently1.png',
        '/projects/vently37.png',
        '/projects/vently36.png',
        '/projects/vently6.png',
        '/projects/vently3.png',
        '/projects/vently4.png',
        '/projects/vently7.png',
        '/projects/vently8.png',
        '/projects/vently9.png',
        '/projects/vently10.png',
        '/projects/vently15.png',
        '/projects/vently5.png',
        '/projects/vently19.png',
        '/projects/vently17.png',
        '/projects/vently18.png',
        '/projects/vently22.png',
        '/projects/vently23.png',
        '/projects/vently24.png',
        '/projects/vently25.png',
        '/projects/vently26.png',
        '/projects/vently27.png',
        '/projects/vently28.png',
        '/projects/vently31.png',
        '/projects/vently32.png',
        '/projects/vently34.png',
        '/projects/vently35.png',
        '/projects/vently20-long.png',
        '/projects/vently21-long.png',
        '/projects/vently29-long.png',
        '/projects/vently30-longer.png',
        
      ]
    },
    {
      name:'autoecom-dashboard',
      title:'AutoEcom Dashboard',
      slug:'autoecom-dashboard',
      img:'/covers/autoecom-dashboard.png',
      shortDescription:'Ecommerce Logistics Dashboard',
      longDescription:'Dashboard design for an Ecommerce logistics company that provides shipping and delivery solutions for online stores.',
      toolsUsed:'Figma',
      caseStudyLink:'Coming Soon',
      images: [
        '/projects/autoecom1.png',
        '/projects/autoecom2.png',
        '/projects/autoecom3.png',
        '/projects/autoecom4.png',
        '/projects/autoecom5.png',
        '/projects/autoecom6.png',
        '/projects/autoecom7.png',
        '/projects/autoecom8.png',
        '/projects/autoecom9.png',
        '/projects/autoecom10.png',
        '/projects/autoecom11.png',
        '/projects/autoecom12.png',
        '/projects/autoecom13.png',
        '/projects/autoecom14.png',
      ]
    },
    {
      name:'testnet',
      title:'Testnet',
      slug:'testnet',
      img:'/covers/tstnet-min.png',
      shortDescription:'Startup Landing Page',
      longDescription:'Built a startup landing page for a System for automating production applications testing',
      toolsUsed:'Figma',
      caseStudyLink:'',
      images: [
        '/projects/testnet.png'
      ]
    },
      {
      name:'omie',
      title:'Omie',
      slug:'omie',
      img:'/covers/omie-min.png',
      shortDescription:'Mental Wellness Landing Page',
      toolsUsed:'Figma',
      caseStudyLink:'',
      images: [
        '/projects/omie-landing.png'
      ]
    },
    {
      name:'schedule-drop',
      title:'Schedule Drop',
      slug:'schedule-drop',
      img:'/covers/scheduledrop-min.png',
      shortDescription:'CRM Landing Page',
      longDescription:'A landing page for a CRM tool for cleaning businesses and cleaning company owners',
      toolsUsed:'Figma',
      caseStudyLink:'',
      images: [
        '/projects/sheduledrop.png'
      ]
    },
    {
      name:'schedule-drop-dashboard',
      title:'Schedule Drop',
      slug:'schedule-drop-dashboard',
      img:'/covers/scheduledash-min.png',
      shortDescription:'CRM web platform for cleaning service operations.',
      toolsUsed:'Figma',
      longDescription:'Redesign of ScheduleDrop – a CRM web platform for cleaning service operations.',
      caseStudyLink:'https://loludavid.notion.site/Full-Case-Study-1cb0d58b34778031b06ac9d1da349c3c',
      images: [
        '/projects/schedule-dash1.png',
        '/projects/schedule-dash2.png',
        '/projects/schedule-dash3.png',
        '/projects/schedule-dash4.png',
        '/projects/schedule-dash5.png',
        '/projects/schedule-dash6.png',
        '/projects/schedule-dash7.png',
        '/projects/schedule-dash8.png',
        '/projects/schedule-dash10.png',
        '/projects/schedule-dash11.png',
      ]
    },
    {
      name:'pet-health',
      title:'Pet Health',
      slug:'pet-health',
      img:'/covers/pethealth-min.png',
      shortDescription:'Mobile application for managing Pet medications and Treatments',
      toolsUsed:'Figma',
      longDescription:'The mobile app helps pet owners manage their pets’ lives, including social sharing, messaging, exploring pet-friendly locations, and tracking health activities like treatments, vaccines, and health records.',
      caseStudyLink:'https://loludavid.notion.site/Full-Case-Study-1cb0d58b34778030a19dda84ed927cb3',
      images: [
        '/projects/pethealth1.png',
        '/projects/pethealth2.png',
        '/projects/pethealth3.png',
        '/projects/pethealth4.png',
        '/projects/pethealth5.png',
        '/projects/pethealth6.png',
        '/projects/pethealth7.png',
        '/projects/pethealth8.png',
        '/projects/pethealth9.png',
        '/projects/pethealth10.png',
        '/projects/pethealth11.png',
        '/projects/pethealth12.png',
      ]
    },
    {
      name:'navora',
      title:'Navora LMS',
      slug:'navora',
      img:'/covers/navora-min.png',
      shortDescription:'Learning Management System',
      toolsUsed:'Figma',
      longDescription:'Redesigned LMS to improve students, learners and mentors experience across the application. Previous Dashboard was very poor UI/UX wise and stepped in to rework it to make sure users have a smoother experience navigating and achieving their goals.',
      caseStudyLink:'',
      images: [
        '/projects/navora1.png',
        '/projects/navora2.png',
        '/projects/navora3.png',
        '/projects/navora4.png',
        '/projects/navora5.png',
        '/projects/navora6.png',
        '/projects/navora7.png',
        '/projects/navora8.png',
        '/projects/navora9.png',
        '/projects/navora10.png',
        '/projects/navora11.png',
        '/projects/navora12.png',
      ]
    },
    // {
    //   name:'golden-vault',
    //   title:'Golden Vault',
    //   slug:'golden-vault',
    //   img:'/covers/goldenvault-min.png',
    //   shortDescription:'Community Landing Page',
    //   toolsUsed:'Figma',
    //   caseStudyLink:'',
    //   images: [
    //     '/projects/goldenvault.png'
    //   ]
    // },
    // {
    //   name:'henry-ai',
    //   title:'Henry AI',
    //   slug:'henry-ai',
    //   img:'/covers/henryai-min.png',
    //   shortDescription:'AI Startup Landing Page',
    //   toolsUsed:'Figma',
    //   caseStudyLink:'',
    //   images: [
    //     '/projects/henryai.png'
    //   ]
    // },
  ]


  export type DevProject = {
    name: string;
    img: string;
    title: string;
    link: string;
    shortDescription: string;
    longDescription: string;
    tag: string;
    role: string;
    toolsUsed: string;
    images: string[];
  }

  export type DesignProject = {
    name: string;
    slug: string;
    img: string;
    shortDescription?: string;
    longDescription?: string;
    toolsUsed?: string;
    caseStudyLink: string;
    images?: string[];
    title?: string; 
    role?: string;  
    tag?: string;   
    link?: string;  
  }


