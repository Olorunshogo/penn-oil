
<script setup lang='ts'>
    import { lowerCarbonH2, isFixed } from '~/stores/homeWhat';
</script>

<template>
    <section>
        <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--light-gray) w-full h-full">
            
            <div class="grid gap-32 w-full max-w-6xl mx-auto">
            
                <div class="grid grid-cols-1 gap-16">
                    <div class="flex flex-col items-center justify-center gap-6 lg:gap-12 max-w-3xl mx-auto">
                    
                        <p class="text-(--dark-blue) text-center font-bold text-2xl cursor-text">what we do</p>

                        <h2 class="text-(--dark-blue) text-center font-extrabold text-5xl lg:text-8xl text-wrap cursor-text">
                            Energy that fuels the world
                        </h2>

                        <p class="text-(--black) text-center text-lg lg:text-xl text-wrap">
                            We’re working to deliver the energy needed today. 
                            To lower the carbon intensity of our operations. 
                            And to build the lower carbon energy system of tomorrow.
                        </p>

                        <!-- See our solutions link -->
                        <NuxtLink 
                            to="/"
                            class="group flex *:flex items-center *:items-center justify-center px-8 py-3 gap-4 w-fit h-16 mx-auto text-(--black) hover:text-(--white) bg-transparent hover:bg-(--medium-blue) shadow-lg rounded-lg border-3 border-(--medium-blue) duration-300 ease-in-out transition-all"
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

                <div class="relative grid gap-16">
                    <!-- <HomeWhatLower 
                        ref="lowerCarbonH2"
                        :is-fixed="isFixed"
                        class="flex items-center justify-center"
                    /> -->
                    <HomeWhatLower class="z-10" />

                    <div class="flex flex-col lg:flex-row-reverse gap-8 w-full py-16 md:py-24 px-4 md:px-8 bg-(--dark-green) rounded-lg shadow-lg z-0"> 
                        
                        <div class="lg:w-1/2">
                            <NuxtImg
                                src="https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="caprock seal"
                                loading="lazy"
                                class="flex items-center justify-center w-full h-full mx-auto sm:hidden lg:flex lg:justify-start lg:w-4/5 lg:mx-0 lg:mr-auto rounded-2xl"
                            />
                        </div>
                        
                        <div class="flex flex-col lg:w-1/2 gap-8 pt-16 ">

                            <h3 class="text-5xl sm:text-6xl lg:text-7xl text-wrap text-(--medium-green) font-extrabold">
                                Carbon capture and storage
                            </h3>

                            <p class="text-(--white) text-lg lg:text-xl text-wrap font-normal lg:font-medium">
                                Chevron is working to develop and deploy CCUS technologies in locations across the globe.
                            </p>

                            <!-- Learn about CCS -->
                            <NuxtLink 
                                to="/"
                                class="group flex *:flex items-center *:items-center px-8 py-3 gap-4 w-fit h-14 text-(--white) hover:text-(--black) bg-transparent hover:bg-(--medium-green) shadow-lg rounded-lg border-3 border-(--light-green) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="font-semibold text-lg">Learn about CCS</span>
                            </NuxtLink>
                        </div>

                    </div> 
                </div>
            
            </div>

             

            

        </div>

    </section>
</template>

<style lang="css" scoped>

</style>