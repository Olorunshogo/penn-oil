
<script setup lang='ts'>

    import { videoSlider } from '../models/heroVideoslider';
    import gsap from 'gsap';
    // import { 
    //     goToSlide,
    //     togglePlayPause
    //  } from '../stores/homeHero';

    const currentIndex = ref(0);  
    const isPlaying = ref(true);  
    const intervalDuration = 6000;  
    let autoplayInterval: number | null = null; 

    // Switch to the next slide
    const goToNextSlide = () => {
        
        const currentSlide = document.querySelector(`.slide-${currentIndex.value}`);
        const nextSlide = document.querySelector(`.slide-${(currentIndex.value + 1) % videoSlider.length}`);

        if (currentSlide && nextSlide) {
            gsap.to(currentSlide, {
                x: '-100%', // Slide out left
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                // onComplete: () => {
                //     currentIndex.value = (currentIndex.value + 1) % videoSlider.length;  // Update current index
                //     gsap.set(currentSlide, { x: '100%' }); // Reset position for the next cycle
                // },
            });

            gsap.fromTo(
                nextSlide,
                { x: '100%', opacity: 0 }, // Start position for next slide
                { x: '0%', opacity: 1, duration: 1, ease: 'power2.inOut' }
            );
        }

        currentIndex.value = (currentIndex.value + 1) % videoSlider.length;
    };

    // Toggle autoplay (play/pause)
    const togglePlayPause = () => {
        if (isPlaying.value) {
            clearInterval(autoplayInterval!);  // Stop autoplay
        } else {
            startAutoplay();  // Start autoplay
        }
        isPlaying.value = !isPlaying.value;
    };

    // Start autoplay
    const startAutoplay = () => {
        autoplayInterval = setInterval(goToNextSlide, intervalDuration);
    };

    // Go to a specific slide
    // const goToSlide = (index: number) => {
    //     // currentIndex.value = index;
    //     // if (isPlaying.value) {
    //     //     clearInterval(autoplayInterval!);
    //     //     startAutoplay();
    //     // }


    //     if (currentIndex.value !== index) {
    //         const currentSlide = document.querySelector(`.slide-${currentIndex.value}`);
    //         const nextSlide = document.querySelector(`.slide-${index}`);

    //         if (currentSlide && nextSlide) {
    //             gsap.to(currentSlide, {
    //                 x: '-100%',
    //                 opacity: 0,
    //                 duration: 1,
    //                 ease: 'power2.inOut',
    //                 onComplete: () => {
    //                     currentIndex.value = index;
    //                     gsap.set(currentSlide, { x: '100%' });
    //                 },
    //             });

    //             gsap.fromTo(
    //                 nextSlide,
    //                 { x: '100%', opacity: 0 },
    //                 { x: '0%', opacity: 1, duration: 1, ease: 'power2.inOut' }
    //             );
    //         }
    //     }
    // };

    // Auto-play when component is mounted
    onMounted(() => {
        if (isPlaying.value) {
            startAutoplay();
        }
    });

    // Clean up the interval when the component is unmounted
    onUnmounted(() => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    });

    defineProps({
        isSearchOpen: {
            type: Boolean,
            default: false
        }
    });
    
    function closeSearch() {
        emit('updateSearchOpen', false)
    }
    
</script>


<template>
    <section>        
        
        <div class="relative w-full h-full overflow-hidden -mt-[11rem]">
            <div class="flex w-full h-dvh overflow-hidden">   
                <HomeHeroBgslider
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

            


            <div class="controls bg-transparent absolute -mt-12 bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-4 w-4/5 md:w-1/2 mx-auto z-30">

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

    </section>
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