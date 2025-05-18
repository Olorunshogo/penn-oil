
<script setup lang="ts">

    import { investorsHeroSlides } from '~/models/investorsModels';

    import {
        prevRef, prevIndex, prevSlide,
        activeRef, activeIndex,        
        nextRef, nextIndex, nextSlide,
        goTo, animateSlide, animateTransition
    } from '../stores/investorsLandingNews'

</script>


<template>

    <div class="flex flex-col items-center gap-4 sm:gap-8 lg:gap-12 w-full h-full">
        <!-- Slide container -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full overflow-hidden">
            <!-- Prev item -->
            <div ref="prevRef">
                <InvestorsNewsComp
                    v-if="investorsHeroSlides.length > 1"
                    :key="investorsHeroSlides[prevIndex].id"
                    v-bind="investorsHeroSlides[prevIndex]"
                    class="hidden lg:block scale-95 opacity-90 cursor-pointer"
                    @click="goTo(prevIndex)"
                />
            </div>

            <!-- Active item --> 
            <div ref="activeRef">
                <InvestorsNewsComp
                :key="investorsHeroSlides[activeIndex].id"
                v-bind="investorsHeroSlides[activeIndex]"  
                class="scale-100 z-10"
                />
            </div>

            <!-- Next item -->
            <div ref="nextRef">
                <InvestorsNewsComp
                    v-if="investorsHeroSlides.length > 2"
                    :key="investorsHeroSlides[nextIndex].id"
                    v-bind="investorsHeroSlides[nextIndex]"
                    class="hidden sm:block scale-95 opacity-90 cursor-pointer"
                    @click="goTo(nextIndex)"
                />
            </div>
        </div>

        <!-- Navigation -->
        <div class="relative flex items-center justify-center gap-4">
            <button 
                @click="prevSlide"
                class="nav-btn"
            >
                <Icon name="mdi:arrow-left" />
            </button>

            <!-- Pagination -->
            <div class="flex gap-2">
                <button
                    v-for="(item, i) in investorsHeroSlides"
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
        border: 2px solid var(--black);
        border-radius: 50%;
        color: var(--black);
        background-color: transparent;
        transition: all 0.5s ease-in-out;
    }

    @media (max-width: 420px) {
        .nav-btn {
            width: 2.5rem;
            height: 2.5rem;
        }
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