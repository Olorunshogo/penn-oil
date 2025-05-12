
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Who History Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Our History | Penn Petro Energy’s Journey',
        ogTitle: 'Penn Petro Energy | A Legacy of Energy Innovation',
        description: 'Explore the history of Penn Petro Energy — from our founding to our evolution as a global leader in sustainable and innovative energy solutions.',
        ogDescription: 'Trace Penn Petro Energy’s milestones and growth through the years. Learn how our heritage fuels our future in the global energy landscape.',
        ogImage: '/images/history-page-hero.jpg',
        ogImageAlt: 'Historical timeline and archival images of Penn Petro Energy’s early operations.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/who/history',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Our History | The Evolution of Penn Petro Energy',
        twitterDescription: 'Discover the story behind Penn Petro Energy. From humble beginnings to global leadership, our legacy continues to shape the energy future.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy history, company origins, energy company timeline, legacy of innovation, oil and gas company history, energy industry evolution, Penn Petro milestones',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageWhoHistory />
        </div>
    </div>
</template>

