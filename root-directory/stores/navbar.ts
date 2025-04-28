
import { ref } from 'vue';

export const isMenuOpen = ref<boolean>(false);
export const isSearchOpen = ref<boolean>(false);

// Who we are
export const isWhoOpen = ref<boolean>(false);
export const isWhoHovered = ref<boolean>(false);
export function openDesktopWho() {
    isWhoHovered.value = true;
};
export function closeDesktopWho() {
    isWhoHovered.value = false;
};

// What we are
export const isWhatOpen = ref<boolean>(false);
export const isWhatHovered = ref<boolean>(false);
export function openDesktopWhat() {
    isWhatHovered.value = true;
};
export function closeDesktopWhat() {
    isWhatHovered.value = false;
};

// Sustainability
export const isSustainabilityOpen = ref<boolean>(false);
export const isSustainabilityHovered = ref<boolean>(false);
export function openDesktopSustainability() {
    isSustainabilityHovered.value = true;
};
export function closeDesktopSustainability() {
    isSustainabilityHovered.value = false;
};

// Investors
export const isInvestorsOpen = ref<boolean>(false);
export const isInvestorsHovered = ref<boolean>(false);
export function openDesktopInvestors() {
    isInvestorsHovered.value = true;
};
export function closeDesktopInvestors() {
    isInvestorsHovered.value = false;
};

// Newsroom
export const isNewsroomOpen = ref<boolean>(false);

// Careers
export const isCareersOpen = ref<boolean>(false);