
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Investors Overview',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });


</script>


<template>
    <div>
        <!-- Section: Hero -->
        <section>        
            
            <div class="relative w-full h-full overflow-hidden -mt-[11rem]">

                <!-- Image Slider Container -->
                <div class="image-slider h-dvh lg:h-[1240px]">          

                    <!-- Content -->
                    <div class="grid w-full h-fit bg-(--white) absolute bottom-0">
                        <div class="flex flex-col py-8 lg:py-12 items-center justify-center w-full max-w-6xl mx-auto h-fit">
                            
                            <div class="text-(--dark-blue) font-bold text-2xl">Who we are</div>

                            <h1 
                                class="text-5xl md:text-8xl xl:text-9xl py-8 bg-clip-text text-center text-transparent font-extrabold bg-gradient-to-r from-(--light-blue) to-(--dark-blue)" 
                            >
                                Investor relations
                            </h1>

                            <p class="text-xl lg:text-2xl text-center text-[color:var(--black)]">
                                At Penn Petro Energy, we are committed to delivering strong financial performance and creating long-term value for our shareholders. 
                                We focus on sustainable growth, disciplined capital allocation, and effective risk management to drive profitability and maximize returns.
                            </p>
                            
                            
                        </div>
                    </div> 

                </div>

            </div>
        </section>


        <!-- Section: Latest News -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--white) w-full h-full overflow-hidden">
                
                <div class="flex flex-col gap-20 lg:gap-24 w-full max-w-6xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-8">
                        <h2 
                            class="text-5xl lg:text-8xl text-(--dark-blue) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
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
                            <div class="grid p-6 gap-8 rounded-2xl bg-(--dark-blue)/90 shadow-lg">
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
                            <div class="flex flex-col gap-4 bg-(--dark-green) p-6 rounded-2xl shadow-lg">
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
                            <div class="grid p-6 gap-8 rounded-2xl bg-(--dark-teal)/90 shadow-lg">
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
                            <div class="flex flex-col gap-4 bg-(--medium-red) p-6 rounded-2xl shadow-lg">
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
                            <div class="flex flex-col gap-4 bg-(--dark-green) p-6 rounded-2xl shadow-lg">
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
                            <div class="grid p-6 gap-8 rounded-2xl bg-(--dark-blue)/90 shadow-lg">
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
                            <div class="flex flex-col gap-4 bg-(--medium-teal) p-6 rounded-2xl shadow-lg">
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
                            class="text-5xl lg:text-8xl text-(--dark-blue) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
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
    .image-slider {
        position: relative;
        width: 100%;
        background-size: cover;
        background-position: center;
        animation: slideAnimation 12s infinite;
    }

    /* Define the keyframes for the animation */
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


</style>

