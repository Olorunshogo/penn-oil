
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Climate Penn Petro Energy',
        titleTemplate: '%s | Penn Petro Energy'
    });

    useSeoMeta({
        title: 'Penn Petro Energy Climate Strategy | Tackling Climate Change Responsibly',
        ogTitle: 'Penn Petro Energy | Climate Action and Carbon Reduction Goals',
        description: 'Discover Penn Petro Energy’s approach to addressing climate change through carbon reduction, innovation in energy technologies, and alignment with global climate goals.',
        ogDescription: 'See how Penn Petro Energy is working to reduce emissions, invest in clean technologies, and support a low-carbon future through its climate strategy.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Visual representing Penn Petro Energy’s carbon reduction goals and climate initiatives.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/sustainability/climate',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy | Our Climate Strategy and Low-Carbon Future',
        twitterDescription: 'Penn Petro Energy is committed to climate action through innovation, reduced emissions, and long-term sustainability leadership.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy climate strategy, carbon reduction goals, low-carbon energy, tackling climate change, sustainable energy transition, emissions reduction, clean energy innovation',
    });

    import { 
        lowerCarbonInvestment, carbonReductionProjects,
        portfolioCarbon, oilCarbonIntensity,
        refiningCarbon, gasCarbonIntensity
    } from '~/stores/sustainabilityVariables';

    import { sustainabilityClimateHeroImageBg } from '~/models/heroBgModels';

</script>


