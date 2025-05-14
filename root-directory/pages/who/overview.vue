
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Who We Are',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Who We Are | Penn Petro Energy Company Overview',
        ogTitle: 'Penn Petro Energy | Our Mission, Values & Vision',
        description: 'Learn about Penn Petro Energy’s mission, leadership, and commitment to powering a sustainable future. Discover what drives our global energy solutions.',
        ogDescription: 'Explore Penn Petro Energy’s story, values, and vision. See how we’re leading the way in responsible energy innovation and global impact.',
        ogImage: '/images/who-we-are-hero.jpg',
        ogImageAlt: 'Penn Petro Energy team collaborating at a global energy site.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/who/overview',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Who We Are | Discover Penn Petro Energy',
        twitterDescription: 'Get to know Penn Petro Energy – our purpose, leadership, and dedication to innovation and sustainability in the global energy sector.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'about Penn Petro Energy, energy company overview, Penn Petro mission, energy leadership, global energy company, sustainability values, responsible energy innovation',
    });

    import { whoOverviewHeroVideoBg } from '~/models/heroBgModels';

</script>



<template>
    <div>
        <!-- Section: Hero -->
        <div>
            <HeroSectionVideoBg
                :videoSrc="whoOverviewHeroVideoBg.videoSrc"
                :title="whoOverviewHeroVideoBg.title"
                :titleBgVideoSrc="whoOverviewHeroVideoBg.titleBgVideoSrc"
                :paragraph="whoOverviewHeroVideoBg.paragraph"
                :displayLink="whoOverviewHeroVideoBg.displayLink"
                :link="whoOverviewHeroVideoBg.link"
                :linkName="whoOverviewHeroVideoBg.linkName"
            />
        </div>

        <!-- Section: What are we -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-blue)/90 w-full h-full overflow-hidden">
                
                <div class="flex flex-col gap-20 lg:gap-24 w-full max-w-6xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-4 lg:gap-12">
                        <h2 
                            class="text-5xl lg:text-8xl text-(--white) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            What we believe drives how we work
                        </h2>

                        <p class="text-(--white) text-center text-lg lg:text-2xl font-semibold cursor-text">
                            Our north star is The Penn Petro Energy Way. 
                            A set of values that inspires our culture. 
                            And guides us to get results the right way.
                        </p>

                        <!-- Discover the Penn Petro way -->
                        <NuxtLink 
                            to="/who/culture"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) hover:text-(--black) bg-transparent hover:bg-(--light-blue) shadow-lg rounded-lg border-2 border-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-lg">Discover the Penn Petro way</span>
                        </NuxtLink>
                    </div>

                    <!-- Images -->
                    <div 
                        class="flex flex-col items-center gap-8 lg:grid lg:grid-cols-3 w-full h-full"
                    >
                    
                        <NuxtImg
                            src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Low Angle Shot of Manufacturing Plant under Blue Sky"
                            loading="lazy"
                            class="w-1/2 lg:w-full h-40 md:h-60 lg:h-70 object-cover rounded-lg mr-auto lg:mr-0"
                        />                        

                        <NuxtImg
                            src="https://images.pexels.com/photos/8487337/pexels-photo-8487337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Handywoman Pointing up"
                            loading="lazy"
                            class="w-1/2 lg:w-full h-40 md:h-60 lg:h-70 object-cover rounded-lg"
                        />

                        <NuxtImg
                            src="https://images.pexels.com/photos/6060192/pexels-photo-6060192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Industrial containers and warehouse premises of plant"
                            loading="lazy"
                            class="w-1/2 lg:w-full h-40 md:h-60 lg:h-70 object-cover rounded-lg ml-auto lg:ml-0"
                        />
                            
                    </div>  

                </div>

            </div>

        </section>

        <!-- Section: Our purpose -->
        <section>
            <div class="bg-(--white) w-full h-full shadow-lg overflow-hidden">
                
                <div class="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1400px] mx-auto lg:py-16 h-full">

                    <div class="flex flex-col justify-center bg-(--dark-purple) h-full w-full lg:h-210 xl:rounded-l-2xl">                        
                        <div class="flex flex-col px-8 py-32 gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl md:text-7xl xl:text-8xl text-(--white) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Our purpose
                            </h2>

                            <p class="text-(--white) text-lg xl:text-2xl cursor-text">
                                Penn Petro Energy’s purpose is to provide affordable, reliable, ever-cleaner energy. 
                                To enable human progress. 
                                That is at the heart of who we are.
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-4 lg:gap-8 bg-(--medium-purple) h-full lg:h-210 lg:rounded-r-2xl p-8">
                        <NuxtImg
                            src="https://images.pexels.com/photos/19797275/pexels-photo-19797275/free-photo-of-2024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="2024"
                            loading="lazy"
                            class="w-full h-90 object-cover rounded-lg ml-auto lg:ml-0"
                        /> 
                        

                        <div class="flex flex-col gap-12 py-20 justify-between rounded-lg hover:bg-(--dark-purple) w-full h-full duration-300 ease-in-out transition-all">
                            <p class="text-(--white) text-2xl xl:text-4xl">
                                We're working to increase production to meet global energy demand.
                            </p>
                            <NuxtLink
                                to="/what/energy"
                                class="group flex items-center text-(--white) text-lg font-semibold"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text">Learn more</span>
                            </NuxtLink>
                        </div>
                    </div>

                </div>

            </div>

        </section>

        <!-- Section: Our culture -->
        <section>
            <div class="bg-(--white) w-full h-full shadow-lg overflow-hidden">
                
                <div class="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1400px] mx-auto lg:mb-16 h-full">

                    <div class="grid md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-4 lg:gap-8 bg-(--medium-teal) h-full lg:h-210 lg:rounded-l-2xl p-8">
                        <NuxtImg
                            src="https://images.pexels.com/photos/13963338/pexels-photo-13963338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Enginners"
                            loading="lazy"
                            class="w-full h-90 object-cover rounded-lg ml-auto lg:ml-0"
                        /> 
                        
                        <div class="flex flex-col gap-12 py-20 justify-between rounded-lg hover:bg-(--dark-teal) w-full h-full duration-300 ease-in-out transition-all">
                            <p class="text-(--white) text-2xl xl:text-4xl">
                                Supporting diversity and inclusion is embedded in how we work.
                                We welcome different points of view to help us drive innovation and grow our business.
                            </p>
                            <NuxtLink
                                to="/who/culture"
                                class="group flex items-center text-(--white) text-lg font-semibold"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text">Learn more</span>
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center bg-(--dark-teal) h-full w-full lg:h-210 xl:rounded-r-2xl">                        
                        <div class="flex flex-col px-8 py-32 gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl md:text-7xl xl:text-8xl text-(--white) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Our culture
                            </h2>

                            <p class="text-(--white) text-lg xl:text-2xl cursor-text">
                                We're a global team dedicated to working with people from all walks of life. 
                                We believe human ingenuity has the power to solve any challenge.
                                And we work towards living this belief every day
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>

        <!-- Section: Industry innovation through technology -->
        <section>
            <div class="bg-(--white) w-full h-full shadow-lg overflow-hidden">
                
                <div class="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1400px] mx-auto lg:py-16 h-full">

                    <div class="flex flex-col justify-center bg-(--dark-blue) h-full w-full lg:h-210 xl:rounded-l-2xl">                        
                        <div class="flex flex-col px-8 py-32 gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl md:text-7xl xl:text-8xl text-(--white) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Industry innovation through technology
                            </h2>

                            <p class="text-(--white) text-lg xl:text-2xl cursor-text">
                                We aim to accelerate progress through technology that fuels our world today and builds lower carbon energy solutions for the future.
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-4 lg:gap-8 bg-(--medium-blue) h-full lg:h-210 lg:rounded-r-2xl p-8">
                        <NuxtImg
                            src="https://images.pexels.com/photos/31945005/pexels-photo-31945005/free-photo-of-close-up-of-disassembled-electronic-circuit-boards.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Close-up of Disassembled Electronic Circuit Boards"
                            loading="lazy"
                            class="w-full h-90 object-cover rounded-lg ml-auto lg:ml-0"
                        /> 
                        

                        <div class="flex flex-col gap-12 py-20 justify-between rounded-lg hover:bg-(--dark-blue) w-full h-full duration-300 ease-in-out transition-all">
                            <p class="text-(--white) text-2xl xl:text-4xl">
                                Digital technologies are helping us integrate data, reduce costs and enhance safety.
                            </p>
                            <NuxtLink
                                to="/what"
                                class="group flex items-center text-(--white) text-lg font-semibold"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text">Learn about our technology</span>
                            </NuxtLink>
                        </div>
                    </div>

                </div>

            </div>

        </section>

        <!-- Section: Human ingenuity from the beginning -->
        <section>                
            <div class="flex flex-col mx-auto gap-8 pt-16 lg:gap-8 w-full py-12 px-8 bg-(--dark-green) shadow-lg z-0">

                <h3 class="text-5xl sm:text-6xl lg:text-7xl text-wrap text-center text-(--medium-green) font-extrabold">
                    Human ingenuity from the beginning 
                </h3>

                <p class="text-(--white) text-lg lg:text-xl text-wrap text-center">
                    We have been a leader in energy for over 140 years. 
                    Our history is filled with moments that shaped human progress and transformed the world.
                </p>

                <!-- Learn about our history -->
                <NuxtLink 
                    to="/who/history"
                    class="group flex *:flex items-center *:items-center px-8 py-3 gap-4 w-fit h-14 text-(--white) hover:text-(--black) bg-transparent mx-auto hover:bg-(--medium-green) shadow-lg rounded-lg border-3 border-(--light-green) duration-300 ease-in-out transition-all"
                >
                    <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                            <Icon name="mdi:arrow-right"/>
                        </div>
                        
                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                            <Icon name="mdi:arrow-right" />
                        </div>
                    </div>

                    <span class="font-semibold text-lg">Learn our history</span>
                </NuxtLink>
            </div>                           
        </section>

        <!-- Section: Industry innovation through technology -->
        <section>
            <div class="grid bg-(--white) gap-12 w-full h-full overflow-hidden py-(--section-py) lg:py-(--section-py-lg)">
                
                <div class="flex flex-col gap-4 items-center justify-center py-12 max-w-4xl mx-auto">
                    <h2 class="text-(--dark-blue) text-center font-bold text-4xl lg:text-7xl">
                        Focus on quality
                    </h2>
                    <p class="text-(--black) text-xl text-center">
                        We’re driven to create a quality experience. From our leadership team, who are guided by their vision and values. To each of our brands and the employees who bring them to life.
                    </p>
                </div>

                <!-- Our brands -->
                <div class="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1400px] mx-auto shadow-lg h-130">

                    <div class="flex flex-col justify-center bg-(--dark-red) h-full w-full lg:rounded-l-2xl">                        
                        <div class="flex flex-col px-8 py-12 gap-4 lg:gap-8 max-w-2xl">
                            <h3 
                                class="text-5xl lg:text-6xl text-(--light-red) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Our brands
                            </h3>

                            <p class="text-(--white) text-lg xl:text-2xl cursor-text">
                                We strive for excellence and maintaining high standards.
                                With a rich history dating back over a century, Penn Petro Energy's family of brands has built trust and recognition worldwide.
                            </p>

                            <!-- Learn about our history -->
                            <NuxtLink 
                                to="/who/brands"
                                class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-14 font-semibold text-(--white) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="text-lg">Discover our brands</span>
                            </NuxtLink>
                        </div>
                    </div>

                    <NuxtImg
                        src="https://images.pexels.com/photos/9336587/pexels-photo-9336587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Aerial View of Complex Platform"
                        loading="lazy"
                        class="hidden lg:block w-full h-full object-cover rounded-r-lg"
                    />    

                </div>

                <!-- Leadership -->
                <div class="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1400px] mx-auto shadow-lg h-130">

                    <NuxtImg
                        src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Group of People Having A Meeting"
                        loading="lazy"
                        class="hidden lg:block w-full h-full object-cover rounded-l-lg"
                    />

                    <div class="flex flex-col justify-center bg-(--dark-teal) h-full w-full lg:rounded-r-2xl">                        
                        <div class="flex flex-col px-8 py-12 gap-4 lg:gap-8 max-w-2xl">
                            <h3 
                                class="text-5xl lg:text-6xl text-(--light-teal) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Leadership
                            </h3>

                            <p class="text-(--white) text-lg xl:text-2xl cursor-text">
                                Our culture is built upon the principles of responsibility, trust and integrity.
                                Our leadership is a profound source of pride as we aim to lead in the future of energy.
                                With a rich history dating back over a century, Penn Petro Energy's family of brands has built trust and recognition worldwide.
                            </p>

                            <!-- Learn about our history -->
                            <NuxtLink 
                                to="/who/leadership"
                                class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-14 text-(--white) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="font-semibold text-lg">Learn about our leaders</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Careers -->
                <div class="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1400px] mx-auto shadow-lg h-130">

                    <div class="flex flex-col justify-center bg-(--dark-orange) h-full w-full lg:rounded-l-2xl">                        
                        <div class="flex flex-col px-8 py-12 gap-4 lg:gap-8 max-w-2xl">
                            <h3 
                                class="text-5xl lg:text-6xl text-(--light-orange) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Careers
                            </h3>

                            <p class="text-(--white) text-lg xl:text-2xl cursor-text">
                                Penn Petro Energy is a place where people come to be part of innovative solutions that help address the world's energy challenges.
                            </p>

                            <!-- Careers -->
                            <NuxtLink 
                                to="/who/brands"
                                class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-14 font-semibold text-(--white) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="text-lg">Join our journey</span>
                            </NuxtLink>
                        </div>
                    </div>

                    <NuxtImg
                        src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Photo Of People Doing Handshakes"
                        loading="lazy"
                        class="hidden lg:block w-full h-full object-cover rounded-r-lg"
                    />    

                </div>

                <HomeNewsroom
                    category="newsroom"
                    title="Latest in Penn Petro Energy" 
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
