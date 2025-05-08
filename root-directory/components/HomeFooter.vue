
<script lang="ts" setup>

    import { 
        developmentYear, currentYear, displayYear,
        enter, beforeEnter, leave,
        oneTrustModal,
        get, toggleGet, rotateGet,
        latest, toggleLatest, rotateLatest,
        future, toggleFuture, rotateFuture,
        popular, togglePopular, rotatePopular
    } from '../stores/footer';    

</script>


<template>
  <!-- <div class="w-full hidden md:w-full md:flex md:flex-col font-base text-(--text-gray) border-t-1 border-t-(--border-gray)"> -->
  <div class="w-full h-full px-4 md:px-6 py-(--section-py) lg:py-(--section-py-lg) text-white overflow-hidden bg-(--primary-bg)">

    <div class="max-w-7xl mx-auto">

      <div class="grid grid-cols-1 gap-8 md:gap-12 font-normal">
        <!-- Footer 1 -->
        <div class="flex flex-col w-full h-full gap-6 sm:flex-row sm:*:w-1/2 lg:*:w-1/3 lg:*:items-baseline">

            <!-- Footer Logo -->
            <div class="flex flex-col gap-4 items-center justify-center">
                
                <div class="relative flex items-cente justify-center w-1/2 mx-auto">                    
                    <LoGo />                   
                </div>

                <div class="grid gap-4 md:gap-8">
                    <p class="font-normal text-base lg:text-lg">
                        Penn Petro Energy has always put people at the center of the energy conversation. 
                        Because we understand that the well-being of people everywhere depends on energy. 
                        Energy that is affordable, reliable and ever-cleaner.
                    </p>

                    <NuxtLink
                        to="/"
                        class="group relative flex items-center gap-2 font-bold text-base duration-500 ease-in transition-all"
                    >
                        <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                            <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                <Icon name="mdi:arrow-right"/>
                            </div>
                            
                            <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                <Icon name="mdi:arrow-right" />
                            </div>
                        </div>
                        <!-- <Icon name="ep:right" class="group-hover:arrow-icon group-hover:arrow-move" /> -->
                        
                        <span class="relative overflow-hidden">
                            <span class="group-hover:underline-text">subscribe to our newsletter</span>
                        </span>
                    </NuxtLink>
                </div>                

            </div>

            <!-- md: Get to know us, latest at Penn Petro Energy, Future of energy, Popular links -->
            <div class="grid lg:hidden grid-cols-1 gap-4 w-full h-full">
                <!-- Get to know us -->
                <div class="flex flex-col justify-center gap-3 md:gap-6 pb-4 border-y-1 border-(--white)">

                    <h3 class="flex items-center justify-between my-auto py-4 *:flex *:items-center font-bold text-base">
                        <span>Get to know us</span>
                        <span 
                            @click="toggleGet"
                            class="font-bold text-lg cursor-pointer duration-300 ease-in-out transition-all"
                            :class="{'rotate-180': rotateGet}"
                        >
                            <Icon name="mdi:chevron-down" />
                        </span>
                    </h3>

                    <Transition 
                        name="slide-down"
                        @before="beforeEnter" 
                        @enter="enter" 
                        @leave="leave"
                    >
                        <div 
                            v-if="get"
                            class="grid gap-4 *:font-normal *:text-base lg:*:text-sm ease-in-out duration-500 transition-all"
                        >                       
                                
                            <NuxtLink
                                to="/who"
                                class="group relative flex duration-500 ease-in transition-all"
                            >
                                <span class="group-hover:underline-text">Who we are</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/who/leadership"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Our leadership</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/what"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">What we do</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/who/brands"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Our brands</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/what/technology"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Technology and innovation</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/sustainability"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Sustainability</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Penn Petro Energy around the world</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Investor relations</span>
                            </NuxtLink>
        
                        </div>
                    </Transition>
                </div>

                <!-- Latest at Penn Petro Energy -->
                <div class="flex flex-col justify-center gap-3 md:gap-6 pb-4 border-b-1 border-(--white)">

                    <h3 class="flex items-center justify-between my-auto py-4 *:flex *:items-center font-bold text-base">
                        <span>Latest at Penn Petro Energy</span>
                        <span 
                            @click="toggleLatest"
                            class="font-bold text-lg cursor-pointer duration-300 ease-in-out transition-all"
                            :class="{'rotate-180': rotateLatest}"
                        >
                            <Icon name="uiw:down" />
                        </span>
                    </h3>
                    
                    <Transition 
                        name="slide-down"
                        @before="beforeEnter" 
                        @enter="enter" 
                        @leave="leave"
                    >
                        <div 
                            v-if="latest"
                            class="grid gap-4 *:font-normal *:text-base lg:*:text-sm"
                        >                       
                                
                            <NuxtLink
                                to="/newsroom"
                                class="group relative flex duration-500 ease-in transition-all"
                            >
                                <span class="group-hover:underline-text">Newsroom</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/events"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Investors events and presentations</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/reports"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Financial Information</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/stock"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Stock information</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/what/technology"
                                class="group relative flex duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Technology ventures</span>
                            </NuxtLink>
                            
                        </div>
                    </Transition>

                </div>

                <!-- Future of energy -->
                <div class="flex flex-col justify-center gap-3 md:gap-6 pb-4 border-b-1 border-(--white)">

                    <h3 class="flex items-center justify-between my-auto py-4 *:flex *:items-center font-bold text-base">
                        <span>Future of energy</span>
                        <span 
                            @click="toggleFuture"
                            class="font-bold text-lg cursor-pointer duration-300 ease-in-out transition-all"
                            :class="{'rotate-180': rotateFuture}"
                        >
                            <Icon name="uiw:down" />
                        </span>
                    </h3>

                    <Transition 
                        name="slide-down"
                        @before="beforeEnter" 
                        @enter="enter" 
                        @leave="leave"
                    >
                        <div 
                            v-if="future"
                            class="grid gap-2 *:font-normal *:text-base"
                        >                       
                                
                            <NuxtLink
                                to="/what/technology"
                                class="group relative flex text-base duration-500 ease-in transition-all"
                            >
                                <span class="group-hover:underline-text">Carbon capture and storage</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/what/energy"
                                class="group relative flex text-base duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Energy in progress</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/what/energy"
                                class="group relative flex text-base duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">New energies</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/what/energy"
                                class="group relative flex text-base duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Renewable fuels in transportation</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/what/energy"
                                class="group relative flex text-base duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Methane management</span>
                            </NuxtLink>
                            
                        </div>
                    </Transition>

                </div>

                <!-- Popular links -->
                <div class="flex flex-col justify-center gap-3 md:gap-6 pb-4 border-b-1 border-(--white)">

                    <h3 class="flex items-center justify-between my-auto py-4 *:flex *:items-center font-bold text-base">
                        <span>Popular links</span>
                        <span 
                            @click="togglePopular"
                            class="font-bold text-lg cursor-pointer duration-300 ease-in-out transition-all"
                            :class="{'rotate-180': rotatePopular}"
                        >
                            <Icon name="uiw:down" />
                        </span>
                    </h3>

                    <Transition 
                        name="slide-down"
                        @before="beforeEnter" 
                        @enter="enter" 
                        @leave="leave"
                    >
                        <div 
                            v-if="popular"
                            class="grid gap-2 *:font-normal *:text-base"
                        >                       
                                
                            <NuxtLink
                                to="/newsroom"
                                class="group relative flex text-base duration-500 ease-in transition-all"
                            >
                                <span class="group-hover:underline-text">Credit and gift cards</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/newsroom"
                                class="group relative flex text-base duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Penn Petro Energy texaco rewards</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/careers"
                                class="group relative flex text-base duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Careers</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/contact"
                                class="group relative flex text-base duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Contact us</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/who/brands"
                                class="group relative flex text-base duration-500 ease-in transition-all"
                            >                            
                                <span class="group-hover:underline-text">Find a service station</span>
                            </NuxtLink>
                            
                        </div>
                    </Transition>
                </div>

                
            </div>

            <!-- lg: Get to know us & Latest at Penn Petro Energy -->
            <div class="hidden lg:grid gap-8 md:gap-6">
                
                <!-- Get to know us -->
                <div class="flex flex-col gap-3 md:gap-6">

                    <h3 class="font-bold text-sm">Get to know us</h3>

                    <div class="grid gap-2 *:font-normal *:text-base">                       
                            
                        <NuxtLink
                            to="/who"
                            class="group relative flex duration-500 ease-in transition-all"
                        >
                            <span class="group-hover:underline-text">Who we are</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/who/leadership"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Our leadership</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/what"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">What we do</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/who/brands"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Our brands</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/what/technology"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Technology and innovation</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/sustainability"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Sustainability</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/what/penn"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Penn Petro Energy around the world</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/investors"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Investor relations</span>
                        </NuxtLink>
                          
                    </div>

                </div>

                <!-- Latest at Penn Petro Energy -->
                <div class="flex flex-col gap-3 md:gap-6">

                    <h3 class="font-bold text-sm *:flex *:items-center">
                        <span>Latest at Penn Petro Energy</span>
                        <span><Icon name="mdi:down" /></span>
                    </h3>

                    <div class="grid gap-2 *:font-normal *:text-base">                       
                            
                        <NuxtLink
                            to="/"
                            class="group relative flex duration-500 ease-in transition-all"
                        >
                            <span class="group-hover:underline-text">Newsroom</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Investors events and presentations</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Financial Information</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Stock information</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Technology ventures</span>
                        </NuxtLink>
                        
                    </div>

                </div>

            </div>

            <!-- lg: Future of energy & Popular links -->
            <div class="hidden lg:grid gap-4 md:gap-6">
                
                <!-- Future of energy -->
                <div class="flex flex-col gap-3 md:gap-6">

                    <h3 class="font-bold text-sm">Future of energy</h3>

                    <div class="grid gap-2 *:font-normal *:text-base">                       
                            
                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >
                            <span class="group-hover:underline-text">Carbon capture and storage</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Energy in progress</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">New energies</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Renewable fuels in transportation</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Methane management</span>
                        </NuxtLink>
                          
                    </div>

                </div>

                <!-- Popular links -->
                <div class="flex flex-col gap-3 md:gap-6">

                    <h3 class="font-bold text-sm">Popular links</h3>

                    <div class="grid gap-2 *:font-normal *:text-base">                       
                            
                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >
                            <span class="group-hover:underline-text">Credit and gift cards</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Penn Petro Energy texaco rewards</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Careers</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Contact us</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Find a service station</span>
                        </NuxtLink>
                        
                    </div>

                </div>

            </div>

        </div>

        <!-- Footer 2 -->
        <div class="flex flex-col gap-8 lg:gap-12 *:font-semibold m-auto">

            <div class="flex items-center justify-center *:text-base lg:*:text-lg *:font-normal lg:*:font-medium flex-wrap gap-4">               
                                                  
                <NuxtLink
                    to="/"
                    class="group relative flex duration-500 ease-in transition-all"
                >
                    <span class="group-hover:underline-text">Site map</span>
                </NuxtLink>

                <NuxtLink
                    to="/"
                    class="group relative flex duration-500 ease-in transition-all"
                >                            
                    <span class="group-hover:underline-text">Accessibility</span>
                </NuxtLink>

                <NuxtLink
                    to="/"
                    class="group relative flex duration-500 ease-in transition-all"
                >                            
                    <span class="group-hover:underline-text">Terms of use</span>
                </NuxtLink>

                <NuxtLink
                    to="/"
                    class="group relative flex duration-500 ease-in transition-all"
                >                            
                    <span class="group-hover:underline-text">Privacy</span>
                </NuxtLink>

                <button
                    @click="oneTrustModal = true"
                    class="group relative flex cursor-pointer duration-500 ease-in transition-all"
                >                            
                    <span class="group-hover:underline-text">Cookie settings</span>
                </button>   
                              
                <NuxtLink
                    to="/"
                    class="group relative flex duration-500 ease-in transition-all"
                >                            
                    <span class="group-hover:underline-text">Cookie statement</span>
                </NuxtLink>                           
                
                <!-- United States -->
                <div class="flex items-center gap-2 *:flex *:items-center *:font-semibold">                
                    <span><Icon name="mdi:web" /></span>
                    <span>United States</span>
                </div>

                <!-- Social links -->
                <div class="flex items-center flex-wrap gap-4 *:flex *:items-center *:text-xl lg:*:text-2xl *:ease-in-out *:duration-500 *:transition-all *:hover:text-(--light-blue)">

                    <!-- Facebook -->
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                                <path stroke-dasharray="24" stroke-dashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/>
                                </path>
                                <path stroke-dasharray="8" stroke-dashoffset="8" d="M8 12h7">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"/>
                                </path>
                            </g>
                        </svg>
                    </span>

                    <!-- X -->
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="currentColor"><path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
                                <animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"/></path>
                                <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
                                    <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"/>
                                </path>
                                <path d="M18.5 2h3.5L22 2h-3.5z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"/></path>
                            </g>
                        </svg>
                    </span>

                    <!-- Instagram -->
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0">
                                <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"/>
                            </circle>
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/>
                                </path>
                                <path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"/>
                                </path>
                            </g>
                        </svg>
                    </span>

                    <!-- TikTok -->
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <mask id="lineMdTiktok0">
                                <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path fill="#fff" stroke="none" d="M16.6 5.82c-0.68 -0.78 -1.06 -1.78 -1.06 -2.82h-3.09v12.4c-0.02 0.67 -0.31 1.31 -0.79 1.77c-0.48 0.47 -1.13 0.73 -1.8 0.73c-1.42 0 -2.6 -1.16 -2.6 -2.6c0 -1.72 1.66 -3.01 3.37 -2.48v-3.16c-3.45 -0.46 -6.47 2.22 -6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69 -2.55 5.69 -5.7v-6.29c1.25 0.9 2.76 1.38 4.3 1.38v-3.09c0 0 -1.88 0.09 -3.24 -1.48Z"/>
                                    <path stroke="#000" stroke-dasharray="36" stroke-dashoffset="72" stroke-width="4" d="M11 11h-1c-2.21 0 -4.5 1.79 -4.5 4c0 2.21 1.5 4.5 4.5 4.5c2.21 0 4 -2.29 4 -4.5v-12.5">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;36"/>
                                    </path>
                                    <path stroke="#000" stroke-dasharray="10" stroke-dashoffset="20" stroke-width="4" d="M18 2.5v8">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.1s" values="20;10"/>
                                    </path>
                                </g>
                            </mask>
                            <rect width="24" height="24" fill="currentColor" mask="url(#lineMdTiktok0)"/>
                        </svg>
                    </span>

                    <!-- YouTube -->
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-opacity="0" d="M12 11L12 12L12 13z">
                                <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"/>
                                    <set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"/>
                            </path>
                            <path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z">
                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
                            </path>
                        </svg>
                    </span>

                    <!-- LinkedIn -->
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0">
                                <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1"/>
                            </circle>
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                                <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0"/>
                                </path>
                                <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0"/>
                                </path>
                                <path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0"/>
                                </path>
                            </g>
                        </svg>
                    </span>
                

                </div>            
            
            </div>
          
            <div class="flex items-center justify-center flex-wrap *:text-sm lg:*:text-xl *:text-wrap *:font-normal lg:*:font-medium mx-auto gap-2">
                <span>&copy;</span>
                <span>{{ developmentYear }}</span>
                <span v-if="displayYear" class="">-{{ currentYear }}</span>
                <span>Penn Petro Energy Corporation. All rights reserved.</span>
            </div>          

        </div>

        <!-- Open One Trust Sample Modal Template -->
        <div 
            v-if="oneTrustModal"
            class="fixed z-99 inset-0 bg-black/70 flex flex-col gap-2 text-black items-center justify-center w-full h-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >   <Transition name="fade" :duration="500">
                <div
                    class="relative w-9/10 lg:w-3/5 flex flex-col p-4 lg:p-8 items-center justify-center rounded-lg shadow-lg bg-white"
                >
                    <!-- Close button -->
                    <button
                        @click="oneTrustModal = false"
                        class="absolute top-2 right-4 flex items-center justify-center p-3 m-auto border-1 rounded-lg shadow-sm w-4 h-4 border-gray-500 text-lg hover:text-gray-700"
                        aria-label="Close modal"
                    >
                        &times;
                    </button>

                    <!-- Modal header -->
                    <h2 
                        id="modal-title"
                        class="text-xl font-semibold text-center mb-4"
                    >
                        Open Trust Modal Title
                    </h2>

                    <!-- Modal content -->
                    <p 
                        class="mb-6"
                    >
                        This is a basic functional modal. Clicking on the Cookies settings button should show this as I saw it when I was at Kubwa but for some weird reasons, it's not showing over here. Well, whichever one we decide, this is functional for now and we can always edit it any way we like.
                    </p>
                </div>
            </Transition>
        </div>


        
      </div>

    </div>
  </div>
</template>


<style lang="css" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .group-hover\:underline-text {
        position: relative;
        display: inline-block;
    }

    .group-hover\:underline-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 1px;
        background-color: white;
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

    @keyframes moveArrow {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(10px);
        }
        100% {
            transform: translateX(0);
        }
    }

    /* Slide-down transition */
    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: transform 0.5s ease, max-height 0.5s ease;
    }

    .slide-down-enter, 
    .slide-down-leave-to  {
        transform: translateY(-20px);
        opacity: 0;
        max-height: 0;
    }

    .slide-down-enter-to,
    .slide-down-leave {
        transform: translateY(0);
        opacity: 1;
        max-height: 500px; 
    }
    
</style>