
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Who Brands Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Our Brands | Penn Petro Energy Portfolio',
        ogTitle: 'Penn Petro Energy Brands | Global Energy Solutions',
        description: 'Explore the diverse portfolio of brands under Penn Petro Energy. From traditional energy to renewables, our brands lead with innovation and impact.',
        ogDescription: 'Learn about the Penn Petro Energy family of brands, each delivering specialized energy solutions across oil, gas, clean tech, and sustainable innovation.',
        ogImage: '/images/brands-page-hero.jpg',
        ogImageAlt: 'Logos and imagery representing Penn Petro Energy’s portfolio of brands.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/who/brands',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Our Brands | Penn Petro Energy’s Global Reach',
        twitterDescription: 'Discover the trusted brands that power Penn Petro Energy’s impact across the globe — advancing energy innovation and sustainability.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy brands, energy portfolio, energy subsidiaries, oil and gas brands, clean energy brands, Penn Petro divisions, global energy companies, energy innovation network',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageWhoBrands />
        </div>
    </div>
</template>

