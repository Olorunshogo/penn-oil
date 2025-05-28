
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'index Page',
    });

    useSeoMeta({
        title: 'Pennpetro Energy PLC | Powering Progress in Global Energy',
        ogTitle: 'Pennpetro Energy PLC | Driving the Future of Energy',
        description: 'Pennpetro Energy PLC is a global energy company committed to innovation, sustainability, and reliable energy solutions. Discover our mission, services, and impact.',
        ogDescription: 'Explore Pennpetro Energy PLC’s vision for a sustainable and innovative energy future. Learn about our global operations, cutting-edge technologies, and career opportunities.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Pennpetro Energy PLC operations showcasing advanced energy technology and teamwork.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Pennpetro Energy PLC | Innovation. Sustainability. Energy.',
        twitterDescription: 'Join us on our mission to shape the future of energy. Discover how Pennpetro Energy PLC is leading in innovation, sustainability, and global impact.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Pennpetro Energy PLC, global energy company, oil and gas innovation, sustainable energy, clean energy solutions, energy technology, energy leadership, Penn Petro services',

        author: "Olorunshogo (Moses) BAMTEFA"
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