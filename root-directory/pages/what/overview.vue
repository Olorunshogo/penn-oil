
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'What We Do',
        titleTemplate: '%s | Pennpetro Energy PLC'
    });

    useSeoMeta({
        title: 'Overview of Pennpetro Energy PLC’s Services | What We Do',
        ogTitle: 'Pennpetro Energy PLC | Comprehensive Energy Solutions Worldwide',
        description: 'Learn about Pennpetro Energy PLC’s full range of services, including energy production, innovation, sustainability, and technology solutions across the global energy landscape.',
        ogDescription: 'Explore the wide array of services Pennpetro Energy PLC provides to meet global energy demands. From traditional oil and gas to clean energy technologies, we power progress.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Pennpetro Energy PLC infrastructure, including energy plants, technology, and sustainable energy solutions.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/what/overview',

        twitterCard: 'summary_large_image',
        twitterTitle: 'What We Do | Pennpetro Energy PLC Services Overview',
        twitterDescription: 'At Pennpetro Energy PLC, we provide comprehensive energy solutions designed to meet the world’s growing demand for sustainable and reliable energy.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Pennpetro Energy PLC services, energy solutions, global energy company, oil and gas services, clean energy technologies, energy production, energy innovation, sustainability in energy',

        author: "Olorunshogo (Moses) BAMTEFA"
    });

    import { whatOverviewHeroVideoBg } from '~/models/heroBgModels'; 

</script>


<template>
    <div>
        <!-- Section: Hero -->
        <div>
            <HeroSectionVideoBg
                :videoSrc="whatOverviewHeroVideoBg.videoSrc"
                :title="whatOverviewHeroVideoBg.title"
                :titleBgVideoSrc="whatOverviewHeroVideoBg.titleBgVideoSrc"
                :paragraph="whatOverviewHeroVideoBg.paragraph"
                :displayLink="whatOverviewHeroVideoBg.displayLink"
                :link="whatOverviewHeroVideoBg.link"
                :linkName="whatOverviewHeroVideoBg.linkName"
            />
        </div>

        <!-- Section: Affordable, reliable, ever-cleaner energy -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-blue)/90 w-full h-full overflow-hidden">
                
                <div class="flex flex-col gap-20 lg:gap-24 w-full max-w-6xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-4 lg:gap-12">
                        <h2 
                            class="text-5xl lg:text-7xl text-(--white) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            Affordable, reliable, ever-cleaner energy
                        </h2>

                        <p class="text-(--white) text-center text-lg lg:text-2xl font-semibold cursor-text">
                            We work every day to provide energy that helps billions of people achieve the benefits of modern life. 
                            And to create solutions that will help advance a lower carbon future.
                        </p>

                        <!-- Discover the Penn Petro way -->
                        <NuxtLink 
                            to="/what/energy"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) hover:text-(--black) bg-transparent hover:bg-(--light-blue) shadow-lg rounded-lg border-2 border-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold">Explore energy solutions</span>
                        </NuxtLink>
                    </div>

                    <!-- Images -->
                    <div 
                        class="flex flex-col items-center justify-between gap-6 py-8 lg:flex-row w-full h-full lg:h-160"
                    >
                        <div class="flex flex-col gap-8 items-center justify-center lg:flex-row w-4/5 lg:w-3/5 mx-auto h-full">

                            <div class="flex flex-col items-center justify-center gap-6 w-full lg:w-3/5">
                                <NuxtImg
                                    src="https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Offshore Drilling Rig on Body of Water"
                                    loading="lazy"
                                    class="w-full h-40 sm:h-60 object-cover rounded-lg"
                                />

                                <NuxtImg
                                    src="https://images.pexels.com/photos/8487337/pexels-photo-8487337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Handywoman Pointing up"
                                    loading="lazy"
                                    class="w-full h-40 sm:h-60 object-cover rounded-lg"
                                />
                            </div>

                            <NuxtImg
                                src="https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Construction Site at Nighttime"
                                loading="lazy"
                                class="w-full lg:w-2/5 h-40 sm:h-60 object-cover rounded-lg"
                            />
                        </div>                                       

                        <NuxtImg
                            src="https://images.pexels.com/photos/16169309/pexels-photo-16169309/free-photo-of-offshore-platform-on-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Offshore Platform on the Sea"
                            loading="lazy"
                            class="w-4/5 h-40 lg:w-2/5 sm:h-90 object-cover rounded-lg"
                        />
                            
                    </div>  

                </div>

            </div>

        </section>

        <!-- Section: Innovative technology. Scalable solutions -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--medium-blue) w-full h-full overflow-hidden">
                
                <div class="flex flex-col gap-20 lg:gap-24 w-full max-w-6xl mx-auto">

                    <div class="flex flex-col items-center justify-center py-12 gap-4 lg:gap-12">
                        <h2 
                            class="text-5xl lg:text-7xl text-(--white) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            Innovative technology. <br> 
                            Scalable solutions.
                        </h2>

                        <p class="text-(--white) text-center text-lg lg:text-2xl font-semibold cursor-text">
                            Advancing technology helps us safely deliver the lower carbon energy the world needs. 
                            While new innovations help us build the lower carbon energy system for the future.
                        </p>

                        <!-- Discover tech and innovation -->
                        <NuxtLink 
                            to="/what/technology"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) hover:text-(--black) bg-transparent hover:bg-(--light-blue) shadow-lg rounded-lg border-2 border-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold">Discover tech innovation</span>
                        </NuxtLink>

                    </div>            
                                     
                    <NuxtImg
                        src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="A Woman in a Tank Top Using a VR Headset"
                        loading="lazy"
                        class="w-full h-110 object-cover rounded-lg"
                    />                       
                    
                </div>
            </div>

        </section>

        <!-- Section: Delivering energy across the globe -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-purple) w-full h-full overflow-hidden">
                
                <div class="flex flex-col items-center justify-center gap-8 py-16 lg:py-24 w-full max-w-6xl h-full mx-auto">
                    <h2 
                        class="text-5xl lg:text-8xl text-(--light-purple) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                    >
                        Delivering energy across the globe
                    </h2>

                    <p class="text-(--white) text-center text-lg lg:text-2xl font-semibold cursor-text">
                        No one company, industry, or country alone can build a lower carbon future. 
                        With our diverse assets, investments, and people around the world, we are working to make meaningful progress while helping local communities thrive.
                    </p>

                    <!-- Discover tech and innovation -->
                    <NuxtLink 
                        to="/what/technology"
                        class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) hover:text-(--black) bg-transparent hover:bg-(--light-purple) shadow-lg rounded-lg border-2 border-(--light-purple) duration-300 ease-in-out transition-all"
                    >
                        <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                            <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                <Icon name="mdi:arrow-right"/>
                            </div>
                            
                            <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                <Icon name="mdi:arrow-right" />
                            </div>
                        </div>

                        <span class="font-semibold">Discover tech innovation</span>
                    </NuxtLink>
                    
                </div>
            </div>

        </section>

        <!-- Section: Home Newsroom -->
        <section>

            <div class="w-full h-full">           
                <HomeNewsroom 
                    category="newsroom"
                    title="Latest at Pennpetro Energy PLC" 
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

