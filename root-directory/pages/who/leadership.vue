
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Pennpetro Energy PLC Leadership',
        titleTemplate: '%s | Pennpetro Energy PLC'
    });

    useSeoMeta({
        title: 'Leadership Team | Pennpetro Energy PLC',
        ogTitle: 'Meet the Leaders of Pennpetro Energy PLC',
        description: 'Get to know the executive leadership behind Pennpetro Energy PLC. Our leaders drive innovation, sustainability, and growth across the global energy sector.',
        ogDescription: 'Discover the people guiding Pennpetro Energy PLC. Our experienced leadership team is committed to shaping a sustainable and forward-thinking energy future.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Pennpetro Energy PLC executive team in discussion and at energy sites.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/who/leadership',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Pennpetro Energy PLC Leadership | Visionary Energy Experts',
        twitterDescription: 'Meet the visionary leaders driving Pennpetro Energy PLC’s global strategy, innovation, and commitment to responsible energy solutions.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Pennpetro Energy PLC leadership, executive team, energy industry leaders, company executives, energy innovation leadership, oil and gas leadership, Penn Petro executives',
    });

</script>


<template>
    <div>        
        <!-- Section: Hero -->
        <section>      
            
            <div class="relative w-screen h-dvh overflow-hidden">

                <div class="bg-container">

                    <NuxtImg
                        src="https://images.pexels.com/photos/7849087/pexels-photo-7849087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="White King Chess Piece on Black Surface"
                        loading="lazy"
                        class="bg"
                    />
                </div>

                <!-- Content Layer -->
                <div class="absolute bottom-0 w-full h-1/2 max-h-120 backdrop-blur-md rounded-t-2xl shadow-lg flex items-center justify-center">
                    <div class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-7xl mx-auto">

                        <h1 class="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text-center font-extrabold text-(--dark-red)">
                            Penn Leadership
                        </h1>
                        
                        <p class="text-base md:text-lg text-center font-medium text-(--white)">
                            Our culture is built upon the principles of responsibility, trust and integrity. 
                            Our leadership is a profound source of pride, as we lead in the future of energy.
                        </p>
 
                    </div>
                </div>

            </div>
        </section> 

        <!-- Section: Board of Directors -->
        <section>
        <div class="relative w-full h-full px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

            <div class="grid gap-16 py-16 lg:py-20 w-full h-full max-w-7xl mx-auto">

                <!-- Pennpetro Energy PLC leadership -->
                <div class="grid gap-2">
                    <h2 class="text-center text-3xl md:text-4xl font-bold text-(--dark-blue)">Board of directors</h2>
                    <p class="text-(--black) text-center font-medium">
                        The Board of Directors at Pennpetro Energy PLC oversees the company’s operations and is dedicated to maintaining strong corporate governance practices. 
                        Its members have a demonstrated history of success and bring diverse high-level expertise, including leadership in business policy, science, technology, engineering, research, and academia. 
                        They also offer deep knowledge in areas such as government, regulation, law, public policy, finance, financial reporting, global business, international relations, environmental matters, business transformation, and public company board service.
                    </p>
                </div>

                <!-- Board of Directors -->
                <BoardOfDirectors />

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

