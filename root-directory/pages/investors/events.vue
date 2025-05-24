
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Investor Events and Presentatios: Pennpetro Energy PLC',
        titleTemplate: '%s | Pennpetro Energy PLC'
    });

    useSeoMeta({
        title: 'Pennpetro Energy PLC Investor Events | Stay Updated on Our Progress',
        ogTitle: 'Investor Events - Pennpetro Energy PLC | Join Us at Key Investor Gatherings',
        description: 'Stay informed about upcoming investor events at Pennpetro Energy PLC. Participate in webinars, conferences, and earnings calls to learn more about our company’s performance and future strategies.',
        ogDescription: 'Join Pennpetro Energy PLC at upcoming investor events, where we discuss our growth, sustainability initiatives, and market outlook. Stay engaged with our latest developments and strategies for the future of energy.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'An investor event hosted by Pennpetro Energy PLC with key executives speaking to an audience.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/investors/events',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Join Pennpetro Energy PLC Investor Events | Stay Engaged with Our Growth',
        twitterDescription: 'Get the latest updates and insights at Pennpetro Energy PLC’s investor events. Join us for discussions on our sustainability efforts, energy innovations, and financial outlook.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Pennpetro Energy PLC investor events, investor webinars, energy investor conferences, Penn Petro earnings calls, energy company updates, sustainable energy events, investor relations, clean energy events',
    });

    const openInvestorsNav = ref<boolean>(false);
    function toggleInvestorNavLinks() {
        openInvestorsNav.value = !openInvestorsNav.value;
    }


</script>


