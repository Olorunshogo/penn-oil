
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
            <PageSustainabilityOverview />
        </div>
    </div>
</template>

