
import { ref, computed } from "vue";
import { newsComps } from '../models/newsComps';
// import gsap from "gsap";

// Reactive references
export const prevRef = ref<HTMLElement | null>(null);
export const activeRef = ref<HTMLElement | null>(null);
export const nextRef = ref<HTMLElement | null>(null);

// Reactive index
export const activeIndex = ref(0);
export const direction = ref<'next' | 'prev'>('next');

// Computed previous and next indices
export const prevIndex = computed(() => {
    return (activeIndex.value - 1 + newsComps.value.length) % newsComps.value.length;
});
export const nextIndex = computed(() => {
    return (activeIndex.value + 1) % newsComps.value.length;
});

// GSAP Transition Animation Function
export function animateTransition (dir: 'next' | 'prev') {
    direction.value = dir;
    const offset = dir === 'next' ? -100 : 100;

    if (activeRef.value) {
        gsap.fromTo(
            activeRef.value,
            { x: offset, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
    }

    if (prevRef.value) {
        gsap.fromTo(
            prevRef.value,
            { x: offset - 100, opacity: 0 },
            { x: 0, opacity: 0.7, duration: 0.5, ease: 'power2.out' }
        );
    }

    if (nextRef.value) {
        gsap.fromTo(
            nextRef.value,
            { x: offset + 100, opacity: 0 },
            { x: 0, opacity: 0.7, duration: 0.5, ease: 'power2.out' }
        );
    }
};

// GSAP Slide Animation Function
export const animateSlide = async (dir: 'next' | 'prev') => {
    if (!prevRef.value || !activeRef.value || !nextRef.value) return;

    const timeline = gsap.timeline();
    const distance = 100;
    const duration = 0.5;
    const ease = 'power2.inOut';

    if (dir === 'next') {
        timeline.to(activeRef.value, { xPercent: -distance, opacity: 0, duration, ease }, 0);
        timeline.to(prevRef.value, { xPercent: -distance, opacity: 0, duration, ease }, 0);
        timeline.to(nextRef.value, { xPercent: -distance, opacity: 0, duration, ease }, 0);

        timeline.add(() => {
            baseNext();
            nextTick();
            gsap.set(prevRef.value, { xPercent: distance, opacity: 0.8 });
            gsap.set(activeRef.value, { xPercent: distance, opacity: 1 });
            gsap.set(nextRef.value, { xPercent: distance, opacity: 0.8 });

            gsap.to([prevRef.value, activeRef.value, nextRef.value], {
                xPercent: 0,
                opacity: (i, target) => target === activeRef.value ? 1 : 0.8,
                duration,
                ease,
                stagger: 0.1,
            });
        });

    } else {
        timeline.to(activeRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);
        timeline.to(prevRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);
        timeline.to(nextRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);

        timeline.add(() => {
            basePrev();
            nextTick();
            gsap.set(prevRef.value, { xPercent: -distance, opacity: 0.8 });
            gsap.set(activeRef.value, { xPercent: -distance, opacity: 1 });
            gsap.set(nextRef.value, { xPercent: -distance, opacity: 0.8 });

            gsap.to([prevRef.value, activeRef.value, nextRef.value], {
                xPercent: 0,
                opacity: (i, target) => target === activeRef.value ? 1 : 0.8,
                duration,
                ease,
                stagger: 0.1,
            });
        });
    }
}

// Carousel Navigation Functions
const baseNext = () => { activeIndex.value = (activeIndex.value + 1) % newsComps.value.length; };
const basePrev = () => { activeIndex.value = (activeIndex.value - 1 + newsComps.value.length) % newsComps.value.length; };
const baseGoTo = (index: number) => { activeIndex.value = index; };

export const prevSlide = async () => {
    direction.value = 'prev';
    basePrev();
    await nextTick();
    animateSlide('prev');
};
export const nextSlide = async () => {
    direction.value = 'next';
    baseNext();
    await nextTick();
    animateSlide('next');
};

// Function to go to a specific slide by index
export const goTo = async (index: number) => {
    direction.value = index > activeIndex.value ? 'next' : 'prev';
    baseGoTo(index);
    await nextTick();
    animateTransition(direction.value);

    const dir = index > activeIndex.value ? 'next' : 'prev';

    if (!prevRef.value || !activeRef.value || !nextRef.value) return;

    const timeline = gsap.timeline();
    const distance = dir === 'next' ? -100 : 100;
    const duration = 0.5;
    const ease = 'power2.inOut';

    timeline.to(activeRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);
    timeline.to(prevRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);
    timeline.to(nextRef.value, { xPercent: distance, opacity: 0, duration, ease }, 0);

    timeline.add(() => {
        baseGoTo(index);
        nextTick();

        const startPos = dir === 'next' ? 100 : -100;
        gsap.set(prevRef.value, { xPercent: startPos, opacity: 0.7 });
        gsap.set(activeRef.value, { xPercent: startPos, opacity: 1 });
        gsap.set(nextRef.value, { xPercent: startPos, opacity: 0.7 });

        gsap.to([prevRef.value, activeRef.value, nextRef.value], {
        xPercent: 0,
        opacity: (i, target) => target === activeRef.value ? 1 : 0.7,
        duration,
        ease,
        stagger: 0.1,
        });
    });
};
