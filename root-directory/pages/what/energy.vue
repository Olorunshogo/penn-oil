
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'What Energy Page',
    });

    definePageMeta({
        layout: 'custom'
    });

</script>


<template>
    <div>
        <div class="w-full h-full">            
            <PageWhatEnergy />
        </div>
    </div>
</template>

