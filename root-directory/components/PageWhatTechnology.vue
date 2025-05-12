      
<script setup lang='ts'>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'What We Do',
        titleTemplate: '%s | Penn Petro Energy'
    });
    definePageMeta({
        layout: 'custom'
    })

</script>


<template>
    <div>
        <!-- Section: Hero -->
        <section>     
            <div class="relative w-full h-full overflow-hidden -mt-[11rem]">

                <!-- Image Container -->
                <NuxtImg
                    src="https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Black Prosthetic Arm"
                    loading="lazy"
                    class="relative h-dvh w-full object-cover z-0"
                />
                

                <!-- Content -->
                <div class="grid gap-4 bg-(--white) w-full absolute bottom-0 h-1/3 lg:h-2/5 max-h-[500px]">
                    <div class="flex flex-col items-center justify-center w-full max-w-7xl mx-auto h-full gap-2">
                        <span class="text-xl font-extrabold text-(--dark-blue) mx-auto">What we do</span>
                        <h1 
                            class="text-5xl md:text-8xl xl:text-9xl text-center font-extrabold bg-clip-text text-transparent" 
                            style="background-image: url('https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); background-size: cover;"
                        >
                            Technology and innovation
                        </h1>
                        
                        <p class="text-xl lg:text-2xl text-center text-(--black)">
                            Accelerating progress to power our world today and build the lower carbon energy system of the future.
                        </p>
                    </div>
                </div> 

            </div>
        </section>

        <!-- Images  -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--light-gray) w-full h-full">

                <!-- Images -->
                <div class="grid grid-cols-1 lg:flex items-center gap-12">
                        
                    <div class="flex flex-col lg:flex-row gap-8 h-full w-full *:w-4/5 *:lg:w-1/2">
                        <NuxtImg
                            src="https://images.pexels.com/photos/30913847/pexels-photo-30913847/free-photo-of-indoor-artistic-scene-with-calligraphy-and-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Indoor Artistic Scene with Calligraphy and Cat"
                            loading="lazy"
                            class="w-4/5 mx-auto lg:mx-0 h-90 lg:h-120 object-cover rounded-lg"
                        />

                        <div class="flex flex-col items-center justify-center gap-4 w-full h-full">
                            <NuxtImg
                                src="https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Photography of Woman Using Ipad"
                                loading="lazy"
                                class="w-3/5 mr-auto h-60 object-cover rounded-lg"
                            />

                            <NuxtImg
                                src="https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Iphone 6, Earpods and Macbook on Flat-lay Photography"
                                loading="lazy"
                                class="w-3/5 ml-auto h-60 object-cover rounded-lg"
                            />
                        </div>   
                    </div>               
                    
                    
                    <NuxtImg
                        src="https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Software Engineers Working on Computers"
                        loading="lazy"
                        class="w-4/5 mx-auto lg:mx-0 h-90 lg:h-120 object-cover rounded-lg"
                    />
                </div>                   
           
            </div>

        </section>

        <!-- Energy for our growing world relies on technology -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-teal) w-full h-full">
                
                <div class="flex flex-col gap-8 py-16 ">
                    <h2 class="font-extrabold text-center text-(--light-teal) text-5xl lg:text-8xl py-8 lg:py-12">
                        Energy for our growing world relies on technology
                    </h2>

                    <p class="text-(--white) text-xl text-center font-medium">
                        We aim to scale affordable, innovative technology solutions to help support a resilient energy system. <br>
                        We believe multiple solutions are needed to meet growing energy demands in lower carbon ways. <br>
                        And that innovation, sparked by collaboration, can accelerate progress.
                    </p>
                </div>           
            </div>

        </section>

        <!-- Section: Powered by human ingenuity -->
        <section>
            <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--white) w-full max-w-7xl mx-auto h-full">
                
                <div class="grid gap-32 w-full mx-auto">

                    <div class="flex flex-col gap-8">
            
                        <h2 class="text-(--dark-blue) text-5xl md:text-7xl text-center text-wrap font-extrabold">
                            Powered by human ingenuity
                        </h2>

                        <p class="text-(--black) text-center text-xl">
                            Penn Petro Energy has been innovating to help solve energy challenges for decades. 
                            And we believe in the power of human ingenuity to accelerate progress.
                        </p>

                    </div>

                    <div class="flex flex-col gap-8">

                        <HomeNewsroom
                            category="people and community" 
                            title="Meet our innovators" 
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
