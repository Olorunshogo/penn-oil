
import { ref, onMounted, onBeforeMount } from 'vue';

export const showButton = ref<boolean>(false);

// Scroll to the Top
export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Show and hide Button based on it's viewHeight
export function handleScroll() {
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    showButton.value = scrollPercentage > 0.4;
};

// Set up scroll event listener
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// Clean up the scroll event listener when the component is unmounted
onBeforeMount(() => {
    window.removeEventListener('scroll', handleScroll);
});