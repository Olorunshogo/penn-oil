
<script setup lang='ts'>

    import { 
        criticalThinkers, collaborators, innovators, 
        handleScroll
    } from '../stores/homeWho';

    const typingProps = ref([
        { 
            id: 1, 
            originalText: 'We believe that humanity can solve any challenge. That our greatest resource is our people. and that responsibility, trust and integrity will help us drive a prosperous future.',
            newText: 'We believe that humanity can solve any challenge. That our greatest resource is our people. and that responsibility, trust and integrity will help us drive a prosperous future.',
            originalTex: 'We believe that humanity can solve any challenge.'
        }
    ]);


    onMounted(() => {
        // Add scroll event listener when component is mounted
        window.addEventListener('scroll', handleScroll);
    });
    
</script>

<template>
    <section>
        <div class="px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--dark-blue)/90 w-full h-full overflow-hidden">
            
            <div class="flex flex-col gap-30 lg:gap-50 w-full max-w-6xl mx-auto">

                <ClientOnly>  
                    <p 
                        data-aos="fade-up"
                        class="text-(--white) text-center font-bold text-2xl cursor-text"
                    >
                        who we are
                    </p>
                </ClientOnly>

                <ClientOnly>
                    <h2 
                        data-aos="fade-up"
                        class="flex flex-col space-y-6 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl whitespace-nowrap cursor-text w-full h-full overflow-hidden"
                    >
                        <span 
                            ref="criticalThinkers" 
                            class="inline-block text-(--light-blue) duration-500 ease-out transition-transform"
                        >
                            Critical Thinkers
                        </span>

                        <span 
                            ref="collaborators" 
                            class="slide-text ml-auto text-(--medium-blue) duration-500 ease-out transition-transform"
                        >
                            Collaborators
                        </span>

                        <span 
                            ref="innovators" 
                            class="slide-text text-(--dark-blue) duration-500 ease-out transition-transform"
                        >
                            Innovators
                        </span>

                    </h2>
                </ClientOnly>

                <!-- Images -->
                <ClientOnly>
                    <div 
                        data-aos="fade-left" data-aos-delay="200"
                        class="flex *:flex flex-col items-center gap-12 *:items-center justify-center *:justify-center w-full h-full"
                    >
                    
                        <NuxtImg
                            data-aos="zoom-in" data-aos-delay="1000"
                            src="https://images.pexels.com/photos/13963338/pexels-photo-13963338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Construction Workers on a Scaffolding"
                            loading="lazy"
                            class="h-full max-h-60 lg:max-h-80 w-9/10 sm:w-7/10 ml-auto object-cover rounded-lg"
                        />                        
                            

                        <div class="flex flex-col items-center justify-center gap-4 w-full h-full">
                            <NuxtImg
                                src="https://images.pexels.com/photos/8961131/pexels-photo-8961131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="A Man in Blue Shirt Using a Walkie Talkie while Standing Beside the Woman Near the Wooden Fence"
                                loading="lazy"
                                class="w-4/5 sm:w-2/5 lg:w-4/10 h-full max-h-40 lg:max-h-60 mr-auto object-cover rounded-lg"
                            /> 

                            <NuxtImg
                                src="https://images.pexels.com/photos/8487337/pexels-photo-8487337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Handywoman Pointing up"
                                loading="lazy"
                                class="w-4/5 sm:w-2/5 lg:w-4/10 h-full max-h-40 lg:max-h-60 ml-auto object-cover rounded-lg"
                            />
                        </div>      
                    </div> 
                </ClientOnly>
                                  
            
                <!-- Typing Texts -->
                <div 
                    data-aos="fade-left" data-aos-delay="200"
                >
                    <TypingEffect 
                        v-for="typingProp in typingProps"
                        :key="typingProp.id"
                        :originalText="typingProp.originalText"
                        :originalTex="typingProp.originalTex"
                        :newText="typingProp.newText"
                    />   
                </div>             

                <!-- Discover who we are -->
                <NuxtLink 
                    to="/who/overview"
                    class="group flex *:flex items-center *:items-center justify-center px-4 lg:px-8 py-2 gap-4 w-fit mx-auto text-(--white) hover:text-(--black) bg-transparent hover:bg-(--light-blue) shadow-lg rounded-lg border-1 border-(--light-blue) duration-300 ease-in-out transition-all"
                >
                    <div class="group relative flex items-center justify-center text-xl w-8 h-full overflow-hidden">
                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                            <Icon name="mdi:arrow-right"/>
                        </div>
                        
                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                            <Icon name="mdi:arrow-right" />
                        </div>
                    </div>

                    <span class="font-semibold text-base">Discover who we are</span>
                </NuxtLink>

                
                
            </div>

        </div>

    </section>
</template>

<style lang="css" scoped>

    .slide-text {
        display: inline-block;
        transition: transform 0.5s ease-out;
    }

</style>