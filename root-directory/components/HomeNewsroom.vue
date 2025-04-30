
<script setup>
    import { ref, onMounted, watch } from 'vue';
    import { newsComps } from '../models/newsComps';

    import { 
        carousel, activeIndex, updateCarousel ,nextSlide, prevSlide, goTo
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

                <!-- New Carousel -->
                <!-- <div 
                    role="presentation"
                    class="flex flex-col items-center justify-center overflow-hidden gap-8"
                >
                    <Swiper
                        :modules="modules"
                        :slides-per-view="3"
                        :space-between="50"
                        navigation
                        :watch-slides-progress="true"
                        :pagination="{  el: '.swiper-pagination',clickable: true }"
                        :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
                        :scrollbar="{ draggable: true }"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        @reachEnd="onReachEnd"

                        :breakpoints="{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }"

                        speed: 600

                        effect="coverflow"
                        :coverflow-effect=" {
                            rotate: 0,
                            stretch: 80,
                            depth: 350,
                            modifier: 1,
                            slideShadows: true,
                        }"
                        class="mySwiper w-full"
                    >
                        <SwiperSlide
                            v-for="newsComp in newsComps"
                            :key="newsComp.id"
                            v-slot="{ isActive }"
                        >
                            <HomeNewsComp 
                                :link="newsComp.link"
                                :imgSrc="newsComp.imgSrc"
                                :alt="newsComp.alt"
                                :date="newsComp.date"
                                :description="newsComp.description"
                            />
                        </SwiperSlide>

                    </Swiper>

                    <div class="flex items-center justify-center gap-4">
                        <button 
                            @click="swiper.slidePrev"
                            class="swiper-button-prev"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:-translate-x-full">
                                    <Icon name="mdi:arrow-left"/>
                                </div>
                                
                                <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:-translate-x-0">
                                    <Icon name="mdi:arrow-left" />
                                </div>
                            </div>
                        </button>

                        <div class="swiper-pagination"></div>
                        
                        <button 
                            @click="swiper.slideNext()"
                            class="swiper-button-next"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>
                        </button>
                        
                    </div>
                </div>  -->

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
        width: 300px;
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
        border-radius: 50%;
        color: var(--black);
        background-color: var(--white);
    }

    .nav-btn:hover {
        color: var(--white);
        background-color: var(--black);
        opacity: 0.8;
    }

    .pagination-dot {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: gray;
    }
    .pagination-dot.active-dot {
        background-color: blue;
    }






    /* .swiper-button-prev, 
    .swiper-button-next {
        color: var(--black);
        background-color: var(--white);
        border: 2px solid var(--black);
        border-radius: 50%;
        padding: 2px;
        cursor: pointer;
        height: 50px;
        width: 50px;
        transition: all 0.3s ease-in-out;
    }

    .swiper-button-prev:hover, 
    .swiper-button-next:hover {
        color: var(--white);
        background-color: var(--black);
    } */


</style>