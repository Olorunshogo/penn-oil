
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Reports and fillings',
        titleTemplate: '%s | Penn Petro Energy'
    });

    useSeoMeta({
        title: 'Stock Information | Penn Petro Energy - Shareholder Value & Market Performance',
        ogTitle: 'Penn Petro Energy Stock Overview | Real-Time Market Data & Shareholder Insights',
        description: 'Get real-time stock information and historical performance data for Penn Petro Energy. Stay informed on our market trends and shareholder value.',
        ogDescription: 'Explore Penn Petro Energy’s stock data, including current price, trends, and performance metrics. Supporting investor confidence through transparency.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Penn Petro Energy stock performance chart and market data dashboard.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/investors/stock',
        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy Stock Information | Real-Time Data & Market Performance',
        twitterDescription: 'Track Penn Petro Energy’s stock price, trends, and historical performance to support your investment decisions.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        keywords: 'Penn Petro Energy stock, share price, stock performance, energy company stock, investor stock info, market trends, shareholder value, stock data, NYSE energy stocks, financial markets'
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
                                Stock information
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

