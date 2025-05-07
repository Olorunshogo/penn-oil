
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Who Culture Page',
    });

    definePageMeta({
        layout: 'custom'
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageWhoCulture />
        </div>
    </div>
</template>

