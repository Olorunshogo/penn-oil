
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'What We Do',
        titleTemplate: '%s | Penn Petro Energy'
    });
    definePageMeta({
        layout: 'custom'
    })

    useSeoMeta({
        title: 'Technology and Innovation | Penn Petro Energy',
        ogTitle: 'Penn Petro Energy | Leading Energy Innovation and Technology',
        description: 'Explore how Penn Petro Energy integrates cutting-edge technologies and innovative solutions to drive efficiency, sustainability, and advancement in the energy sector.',
        ogDescription: 'At Penn Petro Energy, we harness advanced technologies to transform the energy industry. Learn about our innovations in oil, gas, and clean energy solutions.',
        ogImage: '/images/technology-page-hero.jpg',
        ogImageAlt: 'Innovative energy technologies and engineers working on advanced systems at Penn Petro Energy.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/what/technology',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Technology and Innovation | Shaping the Future of Energy',
        twitterDescription: 'Discover how Penn Petro Energy leads the energy sector with groundbreaking technologies and sustainable innovations that are transforming the future of energy.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy technology, energy innovation, clean energy technology, sustainable energy solutions, advanced energy systems, oil and gas technology, energy sector innovation, energy tech advancements',
    });

    import { whatTechnologyHeroImageBg } from '~/models/heroBgModels';

</script>



