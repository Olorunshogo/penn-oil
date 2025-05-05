
import { ref, onMounted, onUnmounted } from 'vue';
import { videoSlider } from '~/models/heroVideoslider';


export const currentIndex = ref(0);
export const isPlaying = ref(true)
    const progress = ref(0)
export const intervalDuration = 6 // seconds
let autoplayInterval: ReturnType<typeof setInterval> | null = null;

// Switch to the next slide
export function goToNextSlide() {
    currentIndex.value = (currentIndex.value + 1) % videoSlider.length;
}

// Start autoplay
export function startAutoplay() {
    autoplayInterval = setInterval(goToNextSlide, intervalDuration);
};

// Toggle autoplay (play/pause)
export function togglePlayPause() {
    if (isPlaying.value) {
        clearInterval(autoplayInterval!); // Stop autoplay
    } else {
        startAutoplay(); // Start autoplay
    };
    isPlaying.value = !isPlaying.value;
}

// Go to a specific slide
export function goToSlide(index: number) {
    currentIndex.value = index;
    if (isPlaying.value) {
        clearInterval(autoplayInterval!);
        startAutoplay();
    }
}

// Auto-play when component is mounted
onMounted(() => {
    if(isPlaying.value) {
        startAutoplay();
    }
});

// Clean up the interval when the component is unMounted
// onUnmounted(() => {
//     if (autoplayInterval) {
//         clearInterval(autoplayInterval);
//     }
// };

onUnmounted(() => {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
    }
})