<template>
    <div>

        <!-- Section: Hero -->
        <div>
            <HeroSectionImageBg
                :imgSrc="sustainabilityClimateHeroImageBg.imgSrc"
                :imgAlt="sustainabilityClimateHeroImageBg.imgAlt"
                :category="sustainabilityClimateHeroImageBg.category"
                :title="sustainabilityClimateHeroImageBg.title"
                :titleBgImageSrc="sustainabilityClimateHeroImageBg.titleBgImageSrc"
                :displayLink="sustainabilityClimateHeroImageBg.displayLink"
                :paragraph="sustainabilityClimateHeroImageBg.paragraph"
                :link="sustainabilityClimateHeroImageBg.link"
                :linkName="sustainabilityClimateHeroImageBg.linkName"
            />
        </div>
 

        <!-- Fueling a lower carbon future -->
        <section>                  
            <div class="relative bg-(--dark-blue) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">

                <div class="flex flex-col gap-16 py-12 w-full max-w-7xl mx-auto h-full">

                    <!-- Fueling a lower carbon future -->
                    <div class="flex flex-col items-center justify-center gap-8 *:text-center text-(--white) w-full h-full">
                        <span class="text-lg text-center font-semibold">
                            future outlook
                        </span>
                        <h2 class="text-4xl sm:text-5xl lg:text-8xl text-center font-extrabold">
                            Fueling a lower carbon future
                        </h2>
                        
                        <p class="text-lg md:text-xl text-center">
                            The world’s energy demand is greater than any other time in human history. 
                            We’re working to meet demand today and help build the energy system of tomorrow.
                        </p>
                    </div>

                    <!-- By 2050 global population is expected to rise by 2 billion -->
                    <div class="flex flex-col items-center justify-center gap-4 *:text-center text-(--white) w-full h-full">
                        
                        <h2 class="text-3xl md:text-4xl lg:text-7xl  text-center font-extrabold">
                            By 2050 global population is expected to rise by 2 billion
                        </h2>
                        
                        <p class="text-lg md:text-xl text-center">
                            Increasing urbanization and income drive demand.
                        </p>
                    </div>

                    <!-- Video: Climate Page Global Population Final -->
                    <div class="flex flex-col items-center justify-center gap-8 *:text-center text-(--white) w-full h-full">
                        
                        <video width="640" height="360" controls autoplay loop>
                            <source src="/sustainability/Climate_Page_global_population_final.mp4" type="video/mp4" >
                        </video>
                    </div>

                    <!-- A mix that includes oil and gas can help satisfy those demands -->
                    <div class="flex flex-col items-center justify-center gap-8 *:text-center text-(--white) w-full h-full">
                        
                        <h2 class="text-3xl sm:text-4xl lg:text-7xl text-center font-extrabold">
                            A mix that includes oil and gas can help satisfy those demands
                        </h2>
                        
                    </div>

                    <!-- Video: Climate Higher Standard -->
                    <div class="flex flex-col items-center justify-center gap-8 *:text-center text-(--white) w-full h-full">
                        
                        <video width="640" height="360" controls autoplay loop>
                            <source src="/sustainability/Climate_higher_standard_video.mp4" type="video/mp4" >
                        </video>
                        
                    </div>

                    <div class="flex flex-col gap-4 px-4 max-w-7xl mx-auto w-full h-full">
                        <p class="text-sm md:text-base text-(--white) ">
                            Sources: IEA, World Energy Outlook 2022, iea.org/reports/world-energy-outlook-2022, License: CC BY 4.0 (report), CC BY NC SA 4.0 (Annex A); 
                            BNEF Scenarios: Energy Transition Scenario 2022, Net Zero Scenario 2022; Wood Mackenzie Scenarios (2022): 
                            Energy Transition Outlook, Accelerated Energy Transition 2° C; S&P Global Commodity Insights Scenarios (2022): Inflections (IHSM), Green Rules (IHSM), Discord (IHSM), Accelerated CCS (IHSM), Multitechnology Mitigation (IHSM), December Most Likely Case (Platts), 2° C Case (Platts).
                        </p>

                        <p class="text-sm md:text-base text-(--white)">
                            *Other low-carbon energy (nuclear, hydrogen and biomass)
                        </p>
                    </div>

                </div>

            </div>
        </section>

        <!-- Our strategy is clear -->
        <section>                  
            <div class="relative bg-(--dark-purple) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">

                <div class="flex flex-col gap-16 py-16 w-full max-w-7xl mx-auto h-full">

                    <div class="flex flex-col items-center justify-center gap-4 *:text-center text-(--white) w-full h-full">
                        <span class="text-lg text-center font-bold">
                            strategy
                        </span>
                        <h2 class="text-4xl sm:text-5xl lg:text-8xl text-center font-extrabold">
                            Our strategy is clear
                        </h2>
                        
                        <p class="text-lg md:text-xl text-center">
                            We’re leveraging our strengths to safely deliver lower carbon energy to a growing world:
                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center md:flex-row gap-12 text-(--white) w-full max-w-4xl mx-auto h-full">
                        
                        <div class="flex flex-col gap-4 lg:gap-8 w-full max-w-sm h-full">
                            <NuxtImg
                                src="https://images.pexels.com/photos/874242/pexels-photo-874242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Man Wearing Brown Jacket and Using Grey Laptop"
                                loading="lazy"
                                class="relative h-60 rounded-2xl w-full shadow-lg object-cover"
                            /> 

                            <h2 class="text-2xl md:text-3xl text-center font-extrabold">
                                Working to lower the carbon intensity of our operations
                            </h2>
                        </div>

                        <div class="flex flex-col gap-4 md:gap-8 w-full max-w-sm h-full">
                            <NuxtImg
                                src="https://images.pexels.com/photos/4895428/pexels-photo-4895428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Woman and Car"
                                loading="lazy"
                                class="relative h-60 rounded-2xl w-full shadow-lg object-cover"
                            /> 

                            <h2 class="text-2xl md:text-3xl text-center font-extrabold">
                                Investing to grow capabilities in new energies
                            </h2>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!-- Our lower carbon targets -->
        <section>                  
            <div class="relative grid gap-12 bg-(--dark-blue) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">

                <div class="flex flex-col items-center justify-center gap-8 md:gap-12 w-full max-w-7xl mx-auto h-full">

                    <div class="flex flex-col items-center justify-center gap-4 md:gap-8 *:text-center text-(--white) w-full h-full">
                        <h2 class="text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                            Our lower carbon targets
                        </h2>
                        
                        <p class="text-lg md:text-xl">
                            We are investing to grow our oil and gas business, lower the carbon intensity of our operations and pursue new lower carbon businesses.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8 md:gap-12 text-(--white) py-16 w-full max-w-4xl mx-auto h-full">
                        
                        <div class="flex flex-col text-center gap-4 md:gap-8 w-full mx-auto max-w-sm h-full">
                            <p class="text-lg md:text-xl">
                                Lower carbon investments from 2021 through 2028
                            </p>

                            <h3 class="text-5xl md:text-7xl text-center font-extrabold">
                                ${{ lowerCarbonInvestment }}B
                            </h3>
                        </div>

                        <div class="flex flex-col text-center gap-4 md:gap-8 w-full mx-auto max-w-sm h-full">
                            <p class="text-lg md:text-xl">
                                Carbon reduction projects from 2021 through 2028
                            </p>

                            <h3 class="text-5xl md:text-7xl text-center font-extrabold">
                                ${{ carbonReductionProjects }}B
                            </h3>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center gap-8 lg:gap-12 w-full max-w-7xl mx-auto h-full">

                    <p class="text-2xl md:text-3xl font-medium text-(--white) text-center">
                        As the world works toward achieving the goals of the Paris Agreement, we set targets to lower our carbon emissions intensities by 2028.*
                    </p>

                    <div class="grid md:grid-cols-2 px-4 gap-6 text-(--white) py-12 w-full max-w-4xl mx-auto h-full">

                        <!-- Portfolio Carbon Intensity -->
                        <div class="flex flex-col items-center justify-center rounded-2xl *:text-center shadow-lg gap-8 bg-(--medium-blue) p-4 w-full mx-auto h-50 md:h-70">
                            <div class="flex flex-col items-center justify-center text-(--white)">
                                <p class="text-lg font-bold ">
                                    Portfolio carbon intensity CO<sub>2</sub>e/MJ
                                </p>

                                <p class="text-base md:text-lg">
                                    (scope 1, 2 and 3) by 2028
                                </p>
                            </div>

                            <h3 class="text-5xl md:text-7xl text-center font-extrabold text-(--white)">
                                {{ portfolioCarbon }}g
                            </h3>
                        </div>

                        <!-- Oil Carbon Intensity -->
                        <div class="flex flex-col items-center justify-center rounded-2xl shadow-lg gap-8 bg-(--medium-blue) p-4 w-full mx-auto h-50 md:h-70">
                            
                            <div class="flex flex-col items-center justify-center text-(--white)">
                                <p class="text-lg font-bold ">
                                    Oil carbon intensity CO<sub>2</sub>e/boe
                                </p>

                                <p class="text-base md:text-lg">
                                    (scope 1 and 2) by 2028
                                </p>
                            </div>

                            <h3 class="text-5xl md:text-7xl text-center font-extrabold text-(--white)">
                                {{ oilCarbonIntensity }}kg
                            </h3>
                        </div>

                        <!-- Refining Carbon Intensity -->
                        <div class="flex flex-col items-center justify-center rounded-2xl *:text-center shadow-lg gap-8 bg-(--medium-blue) p-4 w-full mx-auto h-50 md:h-70">
                            <div class="flex flex-col items-center justify-center text-(--white)">
                                <p class="text-lg font-bold ">
                                    Refining carbon intensity CO<sub>2</sub>e/boe
                                </p>

                                <p class="text-base md:text-lg">
                                    (scope 1, 2 and 3) by 2028
                                </p>
                            </div>

                            <h3 class="text-5xl md:text-7xl text-center font-extrabold text-(--white)">
                                {{ refiningCarbon }}Kg
                            </h3>
                        </div>

                        <!-- Gas Carbon Intensity -->
                        <div class="flex flex-col items-center justify-center rounded-2xl *:text-center shadow-lg gap-8 bg-(--medium-blue) p-4 w-full mx-auto h-50 md:h-70">
                            <div class="flex flex-col items-center justify-center text-(--white)">
                                <p class="text-lg font-bold ">
                                    Gas carbon intensity CO<sub>2</sub>e/boe
                                </p>

                                <p class="text-base md:text-lg">
                                    (scope 1 and 2) by 2028
                                </p>
                            </div>

                            <h3 class="text-5xl md:text-7xl text-center font-extrabold text-(--white)">
                                {{ gasCarbonIntensity }}kg
                            </h3>
                        </div>

                        
                    </div>
                </div>

                <p class="text-base text-(--white) pb-60 px-4 max-w-7xl mx-auto">
                    *Penn Petro Energy’s ability to achieve any ambition, including with respect to climate-related initiatives and any new businesses, is subject to numerous risks and contingencies, many of which are outside of Penn Petro Energy’s control. 
                    Penn Petro Energy regularly evaluates its ambitions and expects to change some of these aspirations, targets, and other ambitions for various reasons, including market conditions, its strategy or portfolio, and financial, operational, policy, reputational, legal and other factors. 
                    Our focus on helping meet the world’s energy needs while lowering the carbon intensity of our operations remains unchanged.
                    For Forward-Looking Statements and Other Disclaimers, visit 
                    <NuxtLink
                        to="/contact"
                    >
                        /contact
                    </NuxtLink>
                </p>

            </div>
        </section>

        <!-- Many solutions will be needed to build the lower carbon energy system of the future -->
        <section>                  
            <div class="relative bg-(--white) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) -mt-[11rem] w-full h-full">

                <div class="flex flex-col gap-24 py-16 w-full max-w-7xl mx-auto h-full">
    
                    <!-- Image Container -->
                    <NuxtImg
                        src="https://images.pexels.com/photos/323933/pexels-photo-323933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Close Up of Blue Paint"
                        loading="lazy"
                        class="relative h-100 lg:h-130 rounded-lg w-9/10 lg:w-full max-w-4xl mx-auto object-cover"
                    />                

                    <div class="flex flex-col items-center justify-center gap-12 w-full h-full">
                        <h2 class="text-3xl sm:text-4xl lg:text-8xl font-extrabold text-(--medium-blue) text-center">
                            "Many solutions will be needed to build the lower carbon energy system of the future.”
                        </h2>

                        <div class="flex flex-col items-center justify-center *:text-center text-(--black) gap-4 w-full h-full">
                            <h2 class="text-xl md:text-2xl font-bold">
                                Mike Wirth
                            </h2>
                            <p class="text-lg">
                                Chairman of the board and chief executive officer
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Section: Home Newsroom -->
        <section>

            <div class="w-full h-full">           
                <HomeNewsroom
                    category="newsroom" 
                    title="Latest at Penn Petro Energy"
                />
            </div>

        </section>

    </div>
</template>

<style lang="css" scoped>
    .image-slider {
        position: relative;
        width: 100%;
        background-size: cover;
        background-position: center;
        animation: slideAnimation 12s infinite;
    }

    /* Define the keyframes for the animation */
    @keyframes slideAnimation {
        0% {
            background-image: url('https://images.pexels.com/photos/7414274/pexels-photo-7414274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
        33% {
            background-image: url('https://images.pexels.com/photos/7414049/pexels-photo-7414049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
        66% {
            background-image: url('https://images.pexels.com/photos/7414273/pexels-photo-7414273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
        100% {
            background-image: url('https://images.pexels.com/photos/7414274/pexels-photo-7414274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
    }

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

