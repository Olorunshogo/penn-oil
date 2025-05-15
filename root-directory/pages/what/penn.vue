
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Penn Petro Energy Worldwide',
        titleTemplate: '%s | Penn Petro Energy'
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

    import { 
        pennCountries 
    } from '~/models/pennCountries';

</script>


<template>
    <div class="flex flex-col w-full h-full">   
        <!-- Section: Hero -->
        <section class="grid gap-16 px-(--section-px) lg:px-(--section-py-lx) py-(--section-py) lg:py-(--section-py-lg) -mt-[11rem] w-full h-full bg-(--dark-blue)">
            
            <div class="flex flex-col items-center justify-center gap-12 text-(--white) w-full max-w-7xl mx-auto h-full pt-60 pb-8">
                <h1 class="text-center text-5xl lg:text-9xl font-extrabold">
                    Penn Petro Energy Worldwide
                </h1>
                <p class="font-medium text-xl text-center">
                    Penn Petro Energy conducts business all around the globe. The links below will provide you with detailed information for the countries where Penn Petro Energy’s work is most extensive.
                </p>
            </div>
            
        </section>

        <!-- Countries -->
        <section>
            <div class="bg-(--light-gray)/30 px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">
                <div class="flex flex-col max-w-7xl mx-auto">
                    <CustomPennWorldwide
                        v-for="item in pennCountries"
                        :key="item.id"
                        :id="item.id"
                        :flagImgSrc="item.flagImgSrc"
                        :flagImgAlt="item.flagImgAlt"
                        :flagName="item.flagName"
                        :ctaLink="item.ctaLink"
                        :ctaName="item.ctaName"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

