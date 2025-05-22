
<script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    type: String,
    id: String,
    name: String,
    modelValue: String,
    disabled: Boolean,
    required: Boolean,
    displayError: Boolean,
    error: String,
    ariaDescribedby: String,
  });

  const emit = defineEmits(['update:modelValue']);

  function onInput(e: Event) {
    emit('update:modelValue', (e.target as HTMLInputElement).value);
  }

</script>

<template>
  <div>
  
    <div class="flex items-center">
      <!-- Label -->
      <label
        :for="id"
        class="flex *:flex items-center *:items-center w-40 text-sm font-medium text-(--dark-blue)"
        :aria-required="props.required ? 'true' : 'false'"
      >
        {{ label }}
        <span class="text-(--dark-red) font-bold">*</span>
      </label>

      <!-- Input Field -->
      <input
        :type="type"
        :id="id"
        :name="name"
        :disabled="disabled"
        :required="required"
        :displayError="displayError"
        :error="error"
        :aria-describedby="ariaDescribedby"
        :value="modelValue"
        @input="onInput"
        class="w-full p-2 text-sm text-(--dark-blue) shadow-sm border-1 border-(--border-gray) rounded-lg outline-none hover:shadow-lg hover:border-(--light-blue) hover:cursor-pointer focus:shadow-lg focus:border-(--light-blue) focus:cursor-text duration-300 ease-in-out transition-all"
      />
    </div>

  </div>
</template>

<style scoped>
/* Add any custom styles for the input here */
</style>