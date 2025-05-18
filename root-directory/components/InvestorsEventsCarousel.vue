
<script setup lang="ts">
    
    import { ref, computed } from "vue";
    import { investorsEventsSlides } from '~/models/investorsModels';
    import gsap from "gsap";

    // Reactive references
    const prev2Ref = ref<HTMLElement | null>(null);
    const prevRef = ref<HTMLElement | null>(null);
    const activeRef = ref<HTMLElement | null>(null);
    const nextRef = ref<HTMLElement | null>(null);
    const next2Ref = ref<HTMLElement | null>(null);

    // Reactive index
    const activeIndex = ref(0);
    const direction = ref<'next' | 'prev'>('next');

    // Computed previous and next indices
    const prev2Index = computed(() => {
        return (activeIndex.value - 2 + investorsEventsSlides.value.length) % investorsEventsSlides.value.length;
    });
    const prevIndex = computed(() => {
        return (activeIndex.value - 1 + investorsEventsSlides.value.length) % investorsEventsSlides.value.length;
    });
    const nextIndex = computed(() => {
        return (activeIndex.value + 1) % investorsEventsSlides.value.length;
    });
    const next2Index = computed(() => {
        return (activeIndex.value + 2) % investorsEventsSlides.value.length;
    });

    // Carousel Navigation Functions
    function baseNext() { 
        activeIndex.value = (activeIndex.value + 1) % investorsEventsSlides.value.length; 
    };
    function basePrev() { 
        activeIndex.value = (activeIndex.value - 1 + investorsEventsSlides.value.length) % investorsEventsSlides.value.length; 
    };
    function baseGoTo (index: number) { 
        activeIndex.value = index; 
    };

    // GSAP Transition Animation Function
    function animateSlide (dir: 'next' | 'prev') {
        if (!prev2Ref.value || !prevRef.value || !activeRef.value || !nextRef.value || !next2Ref.value) return;

        const slideRefs = [prev2Ref.value, prevRef.value, activeRef.value, nextRef.value, next2Ref.value];
        const distance = 100;
        const duration = 0.5;
        const ease = 'power2.inOut';

        const timeline = gsap.timeline();

        // Animate out
        timeline.to(slideRefs, {
            xPercent: dir === 'next' ? -distance : distance,
            opacity: 0,
            duration,
            ease,
        });
        timeline.add(() => {
            dir === 'next' ? baseNext() : basePrev();
            nextTick();

            // Position off-screen
            const reset = dir === 'next' ? distance : -distance;
            gsap.set(slideRefs, { xPercent: reset, opacity: 0 });

            // Animate in
            gsap.to(slideRefs, {
                xPercent: 0,
                opacity: (i, el) => (el === activeRef.value ? 1 : 0.9),
                duration,
                ease,
                stagger: 0.05,
            });
        });
    };
    // function animateTransition (dir: 'next' | 'prev') {
    //     direction.value = dir;
    //     const offset = dir === 'next' ? -20 : 20;

    //     if (activeRef.value) {
    //         gsap.fromTo(
    //             activeRef.value,
    //             { x: offset, opacity: 0 },
    //             { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
    //         );
    //     }

    //     if (prevRef.value) {
    //         gsap.fromTo(
    //             prevRef.value,
    //             { x: offset - 20, opacity: 0 },
    //             { x: 0, opacity: 0.9, duration: 0.5, ease: 'power2.out' }
    //         );
    //     }

    //     if (nextRef.value) {
    //         gsap.fromTo(
    //             nextRef.value,
    //             { x: offset + 20, opacity: 0 },
    //             { x: 0, opacity: 0.9, duration: 0.5, ease: 'power2.out' }
    //         );
    //     }
    // };

    // GSAP Slide Animation Function
    // function animateSlide (dir: 'next' | 'prev') {
    //     if (!prev2Ref.value || !prevRef.value || !activeRef.value || !nextRef.value || !next2Ref.value) return;

    //     const timeline = gsap.timeline();
    //     const distance = 100;
    //     const duration = 0.5;
    //     const ease = 'power2.inOut';

    //     // Animate out current elements
    //     const slideRefs = [prev2Ref.value, prevRef.value, activeRef.value, nextRef.value, next2Ref.value];
    //     timeline.to(slideRefs, {
    //         xPercent: dir === 'next' ? -distance : distance,
    //         opacity: 0,
    //         duration,
    //         ease
    //     });

    //     // After out-animation completes, update index and animate in
    //     timeline.add(async () => {
    //         if (dir === 'next') baseNext();
    //         else basePrev();
    //         await nextTick();

    //         // Prepare new positions off-screen
    //         const resetDistance = dir === 'next' ? distance : -distance;
    //         gsap.set([prev2Ref.value, prevRef.value, activeRef.value, nextRef.value, next2Ref.value], {
    //             xPercent: resetDistance,
    //             opacity: 0
    //         });

    //         // Animate them into position
    //         gsap.to([prev2Ref.value, prevRef.value, activeRef.value, nextRef.value, next2Ref.value], {
    //             xPercent: 0,
    //             opacity: (i, target) => (target === activeRef.value ? 1 : 0.9),
    //             duration,
    //             ease,
    //             stagger: 0.05
    //         });
    //     });

    //     if (dir === 'next') {
    //         timeline.to(activeRef.value, { xPercent: -distance, opacity: 0, duration, ease }, 0);
    //         timeline.to(prevRef.value, { xPercent: -distance, opacity: 0, duration, ease }, 0);
    //         timeline.to(nextRef.value, { xPercent: -distance, opacity: 0, duration, ease }, 0);

    //         timeline.add(() => {
    //             baseNext();
    //             nextTick();
    //             gsap.set(prevRef.value, { xPercent: distance, opacity: 0.9 });
    //             gsap.set(activeRef.value, { xPercent: distance, opacity: 1 });
    //             gsap.set(nextRef.value, { xPercent: distance, opacity: 0.9 });

    //             gsap.to([prevRef.value, activeRef.value, nextRef.value], {
    //                 xPercent: 0,
    //                 opacity: (i, target) => target === activeRef.value ? 1 : 0.9,
    //                 duration,
    //                 ease,
    //                 stagger: 0.1,
    //             });
    //         });

    //     } else {
    //         timeline.to(activeRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);
    //         timeline.to(prevRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);
    //         timeline.to(nextRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);

    //         timeline.add(() => {
    //             basePrev();
    //             nextTick();
    //             gsap.set(prevRef.value, { xPercent: -distance, opacity: 0.9 });
    //             gsap.set(activeRef.value, { xPercent: -distance, opacity: 1 });
    //             gsap.set(nextRef.value, { xPercent: -distance, opacity: 0.9 });

    //             gsap.to([prevRef.value, activeRef.value, nextRef.value], {
    //                 xPercent: 0,
    //                 opacity: (i, target) => target === activeRef.value ? 1 : 0.9,
    //                 duration,
    //                 ease,
    //                 stagger: 0.1,
    //             });
    //         });
    //     }
    // }

    // const prevSlide = async () => {
    //     direction.value = 'prev';
    //     basePrev();
    //     await nextTick();
    //     animateSlide('prev');
    // };
    // const nextSlide = async () => {
    //     direction.value = 'next';
    //     baseNext();
    //     await nextTick();
    //     animateSlide('next');
    // };

    // Function to go to a specific slide by index
    // const goTo = async (index: number) => {
    //     direction.value = index > activeIndex.value ? 'next' : 'prev';
    //     baseGoTo(index);
    //     await nextTick();
    //     animateTransition(direction.value);

    //     const dir = index > activeIndex.value ? 'next' : 'prev';

    //     if (!prevRef.value || !activeRef.value || !nextRef.value) return;

    //     const timeline = gsap.timeline();
    //     const distance = dir === 'next' ? -100 : 100;
    //     const duration = 0.5;
    //     const ease = 'power2.inOut';

    //     timeline.to(activeRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);
    //     timeline.to(prevRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);
    //     timeline.to(nextRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);

    //     timeline.add(() => {
    //         baseGoTo(index);
    //         nextTick();

    //         const startPos = dir === 'next' ? 100 : -100;
    //         gsap.set(prevRef.value, { xPercent: startPos, opacity: 0.7 });
    //         gsap.set(activeRef.value, { xPercent: startPos, opacity: 1 });
    //         gsap.set(nextRef.value, { xPercent: startPos, opacity: 0.7 });

    //         gsap.to([prevRef.value, activeRef.value, nextRef.value], {
    //         xPercent: 0,
    //         opacity: (i, target) => target === activeRef.value ? 1 : 0.7,
    //         duration,
    //         ease,
    //         stagger: 0.1,
    //         });
    //     });
    // };
    
    function goTo(index: number) {
        direction.value = index > activeIndex.value ? 'next' : 'prev';
        const dir = direction.value;
        if (index === activeIndex.value) return;

        if (!prev2Ref.value || !prevRef.value || !activeRef.value || !nextRef.value || !next2Ref.value) return;

        const slideRefs = [prev2Ref.value, prevRef.value, activeRef.value, nextRef.value, next2Ref.value];
        const distance = 100;
        const duration = 0.5;
        const ease = 'power2.inOut';

        const timeline = gsap.timeline();

        // Animate out
        timeline.to(slideRefs, {
            xPercent: dir === 'next' ? -distance : distance,
            opacity: 0,
            duration,
            ease,
        });
        timeline.add(() => {
            baseGoTo(index);
            nextTick();

            const reset = dir === 'next' ? distance : -distance;
            gsap.set(slideRefs, { xPercent: reset, opacity: 0 });

            gsap.to(slideRefs, {
                xPercent: 0,
                opacity: (i, el) => (el === activeRef.value ? 1 : 0.9),
                duration,
                ease,
                stagger: 0.05,
            });
        });
    };

    const prevSlide = async () => {
        direction.value = 'prev';
        await animateSlide('prev');
    };

    const nextSlide = async () => {
        direction.value = 'next';
        await animateSlide('next');
    };


