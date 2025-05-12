
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Careers Page',
    });

    useSeoMeta({
        title: 'Careers at Penn Petro Energy | Build a Future in Energy',
        ogTitle: 'Join Penn Petro Energy - Careers that Power the Future',
        description: 'Explore career opportunities at Penn Petro Energy and help shape the future of global energy. We offer roles in engineering, sustainability, technology, and more.',
        ogDescription: 'Penn Petro Energy is hiring! Join a dynamic team driving innovation and sustainability in the energy sector. Discover careers with purpose and global impact.',
        ogImage: '/images/careers-page-hero.jpg',
        ogImageAlt: 'Penn Petro Energy employees working at an energy site and in office environments.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/careers',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Careers at Penn Petro Energy | Make an Impact in Energy',
        twitterDescription: 'We’re building the future of energy. Find your role in our team at Penn Petro Energy and grow your career in a company committed to innovation and sustainability.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy careers, energy jobs, oil and gas careers, sustainability jobs, engineering jobs, energy innovation, clean energy careers, global energy company, Penn Petro hiring',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageCareers />
        </div>
    </div>
</template>

