
import { ref } from 'vue';

import gsap from 'gsap';

export const criticalThinkers = ref(null);
export const collaborators = ref(null);
export const innovators = ref(null);

export function handleScroll() {
    const scrollPosition = window.scrollY;
    const scrollSpeed = 0.15;

    // Animate 'Critical Thinkers' and 'Innovators' when scrolling up/down
    gsap.to(criticalThinkers.value, {
        x: -scrollPosition * scrollSpeed,
        // ease: 'power2.out',
        ease: 'sine.out'
    });

    gsap.to(innovators.value, {
        x: -scrollPosition * scrollSpeed,
        // ease: 'power2.out',
        ease: 'sine.out'
    });

    // Animate 'Collaborators' in the opposite direction
    gsap.to(collaborators.value, {
        x: scrollPosition * scrollSpeed,
        // ease: 'power2.out',
        ease: 'sine.out'
    });
};