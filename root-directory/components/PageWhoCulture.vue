      
<script setup lang='ts'>
    import { useHead } from 'nuxt/app';
    import { 
        dollarsContributed, employeeTotal, volunteerTotalHours,
        whoNewsroom
    } from '~/stores/whoVariables';
    import {
        prevRef, prevIndex, prevSlide,
        activeRef, activeIndex,        
        nextRef, nextIndex, nextSlide,
        goTo
    } from '../stores/homeNews';
    useHead({
        title: 'Who We Are Culture',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });

    definePageMeta({
        layout: 'custom'
    });
</script>


<template>
    <div>

        <!-- Section: Hero -->
        <section>        
            
            <div class="relative w-full h-full overflow-hidden -mt-[11rem]">

                <!-- Image Slider Container -->
                <div class="image-slider h-[950px] lg:h-[1250px]">          

                    <!-- Content -->
                    <div class="grid w-full h-fit bg-(--white) absolute bottom-0 px-4">
                        <div class="flex flex-col py-8 lg:py-12 items-center justify-center w-full max-w-5xl mx-auto h-fit">
                            
                            <div class="text-(--dark-blue) font-bold text-2xl">Who we are</div>

                            <h1 
                                class="text-5xl md:text-8xl xl:text-9xl py-8 bg-clip-text text-center text-transparent font-extrabold bg-gradient-to-r from-(--light-blue) to-(--dark-blue)" 
                            >
                                Our culture
                            </h1>

                            <p class="text-xl lg:text-2xl text-center text-[color:var(--black)]">
                                We work hard to provide energy that helps improve the lives of people around the world. 
                                The Operational Excellence Management System is a core part of how we do it. 
                                We promote a culture that values a diversity of perspectives, productive dialogue and teaming that help us deliver the future of energy.
                            </p>
                            
                            
                        </div>
                    </div> 

                </div>

            </div>
        </section>

        <!-- Section: Our way is the Penn Petro Energy way, We strive for excellence in everything we do and Diversity and inclusion make us stronger  -->
        <section>
            <div class="grid bg-(--white) gap-16 lg:gap-28 w-full max-w-7xl mx-auto h-full overflow-hidden px-(--section-px) lg:px-(--section-py-lx) py-(--section-py) lg:py-(--section-py-lg)">
                
                <!-- Our way is the Penn Petro Energy way -->
                <div class="flex flex-col lg:flex-row *:w-full *:lg:w-1/2 w-full max-w-xl lg:max-w-7xl mx-auto shadow-lg h-full">
                    <NuxtImg
                        src="https://images.pexels.com/photos/7414108/pexels-photo-7414108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Co-workers having a meeting"
                        loading="lazy"
                        class="block w-full obeject-cover rounded-t-2xl lg:rounded-l-2xl h-70 lg:h-120"
                    />

                    <div class="flex flex-col justify-center items-center bg-(--dark-blue) h-full lg: w-full rounded-b-2xl lg:rounded-r-2xl">                        
                        <div class="flex flex-col items-center justify-center p-8 lg:p-8 gap-4 lg:gap-8 max-w-2xl h-full lg:h-fit">
                            <h3 class="text-4xl text-center text-(--light-blue) font-extrabold w-full h-full">
                                <!-- Our way is the Penn Petro Energy way -->
                                The Penn Petro Energy way
                            </h3>

                            <p class="text-(--white) text-center text-xl">
                                We’re a global team united by what we believe. 
                                We believe human ingenuity has the power to solve any challenge and overcome any obstacle. 
                                Our vision and purpose drives how we work. 
                                And together we’re working to advance a lower carbon future.
                            </p>

                            <!-- Learn about our history -->
                            <NuxtLink 
                                to="/who/culture"
                                class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-14 font-bold text-(--white) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="text-lg">See the Penn way</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- We strive for excellence in everything we do -->
                <div class="flex flex-col lg:flex-row-reverse *:w-full *:lg:w-1/2 w-full max-w-xl lg:max-w-7xl mx-auto shadow-lg h-full">
                    <NuxtImg
                        src="https://images.pexels.com/photos/8293670/pexels-photo-8293670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="A Man in Yellow Hard Hat Holding a Clipboard"
                        loading="lazy"
                        class="block w-full obeject-cover rounded-t-2xl lg:rounded-r-2xl h-70 lg:h-120"
                    />

                    <div class="flex flex-col justify-center items-center bg-(--dark-red) h-full lg: w-full rounded-b-2xl lg:rounded-r-2xl">                        
                        <div class="flex flex-col items-center justify-center p-8 lg:p-8 gap-4 lg:gap-8 max-w-2xl h-full lg:h-fit">
                            <h3 class="text-4xl text-center text-(--light-red) font-extrabold w-full h-full">
                                <!-- We strive for excellence in everything we do -->
                                We strive for excellence in everything we do
                            </h3>

                            <p class="text-(--white) text-center text-xl">
                                Operational Excellence (OE) aims to put into action our Penn Petro Energy's Way, a set of values that helps protect people and the environment and helps us achieve Penn Petro Energy’s vision to be the global energy company most admired for its people, partnership and performance.
                            </p>

                            <!-- Learn about our history -->
                            <NuxtLink 
                                to="/who/culture"
                                class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-14 font-bold text-(--white) mx-auto duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="text-lg">See how we elevate excellence</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Diversity and inclusion make us stronger -->
                <div class="flex flex-col lg:flex-row *:w-full *:lg:w-1/2 w-full max-w-xl lg:max-w-7xl mx-auto shadow-lg h-full">
                    <NuxtImg
                        src="https://images.pexels.com/photos/5332246/pexels-photo-5332246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Woman and a Man Looking at the Screen of a Laptop"
                        loading="lazy"
                        class="block w-full obeject-cover rounded-t-2xl lg:rounded-l-2xl h-70 lg:h-120"
                    />

                    <div class="flex flex-col justify-center items-center bg-(--dark-purple) h-full lg: w-full rounded-b-2xl lg:rounded-r-2xl">                        
                        <div class="flex flex-col items-center justify-center p-8 lg:p-8 gap-4 lg:gap-8 max-w-2xl h-full lg:h-fit">
                            <h3 class="text-4xl text-center text-(--light-purple) font-extrabold w-full h-full">
                                Diversity and inclusion make us stronger
                            </h3>

                            <p class="text-(--white) text-center text-xl">
                                We promote a culture that values different perspectives, productive dialogue and teaming. 
                                We also promote resources for good health, well-being and work-life balance. 
                                We develop leaders to sustain and strengthen our culture for the future.
                            </p>

                            <!-- Learn about our history -->
                            <NuxtLink 
                                to="/who/culture"
                                class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-14 font-bold text-(--white) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="text-lg">See how we're stronger together</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <!-- Section: Affordable, reliable, ever-cleaner energy -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-blue) w-full h-full overflow-hidden">
                
                <div class="flex flex-col gap-20 lg:gap-28 w-full max-w-7xl mx-auto">

                    <div class="flex flex-col items-center justify-center gap-4 lg:gap-12">
                        <h2 
                            class="text-5xl lg:text-7xl text-(--light-blue) text-wrap text-center font-extrabold cursor-text w-full h-full overflow-hidden"
                        >
                            Penn Petro Energy humankind
                        </h2>

                        <p class="text-(--white) text-center text-xl font-semibold cursor-text">
                            Our Chevron Humankind initiative is a program in the United States that offers support from our employees to their communities.
                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-4 lg:gap-12">
                        <h2 
                            class="text-5xl text-(--white) text-wrap text-center font-extrabold"
                        >
                            2023 Penn Petro Energy humankind at a glance
                        </h2>

                        <div class="grid md:grid-cols-2 gap-6 w-full h-full text-(--white) *:md:h-80">

                            <!-- Dollars contributed to U.S. nonprofits through a combination of employee and retiree giving and company matching funds -->
                            <div class="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-(--medium-blue) w-full mx-auto h-full">
                                <p class="text-xl text-center">
                                    Dollars contributed to U.S. nonprofits through a combination of employee and retiree giving and company matching funds
                                </p>
                                <span class="text-6xl md:text-7xl xl:text-8xl font-extrabold">
                                    ${{ dollarsContributed }}M
                                </span>
                            </div>

                            <!-- Number of employees and retirees who volunteered through Penn Petro Energy Humankind -->
                            <div class="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-(--medium-blue) w-full mx-auto h-full">
                                <p class="text-xl text-center">
                                    Number of employees and retirees who volunteered through Penn Petro Energy Humankind
                                </p>
                                <span class="text-6xl md:text-7xl xl:text-8xl font-extrabold">
                                    {{ employeeTotal }}
                                </span>
                            </div>

                            <!-- Number of volunteer hours logged in the U.S. by our employees and retirees -->
                            <div class="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-(--medium-blue) w-full mx-auto h-full">
                                <p class="text-xl text-center">
                                    Number of volunteer hours logged in the U.S. by our employees and retirees
                                </p>
                                <span class="text-6xl md:text-7xl xl:text-8xl font-extrabold">
                                    {{ volunteerTotalHours }}
                                </span>
                            </div>

                            <!-- Number of charitable organizations in the U.S. who benefited from volunteer time as part of U.S. Penn Petro Energy Humankind -->
                            <div class="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-(--medium-blue) w-full mx-auto h-full">
                                <p class="text-xl text-center">
                                    Number of charitable organizations in the U.S. who benefited from volunteer time as part of U.S. Penn Petro Energy Humankind
                                </p>
                                <span class="text-6xl md:text-7xl xl:text-8xl font-extrabold">
                                    {{ volunteerTotalHours }}
                                </span>
                            </div>


                            
                        </div>

                    </div>
                </div>

            </div>

        </section>

        <!-- Latest on our culture -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--white) w-full max-w-7xl mx-auto h-full">
                
                <div class="grid gap-32 w-full mx-auto">

                    <div class="flex flex-col gap-8">
            
                        <h2 class="text-(--dark-blue) text-5xl md:text-7xl text-center text-wrap font-extrabold">
                            Latest on our culture
                        </h2>

                        <p class="text-(--black) text-center text-xl">
                            Read how our employees are making an impact around the world.
                        </p>

                    </div>

                    <div class="flex flex-col gap-8">
            
                        <p class="text-(--dark-blue) text-center font-bold text-2xl">newsroom</p>

                        <h2 class="text-(--dark-blue) text-center font-extrabold text-3xl lg:text-5xl">
                            People and community
                        </h2>

                        <div class="flex flex-col items-center gap-12 w-full">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full *:hover:scale-102 *:duration-300 *:ease-in-out *:transition-all">
                                <!-- Prev item -->
                                <div ref="prevRef">
                                    <HomeNewsComp
                                        v-if="whoNewsroom.length > 1"
                                        :key="whoNewsroom[prevIndex].id"
                                        v-bind="whoNewsroom[prevIndex]"
                                        class="hidden md:block scale-95 opacity-85 cursor-pointer"
                                        @click="goTo(prevIndex)"
                                    />
                                </div>

                                <!-- Active item -->
                                <div ref="activeRef">
                                    <HomeNewsComp
                                        :key="whoNewsroom[activeIndex].id"
                                        v-bind="whoNewsroom[activeIndex]"  
                                        class="w-full scale-100 z-10"
                                    />
                                </div>

                                <!-- Next item -->
                                <div ref="nextRef">
                                    <HomeNewsComp
                                        v-if="whoNewsroom.length > 2"
                                        :key="whoNewsroom[nextIndex].id"
                                        v-bind="whoNewsroom[nextIndex]"
                                        class="hidden md:block scale-95 opacity-85 cursor-pointer"
                                        @click="goTo(nextIndex)"
                                    />
                                </div>
                            </div>

                            <!-- Navigation -->
                            <div class="flex items-center justify-center gap-4">
                                <button 
                                    @click="prevSlide"
                                    class="nav-btn"
                                >
                                    <Icon name="mdi:arrow-left" />
                                </button>

                                <!-- Pagination -->
                                <div class="flex gap-2">
                                    <button
                                        v-for="(item, i) in whoNewsroom"
                                        :key="item.id"
                                        class="pagination-dot"
                                        :class="{ 'active-dot': i === activeIndex }"
                                        @click="goTo(i)"
                                    />
                                </div>

                                <button 
                                    @click="nextSlide" 
                                    class="nav-btn"
                                >
                                    <Icon name="mdi:arrow-right" />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    </div>
