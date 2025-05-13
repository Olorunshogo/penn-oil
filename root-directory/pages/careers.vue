
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Careers',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Careers at Penn Petro Energy | Build a Future in Energy',
        ogTitle: 'Join Penn Petro Energy - Careers that Power the Future',
        description: 'Explore career opportunities at Penn Petro Energy and help shape the future of global energy. We offer roles in engineering, sustainability, technology, and more.',
        ogDescription: 'Penn Petro Energy is hiring! Join a dynamic team driving innovation and sustainability in the energy sector. Discover careers with purpose and global impact.',
        ogImage: '/images/careers-page-hero.jpg',
        ogImageAlt: 'Penn Petro Energy employees working at an energy site and in office environments.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/careers',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Careers at Penn Petro Energy | Make an Impact in Energy',
        twitterDescription: 'We’re building the future of energy. Find your role in our team at Penn Petro Energy and grow your career in a company committed to innovation and sustainability.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy careers, energy jobs, oil and gas careers, sustainability jobs, engineering jobs, energy innovation, clean energy careers, global energy company, Penn Petro hiring',
    });

</script>


<template>
    <div>
        <!-- Section: Hero -->
        <section>        
            
            <div class="relative w-full h-full overflow-hidden -mt-[11rem]">

                <!-- Image Container -->
                <NuxtImg
                    src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg"
                    alt="Group of Women Standing Near Desk"
                    loading="lazy"
                    class="relative h-dvh w-full object-cover z-0"
                />
                

                <!-- Content -->
                <div class="grid gap-4 bg-(--white) w-full absolute bottom-0 h-1/2 lg:h-2/5 max-h-[500px]">
                    <div class="flex flex-col items-center justify-center w-full max-w-4xl mx-auto h-full gap-2">
                        <h1 
                            class="text-5xl md:text-6xl xl:text-9xl text-center font-extrabold bg-clip-text text-transparent" 
                            style="background-image: url('https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg'); background-size: cover;"
                        >
                            Careers
                        </h1>
                        
                        <p class="text-xl lg:text-2xl text-center text-(--black)">
                            Team members of all experience levels tackle global, real world problems facing our business
                        </p>
                    </div>
                </div> 

            </div>
        </section>

        <!-- Section: Careers at Penn Petro Energy -->
        <section>
            <div class="bg-(--light-gray) w-full h-full overflow-hidden">
                
                <div class="flex flex-col lg:flex-row w-full lg:w-full max-w-[1400px] mx-auto lg:mb-16 h-full px-(--section-px) py-(--section-py)">
                    <NuxtImg
                        src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Engineer Holding Laptop"
                        loading="lazy"
                        class="w-full lg:w-1/2 h-80 lg:h-120 object-center lg:object-cover rounded-t-lg lg:rounded-l-lg"
                    /> 

                    

                    <div class="flex flex-col justify-center bg-(--dark-blue) w-full lg:w-1/2 h-120 rounded-b-2xl lg:rounded-r-2xl">                        
                        
                        <div class="flex flex-col px-8 gap-4 lg:gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl lg:text-6xl text-(--light-blue) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Careers at Penn Petro Energy
                            </h2>

                            <p class="text-(--white) text-lg lg:text-2xl cursor-text">
                                Penn Petro Energy only accepts job applications through our Careers website. 
                                The site features information about careers at Penn Petro Energy and current job openings.
                            </p>
                        </div>

                        <!-- View Careers -->
                        <NuxtLink 
                            to="/who/culture"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) bg-transparent hover:bg-(--light-blue) shadow-lg rounded-lg duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-lg">View careers</span>
                        </NuxtLink>
                    </div>

                </div>

            </div>
        </section>

        <!-- Section: Service Station Employment -->
        <section>
            <div class="bg-(--light-gray) w-full h-full overflow-hidden">
                
                <div class="flex flex-col lg:flex-row w-full lg:w-full max-w-[1400px] mx-auto lg:mb-16 h-full px-(--section-px) py-(--section-py)">

                    <div class="flex flex-col justify-center bg-(--dark-red) h-120 w-full lg:w-1/2 rounded-t-2xl lg:rounded-l-2xl">                        
                        
                        <div class="flex flex-col px-8 gap-4 lg:gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl lg:text-6xl text-(--light-red) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Service station employment
                            </h2>

                            <p class="text-(--white) text-lg lg:text-2xl cursor-text">
                                Penn Petro Energy Service Stations, Inc. is looking for Customer Service Representatives who are 18 years or older..
                            </p>
                        </div>

                        <!-- View service station jobs -->
                        <NuxtLink 
                            to="/who/culture"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) bg-transparent hover:bg-(--light-red) shadow-lg rounded-lg duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-lg">View service station jobs</span>
                        </NuxtLink>
                    </div>

                    <NuxtImg
                        src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Engineer Holding Laptop"
                        loading="lazy"
                        class="w-full lg:w-1/2 h-80 lg:h-120 object-center lg:object-cover rounded-b-2xl lg:rounded-r-2xl"
                    /> 
                </div>

            </div>
        </section>

        <!-- Section: Students and Recent Grads -->
        <section>
            <div class="bg-(--light-gray) w-full h-full overflow-hidden">
                
                <div class="flex flex-col lg:flex-row w-full lg:w-full max-w-[1400px] mx-auto lg:mb-16 h-full px-(--section-px) py-(--section-py)">

                    
                    <NuxtImg
                        src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Engineer Holding Laptop"
                        loading="lazy"
                        class="w-full lg:w-1/2 h-80 lg:h-120 object-center lg:object-cover rounded-t-2xl lg:rounded-l-2xl"
                    /> 

                    

                    <div class="flex flex-col justify-center bg-(--dark-teal) h-120 w-full lg:w-1/2 rounded-b-2xl lg:rounded-r-2xl">                        
                        
                        <div class="flex flex-col px-8 gap-4 lg:gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl lg:text-6xl text-(--light-teal) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Students and recent grads
                            </h2>

                            <p class="text-(--white) text-lg lg:text-2xl cursor-text">
                                Meet employees and recruiters on your college campus or at a special event.
                            </p>
                        </div>

                        <!-- View Careers -->
                        <NuxtLink 
                            to="/who/culture"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) bg-transparent hover:bg-(--light-teal) shadow-lg rounded-lg duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-lg">Learn more</span>
                        </NuxtLink>
                    </div>

                </div>

            </div>
        </section>

        <!-- Section: Recruiting fraud -->
        <section>
            <div class="bg-(--light-gray) mb-16 w-full h-full overflow-hidden">
                
                <div class="flex flex-col lg:flex-row w-full lg:w-full max-w-[1400px] mx-auto lg:mb-16 h-full px-(--section-px) py-(--section-py)">

                    <div class="flex flex-col justify-center bg-(--dark-purple) h-120 w-full lg:w-1/2 rounded-t-2xl lg:rounded-l-2xl">                        
                        
                        <div class="flex flex-col px-8 gap-4 lg:gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl lg:text-6xl text-(--light-purple) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Recruiting fraud
                            </h2>

                            <p class="text-(--white) text-lg lg:text-2xl cursor-text">
                                Penn Petro Energy never seeks fees from job applicants under any circumstances.
                                If you receive a job offer that you believe is fraudulent, contact your local law enforcement agency.
                            </p>
                        </div>

                        <!-- View service station jobs -->
                        <NuxtLink 
                            to="/who/culture"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) bg-transparent hover:bg-(--light-purple) shadow-lg rounded-lg duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-lg">Contact our fraud department</span>
                        </NuxtLink>
                    </div>

                    <NuxtImg
                        src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Engineer Holding Laptop"
                        loading="lazy"
                        class="w-full h-90 lg:h-120 lg:w-1/2 object-cover lg:object-cover rounded-b-2xl lg:rounded-r-2xl"
                    /> 
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

