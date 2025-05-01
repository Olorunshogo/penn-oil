
<script setup lang="ts">
    import { ref, onMounted, onUnmounted, defineProps } from 'vue';
    import { gsap } from 'gsap';

    const props = defineProps<{
        images: string[]

    }>()

    const currentIndex = ref(0)
    const isPlaying = ref(true)
    const progress = ref(0)
    const intervalDuration = 6 // seconds

    let intervalId: number
    let progressIntervalId: number

    function updateProgress() {
        progress.value = (progress.value + 1) % intervalDuration
    }

    function startInterval() {
        intervalId = window.setInterval(() => {
            currentIndex.value = (currentIndex.value + 1) % props.images.length
        }, intervalDuration * 1000)
    }

    function startProgressInterval() {
        progressIntervalId = window.setInterval(updateProgress, 1000)
    }

    function stopIntervals() {
        clearInterval(intervalId)
        clearInterval(progressIntervalId)
    }

    function togglePlayPause() {
        if (isPlaying.value) {
            stopIntervals()
        } else {
            startInterval()
            startProgressInterval()
        }
        isPlaying.value = !isPlaying.value
    }

    function goToSlide(index: number) {
        currentIndex.value = index
        progress.value = 0
        gsap.to('image-container', {
            x: `-${index * 100}%`,
            duration: 1,
            ease: 'power2.inOut'
        })
    }

    watch(currentIndex, () => {
        progress.value = 0
    })

    onMounted(() => {
        startInterval()
        startProgressInterval()
    })

    onUnmounted(() => {
        stopIntervals()
    })



</script>

<template>

    <div class="relative w-full h-screen overflow-hidden">

        <div class="image-container">
            <div
                v-for="(image, index) in props.images"
                :key="index"
                class="bg-image"
                :style="{ backgroundImage: `url(${image})` }"
            ></div>
        </div>



        <div class="controls flex items-center gap-4 w-1/2 mx-auto">

            <div class="pagination items-center justify-center mx-auto">
                <span
                    v-for="(image, index) in props.images"
                    :key="index"
                    class="w-16 h-2 rounded-full duration-300 ease-in-out cursor-pointer transition-colors"
                    :class="{ 
                        'bg-(--white)': currentIndex === index,
                        'bg-(--white)/50': currentIndex !== index,
                        'opacity-60-[calc((progress/intervalDuration) * 100)]': currentIndex !== index,
                    }"
                    @click="goToSlide(index)"
                >
                </span>
            </div>

            <!-- <div class="flex-1 h-2 bg-white/50">
                <div
                    class="h-full bg-white ease-in-out duration-300 transition-all"
                    :style="{ width: `${(progress / intervalDuration) * 100}%` }"
                ></div>
            </div> -->

            <button
                @click="togglePlayPause"
                class="flex items-center justify-center bg-(--black)/20 hover:bg-black/50 w-10 h-10 rounded-full hover:cursor-pointer ease-in-out duration-300 transition-all"
            >
                <Icon 
                    :name="isPlaying ? 'mdi:pause' : 'mdi:play'"
                    class="text-(--white) font-extrabold text-3xl"
                />
            </button>
        </div>

    </div>


</template>


<style lang="css" scoped>

    .image-container {
        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 1s ease-in-out;
    }

    .bg-image {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .controls {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        text-align: center;
    }

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

    .progress-bar {
        width: 100%;
        height: 5px;
        background-color: rgba(255, 255, 255, 0.5);
    }

    .progress {
        height: 100%;
        background-color: white;
    }


    .ease-in-out {
        transition-timing-function: ease-in-out;
    }

    .transition-width {
        transition: width 1s ease-in-out;
    }

</style>