</template>

<style lang="css" scoped>

    .image-slider {
        position: relative;
        width: 100%;
        background-size: cover;
        background-position: center;
        animation: slideAnimation 12s infinite;
    }

    /* Define the keyframes for the animation */
    @keyframes slideAnimation {
        0% {
            background-image: url('https://images.pexels.com/photos/7414274/pexels-photo-7414274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
        33% {
            background-image: url('https://images.pexels.com/photos/7414049/pexels-photo-7414049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
        66% {
            background-image: url('https://images.pexels.com/photos/7414273/pexels-photo-7414273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
        100% {
            background-image: url('https://images.pexels.com/photos/7414274/pexels-photo-7414274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
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

    .whoNewroom {
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
    .whoNewroom.active {
        transform-origin: center;
    }

    .nav-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border: 2px solid var(--black);
        border-radius: 50%;
        color: var(--black);
        background-color: transparent;
        transition: all 0.5s ease-in-out;
    }

    .nav-btn:hover {
        color: var(--white);
        background-color: var(--black);
        opacity: 0.8;
        cursor: pointer;
    }

    .pagination-dot {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: gray;
        transition: all 0.5s ease-in-out;
    }
    .pagination-dot:hover {
        cursor: pointer;
        opacity: 0.8;
    }
    .pagination-dot.active-dot {
        background-color: blue;
    }

</style>



