
<script setup lang="ts">

    const props = defineProps({
        imgSrc: {
            type: String,
            required: true
        },
        imgAlt: {
            type: String,
            required: true, 
            default: 'Default alt text'
        },
        heading: {
            type: String,
            required: true 
        },
        link: {
            type: String,
            required: false,
        },
        operation: {
            type: String,
            required: false,
            default: ''
        },
        date: {
            type: String,
            required: false,
            default: 'Default date' 
        }
    });

</script>

<template>

    <div class="relative w-full h-full">
        <div class="flex items-center gap-4">
            <NuxtImg
                :src="imgSrc"
                :alt="imgAlt"
                loading="lazy"
                class="h-24 w-24 object-cover border-1 border-(--light-gray)"
            />

            <div class="grid gap-2">
                <NuxtLink
                    :to="link"
                    class="group relative text-(--dark-blue) font-bold text-lg hover:underline decoration-(--medium-blue) underline-offset-2 flex duration-500 ease-in-out transition-all"
                >                            
                    <span class="group-hover:underline-text">{{ heading }}</span>
                </NuxtLink>

                <div class="flex items-center text-sm text-(--dark-gray) gap-1">
                    {{ operation }} {{ date }}
                </div>
                
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