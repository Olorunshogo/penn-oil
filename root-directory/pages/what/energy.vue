
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'What We Do',
        titleTemplate: '%s | Penn Petro Energy'
    });

    useSeoMeta({
        title: 'Energy Solutions | What We Do at Penn Petro Energy',
        ogTitle: 'Penn Petro Energy | Powering the World Responsibly',
        description: 'Discover how Penn Petro Energy delivers reliable and responsible energy solutions through oil, gas, and advanced technologies worldwide.',
        ogDescription: 'Explore Penn Petro Energy’s core energy operations — driving progress through innovation, efficiency, and a commitment to global energy needs.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Penn Petro Energy infrastructure including oil rigs, pipelines, and control rooms.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/what/energy',

        twitterCard: 'summary_large_image',
        twitterTitle: 'What We Do | Energy at Penn Petro Energy',
        twitterDescription: 'Penn Petro Energy provides integrated energy solutions with a focus on reliability, sustainability, and innovation across global markets.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy operations, oil and gas solutions, global energy production, energy infrastructure, upstream and downstream energy, energy innovation, responsible energy company',
    });

    import { whatEnergyHeroVideoBg } from '~/models/heroBgModels';

</script>


<template>
    <div>
        <!-- Section: Hero -->
        <div>
            <HeroSectionVideoBg
                :videoSrc="whatEnergyHeroVideoBg.videoSrc"
                :title="whatEnergyHeroVideoBg.title"
                :titleBgVideoSrc="whatEnergyHeroVideoBg.titleBgVideoSrc"
                :paragraph="whatEnergyHeroVideoBg.paragraph"
                :displayLink="whatEnergyHeroVideoBg.displayLink"
                :link="whatEnergyHeroVideoBg.link"
                :linkName="whatEnergyHeroVideoBg.linkName"
            />
        </div>

        <!-- Section: Oil and natural gas, Fuels, Lubricants and Chemicals and additives  -->
        <section>
            <div class="grid bg-(--white) gap-16 lg:gap-28 w-full max-w-7xl mx-auto h-full overflow-hidden px-(--section-px) lg:px-(--section-py-lx) py-(--section-py) lg:py-(--section-py-lg)">
                
                <!-- Oil and natural gas -->
                <div class="flex flex-col lg:flex-row *:w-full *:lg:w-1/2 w-full max-w-xl lg:max-w-7xl mx-auto shadow-lg h-full">
                    <NuxtImg
                        src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Two Man Holding White Paper"
                        loading="lazy"
                        class="block w-full obeject-cover rounded-t-lg lg:rounded-l-lg h-80 lg:h-120"
                    />

                    <div class="flex flex-col justify-center items-center bg-(--dark-blue) h-full lg: w-full rounded-b-lg lg:rounded-r-lg">                        
                        <div class="flex flex-col items-center justify-center px-4 lg:px-8 gap-8 max-w-2xl h-80 lg:h-fit">
                            <h3 class="text-3xl md:text-4xl text-center text-(--light-blue) font-extrabold">
                                Oil and natural gas
                            </h3>

                            <p class="text-(--white) text-center text-lg">
                                Oil and natural gas are essential to providing the energy we use every day. 
                                Our diverse set of assets helps us find and produce energy the world needs.
                            </p>

                            <!-- See our portfolio -->
                            <NuxtLink 
                                to="/what/energy"
                                class="group flex *:flex items-center *:items-center px-6 py-2 gap-4 w-fit font-bold text-(--white) hover:text-(--black) rounded-lg border-1 border-(--light-blue) hover:bg-(--light-blue) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="text-lg">See our portfolio</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Fuels -->
                <div class="flex flex-col lg:flex-row-reverse *:w-full *:lg:w-1/2 w-full max-w-xl lg:max-w-7xl mx-auto shadow-lg h-full">
                    <NuxtImg
                        src="https://images.pexels.com/photos/76959/supersonic-fighter-aircraft-jet-jet-fighter-76959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Black Jetplane Flying on the Sky"
                        loading="lazy"
                        class="block w-full obeject-cover rounded-t-lg lg:rounded-l-lg h-80 lg:h-120"
                    />

                    <div class="flex flex-col justify-center items-center bg-(--dark-teal) h-full lg: w-full rounded-b-lg lg:rounded-r-lg">                        
                        <div class="flex flex-col items-center justify-center px-4 lg:px-8 gap-8 max-w-2xl h-80 lg:h-fit">
                            <h3 class="text-3xl md:text-4xl text-center text-(--light-teal) font-extrabold w-full h-full">
                                Fuels
                            </h3>

                            <p class="text-(--white) text-center text-lg">
                                From drives across town to travel across countries, we’ve been providing quality transportation fuels for more than 140 years. 
                                And we’ll continue to deliver affordable, reliable, lower carbon fuels into the future.
                            </p>

                            <!-- Learn about fuels -->
                            <NuxtLink 
                                to="/what/energy"
                                class="group flex *:flex items-center *:items-center px-6 py-2 gap-4 w-fit font-bold text-(--white) hover:text-(--black) rounded-lg border-1 border-(--light-teal) hover:bg-(--light-teal) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="text-lg">Learn about fuels</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Lubricants -->
                <div class="flex flex-col lg:flex-row *:w-full *:lg:w-1/2 w-full max-w-xl lg:max-w-7xl mx-auto shadow-lg h-full">
                    <NuxtImg
                        src="https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Pouring Oil to Engine"
                        loading="lazy"
                        class="block w-full obeject-cover rounded-t-lg lg:rounded-l-lg h-80 lg:h-120"
                    />

                    <div class="flex flex-col justify-center items-center bg-(--dark-red) h-full lg: w-full rounded-b-lg lg:rounded-r-lg">                        
                        <div class="flex flex-col items-center justify-center px-4 lg:px-8 gap-8 max-w-2xl h-80 lg:h-fit">
                            <h3 class="text-3xl md:text-4xl text-center text-(--light-red) font-extrabold w-full h-full">
                                Lubricants
                            </h3>

                            <p class="text-(--white) text-center text-lg">
                                From motor oil for the family car to lubricants for heavy duty transportation and industrial equipment, we deliver premium products that help improve fuel economy and extend the period between oil changes.
                            </p>

                            <!-- Explore lubricants -->
                            <NuxtLink 
                                to="/what/energy"
                                class="group flex *:flex items-center *:items-center px-6 py-2 gap-4 w-fit font-bold text-(--white) hover:text-(--black) rounded-lg border-1 border-(--light-red) hover:bg-(--light-red) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="text-lg">Explore lubricants</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Chemicals and additives -->
                <div class="flex flex-col lg:flex-row-reverse *:w-full *:lg:w-1/2 w-full max-w-xl lg:max-w-7xl mx-auto shadow-lg h-full">
                    <NuxtImg
                        src="https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Person Wearing White Suit Holding White Container"
                        loading="lazy"
                        class="block w-full obeject-cover rounded-t-lg lg:rounded-l-lg h-80 lg:h-120"
                    />

                    <div class="flex flex-col justify-center items-center bg-(--dark-purple) h-full lg: w-full rounded-b-lg lg:rounded-r-lg">                        
                        <div class="flex flex-col items-center justify-center px-4 lg:px-8 gap-8 max-w-2xl h-80 lg:h-fit">
                            <h3 class="text-3xl md:text-4xl text-center text-(--light-purple) font-extrabold w-full h-full">
                                Chemicals and additives
                            </h3>

                            <p class="text-(--white) text-center text-lg">
                                Together with our partners, Penn Petro Energy is a leading manufacturer of petrochemicals and additives that are essential to creating everyday consumer and industrial products, as well as maximizing the reliability, efficiency and life of engines.
                            </p>

                            <!-- See chemicals and additives -->
                            <NuxtLink 
                                to="/what/energy"
                                class="group flex *:flex items-center *:items-center px-6 py-2 gap-4 w-fit font-bold text-(--white) hover:text-(--black) rounded-lg border-1 border-(--light-purple) hover:bg-(--light-purple) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="text-lg">Chemicals and additives</span>
                            </NuxtLink>
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
                    title="Energy in action"
                />
            </div>

        </section>

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

