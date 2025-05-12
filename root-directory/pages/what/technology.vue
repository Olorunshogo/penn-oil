
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'What Overview Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Technology and Innovation | Penn Petro Energy',
        ogTitle: 'Penn Petro Energy | Leading Energy Innovation and Technology',
        description: 'Explore how Penn Petro Energy integrates cutting-edge technologies and innovative solutions to drive efficiency, sustainability, and advancement in the energy sector.',
        ogDescription: 'At Penn Petro Energy, we harness advanced technologies to transform the energy industry. Learn about our innovations in oil, gas, and clean energy solutions.',
        ogImage: '/images/technology-page-hero.jpg',
        ogImageAlt: 'Innovative energy technologies and engineers working on advanced systems at Penn Petro Energy.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/what/technology',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Technology and Innovation | Shaping the Future of Energy',
        twitterDescription: 'Discover how Penn Petro Energy leads the energy sector with groundbreaking technologies and sustainable innovations that are transforming the future of energy.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy technology, energy innovation, clean energy technology, sustainable energy solutions, advanced energy systems, oil and gas technology, energy sector innovation, energy tech advancements',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">            
            <PageWhatTechnology />
        </div>
    </div>
</template>

