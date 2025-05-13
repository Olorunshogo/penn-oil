
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Sustainability Overview Page',
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Penn Petro Energy Social Impact | Empowering People and Communities',
        ogTitle: 'Penn Petro Energy | Social Responsibility and Community Engagement',
        description: 'Discover how Penn Petro Energy supports communities through education, workforce development, and inclusive practices, creating shared value across the regions where we operate.',
        ogDescription: 'Penn Petro Energy is committed to making a positive social impact through community support, employee wellbeing, and inclusive opportunities that uplift people and society.',
        ogImage: '/images/sustainability/social-hero.jpg',
        ogImageAlt: 'Penn Petro Energy social initiatives—community programs, employee engagement, and local partnerships.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/sustainability/social',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy | Social Responsibility and Community Empowerment',
        twitterDescription: 'From local partnerships to workforce empowerment, Penn Petro Energy is driving positive change in communities through its strong social responsibility initiatives.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy social responsibility, community engagement, workforce development, diversity and inclusion, employee wellbeing, social impact in energy sector, supporting local communities',
    });

    import { 
        contributedUs,
        volunteerHours,
        charitableOrganization
    } from '~/stores/sustainabilityVariables';

    

</script>


<template>
    <div>
        <!-- Section: Hero -->
        <section>        
            
            <div class="relative w-screen h-full overflow-hidden -mt-[11rem]">

                <div class="bg-container">
                    <NuxtImg
                        src="https://images.pexels.com/photos/6646778/pexels-photo-6646778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="@ ladies and a man sharing aids"
                        loading="lazy"
                        class="bg"
                    />
                </div>

                <!-- Content Layer -->
                <div class="absolute bottom-0 w-full h-1/3 lg:h-2/5 max-h-[600px] bg-(--white) flex items-center justify-center px-4">
                    <div class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-5xl mx-auto">
                        
                        <span class="text-2xl text-center font-bold text-(--dark-blue)">
                            sustainability
                        </span>

                        <h1 
                            class="text-5xl md:text-8xl xl:text-9xl text-center font-extrabold bg-clip-text text-transparent" 
                            style="background-image: url('https://images.pexels.com/photos/6646778/pexels-photo-6646778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); background-size: cover;"
                        >
                            Social investment
                        </h1>
                        
                        <p class="text-xl text-center text-(--black)">
                            We believe our business succeeds when our people and communities succeed. 
                            Our social investments seek to respond to needs in the communities where we operate around the world. We seek to work with communities and partners to promote job growth and economic development.
                        </p>
                    </div>
                </div>

            </div>
        </section>

        <!-- Section: Our approach -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-teal) w-full h-full">
                <div class="flex flex-col gap-16 py-20 w-full max-w-7xl mx-auto h-full">
                    
                    <div class="flex flex-col gap-8 *:text-center">
                        <h3 class="text-4xl lg:text-6xl font-extrabold text-(--light-teal)">
                            Our approach
                        </h3>
                        <p class="text-lg text-(--white) font-medium">
                            We strive to empower people around the world to improve their lives, achieve their ambitions and meet their full potential. We work to build trusting, mutually beneficial relationships. 
                            Our social investments support themes relevant to the communities where we operate: people, environment and prosperity.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-12 place-content-center">
                        <!-- People -->
                        <div class="flex flex-row lg:flex-col items-center gap-4 w-full h-full">
                            <NuxtImg
                                src="/images/sustainability/social_people.png"
                                alt="Image similar to an icon of 3 people"
                                loading="lazy"
                                class="w-16 lg:w-50 h-16 lg:h-50 rounded-full"
                            />

                            <div class="grid gap-2 text-(--white) *:lg:text-center">
                                <h4 class="font-bold text-lg">People</h4>
                                <p class="text-base font-medium">
                                    We believe working together with governments, nonprofits, and stakeholders in the communities where we operate across the globe help advance progress and strengthen communities.
                                </p>
                            </div>
                        </div>

                        <!-- Environment -->
                        <div class="flex flex-row lg:flex-col items-center gap-4 w-full h-full">
                            <NuxtImg
                                src="/images/sustainability/social_environment.png"
                                alt="Image similar to an icon of 3 a tree"
                                loading="lazy"
                                class="w-16 lg:w-50 h-16 lg:h-50 rounded-full"
                            />

                            <div class="grid gap-2 text-(--white) *:lg:text-center">
                                <h4 class="font-bold text-lg">Environment</h4>
                                <p class="text-base font-medium">
                                    We work to support conservation efforts for the communities where we operate.
                                </p>
                            </div>
                        </div>

                        <!-- Prosperity -->
                        <div class="flex flex-row lg:flex-col items-center gap-4 w-full h-full">
                            <NuxtImg
                                src="/images/sustainability/social_prosperity.png"
                                alt="Image similar to an icon of 3 a tree"
                                loading="lazy"
                                class="w-16 lg:w-50 h-16 lg:h-50 rounded-full"
                            />

                            <div class="grid gap-2 text-(--white) *:lg:text-center">
                                <h4 class="font-bold text-lg">Prosperity</h4>
                                <p class="text-base font-medium">
                                    We seek to work with communities and partners to promote education and economic development.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>

        <!-- Section: Video -->
        <section>
            <div class="w-full h-full">
                <video 
                    autoplay 
                    loop muted playsinline
                    class="bg"
                >
                    <source src="/videos/sustainability/Sustainability_Social_Investment_Slideshow-Final.mp4" type="video/mp4" >
                </video>
            </div>
        </section>

        <!-- 2023 volunteer highlights -->
        <section>                  
            <div class="relative bg-(--dark-purple) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">

                <div class="flex flex-col gap-16 py-20 w-full max-w-7xl mx-auto h-full">

                    <!-- Fueling a lower carbon future -->
                    <div class="flex flex-col items-center justify-center gap-8 *:text-center text-(--white) w-full h-full">
                        <span class="text-2xl text-center font-bold">
                            people
                        </span>
                        <h2 class="text-5xl lg:text-8xl text-center font-extrabold">
                            2023 volunteer highlights
                        </h2>
                        
                        <p class="text-lg text-center">
                            The Penn Petro Energy Humankind is a program in the United States that aligns personal purpose with company purpose to support Penn Petro Energy’s People Strategy, enrich the employee experience and encourage community involvement.
                        </p>
                    </div>


                    <div class="grid md:grid-cols-3 px-4 gap-6 text-(--white) py-12 w-full max-w-7xl mx-auto h-full">

                        <!-- Contributed to US non-profits -->
                        <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg gap-8 bg-(--medium-purple) p-4 w-full mx-auto h-50 md:h-70">                            
                            <div class="flex flex-col items-center justify-center *:text-center">
                                <p class="text-lg font-bold">
                                    Contributed to US non-profits
                                </p>                            

                                <h3 class="text-5xl md:text-7xl text-center font-extrabold text-(--white)">
                                    ${{ contributedUs }}M
                                </h3>
                            </div>
                        </div>

                        <!-- Volunteer hours -->
                        <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg gap-8 bg-(--medium-purple) p-4 w-full mx-auto h-50 md:h-70">                            
                            <div class="flex flex-col items-center justify-center *:text-center">
                                <p class="text-lg font-bold">
                                    Volunteer hours
                                </p>                            

                                <h3 class="text-5xl md:text-7xl text-center font-extrabold text-(--white)">
                                    {{ volunteerHours }}
                                </h3>
                            </div>
                        </div>

                        <!-- Charitable organizations -->
                        <div class="flex flex-col items-center justify-center rounded-2xl shadow-lg gap-8 bg-(--medium-purple) p-4 w-full mx-auto h-50 md:h-70">                            
                            <div class="flex flex-col items-center justify-center *:text-center">
                                <p class="text-lg font-bold">
                                    Charitable organizations
                                </p>                            

                                <h3 class="text-5xl md:text-7xl text-center font-extrabold text-(--white)">
                                    {{ charitableOrganization }}
                                </h3>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
        </section>

        <!-- building on a sound legacy -->
        <section>                  
            <div class="relative bg-(--dark-teal) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">

                <div class="flex flex-col gap-16 py-20 w-full max-w-7xl mx-auto h-full">

                    <!-- Building on a sound legacy -->
                    <div class="flex flex-col items-center justify-center gap-8 *:text-center text-(--white) w-full h-full">

                        <h2 class="text-5xl lg:text-8xl text-center font-extrabold">
                            Building on a sound legacy
                        </h2>
                        
                        <p class="text-lg text-center">
                            Penn Petro Energy Australia and TSH (Teach Speak Hear) have collaborated to deliver ear health care in the northwest region of Western Australia. Working together to prevent middle ear disease and improving child health outcomes.
                        </p>
                    </div>


                    <div class="flex flex-col px-4 gap-6 text-(--white) py-12 w-full max-w-7xl mx-auto h-full">

                        <div class="flex items-center justify-center w-full mx-auto h-full">
                            <iframe
                                width="800" height="400"
                                src="https://youtube.com/embed/Pqjd2QE6xyg"
                                frameborder="0"
                                allowfullscreen
                                class="rounded-2xl"
                            ></iframe>
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
                    title="Social investment in the news"
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

