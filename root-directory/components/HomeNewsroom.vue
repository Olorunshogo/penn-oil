
<script setup>
    
    import { newsComps } from '~/models/newsComps';

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Navigation } from 'swiper/modules';
    import 'swiper/css';
    // import 'swiper/css/pagination';
    // import 'swiper/css/navigation';
    // import SwiperCore, { Pagination, Navigation } from 'swiper/modules';
    

    // Initialize modules
    //  SwiperCore.use([Pagination, Navigation]);
    // Swiper.use([Pagination, Navigation]);

    const onSwiper = (swiper) => {
        console.log(swiper);
    };

    const onSlideChange = () => {
        console.log('slide change');
    };



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

                <div class="flex flex-col items-center justify-center overflow-hidden gap-8">

                    <!-- NewsCarousel -->
                    <Swiper
                        :slides-per-view="3"
                        :space-between="80"
                        :watch-slides-progress="true"
                        :pagination="{  el: '.swiper-pagination',clickable: true }"
                        :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"

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
                        <div class="swiper-button-prev">
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next">
                            <button>
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
                    </div>

                </div>      

                
            
            </div>

        </div>

    </section>
</template>

<style lang="css" scoped>
    .swiper-button-prev, 
    .swiper-button-next {
        color: var(--black);
        background-color: var(--white);
        border: 2px solid var(--black);
        border-radius: 50%;
        padding: 2px;
        cursor: pointer;
    }
</style>