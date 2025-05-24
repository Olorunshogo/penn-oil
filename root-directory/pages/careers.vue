
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    
    useHead({
        title: 'Careers',
        titleTemplate: '%s | Pennpetro Energy PLC'
    });

    useSeoMeta({
        title: 'Careers at Pennpetro Energy PLC | Build a Future in Energy',
        ogTitle: 'Join Pennpetro Energy PLC - Careers that Power the Future',
        description: 'Explore career opportunities at Pennpetro Energy PLC and help shape the future of global energy. We offer roles in engineering, sustainability, technology, and more.',
        ogDescription: 'Pennpetro Energy PLC is hiring! Join a dynamic team driving innovation and sustainability in the energy sector. Discover careers with purpose and global impact.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Pennpetro Energy PLC employees working at an energy site and in office environments.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/careers',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Careers at Pennpetro Energy PLC | Make an Impact in Energy',
        twitterDescription: 'We’re building the future of energy. Find your role in our team at Pennpetro Energy PLC and grow your career in a company committed to innovation and sustainability.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Pennpetro Energy PLC careers, energy jobs, oil and gas careers, sustainability jobs, engineering jobs, energy innovation, clean energy careers, global energy company, Penn Petro hiring',
    });

    // import { careersHeroImageBg } from '~/models/heroBgModels';

</script>


