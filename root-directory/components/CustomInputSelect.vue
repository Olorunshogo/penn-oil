<script setup lang="ts">
    const props = defineProps({
        label: {
            type: String,
            required: true,
        },
        id: String,
        name: String,
        inputValue: [String, Number],
        options: {
            type: Array as () => Array<{ label: string; value: string | number }>,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        displayError: {
            type: Boolean,
            default: false,
        },
        error: {
            type: String,
            default: '',
        },
        ariaDescribedby: String,
    });

    const emit = defineEmits(['update:inputValue']);
</script>

<template>
    <div class="flex flex-col space-y-2">
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

            <!-- Select Dropdown -->
            <select
                :id="id"
                :name="name"
                :disabled="disabled"
                :required="required"
                :aria-describedby="ariaDescribedby"
                class="w-full p-2 border-1 border-(--border-gray) rounded-lg outline-none hover:border-(--light-blue) hover:cursor-pointer focus:cursor-text duration-300 ease-in-out transition-all"
                :value="inputValue"
                @change="(e) => emit('update:inputValue', (e.target as HTMLSelectElement).value)"
            >
                <option disabled value="">Select an option</option>
                <option
                    v-for="option in options"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.label }}
                </option>
            </select>
        </div>

    <!-- Error Message -->
    <p
      v-if="displayError"
      id="input-error"
      class="text-sm text-(--light-red)"
    >
      {{ props.error }}
    </p>
  </div>
</template>

<style scoped>
/* Add any custom styles for the input here */
</style>