<template>
    <div>

        <!-- Section: Hero -->
        <div>
            <HeroSectionImageBg
                :imgSrc="whatTechnologyHeroImageBg.imgSrc"
                :imgAlt="whatTechnologyHeroImageBg.imgAlt"
                :category="whatTechnologyHeroImageBg.category"
                :title="whatTechnologyHeroImageBg.title"
                :titleBgImageSrc="whatTechnologyHeroImageBg.titleBgImageSrc"
                :displayLink="whatTechnologyHeroImageBg.displayLink"
                :paragraph="whatTechnologyHeroImageBg.paragraph"
                :link="whatTechnologyHeroImageBg.link"
                :linkName="whatTechnologyHeroImageBg.linkName"
            />
        </div>

        <!-- Images  -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--light-gray) w-full h-full">

                <!-- Images -->
                <div class="grid grid-cols-1 lg:flex items-center gap-12 max-w-7xl mx-auto">
                        
                    <div class="flex flex-col lg:flex-row gap-8 h-full w-full lg:w-7/10">
                        <NuxtImg
                            src="https://images.pexels.com/photos/30913847/pexels-photo-30913847/free-photo-of-indoor-artistic-scene-with-calligraphy-and-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Indoor Artistic Scene with Calligraphy and Cat"
                            loading="lazy"
                            class="w-4/5 mx-auto lg:w-1/2 lg:mx-0 h-90 lg:h-120 object-cover rounded-lg"
                        />

                        <div class="flex flex-col items-center justify-center gap-4 w-4/5 mx-auto lg:w-1/2 lg:mx-0 h-full">
                            <NuxtImg
                                src="https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Photography of Woman Using Ipad"
                                loading="lazy"
                                class="w-3/5 mr-auto h-60 object-cover rounded-lg"
                            />

                            <NuxtImg
                                src="https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Iphone 6, Earpods and Macbook on Flat-lay Photography"
                                loading="lazy"
                                class="w-3/5 ml-auto h-60 object-cover rounded-lg"
                            />
                        </div>   
                    </div>               
                    
                    
                    <NuxtImg
                        src="https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Software Engineers Working on Computers"
                        loading="lazy"
                        class="w-4/5 lg:w-3/10 mx-auto lg:mx-0 h-90 lg:h-120 object-cover rounded-lg"
                    />
                </div>                   
           
            </div>

        </section>

        <!-- Energy for our growing world relies on technology -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-teal) w-full h-full">
                
                <div class="flex flex-col gap-8 py-16 max-w-7xl mx-auto">
                    <h2 class="font-extrabold text-center text-(--light-teal) text-5xl lg:text-8xl py-8 lg:py-12">
                        Energy for our growing world relies on technology
                    </h2>

                    <p class="text-(--white) text-xl text-center font-medium">
                        We aim to scale affordable, innovative technology solutions to help support a resilient energy system. <br>
                        We believe multiple solutions are needed to meet growing energy demands in lower carbon ways. <br>
                        And that innovation, sparked by collaboration, can accelerate progress.
                    </p>
                </div>           
            </div>

        </section>

        <!-- Section: Working smarter and safer with robotics -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--medium-teal) w-full h-full">
                
                <div class="grid grid-cols-1 gap-20 max-w-7xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-6 lg:gap-12">
                        <span class="text-(--white) text-center font-bold text-xl">Designing the facilities and operations of tomorrow</span>
                    
                        <h2 class="text-(--white) text-center font-extrabold text-4xl lg:text-8xl text-wrap cursor-text">
                            Working smarter and safer with robotics
                        </h2>

                        <p class="text-(--white) text-center text-xl">
                            Robots, drones, machine learning, artificial intelligence and beyond. 
                            Digital technologies are helping us integrate data, reduce costs and enhance safety.
                        </p>

                        <!-- Discover spot the dog-->
                        <NuxtLink 
                            to="/"
                            class="group flex *:flex items-center *:items-center justify-center px-8 py-2 gap-4 w-fit h-12 mx-auto text-(--white) hover:text-(--black) bg-transparent hover:bg-(--light-teal) shadow-lg rounded-lg border-2 border-(--light-teal) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-lg">Discover spot the dog</span>
                        </NuxtLink>

                    </div>

                    <!-- Robot image -->
                    <div class="w-full h-full">
                        <NuxtImg
                            src="https://images.pexels.com/photos/19319639/pexels-photo-19319639/free-photo-of-boston-dynamics-robot-in-a-car-factory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Boston Dynamics Robot in a Car Factory"
                            loading="lazy"
                            class="w-full h-90 lg:h-140 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Section: Scaling next-generation carbon capture technology -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-blue) w-full h-full">
                
                <div class="grid grid-cols-1 gap-20 max-w-7xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-6 lg:gap-12">
                        <span class="text-(--white) text-center font-bold text-xl">Scouting at the edge of innovation</span>
                    
                        <h2 class="text-(--white) text-center font-extrabold text-4xl lg:text-8xl text-wrap cursor-text">
                            Scaling next-generation carbon capture technology
                        </h2>

                        <p class="text-(--white) text-center text-xl">
                            We seek out emerging technologies at the cutting edge of innovation. 
                            From ideas to pilot projects, we use our expertise, experience and partnerships to evaluate and scale new solutions.
                        </p>

                        <!-- Discover your journey with svante -->
                        <NuxtLink 
                            to="/"
                            class="group flex *:flex items-center *:items-center justify-center px-8 py-2 gap-4 w-fit h-12 mx-auto text-(--white) hover:text-(--black) bg-transparent hover:bg-(--light-blue) shadow-lg rounded-lg border-2 border-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-lg">Discover your journey with svante</span>
                        </NuxtLink>

                    </div>

                    <!-- Robot image -->
                    <div class="w-full h-full">
                        <NuxtImg
                            src="https://images.pexels.com/photos/16544056/pexels-photo-16544056/free-photo-of-close-up-of-modern-robotic-equipment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Close-up of Modern Robotic Equipment"
                            loading="lazy"
                            class="w-full h-90 lg:h-140 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Section: Delivering more affordable, reliable, ever-cleaner energy -->
        <section>
            <div class="grid gap-16 bg-(--dark-purple) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">
                
                <div class="flex flex-col gap-16 py-20 w-full max-w-7xl mx-auto h-full">
                    <div class="flex flex-col items-center justify-center gap-8">
                        <span class="text-(--white) text-center font-bold text-xl">Building a resilient energy system</span>
                    
                        <h2 class="text-(--white) text-center font-extrabold text-4xl lg:text-8xl text-wrap cursor-text">
                            Delivering more affordable, reliable, ever-cleaner energy
                        </h2>

                        <p class="text-(--white) text-center text-xl">
                            The energy transition is happening at different speeds across the world. 
                            As we innovate toward tomorrow, technology helps us deliver the energy the world needs today. 
                            Safely, reliably and in lower carbon ways.
                        </p>

                    </div>
                    
                    <div class="grid gap-8"> 

                        <!-- Lowering our methane intensity -->
                        <div class="flex flex-col lg:flex-row *:w-full *:lg:w-1/2 gap-8 w-full max-w-xl lg:max-w-7xl mx-auto h-full">
                            <NuxtImg
                                src="https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Gray and Black Power Transmission Station"
                                loading="lazy"
                                class="block w-full obeject-cover rounded-2xl h-120"
                            />

                            <div class="flex flex-col justify-center items-center h-full lg: w-full rounded-b-2xl lg:rounded-r-2xl">                        
                                
                                <div class="flex flex-col justify-center px-8 lg:p-8 gap-2 max-w-2xl h-full lg:h-fit">
                                    <h3 class="text-2xl text-left text-(--white)">
                                        Lowering our methane intensity
                                    </h3>

                                    <p class="text-(--white) text-xl">
                                        New technologies and facility design improvements are helping us to prevent, detect, and reduce methane emissions.
                                    </p>

                                    <!-- Explore our methane management -->
                                    <NuxtLink 
                                        to="/newsroom"
                                        class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-fit font-bold text-(--white) duration-300 ease-in-out transition-all"
                                    >
                                        <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                            <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                <Icon name="mdi:arrow-right"/>
                                            </div>
                                            
                                            <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                <Icon name="mdi:arrow-right" />
                                            </div>
                                        </div>
                                        <span class="group-hover:underline-text text-lg">Explore our methane management</span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    
                        <!-- Powering up renewables -->
                        <div class="flex flex-col lg:flex-row-reverse *:w-full *:lg:w-1/2 gap-8 w-full max-w-xl lg:max-w-7xl mx-auto h-full">
                            <NuxtImg
                                src="https://images.pexels.com/photos/9799766/pexels-photo-9799766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Photo of solar panel array"
                                loading="lazy"
                                class="block w-full obeject-cover rounded-2xl h-120"
                            />

                            <div class="flex flex-col justify-center items-center h-full lg: w-full rounded-b-2xl lg:rounded-r-2xl">                        
                                
                                <div class="flex flex-col justify-center px-8 lg:p-8 gap-2 max-w-2xl h-full lg:h-fit">
                                    <h3 class="text-2xl text-left text-(--white)">
                                        Powering up renewables
                                    </h3>

                                    <p class="text-(--white) text-xl">
                                        We're sourcing more electricity from renewables like wind and solar to power some of our Chevron operations.
                                    </p>

                                    <!-- See how we use renewable energy -->
                                    <NuxtLink 
                                        to="/newsroom"
                                        class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-fit font-bold text-(--white) duration-300 ease-in-out transition-all"
                                    >
                                        <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                            <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                <Icon name="mdi:arrow-right"/>
                                            </div>
                                            
                                            <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                <Icon name="mdi:arrow-right" />
                                            </div>
                                        </div>
                                        <span class="group-hover:underline-text text-lg">See how we use renewable energy</span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>

                        <!-- Measuring our carbon footprint -->
                        <div class="flex flex-col lg:flex-row *:w-full *:lg:w-1/2 gap-8 w-full max-w-xl lg:max-w-7xl mx-auto h-full">
                            <NuxtImg
                                src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Black Sail Ship on Body of Water"
                                loading="lazy"
                                class="block w-full obeject-cover rounded-2xl h-120"
                            />

                            <div class="flex flex-col justify-center items-center h-full lg: w-full rounded-b-2xl lg:rounded-r-2xl">                        
                                
                                <div class="flex flex-col justify-center px-8 lg:p-8 gap-2 max-w-2xl h-full lg:h-fit">
                                    <h3 class="text-2xl text-left text-(--white)">
                                        Measuring our carbon footprint
                                    </h3>

                                    <p class="text-(--white) text-xl">
                                        Together with our partners, we've developed a standardized, data driven carbon footprinting methodology for delivered liquefied natural gas cargoes.
                                    </p>

                                    <!-- Learn about the methodology -->
                                    <NuxtLink 
                                        to="/newsroom"
                                        class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-fit font-bold text-(--white) duration-300 ease-in-out transition-all"
                                    >
                                        <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                            <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                <Icon name="mdi:arrow-right"/>
                                            </div>
                                            
                                            <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                <Icon name="mdi:arrow-right" />
                                            </div>
                                        </div>
                                        <span class="group-hover:underline-text text-lg">Learn about the methodology</span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>

        <!-- Section: Powered by human ingenuity -->
        <section>
            <div class="lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--white) w-full max-w-7xl mx-auto h-full">
                
                <div class="grid gap-16 py-16 w-full mx-auto">

                    <div class="px-(--section-px)  flex flex-col gap-8">
            
                        <h2 class="text-(--dark-blue) text-5xl md:text-7xl text-center text-wrap font-extrabold">
                            Powered by human ingenuity
                        </h2>

                        <p class="text-(--black) text-center text-xl">
                            Penn Petro Energy has been innovating to help solve energy challenges for decades. 
                            And we believe in the power of human ingenuity to accelerate progress.
                        </p>

                    </div>

                    <div class="flex flex-col gap-8">

                        <HomeNewsroom
                            category="people and community" 
                            title="Meet our innovators" 
                        />

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

