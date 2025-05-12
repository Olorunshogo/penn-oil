
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'index Page',
    });

    useSeoMeta({
        title: 'Penn Petro Energy | Powering Progress in Global Energy',
        ogTitle: 'Penn Petro Energy | Driving the Future of Energy',
        description: 'Penn Petro Energy is a global energy company committed to innovation, sustainability, and reliable energy solutions. Discover our mission, services, and impact.',
        ogDescription: 'Explore Penn Petro Energy’s vision for a sustainable and innovative energy future. Learn about our global operations, cutting-edge technologies, and career opportunities.',
        ogImage: '/images/homepage-hero.jpg',
        ogImageAlt: 'Penn Petro Energy operations showcasing advanced energy technology and teamwork.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy | Innovation. Sustainability. Energy.',
        twitterDescription: 'Join us on our mission to shape the future of energy. Discover how Penn Petro Energy is leading in innovation, sustainability, and global impact.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy, global energy company, oil and gas innovation, sustainable energy, clean energy solutions, energy technology, energy leadership, Penn Petro services',
    });



</script>


<template>
    <div>
        <div class="w-full h-full">
            <HomePage />
        </div>
    </div>
</template>


<style lang="css" scoped>

</style>