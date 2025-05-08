
<script setup lang="ts">

    defineProps({
        link: {
            type: String,
            default: 'Link to the webpage',
            required: true
        },
        imgSrc: {
            type: String,
            default: '',
            required: true
        },
        imgAlt: {
            type: String,
            default: 'Delivering first oil while lowering development costs',
            required: true
        },
        date: {
            type: String,
            default: 'April 21, 2025',
            required: true
        },
        description: {
            type: String,
            default: 'Delivering first oil while lowering development costs',
            required: true
        },
    });

</script>


<template>
    <div class="relative w-full h-fit max-w-md mx-auto">
        <a 
            :href="link"
            class="block cursor-pointer w-full h-full"
        >

            <NuxtImg
                :src="imgSrc"
                :alt="imgAlt"
                class="w-full h-50 object-cover rounded-t-2xl"
            />

            <div class="flex flex-col gap-4 h-60 text-(--white) bg-(--medium-blue) p-4 rounded-b-2xl">
                <p class="text-lg">{{ date }}</p>
                <p class="text-xl">{{ description }}</p>
            

                <NuxtLink
                    to="/"
                    class="group relative flex items-center gap-2 font-bold text-base duration-500 ease-in transition-all"
                >
                    <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                        <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                            <Icon name="mdi:arrow-right"/>
                        </div>
                        
                        <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                            <Icon name="mdi:arrow-right" />
                        </div>
                    </div>
                    
                    <span class="relative overflow-hidden">
                        <span class="group-hover:underline-text">read article</span>
                    </span>
                </NuxtLink>

            </div>
        
        </a>

        
    </div>
</template>

<style scoped lang="ts">
    
</style>