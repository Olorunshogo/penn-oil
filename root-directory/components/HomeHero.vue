
<script setup lang='ts'>

    import { homeHeroVideo5Bg } from '~/models/heroBgModels';    
    
</script>


<template>
    <div> 
        <!-- Section: Hero -->
        <div>
            <HomeHeroBgSlider
                :videoSrc="homeHeroVideo5Bg.videoSrc"
                :bgColor="homeHeroVideo5Bg.bgColor"
                :heading="homeHeroVideo5Bg.heading"
                :paragraph="homeHeroVideo5Bg.paragraph"
                :link="homeHeroVideo5Bg.link"
                :linkName="homeHeroVideo5Bg.linkName"
            />
        </div>



        <!-- <section>        
            
            <div class="relative w-full h-full overflow-hidden -mt-[11rem]">
                <div class="flex w-full h-dvh overflow-hidden">    -->
                    <!-- <HomeHeroBgslider
                        v-for="(item, index) in videoSlider"
                        :key="item.id" 
                        :imgSrc="item.imgSrc"
                        :imgAlt="item.imgSrc"
                        :contentBg="item.contentBg"
                        :heading="item.heading"
                        :description="item.description"
                        :ctaLink="item.ctaLink"
                        :cta="item.cta"  

                        class="w-full min-w-full h-full"              
                    />
                </div> 

                <div class="controls flex items-center justify-center gap-4 w-4/5 md:w-1/2 mx-auto z-30 bg-transparent absolute bottom-0 left-1/2 transform -translate-x-1/2 ">

                    <div class="pagination flex flex-wrap items-center justify-center gap-2 bg-(--black)/40 rounded-full py-2 px-4">
                        <span
                            v-for="(item, index) in videoSlider"
                            :key="index"
                            class="flex w-12 md:w-16 h-2 rounded-full duration-300 ease-in-out cursor-pointer transition-colors"
                            :class="{ 
                                'bg-(--white)': currentIndex === index,
                                'bg-(--white)/50': currentIndex !== index,
                            }"
                            :style="{ opacity: currentIndex === index ? 1 : 0.5, width: `${(progress / intervalDuration) * 100}%` }"
                            @click="goToSlide(index)"
                        >
                        </span>
                    </div>

                    <button
                        @click="togglePlayPause"
                        class="flex items-center justify-center bg-(--black)/40 hover:bg-(--black)/50 w-10 h-10 rounded-full hover:cursor-pointer ease-in-out duration-500 transition-all"
                    >
                        <Icon 
                            :name="isPlaying ? 'mdi:pause' : 'mdi:play'"
                            class="text-(--white) font-extrabold text-3xl"
                        />
                    </button>
                </div> 

            </div>

        </section> -->
    </div>
</template>

<style lang="css" scoped>

    .home-hero-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 1s ease-in-out;
        opacity: 0;
    }

    .home-hero-slide.opacity-100 {
        opacity: 1 !important;
    }


    /* .controls {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        text-align: center;
    } */

    .pagination {
        margin: 10px 0;
    }

    .pagination span {
        margin: 0 5px;
        cursor: pointer;
        display: inline-block;
    }

    .pagination .active {
        font-weight: bold;
    }

</style>