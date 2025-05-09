
<script setup lang="ts">
    import { newsComps } from '../models/newsComps';

    import {
        prevRef, prevIndex, prevSlide,
        activeRef, activeIndex,        
        nextRef, nextIndex, nextSlide,
        goTo
    } from '../stores/homeNews'

</script>


<template>
    <div class="flex flex-col items-center gap-12 w-full">
        <div class="grid grid-cols-1 sm:flex items-center justify-center gap-4 w-full *:hover:scale-102 *:duration-300 *:ease-in-out *:transition-all">
            <!-- Prev item -->
            <div ref="prevRef">
                <HomeNewsComp
                    v-if="newsComps.length > 1"
                    :key="newsComps[prevIndex].id"
                    v-bind="newsComps[prevIndex]"
                    class="hidden md:block scale-95 opacity-85 cursor-pointer"
                    @click="goTo(prevIndex)"
                />
            </div>

            <!-- Active item -->
            <div ref="activeRef">
                <HomeNewsComp
                    :key="newsComps[activeIndex].id"
                    v-bind="newsComps[activeIndex]"  
                    class="scale-100 z-10"
                />
            </div>

            <!-- Next item -->
            <div ref="nextRef">
                <HomeNewsComp
                    v-if="newsComps.length > 2"
                    :key="newsComps[nextIndex].id"
                    v-bind="newsComps[nextIndex]"
                    class="hidden md:block scale-95 opacity-85 cursor-pointer"
                    @click="goTo(nextIndex)"
                />
            </div>
        </div>

        <!-- Navigation -->
        <div class="flex items-center justify-center gap-4">
            <button 
                @click="prevSlide"
                class="nav-btn"
            >
                <Icon name="mdi:arrow-left" />
            </button>

            <!-- Pagination -->
            <div class="flex gap-2">
                <button
                    v-for="(item, i) in newsComps"
                    :key="item.id"
                    class="pagination-dot"
                    :class="{ 'active-dot': i === activeIndex }"
                    @click="goTo(i)"
                />
            </div>

            <button 
                @click="nextSlide" 
                class="nav-btn"
            >
                <Icon name="mdi:arrow-right" />
            </button>
        </div>
    </div>

</template>

<style lang="css" scoped>

    .newsComp {
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
    .newsComp.active {
        transform-origin: center;
    }

    .nav-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border: 3px solid var(--black);
        border-radius: 50%;
        color: var(--black);
        background-color: transparent;
        transition: all 0.5s ease-in-out;
    }

    .nav-btn:hover {
        color: var(--white);
        background-color: var(--black);
        opacity: 0.8;
        cursor: pointer;
    }

    .pagination-dot {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: gray;
        transition: all 0.5s ease-in-out;
    }
    .pagination-dot:hover {
        cursor: pointer;
        opacity: 0.8;
    }
    .pagination-dot.active-dot {
        background-color: blue;
    }

</style>