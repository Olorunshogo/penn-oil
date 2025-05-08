
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Sustainability Overview Page',
    });

    definePageMeta({
        layout: 'custom'
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <h1 class="text-bold mb-12 text-center text-3xl text-(--dark-blue)">Sustainability Overview page</h1>
            <PageSustainabilityOverview />
        </div>
    </div>
</template>

