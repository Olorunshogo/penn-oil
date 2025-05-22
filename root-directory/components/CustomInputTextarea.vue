
<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';

  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    maxWordCount: {
      type: Number,
      default: 1000
    },
    placeholder: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    }
  });

  const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void;
  }>()

  const commentValue = ref<string>(props.modelValue);
  const currentWordCount = ref(0);

  function calculateWordCount(text: string) {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  function onInput(event: Event){
    const target = event.target as HTMLTextAreaElement;
    commentValue.value = target.value;
    currentWordCount.value = calculateWordCount(commentValue.value);
    emit('update:modelValue', commentValue.value);
  };

  watch(() => props.modelValue, (newValue) => {
    commentValue.value = newValue;
    currentWordCount.value = calculateWordCount(newValue); 
  });

  onMounted(() => {
    currentWordCount.value = calculateWordCount(commentValue.value);
  });
</script>



<template>
  <div class="flex flex-col space-y-2">
    <!-- Label -->
    <label
      for="topic"
      class="flex items-center w-40 text-sm font-medium text-(--dark-blue)"
    >
      <span>{{ label }}</span>
      <span class="text-(--dark-red) font-bold">*</span>
    </label>

    <!-- Textarea Input -->
    <textarea
      id="topic"
      v-model="commentValue"
      :maxLength="maxWordCount"
      @input="onInput"
      rows="4"
      class="w-full p-2 border-1 border-(--border-gray) rounded-lg outline-none hover:border-(--light-blue) hover:cursor-pointer focus:cursor-text duration-300 ease-in-out transition-all"
      :placeholder="placeholder"
      :aria-labelledby="'comments-label'"
    ></textarea>

    <!-- Word Count Display -->
    <p class="text-xs text-gray-500">
      {{ currentWordCount }} / {{ maxWordCount }} words
    </p>

    <!-- Word Count Exceed Warning -->
    <p 
        v-if="currentWordCount > maxWordCount" 
        class="text-sm text-(--light-red)"
    >
      You have exceeded the word limit!
    </p>
  </div>
</template>

<style lang="css" scoped>
/* Add any custom styles here */
</style>