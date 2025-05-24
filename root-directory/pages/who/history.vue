
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Our History | Penn Petro Energy',
        titleTemplate: '%s - Penn Petro Energy'
    });

    useSeoMeta({
        title: 'Our History | Penn Petro Energy’s Journey',
        ogTitle: 'Penn Petro Energy | A Legacy of Energy Innovation',
        description: 'Explore the history of Penn Petro Energy — from our founding to our evolution as a global leader in sustainable and innovative energy solutions.',
        ogDescription: 'Trace Penn Petro Energy’s milestones and growth through the years. Learn how our heritage fuels our future in the global energy landscape.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Historical timeline and archival images of Penn Petro Energy’s early operations.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/who/history',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Our History | The Evolution of Penn Petro Energy',
        twitterDescription: 'Discover the story behind Penn Petro Energy. From humble beginnings to global leadership, our legacy continues to shape the energy future.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy history, company origins, energy company timeline, legacy of innovation, oil and gas company history, energy industry evolution, Penn Petro milestones',
    });

</script>


<template>
    <div>        
        <!-- Section: What are we -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) -mt-[11rem] bg-(--dark-blue) w-full h-full">
                
                <div class="flex flex-col gap-20 lg:gap-24  w-full pt-50 py-12 max-w-6xl m-auto h-full">

                    <div class="flex flex-col items-center justify-center gap-12">
                        <h2 
                            class="text-5xl lg:text-8xl text-(--white) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            A history of enabling human progress
                        </h2>

                        <p class="text-(--white) text-center text-xl font-semibold cursor-text">
                            We’ve always believed in the power of human ingenuity. 
                            A group of explorers successfully struck oil in California in 1876. 
                            Three years later our company entered the industry in 1879. 
                            Our spirit has been driven by integrity, trust, and innovation. 
                            And we’ve continued our purpose to provide the affordable, reliable, ever-cleaner energy that enables human progress.
                        </p>

                    </div> 

                </div>

            </div>

        </section>


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



