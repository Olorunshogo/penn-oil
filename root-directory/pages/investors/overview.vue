
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Penn Petro Energy Investors: Delivering Strong Results',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });

    // import { investorOverviewHeroImageBg  } from '~/models/heroBgModels';
    import { 
        adjustedEarnings,
        cashFlow,
        netDebt,
        oilEquivalent,
        returnOnCapital,
        shareholdersDistributions
    } from '~/stores/investoresVariables';

    const openInvestorsNav = ref<boolean>(false);
    function toggleInvestorNavLinks() {
        openInvestorsNav.value = !openInvestorsNav.value;
    }


</script>


<template>
    <div>

        <!-- Section: Hero -->
        <div class="bg-(--light-gray)/30">
            <div class="flex flex-col">
                <section>      
            
                    <div class="relative w-screen h-dvh">

                        <NuxtImg
                            src="https://images.pexels.com/photos/7648478/pexels-photo-7648478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Man Wearing Black Corporate Blazer"
                            loading="lazy"
                            class="h-4/5 sm:h-3/5 lg:h-dvh object-cover w-full"
                        />

                        <!-- Investor Navbar -->
                        <div class="absolute left-0 top-16 flex flex-col w-full h-fit px-(--section-px) lg:px-(--section-px-lg) bg-transparent">
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
                                                class="flex flex-col items-center justify-between w-full h-full"
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
                                                    to="/investors/reports"
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
                                                    <span class="group-hover:underline-text font-semibold text-xs">Reports and fillings</span>
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
                                        <span class="group-hover:underline-text font-semibold text-xs">Governance</span>
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
                                        to="/investors/reports"
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
                                        <span class="group-hover:underline-text font-semibold text-xs">Reports</span>
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
                                        <span class="group-hover:underline-text font-semibold text-xs">Stock info</span>
                                    </NuxtLink>

                                </div>
                                
                            </div>

                        </div>

                        <!-- Title -->
                        <div class="absolute top-60 lg:top-2/5 w-full h-fit">
                            <div class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-7xl mx-auto">                                

                                <h1 class="text-5xl sm:text-6xl lg:text-8xl text-(--white) text-center font-extrabold">
                                    Investor <br> relations
                                </h1>
                                
                            </div>
                        </div>

                        <!-- Carousel -->
                        <div class="-mt-30 w-full h-fit">
                        
                            <InvestorsLandingCarousel />

                        </div>

                    </div>
                </section>
            </div>
        </div>

        <!-- Section: 1Q 2025 earnings highlights -->
        <section>
            <div class="mt-90 px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--light-gray)/30 w-full h-full overflow-hidden">
                
                <div class="flex flex-col gap-20 lg:gap-24 w-full max-w-7xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-8">
                        <h2 
                            class="text-3xl sm:text-4xl text-(--dark-blue) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            1Q 2025 earnings highlights
                        </h2>

                        <!-- Read all news and press releases -->
                        <NuxtLink 
                            to="/investors/events"
                            class="group flex *:flex items-center justify-center px-6 py-2 gap-4 text-center w-fit mx-auto text-(--black) hover:text-(--white) bg-transparent hover:bg-(--dark-blue) shadow-lg rounded-lg border-1 border-(--dark-blue) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-bold text-sm text-center">See our latest results</span>
                        </NuxtLink>
                        
                    </div> 

                    <div class="flex flex-col md:flex-row  gap-8 *:w-full *:md:w-1/2 w-full h-full">
                        
                        <!-- Supporting materials -->
                        <div class="flex flex-col h-full px-4">
                            <h3 class="font-bold text-sm text-(--black)">Supporting materials</h3>

                            <div class="flex flex-col w-full *:w-full">

                                <NuxtLink 
                                    to="/newsroom" title="2015 1Q Earnings Release"
                                    target="_blank"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-sm lg:text-lg">2015 1Q Earnings Release</span>

                                    <div class="group relative flex items-center text-xl w-8 h-full ng-black overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="ri:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                </NuxtLink>

                                <NuxtLink 
                                    to="/newsroom" title="2025 1Q Data Supplements"
                                    target="_blank"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-sm lg:text-lg">2025 1Q Data Supplements</span>

                                    <div class="group relative flex items-center text-xl w-8 h-full ng-black overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="ri:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                </NuxtLink>

                                <NuxtLink 
                                    to="/newsroom" title="2025 1Q Earnings ConferenceCall Presentation with Prepared Remarks"
                                    target="_blank"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-sm lg:text-lg">2025 1Q Earnings ConferenceCall Presentation with Prepared Remarks</span>

                                    <div class="group relative flex items-center text-xl w-8 h-full ng-black overflow-hidden">
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
                                    target="_blank"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-sm lg:text-lg">2025 1Q Earnings Conference Call</span>

                                    <div class="group relative flex items-center text-xl w-8 h-full ng-black overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="ri:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                </NuxtLink>

                                <NuxtLink 
                                    to="/newsroom" title="2025 1Q Earnings Conference Call (webcast)"
                                    target="_blank"
                                    class="group flex items-center justify-between gap-4 py-4 text-(--black) border-b-1 border-(--border-gray) duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-sm lg:text-lg">2025 1Q Earnings Conference Call (webcast)</span>

                                    <div class="group relative flex items-center text-xl w-8 h-full ng-black overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="ri:arrow-right"/>
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
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg gap-8 bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center h-fit p-6 w-full">
                                    <p class="text-sm">
                                        Q1 adjusted earnings
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center font-extrabold">
                                        ${{ adjustedEarnings }}B
                                    </h3>
                                </div>

                            </div>

                            <!-- Q1 shareholders distributions -->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg gap-8 bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center h-fit p-6 w-full">
                                    <p class="text-sm">
                                        Q1 shareholders distributions
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center font-extrabold">
                                        ${{ shareholdersDistributions }}B
                                    </h3>
                                </div>
                                
                            </div>

                            <!-- Q1 cash flow from operations excl. working capital-->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg gap-8 bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center h-fit p-6 w-full">
                                    <p class="text-sm">
                                        Q1 cash flow from operations excl. working capital
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center font-extrabold">
                                        ${{ cashFlow }}B
                                    </h3>
                                </div>
                                
                            </div>

                            <!-- Q4 net oil-equivalent production-->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg gap-8 bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center h-fit p-6 w-full">
                                    <p class="text-sm">
                                        Q4 net oil-equivalent production
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center text-wrap font-extrabold">
                                        {{ oilEquivalent }}<br>MBOED
                                    </h3>
                                </div>
                                
                            </div>

                            <!-- Q1 return on capital employed-->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg gap-8 bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center h-fit p-6 w-full">
                                    <p class="text-sm">
                                        Q1 return on capital employed
                                    </p>                            

                                    <h3 class="text-3xl sm:text-4xl text-center font-extrabold">
                                        {{ returnOnCapital }}%
                                    </h3>
                                </div>
                                
                            </div>

                            <!-- Net debt ration-->
                            <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg gap-8 bg-(--medium-blue) w-full mx-auto h-fit">                            
                                
                                <div class="flex flex-col gap-2 items-center justify-center *:text-center h-fit p-6 w-full">
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
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-purple) w-full h-full overflow-hidden">
                
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

                        <!-- Penn Petro Energy leaders share their vision for the future of CERAWeek 2025 -->
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
                                    Penn Petro Energy leaders share their vision for the future of CERAWeek 2025
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

                        <!-- Engine No. 1 Penn Petro Energy and GE Vernova to power U.S. data centers -->
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
                                    Engine No. 1 Penn Petro Energy and GE Vernova to power U.S. data centers
                                </h2>

                                <NuxtLink
                                    to="/sustainability/social"
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

                        <!-- Penn Petro Energy achieves first oil future growth project in Kazakhstan -->
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
                                    Penn Petro Energy achieves first oil future growth project in Kazakhstan
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

                        <!-- Penn Petro Energy-hess merger clears FTC antitrust review -->
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
                                    Penn Petro Energy-hess merger clears FTC antitrust review
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

                        <!-- CNBC joins Penn Petro Energy CEO in gulf of america to discuss deepwater achievement -->
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
                                    CNBC joins Penn Petro Energy CEO in gulf of america to discuss deepwater achievement
                                </h2>

                                <!-- CNBC joins Penn Petro Energy CEO in gulf of america to discuss deepwater achievement -->
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

                        <!-- Penn Petro Energy CEO talks growing production, efficient spending -->
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
                                    Penn Petro Energy CEO talks growing production, efficient spending
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
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--light-gray) w-full h-full">
                
                <div class="grid gap-16 w-9/10 mx-auto">

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

                    <NewsroomCarousel />                     
                
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

