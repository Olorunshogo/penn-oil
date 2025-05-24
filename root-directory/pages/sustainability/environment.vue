
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Environment Pennpetro Energy PLC',
        titleTemplate: '%s | Pennpetro Energy PLC'
    });

    useSeoMeta({
        title: 'Pennpetro Energy PLC Environmental Commitment | Protecting Natural Resources',
        ogTitle: 'Pennpetro Energy PLC | Environmental Responsibility in Energy Operations',
        description: 'Learn how Pennpetro Energy PLC integrates environmental protection into its operations, prioritizing biodiversity, water conservation, and responsible resource management.',
        ogDescription: 'Explore Pennpetro Energy PLC’s environmental initiatives, including reducing ecological impact, conserving resources, and supporting environmental resilience across all projects.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Image showing Pennpetro Energy PLC’s environmental efforts—natural landscapes, clean water, and protected ecosystems.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/sustainability/environment',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Pennpetro Energy PLC | Our Commitment to the Environment',
        twitterDescription: 'From reducing environmental impact to conserving biodiversity, Pennpetro Energy PLC is committed to protecting the planet through responsible energy practices.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Pennpetro Energy PLC environmental responsibility, environmental stewardship, biodiversity protection, water conservation, sustainable resource management, eco-friendly energy practices, environmental sustainability in oil and gas',
    });

</script>


