<script setup lang='ts'>
    defineProps({
        imgSrc: {
            type: String,
            required: true,
            Default: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        imgAlt: {
            type: String,
            required: true,
            default: 'Default Alt Text Portrait Photo of Smiling Man with His Arms Crossed Standing In Front of a Wall'
        },
        linkName: {
            type: String,
            required: true,
            default: 'Default linkName'
        },
        link: {
            type: String,
            required: true,
            default: '/'
        },
        description: {
            type: String,
            required: true,
            default: 'Default description'
        },

    });
</script>

<template>
    <div>
        <div class="flex flex-col items-center justify-center gap-6 w-full h-full">
            <NuxtImg
                :src="imgSrc"
                :alt="imgAlt"
                loading="lazy"
                class="w-32 sm:w-28 lg:w-24 object-cover border-3 border-(--light-gray)"
            />

            <div class="flex flex-col items-center justify-center w-full h-full">
                <NuxtLink
                    to="/"
                    class="group relative flex items-center font-bold text-lg text-(--medium-blue) duration-500 ease-in transition-all"
                >
                    <span class="relative overflow-hidden">
                        <span class="group-hover:underline-text">{{ linkName }}</span>
                    </span>
                    <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                        <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                            <Icon name="mdi:chevron-right"/>
                        </div>
                        
                        <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                            <Icon name="mdi:chevron-right" />
                        </div>
                    </div>
                </NuxtLink>
                <p class="text-base md:text-lg text-(--black) text-center">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>

    .group-hover\:underline-text {
        position: relative;
        display: inline-block;
    }

    .group-hover\:underline-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: var(--medium-blue);
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

    @keyframes moveArrow {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(10px);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>