
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

        <NuxtLink
            to="/newsroom"
            class="group relative flex duration-500 ease-in transition-all"
        >                            
            <span class="group-hover:underline-text">Newsroom</span>
        </NuxtLink>
    </div>
</template>

