<script setup lang='ts'>

    defineProps({
        heading: String,
        displayDetails: Boolean,

        navLink1: String,
        linkName1: String,
        navLink2: String,
        linkName2: String,
        navLink3: String,
        linkName3: String,
        navLink4: String,
        linkName4: String,
        navLink5: String,
        linkName5: String,
        introduction: String,
        updatedDate: String,

        introP1: String,
        introP2: String,
        introLink: String,
        introLinkName: String,
    });

    const emit = defineEmits<{
        (e: 'toggleDetails'):void
    }>();

    // Toggle Function
    function handleToggleDetails() {
        emit('toggleDetails')
    }


</script>

<template>
    <div>
        <div class="flex flex-col w-full h-full">

            <div class="flex flex-col p-8 text-(--dark-blue) hover:text-(--white) bg-transparent hover:bg-(--dark-blue) border-y-1 border-(--border-gray)">
            
                <button 
                    @click="handleToggleDetails"
                    class="flex items-center justify-between hover:cursor-pointer w-full h-full duration-300 ease-in-out transition-all"
                >
                    <span class="text-2xl md:text-3xl font-extrabold">
                        {{ heading }}
                    </span>
                    <span>
                        <Icon 
                            name="mdi:chevron-down" 
                            class="hidden hover:flex font-extrabold text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                            :class="{ 'rotate-180': displayDetails }"
                        />
                    </span>
                </button>
            </div>

            <Transition name="slide-down" mode="out-in">
                <div 
                    v-if="displayDetails"
                    class="flex gap-8 p-4"
                >
                    
                    <!-- Blue Bg Navbar at the LHS -->
                    <div class="flex w-60 rounded-lg bg-(--dark-blue)">

                        <div class="flex flex-col p-4 gap-3 font-bold text-sm w-full h-full max-h-60 *:text-(--white) *:hover:opacity-70 *:duration-500 *:ease-in-out *:transition-all">
                            <a :href="navLink1">
                                <span>{{ linkName1 }}</span>
                            </a>
                            <a :href="navLink2">
                                <span>{{ linkName2 }}</span>
                            </a>
                            <a :href="navLink3">
                                <span>{{ linkName3 }}</span>
                            </a>
                            <a :href="navLink4">
                                <span>{{ linkName4 }}</span>
                            </a>
                            <a :href="navLink5">
                                <span>{{ linkName5 }}</span>
                            </a>
                        </div>
                        
                    </div>

                    <div class="flex-1">
                        <!-- Introduction -->
                        <div class="flex flex-col gap-8 w-full h-full">
                            <div class="flex flex-col gap-2 bg-(--white) p-4 text-sm rounded-lg">
                                <p class="text-(--black)">
                                    <span class="font-bold">Our business:</span> {{ introduction }}
                                </p>
                                <p class="text-(--medium-gray)">Updated: {{ updatedDate }}</p>
                            </div>

                            <div class="flex flex-col gap-2 text-(--black) text-base rounded-lg">
                                <p>{{ introP1 }}</p>
                                <p>{{ introP2 }}</p>
                            </div>

                            <NuxtLink
                                :to="introLink" target="_blank"
                                class="group flex *:flex items-center *:items-center gap-2 w-fit text-(--black) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-down"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-down" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-bold text-sm">{{ introLinkName }}</span>
                            </NuxtLink>

                        </div>

                    </div>
                </div>
            </Transition>

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
        background-color: var(--medium-gray);
        transition: width 0.5s ease-in-out;
    }

    .group:hover .group-hover\:underline-text::after {
        width: 100%;
    }

    .arrow-icon {
        transition: transform 1s ease-in-out;
    }

    .group:hover .arrow-icon {
        /* transform: translateX(12px); */
        transform: translateY(12px);
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

    /* Slide Down */
    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
        overflow: hidden;
    }

    .slide-down-enter-from,
    .slide-down-leave-to {
        max-height: 0;
        opacity: 0;
    }

    .slide-down-enter-to,
    .slide-down-leave-from {
        max-height: 10rem;
        opacity: 1;
    }
</style>