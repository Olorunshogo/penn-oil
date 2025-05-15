
// Homepage Video SLider
export const homeHeroBgs = ref([  

    // 1. Penn Petro Energy reports first-quarter 2025 results
    {
        id: 1,  
        // videoSrc: "/homepage/Homepage-hero5-video.mp4",
        videoSrc: "https://www.chevron.com/-/media/chevron/homepage/videos/CVXHP_838089087.mp4",
        bgColor: "var(--medium-blue)",
        heading: "Penn Petro Energy reports first-quarter 2025 results",
        paragraph: "Our latest quarterly insights are now available.",
        link: "/investors/overview",
        linkName: "Visit our investors page to learn more"  
    },

    // 2. More with less
    {
        id: 2,  
        // videoSrc: "/homepage/Homepage-hero2-video.mp4",
        videoSrc: "https://www.chevron.com/-/media/chevron/homepage/videos/DotCom-Homepage_Ballymore_First_Oil_Ambient_Hero_V1-D3.mp4",
        bgColor: "var(--medium-blue)",
        heading: "More with less",
        paragraph: "We've reached first oil at our Ballymore subsea tieback in the Gulf of America showcasing how we're leveraging technology and driving efficiencies to deliver affordable, reliable energy production.",
        link: "/investors/overview",
        linkName: "Visit our investors page to learn more"  
    },

    // 3. Unlocking the growth in the gulf
    {
        id: 3,  
        // videoSrc: "/homepage/Homepage-hero3-video.mp4",
        videoSrc: "https://www.chevron.com/-/media/chevron/homepage/videos/GOA_Homepage_4sec_Anchor_Nospd.mp4",
        bgColor: "var(--medium-blue)",
        heading: "Unlocking the growth in the gulf",
        paragraph: "We're expanding operations in the Gulf of America, with a goal to produce 300,000 net barrels of oil-equivalent per day in 2026.",
        link: "/sustainability/overview",
        linkName: "Learn more"  
    },

    // 4. Powering the future
    {
        id: 4,  
        // videoSrc: "/homepage/Homepage-hero2-video.mp4",
        videoSrc: "https://www.chevron.com/-/media/chevron/homepage/videos/DotCom-Homepage_Ballymore_First_Oil_Ambient_Hero_V1-D3.mp4",
        bgColor: "var(--medium-blue)",
        heading: "Powering the future",
        paragraph: "Penn Petro Energy's 2024 annual report highlights our continued commitment to building a resilient energy system that powers human progress.",
        link: "/investors/overview",
        linkName: "Download the report"  
    },
    
    // 5. Powering AI with natural gas
    {   
        id: 5,  
        // videoSrc: "/homepage/Homepage-hero5-video.mp4",
        videoSrc: "https://www.chevron.com/-/media/chevron/homepage/videos/CVXHP_838089087.mp4",
        bgColor: "var(--medium-blue)",
        heading: "Powering AI with natural gas",
        paragraph: "Penn Petro Energy, Engine No. 1 and GE Vernova join forces to develop scalable, reliable power solutions for U.S. data centers.",
        link: "/newsroom",
        linkName: "Learn more"  
    },
    
    // 6. Expansion in Kazakhstan hits first oil
    {
        id: 6,  
        // videoSrc: "/homepage/Homepage-hero3-video.mp4",
        videoSrc: "https://www.chevron.com/-/media/chevron/homepage/videos/GOA_Homepage_4sec_Anchor_Nospd.mp4",
        bgColor: "var(--medium-blue)",
        heading: "Expansion in Kazakhstan hits first oil",
        paragraph: "Tengizchevroil's Future Growth Project aims to increase oil productivity by 260,000 barrels per day.",
        link: "/newsroom",
        linkName: "Read the news release"  
    },
]);



// Who Overview
export const whoOverviewHeroVideoBg = ref({    
    videoSrc: "/who/who-we-are-overview-hero-video.mp4",
    title: "Who we are",
    titleBgVideoSrc: "/videos/who/who-we-are-overview-hero-video.mp4",
    paragraph: "Energy drives human progress and creates positive change for modern society. We work hard to deliver energy that can improve the lives of millions of people around the world.",
    displayLink: false,
    link: "/newsroom",
    linkName: "Read more about our environmental efforts"        
});

// Who Culture
export const whoCultureHeroVideoBg = ref({    
    // videoSrc: "/who/who-we-are-culture-hero-video.mp4",
    videoSrc: "/who/who-we-are-overview-hero-video.mp4",
    category: "who we are",
    title: "Our culture",
    titleBgVideoSrc: "/videos/who/who-we-are-hero-video-compressed.mp4",
    paragraph: "We work hard to provide energy that helps improve the lives of people around the world. The Operational Excellence Management System is a core part of how we do it. We promote a culture that values a diversity of perspectives, productive dialogue and teaming that help us deliver the future of energy.",
    displayLink: false,
    link: "/newsroom",
    linkName: "Read more about our environmental efforts"        
});

// Who Brands
export const whoBrandsHeroImageBg = ref({    
    imgSrc: "https://images.pexels.com/photos/8960944/pexels-photo-8960944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imgAlt: "Woman in White Hardhat Holding Silver Touchscreen Device",
    category: "Who we are",
    title: "Our brands",
    titleBgImageSrc: "https://images.pexels.com/photos/8960944/pexels-photo-8960944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    paragraph: "Penn Petro Energy is taking steps to help protect the environment where we operate. We do this by stewarding our water usage, integrating biodiversity into our decision making, reducing waste and managing air emissions from our operations.",
    displayLink: false,
    link: "/newsroom",
    linkName: "Read more about our environmental efforts"        
});

