
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'What Overview Page',
    });

    definePageMeta({
        layout: 'custom'
    });

</script>


<template>
    <div>
        <div class="w-full h-full">            
            <PageWhatOverview />
            <h1 class="text-bold mb-12 text-center text-3xl text-(--dark-blue)">What Overview page</h1>
        </div>
    </div>
</template>