<template>
    <div class="w-full h-full bg-white">

        <!-- Section: Hero -->
        <section>   
            <div class="relative w-screen min-h-160 md:min-h-170 h-full">

                <!-- Investor Navbar -->
                <div class="relative left-0 top-16 sm:top-12 flex flex-col w-full h-fit px-(--section-px) lg:px-(--section-px-lg) bg-transparent z-10">
                    
                    <div class="flex flex-col w-9/10 lg:w-4/5 max-w-7xl mx-auto h-fit shadow-2xl rounded-lg bg-(--dark-blue)">

                        <!-- Mobile Screen Investors Nav -->

                        <div class="flex lg:hidden flex-col lg:flex-row justify-between px-4 w-full">
                        
                            <div class="flex items-center justify-between w-full h-10 *:text-(--white)">
                                <NuxtLink
                                    to="/investors/overview"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) duration-300 ease-in-out transition-all"
                                >
                                    <span class="group-hover:underline-text font-bold text-xs lg:text-sm">Investors</span>
                                </NuxtLink>

                                <button 
                                    @click="toggleInvestorNavLinks"
                                    class="flex items-center justify-center cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-lg font-bold duration-500 ease-in-out transition-all" 
                                        :class="{ 'rotate-180': openInvestorsNav }"
                                    />
                                </button>
                                    
                            </div>

                            <div class="flex items-center w-full h-fit">
                                <Transition name="slide-down">
                                    <div 
                                        v-if="openInvestorsNav"
                                        class="flex flex-col items-center justify-between w-full h-full"
                                    >
                                        <NuxtLink
                                            to="/investors/events"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">Events and presentations</span>
                                        </NuxtLink>

                                        <NuxtLink
                                            to="/investors/corporate"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">Corporate governance</span>
                                        </NuxtLink>

                                        <NuxtLink
                                            to="/investors/esg"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">ESG a-z index</span>
                                        </NuxtLink>

                                        <NuxtLink
                                            to="/investors/stock"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">Stock and dividend</span>
                                        </NuxtLink>

                                        <NuxtLink
                                            to="/contact"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">Contact</span>
                                        </NuxtLink>
                                    
                                    </div>
                                </Transition>
                            </div>

                        </div>

                        <!-- Large Screen Investors Nav -->
                        <div class="hidden lg:flex flex-col lg:flex-row items-center justify-between px-1 w-full h-10">
                        
                            <!-- <NuxtLink
                                to="/investors/overview"
                                class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--black) duration-300 ease-in-out transition-all"
                            >
                                <span class="group-hover:underline-text font-bold text-xs lg:text-sm">Investors</span>
                            </NuxtLink> -->

                            <NuxtLink
                                to="/investors/events"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Events</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/corporate"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Governance</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/esg"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">ESG</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/reports"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Reports</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/stock"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Stock info</span>
                            </NuxtLink>

                        </div>
                        
                    </div>

                </div>

                <div class="absolute top-30 w-full h-fit">
                    
                    <div class="flex flex-col items-center justify-center gap-16 w-full h-full max-w-7xl mx-auto px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

                        <div class="flex flex-col items-center justify-center text-center gap-8 w-full max-w-7xl mx-auto">                                

                            <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-(--dark-blue) text-center font-extrabold">
                                Events and <br> presentations
                            </h1>

                            <p class="text-(--black) text-center font-medium">
                                Elevate your investment strategies by exploring content from our recent and historic events and presentations.
                            </p>
                            
                        </div>

                        <p class="text-(--black) text-center font-medium">
                            Disclaimer: This portion of our Web site contains archival information. 
                            Archived presentations and supporting documents contained or referenced herein should not be considered current and may no longer be accurate
                        </p>
                    </div>
                </div>

            </div>
        </section>

        <!-- Section: Press releases -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-blue)/95 w-full h-full">
                
                <div class="flex flex-col xl:flex-row gap-8 md:gap-12 py-20 w-full max-w-7xl mx-auto">

                    <h2 
                        class="text-4xl md:text-5xl xl:text-6xl text-(--white) text-wrap text-center font-extrabold"
                    >
                        Press releases
                    </h2>

                    <!-- Investors Landing Carousel -->
                    <div class="flex items-center justify-center mx-auto w-full">
                    
                        <div class="relative left-6 flex items-center justify-center w-full h-full mx-auto">
                            <InvestorsEventsCarousel />
                        </div>

                    </div>                    
                
                </div>

            </div>

        </section>

        <!-- Section: Events & Presentations--
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">
                
                <div class="grid gap-12 py-20 md:gap-12 w-9/10 lg:w-full max-w-7xl mx-auto h-full">

                    <h2 class="font-medium text-center text-2xl text-(--dark-blue)">
                        Events &amp; Presentations
                    </h2>

                    <div class="grid gap-8 w-full h-full">

                        <!-- Upcoming Events -->
                        <!-- <div class="grid gap-4 w-full h-full">
                            <h3 class="font-medium text-xl md:text-2xl text-(--dark-blue)">
                                Upcoming Events
                            </h3>

                            <table class="w-full border-collapse text-left text-(--black) text-sm" role="table">
                                
                                <!-- Table Headers --
                                <thead>
                                    <tr class="bg-(--dark-blue) text-white font-bold *:p-3">
                                        <th scope="col" class="w-1/2 md:w-1/3">Date</th>
                                        <th scope="col" class="w-1/2 md:1/2">Title</th>
                                    </tr>
                                </thead>

                                <tbody class="font-medium w-full h-full">

                                    <tr class="w-full *:p-3">
                                        <td>
                                            Wednesday, May 28, 2025<br />10:00 AM CDT
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="2025 Annual Meeting of Stockholders"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    2025 Annual Meeting of Stockholders
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div> -->

                        <!-- Past Events --
                        <div class="grid gap-4 w-full h-full">
                            <h3 class="font-medium text-2xl text-(--dark-blue)">
                                Past Events
                            </h3>

                            <table class="w-full border-collapse text-left text-(--black) text-sm" role="table">
                                
                                <!-- Table Headers --
                                <thead>
                                    <tr class="bg-(--dark-blue) text-white font-bold *:p-3">
                                        <th scope="col" class="w-1/2 md:w-1/3">Date</th>
                                        <th scope="col" class="w-1/2 md:1/2">Title</th>
                                    </tr>
                                </thead>

                                <tbody class="font-medium w-full h-full">

                                    <tr class="w-full *:p-3">
                                        <td>
                                            Friday, May 02, 2025 <br> 11:00 AM EDT
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="1Q 2025 Pennpetro Energy PLC Earnings Conference Call"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    1Q 2025 Pennpetro Energy PLC Earnings Conference Call
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr class="w-full *:p-3 bg-(--light-gray)">
                                        <td>
                                            Tuesday, March 18, 2025<br />8:00 AM PDT
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="Piper Sandler 25th Annual Energy Conference"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    Piper Sandler 25th Annual Energy Conference
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr class="w-full *:p-3">
                                        <td>
                                            Friday, January 31, 2025<br />11:00 AM EST
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="4Q Pennpetro Energy PLC Earnings Conference Call"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    4Q Pennpetro Energy PLC Earnings Conference Call
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr class="w-full *:p-3 bg-(--light-gray)">
                                        <td>
                                            Wednesday, January 08, 2025<br />8:00 AM PDT
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="Goldman Sachs Energy, CleanTech &amp; Utilities Conference"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    Goldman Sachs Energy, CleanTech &amp; Utilities Conference
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr class="w-full *:p-3">
                                        <td>
                                            Friday, May 02, 2025 <br> 11:00 AM EDT
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="1Q 2025 Pennpetro Energy PLC Earnings Conference Call"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    1Q 2025 Pennpetro Energy PLC Earnings Conference Call
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr class="w-full *:p-3 bg-(--light-gray)">
                                        <td>
                                            Tuesday, March 18, 2025<br />8:00 AM PDT
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="Piper Sandler 25th Annual Energy Conference"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    Piper Sandler 25th Annual Energy Conference
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr class="w-full *:p-3">
                                        <td>
                                            Friday, January 31, 2025<br />11:00 AM EST
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="4Q Pennpetro Energy PLC Earnings Conference Call"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    4Q Pennpetro Energy PLC Earnings Conference Call
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr class="w-full *:p-3 bg-(--light-gray)">
                                        <td>
                                            Wednesday, January 08, 2025<br />8:00 AM PDT
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="Goldman Sachs Energy, CleanTech &amp; Utilities Conference"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    Goldman Sachs Energy, CleanTech &amp; Utilities Conference
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr class="w-full *:p-3">
                                        <td>
                                            Friday, May 02, 2025 <br> 11:00 AM EDT
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="1Q 2025 Pennpetro Energy PLC Earnings Conference Call"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    1Q 2025 Pennpetro Energy PLC Earnings Conference Call
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr class="w-full *:p-3 bg-(--light-gray)">
                                        <td>
                                            Tuesday, March 18, 2025<br />8:00 AM PDT
                                        </td>
                                        <td>
                                            <a
                                                to="#investorsPresentation"
                                                title="Piper Sandler 25th Annual Energy Conference"
                                                class="flex items-center *:flex gap-2 underline underline-offset-2 decoration-1 decoration-transparent hover:decoration-(--dark-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                            >
                                                <span class="text-(--dark-blue)">
                                                    Piper Sandler 25th Annual Energy Conference
                                                </span>
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>


                    </div>

                                  
                
                </div>

            </div>

        </section>
        -->

    </div>
</template>

<style lang="css" scoped>

    /* Underline Text */
    .group-hover\:underline-text {
        position: relative;
        display: inline-block;
    }

    .group-hover\:underline-text::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 1px;
        background-color: var(--dark-gray);
        transition: width 0.5s ease-in-out;
    }

    .group:hover .group-hover\:underline-text::after {
        width: 100%;
    }

    .arrow-icon {
        transition: transform 1s ease-in-out;
    }

    .group:hover .arrow-icon {
        transform: translateX(12px);
    }

    .group-hover\:arrow-move {
        animation: moveArrow 3s infinite alternate ease-in-out;
    } 

    /* Slide Down */
    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
        overflow: hidden;
    }

    .slide-down-enter-from,
    .slide-down-leave-to {
        max-height: 0;
        opacity: 0;
    }

    .slide-down-enter-to,
    .slide-down-leave-from {
        max-height: 10rem;
        opacity: 1;
    }

</style>

