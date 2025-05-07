
// import { ref, onMounted, onUnmounted } from 'vue';
// import { videoSlider } from '~/models/heroVideoslider';
import { videoSlider } from '../models/heroVideoslider';
import gsap from 'gsap';

export const currentIndex = ref(0);  
export const isPlaying = ref(true);  
export const intervalDuration = 6000;  
export let autoplayInterval: number | null = null; 

    // Switch to the next slide
export function goToNextSlide() {
    
    const currentSlide = document.querySelector(`.slide-${currentIndex.value}`);
    const nextSlide = document.querySelector(`.slide-${(currentIndex.value + 1) % videoSlider.length}`);

    if (currentSlide && nextSlide) {
        gsap.to(currentSlide, {
            x: '-100%', // Slide out left
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            // onComplete: () => {
            //     currentIndex.value = (currentIndex.value + 1) % videoSlider.length;  // Update current index
            //     gsap.set(currentSlide, { x: '100%' }); // Reset position for the next cycle
            // },
        });

        gsap.fromTo(
            nextSlide,
            { x: '100%', opacity: 0 }, // Start position for next slide
            { x: '0%', opacity: 1, duration: 1, ease: 'power2.inOut' }
        );
    }

    currentIndex.value = (currentIndex.value + 1) % videoSlider.length;
};

// Toggle autoplay (play/pause)
export function togglePlayPause() {
    if (isPlaying.value) {
        clearInterval(autoplayInterval!);  // Stop autoplay
    } else {
        startAutoplay();  // Start autoplay
    }
    isPlaying.value = !isPlaying.value;
};

// Start autoplay
export const startAutoplay = () => {
    autoplayInterval = setInterval(goToNextSlide, intervalDuration);
};


// export const currentIndex = ref(0);
// export const isPlaying = ref(true)
//     const progress = ref(0)
// export const intervalDuration = 6 // seconds
// let autoplayInterval: ReturnType<typeof setInterval> | null = null;

// // Switch to the next slide
// export function goToNextSlide() {
//     currentIndex.value = (currentIndex.value + 1) % videoSlider.length;
// }

// // Start autoplay
// export function startAutoplay() {
//     autoplayInterval = setInterval(goToNextSlide, intervalDuration);
// };

// // Toggle autoplay (play/pause)
// export function togglePlayPause() {
//     if (isPlaying.value) {
//         clearInterval(autoplayInterval!); // Stop autoplay
//     } else {
//         startAutoplay(); // Start autoplay
//     };
//     isPlaying.value = !isPlaying.value;
// }

// // Go to a specific slide
// export function goToSlide(index: number) {
//     currentIndex.value = index;
//     if (isPlaying.value) {
//         clearInterval(autoplayInterval!);
//         startAutoplay();
//     }
// }

// // Auto-play when component is mounted
// onMounted(() => {
//     if(isPlaying.value) {
//         startAutoplay();
//     }
// });

// // Clean up the interval when the component is unMounted
// // onUnmounted(() => {
// //     if (autoplayInterval) {
// //         clearInterval(autoplayInterval);
// //     }
// // };

// onUnmounted(() => {
//     if (autoplayInterval) {
//         clearInterval(autoplayInterval);
//     }
// })