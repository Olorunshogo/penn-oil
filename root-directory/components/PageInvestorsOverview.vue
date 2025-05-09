      
<script setup lang='ts'>

    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Investors Overview',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });
    definePageMeta({
        layout: 'custom'
    });

    import { investorsEvent } from '../models/newsComps';

    import {
        prevRef, prevIndex, prevSlide,
        activeRef, activeIndex,        
        nextRef, nextIndex, nextSlide,
        goTo
    } from '../stores/homeNews'
import NewsroomCarousel from './NewsroomCarousel.vue';

</script>


<template>
<div>
    <!-- Section: Hero -->
    <section>        
        
        <div class="relative w-full h-full overflow-hidden -mt-[11rem]">

            <!-- Image Container -->
            <NuxtImg
                src="https://images.pexels.com/photos/7414274/pexels-photo-7414274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="An investor with her team"
                loading="lazy"
                class="relative h-dvh w-full object-cover z-0"
            />
            

            <!-- Content -->
            <div class="grid gap-4 bg-(--white) w-full absolute bottom-0 h-1/2 md:h-2/5 max-h-[500px]">
                <div class="flex flex-col items-center justify-center w-full max-w-4xl mx-auto h-full gap-2">
                    <h1 
                        class="text-5xl md:text-8xl xl:text-9xl text-center font-extrabold bg-clip-text text-transparent" 
                        style="background-image: url('https://images.pexels.com/photos/7414274/pexels-photo-7414274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    >
                        Investor relations
                    </h1>

                    <p class="text-xl lg:text-2xl text-center text-[color:var(--black)]">
                        At Penn Petro Energy,, we are committed to delivering strong financial performance and creating long-term value for our shareholders. 
                        We focus on sustainable growth, disciplined capital allocation, and effective risk management to drive profitability and maximize returns.
                    </p>
                    
                    
                </div>
            </div> 

        </div>
    </section>

    <!-- Section: Latest News -->
    <section>
        <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--white) w-full h-full overflow-hidden">
            
            <div class="flex flex-col gap-20 lg:gap-24 w-full max-w-6xl mx-auto">

                <div class="flex flex-col items-center justify-center gap-4">
                    <h2 
                        class="text-5xl md:text-8xl text-(--dark-blue) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                    >
                        Latest news
                    </h2>

                    <!-- Read all news and press releases -->
                    <NuxtLink 
                        to="/newsroom"
                        class="group flex *:flex items-center *:items-center justify-center px-8 py-3 gap-4 w-fit h-16 mx-auto text-(--black) hover:text-(--white) bg-transparent hover:bg-(--medium-blue) shadow-lg rounded-lg border-3 border-(--medium-blue) duration-300 ease-in-out transition-all"
                    >
                        <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                            <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                <Icon name="mdi:arrow-right"/>
                            </div>
                            
                            <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                <Icon name="mdi:arrow-right" />
                            </div>
                        </div>

                        <span class="font-semibold text-lg">Read all news and press releases</span>
                    </NuxtLink>
                    
                </div> 

                <div class="grid md:grid-cols-2 gap-8">

                    <div class="grid gmd:grid-cols-2 gap-4 lg:gap-6">
                        <!-- Delivering first oil while lowering development costs -->
                        <div class="grid p-6 gap-8 rounded-2xl bg-(--dark-blue)/90">
                            <NuxtImg
                                src="https://images.pexels.com/photos/8370328/pexels-photo-8370328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Female Vlogger doing a Video Recording"
                                loading="lazy"
                                class="w-full h-60 object-cover rounded-2xl"
                            />

                            <div class="flex flex-col gap-4">
                                <p class="text-(--white) text-xl font-semibold cursor-text">
                                    April 21, 2025
                                </p>

                                <h2 
                                    class="text-4xl font-semibold text-(--white)"
                                >
                                    Delivering first oil while lowering development costs
                                </h2>

                                <!-- Delivering first oil while lowering development costs -->
                                <NuxtLink
                                    to="/sustainability/social"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
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

                        <!-- Engine No. 1 Chevron and GE Vernova to power U.S. data centers -->
                        <div class="flex flex-col gap-4 bg-(--dark-green) p-6 rounded-2xl">
                            <p class="text-(--white) text-xl font-semibold cursor-text">
                                March 10, 2025
                            </p>

                            <h2 
                                class="text-4xl font-semibold text-(--white)"
                            >
                                Engine No. 1 Chevron and GE Vernova to power U.S. data centers
                            </h2>

                            <NuxtLink
                                to="/sustainability/social"
                                class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold">Read press release</span>
                            </NuxtLink>
                        </div> 

                        <!-- Penn Petro Energy CEO talks growing production, efficient spending -->
                        <div class="grid p-6 gap-8 rounded-2xl bg-(--dark-teal)/90">
                            <NuxtImg
                                src="https://images.pexels.com/photos/8370328/pexels-photo-8370328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Female Vlogger doing a Video Recording"
                                loading="lazy"
                                class="w-full h-60 object-cover rounded-2xl"
                            />

                            <div class="flex flex-col gap-4 h-full">
                                <p class="text-(--white) text-xl font-semibold cursor-text">
                                    December 18, 2024
                                </p>

                                <h2 
                                    class="text-4xl font-semibold text-(--white)"
                                >
                                    Penn Petro Energy CEO talks growing production, efficient spending
                                </h2>

                                <NuxtLink
                                    to="/sustainability/social"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
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

                    <div class="grid gap-4 lg:gap-6">

                        <!-- Penn Petro Energy-hess merger clears FTC antitrust review -->
                        <div class="flex flex-col gap-4 bg-(--medium-red) p-6 rounded-2xl">
                            <p class="text-(--white) text-xl font-semibold cursor-text">
                                September 30, 2024
                            </p>

                            <h2 
                                class="text-4xl font-semibold text-(--white)"
                            >
                                Penn Petro Energy-hess merger clears FTC antitrust review
                            </h2>

                            <NuxtLink
                                to="/sustainability/social"
                                class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold">Read press release</span>
                            </NuxtLink>
                        </div>  

                        <!-- Penn Petro Energy leaders share their vision for the future of CERAWeek 2025 -->
                        <div class="flex flex-col gap-4 bg-(--dark-green) p-6 rounded-2xl">
                            <p class="text-(--white) text-xl font-semibold cursor-text">
                                March 10, 2025
                            </p>

                            <h2 
                                class="text-4xl font-semibold text-(--white)"
                            >
                                Penn Petro Energy leaders share their vision for the future of CERAWeek 2025
                            </h2>

                            <!-- Delivering first oil while lowering development costs -->
                            <NuxtLink
                                to="/sustainability/social"
                                class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
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

                        <!-- Delivering first oil while lowering development costs -->
                        <div class="grid p-6 gap-8 rounded-2xl bg-(--dark-blue)/90">
                            <NuxtImg
                                src="https://images.pexels.com/photos/8370328/pexels-photo-8370328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Female Vlogger doing a Video Recording"
                                loading="lazy"
                                class="w-full h-60 object-cover rounded-2xl"
                            />

                            <div class="flex flex-col gap-4 h-full">
                                <p class="text-(--white) text-xl font-semibold cursor-text">
                                    October 29, 2024
                                </p>

                                <h2 
                                    class="text-4xl font-semibold text-(--white)"
                                >
                                    CNBC joins Penn Petro Energy CEO in gulf of america to discuss deepwater achievement
                                </h2>

                                <!-- CNBC joins Penn Petro Energy CEO in gulf of america to discuss deepwater achievement -->
                                <NuxtLink
                                    to="/sustainability/social"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
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
                        <div class="flex flex-col gap-4 bg-(--medium-teal) p-6 rounded-2xl">
                            <p class="text-(--white) text-xl font-semibold cursor-text">
                                January 23, 2025
                            </p>

                            <h2 
                                class="text-4xl font-semibold text-(--white)"
                            >
                                Penn Petro Energy achieves first oil future growth project in Kazakhstan
                            </h2>

                            <!-- Penn Petro Energy achieves first oil future growth project in Kazakhstan -->
                            <NuxtLink
                                to="/sustainability/social"
                                class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold">Read press release</span>
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
            
            <div class="grid gap-32 w-full mx-auto">

                <!--Events and presentations area -->
                <div class="flex flex-col gap-8">

                    <h2 
                        class="text-5xl md:text-8xl text-(--dark-blue) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                    >
                        Events and presentations
                    </h2>
           
                    <!-- Read all news and press releases -->
                    <NuxtLink 
                        to="/investors/events"
                        class="group flex *:flex items-center *:items-center justify-center px-8 py-3 gap-4 w-fit h-16 mx-auto text-(--black) duration-300 ease-in-out transition-all"
                    >
                        <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                            <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                <Icon name="mdi:arrow-right"/>
                            </div>
                            
                            <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                <Icon name="mdi:arrow-right" />
                            </div>
                        </div>

                        <span class="font-semibold text-lg">See all events and presentations</span>
                    </NuxtLink>

                </div>

                <NewsroomCarousel />

                
            
            </div>

        </div>

    </section>



</div>
</template>

<style lang="css" scoped>

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
     
    .newsComp {
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
    .newsComp.active {
        transform-origin: center;
    }

    .nav-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border: 3px solid var(--black);
        border-radius: 50%;
        color: var(--black);
        background-color: transparent;
        transition: all 0.5s ease-in-out;
    }

    .nav-btn:hover {
        color: var(--white);
        background-color: var(--black);
        opacity: 0.8;
        cursor: pointer;
    }

    .pagination-dot {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: gray;
        transition: all 0.5s ease-in-out;
    }
    .pagination-dot:hover {
        cursor: pointer;
        opacity: 0.8;
    }
    .pagination-dot.active-dot {
        background-color: blue;
    }

</style>
