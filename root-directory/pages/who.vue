
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'who Page',
    });

    definePageMeta({
        layout:'custom'
    })

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageWho />
        </div>
    </div>
</template>

