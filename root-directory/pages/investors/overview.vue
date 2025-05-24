
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Pennpetro Energy PLC Investors: Delivering Strong Results',
        titleTemplate: '%s | Pennpetro Energy PLC'
    });

    useSeoMeta({
        title: 'Invest in Pennpetro Energy PLC | Powering the Future of Global Energy',
        ogTitle: 'Join Pennpetro Energy PLC as an Investor - Shaping the Future of Energy',
        description: 'Discover investment opportunities with Pennpetro Energy PLC, a global leader in energy innovation and sustainability. Explore our vision, performance, and commitment to a cleaner energy future.',
        ogDescription: 'Invest in Pennpetro Energy PLC and be part of a company that’s revolutionizing the energy sector with innovative solutions and sustainable practices. A great investment opportunity for a cleaner tomorrow.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Overview of Pennpetro Energy PLC’s global operations and leadership team.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/investor-overview',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Invest in Pennpetro Energy PLC | Leading the Future of Energy',
        twitterDescription: 'Explore investment opportunities with Pennpetro Energy PLC, a company committed to advancing sustainable energy solutions. Join us in shaping the future of global energy.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Pennpetro Energy PLC investment, energy sector investment, clean energy stocks, sustainable energy investment, global energy companies, green energy investment, energy innovation, sustainable energy solutions',
    });

    import { 
        adjustedEarnings,
        cashFlow,
        netDebt,
        oilEquivalent,
        returnOnCapital,
        shareholdersDistributions
    } from '~/stores/investorsVariables';

    const openInvestorsNav = ref<boolean>(false);
    function toggleInvestorNavLinks() {
        openInvestorsNav.value = !openInvestorsNav.value;
    }


</script>


