
<script setup lang="ts">

    defineProps({
        heading: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
            default: '/'
        },
        linkName: {
            type: String,
            required: true,
        },
    });

</script>

<template>

    <div class="relative w-full h-full">
        <div class="flex flex-col items-center justify-between h-100 gap-2 lg:gap-4 p-4 rounded-lg bg-(--medium-blue)">
            <div class="grid gap-2 w-full text-(--white)">
                <h3 class="text-3xl font-semibold">{{ heading }}</h3>
                <p class="text-lg">{{ date }}</p>
            </div>

            <NuxtLink
                :to="link"
                class="group relative text-(--dark-blue) font-bold text-sm lg:text-lg hover:underline decoration-(--medium-blue) underline-offset-2 flex duration-500 ease-in-out transition-all"
            >                            
                <span class="group-hover:underline-text">{{ linkName }}</span>
            </NuxtLink>

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