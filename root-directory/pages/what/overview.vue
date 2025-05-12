
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'What Overview Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Overview of Penn Petro Energy’s Services | What We Do',
        ogTitle: 'Penn Petro Energy | Comprehensive Energy Solutions Worldwide',
        description: 'Learn about Penn Petro Energy’s full range of services, including energy production, innovation, sustainability, and technology solutions across the global energy landscape.',
        ogDescription: 'Explore the wide array of services Penn Petro Energy provides to meet global energy demands. From traditional oil and gas to clean energy technologies, we power progress.',
        ogImage: '/images/overview-page-hero.jpg',
        ogImageAlt: 'Penn Petro Energy infrastructure, including energy plants, technology, and sustainable energy solutions.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/what/overview',

        twitterCard: 'summary_large_image',
        twitterTitle: 'What We Do | Penn Petro Energy Services Overview',
        twitterDescription: 'At Penn Petro Energy, we provide comprehensive energy solutions designed to meet the world’s growing demand for sustainable and reliable energy.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy services, energy solutions, global energy company, oil and gas services, clean energy technologies, energy production, energy innovation, sustainability in energy',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">            
            <PageWhatOverview />
        </div>
    </div>
</template>

