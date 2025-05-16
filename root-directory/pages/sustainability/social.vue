
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Sustainability Overview Page',
    });

    useSeoMeta({
        title: 'Penn Petro Energy Social Impact | Empowering People and Communities',
        ogTitle: 'Penn Petro Energy | Social Responsibility and Community Engagement',
        description: 'Discover how Penn Petro Energy supports communities through education, workforce development, and inclusive practices, creating shared value across the regions where we operate.',
        ogDescription: 'Penn Petro Energy is committed to making a positive social impact through community support, employee wellbeing, and inclusive opportunities that uplift people and society.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Penn Petro Energy social initiatives—community programs, employee engagement, and local partnerships.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/sustainability/social',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy | Social Responsibility and Community Empowerment',
        twitterDescription: 'From local partnerships to workforce empowerment, Penn Petro Energy is driving positive change in communities through its strong social responsibility initiatives.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy social responsibility, community engagement, workforce development, diversity and inclusion, employee wellbeing, social impact in energy sector, supporting local communities',
    });

    import { 
        contributedUs,
        volunteerHours,
        charitableOrganization
    } from '~/stores/sustainabilityVariables';

    import { sustainabilitySocialHeroImageBg } from '~/models/heroBgModels';    

</script>


<template>
    <div>
        <!-- Section: Hero -->
        <div>
            <HeroSectionImageBg
                :imgSrc="sustainabilitySocialHeroImageBg.imgSrc"
                :imgAlt="sustainabilitySocialHeroImageBg.imgAlt"
                :category="sustainabilitySocialHeroImageBg.category"
                :title="sustainabilitySocialHeroImageBg.title"
                :titleBgImageSrc="sustainabilitySocialHeroImageBg.titleBgImageSrc"
                :displayLink="sustainabilitySocialHeroImageBg.displayLink"
                :paragraph="sustainabilitySocialHeroImageBg.paragraph"
                :link="sustainabilitySocialHeroImageBg.link"
                :linkName="sustainabilitySocialHeroImageBg.linkName"
            />
        </div>

        <!-- Section: Our approach -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-teal) w-full h-full">
                <div class="flex flex-col gap-16 py-20 w-full max-w-7xl mx-auto h-full">
                    

                    <div class="grid md:grid-cols-3 gap-8 lg:gap-12 place-content-center">
                        <!-- People -->
                        <div class="flex md:flex-col items-center gap-4 w-full h-full">
                            <NuxtImg
                                src="/sustainability/social_people.png"
                                alt="Image similar to an icon of 3 people"
                                loading="lazy"
                                class="w-16 md:w-24 lg:w-50 h-16 md:h-24 lg:h-50 rounded-full"
                            />

                            <div class="grid gap-2 text-(--white) *:lg:text-center">
                                <h4 class="font-bold text-lg">People</h4>
                                <p class="text-base">
                                    We believe working together with governments, nonprofits, and stakeholders in the communities where we operate across the globe help advance progress and strengthen communities.
                                </p>
                            </div>
                        </div>

                        <!-- Environment -->
                        <div class="flex md:flex-col items-center gap-4 w-full h-full">
                            <NuxtImg
                                src="/sustainability/social_tree.png"
                                alt="Image similar to an icon of 3 a tree"
                                loading="lazy"
                                class="w-16 md:w-24 lg:w-50 h-16 md:h-24 lg:h-50 rounded-full"
                            />

                            <div class="grid gap-2 text-(--white) *:lg:text-center">
                                <h4 class="font-bold text-lg">Environment</h4>
                                <p class="text-base">
                                    We work to support conservation efforts for the communities where we operate.
                                </p>
                            </div>
                        </div>

                        <!-- Prosperity -->
                        <div class="flex sm:flex-col items-center gap-4 w-full h-full">
                            <NuxtImg
                                src="sustainability/social_prosperity.png"
                                alt="Image similar to an icon of 3 a tree"
                                loading="lazy"
                                class="w-16 md:w-24 lg:w-50 h-16 md:h-24 lg:h-50 rounded-full"
                            />

                            <div class="grid gap-2 text-(--white) *:lg:text-center">
                                <h4 class="font-bold text-lg">Prosperity</h4>
                                <p class="text-base">
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
            <div class="w-full h-80 md:h-90 xl:h-120 bg-(--dark-blue)">
                <video 
                    autoplay 
                    loop muted playsinline
                    class="w-9/10 md:w-4/5 h-full mx-auto"
                >
                    <source src="/sustainability/Climate_higher_standard_video.mp4" type="video/mp4" >
                </video>
            </div>
        </section>

        <!-- 2023 volunteer highlights -->
        <section>                  
            <div class="relative bg-(--dark-purple) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">

                <div class="flex flex-col gap-16 py-20 w-full max-w-7xl mx-auto h-full">

                    <!-- Fueling a lower carbon future -->
                    <div class="flex flex-col items-center justify-center gap-8 *:text-center text-(--white) w-full h-full">
                        <span class="text-lg text-center font-bold">
                            people
                        </span>
                        <h2 class="text-3xl sm:text-4xl lg:text-7xl text-center font-extrabold">
                            2023 volunteer highlights
                        </h2>
                        
                        <p class="text-lg text-center">
                            The Penn Petro Energy Humankind is a program in the United States that aligns personal purpose with company purpose to support Penn Petro Energy’s People Strategy, enrich the employee experience and encourage community involvement.
                        </p>
                    </div>


                    <div class="grid md:grid-cols-3 px-4 gap-6 text-(--white) py-12 w-full max-w-7xl mx-auto h-full">

                        <!-- Contributed to US non-profits -->
                        <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg gap-8 bg-(--medium-purple) p-4 w-full mx-auto h-50 md:h-70">                            
                            <div class="flex flex-col gap-2 items-center justify-center *:text-center">
                                <p class="text-lg">
                                    Contributed to US non-profits
                                </p>                            

                                <h3 class="text-4xl sm:text-5xl lg:text-7xl text-center font-extrabold text-(--white)">
                                    ${{ contributedUs }}M
                                </h3>
                            </div>
                        </div>

                        <!-- Volunteer hours -->
                        <div class="flex flex-col items-center justify-center rounded-2xl  shadow-lg gap-8 bg-(--medium-purple) p-4 w-full mx-auto h-50 md:h-70">                            
                            <div class="flex flex-col items-center justify-center *:text-center">
                                <p class="text-lg">
                                    Volunteer hours
                                </p>                            

                                <h3 class="text-4xl sm:text-4xl lg:text-7xl text-center font-extrabold text-(--white)">
                                    {{ volunteerHours }}
                                </h3>
                            </div>
                        </div>

                        <!-- Charitable organizations -->
                        <div class="flex flex-col items-center justify-center rounded-2xl shadow-lg gap-8 bg-(--medium-purple) p-4 w-full mx-auto h-50 md:h-70">                            
                            <div class="flex flex-col items-center justify-center *:text-center">
                                <p class="text-lg">
                                    Charitable organizations
                                </p>                            

                                <h3 class="text-3xxl sm:text-5xl lg:text-7xl text-center font-extrabold text-(--white)">
                                    {{ charitableOrganization }}
                                </h3>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
        </section>

        <!-- Building on a sound legacy -->
        <section>                  
            <div class="relative bg-(--dark-teal) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">

                <div class="flex flex-col gap-16 py-20 w-full max-w-7xl mx-auto h-full">

                    <!-- Building on a sound legacy -->
                    <div class="flex flex-col items-center justify-center gap-8 *:text-center text-(--white) w-full h-full">

                        <h2 class="text-3xl sm:text-4xl lg:text-7xl text-center font-extrabold">
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

