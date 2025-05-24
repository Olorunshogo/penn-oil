
<script setup lang='ts'>
    
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
                            to="/what/overview"
                            class="group flex *:flex items-center *:items-center justify-center px-4 lg:px-8 py-2 gap-4 w-fit mx-auto text-(--black) hover:text-(--white) bg-transparent hover:bg-(--medium-blue) shadow-lg rounded-lg border-1 border-(--medium-blue) duration-300 ease-in-out transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>

                            <span class="font-semibold text-base">See our solutions</span>
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

                <!-- Building a Cleaner Tomorrow -->
                <div class="relative grid gap-16">
                    <h2 class="font-extrabold text-center text-(--dark-teal) text-5xl sm:text-6xl lg:text-8xl py-10">
                        Building a Cleaner Tomorrow
                    </h2>

                    <div class="flex flex-col lg:flex-row gap-8 w-full py-12 px-6 md:px-12 bg-(--dark-teal) rounded-3xl shadow-xl">
                        
                        <!-- Image Section -->
                        <div class="lg:w-1/2 flex justify-center items-center">
                            <NuxtImg 
                                src="https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt="Sustainable geological layers for carbon storage" 
                                class="rounded-2xl w-full h-auto max-w-lg shadow-lg"
                                loading="lazy"
                            />
                        </div>

                        <!-- Content Section -->
                        <div class="flex flex-col lg:w-1/2 justify-center gap-8">
                            <h3 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-(--light-teal) leading-tight">
                                Clean Energy, Captured Future
                            </h3>

                            <p class="text-(--white) text-lg lg:text-xl font-light leading-relaxed">
                                Pennpetro Energy PLC is leading the way in sustainability with advanced carbon capture and storage (CCS) technology—turning emissions into a thing of the past.
                            </p>

                            <!-- CTA Button -->
                            <NuxtLink 
                                to="/what/energy"
                                class="group flex *:flex items-center *:items-center px-4 lg:px-8 py-2 gap-4 w-fit text-(--white) hover:text-(--black) bg-transparent hover:bg-(--light-blue) shadow-lg rounded-lg border-1 border-(--light-blue) duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center text-xl w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>

                                <span class="font-semibold text-base">Learn about CCS</span>
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