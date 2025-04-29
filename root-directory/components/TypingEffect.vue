
<script lang="ts" setup>
    
    import { ref } from 'vue';

    const props = defineProps({

        originalText: {
            type: String,
            default: 'default original text',
            required: true,
        },
        newText: {
            type: String,
            default: 'default typed text',
            required: true,
        }

    });

    const typedText = ref<string>('');
    const i = ref<number>(0);
    const interval: number = 100;
    const typingStyle = ref<string>('');

    // const elementRef = ref<HTMLElement | null>(null);
    // let observer: IntersectionObserver | null = null;
    
    function startTyping() {
        const typingInterval = setInterval(() => {
            if (i.value < props.newText.length) {
                typedText.value += props.newText[i.value];
                typingStyle.value = `position: absolute; top: 0; left: 0; width: 100%; z-index: 1;`;
                i.value++;
            } else {
                clearInterval(typingInterval);
            }
        }, interval);
    };

    onMounted(() => {
        // observer = new IntersectionObserver(
        //     (entries) => {
        //         entries.forEach((entry) => {
        //             if (entry.isIntersecting && entry.intersectionRatio === 1) {
                    startTyping();
        //             observer?.disconnect();
        //             }
        //         });
        //     },
        //     {
        //         root: null,
        //         threshold: 1.0,
        //     }
        // );

        // if (elementRef.value) {
        //     observer.observe(elementRef.value);
        // }
    });

    // onBeforeUnmount(() => {
    //     observer?.disconnect();
    // });

</script>

<template>
    <div class="relative *:relative flex flex-col items-center justify-center *:justify-center *:text-4xl *:lg:text-6xl *:font-normal *:text-wrap *:ease-in-out *:duration-300 *:transition-all whitespace-nowrap overflow-hidden w-full">
        <p class="text-(--light-blue)/40 z-1">{{ originalText }}</p>

        <p class="text-(--white) z-2" :style="typingStyle">{{ typedText }}</p>
    </div>
</template>

<style lang="css" scoped>


</style>