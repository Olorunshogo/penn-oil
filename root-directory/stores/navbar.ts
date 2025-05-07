
import { ref } from 'vue';

export const isMenuOpen = ref<boolean>(false);
export const isSearchOpen = ref<boolean>(false);

export function closeAllMenu() {
    isMenuOpen.value = false;

    isWhoOpen.value = false;
    isWhatOpen.value = false;
    isSustainabilityOpen.value = false;
    isInvestorsOpen.value = false;
}

export function backMobile() {
    isMenuOpen.value = true;
    isWhoOpen.value = false;
    isWhatOpen.value = false;
    isSustainabilityOpen.value = false;
    isInvestorsOpen.value = false;
}

export function closeAside() {
    isMenuOpen.value = true;
    isWhoOpen.value = false;
    isWhatOpen.value = false;
    isSustainabilityOpen.value = false;
    isInvestorsOpen.value = false;
}

// Who we are
export const isWhoOpen = ref<boolean>(false);
export const isWhoHovered = ref<boolean>(false);
export function openMobileWho() {
    isMenuOpen.value = false;
    isWhoOpen.value = true;
    isWhatOpen.value = false;
    isSustainabilityOpen.value = false;
    isInvestorsOpen.value = false;
}
export function openDesktopWho() {
    isWhoHovered.value = true;
};
export function closeDesktopWho() {
    isWhoHovered.value = false;
};

// What we are
export const isWhatOpen = ref<boolean>(false);
export const isWhatHovered = ref<boolean>(false);
export function openMobileWhat() {
    isMenuOpen.value = false;
    isWhoOpen.value = false;
    isWhatOpen.value = true;
    isSustainabilityOpen.value = false;
    isInvestorsOpen.value = false;
}
export function openDesktopWhat() {
    isWhatHovered.value = true;
};
export function closeDesktopWhat() {
    isWhatHovered.value = false;
};

// Sustainability
export const isSustainabilityOpen = ref<boolean>(false);
export const isSustainabilityHovered = ref<boolean>(false);
export function openMobileSustainability() {
    isMenuOpen.value = false;
    isWhoOpen.value = false;
    isWhatOpen.value = false;
    isSustainabilityOpen.value = true;
    isInvestorsOpen.value = false;
}
export function openDesktopSustainability() {
    isSustainabilityHovered.value = true;
};
export function closeDesktopSustainability() {
    isSustainabilityHovered.value = false;
};

// Investors
export const isInvestorsOpen = ref<boolean>(false);
export const isInvestorsHovered = ref<boolean>(false);
export function openMobileInvestors() {
    isMenuOpen.value = false;
    isWhoOpen.value = false;
    isWhatOpen.value = false;
    isSustainabilityOpen.value = false;
    isInvestorsOpen.value = true;
}
export function openDesktopInvestors() {
    isInvestorsHovered.value = true;
};
export function closeDesktopInvestors() {
    isInvestorsHovered.value = false;
};