
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Sustainability Overview Page',
    });

    useSeoMeta({
        title: 'Pennpetro Energy PLC Social Impact | Empowering People and Communities',
        ogTitle: 'Pennpetro Energy PLC | Social Responsibility and Community Engagement',
        description: 'Discover how Pennpetro Energy PLC supports communities through education, workforce development, and inclusive practices, creating shared value across the regions where we operate.',
        ogDescription: 'Pennpetro Energy PLC is committed to making a positive social impact through community support, employee wellbeing, and inclusive opportunities that uplift people and society.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Pennpetro Energy PLC social initiatives—community programs, employee engagement, and local partnerships.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/sustainability/social',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Pennpetro Energy PLC | Social Responsibility and Community Empowerment',
        twitterDescription: 'From local partnerships to workforce empowerment, Pennpetro Energy PLC is driving positive change in communities through its strong social responsibility initiatives.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Pennpetro Energy PLC social responsibility, community engagement, workforce development, diversity and inclusion, employee wellbeing, social impact in energy sector, supporting local communities',
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
            
            <div class="relative w-screen h-dvh overflow-hidden">

                <div class="bg-container">

                    <NuxtImg
                        src="https://images.pexels.com/photos/6646778/pexels-photo-6646778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Two ladies and a man sharing aids"
                        loading="lazy"
                        class="bg"
                    />
                </div>

                <!-- Content Layer -->
                <div class="absolute bottom-0 w-full h-1/2 max-h-120 backdrop-blur-md rounded-t-2xl shadow-lg flex items-center justify-center">
                    <div class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-7xl mx-auto">

                        <h1 class="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold text-(--dark-red)">
                            Social Empowering People. Building Communities
                        </h1>
                        
                        <p class="sm:hidden text-base md:text-lg text-center font-medium text-(--black)">
                            At Pennpetro Energy PLC, our social responsibility begins with people—our employees, partners, and the communities where we operate. 
                        </p>

                        <p class="hidden sm:flex text-base md:text-lg text-center font-medium text-(--black)">
                            At Pennpetro Energy PLC, our social responsibility begins with people—our employees, partners, and the communities where we operate. 
                            We believe sustainable energy development can only be achieved through a deep, lasting commitment to social equity, safety, and economic inclusion.
                        </p>
 
                    </div>
                </div>

            </div>
        </section>

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
                        <div class="flex md:flex-col items-center gap-4 w-full h-full">
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

        <!-- Video: Climate Page Global Population Final -->
        <section 
            aria-labelledby="climate-video-title" 
            class="flex flex-col items-center justify-center gap-8 text-white w-full h-full bg-black px-4 py-8"
        >

            <!-- Visually hidden heading for screen readers -->
            <h2 id="climate-video-title" class="sr-only">Social Empowering People. Building Communities Video</h2>

        
            <div class="flex flex-col items-center justify-center gap-8 *:text-center text-(--white) w-9/10 mx-auto h-full">
                
                <video width="900" height="auto" controls autoplay loop muted aria-describedby="video-description">
                    <source src="https://www.pexels.com/video/drone-footage-of-windmills-6966990/" type="video/mp4" alt="Drone Footage of Windmills">
                    <!-- <track src="captions.vtt" kind="captions" srclang="en" label="English" default> -->
                    Your browser does not support the video tag. This video discusses how climate change affects global population trends.
                </video>
            </div> 

             <!-- Short description for screen readers -->
            <div id="video-description" class="sr-only">
                This video explains how climate change is influencing global population distribution and migration.
            </div>

            <!-- Transcript for accessibility -->
            <!-- <div class="max-w-3xl text-left text-white bg-gray-800 p-4 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Video Transcript</h3>
                <p>
                    In this video, we explore the dynamic relationship between global population growth and the escalating impacts of climate change. Through animations and expert interviews, viewers learn how rising temperatures, sea-level changes, and resource scarcity are affecting migration patterns and urban development...
                </p>
                <!-- Add full transcript here --
            </div> -->


        </section>

        <!-- 2023 volunteer highlights -->
        <section>                  
            <div class="relative bg-(--dark-purple) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">

                <div class="flex flex-col gap-8 lg:gap-12 py-16 w-full max-w-7xl mx-auto h-full">

                    <!-- Fueling a lower carbon future -->
                    <div class="flex flex-col items-center justify-center gap-8 *:text-center text-(--white) w-full h-full">
                        <span class="text-lg text-center font-bold">
                            people
                        </span>
                        <h2 class="text-3xl sm:text-4xl lg:text-7xl text-center font-extrabold">
                            2023 volunteer highlights
                        </h2>
                        
                        <p class="lg:text-lg text-center">
                            The Pennpetro Energy PLC Humankind is a program in the United States that aligns personal purpose with company purpose to support Pennpetro Energy PLC’s People Strategy, enrich the employee experience and encourage community involvement.
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

                                <h3 class="text-4xl sm:text-5xl lg:text-7xl text-center font-extrabold text-(--white)">
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
                    <div class="flex flex-col items-center justify-center gap-8 text-(--white) w-full h-full">

                        <h2 class="text-3xl sm:text-4xl lg:text-7xl text-center font-extrabold">
                            Building on a sound legacy
                        </h2>
                        
                        <p class="lg:text-lg">
                            From the oilfields of Texas to our offices in London, we are focused on creating a safe, inclusive, and empowering environment that delivers long-term value to all our stakeholders.
                        </p>

                        <!-- Prioritizing Health, Safety & Wellbeing -->
                        <div class="flex flex-col gap-2 *:lg:text-lg">
                            
                            <h3 class="font-semibold text-xl">Prioritizing Health, Safety &amp; Wellbeing</h3>
                            <p>
                                The health and safety of our workforce is our top priority. 
                                We uphold a zero-harm philosophy and adhere to international safety standards across all operational sites. 
                                Through regular training, audits, and incident prevention programs, we ensure a culture where:
                            </p>

                            <ul>
                                <li>
                                    Every worker is empowered to speak up about safety
                                </li>
                                <li>
                                    Risk is assessed and managed proactively
                                </li>
                                <li>
                                    Wellbeing is supported both on and off the job
                                </li>
                            </ul>

                            <p>
                                We are committed to continuous improvement and invest in the tools, technologies, and leadership practices necessary to keep our people safe.
                            </p>

                        </div>

                        <!-- Investing in Local Communities -->
                        <div class="flex flex-col gap-2 lg:text-lg">
                            
                            <h3 class="font-semibold text-xl">Investing in Local Communities</h3>
                            <p>
                                Our operations bring us into contact with diverse communities—and we are committed to being a responsible neighbor. 
                                We invest in community development initiatives that support:
                            </p>

                            <ul>
                                <li>
                                    Local employment and workforce development
                                </li>
                                <li>
                                    STEM education and training opportunities
                                </li>
                                <li>
                                    Small business inclusion in our supply chain
                                </li>
                                <li>
                                    Infrastructure and environmental stewardship programs
                                </li>
                            </ul>

                            <p>
                                By working closely with local stakeholders, we aim to ensure that the benefits of energy development are shared broadly and equitably.
                            </p>

                        </div>

                        <!-- Diversity, Equity & Inclusion -->
                        <div class="flex flex-col gap-2 lg:text-lg">
                            
                            <h3 class="font-semibold text-xl">Diversity, Equity &amp; Inclusion</h3>
                            <p>
                                Pennpetro is building a culture where diversity is celebrated, equity is ensured, and inclusion is practiced every day. 
                                We believe that diverse teams drive better outcomes—both in the field and in the boardroom.
                            </p>

                            <p>
                                Our initiatives include:
                            </p>

                            <ul>
                                <li>
                                    Inclusive hiring and leadership development
                                </li>
                                <li>
                                    Equal opportunity and anti-discrimination policies
                                </li>
                                <li>
                                    Mentorship programs for underrepresented groups in energy
                                </li>
                                <li>
                                    Safe, respectful workplace training for all employees
                                </li>
                            </ul>


                            <p>
                                We are committed to creating pathways for all people to thrive in the energy industry.
                            </p>

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

    ul {
        list-style-type: disc;
        margin-left: var(--list-ul-margin-left);
    }

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

