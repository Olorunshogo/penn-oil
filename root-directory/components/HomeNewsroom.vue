
<script setup>
    
    import { newsComps } from '../models/newsComps';

    import { 
        carousel, activeIndex ,nextSlide, prevSlide, goTo
     } from '../stores/homeNews'

</script>

<template>
    <section>
        <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--light-gray) w-full h-full">
            
            <div class="grid gap-32 w-full mx-auto">

                <div class="flex flex-col gap-12">
           
                    <p class="text-(--dark-blue) text-center font-bold text-2xl cursor-text">newsroom</p>

                    <h2 class="text-(--dark-blue) text-center font-extrabold text-3xl lg:text-5xl text-wrap cursor-text">
                        Latest at Penn Petro Energy
                    </h2>

                </div>


                <div 
                    class="relative w-full flex flex-col items-center gap-16 overflow-hidden"
                >
                    <div 
                        class="relative flex items-center justify-center w-full overflow-hidden"
                    >
                        <div 
                            ref="carousel"
                            class="flex items-center justify-center w-full gap-6"
                        >
                            <div
                                v-for="(newsComp, index) in newsComps"
                                :key="newsComp.id"
                                class="newsComp"
                                :class="{ active: index == activeIndex }"
                                @click="goTo(index)"
                            >
                                <HomeNewsComp
                                    :link="newsComp.link"
                                    :imgSrc="newsComp.imgSrc"
                                    :alt="newsComp.alt"
                                    :date="newsComp.date"
                                    :description="newsComp.description"
                                />
                            </div>
                        </div>

                    </div>

                    <!-- Navigation -->
                    <div class="flex items-center justify-center gap-4">
                        <button 
                            @click="prevSlide"
                            class="nav-btn"
                        >
                            <Icon name="mdi:arrow-left" />
                        </button>

                        <!-- Pagination -->
                        <div class="flex gap-2">
                            <button
                                v-for="(item, i) in newsComps"
                                :key="item.id"
                                class="pagination-dot"
                                :class="{ 'active-dot': i === activeIndex }"
                                @click="goTo(i)"
                            />
                        </div>

                        <button 
                            @click="nextSlide" 
                            class="nav-btn"
                        >
                            <Icon name="mdi:arrow-right" />
                        </button>
                    </div>


                </div>

                   

                
            
            </div>

        </div>

    </section>
</template>

<style lang="css" scoped>

    .newsComp {
        transition: all 0.5s ease;
        cursor: pointer;
        flex-shrink: 0;
        width: 320px;
        touch-action: pan-y;
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