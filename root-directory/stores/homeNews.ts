
import { ref, onMounted, watch } from "vue";
import { newsComps } from "~/models/newsComps";
import gsap from 'gsap';

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectFade } from 'swiper/modules';

// // Import Swiper Vue.js components
// import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/vue';

// // Import Swiper Styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';

// const onSwiper = (swiper) => {
//     console.log(swiper);
// };

// const onSlideChange = () => {
//     console.log('slide change');
// };

// const swiper = useSwiper();
// const swiperSlide = useSwiperSlide();

export const carousel = ref<HTMLElement | null>(null);
export const activeIndex = ref(0);
let autoplayTimer: ReturnType<typeof setInterval> | null = null

// Core GSAP Layout update
export function updateCarousel() {
    const items = carousel.value?.children
    if (!items) return

    // Convert HTMLCollection to array
    const itemArray = [...items] as HTMLElement[]

    itemArray.forEach((item, i) => {
        const isActive = i === activeIndex.value
        const offset = i - activeIndex.value 

        gsap.to(item, {
            scale: isActive ? 1.1 : 0.85,
            opacity: isActive ? 1 : 0.5,
            xPercent: offset * 110,
            zIndex: isActive ? 10 : 1,
            duration: 0.5,
            ease: 'power3.out'
        });
    })
}

export function nextSlide() {
    activeIndex.value = (activeIndex.value + 1) % newsComps.value.length
};

export function prevSlide() {
    activeIndex.value = (activeIndex.value - 1 + newsComps.value.length) % newsComps.value.length
}
  
export function goTo(index: number) {
    activeIndex.value = index
};

// Autoplay
// export function startAutoplay() {
//     stopAutoplay()
//     autoplayTimer = setInterval(() => {
//         nextSlide()
//     }, 5000)
// }

// export function stopAutoplay() {
//     if (autoplayTimer) {
//         clearInterval(autoplayTimer)
//         autoplayTimer = null
//     }
// }

// Touch/Swipe Support
let startX = 0
let endX = 0

export function handleTouchStart(e: TouchEvent) {
    startX = e.touches[0].clientX
} 

export function handleTouchMove(e: TouchEvent) {
    endX = e.touches[0].clientX
} 

export function handleTouchEnd() {
    const diff = endX - startX
    if (Math.abs(diff) > 50) {
        if (diff > 0) prevSlide()
        else nextSlide()
    }
} 

onMounted(() => {
    updateCarousel()
    // startAutoplay()

    if (carousel.value) {
        carousel.value.addEventListener('touchstart', handleTouchStart)
        carousel.value.addEventListener('touchmove', handleTouchMove)
        carousel.value.addEventListener('touchend', handleTouchEnd)
    }
})

watch(activeIndex, () => {
    updateCarousel()
    // startAutoplay()
})

