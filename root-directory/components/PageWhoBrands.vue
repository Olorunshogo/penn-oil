    
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

    definePageMeta({
        layout: 'custom'
    });

    useHead({
        title: 'Our Brands',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });

</script>


<template>
    <div>
        <!-- Section: Hero -->
        <section>        
            
            <div class="relative w-full h-full overflow-hidden -mt-[11rem] py-(--section-pyx) lg:py-(--section-py-lg)">

                <!-- Image Slider Container -->
                <div class="image-slider h-[950px]"></div>         

                <!-- Content -->
                <div class="grid w-full h-fit pb-4 bg-(--white) absolute bottom-0 px-4">
                    <div class="flex flex-col py-8 gap-8 items-center justify-center w-full max-w-5xl mx-auto h-fit">

                        <h1 
                            class="text-5xl md:text-8xl xl:text-9xl bg-clip-text text-center text-transparent font-extrabold bg-gradient-to-r from-(--light-blue) to-(--dark-blue)" 
                        >
                            Our brands
                        </h1>

                        <p class="text-xl lg:text-2xl text-center text-[color:var(--black)]">
                            Whether we’re fueling cars or advancing the energy system of tomorrow, Penn Petro Energy’s brands set the standard for excellence. 
                            With a rich history dating back over a century, Penn Petro Energy’s family of brands has built trust and recognition worldwide.
                        </p>
                        
                        
                    </div>
                    
                    <div class="grid gap-4 max-w-lg w-full mx-auto h-full">
                        <div class="grid grid-cols-3 gap-4">
                            <NuxtImg
                                src="../public/images/Logo/Texaco_logo.png"
                                alt="Texaco Logo's Logo"
                                loading="lazy"
                                class="object-cover w-full h-16 lg:h-24"
                            />
                            <NuxtImg
                                src="../public/images/Logo/Full_Penn_Petro_Energy_Logo_transparent_bg.png"
                                alt="Full Penn Petro Energy's Logo"
                                loading="lazy"
                                class="object-cover w-full h-16 lg:h-24"
                            />
                            <NuxtImg
                                src="../public/images/Logo/Caltext_logo.png"
                                alt="Caltext Logo"
                                loading="lazy"
                                class="object-cover w-full h-16 lg:h-24"
                            />
                        </div>
                        <p class="text-bold text-xl text-center text-(--dark-gray)">Penn Petro Energy's Family of Brands</p>
                    </div>

                </div> 
            </div>
        </section>

        <!-- Section: Penn Petro Energy, Texaco, Caltex -->
        <section>
            <div class="grid w-full h-full overflow-hidden py-(--section-py) lg:py-(--section-py-lg)">
                <!-- Penn Petro Energy -->
                <div class="grid bg-(--dark-blue) w-full h-full py-32">
                    <div class="flex flex-col lg:flex-row-reverse *:w-full *:lg:w-1/2 gap-8 w-full max-w-xl lg:max-w-7xl mx-auto h-full">
                        <NuxtImg
                            src="https://images.pexels.com/photos/7414108/pexels-photo-7414108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Co-workers having a meeting"
                            loading="lazy"
                            class="block w-full obeject-cover rounded-2xl h-120"
                        />

                        <div class="flex flex-col justify-center items-center h-full lg: w-full rounded-b-2xl lg:rounded-r-2xl">                        
                            
                            <div class="flex flex-col justify-center px-8 lg:p-8 gap-2 max-w-2xl h-full lg:h-fit">
                                <h3 class="text-2xl text-left text-(--white)">
                                    Penn Petro Energy
                                </h3>

                                <p class="text-(--white) text-xl">
                                    Quality and reliability drive customers to Penn Petro Energy. 
                                    Innovative and forward looking, our high quality fuel and customer experience mean Penn Petro Energy is trusted by our customers
                                </p>

                                <!-- Learn about our Penn Petro Energy with Techron -->
                                <NuxtLink 
                                    to="/who/culture"
                                    class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-fit font-bold text-(--white) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                    <!-- <span class="text-lg">Learn more about Penn Petro Energy with techron</span> -->
                                    <span class="group-hover:underline-text text-lg">Learn more about techron</span>
                                </NuxtLink>

                                <!-- Find a Penn Petro Energy service station -->
                                <NuxtLink 
                                    to="/who/brands"
                                    class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-fit font-bold text-(--white) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                    <!-- <span> Find a Penn Petro Energy service station </span> -->
                                    <span class="group-hover:underline-text text-lg">Find a service station </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            
                <!-- Texaco -->
                <div class="grid bg-(--dark-red) w-full h-full py-32">
                    <div class="flex flex-col lg:flex-row-reverse *:w-full *:lg:w-1/2 gap-8 w-full max-w-xl lg:max-w-7xl mx-auto h-full">
                        <NuxtImg
                            src="https://images.pexels.com/photos/7293293/pexels-photo-7293293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Truck in Texaco Station"
                            loading="lazy"
                            class="block w-full obeject-cover rounded-2xl h-120"
                        />

                        <div class="flex flex-col justify-center items-center h-full lg: w-full rounded-b-2xl lg:rounded-r-2xl">                        
                            
                            <div class="flex flex-col justify-center px-8 lg:p-8 gap-2 max-w-2xl h-full lg:h-fit">
                                <h3 class="text-2xl text-left text-(--white)">
                                    Texaco
                                </h3>

                                <p class="text-(--white) text-xl">
                                    The Texaco star stands for more than a century of quality fuels and lubricants. 
                                    A global icon with a powerful presence in the United States and Europe, Texaco delivers the high performance and customer satisfaction drivers trust.
                                </p>

                                <!-- Learn more about texaco -->
                                <NuxtLink 
                                    to="https://www.texaco.com/"
                                    target="_blank"
                                    class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-fit font-bold text-(--white) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                    <!-- <span class="text-lg">Learn more about Penn Petro Energy with techron</span> -->
                                    <span class="group-hover:underline-text text-lg">Learn more about texaco</span>
                                </NuxtLink>

                                <!-- Find a texaco service station -->
                                <NuxtLink 
                                    to="https://www.texaco.com/#find-station"
                                    target="_blank"
                                    class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-fit font-bold text-(--white) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                    <!-- <span> Find a Penn Petro Energy service station </span> -->
                                    <span class="group-hover:underline-text text-lg">Find a texaco service station </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CalTex -->
                <div class="grid bg-(--dark-purple) w-full h-full py-32">
                    <div class="flex flex-col lg:flex-row-reverse *:w-full *:lg:w-1/2 gap-8 w-full max-w-xl lg:max-w-7xl mx-auto h-full">
                        <NuxtImg
                            src="https://images.pexels.com/photos/3396669/pexels-photo-3396669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Red Caltex Gas Station during Golden Hour"
                            loading="lazy"
                            class="block w-full obeject-cover rounded-2xl h-120"
                        />

                        <div class="flex flex-col justify-center items-center h-full lg: w-full rounded-b-2xl lg:rounded-r-2xl">                        
                            
                            <div class="flex flex-col justify-center px-8 lg:p-8 gap-2 max-w-2xl h-full lg:h-fit">
                                <h3 class="text-2xl text-left text-(--white)">
                                    Caltex
                                </h3>

                                <p class="text-(--white) text-xl">
                                    For more than 70 years, Caltex has symbolized uncompromising products and services. 
                                    Quality fuels and lubricants and a pedigree in technology set Caltex apart.
                                </p>

                                <!-- Learn more about Caltext -->
                                <NuxtLink 
                                    to="https://www.caltex.com/sg/"
                                    target="_blank"
                                    class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-fit font-bold text-(--white) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                    <span class="group-hover:underline-text text-lg">Learn more about caltex</span>
                                </NuxtLink>

                                <!-- Find a caltex service station -->
                                <NuxtLink 
                                    to="https://www.caltex.com/sg/find-a-caltex-station.html"
                                    target="_blank"
                                    class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-fit font-bold text-(--white) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                    <span class="group-hover:underline-text text-lg">Find a caltex service station </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Gift and credit cards -->
                <div class="grid bg-(--white) w-full h-full py-32">
                    <div class="flex flex-col lg:flex-row-reverse *:w-full *:lg:w-1/2 gap-8 w-full max-w-xl lg:max-w-7xl mx-auto h-full">
                        <NuxtImg
                            src="https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Master Card Debit Card"
                            loading="lazy"
                            class="block w-full obeject-cover rounded-2xl h-120"
                        />

                        <div class="flex flex-col justify-center items-center h-full lg: w-full rounded-b-2xl lg:rounded-r-2xl">                        
                            
                            <div class="flex flex-col items-center justify-center px-8 lg:p-8 gap-2 max-w-2xl h-full lg:h-fit">
                                <h3 class="text-4xl font-extrabold text-(--dark-blue)">
                                    Gift and credit cards
                                </h3>

                                <p class="text-(--black) text-xl">
                                    Wherever you’re headed, it pays to have a Penn Petro Energy card. 
                                    Feel confident on your travels when you keep our gift cards and personal and business credit cards by your side.
                                </p>

                                <!-- Find a caltex service station -->
                                <NuxtLink 
                                    to="https://www.caltex.com/sg/find-a-caltex-station.html"
                                    target="_blank"
                                    class="group flex *:flex items-center *:items-center py-3 gap-4 w-fit h-fit font-bold text-(--black) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                    <span class="group-hover:underline-text text-lg">Find a caltex service station </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <!-- Section: Affordable, reliable, ever-cleaner energy -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-purple) w-full h-full">
                
                <div class="grid w-full full py-32 max-w-6xl mx-auto">
                
                    <div class="grid grid-cols-1 gap-16">
                        <div class="flex flex-col items-center justify-center gap-6 lg:gap-12 max-w-3xl mx-auto">
                        
                            <h2 class="text-(--white) text-center font-extrabold text-4xl lg:text-8xl text-wrap cursor-text">
                                Affordable, reliable, ever-cleaner energy
                            </h2>

                            <p class="text-(--white) text-center text-lg lg:text-xl text-wrap">
                                We work every day to provide energy that helps billions of people achieve the benefits of modern life. And to create solutions that will help advance a lower carbon future.
                            </p>

                            <!-- See our solutions link -->
                            <NuxtLink 
                                to="/"
                                class="group flex *:flex items-center *:items-center justify-center px-8 py-2 gap-4 w-fit h-12 mx-auto text-(--white) hover:text-(--black) bg-transparent hover:bg-(--medium-purple) shadow-lg rounded-lg border-2 border-(--medium-purple) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="font-semibold text-lg">see our solutions</span>
                            </NuxtLink>

                        </div>

                        <!-- Images -->
                        <div class="grid grid-cols-1 gap-12">

                            <!-- Show these images on all devices -->
                            <div class="flex *:flex items-center *:items-center justify-center *:justify-center flex-col lg:flex-row gap-8 h-full">
                            
                                <div class="flex w-full lg:w-7/10 *:w-1/2 gap-6">
                                    <NuxtImg
                                        src="https://images.pexels.com/photos/2183113/pexels-photo-2183113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Reflection of Building on Water"
                                        loading="lazy"
                                        class="w-full h-7/10 lg:h-full mt-auto lg:mt-0 object-cover rounded-lg"
                                    />

                                    <div class="flex flex-col items-center justify-center gap-4 w-full h-full">
                                        <NuxtImg
                                            src="https://images.pexels.com/photos/185039/pexels-photo-185039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Grayscale Photo of Metal Building"
                                            loading="lazy"
                                            class="w-4/5 mr-auto h-fit object-cover rounded-lg"
                                        />

                                        <NuxtImg
                                            src="https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Red and Gray Industrial Machinery"
                                            loading="lazy"
                                            class="w-4/5 ml-auto h-fit object-cover rounded-lg"
                                        />
                                    </div>   
                                </div>               
                                
                                
                                <NuxtImg
                                    src="https://images.pexels.com/photos/9889058/pexels-photo-9889058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Power Plant during Dusk"
                                    loading="lazy"
                                    class="h-full max-h-80 lg:max-h-7/10 w-9/10 lg:w-1/3 mx-auto object-cover rounded-lg"
                                />
                            </div>

                            <!-- Show these images at lg: -->
                            <div class="hidden lg:flex flex-row *:flex items-center *:items-center justify-center *:justify-center gap-8">
                            
                                <NuxtImg
                                    src="https://images.pexels.com/photos/9889058/pexels-photo-9889058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Power Plant during Dusk"
                                    loading="lazy"
                                    class="h-full max-h-7/10 w-4/10 object-cover rounded-lg"
                                />

                                <div class="flex flex-col items-center justify-center w-9/10 gap-6">                        

                                    <div class="flex items-center justify-center gap-4 w-full h-full">
                                        <NuxtImg
                                            src="https://images.pexels.com/photos/185039/pexels-photo-185039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Grayscale Photo of Metal Building"
                                            loading="lazy"
                                            class="w-3/5 h-60 mt-auto object-cover rounded-lg"
                                        />

                                        <NuxtImg
                                            src="https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Red and Gray Industrial Machinery"
                                            loading="lazy"
                                            class="w-2/5 h-80 object-cover rounded-lg"
                                        />
                                    </div> 

                                    <NuxtImg
                                        src="https://images.pexels.com/photos/2183113/pexels-photo-2183113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Reflection of Building on Water"
                                        loading="lazy"
                                        class="w-3/5 ml-auto h-90 object-cover rounded-lg"
                                    />  
                                </div>              
                                
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




