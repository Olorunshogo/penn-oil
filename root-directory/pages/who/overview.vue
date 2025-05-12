
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Who Overview Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Who We Are | Penn Petro Energy Company Overview',
        ogTitle: 'Penn Petro Energy | Our Mission, Values & Vision',
        description: 'Learn about Penn Petro Energy’s mission, leadership, and commitment to powering a sustainable future. Discover what drives our global energy solutions.',
        ogDescription: 'Explore Penn Petro Energy’s story, values, and vision. See how we’re leading the way in responsible energy innovation and global impact.',
        ogImage: '/images/who-we-are-hero.jpg',
        ogImageAlt: 'Penn Petro Energy team collaborating at a global energy site.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/who/overview',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Who We Are | Discover Penn Petro Energy',
        twitterDescription: 'Get to know Penn Petro Energy – our purpose, leadership, and dedication to innovation and sustainability in the global energy sector.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'about Penn Petro Energy, energy company overview, Penn Petro mission, energy leadership, global energy company, sustainability values, responsible energy innovation',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageWhoOverview />
        </div>
    </div>
</template>

