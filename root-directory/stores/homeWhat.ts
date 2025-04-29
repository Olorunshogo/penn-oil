
import { ref, onMounted, onBeforeUnmount } from 'vue';

export const lowerCarbonH2 = ref(null);
export const isFixed = ref<boolean>(false);

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isFixed.value = true;
                } else {
                    if (entry.boundingClientRect.top > 0) {
                        isFixed.value = false;
                    }
                }
            });
        },
        { threshold: 0.1 }
    );

    if (lowerCarbonH2.value) {
        observer.observe(lowerCarbonH2.value)
    };

    onBeforeUnmount(() => {
        if (lowerCarbonH2.value) observer.unobserve(lowerCarbonH2.value);
    });

});