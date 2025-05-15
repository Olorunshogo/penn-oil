
<script setup lang='ts'>

    import { onMounted, watch, nextTick } from 'vue';
    import { homeHeroBgs } from '~/models/heroBgModels';   
    
    const {
        currentIndex,
        isPlaying,
        goToSlide,
        togglePlayPause,
        animateSlide,
    } = useHomeHeroSlider(homeHeroBgs.value.length)

    watch(currentIndex, async (newIndex, oldIndex) => {
        await nextTick()
        const oldSlide = document.querySelector(`#slide-${oldIndex}`) as HTMLElement
        const newSlide = document.querySelector(`#slide-${newIndex}`) as HTMLElement

        if (oldSlide && newSlide) {
            animateSlide(oldSlide, 'out')
            animateSlide(newSlide, 'in')
        }
    })
    
</script>


<template>
    <div> 
        <!-- Section: Hero -->
        <!-- <div>
            <HomeHeroBgSlider
                :videoSrc="homeHeroBg.videoSrc"
                :heading="homeHeroBg.heading"
                :paragraph="homeHeroBg.paragraph"
                :link="homeHeroBg.link"
                :linkName="homeHeroBg.linkName"
            />
        </div> -->
         
        <div class="relative">
            <div class="relative overflow-hidden h-dvh w-screen">

                <div class="absolute inset-0 w-full h-full">
                    <div 
                        v-for="(item, index) in homeHeroBgs" :key="item.id" :id="'slide-' + index">
                        <Transition name="fade" mode="out-in">
                            <HomeHeroBgSlider
                                v-if="currentIndex === index"
                                v-bind="item"
                            />
                        </Transition>
                    </div>
                </div>

                <!-- Controls -->
                <div class="controls absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4">
                    <div class="pagination flex gap-2">
                        <span
                            v-for="(_, idx) in homeHeroBgs"
                            :key="idx"
                            class="w-4 h-4 rounded-full bg-white/50 cursor-pointer transition-all"
                            :class="{ 'bg-white': currentIndex === idx }"
                            @click="goToSlide(idx)"
                        ></span>
                    </div>
                    <button @click="togglePlayPause" 
                        class="ml-4 text-white bg-black/50 px-3 py-1 rounded-full"
                    >
                        <Icon :name="isPlaying ? 'mdi:pause' : 'mdi:play'" 
                            class="text-(--white) font-extrabold text-3xl w-16 h-16 rounded-full"
                        />
                    </button>
                </div>

            </div>
        </div>

    </div>
</template>

<style lang="css" scoped>

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

</style>