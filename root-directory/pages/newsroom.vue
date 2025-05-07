
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Newsroom Page',
    });

    definePageMeta({
        layout: 'custom'
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageNewsroom />
        </div>
    </div>
</template>

