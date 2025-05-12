
<script setup lang="ts">
    defineProps({
        title: {
            type: String,
            default: 'Latest at Penn Petro Energy',
            required: true
        }
    });
</script>


<template>
    <section>
        <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--light-gray) w-full h-full">
            
            <div class="grid gap-32 w-full mx-auto">

                <div class="flex flex-col gap-12">
           
                    <p class="text-(--dark-blue) text-center font-bold text-2xl cursor-text">newsroom</p>

                    <h2 class="text-(--dark-blue) text-center font-extrabold text-3xl lg:text-5xl text-wrap cursor-text">
                        {{ title }}
                    </h2>

                    <NewsroomCarousel />

                </div>

                
            
            </div>

        </div>

    </section>
</template>

<style lang="css" scoped>


</style>