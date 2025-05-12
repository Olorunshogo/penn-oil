
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Who Culture Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Our Culture | Life at Penn Petro Energy',
        ogTitle: 'Inside Penn Petro Energy | Culture & People',
        description: 'Discover the values, collaboration, and purpose that shape Penn Petro Energy’s culture. Learn how we foster innovation, inclusion, and growth every day.',
        ogDescription: 'Explore the culture at Penn Petro Energy — where diverse talent, shared values, and a commitment to impact drive our success in the global energy sector.',
        ogImage: '/images/culture-page-hero.jpg',
        ogImageAlt: 'Penn Petro Energy employees collaborating in diverse work settings.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/who/culture',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Our Culture | People-First at Penn Petro Energy',
        twitterDescription: 'At Penn Petro Energy, our culture is built on respect, innovation, and impact. See how our people make energy work for a better tomorrow.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy culture, company values, employee experience, energy careers, workplace diversity, innovation culture, inclusive energy company, Penn Petro people',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageWhoCulture />
        </div>
    </div>
</template>

