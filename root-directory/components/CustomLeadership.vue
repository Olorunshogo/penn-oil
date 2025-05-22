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
        title: {
            type: String,
            required: true,
            default: 'Default title'
        },
        description: {
            type: String,
            required: false,
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
                class="w-1/2 max-w-[200px] h-full max-h-70 lg:w-50 object-cover border-3 border-(--light-gray) shadow-lg rounded-tl-4xl rounded-br-4xl"
            />

            <div class="flex flex-col items-center justify-center w-full h-full">
                <p class="text-(--dark-blue) font-medium text-center">{{ title }}</p>
                <p class="text-(--black) text-center">{{ description }}</p>
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