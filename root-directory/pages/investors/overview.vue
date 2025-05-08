
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Investors Overview Page',
    });

    definePageMeta({
        layout: 'custom'
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <h1 class="text-bold mb-12 text-center text-3xl text-(--dark-blue)">Investors Overview page</h1>
            <PageInvestorsOverview />
        </div>
    </div>
</template>

