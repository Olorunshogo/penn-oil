      
<script setup lang='ts'>

    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Newsroom',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });

    import { 
        latestNews,
        isArchiveOpen,
        archivedNews,
    } from '../models/newsLatest';

    

</script>


<template>
    <div>
        <!-- Section: Hero -->
        <section>        
            
            <div class="relative flex items-center justify-center w-full h-full overflow-hidden -mt-[11rem] bg-(--white)">
                
                <div class="relative flex flex-col gap-8 pt-20 w-full lg:w-3/5 justify-center h-150 lg:h-170 bg-(--dark-teal) px-(--section-px) lg:px-(--section-px-lg)">
                    <span class="text-(--white) text-center">Our operations</span>

                    <div class="flex flex-col items-center justify-center gap-2">
                        <NuxtLink
                            to="/newsroom"
                            class="group relative text-(--white) font-semibold text-2xl lg:text-4xl duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text text-center">
                                Chevron uses AI to bring reliable energy to data centers
                            </span>
                        </NuxtLink>

                        <span class="text-(--white) text-center font-medium lg:text-lg">March 14, 2025</span>
                    </div> 

                </div>            

                <NuxtImg
                    src="https://images.pexels.com/photos/13100561/pexels-photo-13100561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Industrial Metal pipes"
                    loading="lazy"
                    class="hidden lg:block w-2/5 h-120 lg:h-170 object-cover z-0 mr-auto"
                />

            </div>
        </section>

        <!-- Section: Latest news from chevron -->
        <section>        
            <div class="relative flex flex-col gap-12 w-full h-full overflow-hidden bg-(--white) py-(--section-py) lg:py-(--section-py-lg)">
                
                <h3 class="text-2xl text-(--dark-blue) font-bold text-center">
                    Latest news from Penn Petro Energy
                </h3>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full px-8 py-12 bg-(--white)">
                
                    <CustomLatestNews
                        v-for="item in latestNews"
                        :key="item.id"
                        :imgSrc="item.imgSrc"
                        :imgAlt="item.imgAlt"
                        :heading="item.heading"
                        :link="item.link"
                        :operation="item.operation"
                        :date="item.date"
                    />

                </div>

                <!-- Archived News -->
                <div class="grid gap-8 w-full h-full">
                    <button 
                        @click="isArchiveOpen = !isArchiveOpen"
                        class="flex items-center justify-center gap-4 text-lg font-semibold text-(--black) hover:text-(--white) border-3 border-(--dark-blue) hover:bg-(--medium-blue) w-fit px-6 py-2 cursor-pointer rounded-lg shadow-lg mx-auto ease-in-out duration-300 transition-all"
                    >
                        
                        <span class="flex">
                            View archive
                        </span>
                        <span class="flex items-center">
                            <Icon name="mdi:chevron-up" 
                                class="text-lg font-semibold ease-in-out duration-500 transition-all"
                                :class="{ '-rotate-180': isArchiveOpen }"
                            />
                        </span>
                    </button>

                    

                    <Transition name="slide-down">
                        <div 
                            v-if="isArchiveOpen"
                            class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full py-12 bg-(--white)"
                        >
                            <CustomLatestNews
                                v-for="item in archivedNews"
                                :key="item.id"
                                :imgSrc="item.imgSrc"
                                :imgAlt="item.imgAlt"
                                :heading="item.heading"
                                :link="item.link"
                                :operation="item.operation"
                                :date="item.date"
                            />
                        </div>
          
                    </Transition>
                    
                        

                    

                </div>

            </div>


        </section>

        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">
                
                <div class="relative grid gap-8 lg:gap-12 w-full h-full">            

                    <div class="relative grid md:grid-cols-2 xl:grid-cols-3 gap-2 w-full h-full">

                        <div class="grid grid-cols-1 gap-2">
                            <NuxtImg
                                src="https://images.pexels.com/photos/6754760/pexels-photo-6754760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Infrastructure of Power Plant"
                                loading="lazy"
                                class="h-65 w-full object-cover"
                            />                       

                            <div class="grid gap-1">
                                <NuxtLink
                                    to="/newsroom"
                                    class="group relative text-(--dark-blue) font-bold text-lg hover:underline decoration-(--medium-blue) decoration-2 underline-offset-2 flex duration-500 ease-in-out transition-all"
                                >                            
                                    <span class="group-hover:underline-text">Biofuels can help marltime industry lower carbon intensity</span>
                                </NuxtLink>

                                <div class="flex items-center text-sm text-(--dark-gray) gap-1">
                                    november 08, 2024
                                </div>
                                
                            </div>

                        </div> 

                        <div class="grid grid-cols-1 gap-2">
                            <NuxtImg
                                src="https://images.pexels.com/photos/31961608/pexels-photo-31961608/free-photo-of-beach-restoration-project-at-flagler-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Beach Restoration Project at Flagler Beach"
                                loading="lazy"
                                class="h-65 w-full object-cover"
                            />                       

                            <div class="grid gap-1">
                                <NuxtLink
                                    to="/newsroom"
                                    class="group relative text-(--dark-blue) font-bold text-lg hover:underline decoration-(--medium-blue) decoration-2 underline-offset-2 flex duration-500 ease-in-out transition-all"
                                >                            
                                    <span class="group-hover:underline-text">Hydrogen project tour highlights expertise, role in energy market</span>
                                </NuxtLink>

                                <div class="flex items-center text-sm text-(--dark-gray) gap-1">
                                    november 04, 2024
                                </div>
                                
                            </div>

                        </div> 

                        <div class="grid grid-cols-1 gap-2">
                            <NuxtImg
                                src="https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Black Solar Panel Near Calm Body of Water"
                                loading="lazy"
                                class="h-65 w-full object-cover"
                            />                       

                            <div class="grid gap-1">
                                <NuxtLink
                                    to="/newsroom"
                                    class="group relative text-(--dark-blue) font-bold text-lg hover:underline decoration-(--medium-blue) decoration-2 underline-offset-2 flex duration-500 ease-in-out transition-all"
                                >                            
                                    <span class="group-hover:underline-text">Sunrise on solar energy operation</span>
                                </NuxtLink>

                                <div class="flex items-center text-sm text-(--dark-gray) gap-1">
                                    September 13, 2024
                                </div>
                                
                            </div>

                        </div> 

                        <div class="grid grid-cols-1 gap-2">
                            <NuxtImg
                                src="https://images.pexels.com/photos/399635/pexels-photo-399635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Gasoline Station"
                                loading="lazy"
                                class="h-65 w-full object-cover"
                            />                       

                            <div class="grid gap-1">
                                <NuxtLink
                                    to="/newsroom"
                                    class="group relative text-(--dark-blue) font-bold text-lg hover:underline decoration-(--medium-blue) decoration-2 underline-offset-2 flex duration-500 ease-in-out transition-all"
                                >                            
                                    <span class="group-hover:underline-text">Three companies, one circular economies for biodiesel</span>
                                </NuxtLink>

                                <div class="flex items-center text-sm text-(--dark-gray) gap-1">
                                    September 13, 2024
                                </div>
                                
                            </div>

                        </div>  

                        <div class="grid grid-cols-1 gap-2">
                            <NuxtImg
                                src="https://images.pexels.com/photos/2479433/pexels-photo-2479433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Man Walking Near Car"
                                loading="lazy"
                                class="h-65 w-full object-cover"
                            />                       

                            <div class="grid gap-1">
                                <NuxtLink
                                    to="/newsroom"
                                    class="group relative text-(--dark-blue) font-bold text-lg hover:underline decoration-(--medium-blue) decoration-2 underline-offset-2 flex duration-500 ease-in-out transition-all"
                                >                            
                                    <span class="group-hover:underline-text">A global brand</span>
                                </NuxtLink>

                                <div class="flex items-center text-sm text-(--dark-gray) gap-1">
                                    September 09, 2024
                                </div>
                                
                            </div>

                        </div> 

                        <div class="grid grid-cols-1 gap-2">
                            <NuxtImg
                                src="https://images.pexels.com/photos/4911488/pexels-photo-4911488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="A Woman with Headscarf Filling Up the Gas Tank"
                                loading="lazy"
                                class="h-65 w-full object-cover"
                            />                       

                            <div class="grid gap-1">
                                <NuxtLink
                                    to="/newsroom"
                                    class="group relative text-(--dark-blue) font-bold text-lg hover:underline decoration-(--medium-blue) decoration-2 underline-offset-2 flex duration-500 ease-in-out transition-all"
                                >                            
                                    <span class="group-hover:underline-text">Accessible infrastructures al over the world</span>
                                </NuxtLink>

                                <div class="flex items-center text-sm text-(--dark-gray) gap-1">
                                    September 05, 2024
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

    /* Slide-down transition */
    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: transform 0.5s ease-in-out, max-height 0.5s ease-in-out;
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
        background-color: var(--white);
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