<template>
    <div class="bg-(--light-gray)">
        <!-- Section: Hero -->
        <div>

        <HeroSectionImageBg
            imgSrc="https://images.pexels.com/photos/28318846/pexels-photo-28318846/free-photo-of-train-on-rail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            imgAlt="careersHeroImageBg.imgAlt"
            title="careersHeroImageBg.title"
            paragraph="careersHeroImageBg.paragraph"
            link="careersHeroImageBg.link"
            linkName="careersHeroImageBg.linkName"
        />

        <!-- 
            <!-- Section: Hero --
        <section>      
            
            <div class="relative w-screen h-dvh overflow-hidden">

                <div class="bg-container">

                    <NuxtImg
                        src="https://images.pexels.com/photos/28318846/pexels-photo-28318846/free-photo-of-train-on-rail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Group of Women Standing Near Desk"
                        loading="lazy"
                        class="bg"
                    />
                </div>

                <!-- Content Layer --
                <div class="absolute bottom-0 w-full h-1/2 max-h-120 backdrop-blur-md rounded-t-2xl shadow-lg flex items-center justify-center">
                    <div class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-7xl mx-auto">


                        <h1 class="text-5xl sm:text-6xl text-center font-extrabold text-(--dark-red)">
                            Careers
                        </h1>
                        
                        <p class="text-base md:text-lg text-center font-medium text-(--white)">
                            We believe our business succeeds when our people and communities succeed. Our social investments seek to respond to needs in the communities where we operate around the world. We seek to work with communities and partners to promote job growth and economic development.
                        </p>

 
                    </div>
                </div>

            </div>
        </section>
        -->

            

            <!-- <HeroSectionImageBg
                :imgSrc="careersHeroImageBg.imgSrc"
                :imgAlt="careersHeroImageBg.imgAlt"
                :title="careersHeroImageBg.title"
                :displayLink="careersHeroImageBg.displayLink"
                :paragraph="careersHeroImageBg.paragraph"
                :link="careersHeroImageBg.link"
                :linkName="careersHeroImageBg.linkName"
            /> -->
        </div>

        <!-- Section: Careers at Pennpetro Energy PLC -->
        <section>
            <div class="py-12 w-full h-full">
                
                <div class="flex flex-col md:flex-row w-9/10 md:w-full max-w-7xl mx-auto h-full px-(--section-px) py-(--section-py)">
                    <NuxtImg
                        src="https://images.pexels.com/photos/8866765/pexels-photo-8866765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Three People Working in the Office"
                        loading="lazy"
                        class="w-full md:w-1/2 h-60 sm:h-80 md:h-100 object-cover rounded-t-lg lg:rounded-l-lg"
                    />                     

                    <div class="flex flex-col justify-center bg-(--dark-blue) w-full md:w-1/2 h-80 md:h-100 rounded-b-2xl md:rounded-r-2xl">                        
                        
                        <div class="flex flex-col px-4 md:px-8 gap-4 md:gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl md:text-5xl text-(--light-blue) text-wrap font-extrabold w-full h-full"
                            >
                                Careers at Pennpetro Energy PLC
                            </h2>

                            <p class="text-(--white) text-base md:text-lg">
                                Pennpetro Energy PLC only accepts job applications through our Careers website. 
                                The site features information about careers at Pennpetro Energy PLC and current job openings.
                            </p>
                        </div>

                        <!-- View Careers -->
                        <NuxtLink 
                            to="/who/culture"
                            class="group flex *:flex items-center *:items-center justify-center px-2 md:px-8 py-2 gap-2 md:gap-4 w-fit mx-auto mt-8 text-(--white) bg-transparent hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-base md:text-lg">View careers</span>
                        </NuxtLink>
                    </div>

                </div>

            </div>
        </section>

        <!-- Section: Service Station Employment -->
        <section>
            <div class="w-full h-full">
                
                <div class="flex flex-col md:flex-row-reverse w-9/10 md:w-full max-w-7xl mx-auto h-full px-(--section-px) py-(--section-py)">
                    <NuxtImg
                        src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Engineer Holding Laptop"
                        loading="lazy"
                        class="w-full md:w-1/2 h-60 sm:h-80 md:h-100 object-cover rounded-t-2xl md:rounded-r-2xl"
                    /> 

                    <div class="flex flex-col justify-center bg-(--dark-red) h-80 md:h-100 w-full md:w-1/2 rounded-b-2xl md:rounded-l-2xl">                        
                        
                        <div class="flex flex-col px-4 md:px-8 gap-4 md:gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl md:text-5xl text-(--light-red) text-wrap font-extrabold cursor-text w-full h-full overflow-hidden"
                            >
                                Service station employment
                            </h2>

                            <p class="text-(--white) text-base md:text-lg">
                                Pennpetro Energy PLC Service Stations, Inc. is looking for Customer Service Representatives who are 18 years or older..
                            </p>
                        </div>

                        <!-- View service station jobs -->
                        <NuxtLink 
                            to="/who/culture"
                            class="group flex *:flex items-center *:items-center justify-center px-2 md:px-8 py-2 gap-2 md:gap-4 w-fit mx-auto mt-8 text-(--white) hover:text-(--light-red) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-base md:text-lg">View service station jobs</span>
                        </NuxtLink>
                    </div>

                    
                </div>

            </div>
        </section>

        <!-- Section: Students and Recent Grads -->
        <section>
            <div class="w-full h-full">
                
                <div class="flex flex-col md:flex-row w-9/10 md:w-full max-w-7xl mx-auto h-full px-(--section-px) py-(--section-py)">

                    
                    <NuxtImg
                        src="https://images.pexels.com/photos/7972741/pexels-photo-7972741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Portrait of Smiling Students with Diplomas"
                        loading="lazy"
                        class="w-full md:w-1/2 h-60 sm:h-80 md:h-100 md:object-cover rounded-t-2xl md:rounded-l-2xl"
                    /> 

                    

                    <div class="flex flex-col justify-center bg-(--dark-teal) h-80 md:h-100 w-full md:w-1/2 rounded-b-2xl md:rounded-r-2xl">                       
                        
                        <div class="flex flex-col px-8 gap-4 md:gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl md:text-5xl text-(--light-teal) text-wrap font-extrabold w-full h-full"
                            >
                                Students and recent grads
                            </h2>

                            <p class="text-(--white) text-base md:text-lg">
                                Meet employees and recruiters on your college campus or at a special event.
                            </p>
                        </div>

                        <NuxtLink 
                            to="/who/culture"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) hover:text-(--black) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-base md:text-lg">Learn more</span>
                        </NuxtLink>
                    </div>

                </div>

            </div>
        </section>

        <!-- Section: Recruiting fraud -->
        <section>
            <div class="w-full h-full">
                
                <div class="flex flex-col md:flex-row-reverse w-9/10 md:w-full max-w-7xl mx-auto h-full px-(--section-px) py-(--section-py)">

                <NuxtImg
                    src="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Crop faceless multiethnic interviewer and job seeker going through interview"
                    loading="lazy"
                    class="w-full md:w-1/2 h-60 sm:h-80 md:h-100 md:object-cover rounded-t-2xl md:rounded-r-2xl"
                /> 

                    <div class="flex flex-col justify-center bg-(--dark-purple) h-80 md:h-100 w-full md:w-1/2 rounded-b-2xl md:rounded-l-2xl">                       
                        
                        <div class="flex flex-col px-4 md:px-8 gap-4 md:gap-8 max-w-2xl">
                            <h2 
                                class="text-4xl md:text-5xl text-(--light-purple) text-wrap font-extrabold w-full h-full"
                            >
                                Recruiting fraud
                            </h2>

                            <p class="text-(--white) text-base md:text-lg">
                                Pennpetro Energy PLC never seeks fees from job applicants under any circumstances.
                                If you receive a job offer that you believe is fraudulent, contact your local law enforcement agency.
                            </p>
                        </div>

                        <!-- View service station jobs -->
                        <NuxtLink 
                            to="/who/culture"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) bg-transparent hover:bg-(--light-purple) rounded-lg duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-base md:text-lg">Contact our fraud department</span>
                        </NuxtLink>
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

