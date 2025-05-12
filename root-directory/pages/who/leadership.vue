
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Who Leadership Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Leadership Team | Penn Petro Energy',
        ogTitle: 'Meet the Leaders of Penn Petro Energy',
        description: 'Get to know the executive leadership behind Penn Petro Energy. Our leaders drive innovation, sustainability, and growth across the global energy sector.',
        ogDescription: 'Discover the people guiding Penn Petro Energy. Our experienced leadership team is committed to shaping a sustainable and forward-thinking energy future.',
        ogImage: '/images/leadership-page-hero.jpg',
        ogImageAlt: 'Penn Petro Energy executive team in discussion and at energy sites.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/who/leadership',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy Leadership | Visionary Energy Experts',
        twitterDescription: 'Meet the visionary leaders driving Penn Petro Energy’s global strategy, innovation, and commitment to responsible energy solutions.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy leadership, executive team, energy industry leaders, company executives, energy innovation leadership, oil and gas leadership, Penn Petro executives',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageWhoLeadership />
        </div>
    </div>
</template>

