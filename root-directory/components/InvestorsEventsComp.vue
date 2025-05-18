<script setup lang="ts">

    defineProps({
        bgColor: {
            type: String,
            default: 'var(--dark-blue)',
            required: true,
        },
        heading: {
            type: String,
            default: 'Default heading',
            required: true,
        },
        date: {
            type: String,
            default: 'Default Date',
            required: true,
        },
        link: {
            type: String,
            default: '/investors/overview',
            required: true,
        },
        linkName: {
            type: String,
            default: 'Default LinkName',
            required: true,
        },
    });

</script>


<template>
    <div class="relative shadow-lg rounded-2xl w-full h-fit max-w-[250px]"
        :style="{ backgroundColor: bgColor }"
    >

        <div class="flex flex-col p-4 w-full h-60 text-(--white)">

            <div class="flex flex-col gap-2 w-full h-full">
                <p class="text-lg font-medium">{{ heading }}</p>
                <p class="text-xs font-medium">{{ date }}</p>
            </div>            

            <NuxtLink
                :to="link"
                class="group relative flex items-center gap-2 font-bold text-base duration-500 ease-in transition-all"
            >
                <div class="group relative flex items-center justify-center text-base w-8 h-full overflow-hidden">
                    <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                        <Icon name="mdi:arrow-right"/>
                    </div>
                    
                    <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                        <Icon name="mdi:arrow-right" />
                    </div>
                </div>
                
                <span class="relative overflow-hidden">
                    <span class="group-hover:underline-text font-extrabold text-xs">{{ linkName }}</span>
                </span>
            </NuxtLink>

        </div>

    </div>
</template>

<style scoped lang="css">
    /* Underline Text */
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
        background-color: var(--dark-gray);
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