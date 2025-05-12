
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Contact Us Page',
    });

    useSeoMeta({
        title: 'Contact Penn Petro Energy | Get in Touch Today',
        ogTitle: 'Reach Out to Penn Petro Energy',
        description: 'Have questions or inquiries? Contact Penn Petro Energy to learn more about our services, partnerships, or career opportunities.',
        ogDescription: 'Get in touch with Penn Petro Energy. Whether you’re a partner, job seeker, or investor, we’re here to connect with you.',
        ogImage: '/images/contact-page-hero.jpg',
        ogImageAlt: 'Penn Petro Energy headquarters and team members in a meeting.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/contact',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Contact Penn Petro Energy | We’re Here to Help',
        twitterDescription: 'Reach out to our team at Penn Petro Energy for inquiries about careers, investments, media, and more. Let’s connect.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'contact Penn Petro Energy, energy company contact, oil and gas inquiries, sustainability partnerships, investor contact, energy sector communication, Penn Petro support',
    });

</script>


<template>
    <div>
        <div class="w-full h-full">
            <PageContact />
        </div>
    </div>
</template>

