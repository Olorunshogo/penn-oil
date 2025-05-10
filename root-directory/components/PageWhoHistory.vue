      
<script setup lang='ts'>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Who We Are History',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });

    definePageMeta({
        layout: 'custom'
    });
    import { 
        boardOfDir, 
        corporateOfficers 
    } from '~/stores/whoVariables';

</script>


<template>
    <div>        
        <!-- Section: What are we -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) -mt-[11rem] bg-(--dark-blue) w-full h-full">
                
                <div class="flex flex-col gap-20 lg:gap-24  w-full pt-50 py-12 max-w-6xl m-auto h-full">

                    <div class="flex flex-col items-center justify-center gap-12">
                        <h2 
                            class="text-5xl lg:text-8xl text-(--white) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            A history of enabling human progress
                        </h2>

                        <p class="text-(--white) text-center text-xl font-semibold cursor-text">
                            We’ve always believed in the power of human ingenuity. 
                            A group of explorers successfully struck oil in California in 1876. 
                            Three years later our company entered the industry in 1879. 
                            Our spirit has been driven by integrity, trust, and innovation. 
                            And we’ve continued our purpose to provide the affordable, reliable, ever-cleaner energy that enables human progress.
                        </p>

                        <!-- Discover the Penn Petro way -->
                        <NuxtLink 
                            to="/who/history"
                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit mx-auto mt-8 text-(--white) hover:text-(--black) bg-transparent hover:bg-(--light-blue) shadow-lg rounded-lg border-2 border-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-y-full">
                                    <Icon name="mdi:arrow-down"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-y-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-down" />
                                </div>
                            </div>

                            <span class="font-semibold text-lg">Read the full Penn history</span>
                        </NuxtLink>
                    </div> 

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