<template>
    <div class="w-full h-full bg-(--light-gray)/30">

        <!-- Section: Hero -->
        <section>   
            <div class="relative w-screen h-dvh">

                <NuxtImg
                    src="https://images.pexels.com/photos/7648478/pexels-photo-7648478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Man Wearing Black Corporate Blazer"
                    loading="lazy"
                    class="h-4/5 sm:h-3/5 lg:h-dvh object-cover w-full"
                />

                <!-- Investor Navbar -->
                <div class="absolute left-0 top-16 sm:top-12 flex flex-col w-full h-fit px-(--section-px) lg:px-(--section-px-lg) bg-transparent z-10">
                    <div class="flex flex-col w-9/10 lg:w-4/5 max-w-7xl mx-auto h-fit shadow-2xl rounded-lg bg-(--white)">

                        <!-- Mobile Screen Investors Nav -->
                        <div class="flex lg:hidden flex-col lg:flex-row justify-between px-4 w-full">
                        
                            <div class="flex items-center justify-between w-full h-10">
                                <NuxtLink
                                    to="/investors/overview"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--black) duration-300 ease-in-out transition-all"
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
                                        class="flex flex-col items-center justify-between w-full h-full z-99"
                                    >
                                        <NuxtLink
                                            to="/investors/events"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--black) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
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
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--black) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
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
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--black) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
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
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--black) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
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
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--black) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">Contact Us</span>
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
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--black) w-fit duration-300 ease-in-out transition-all"
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
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--black) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Corporate</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/esg"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--black) w-fit duration-300 ease-in-out transition-all"
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
                                to="/investors/stock"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--black) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Stock</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/contact"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--black) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Contact Us</span>
                            </NuxtLink>

                        </div>
                        
                    </div>

                </div>

                <!-- Title -->
                <div class="absolute top-60 sm:top-42 lg:top-2/5 w-full h-fit">
                    <div class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-7xl mx-auto">                                

                        <h1 class="text-5xl sm:text-6xl lg:text-8xl text-(--white) text-center font-extrabold">
                            Investor <br> relations
                        </h1>
                        
                    </div>
                </div>

                <!-- Investors Landing Carousel -->
                <div class="flex items-center justify-center mx-auto -mt-30 w-full">
                
                    <div class="relative left-6 flex items-center justify-center w-full h-full mx-auto">
                        <InvestorsLandingCarousel />
                    </div>

                </div>

            </div>
        </section>

        <!-- Section: 1Q 2025 earnings highlights -->
        <section>
            <div class="relative mt-40 sm:mt-0 md:-mt-10 lg:mt-60 px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full overflow-hidden">
                
                <div class="flex flex-col gap-20 lg:gap-24 w-full max-w-7xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-2 lg:gap-4">
                        <h2 
                            class="text-xl sm:text-2xl lg:text-4xl text-(--dark-blue) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            1Q 2025 earnings highlights
                        </h2>

                        <!-- Read all news and press releases -->
                        <NuxtLink 
                            to="/investors/events"
                            class="group flex *:flex items-center justify-center p-2 gap-4 text-center w-fit mx-auto text-(--black) hover:text-(--white) bg-transparent hover:bg-(--medium-blue) shadow-lg rounded-lg border-1 border-(--medium-blue) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-extrabold text-xs text-center">See our latest results</span>
                        </NuxtLink>
                        
                    </div> 

                    <div class="flex flex-col md:flex-row  gap-8 *:w-9/10 *:md:w-1/2 w-full h-full">
                        
                        <!-- Supporting materials -->
                        <div class="flex flex-col h-full px-4">
                            <h3 class="font-bold text-sm text-(--black)">Supporting materials</h3>

                            <div class="flex flex-col w-full *:w-full">

                                <NuxtLink 
                                    to="/newsroom" title="2015 1Q Earnings Release"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-base lg:text-lg">2015 1Q Earnings Release</span>

                                    <div class="group relative flex items-center text-lg lg:text-xl w-12 h-full text-(--black) overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                </NuxtLink>

                                <NuxtLink 
                                    to="/newsroom" title="2025 1Q Data Supplements"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-base lg:text-lg">2025 1Q Data Supplements</span>

                                    <div class="group relative flex items-center text-lg lg:text-xl w-12 h-full text-(--black) overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                </NuxtLink>

                                <NuxtLink 
                                    to="/newsroom" title="2025 1Q Earnings ConferenceCall Presentation with Prepared Remarks"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-base lg:text-lg">2025 1Q Earnings ConferenceCall Presentation with Prepared Remarks</span>

                                    <div class="group relative flex items-center text-lg lg:text-xl w-12 h-full text-(--black) overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="ri:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                </NuxtLink>

                                <NuxtLink 
                                    to="/newsroom" title="2025 1Q Earnings Conference Call"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-base lg:text-lg">2025 1Q Earnings Conference Call</span>

                                    <div class="group relative flex items-center text-lg lg:text-xl w-12 h-full text-(--black) overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                </NuxtLink>

                                <NuxtLink 
                                    to="/newsroom" title="2025 1Q Earnings Conference Call (webcast)"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-base lg:text-lg">2025 1Q Earnings Conference Call (webcast)</span>

                                    <div class="group relative flex items-center text-lg lg:text-xl w-12 h-full text-(--black) overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                </NuxtLink>
                            

                            </div>
                        </div>

                        <div class="grid grid-cols-2 px-4 gap-6 text-(--white) py-12 w-full max-w-7xl mx-auto h-full">

                            <!-- Q1 adjusted earnings -->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center p-2 sm:px-4 lg:p-6 w-full h-35 md:h-40">
                                    <p class="text-sm">
                                        Q1 adjusted earnings
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center font-extrabold">
                                        ${{ adjustedEarnings }}B
                                    </h3>
                                </div>

                            </div>

                            <!-- Q1 shareholders distributions -->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center p-2 sm:px-4 lg:p-6 w-full h-35 md:h-40">
                                    <p class="text-sm">
                                        Q1 shareholders distributions
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center font-extrabold">
                                        ${{ shareholdersDistributions }}B
                                    </h3>
                                </div>
                                
                            </div>

                            <!-- Q1 cash flow from operations excl. working capital-->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center p-2 sm:px-4 lg:p-6 w-full h-35 md:h-40">
                                    <p class="text-sm">
                                        Q1 cash flow from operations excl. working capital
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center font-extrabold">
                                        ${{ cashFlow }}B
                                    </h3>
                                </div>
                                
                            </div>

                            <!-- Q4 net oil-equivalent production-->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center p-2 sm:px-4 lg:p-6 w-full h-35 md:h-40">
                                    <p class="text-sm">
                                        Q4 net oil-equivalent production
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center text-wrap font-extrabold">
                                        {{ oilEquivalent }}<br>MBOED
                                    </h3>
                                </div>
                                
                            </div>

                            <!-- Q1 return on capital employed-->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center p-2 sm:px-4 lg:p-6 w-full h-35 md:h-40">
                                    <p class="text-sm">
                                        Q1 return on capital employed
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center font-extrabold">
                                        {{ returnOnCapital }}%
                                    </h3>
                                </div>
                                
                            </div>

                            <!-- Net debt ration-->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center p-2 sm:px-4 lg:p-6 w-full h-35 md:h-40">
                                    <p class="text-sm">
                                        Net debt ration
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center font-extrabold">
                                        {{ netDebt }}%
                                    </h3>
                                </div>
                                
                            </div>

                            
                        </div>
                    </div>

                </div>

            </div>

        </section>

        <!-- Section: Latest News -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-purple) w-full h-full overflow-hidden">
                
                <div class="flex flex-col gap-20 lg:gap-24 w-full max-w-6xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-8">
                        <h2 
                            class="text-5xl sm:text-5xl lg:text-8xl text-(--light-purple) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            Latest news
                        </h2>

                        <!-- Read all news and press releases -->
                        <NuxtLink 
                            to="/newsroom"
                            class="group flex *:flex items-center *:items-center justify-center px-8 py-2 gap-4 w-fit mx-auto text-(--white) hover:text-(--black) bg-transparent hover:bg-(--light-purple) shadow-lg rounded-lg border-1 border-(--light-purple) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="flex font-bold text-sm">Read all news</span>
                        </NuxtLink>
                        
                    </div> 

                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 *:w-9/10 *:max-w-sm *:mx-auto *:h-fit">

                        <!-- Delivering first oil while lowering development costs -->
                        <div class="flex flex-col gap-4 lg:gap-8 bg-(--dark-blue) p-4 rounded-2xl shadow-lg">
                            <NuxtImg
                                src="/investors/penn-ceo-talks-growing-production-efficient-spending-hero.jpg"
                                alt="Penn Ceo Talks Growing Production Efficient Spending"
                                loading="lazy"
                                class="w-full h-50 object-cover rounded-2xl"
                            />

                            <div class="flex flex-col gap-4">
                                <p class="text-(--white) text-sm lg:text-base">
                                    April 21, 2025
                                </p>

                                <h2 
                                    class="text-lg lg:text-xl text-(--white)"
                                >
                                    Delivering first oil while lowering development costs
                                </h2>

                                <!-- Delivering first oil while lowering development costs -->
                                <NuxtLink
                                    to="/sustainability/social"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>
                                    <span class="group-hover:underline-text font-semibold">Read article</span>
                                </NuxtLink>
                            </div> 


                        </div>  

                        <!-- Pennpetro Energy PLC leaders share their vision for the future of CERAWeek 2025 -->
                        <div class="flex flex-col gap-4 lg:gap-8 bg-(--dark-green) p-4 rounded-2xl shadow-lg">
                            <NuxtImg
                                src="/investors/cnbc-joins-penn-ceo-in-gulf-of-mexico-to-discuss-deepwater-achievements-hero.jpg"
                                alt="CNBC joins Penn Ceo in Gulf of Mexico to Discuss Deep Water Achievements"
                                loading="lazy"
                                class="w-full h-60 object-cover rounded-2xl"
                            />

                            <div class="flex flex-col gap-4">
                                <p class="text-(--white) text-sm lg:text-base">
                                    March 10, 2025
                                </p>

                                <h2 
                                    class="text-lg lg:text-xl text-(--white)"
                                >
                                    Pennpetro Energy PLC leaders share their vision for the future of CERAWeek 2025
                                </h2>

                                <NuxtLink
                                    to="/sustainability/social"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--light-green) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>
                                    <span class="group-hover:underline-text font-semibold">Read article</span>
                                </NuxtLink>
                            </div> 


                        </div>

                        <!-- Engine No. 1 Pennpetro Energy PLC and GE Vernova to power U.S. data centers -->
                        <div class="flex flex-col gap-4 lg:gap-8 bg-(--dark-orange) p-4 rounded-2xl shadow-lg">
                            <NuxtImg
                                src="/investors/penn-ceo-talks-growing-production-efficient-spending-hero.jpg"
                                alt="Penn Ceo Talks Growing Production Efficient Spending"
                                loading="lazy"
                                class="w-full h-50 object-cover rounded-2xl"
                            />

                            <div class="flex flex-col gap-4">
                                <p class="text-(--white) text-sm lg:text-base">
                                    March 10, 2025
                                </p>

                                <h2 
                                    class="text-lg lg:text-xl text-(--white)"
                                >
                                    Engine No. 1 Pennpetro Energy PLC and GE Vernova to power U.S. data centers
                                </h2>

                                <NuxtLink
                                    to="/what/energy"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--light-orange) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>
                                    <span class="group-hover:underline-text font-semibold">Read article</span>
                                </NuxtLink>
                            </div> 


                        </div>

                        <!-- Pennpetro Energy PLC achieves first oil future growth project in Kazakhstan -->
                        <div class="flex flex-col gap-4 lg:gap-8 bg-(--dark-red) p-4 rounded-2xl shadow-lg">
                            <NuxtImg
                                src="/investors/cnbc-joins-penn-ceo-in-gulf-of-mexico-to-discuss-deepwater-achievements-hero.jpg"
                                alt="CNBC joins Penn Ceo in Gulf of Mexico to Discuss Deep Water Achievements"
                                loading="lazy"
                                class="w-full h-60 object-cover rounded-2xl"
                            />

                            <div class="flex flex-col gap-4">
                                <p class="text-(--white) text-sm lg:text-base">
                                    January 23, 2025
                                </p>

                                <h2 
                                    class="text-lg lg:text-xl text-(--white)"
                                >
                                    Pennpetro Energy PLC achieves first oil future growth project in Kazakhstan
                                </h2>

                                <NuxtLink
                                    to="/sustainability/social"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--light-red) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>
                                    <span class="group-hover:underline-text font-semibold">Read article</span>
                                </NuxtLink>
                            </div> 


                        </div>

                        <!-- Pennpetro Energy PLC-hess merger clears FTC antitrust review -->
                        <div class="flex flex-col gap-4 lg:gap-8 bg-(--dark-teal) p-4 rounded-2xl shadow-lg">
                            <NuxtImg
                                src="/investors/penn-ceo-talks-growing-production-efficient-spending-hero.jpg"
                                alt="Penn Ceo Talks Growing Production Efficient Spending"
                                loading="lazy"
                                class="w-full h-50 object-cover rounded-2xl"
                            />

                            <div class="flex flex-col gap-4">
                                <p class="text-(--white) text-sm lg:text-base">
                                    September 30, 2024
                                </p>

                                <h2 
                                    class="text-lg lg:text-xl text-(--white)"
                                >
                                    Pennpetro Energy PLC-hess merger clears FTC antitrust review
                                </h2>

                                <NuxtLink
                                    to="/sustainability/social"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--light-teal) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>
                                    <span class="group-hover:underline-text font-semibold">Read article</span>
                                </NuxtLink>
                            </div> 


                        </div>

                        <!-- CNBC joins Pennpetro Energy PLC CEO in gulf of america to discuss deepwater achievement -->
                        <div class="flex flex-col gap-4 lg:gap-8 bg-(--dark-blue) p-4 rounded-2xl shadow-lg">
                            <NuxtImg
                                src="/investors/cnbc-joins-penn-ceo-in-gulf-of-mexico-to-discuss-deepwater-achievements-hero.jpg"
                                alt="CNBC joins Penn Ceo in Gulf of Mexico to Discuss Deep Water Achievements"
                                loading="lazy"
                                class="w-full h-50 object-cover rounded-2xl"
                            />

                            <div class="flex flex-col gap-4 h-full">
                                <p class="text-(--white) text-sm lg:text-base">
                                    October 29, 2024
                                </p>

                                <h2 
                                    class="text-lg lg:text-xl text-(--white)"
                                >
                                    CNBC joins Pennpetro Energy PLC CEO in gulf of america to discuss deepwater achievement
                                </h2>

                                <!-- CNBC joins Pennpetro Energy PLC CEO in gulf of america to discuss deepwater achievement -->
                                <NuxtLink
                                    to="/sustainability/social"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>
                                    <span class="group-hover:underline-text font-semibold">Read article</span>
                                </NuxtLink>
                            </div> 


                        </div> 

                        <!-- Pennpetro Energy PLC CEO talks growing production, efficient spending -->
                        <div class="flex flex-col gap-4 lg:gap-8 bg-(--dark-green) p-4 rounded-2xl shadow-lg">
                            <NuxtImg
                                src="https://images.pexels.com/photos/8370328/pexels-photo-8370328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Female Vlogger doing a Video Recording"
                                loading="lazy"
                                class="w-full h-50 object-cover rounded-2xl"
                            />

                            <div class="flex flex-col gap-4 h-full">
                                <p class="text-(--white) text-lg lg:text-base">
                                    December 18, 2024
                                </p>

                                <h2 
                                    class="text-lg lg:text-xl text-(--white)"
                                >
                                    Pennpetro Energy PLC CEO talks growing production, efficient spending
                                </h2>

                                <NuxtLink
                                    to="/sustainability/social"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--light-green) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>
                                    <span class="group-hover:underline-text font-semibold">Read article</span>
                                </NuxtLink>
                            </div> 


                        </div> 

                        
                    </div>

                </div>

            </div>

        </section>

        <!-- Section: Events and presentations-->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--light-gray) w-full h-full">
                
                <div class="grid gap-8 md:gap-12 w-full max-w-7xl mx-auto">

                    <!--Events and presentations area -->
                    <div class="flex flex-col">

                        <h2 
                            class="text-4xl md:text-6xl lg:text-8xl text-(--dark-blue) text-wrap text-center font-extrabold w-full h-full"
                        >
                            Events and presentations
                        </h2>
            
                        <!-- Read all news and press releases -->
                        <NuxtLink 
                            to="/investors/events"
                            class="group flex *:flex items-center *:items-center justify-center px-2 md:px-8 py-2 gap-4 w-fit h-16 mx-auto text-(--black) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-bold text-sm">See all events and presentations</span>
                        </NuxtLink>

                    </div>

                    <!-- Investors Landing Carousel -->
                    <div class="flex items-center justify-center mx-auto w-full">
                    
                        <div class="relative left-6 flex items-center justify-center w-full h-full mx-auto">
                            <InvestorsEventsCarousel />
                        </div>

                    </div>                    
                
                </div>

            </div>

        </section>

        <!-- Section: Higher Returns, lower carbon -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-blue) w-full h-full">
                
                <div class="grid py-16 gap-16 w-full max-w-7xl mx-auto">

                    <!--Higher Returns, lower carbon area -->
                    <div class="flex flex-col gap-8 text-(--white)">

                        <div class="grid gap-4 max-w-xl mx-auto">
                        
                            <h2 
                                class="text-4xl md:text-6xl lg:text-7xl text-center font-extrabold w-full h-full"
                            >
                                Higher Returns, lower carbon
                            </h2>

                            <p class="text-sm lg:text-base text-center">
                                Our objective is to safely deliver higher returns, lower carbon and superior shareholder value in any business environment.
                            </p>
                        </div>
            
                        <!-- Read our reports and fillings -->
                        <NuxtLink 
                            to="/investors/reports"
                            class="group flex *:flex items-center *:items-center justify-center p-2 gap-2 w-fit mx-auto hover:text-(--black) hover:bg-(--light-blue) border-1 border-(--light-blue) rounded-lg shadow-lg duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-base h-fit w-12 overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-bold text-xs">Read our reports and fillings</span>
                        </NuxtLink>

                    </div>

                    <!-- Grids -->
                    <div class="grid sm:grid-cols-2 md:grid-cols-3 place-content-center mx-auto w-full h-full">
                    
                        <!-- Growing the dividend -->
                        <div class="flex flex-col items-center justify-center gap-4">
                            <p class="text-sm md:text-base text-(--white) text-center">
                                Growing the dividend
                            </p>

                            <NuxtImg
                                src="/investors/Dividend.png"
                                alt="Chart"
                                loading="lazy"
                                class="block h-auto w-16 md:w-24 rounded-full"
                            />
                        </div>

                        <!-- Reinventing to grow future cash flows -->
                        <div class="flex flex-col items-center justify-center gap-4">
                            <p class="text-sm md:text-base text-(--white) text-center">
                                Reinventing to grow future cash flows
                            </p>

                            <NuxtImg
                                src="/investors/Cash.png"
                                alt="Money"
                                loading="lazy"
                                class="block h-auto w-16 md:w-24 rounded-full"
                            />
                        </div>

                        <!-- Strengthening the balance sheet -->
                        <div class="flex flex-col items-center justify-center gap-4">
                            <p class="text-sm md:text-base text-(--white) text-center">
                                Strengthening the balance sheet
                            </p>

                            <NuxtImg
                                src="/investors/Balance_sheet.png"
                                alt="Balance sheet"
                                loading="lazy"
                                class="block h-auto w-16 md:w-24 rounded-full"
                            />
                        </div>

                        <!-- Returning excess cash to stockholders -->
                        <div class="flex flex-col items-center justify-center gap-4">
                            <p class="text-sm md:text-base text-(--white) text-center">
                                Returning excess cash to stockholders
                            </p>

                            <NuxtImg
                                src="/investors/Excess_cash.png"
                                alt="Cash on one hand"
                                loading="lazy"
                                class="block h-auto w-16 md:w-24 rounded-full"
                            />
                        </div>

                        <!-- Lowering carbon intensity -->
                        <div class="flex flex-col items-center justify-center gap-4">
                            <p class="text-sm md:text-base text-(--white) text-center">
                                Lowering carbon intensity
                            </p>

                            <NuxtImg
                                src="/investors/Carbon_intensity.png"
                                alt="Building icon"
                                loading="lazy"
                                class="block h-auto w-16 md:w-24 rounded-full"
                            />
                        </div>

                        <!-- Growing lower carbon businesses -->
                        <div class="flex flex-col items-center justify-center gap-4">
                            <p class="text-sm md:text-base text-(--white) text-center">
                                Growing lower carbon businesses
                            </p>

                            <NuxtImg
                                src="/investors/Plant.png"
                                alt="Plant environment"
                                loading="lazy"
                                class="block h-auto w-16 md:w-24 rounded-full"
                            />
                        </div>

                    </div>                    
                
                </div>

            </div>

        </section>

        <!-- Section: Environmental, social and governance -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-teal) w-full h-full">
                
                <div class="grid py-16 gap-16 w-full max-w-7xl mx-auto">

                    <!-- Environmental, social and governance -->
                    <div class="flex flex-col gap-8 text-(--white)">

                        <div class="grid gap-4 max-w-xl mx-auto">
                        
                            <h2 
                                class="text-4xl md:text-6xl lg:text-7xl text-center font-extrabold w-full h-full"
                            >
                                Environmental, social and governance
                            </h2>

                            <p class="text-sm lg:text-base text-center">
                                Our approach to sustainability is integrated throughout our business. 
                                We strive to protect the environment, empower people, and get results the right way—today and tomorrow.
                            </p>
                        </div>
            
                        <!-- Learn about esg -->
                        <NuxtLink 
                            to="/investors/esg"
                            class="group flex *:flex items-center *:items-center justify-center p-2 gap-2 w-fit mx-auto hover:text-(--black) hover:bg-(--light-blue) border-1 border-(--light-blue) rounded-lg shadow-lg duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-base h-fit w-12 overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-bold text-xs">Learn about esg</span>
                        </NuxtLink>

                    </div>

                    <!-- Grids -->
                    <div class="flex flex-col w-full h-full">
                    

                        <NuxtImg
                            src="https://images.pexels.com/photos/4606713/pexels-photo-4606713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="High voltage substation located behind metal fence in daylight"
                            loading="lazy"
                            class="block h-auto w-9/10 rounded-2xl mx-auto"
                        />

                        <!-- Supporting materials -->
                        <div class="flex flex-col h-full px-4">

                            <div class="flex flex-col mx-auto max-w-lg w-full *:w-full">

                                <NuxtLink 
                                    to="/newsroom" title="Check the news"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-base lg:text-lg text-(--white)">Check the news</span>

                                    <div class="group relative flex items-center text-lg lg:text-xl w-12 h-full text-(--white) overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                </NuxtLink>

                                <NuxtLink 
                                    to="/sustainability/overview" title="Check the news"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-base lg:text-lg text-(--white)">Check our sustainability page</span>

                                    <div class="group relative flex items-center text-lg lg:text-xl w-12 h-full text-(--white) overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                </NuxtLink>

                            </div>
                        </div>

                    </div>                    
                
                </div>

            </div>

        </section>

        <!-- Section: Stock and dividend -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">
                
                <div class="grid py-16 gap-16 w-full max-w-7xl mx-auto">

                    <!-- Blue Stock and Dividend -->
                    <div class="grid sm:grid-cols-2 gap-8 px-6 sm:px-12 py-12  text-(--white) bg-(--medium-blue) rounded-2xl h-fit md:h-60 w-9/10 max-w-5xl mx-auto">
                        
                        <div class="flex flex-col justify-center gap-2">

                            <h2 
                                class="text-2xl md:text-3xl font-extrabold"
                            >
                                Stock and dividend
                            </h2>

                            <p class="text-xs lg:text-sm">
                                CVX as of May 16, 2025 04:10 PM ET
                            </p>                            
                            
                            <!-- View stock info -->
                            <NuxtLink 
                                to="/investors/stock"
                                class="group hidden md:flex *:flex items-center *:items-center justify-center p-2 gap-2 w-full max-w-[170px] hover:text-(--black) hover:bg-(--light-blue) border-1 border-(--light-blue) rounded-lg shadow-lg duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-base h-fit w-12 overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="font-extrabold text-xs">View stock info</span>
                            </NuxtLink>
                        </div>

                        <div class="flex flex-col">
                            <div class="flex items-center justify-between border-b-1 border-(--white) w-full py-2">
                                <span class="flex text-sm md:text-base">NYSE</span>
                                <span class="flex text-sm md:text-base">CVX</span>
                            </div>

                            <div class="flex items-center justify-between border-b-1 border-(--white) w-full py-2">
                                <span class="flex text-sm md:text-base">Current</span>
                                <span class="flex text-sm md:text-base">$142.10</span>
                            </div>

                            <div class="flex items-center justify-between border-b-1 border-(--white) w-full py-2">
                                <span class="flex text-sm md:text-base">Change</span>
                                <span class="flex text-sm md:text-base">-0.16 (-0.11%)</span>
                            </div>

                            
                        </div>

                        <NuxtLink 
                            to="/investors/stock"
                            class="group flex *:flex md:hidden items-center *:items-center justify-center p-2 gap-2 w-full max-w-[170px] hover:text-(--black) hover:bg-(--light-blue) border-1 border-(--light-blue) rounded-lg shadow-lg duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-base h-fit w-12 overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-extrabold text-xs">View stock info</span>
                        </NuxtLink>

                    </div>  
                    
                    <!-- Contact  -->
                    <div class="flex flex-col gap-8 md:gap-12">
                        <h3 class="text-(--dark-blue) text-center text-2xl md:text-3xl font-extrabold">Contacts</h3>

                        <div class="grid sm:grid-cols-2 place-content-center gap-8 w-full h-full p-8">
                            
                            <!-- Transfer agent -->
                            <div class="flex flex-col gap-2">
                                <h4 class="text-(--dark-blue) text-base md:text-lg">Transfer agent</h4>

                                <p class="text-sm text-(--black)">For stockholder correspondence:</p>

                                <div class="text-sm text-(--black)">
                                    <span>Computershare</span> <br>
                                    <span>P.0. Box 43708</span> <br>
                                    <span>Providence, RI 02940-3078</span>
                                </div>

                                <div class="text-sm text-(--black)">
                                    <span>Toll free number: +1 800.368.8357</span> <br>
                                    <span>Outside the U.S.: +1 201.680.6578</span>
                                </div>

                                <NuxtLink 
                                    to="/contact"
                                    class="group flex *:flex md:hidden items-center *:items-center gap-2 duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center justify-center text-sm h-fit w-8 overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-8 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-8 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                    <span class="font-extrabold text-xs">Visit our contact page</span>
                                </NuxtLink>
                            </div>

                            <!-- Investor relations -->
                            <div class="flex flex-col gap-2">
                                <h4 class="text-(--dark-blue) text-base md:text-lg">Investor relations</h4>

                                
                                <div class="flex flex-col gap-1 text-sm text-(--black)">
                                    <span>Phone: +1 832.854.1000</span>
                                    <NuxtLink 
                                        to="/investors/overview"
                                        class="group flex *:flex md:hidden items-center *:items-center gap-2 duration-300 ease-in-out transition-all"
                                    >
                                        <div class="group relative flex items-center justify-center text-sm h-fit w-8 overflow-hidden">
                                            <div class="absolute flex items-center left-2 h-full w-8 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                <Icon name="mdi:arrow-right"/>
                                            </div>
                                            
                                            <div class="absolute flex items-center left-2 h-full w-8 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                <Icon name="mdi:arrow-right" />
                                            </div>
                                        </div>

                                        <span class="font-extrabold text-xs">Visit investor relations page</span>
                                    </NuxtLink>
                                </div>

                                <div class="text-sm text-(--black)">
                                    <span>Jake Spiering, general manager</span> <br>
                                    <span>Serena Fendley, manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>

            </div>

        </section>



    </div>
</template>

<style lang="css" scoped>
    /*.image-slider {
        position: relative;
        width: 100%;
        background-size: cover;
        background-position: center;
        animation: slideAnimation 12s infinite;
    }

    /* Define the keyframes for the animation *
    @keyframes slideAnimation {
        0% {
            background-image: url('https://images.pexels.com/photos/7414274/pexels-photo-7414274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
        33% {
            background-image: url('https://images.pexels.com/photos/7414049/pexels-photo-7414049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
        66% {
            background-image: url('https://images.pexels.com/photos/7414273/pexels-photo-7414273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
        100% {
            background-image: url('https://images.pexels.com/photos/7414274/pexels-photo-7414274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
    }
    */

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

