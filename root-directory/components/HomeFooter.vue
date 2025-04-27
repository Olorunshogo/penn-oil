
<script lang="ts" setup>
    import { ref } from 'vue';
    import { developmentYear, currentYear, displayYear, openModal, openOneTrustModal, closeOneTrustModal } from '../stores/footer';

</script>


<template>
  <!-- <div class="w-full hidden md:w-full md:flex md:flex-col font-base text-(--text-gray) border-t-1 border-t-(--border-gray)"> -->
  <div class="w-full h-full px-4 md:px-6 py-(--section-padding-y) md:py-(--section-padding-y-md) text-white overflow-hidden bg-(--primary-bg)">

    <div class="max-w-7xl mx-auto">

      <div class="grid grid-cols-1 gap-8 md:gap-12 font-normal">
        <!-- Footer 1 -->
        <div class="grid grid-cols-3 gap-8 w-full h-full">

            <!-- Footer Logo -->
            <div class="grid gap-12 md:gap-20">
                
                <div class="flex items-center justify-center"> 

                    <div class="flex flex-col items-center h-12 w-32 float-right">
                        <span class="text-base font-bold">Chevron</span>
                        <span class="text-2xl text-blue-700">
                            <Icon name="fa:chevron-down" />
                        </span>
                        <span class="text-2xl text-red-700">
                            <Icon name="fa:chevron-down" />
                        </span>

                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200"><path fill="currentColor" d="m0 125.407l600 949.186l600-949.186z"/></svg> -->
 
                    </div>                   

                    <!-- <NuxtImg 
                        src="/images/chevron-logo.png"
                        alt="Chevron logo"
                        class="w-35 h-25 text-white float-right"
                    /> -->

                    <h2 class="flex items-center flex-wrap text-3xl font-extrabold font-gotham-book-narrow">
                        the human energy company <span class="text-xs flex items-center">&reg;</span>
                    </h2>
                </div>

                <div class="grid gap-4 md:gap-8 clear-both">
                    <p class="font-normal text-lg">
                        Chevron has always put people at the center of the energy conversation. 
                        Because we understand that the well-being of people everywhere depends on energy. 
                        Energy that is affordable, reliable and ever-cleaner.
                    </p>

                    <NuxtLink
                        to="/"
                        class="group relative flex items-center gap-2 font-bold text-base duration-500 ease-in transition-all"
                    >
                        <Icon name="ep:right" class="arrow-icon group-hover:arrow-move" />
                        
                        <span class="relative overflow-hidden">
                            <span class="group-hover:underline-text">subscribe to our newsletter</span>
                        </span>
                    </NuxtLink>
                </div>                

            </div>

            <!-- Get to know us & Latest at chevron -->
            <div class="grid gap-4 md:gap-6">
                
                <!-- Get to know us -->
                <div class="flex flex-col gap-3 md:gap-6">

                    <h3 class="font-bold text-sm">Get to know us</h3>

                    <div class="grid gap-2 *:font-normal *:text-sm">                       
                            
                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >
                            <span class="group-hover:underline-text">Who we are</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Our leadership</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">What we do</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Our brands</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Technology and innovation</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Sustainability</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Chevron around the world</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Investor relations</span>
                        </NuxtLink>
                          
                    </div>

                </div>

                <!-- Latest at Chevron -->
                <div class="flex flex-col gap-3 md:gap-6">

                    <h3 class="font-bold text-sm">Latest at chevron</h3>

                    <div class="grid gap-2 *:font-normal *:text-sm">                       
                            
                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >
                            <span class="group-hover:underline-text">Newsroom</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Investors events and presentations</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Financial Information</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Stock information</span>
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="group relative flex text-base duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text">Technology ventures</span>
                        </NuxtLink>
                        
                    </div>

                </div>

            </div>


            <!-- Future of energy & Popular links -->
            <div class="grid gap-4 md:gap-6">
                
                <!-- Future of energy -->
                <div class="flex flex-col gap-3 md:gap-6">

                    <h3 class="font-bold text-sm">Future of energy</h3>

                    <div class="grid gap-2 *:font-normal *:text-sm">                       
                            
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

                    <div class="grid gap-2 *:font-normal *:text-sm">                       
                            
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
                            <span class="group-hover:underline-text">Chevron texaco rewards</span>
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



          <!-- Home Link and Personal Links -->
          <!-- <div class="grid grid-cols-1 gap-2 md:gap-4">
            <Transition name="fade">
              <NuxtLink to="/" aria-label="Logo" class="text-(--theme-green) flex gap-2 *:flex *:items-center">
                <span class="text-xl font-bold">OMB</span>
                <span class="text-sm p-1 rounded-lg bg-(--theme-green)/20">dev</span>
              </NuxtLink>
            </Transition>

            <p class="text-sm md:text-base">Frontend Developer with {{ yearsExperience }}+ years of expertise in building enterprise SaaS platforms. Proven track record of scaling ap...</p>
            
            <div class="flex items-center gap-2">
              <span class="flex cursor-text items-center text-xs rounded-lg w-fit font-semibold px-3 py-1 border-1 shadow-sm hover:bg-green-50 border-(--theme-green) text-(--theme-green)">
                <span class="flex text-base"><Icon name="mdi:dot" class="icon"/></span>
                <span>Available</span>
              </span>
              <span class="flex">Flexible</span>
            </div> -->

            <!-- Social Links -->
            <!-- <div class="flex items-center gap-8 *:hover:text-(--theme-green) *:text-2xl *:cursor-pointer duration-300 ease-in-out transition-all">
              <!-- GitHub -->
              <!-- <a 
                href="https://github.com/Olorunshogo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0" />
                    </path>
                    <path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0" />
                    </path>
                  </g>
                </svg>
              </a> -->

              <!-- LinkedIn -->
              <!-- <a 
                href="https://x.com/Shownzy_Baba?t=RmNQSj0JMBIZm5fExNTZ2w&s=08" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                  <path fill="none" stroke="currentColor" d="M4.5 6v5m6 0V8.5a2 2 0 1 0-4 0V11V6M4 4.5h1M1.5.5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z" stroke-width="1" />
                </svg>
              </a> -->

              <!-- X -->
              <!-- <a 
                href="https://x.com/Shownzy_Baba?t=RmNQSj0JMBIZm5fExNTZ2w&s=08" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="currentColor">
                    <path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
                      <animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z" />
                    </path>
                    <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
                      <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z" />
                    </path>
                    <path d="M18.5 2h3.5L22 2h-3.5z">
                      <animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z" />
                    </path>
                  </g>
                </svg>
              </a>             
              
            </div>
          </div> -->

          <!-- Quick Links -->
          <!-- <div class="grid grid-cols-1 gap-2 md:gap-4">
            <h4 class="text-xl font-semibold text-black">Quick Links</h4>

            <div class="grid grid-cols-1 gap-2 *:hover:text-(--theme-green) *:text-sm *:md:text-base">
               -->

              

              <!-- Hire Me -->
              <!-- <NuxtLink to="/hire" class="flex items-center gap-2 cursor-pointer">
                <span class="flex text-xl"><Icon name="mdi:flash-outline" /></span>
                <span class="flex">Hire Me</span>
              </NuxtLink>
              

            </div>
          </div> -->

        </div>

        <!-- Footer 2 -->
        <div class="flex flex-col *:font-semibold *:text-base m-auto">

            <div class="flex items-center justify-between flex-wrap gap-4 md:gap-8">
                
                <div class="flex items-center flex-wrap gap-4 md:gap-6">                       
                            
                    <NuxtLink
                        to="/"
                        class="group relative flex text-base duration-500 ease-in transition-all"
                    >
                        <span class="group-hover:underline-text">Site map</span>
                    </NuxtLink>

                    <NuxtLink
                        to="/"
                        class="group relative flex text-base duration-500 ease-in transition-all"
                    >                            
                        <span class="group-hover:underline-text">Accessibility</span>
                    </NuxtLink>

                    <NuxtLink
                        to="/"
                        class="group relative flex text-base duration-500 ease-in transition-all"
                    >                            
                        <span class="group-hover:underline-text">Terms of use</span>
                    </NuxtLink>
    
                    <NuxtLink
                        to="/"
                        class="group relative flex text-base duration-500 ease-in transition-all"
                    >                            
                        <span class="group-hover:underline-text">Privacy</span>
                    </NuxtLink>

                    <button
                        @click="openOneTrustModal"
                        class="group relative flex text-base duration-500 ease-in transition-all"
                    >                            
                        <span class="group-hover:underline-text">Cookie settings</span>
                    </button>
    
                            
    
                    <NuxtLink
                        to="/"
                        class="group relative flex text-base duration-500 ease-in transition-all"
                    >                            
                        <span class="group-hover:underline-text">Cookie statement</span>
                    </NuxtLink>
                              
                </div>
            
                <div class="flex items-center gap-2 *:flex *:items-center">                
                    <span><Icon name="mdi:web" /></span>
                    <span>United States</span>
                </div>

                <!-- Social links -->
                <div class="flex items-center flex-wrap gap-4 md:gap-6 *:flex *:items-center *:text-2xl *:ease-in-out *:duration-500 *:transition-all *:hover:text-(--light-blue)">

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
          
          <div class="flex items-center gap-1">
            <span>&copy;</span>
            <span>{{ portfolioYear }}</span>
            <span v-if="displayYear" class="">- {{ currentYear }}</span>
            <span>Olorunshogo Moses BAMTEFA. All rights reserved.</span>
          </div>

          

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
    
</style>