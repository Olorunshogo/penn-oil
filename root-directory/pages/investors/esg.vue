
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Environmental, Social and Governance Index',
        titleTemplate: '%s | Penn Petro Energy'
    });

    definePageMeta({
        layout: 'custom'
    })

    useSeoMeta({
        title: 'ESG A–Z Index | Penn Petro Energy - Environmental, Social & Governance Insights',
        ogTitle: 'Penn Petro Energy ESG A–Z Index | Sustainability & Responsible Practices',
        description: 'Browse the ESG A–Z Index to explore Penn Petro Energy’s approach to environmental, social, and governance practices. Gain insight into our sustainability efforts and ethical leadership.',
        ogDescription: 'Penn Petro Energy’s ESG A–Z Index offers a comprehensive view of our environmental, social, and governance commitments, supporting transparency and stakeholder engagement.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Sustainable operations at Penn Petro Energy reflecting ESG responsibility.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/investors/esg',
        twitterCard: 'summary_large_image',
        twitterTitle: 'ESG A–Z Index | Penn Petro Energy’s Commitment to Sustainability',
        twitterDescription: 'Explore Penn Petro Energy’s ESG practices through our A–Z Index – a transparent guide to our environmental, social, and governance efforts.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        keywords: 'Penn Petro Energy ESG, sustainability index, environmental leadership, social responsibility, corporate governance, ESG transparency, sustainable energy practices, stakeholder trust, ESG reporting, ESG A-Z glossary'
    });

    import {
        esgCategories,
    } from '~/models/investorsEsgModels';

    const categories = esgCategories;

    function toggleCategory(id: number) {
        const category = esgCategories.value.find(c => c.id === id);

        if (category) {
            category.displayDetails = !category.displayDetails;
        }
    }

    
</script>


<template>
    <div class="w-full h-full bg-white">

        <!-- Section: Hero -->
        <section>   
            <div class="relative w-full h-full bg-(--dark-blue) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

                    
                <div class="flex flex-col items-center justify-center py-16 w-full h-full max-w-7xl mx-auto">

                    <div class="flex flex-col items-center justify-center text-(--white) text-center gap-8 w-full max-w-7xl mx-auto">                                

                        <h1 class="text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold">
                            Environment, social, and governance index
                        </h1>

                        <p class="flex items-center text-lg text-center font-medium">
                            Explore our ESG topics using the index below. &ThinSpace; 

                            <NuxtLink
                                to="/pdfs/Penn_sustainability_highlights_2024.pdf" 
                                target="_blank"
                                class="group flex *:flex items-center *:items-center justify-between duration-300 ease-in-out transition-all"
                            >
                                <span class="group-hover:underline-text">
                                        About this content
                                </span>

                            </NuxtLink>
                        </p>
                        
                    </div>
                </div>

            </div>
        </section>

        <section>   
            <div class="relative w-full h-full bg-(--light-gray)/60 lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

                    
                <div class="flex flex-col items-center justify-center py-4 w-full h-full max-w-7xl mx-auto">
                    
                    <EsgCategories
                        v-for="item in esgCategories" :key="item.id"
                        :heading="item.heading"
                        :displayDetails="item.displayDetails"

                        :navLink1="item.navLink1"
                        :linkName1="item.linkName1"
                        :navLink2="item.navLink2"
                        :linkName2="item.linkName2"
                        :navLink3="item.navLink3"
                        :linkName3="item.linkName3"
                        :navLink4="item.navLink4"
                        :linkName4="item.linkName4"
                        :navLink5="item.navLink5"
                        :linkName5="item.linkName5"

                        :introduction="item.introduction"
                        :updatedDate="item.updatedDate"
                        :introP1="item.introP1"
                        :introP2="item.introP2"
                        :introLink="item.introLink"
                        :introLinkName="item.introLinkName"

                        class="w-full h-full"
                        @toggle-details="toggleCategory(item.id)"
                    />

                    
                </div>

            </div>
        </section>

        


        
    </div>
</template>

<style lang="css" scoped>

    /* Underline Text */
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
        background-color: var(--medium-blue);
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

    /* Slide Down */
    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
        overflow: hidden;
    }

    .slide-down-enter-from,
    .slide-down-leave-to {
        max-height: 0;
        opacity: 0;
    }

    .slide-down-enter-to,
    .slide-down-leave-from {
        max-height: 10rem;
        opacity: 1;
    }

</style>

