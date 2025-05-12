
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'What Overview Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Penn Petro Energy Around the World | Global Energy Impact',
        ogTitle: 'Penn Petro Energy | Global Presence and Energy Impact',
        description: 'Explore Penn Petro Energy’s global operations and how we provide energy solutions across continents, shaping the future of energy in diverse markets worldwide.',
        ogDescription: 'Discover Penn Petro Energy’s international footprint. From North America to Asia and beyond, we are powering economies, driving innovation, and building a sustainable energy future.',
        ogImage: '/images/penn-world-page-hero.jpg',
        ogImageAlt: 'Map showing Penn Petro Energy’s global operations and energy projects around the world.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/what/penn',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy Around the World | Global Energy Leadership',
        twitterDescription: 'With a global presence, Penn Petro Energy is at the forefront of powering regions around the world with innovative and sustainable energy solutions.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy global operations, international energy company, energy projects worldwide, global energy solutions, Penn Petro presence, international oil and gas, sustainable global energy',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">            
            <PageWhatPenn />
        </div>
    </div>
</template>

