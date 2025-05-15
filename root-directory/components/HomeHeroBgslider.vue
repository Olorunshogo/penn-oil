
<script setup lang="ts">
    defineProps({
        videoSrc: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            default: 'transparent',
            required: true
        },
        heading: {
            type: String,
            required: true
        },
        paragraph: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false
        },
        linkName: {
            type: String,
            required: false
        },
    });
</script>




<template>
    <div>
        <!-- Section: Hero -->
        <section>        
            
            <div class="relative w-screen h-full overflow-hidden">
            <!-- <div class="relative w-screen h-full overflow-hidden -mt-44"> -->

                <div 
                    class="bg-container"
                    :style="{ backgroundColor: bgColor }"
                >
                    <video 
                        autoplay 
                        loop muted playsinline
                        class="bg"
                    >
                        <source :src="videoSrc" type="video/mp4" >
                    </video>
                </div>


                <!-- Content Layer -->
                <div class="absolute bottom-0 w-full h-2/5 max-h-[400px] bg-(--deep-blue) backdrop-blur-md rounded-t-2xl shadow-lg flex items-center justify-center">
                    <div class="content flex flex-col gap-12 items-center justify-center *:text-(--white) *:text-center w-full max-w-7xl mx-auto">
                        
                        <div class="flex flex-col items-center justify-center gap-4">
                            <h1 class="text-4xl lg:text-5xl font-extrabold">
                                {{ heading }}
                            </h1>
                            
                            <p class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>

                        <NuxtLink
                            :to="link"
                            class="group flex *:flex items-center *:items-center justify-center gap-2 lg:gap-4 w-fit text-(--white) rounded-lg duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>
                            <span class="group-hover:underline-text font-extrabold text-lg">{{ linkName }}</span>
                        </NuxtLink>
                    </div>
                </div>

            </div>
        </section>
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