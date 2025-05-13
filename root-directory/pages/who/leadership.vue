
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Penn Petro Energy Leadership',
        titleTemplate: '%s | Penn Petro Energy'
    });

    definePageMeta({
        layout: 'custom'
    });

    useSeoMeta({
        title: 'Leadership Team | Penn Petro Energy',
        ogTitle: 'Meet the Leaders of Penn Petro Energy',
        description: 'Get to know the executive leadership behind Penn Petro Energy. Our leaders drive innovation, sustainability, and growth across the global energy sector.',
        ogDescription: 'Discover the people guiding Penn Petro Energy. Our experienced leadership team is committed to shaping a sustainable and forward-thinking energy future.',
        ogImage: '/images/leadership-page-hero.jpg',
        ogImageAlt: 'Penn Petro Energy executive team in discussion and at energy sites.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/who/leadership',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Penn Petro Energy Leadership | Visionary Energy Experts',
        twitterDescription: 'Meet the visionary leaders driving Penn Petro Energy’s global strategy, innovation, and commitment to responsible energy solutions.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Penn Petro Energy leadership, executive team, energy industry leaders, company executives, energy innovation leadership, oil and gas leadership, Penn Petro executives',
    });

    import { 
        boardOfDir, 
        corporateOfficers 
    } from '~/stores/whoVariables';

</script>


<template>
    <div>        
        <!-- Section: Hero -->
        <section>     
            <div class="relative w-full h-full overflow-hidden -mt-[11rem] pt-(--section-py-lg)">

                <!-- Hero Image Container -->
                <div class="grid w-full h-80 lg:h-4/5 max-w-7xl mx-auto">
                    <NuxtImg
                        src="https://images.pexels.com/photos/8428092/pexels-photo-8428092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="A Man in White Long Sleeves Having a Deal with the Man in Black Suit"
                        loading="lazy"
                        class="w-full h-full"
                    />  
                </div>
            </div>
        </section>

        <!-- Section: Leadership -->
        <section>
            <div class="relative w-full h-full px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

                <div class="grid gap-8 w-full h-full max-w-7xl mx-auto">
                    <!-- Penn Petro Energy leadership -->
                    <div class="grid gap-6">
                        <h2 class="text-center text-3xl font-bold text-(--dark-blue)">Penn Petro Energy leadership</h2>
                        <p class="text-(--black) text-xl">
                            Our culture is built upon the principles of responsibility, trust and integrity. 
                            Our leadership is a profound source of pride, as we lead in the future of energy.
                        </p>
                    </div>

                    <!-- Penn Petro Energy leadership -->
                    <div class="grid gap-6">
                        <h3 class="text-center text-lg text-(--black)">
                            <span class="text-lg font-bold">
                                <NuxtLink
                                    to="/who/leadership#boardOfDirectors"
                                    class="text-(--medium-blue) font-bold underline-transparent hover:underline underline-offset-2 decoration-1"
                                >
                                    Board of directors
                                </NuxtLink>
                            </span>
                            |
                            <span class="text-(--medium-blue) text-xl font-bold">
                                <NuxtLink
                                    to="/who/leadership#boardOfDirectors"
                                    class="text-(--medium-blue) font-bold underline-transparent hover:underline underline-offset-2 decoration-1"
                                >
                                    Corporate officers
                                </NuxtLink>
                            </span>
                        </h3>
                        <p class="text-(--black) text-xl">
                            Guided by our vision and values, The Chevron Way, our Board of Directors and Corporate Officers are committed to demonstrating the highest standard of ethics.
                        </p>
                    </div>
                </div>    
            </div>
        </section> 

        <!-- Section: Board of Directors -->
        <section>
            <div class="relative w-full h-full px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

                <div class="grid gap-16 w-full h-full max-w-7xl mx-auto">
                    <!-- Penn Petro Energy leadership -->
                    <div class="grid gap-6">
                        <h2 class="text-center text-3xl font-bold text-(--dark-blue)">Board of directors</h2>
                        <p class="text-(--black) text-xl text-center">
                            The Board of Directors of Penn Petro Energy directs the affairs of the corporation and is committed to sound principles of corporate governance.
                            They bring a proven track record of success across a broad range of experiences at the policymaking level in business; expertise in science, technology, engineering, research or academia; extensive knowledge of governmental, regulatory, legal or public policy issues; expertise in finance, financial disclosure or financial accounting; experience in global business or international affairs; environmental experience; experience leading business transformation; and service on public company boards.
                        </p>
                    </div>

                    <!-- Penn Petro Energy Board of Directors -->
                    <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-6 place-content-center">
                        <CustomLeadership
                            v-for="item in corporateOfficers"
                            :key="item.id"
                            :imgSrc="item.imgSrc"
                            :imgAlt="item.imgAlt"
                            :linkName="item.linkName"
                            :link="item.link"
                            :description="item.description"
                        />
                    </div>

                    <!-- Learn more about committee membership -->
                    <NuxtLink
                        to="/investors/corporate-governance#committeemembership"
                        class="group relative flex items-center font-bold mx-auto text-lg text-(--medium-blue) duration-500 ease-in transition-all"
                    >
                        <span class="relative overflow-hidden">
                            <span class="group-hover:underline-text">Learn more about committee membership</span>
                        </span>
                        <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                            <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                <Icon name="mdi:chevron-right"/>
                            </div>
                            
                            <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                <Icon name="mdi:chevron-right" />
                            </div>
                        </div>
                    </NuxtLink>

                    <!-- Penn Petro Energy Corporate officers -->
                    <div class="grid gap-6">
                        <h2 class="text-center text-3xl font-bold text-(--dark-blue)">Corporate officers</h2>
                        <p class="text-(--black) text-xl text-center">
                            *executive committee members
                        </p>
                    </div>

                    <!-- Penn Petro Energy Board of Directors -->
                    <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-6 place-content-center">
                        <CustomLeadership
                            v-for="item in boardOfDir"
                            :key="item.id"
                            :imgSrc="item.imgSrc"
                            :imgAlt="item.imgAlt"
                            :linkName="item.linkName"
                            :link="item.link"
                            :description="item.description"
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

