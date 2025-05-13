<script setup lang='ts'>
    defineProps({
        flagImgSrc: {
            type: String,
            required: true,
        },
        flagImgAlt: {
            type: String,
            required: true,
            default: 'Default Flag Alt Text'
        },
        flagName: {
            type: String,
            required: true,
            default: 'Default Name'
        },
        ctaName: {
            type: String,
            required: true,
            default: 'Default CTA Name'
        },
        ctaLink: {
            type: String,
            required: true,
        },
    });
</script>

<template>
    <div class="w-full h-full">
        <div class="group flex items-center justify-between h-32 px-2 lg:px-8 text-transparent hover:text-(--white)  border-y-2 border-(--border-gray) hover:bg-(--dark-blue) duration-200 ease-in-out transition-all">
            <div class="flex items-center gap-4">
                <NuxtImg
                    :src="flagImgSrc"
                    :alt="flagImgAlt"
                    loading="lazy"
                    class="w-16 lg:w-20 h-12 lg:h-16 object-cover rounded-lg shadow-lg"
                />

                <span class="font-extrabold text-2xl lg:text-3xl text-(--dark-blue) group-hover:text-(--white)">{{ flagName }}</span>
            </div>

            <NuxtLink 
                :to="ctaLink"
                class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-14 font-bold cursor-pointer duration-300 ease-in-out transition-all"
            >
                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                        <Icon name="mdi:arrow-right"/>
                    </div>
                    
                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                        <Icon name="mdi:arrow-right" />
                    </div>
                </div>

                <span class="text-lg">{{ ctaName }}</span>
            </NuxtLink>

        </div>
    </div>
</template>