
<script setup lang="ts">
    defineProps({
        bgColor: {
            type: String,
            default: 'transparent',
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        },
        imgAlt: {
            type: String,
            required: true
        },
        displayLink: {
            type: Boolean,
            default: false,
            required: true
        },
        category: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        titleBgImageSrc: {
            type: String,
            required: true
        },
        paragraph: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        linkName: {
            type: String,
            required: true
        },
    });
</script>


<template>
    <!-- Section: Hero -->
        <section>      
            
            <div class="relative w-screen h-dvh overflow-hidden">

                <div 
                    class="bg-container"
                    :style="{ backgroundColor: bgColor }"
                >

                    <NuxtImg
                        :src="imgSrc"
                        :alt="imgAlt"
                        loading="lazy"
                        class="bg"
                    />
                </div>

                <!-- Content Layer -->
                <div class="absolute bottom-0 w-full h-1/2 max-h-120 bg-(--white) rounded-t-2xl shadow-lg flex items-center justify-center"
                >
                    <div class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-7xl mx-auto">
                        
                        <span class="text-lg lg:text-xl text-center font-bold text-(--dark-red)">
                            {{ category }}
                        </span>

                        <h1 
                            class="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text-center font-extrabold bg-clip-text text-transparent" 
                            :style="{ backgroundImage: `url(${titleBgImageSrc})`, backgroundSize: 'cover' }"
                        >
                            {{ title }}
                        </h1>
                        
                        <p class="text-base md:text-lg lg:text-xl text-center text-(--black)">
                            {{ paragraph }}
                        </p>

                        <NuxtLink
                            v-if="displayLink" :to="link"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>
                            <span class="group-hover:underline-text font-semibold text-sm lg:text-lg">{{ linkName }}</span>
                        </NuxtLink>
                    </div>
                </div>

            </div>
        </section>
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

</style>