<template>
    <div>
        <!-- Section: Hero -->
        <section>      
            
            <div class="relative w-screen h-dvh overflow-hidden">

                <div class="bg-container">

                    <NuxtImg
                        src="/sustainability/sustainability-environment-hero-image.jpeg"
                        alt="Wind Turbines Near Brown Mountains and Railway"
                        loading="lazy"
                        class="bg"
                    />
                </div>

                <!-- Content Layer -->
                <div class="absolute bottom-0 w-full h-1/2 max-h-120 backdrop-blur-md rounded-t-2xl shadow-lg flex items-center justify-center">
                    <div class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-7xl mx-auto">

                        <h1 class="text-5xl sm:text-6xl text-center font-extrabold text-(--dark-red)">
                            Environment
                        </h1>
                        
                        <p class="text-base md:text-lg text-center font-medium text-(--white)">
                            Pennpetro Energy PLC is taking steps to help protect the environment where we operate. 
                            We do this by stewarding our water usage, integrating biodiversity into our decision making, reducing waste and managing air emissions from our operations.
                        </p>
 
                    </div>
                </div>

            </div>
        </section> 

        <!-- Section: Stewarding water management -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-blue) w-full h-full">
                
                <div class="flex flex-col gap-20 py-20 w-full max-w-6xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-16 w-full h-full">
                        <NuxtImg
                            src="/sustainability/social_tree.png"
                            alt="Image similar to an icon of a tree"
                            loading="lazy"
                            class="w-3/5 max-w-sm mx-auto rounded-full"
                        />

                        <div class="grid gap-4 text-center">
                            <h2 class="font-extrabold text-(--light-blue) text-3xl lg:text-5xl">Stewarding water management </h2>
                            <p class="text-base lg:text-lg text-(--white)">
                                Water is vital to our operations and the communities where we operate. 
                                That’s why we’re focused on efficient and responsible water use, reuse, recycling and conservation. 
                                But we can’t do it alone. 
                                Close collaboration with stakeholders is important to strengthen our water stewardship.
                            </p>

                            <NuxtLink
                                to="/what/technology"
                                class="group flex *:flex items-center *:items-center justify-end px-2 lg:px-8 py-2 gap-2 lg:gap-4 mx-auto w-fit text-(--white) hover:text-(--black) hover:bg-(--light-blue) border-1 border-(--light-blue) rounded-lg shadow-lg my-12 duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="font-semibold text-lg">Learn more about our approach</span>
                            </NuxtLink>
                        </div>
                    </div>               


                </div>

            </div>

        </section>

        <!-- Section: Building up biodiversity -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--white) w-full h-full">
                
                <div class="flex flex-col gap-20 py-20 w-full max-w-6xl mx-auto">

                    <!-- Building up biodiversity -->
                    <div class="flex flex-col items-center justify-center gap-16 w-full h-full">
                        <NuxtImg
                            src="/sustainability/social_tree.png"
                            alt="Image similar to an icon of a tree"
                            loading="lazy"
                            class="w-3/5 max-w-sm mx-auto rounded-full"
                        />

                        <div class="grid gap-4 text-center">
                            <h2 class="font-extrabold text-(--dark-blue) text-3xl lg:text-5xl">Building up biodiversity</h2>
                            <p class="text-base lg:text-lg  text-(--black)">
                                Pennpetro Energy PLC recognizes the importance of biodiversity. 
                                We work with communities, regulatory agencies, industry groups and conservation organizations to support efforts to protect ecosystems where we operate. 
                                Our aim is to develop an understanding of potential risks and use mitigation to avoid, reduce, restore or offset potential impacts on biodiversity.
                            </p>

                            <NuxtLink
                                to="/sustainability/social"
                                class="group flex *:flex items-center *:items-center justify-end px-2 lg:px-8 py-2 gap-2 lg:gap-4 mx-auto w-fit text-(--black) hover:text-(--white) hover:bg-(--light-blue) border-1 border-(--light-blue) rounded-lg shadow-lg my-12 duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="font-semibold text-lg">Learn more about our approach</span>
                            </NuxtLink>
                        </div>
                    </div>                   


                </div>

            </div>

        </section>

        <!-- Section: Reducing waste material -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-blue) w-full h-full">
                
                <div class="flex flex-col gap-20 py-20 w-full max-w-6xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-16 w-full h-full">
                        <NuxtImg
                            src="/sustainability/social_tree.png"
                            alt="Image similar to an icon of a tree"
                            loading="lazy"
                            class="w-3/5 max-w-sm mx-auto rounded-full"
                        />

                        <div class="grid gap-4 text-center">
                            <h2 class="font-extrabold text-(--light-blue) text-3xl lg:text-5xl">Reducing waste material</h2>
                            <p class="text-base lg:text-lg text-(--white)">
                                We are working to improve waste management and reduce associated potential environmental, health and safety impacts..
                            </p>

                            <NuxtLink
                                to="/sustainability/social"
                                class="group flex *:flex items-center *:items-center justify-end px-2 lg:px-8 py-2 gap-2 lg:gap-4 mx-auto w-fit text-(--white) hover:text-(--black) hover:bg-(--light-blue) border-1 border-(--light-blue) rounded-lg shadow-lg my-12 duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="font-semibold text-lg">Learn more about our approach</span>
                            </NuxtLink>
                        </div>
                    </div>                  

                </div>

            </div>

        </section>

        <!-- Section: Managing air emissions -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--white) w-full h-full">
                
                <div class="flex flex-col gap-20 py-20 w-full max-w-6xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-16 w-full h-full">
                        <NuxtImg
                            src="/sustainability/social_tree.png"
                            alt="Image similar to an icon of a tree"
                            loading="lazy"
                            class="w-3/5 max-w-sm mx-auto rounded-full"
                        />

                        <div class="grid gap-4 text-center">
                            <h2 class="font-extrabold text-(--dark-blue) text-3xl lg:text-5xl">Managing air emissions</h2>
                            <p class="text-base lg:text-lg text-(--black)">
                                We seek to find and use technologies that help reduce emissions of sulfur oxides, nitrogen oxides and volatile organic compounds. 
                                We monitor air dispersion to help better understand emission sources. 
                                And we share best practices across our operations.
                            </p>

                            <NuxtLink
                                to="/what/energy"
                                class="group flex *:flex items-center *:items-center justify-end px-2 lg:px-8 py-2 gap-2 lg:gap-4 mx-auto w-fit text-(--black) hover:text-(--white) hover:bg-(--light-blue) border-1 border-(--light-blue) rounded-lg shadow-lg my-12 duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="font-semibold text-lg">Learn more about our approach</span>
                            </NuxtLink>
                        </div>
                    </div>                   


                </div>

            </div>

        </section>

        <!-- Climate, Social Investment and Diversity and Inclusion -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--light-gray) w-full h-full">
                
                <div class="grid w-full max-w-7xl mx-auto">

                    <div class="flex flex-col py-20 gap-20">

                        <h2 class="text-(--dark-blue) text-center font-extrabold text-3xl lg:text-5xl text-wrap cursor-text">
                            Our other sustainability efforts
                        </h2>

                        <div class="grid w-full h-full">

                            <div class="grid md:grid-cols-3 gap-6 md:gap-8">
                                <!-- Climate -->
                                <div class="flex flex-col items-center justify-center w-full max-w-9/10 md:max-w-full mx-auto h-full">
                                    <NuxtImg
                                        src="/sustainability/Sustainability_ClimateThumbnail.jpg"
                                        loading="lazy"
                                        class="block w-full h-full rounded-t-2xl object-center"
                                    />

                                    <div class="flex flex-col justify-between p-8 gap-12 w-full h-full bg-(--dark-teal) rounded-b-2xl">
                                        <h3 class="text-(--white) text-2xl lg:text-3xl font-extrabold">Climate</h3>
                                        <NuxtLink
                                            to="/sustainability/climate"
                                            class="group flex *:flex items-center *:items-center justify-end ml-auto gap-2 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="font-bold">Learn more</span>
                                        </NuxtLink>
                                    </div>
                                </div>

                                <!-- Social Investment -->
                                <div class="flex flex-col items-center justify-center w-full max-w-9/10 md:max-w-full mx-auto h-full">
                                    <NuxtImg
                                        src="https://images.pexels.com/photos/6288088/pexels-photo-6288088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="A Woman and Girl Playing Together"
                                        loading="lazy"
                                        class="block w-full h-full rounded-t-2xl object-center"
                                    />

                                    <div class="flex flex-col justify-between p-8 gap-12 w-full h-full bg-(--dark-teal) rounded-b-2xl">
                                        <h3 class="text-(--white) text-2xl lg:text-3xl font-extrabold">Social investment</h3>
                                        <NuxtLink
                                            to="/sustainability/social"
                                            class="group flex *:flex items-center *:items-center justify-end ml-auto gap-2 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="font-bold">Learn more</span>
                                        </NuxtLink>
                                    </div>
                                </div>

                                <!-- Diversity and Inclusion -->
                                <div class="flex flex-col items-center justify-center w-full max-w-9/10 md:max-w-full mx-auto h-full">
                                    <NuxtImg
                                        src="/sustainability/Sustainability_DiversityInclusionThumbnail.jpg"
                                        loading="lazy"
                                        class="block w-full h-full rounded-t-2xl object-center"
                                    />

                                    <div class="flex flex-col justify-between p-8 gap-12 w-full h-full bg-(--dark-orange) rounded-b-2xl">
                                        <h3 class="text-(--white) text-2xl lg:text-3xl font-extrabold">Diversity and inclusion</h3>
                                        <NuxtLink
                                            to="/sustainability/social"
                                            class="group flex *:flex items-center *:items-center justify-end ml-auto gap-2 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="font-bold">Learn more</span>
                                        </NuxtLink>
                                    </div>
                                </div>

                                
                            </div>
                            
                        </div>

                    </div>

                </div>

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

