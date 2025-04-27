
import { ref } from 'vue';

// Date
export const displayYear = ref<boolean>(false);
export const developmentYear = ref<number>(2025);
export const currentYear = ref<number>(new Date().getFullYear());

  if (developmentYear.value === currentYear.value) {
    displayYear.value = false;
  } else {
    displayYear.value = true;
  }

  // Modal
export const oneTrustModal = ref<boolean>(false);
// export function openOneTrustModal() {
//   openModal.value = true;
// }

// export function closeOneTrustModal() {
//   openModal.value = false;
// }


// Showing and hiding footer links
export const get = ref<boolean>(false);
export const rotateGet = ref<boolean>(false);
export function toggleGet() {
  get.value = !get.value;
  latest.value = false;
  future.value = false;
  popular.value = false;

  rotateGet.value = !rotateGet.value;
}

export const latest = ref<boolean>(false);
export const rotateLatest = ref<boolean>(false);
export function toggleLatest() {
  get.value = false;
  latest.value = !latest.value;
  future.value = false;
  popular.value = false;

  rotateLatest.value = !rotateLatest.value
}

export const future = ref<boolean>(false);
export const rotateFuture = ref<boolean>(false);
export function toggleFuture() {
  get.value = false;
  latest.value = false;
  future.value = !future.value;
  popular.value = false;

  rotateFuture.value = !rotateFuture.value;
}

export const popular = ref<boolean>(false);
export const rotatePopular = ref<boolean>(false);
export function togglePopular() {
  get.value = false;
  latest.value = false;
  future.value = false;
  popular.value = !popular.value;

  rotatePopular.value = !rotatePopular.value;
}

// Transition hooks for fine-tuning
export const beforeEnter = (el: HTMLElement) => {
  el.style.maxHeight = '0'
  el.style.opacity = '0'
}

export const enter = (el: Element, done: () => void) => {
  // Trigger reflow to ensure the transition happens
  const element = el as HTMLElement
  element.offsetHeight
  element.style.transition = 'transform 1.5s ease, max-height 1.5s ease, opacity 0.5s ease'
  element.style.maxHeight = '500px'
  element.style.opacity = '1'
  done()
}

export const leave = (el: Element, done: () => void) => {
  const element = el as HTMLElement
  element.style.transition = 'transform 1.5s ease, max-height 1.5s ease, opacity 1.5s ease'
  element.style.maxHeight = '0'
  element.style.opacity = '0'
  done()
}