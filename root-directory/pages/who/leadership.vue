
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Penn Petro Energy Leadership',
        titleTemplate: '%s | Penn Petro Energy'
    });

    useSeoMeta({
        title: 'Leadership Team | Penn Petro Energy',
        ogTitle: 'Meet the Leaders of Penn Petro Energy',
        description: 'Get to know the executive leadership behind Penn Petro Energy. Our leaders drive innovation, sustainability, and growth across the global energy sector.',
        ogDescription: 'Discover the people guiding Penn Petro Energy. Our experienced leadership team is committed to shaping a sustainable and forward-thinking energy future.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Penn Petro Energy executive team in discussion and at energy sites.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/who/leadership',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy Leadership | Visionary Energy Experts',
        twitterDescription: 'Meet the visionary leaders driving Penn Petro Energy’s global strategy, innovation, and commitment to responsible energy solutions.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy leadership, executive team, energy industry leaders, company executives, energy innovation leadership, oil and gas leadership, Penn Petro executives',
    });

    import { whoLeadershipHeroImageBg } from '~/models/heroBgModels';  

</script>


<template>
    <div>        
        <!-- Section: Hero -->
        <div>
            <HeroSectionImageBg
                :imgSrc="whoLeadershipHeroImageBg.imgSrc"
                :imgAlt="whoLeadershipHeroImageBg.imgAlt"
                :category="whoLeadershipHeroImageBg.category"
                :title="whoLeadershipHeroImageBg.title"
                :titleBgImageSrc="whoLeadershipHeroImageBg.titleBgImageSrc"
                :displayLink="whoLeadershipHeroImageBg.displayLink"
                :paragraph="whoLeadershipHeroImageBg.paragraph"
                :link="whoLeadershipHeroImageBg.link"
                :linkName="whoLeadershipHeroImageBg.linkName"
            />
        </div>



        <!-- Section: Board of Directors -->

        <HomeWhoLeadership />

                   

    </div>
</template>

<style lang="css" scoped>

    .group-hover\:underline-text {
        position: relative;
        display: inline-block;
    }

    .group-hover\:underline-text::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 1px;
        background-color: white;
        transition: width 0.5s ease-in-out;
    }

    .group:hover .group-hover\:underline-text::after {
        width: 100%;
    }

    .arrow-icon {
    transition: transform 1s ease-in-out;
    }

    .group:hover .arrow-icon {
        transform: translateX(12px);
    }

    .group-hover\:arrow-move {
        animation: moveArrow 3s infinite alternate ease-in-out;
    }  

</style>

