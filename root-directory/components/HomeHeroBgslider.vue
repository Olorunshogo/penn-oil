
<script setup lang="ts">
    import { ref, onMounted, onUnmounted, defineProps } from 'vue';
    import { gsap } from 'gsap';

    const props = defineProps<{
        // images: string[],
        imgSrc: string,
        imgAlt: string,
        contentBg: string,
        heading: string,
        description: string,
        ctaLink: string,
        cta: string,
    }>();


    const opacity = ref(0.3);

</script>

<template>

    <div class="relative w-full h-screen overflow-hidden">

        <!-- Image Container -->
        <div class="absolute top-0 left-0 w-full h-full z-0">
            <NuxtImg
                :src="imgSrc"
                :alt="imgAlt"
                loading="lazy"
                class="h-dvh w-full object-cover"
            />
        </div>

        <!-- Content -->
        <div 
            class="content slideLeft absolute bottom-0 md:left-1/10 md:right-1/0 w-full h-1/2 max-h-[500px] md:max-w-[90rem] gap-8 rounded-lg flex flex-col items-center justify-center text-white pb-12 z-10 transform"
            :style="{ backgroundColor: contentBg, opacity: opacity }"
        >
            <div class="grid gap-4">
                <h1 class="text-3xl md:text-5xl font-extrabold text-center">{{ heading }}</h1>
                <p class="text-lg md:text-2xl text-center">{{ description }}</p>
            </div>

            <NuxtLink :to="ctaLink" class="flex *:flex items-center *:items-center justify-center *:justify-center gap-2 md:gap-4 rounded-lg p-2 md:p-4 font-bold mt-4 cursor-pointer duration-300 ease-in-out transition-all">
                <span class="text-xl"><Icon name="mdi:arrow-right" /></span>
                <span>{{ cta }}</span>
            </NuxtLink>
        </div>

    </div>


</template>


<style lang="css" scoped>

    .content {
        transform: translateY(100px);
        animation: slideLeft 6s ease-in-out infinite;
    }

    @keyframes slideLeft {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        10% {
            transform: translateX(0);
            opacity: 1;
        }
        90% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(-100%);
            opacity: 0;
        }
    }

</style>