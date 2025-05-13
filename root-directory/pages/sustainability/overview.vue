
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Sustainability Penn Petro Energy',
        titleTemplate: '%s | Penn Petro Energy'
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Penn Petro Energy Sustainability | Environmental & Social Commitment',
        ogTitle: 'Penn Petro Energy | Our Sustainability Vision and Impact',
        description: 'Learn how Penn Petro Energy is leading sustainability efforts in the energy sector through responsible practices, innovation, and a commitment to environmental and social stewardship.',
        ogDescription: 'Explore Penn Petro Energy’s commitment to a sustainable future. From reducing emissions to supporting communities, see how we integrate sustainability into every aspect of our operations.',
        ogImage: '/images/sustainability/sustainability-hero.jpg',
        ogImageAlt: 'Penn Petro Energy sustainability initiatives showing renewable energy and community support efforts.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/sustainability/overview',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy | Our Path to a Sustainable Energy Future',
        twitterDescription: 'Discover how Penn Petro Energy is transforming the global energy landscape with sustainability at its core.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy sustainability, sustainable energy solutions, environmental responsibility, corporate social responsibility, clean energy initiatives, energy transition, sustainable oil and gas practices',
    });

</script>


<template>
    <div>
        <!-- Section: Hero -->
        <section>        
            
            <div class="relative w-full h-full overflow-hidden -mt-[11rem]">

                <!-- Image Container -->
                <NuxtImg
                    src="https://images.pexels.com/photos/31985272/pexels-photo-31985272/free-photo-of-modern-gaming-setup-with-dual-monitors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Modern Gaming Setup with Dual Monitors"
                    loading="lazy"
                    class="relative h-dvh w-full object-cover z-0"
                />
                

                <!-- Content -->
                <div class="grid gap-4 bg-(--white) w-full absolute bottom-0 h-1/2 md:h-2/5 max-h-[500px]">
                    <div class="flex flex-col items-center justify-center w-full max-w-4xl mx-auto h-full gap-2">
                        <h1 
                            class="text-5xl md:text-8xl xl:text-9xl text-center font-extrabold bg-clip-text text-transparent" 
                            style="background-image: url('https://images.pexels.com/photos/31985272/pexels-photo-31985272/free-photo-of-modern-gaming-setup-with-dual-monitors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); background-size: cover;"
                        >
                            Sustainability
                        </h1>
                        
                        <p class="text-xl lg:text-2xl text-center text-(--black)">
                            We strive to protect the environment, empower people and get results the right way. This approach is integrated throughout our business.
                        </p>
                    </div>
                </div> 

            </div>
        </section>

        <!-- Section: Around the world -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--white) w-full h-full overflow-hidden">
                
                <div class="flex flex-col gap-20 lg:gap-24 py-16 lg:py-24 w-full max-w-6xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-4">
                        <h2 
                            class="text-5xl lg:text-8xl text-(--dark-blue) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            Around the world
                        </h2>

                        <p class="text-(--black) text-center text-lg lg:text-2xl font-semibold cursor-text">
                            Learn about our sustainability efforts in the regions where we operate.
                        </p>
                    </div> 

                    <div class="flex flex-col gap-4 bg-(--medium-blue) rounded-lg px-4 py-12 lg:px-8 lg:py-20" >
                        <h3 
                            class="text-3xl lg:text-5xl text-(--white) text-wrap text-center font-extrabold cursor-text w-full"
                        >
                            Find our environment, social and governance topics in one place
                        </h3>

                        <!-- Explore ESG topics from a-z -->
                        <NuxtLink
                            to="/investors/esg"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>
                            <span class="group-hover:underline-text font-semibold">Explore ESG topics from a-z</span>
                        </NuxtLink>
                    </div> 

                </div>

            </div>

        </section>

        <!-- Section: Energy is essential to modern life -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--white) w-full h-full overflow-hidden">
                
                <div class="flex flex-col gap-20 lg:gap-24 w-full max-w-6xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-4">
                        <h2 
                            class="text-5xl md:text-8xl text-(--dark-blue) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            Energy is essential to modern life
                        </h2>

                        <p class="text-(--black) text-center text-lg lg:text-2xl font-semibold cursor-text">
                            As we've done for more than 140 years, we will continue to evolve and help meet the energy demand of a growing world.
                        </p>
                    </div> 

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full h-full">
                        <!-- Climate and Social Investment -->
                        <div class="grid gap-6 *:h-150">

                            <!-- Climate -->
                            <div class="grid p-6 gap-8 rounded-2xl bg-(--medium-blue) shadow-lg">
                                <NuxtImg
                                    src="https://images.pexels.com/photos/2163098/pexels-photo-2163098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Photo of a Woman Holding a Drone"
                                    loading="lazy"
                                    class="w-full h-60 object-cover rounded-2xl"
                                />

                                <div class="flex flex-col gap-4">
                                    <h2 
                                        class="text-4xl font-bold text-(--white)"
                                    >
                                        Climate
                                    </h2>

                                    <p class="text-(--white) text-xl font-semibold cursor-text">
                                        We’re working to lower the carbon intensity of our operations. 
                                        At the same time, we’re investing to grow our capabilities in various ways, including renewable fuels and emerging technologies.
                                    </p>

                                    <!-- Explore ESG topics from a-z -->
                                        <NuxtLink
                                            to="/sustainability/climate"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold">Learn more</span>
                                        </NuxtLink>
                                </div> 


                            </div>

                            <!-- Social Investment -->
                            <div class="grid p-6 gap-8 rounded-2xl bg-(--medium-teal) shadow-lg">
                                <NuxtImg
                                    src="https://images.pexels.com/photos/8370328/pexels-photo-8370328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Female Vlogger doing a Video Recording"
                                    loading="lazy"
                                    class="w-full h-60 object-cover rounded-2xl"
                                />

                                <div class="flex flex-col gap-4">
                                    <h2 
                                        class="text-4xl font-bold text-(--white)"
                                    >
                                        Social Investment
                                    </h2>

                                    <p class="text-(--white) text-xl font-semibold cursor-text">
                                        We believe our business succeeds when our people and communities do. 
                                        We’re striving to empower people worldwide to help improve their lives and achieve their ambitions.
                                    </p>

                                    <!-- Explore ESG topics from a-z -->
                                        <NuxtLink
                                            to="/sustainability/social"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold">Learn more</span>
                                        </NuxtLink>
                                </div> 


                            </div>

                        </div>

                        <!-- Environment and Diversity and Inclusion -->
                        <div class="grid gap-6 *:h-150">

                            <!-- Environment-->
                            <div class="grid p-6 gap-8 rounded-2xl bg-(--dark-green) shadow-lg">
                                <NuxtImg
                                    src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Clear Light Bulb Planter on Gray Rock"
                                    loading="lazy"
                                    class="w-full h-60 object-cover rounded-2xl"
                                />

                                <div class="flex flex-col gap-4">
                                    <h2 
                                        class="text-4xl font-bold text-(--white)"
                                    >
                                        Environment
                                    </h2>

                                    <p class="text-(--white) text-xl font-semibold cursor-text">
                                        One of our priorities is to help protect the environment. 
                                        We do this through responsible design, development, operations and retirement of assets.
                                    </p>

                                    <!-- Explore ESG topics from a-z -->
                                        <NuxtLink
                                            to="/sustainability/climate"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold">Learn more</span>
                                        </NuxtLink>
                                </div> 

                            </div>

                            <!-- Diversity and Inclusion -->
                            <div class="grid p-6 gap-8 rounded-2xl bg-(--dark-orange) shadow-lg">
                                <NuxtImg
                                    src="https://images.pexels.com/photos/6146703/pexels-photo-6146703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Close-Up Shot of Hands"
                                    loading="lazy"
                                    class="w-full h-60 object-cover rounded-2xl"
                                />

                                <div class="flex flex-col gap-4">
                                    <h2 
                                        class="text-4xl font-bold text-(--white) text-wrap"
                                    >
                                        Diversity and Inclusion
                                    </h2>

                                    <p class="text-(--white) text-xl font-semibold cursor-text">
                                        Our success is driven by a dedicated, diverse and highly skilled global workforce united by The Chevron Way. 
                                        We treat our employees and our partners with respect and dignity.
                                    </p>

                                    <!-- Explore ESG topics from a-z -->
                                        <NuxtLink
                                            to="/sustainability/social"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-bold">Learn more</span>
                                        </NuxtLink>
                                </div> 


                            </div>

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

