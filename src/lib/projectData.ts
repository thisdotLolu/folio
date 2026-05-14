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
    longDescription: 'I pioneered the development of Odysee’s new Shorts feature, delivering a responsive, high-performance video experience across mobile and desktop. This included implementing autoplay logic, navigation/URL state synchronization, video aspect-ratio handling, scroll-driven UI behavior, and Redux-based state flows for recommended content. I refactored core React components to improve maintainability and performance, managed state with Redux resolved long-standing rendering issues (duplicate key warnings, unnecessary rerenders), and collaborated closely with the engineering team to ship a stable, scalable feature now used in production. My work focused heavily on implementing the best UX for quite a number of users, debugging complex UI behavior, improving performance, and ensuring a polished user experience.',
    tag: 'Development',
    role:'Contractual Senior Design Engineer',
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
      name:'blocknite',
      img: '/covers/degendevs-min.png',
      title: 'Blocknite',
      link: 'http://blocknite-presale.vercel.app/',
      role:'Lead Frontend Engineer',
      toolsUsed:'Supabase, Nextjs, Nodejs, Metaplex',
      shortDescription: 'Web based Game on Solana.',
      longDescription: `Involved in this project as a member of https://degendevs.com.
      \n\
      Leading FE development of https://blocknite.io Dapp, working with Spine animations/rendering, Mobile responsive Styling and other complex implementations.
      \n\
`,
      tag: 'Development',
      images: [
        '/projects/blocknite-1.png',
        '/projects/blocknite-2.png',
        '/projects/blocknite-3.png',
        '/projects/blocknite-4.png'
      ]
    },
    {
      name:'exotic-markets',
      img: '/covers/exotic-m.png',
      title: 'Exotic Markets',
      link: 'http://exotic.markets/',
      role:'Fullstack Engineer',
      toolsUsed:'React, Supabase, Nextjs, Nodejs, Solana',
      shortDescription: 'Decentralized Trading Platform.',
      longDescription: `Involved in this project as a member of https://degendevs.com.
      \n\
      Developed the frontend and backend of https://exotic.markets, a decentralized trading platform on Solana. Implemented complex features such as real-time market data, order book management, and secure wallet integration, ensuring a seamless trading experience for users. Collaborated closely with the team to optimize performance and enhance the user interface, contributing to the successful launch of the platform.`,
      tag: 'Development',
      images: [
        '/projects/exotic-1.png',
        '/projects/exotic-2.png',
        '/projects/exotic-3.png',
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
      name:'orma',
      img:'/covers/orma-min.png',
      title: 'Orma',
      link: 'https://app.ourorma.com/',
      shortDescription: 'Event photo app.',
      longDescription: 'Implemented core features like recently viewed, QR scanning, timeline view, and live feeds for the Orma photo management app.',
      tag: 'Development',
      role:'Contractual Senior Frontend Engineer',
      toolsUsed:'React, Supabase',
      images: [
       '/projects/orma1.webp',
       '/projects/orma2.webp',
       '/projects/orma3.webp',
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
      name:'autoecom-dashboard',
      title:'AutoEcom Dashboard',
      slug:'autoecom-dashboard',
      img:'/covers/autoecom-dashboard.png',
      shortDescription:'Ecommerce Logistics Dashboard',
      longDescription:'Researched and designed a unified inventory and analytics dashboard integrating Shopify, Ecwid, and Amazon APIs. Focused on data aggregation, order tracking, performance metrics, and AI-assisted insights, with an emphasis on scalable architecture, clear data hierarchy, and efficient UX for multi-channel commerce management.',
      toolsUsed:'Figma',
      caseStudyLink:'',
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
    name: 'agathon',
    img: 'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821053/agathon-1_cfdaop.webp',
    title: 'Agathon',
    slug: 'agathon',
    link: '',
    shortDescription: 'All-in-one productivity and learning workspace.',
    longDescription: 'Researched and designed a modular web application for journaling, note-taking, drawing boards, and PDF annotation tailored for students and teachers. Included features like session timers and content organization systems, with a focus on flexible component architecture, real-time interactions, and an intuitive UX for managing multi-format educational workflows.',
    tag: 'Figma',
    role: 'Designer',
    toolsUsed: 'Figma',
    images: [
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821054/agathon-2_rgmfdt.webp',
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821053/agathon-1_cfdaop.webp',
    ],
    caseStudyLink: 'https://www.figma.com/design/oGGj9zarfBCUiL3GGSAZv4/rushmore?node-id=693-682'
  },
    {
      name:'landing-pages',
      title:'Landing Pages',
      slug:'landing-pages',
      img:'/covers/landers.png',
      shortDescription:'Landing pages for various startups and companies.',
      longDescription:'Designed and developed landing pages for various startups and companies, focusing on clear messaging, compelling visuals, and conversion optimization. Each landing page was tailored to the specific brand and target audience, utilizing best practices in UX/UI design to drive engagement and achieve business goals.',
      toolsUsed:'Figma, Framer, Webflow',
      caseStudyLink:'https://www.figma.com/design/TpLNTnWDV1pYgq4tyh3RCd/LANDING-PAGES?node-id=0-1&t=thyCFfYJt9xXYAWw-1',
      images: ['']
    },
    {
      name:'vently',
      title:'Vently',
      slug:'vently',
      img:'/covers/vently.png',
      shortDescription:'Event Management Mobile Application',
      longDescription:'Vently is a mobile application that allows users to discover, create, and manage events seamlessly. The app provides features such as event creation, ticketing, social sharing, and real-time updates to enhance the event experience for both organizers and attendees.',
      toolsUsed:'Figma',
      caseStudyLink:'',
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
      shortDescription:'Mobile app for pet health management.',
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
  ]


  export const landingPageProjects = [
  {
    name: 'Stacknet',
    title: 'Stacknet',
    slug: 'stacknet',
    img: 'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878450/stackt-5_r80tcu.webp',
    shortDescription: 'Startup website for Stacknet.',
    toolsUsed: 'Webflow, Figma, GSAP',
    tag: 'Webflow',
    link: 'https://stack-net.webflow.io',
    images: [
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878460/stackt-1_eozxjn.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878450/stackt-5_r80tcu.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878522/stackt-4_jrxvas.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878450/stackt-6_mktvvu.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878443/stackt-2_egfovz.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774879380/stackt-3_zkrva0.webp',
    ],
  },
  {
    name: 'Schedule Drop',
    title: 'Schedule Drop',
    slug: 'schedule-drop',
    img: 'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878460/sd-2_nrdkit.webp',
    shortDescription: 'Startup website for ScheduleDrop.',
    toolsUsed: 'Framer, Figma',
    tag: 'Framer',
    link: 'https://scheduledrop.framer.website',
    images: [
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878460/sd-2_nrdkit.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878443/sd-3_q4jwjl.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878442/sd-1_gjjqcl.webp',
    ],
  },
  {
    name: 'Cythry',
    title: 'Cythry',
    slug: 'cythry',
    img: 'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821055/cyt-1_j7yg9d.webp',
    shortDescription: 'Business website for Cythry.',
    toolsUsed: 'Figma, Webflow',
    tag: 'Webflow',
    link: 'https://cythry.webflow.io',
    images: [
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821055/cyt-1_j7yg9d.webp',
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821054/cyt-4_i5dcok.webp',
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821055/cyt-2_vqt9od.webp',
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821053/cyt-3_y7ocgd.webp',
    ],
  },
  {
    name: 'AutoEcom',
    title: 'AutoEcom',
    slug: 'autoecom-landing',
    img: 'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821052/ae-2_nbqbl2.webp',
    shortDescription: 'Startup website for AutoEcom.',
    toolsUsed: 'Framer, Figma',
    tag: 'Framer',
    link: 'https://autoecom.framer.website',
    images: [
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821052/ae-2_nbqbl2.webp',
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821053/ae-1_z2gnxo.webp',
    ],
  },
  {
    name: 'Oncourt',
    title: 'Oncourt',
    slug: 'oncourt',
    img: 'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878374/oncourt-1_rffhxt.webp',
    shortDescription: 'Basketball Streaming CMS Website.',
    toolsUsed: 'Webflow, Figma, GSAP',
    tag: 'Webflow',
    link: 'https://oncourt-cmstream.webflow.io/',
    images: [
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878374/oncourt-1_rffhxt.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878371/onc-1_w75dbz.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878369/onc-2_djt2zq.webp',
    ],
  },
  {
    name: 'Ember and Vine',
    title: 'Ember and Vine',
    slug: 'ember-and-vine',
    img: 'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821059/emberandvine_fs8fak.webp',
    shortDescription: 'Restaurant Website Design and Development.',
    toolsUsed: 'Framer',
    tag: 'Framer',
    link: 'https://emberandvine.framer.website/',
    images: [
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821059/emberandvine_fs8fak.webp',
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821057/ev-4_bqbjjv.webp',
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821057/ev-2_aylm3m.webp',
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821056/ev-3_bk9gpz.webp',
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821089/ev-5_dglh4x.webp',
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774822851/ev-6_dqx3rp.webp',
    ],
  },
  {
    name: 'Portfolio',
    title: 'Portfolio',
    slug: 'portfolio',
    img: 'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821053/alex-chen-1_oaetzu.webp',
    shortDescription: 'Portfolio Website Design and Development.',
    toolsUsed: 'Framer',
    tag: 'Framer',
    link: 'https://alexchen.framer.website/',
    images: [
      'https://res.cloudinary.com/dpnulun4a/image/upload/v1774821053/alex-chen-1_oaetzu.webp',
    ],
  },
   {
    name: 'Cythority',
    title: 'Cythority',
    img: 'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878291/new-cyt-4_cvwwbc.webp',
    slug: 'cythority',
    link: 'https://cythority.com/',
    shortDescription: 'Cybersecurity website with multi-vertical architecture.',
    longDescription: 'Researched, designed, and developed a cybersecurity website for Cythority, structuring three core verticals—MSSP, vSOC, and AI incubator with staffing solutions—into a clear, modular information architecture. Focused on content segmentation, scalable layout systems, and conversion-driven UX to effectively communicate distinct service offerings while maintaining a cohesive brand experience.',
    tag: 'Javascript',
    toolsUsed: 'Javascript, Framer motion, Figma',
    images: [
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878291/new-cyt-4_cvwwbc.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878286/new-cyt-2_bsovyw.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878291/new-cyt-3_fqiwvs.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878284/new-cyt-1_fb4ny2.webp',
    ],
    figma: 'https://www.figma.com/design/TpLNTnWDV1pYgq4tyh3RCd/LANDING-PAGES?node-id=0-1&t=thyCFfYJt9xXYAWw-1'
  },
  {
    name: 'GLDC',
    title: 'GLDC',
    img: 'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878099/gldc-1_twzkem.webp',
    slug: 'gldc',
    link: 'https://gldc.world/',
    shortDescription: 'Crypto Website Design and Development.',
    longDescription: 'Designed and developed a crypto-focused platform for gold-backed assets, enabling gold swapping and investment insights. Structured features around asset valuation, swap flows, and informational content, with a focus on secure UX patterns, clear data presentation, and conversion-oriented design',
    tag: 'Javascript',
    role: 'Designer and JavaScript Developer',
    toolsUsed: 'Javascript, Framer motion, Figma',
    images: [
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878089/gldc-2_jbgwx0.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878099/gldc-1_twzkem.webp',
      'https://res.cloudinary.com/dl5iyq6cp/image/upload/v1774878131/gldc-3_ebiug1.webp',
    ],
    figma: 'https://www.figma.com/design/TpLNTnWDV1pYgq4tyh3RCd/LANDING-PAGES?node-id=0-1&t=thyCFfYJt9xXYAWw-1'
  },
];


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


