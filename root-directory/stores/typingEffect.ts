

import { ref, onMounted } from 'vue';

export const props = defineProps<{
  originalTex: string;
}>();

export const j = ref(0);
export const revealedTypingInterval = 50;
export const revealedTex = ref('');

export function startColorReveal() {
    const interval = setInterval(() => {
      if (j.value < props.originalTex.length) {
        revealedTex.value += props.originalTex[j.value];
        j.value++;
      } else {
        clearInterval(interval);
      }
    }, revealedTypingInterval);
  }

onMounted(() => {
    startColorReveal();
  });