</script>


<template>

    <div class="flex flex-col items-center gap-4 sm:gap-8 lg:gap-12 w-full h-full">
        <!-- Slide container -->
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full overflow-hidden">
            
            <!-- Prev 2 Item -->
            <div ref="prev2Ref">
                <InvestorsEventsComp
                    v-if="investorsEventsSlides.length > 3"
                    :key="investorsEventsSlides[prev2Index].id"
                    v-bind="investorsEventsSlides[prev2Index]"
                    class="hidden xl:block scale-90 opacity-70 cursor-pointer"
                    @click="goTo(prev2Index)"
                />
            </div>
            
            <!-- Prev Item -->
            <div ref="prevRef">
                <InvestorsEventsComp
                    v-if="investorsEventsSlides.length > 1"
                    :key="investorsEventsSlides[prevIndex].id"
                    v-bind="investorsEventsSlides[prevIndex]"
                    class="hidden sm:block scale-95 opacity-90 cursor-pointer"
                    @click="goTo(prevIndex)"
                />
            </div>

            <!-- Active Item --> 
            <div ref="activeRef">
                <InvestorsEventsComp
                    :key="investorsEventsSlides[activeIndex].id"
                    v-bind="investorsEventsSlides[activeIndex]"  
                    class="scale-100 z-10"
                />
            </div>

            <!-- Next item -->
            <div ref="nextRef">
                <InvestorsEventsComp
                    v-if="investorsEventsSlides.length > 2"
                    :key="investorsEventsSlides[nextIndex].id"
                    v-bind="investorsEventsSlides[nextIndex]"
                    class="hidden sm:block scale-95 opacity-90 cursor-pointer"
                    @click="goTo(nextIndex)"
                />
            </div>

            <!-- Next 2 Item -->
            <div ref="next2Ref">
                <InvestorsEventsComp
                    v-if="investorsEventsSlides.length > 3"
                    :key="investorsEventsSlides[next2Index].id"
                    v-bind="investorsEventsSlides[next2Index]"
                    class="hidden lg:block scale-90 opacity-70 cursor-pointer"
                    @click="goTo(next2Index)"
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
            <div class="flex gap-1.5 md:gap-2">
                <button
                    v-for="(item, i) in investorsEventsSlides"
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

<style scoped lang="css">

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
            width: 2rem;
            height: 2rem;
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