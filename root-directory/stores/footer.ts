
  export const displayYear = ref<boolean>(false);
  export const developmentYear = ref<number>(2025);
  export const currentYear = ref<number>(new Date().getFullYear());

  if (developmentYear.value === currentYear.value) {
    displayYear.value = false;
  } else {
    displayYear.value = true;
  }

export const openModal = ref<boolean>(false);

export function openOneTrustModal() {
    openModal.value = true;
}

export function closeOneTrustModal() {
    openModal.value = false;
}