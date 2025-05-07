      
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
                            class="group relative text-(--white) font-semibold text-xl duration-500 ease-in transition-all"
                        >                            
                            <span class="group-hover:underline-text text-center">
                                Chevron uses AI to bring reliable energy to data centers
                            </span>
                        </NuxtLink>

                        <span class="text-(--white) text-center font-medium">March 14, 2025</span>
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
            <div class="relative flex flex-col gap-12 w-full h-full overflow-hidden bg-(--white) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">
                
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

                <div class="grid gap-8 w-full h-full">
                    <button 
                        @click="isArchiveOpen = !isArchiveOpen"
                        class="flex items-center justify-center gap-4 text-lg font-semibold text-(--black) hover:text-(--white) border-3 border-(--dark-blue) hover:bg-(--medium-blue) w-fit px-6 py-2 cursor-pointer rounded-lg shadow-lg mx-auto ease-in-out duration-300 transition-all"
                    >
                        
                        <span class="flex">
                            View archives
                        </span>
                        <span class="flex items-center">
                            <Icon name="mdi:chevron-up" 
                                class="text-lg font-semibold ease-in-out duration-300 transition-all"
                                :class="{ 'rotate-180': isArchiveOpen }"
                            />
                        </span>
                    </button>

                    

                    <Transition name="slide-down">
                        <div 
                            v-if="isArchiveOpen"
                            class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full px-8 py-12 bg-(--white)"
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
