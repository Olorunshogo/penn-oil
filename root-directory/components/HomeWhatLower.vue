<script setup>
    defineProps({
        isFixed: {
            type: Boolean,
            default: false,
        }
    })
</script>

<template>
    <div class="relative h-full py-8 lg:py-12 w-full">
        
                
        <h2 
            ref="lowerCarbonH2"
            class="flex flex-col items-center justify-end h-(--lower-h2-h) sm:h-(--lower-h2-h-sm) lg:h-(--lower-h2-h-lg) z-90 font-extrabold text-center text-(--dark-green) text-6xl lg:text-9xl text-wrap cursor-text duration-300 ease-in-out transition-all"
            :class="[
                isFixed ? 'sticky z-[99] inset-0 bottom-[unset] top-0 left-0 right-0 shadow-lg' : 'relative bg-transparent shadow-none'
            ]"
        >
            Lower carbon solutions
        </h2>

                   
        
    </div>
</template>