// Who Leadership
export const whoLeadershipHeroImageBg = ref({    
    imgSrc: "https://images.pexels.com/photos/8428092/pexels-photo-8428092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imgAlt: "A Man in White Long Sleeves Having a Deal with the Man in Black Suit",
    category: "Who we are",
    title: "Penn Leadership",
    titleBgImageSrc: "https://images.pexels.com/photos/8428092/pexels-photo-8428092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    paragraph: "Our culture is built upon the principles of responsibility, trust and integrity. Our leadership is a profound source of pride, as we lead in the future of energy.",
    displayLink: false,
    link: "/newsroom",
    linkName: "Read more about our environmental efforts"        
});



// What Overview
export const whatOverviewHeroVideoBg = ref({    
    videoSrc: "/what/what-we-do-overview-hero-video.mp4",
    title: "What we do",
    titleBgVideoSrc: "/videos/what/what-we-do-overview-hero-video.mp4",
    paragraph: "The world’s energy demands are greater than ever before. We’re working to deliver the lower carbon energy needed today while building the energy system of tomorrow.",
    displayLink: false,
    link: "/newsroom",
    linkName: "Read more about our environmental efforts"        
});

// What Energy
export const whatEnergyHeroVideoBg = ref({    
    videoSrc: "/what/what-we-do-energy-hero-video.mp4",
    category: "what we do",
    title: "Energy solutions",
    titleBgVideoSrc: "/videos/what/what-we-do-energy-hero-video.mp4",
    paragraph: "Affordable, reliable and ever-cleaner energy for today and tomorrow. That’s what we’re working towards, every day.",
    displayLink: false,
    link: "/newsroom",
    linkName: "Read more about our environmental efforts"        
});

// What Technology
export const whatTechnologyHeroImageBg = ref({    
    imgSrc: "https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imgAlt: "Black Prosthetic Arm",
    category: "Who we are",
    title: "Technology and innovation",
    titleBgImageSrc: "https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    paragraph: "Accelerating progress to power our world today and build the lower carbon energy system of the future.",
    displayLink: false,
    link: "/newsroom",
    linkName: "Read more about our environmental efforts"        
});



// Sustainability Overview
export const sustainabilityOverviewHeroVideoBg = ref({    
    videoSrc: "/sustainability/sustainability-overview-hero-video.mp4",
    title: "Sustainability",
    titleBgVideoSrc: "/sustainability/sustainability-overview-hero-video.mp4",
    paragraph: "We strive to protect the environment, empower people and get results the right way. This approach is integrated throughout our business.",
    displayLink: false,
    link: "/newsroom",
    linkName: "Read more about our environmental efforts"        
});

// Sustainability Climate
export const sustainabilityClimateHeroImageBg = ref({    
    imgSrc: "/sustainability/sustainability-hero-picture.jpeg",
    imgAlt: "Solar panels on a mountain",
    category: "Sustainability",
    title: "Climate",
    titleBgImageSrc: "/sustainability/sustainability-hero-picture.jpeg",
    paragraph: "We all have a stake in a reliable, affordable energy system. Our belief that the future is lower carbon drives Penn Petro Energy's lower carbon ambitions and the actions we take to advance them.",
    displayLink: false,
    link: "/newsroom",
    linkName: "View our social initiatives around the world"        
});

// Sustainability Environment
export const sustainabilityEnvironmentHeroImageBg = ref({    
    imgSrc: "/sustainability/sustainability-environment-hero-image.jpeg",
    imgAlt: "Wind Turbines Near Brown Mountains and Railway",
    category: "Sustainability",
    title: "Environment",
    titleBgImageSrc: "/sustainability/sustainability-environment-hero-image.jpeg",
    paragraph: "Penn Petro Energy is taking steps to help protect the environment where we operate. We do this by stewarding our water usage, integrating biodiversity into our decision making, reducing waste and managing air emissions from our operations.",
    displayLink: false,
    link: "/newsroom",
    linkName: "Read more about our environmental efforts"        
});

// Sustainability Social
export const sustainabilitySocialHeroImageBg = ref({    
    imgSrc: "https://images.pexels.com/photos/6646778/pexels-photo-6646778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imgAlt: "Two ladies and a man sharing aids",
    category: "sustainability",
    title: "Social investment",
    titleBgImageSrc: "https://images.pexels.com/photos/6646778/pexels-photo-6646778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    paragraph: "We believe our business succeeds when our people and communities succeed. Our social investments seek to respond to needs in the communities where we operate around the world. We seek to work with communities and partners to promote job growth and economic development.",
    displayLink: false,
    link: "/sustainability",
    linkName: "Read more about our environmental efforts"        
});


// Investors Overview
export const investorOverviewHeroImageBg = ref({    
    imgSrc: "https://images.pexels.com/photos/6150527/pexels-photo-6150527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imgAlt: "Man in Sweatshirt In Front of People",
    category: "",
    title: "Investor relations",
    titleBgImageSrc: "https://images.pexels.com/photos/6150527/pexels-photo-6150527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    paragraph: "We believe our business thrives when our investors and stakeholders succeed. Our investor relations efforts are focused on transparent communication and building long-term value. We strive to engage with our investors and partners to foster trust, promote sustainable growth, and create shared economic opportunities.",
    displayLink: true,
    link: "/investors/overview",
    linkName: "Learn more"        
});



// Careers Page
export const careersHeroImageBg = ref({    
    imgSrc: "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg",
    imgAlt: "Group of Women Standing Near Desk",
    title: "Careers",
    titleBgImageSrc: "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg",
    paragraph: "We believe our business succeeds when our people and communities succeed. Our social investments seek to respond to needs in the communities where we operate around the world. We seek to work with communities and partners to promote job growth and economic development.",
    displayLink: false,
    link: "/sustainability",
    linkName: "Read more about our environmental efforts"        
});