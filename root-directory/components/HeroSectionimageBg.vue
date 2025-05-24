
<script setup lang="ts">

    interface Props {
        imgSrc: string;
        imgAlt: string;
        category?: string;
        title: string;
        paragraph: string;
        link: string;
        linkName: string;
    }

    const props = defineProps<Props>();


</script>


<template>
    <!-- Section: Hero -->
    <section>      
        
        <div class="relative w-screen h-dvh overflow-hidden">

            <div class="bg-container">

                <NuxtImg
                    :src="imgSrc"
                    :alt="imgAlt"
                    loading="lazy"
                    class="bg"
                />
            </div>

            <!-- Content Layer -->
            <div class="absolute bottom-0 w-full h-1/2 max-h-120 backdrop-blur-md rounded-t-2xl shadow-lg flex items-center justify-center">
                <div class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-7xl mx-auto">
                    
                    <span class="text-lg lg:text-xl text-center font-bold text-(--black)">
                        {{ category }}
                    </span>


                    <h1 class="text-5xl sm:text-6xl text-center font-extrabold text-(--dark-red)">
                        {{ title }}
                    </h1>
                    
                    <p class="text-base md:text-lg text-center font-medium text-(--white)">
                        {{ paragraph }}
                    </p>

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