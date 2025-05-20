
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

    
</script>


<template>
    <div class="w-full h-full bg-white">

        <!-- Section: Hero -->
        <section>   
            <div class="-mt-32 relative w-full h-full bg-(--dark-blue) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

                <div class="py-8 w-full h-fit">
                    
                    <div class="flex flex-col items-center justify-center gap-20 w-full h-full max-w-7xl mx-auto">

                        <div class="flex flex-col items-center justify-center text-center gap-3 w-full max-w-7xl mx-auto">                                

                            <h1 class="text-3xl lg:text-5xl text-(--dark-blue) pb-4 text-center font-bold">
                                ESG
                            </h1>

                            <p class="text-(--black) text-base lg:text-lg text-center">
                                Explore our ESG topics using the index below. 
                                <NuxtLink
                                    to="/pdfs/Climate_change_resilience_report.pdf" 
                                    target="_blank"
                                    class="group flex *:flex items-center *:items-center justify-between w-full h-14 p-3 duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-xs font-extrabold text-(--medium-blue) group-hover:underline-text">
                                        2023 Climate Change Resilience Report
                                    </span>
                                    <span class="text-(--medium-blue) hover:text-(--light-blue)">
                                        <Icon name="mdi:arrow-right" />
                                    </span>
                                </NuxtLink>
                            </p>
                            
                        </div>

                        <p class="text-(--black) text-base lg:text-lg">
                            The Board of Directors of Penn Petro Energy directs the affairs of the Corporation and is committed to sound principles of corporate governance. 
                            Documents included in this section provide ways for investors to understand the foundation of our corporate governance.
                        </p>

                        <NuxtLink
                            to="/pdfs/Certificate_of_incorporation.pdf" 
                            title="Certificate of incorporation"
                            target="_blank"
                            class="group flex items-center *:flex gap-2 font-bold duration-300 ease-in-out transition-all"
                        >
                            <span class="text-(--medium-blue) text-lg group-hover:underline-text">
                                Certificate of incorporation
                            </span>
                        </NuxtLink>

                        <NuxtLink
                            to="/pdfs/Penn_PLC_by_laws.pdf" 
                            title="By-laws"
                            target="_blank"
                            class="group flex items-center *:flex gap-2 font-bold duration-300 ease-in-out transition-all"
                        >
                            <span class="text-(--medium-blue) text-lg group-hover:underline-text">
                                By-laws
                            </span>
                        </NuxtLink>

                        <NuxtLink
                            to="/pdfs/Penn_governance_guidelines.pdf" 
                            title="Corporate governance guidelines"
                            target="_blank"
                            class="group flex items-center *:flex gap-2 font-bold duration-300 ease-in-out transition-all"
                        >
                            <span class="text-(--medium-blue) text-lg group-hover:underline-text">
                                Corporate governance guidelines
                            </span>
                        </NuxtLink>

                        <NuxtLink
                            to="/pdfs/Penn_proxy_statement_2025.pdf" 
                            title="Proxy statement"
                            target="_blank"
                            class="group flex items-center *:flex gap-2 font-bold duration-300 ease-in-out transition-all"
                        >
                            <span class="text-(--medium-blue) text-lg group-hover:underline-text">
                                Proxy statement
                            </span>
                        </NuxtLink>
                    </div>
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

