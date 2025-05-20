
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Reports and fillings',
        titleTemplate: '%s | Penn Petro Energy'
    });

    useSeoMeta({
        title: 'Investor Reports | Penn Petro Energy - Financial & ESG Disclosures',
        ogTitle: 'Penn Petro Energy Investor Reports | Financial Performance & ESG Highlights',
        description: 'Access Penn Petro Energy’s latest investor reports, including financial statements, ESG disclosures, and performance summaries to stay informed and aligned with our growth.',
        ogDescription: 'Stay up to date with Penn Petro Energy’s investor reports, featuring detailed financial data, ESG updates, and corporate performance insights.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Investor report documents and charts from Penn Petro Energy.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/investors/reports',
        twitterCard: 'summary_large_image',
        twitterTitle: 'Investor Reports | Penn Petro Energy - Financial & ESG Overview',
        twitterDescription: 'Review Penn Petro Energy’s comprehensive investor reports covering financials, ESG metrics, and strategic outlooks for stakeholders.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        keywords: 'Penn Petro Energy investor reports, financial statements, ESG reports, quarterly earnings, annual reports, energy sector financials, shareholder disclosures, sustainability reporting, corporate performance, investor relations'
    });

    
</script>


<template>
    <div class="w-full h-full bg-white">

        <!-- Section: Hero -->
        <section>   
            <div class="relative w-full h-full px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

                <div class="py-8 w-full h-fit">
                    
                    <div class="flex flex-col items-center justify-center gap-20 w-full h-full max-w-7xl mx-auto">

                        <div class="flex flex-col items-center justify-center text-center gap-3 w-full max-w-7xl mx-auto">                                

                            <span class="text-base text-(--dark-blue) text-center font-bold">
                                Investor relations
                            </span>

                            <h1 class="text-3xl lg:text-5xl text-(--dark-blue) pb-4 text-center font-bold">
                                Report and Fillings
                            </h1>

                            <p class="text-(--black) text-base lg:text-lg text-center">
                                Promoting strong corporate governance practices
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

