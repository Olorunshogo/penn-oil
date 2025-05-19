import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const SLIDE_INTERVAL = 6000;

export function useHomeHeroSlider(slideCount: number) {
    
    const currentIndex = ref<number>(0);
    const isPlaying = ref<boolean>(true);
    let interval: NodeJS.Timeout

    function nextSlide() {
        currentIndex.value = (currentIndex.value + 1) % slideCount
    } 

    function goToSlide(index: number) {
        currentIndex.value = index;
        resetInterval()
    }

    function togglePlayPause() {
        isPlaying.value = !isPlaying.value
        if (isPlaying.value) {
            startInterval()
        } else {
            stopInterval()
        }
    }

    function startInterval() {
        stopInterval()
        interval = setInterval(nextSlide, SLIDE_INTERVAL)
    }

    function stopInterval() {
        if (interval) clearInterval(interval)
    }

    function resetInterval() {
        stopInterval()
        if (isPlaying) startInterval()
    }

    function animateSlide(el: HTMLElement, dir: 'in' | 'out') {
        if (dir === 'in') {
            gsap.fromTo(el, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0 })
        } else {
            gsap.to(el, { x: '-100%', opacity: 0, duration: 0 })
        }
    }

    onMounted(() => {
        startInterval()
    })

    onUnmounted(() => {
        stopInterval()
    })

    return {
        currentIndex,
        isPlaying,
        goToSlide,
        togglePlayPause,
        animateSlide,
    }
}
