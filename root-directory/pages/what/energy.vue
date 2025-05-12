
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'What Energy Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Energy Solutions | What We Do at Penn Petro Energy',
        ogTitle: 'Penn Petro Energy | Powering the World Responsibly',
        description: 'Discover how Penn Petro Energy delivers reliable and responsible energy solutions through oil, gas, and advanced technologies worldwide.',
        ogDescription: 'Explore Penn Petro Energy’s core energy operations — driving progress through innovation, efficiency, and a commitment to global energy needs.',
        ogImage: '/images/energy-page-hero.jpg',
        ogImageAlt: 'Penn Petro Energy infrastructure including oil rigs, pipelines, and control rooms.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/what/energy',

        twitterCard: 'summary_large_image',
        twitterTitle: 'What We Do | Energy at Penn Petro Energy',
        twitterDescription: 'Penn Petro Energy provides integrated energy solutions with a focus on reliability, sustainability, and innovation across global markets.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy operations, oil and gas solutions, global energy production, energy infrastructure, upstream and downstream energy, energy innovation, responsible energy company',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">            
            <PageWhatEnergy />
        </div>
    </div>
</template>

