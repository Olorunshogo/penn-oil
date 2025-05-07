
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Who Brands Page',
    });

    definePageMeta({
        layout: 'custom'
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageWhoBrands />
        </div>
    </div>
</template>

