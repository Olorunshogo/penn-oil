
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Newsroom Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Penn Petro Energy Newsroom | Latest News & Media Releases',
        ogTitle: 'Stay Updated with Penn Petro Energy News',
        description: 'Read the latest news, press releases, and media updates from Penn Petro Energy. Stay informed about our projects, innovations, and sustainability efforts.',
        ogDescription: 'Explore news and media from Penn Petro Energy. Get insights into our latest developments, leadership announcements, and energy industry updates.',
        ogImage: '/images/newsroom-page-hero.jpg',
        ogImageAlt: 'Penn Petro Energy press event and energy site showcasing innovation.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/newsroom',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy Newsroom | Press Releases & Updates',
        twitterDescription: 'Catch up on the latest announcements from Penn Petro Energy. Discover how we’re shaping the future of energy through innovation and impact.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy news, energy industry updates, oil and gas news, sustainability news, press releases, Penn Petro media, corporate news, energy innovation announcements',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageNewsroom />
        </div>
    </div>
</template>

