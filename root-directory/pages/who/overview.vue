
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Who Overview Page',
    });

    definePageMeta({
        layout: 'custom'
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageWhoOverview />
        </div>
    </div>
</template>

