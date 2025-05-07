      
<script setup lang='ts'>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Contact Us',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });

    definePageMeta({
        layout: 'custom'
    });

</script>


<template>
<div>
    <!-- Section: PageContact -->
    <section>
        <div class="grid bg-(--white) gap-12 w-full h-full overflow-hidden py-(--section-py) lg:py-(--section-py-lg)">
            
            <div class="flex flex-col gap-12 items-center justify-center max-w-4xl mx-auto">
                <div class="flex flex-col gap-4 items-center justify-center py-12 w-full mx-auto">
                    <h2 class="text-(--dark-blue) text-center font-bold text-4xl lg:text-7xl">
                        Contact Us
                    </h2>
                    <p class="text-(--black) text-lg">Thank you for reaching out to us...</p>                
                </div>  

                <div class="flex flex-col gap-4 items-center justify-center w-full mx-auto">
                    <h3 class="text-(--dark-blue) text-centern text-wrap font-bold text-xl">
                        Penn Petro Energy headquarters
                    </h3>

                    <p class="text-(--black) text-lg text-center">
                        1400 Smith Street <br>
                        Houston, TX 77002, USA <br>
                        Telephone: 
                            <NuxtLink
                                to="tel:+18328541000" target="_blank"
                                class="text-(--medium-blue) hover:underline decoration-1 underline-offset-2 decoration-(--medium-blue) hover:cursor-pointer ease-in-out duration-300 transition-all"
                            >
                                +1 832.854.1000
                            </NuxtLink>
                    </p> 
                </div>

                <!-- Social links -->
                <div class="flex items-center flex-wrap gap-4 *:flex *:items-center *:text-xl *:lg:text-3xl *:ease-in-out *:duration-500 *:transition-all">

                    <!-- Facebook -->
                    <NuxtLink
                        to="/"
                        class="hover:text-(--dark-blue)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                                <path stroke-dasharray="24" stroke-dashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/>
                                </path>
                                <path stroke-dasharray="8" stroke-dashoffset="8" d="M8 12h7">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"/>
                                </path>
                            </g>
                        </svg>
                    </NuxtLink>

                    <!-- X -->
                    <NuxtLink
                        to="/"
                        class="hover:text-(--medium-blue)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="currentColor"><path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
                                <animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"/></path>
                                <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
                                    <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"/>
                                </path>
                                <path d="M18.5 2h3.5L22 2h-3.5z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"/></path>
                            </g>
                        </svg>
                    </NuxtLink>

                    <!-- Instagram -->
                    <NuxtLink
                        to="/"
                        class="hover:text-(--medium-red)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0">
                                <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"/>
                            </circle>
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/>
                                </path>
                                <path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"/>
                                </path>
                            </g>
                        </svg>
                    </NuxtLink>

                    <!-- TikTok -->
                    <NuxtLink
                        to="/"
                        class="hover:text-(--light-red)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <mask id="lineMdTiktok0">
                                <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path fill="#fff" stroke="none" d="M16.6 5.82c-0.68 -0.78 -1.06 -1.78 -1.06 -2.82h-3.09v12.4c-0.02 0.67 -0.31 1.31 -0.79 1.77c-0.48 0.47 -1.13 0.73 -1.8 0.73c-1.42 0 -2.6 -1.16 -2.6 -2.6c0 -1.72 1.66 -3.01 3.37 -2.48v-3.16c-3.45 -0.46 -6.47 2.22 -6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69 -2.55 5.69 -5.7v-6.29c1.25 0.9 2.76 1.38 4.3 1.38v-3.09c0 0 -1.88 0.09 -3.24 -1.48Z"/>
                                    <path stroke="#000" stroke-dasharray="36" stroke-dashoffset="72" stroke-width="4" d="M11 11h-1c-2.21 0 -4.5 1.79 -4.5 4c0 2.21 1.5 4.5 4.5 4.5c2.21 0 4 -2.29 4 -4.5v-12.5">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;36"/>
                                    </path>
                                    <path stroke="#000" stroke-dasharray="10" stroke-dashoffset="20" stroke-width="4" d="M18 2.5v8">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.1s" values="20;10"/>
                                    </path>
                                </g>
                            </mask>
                            <rect width="24" height="24" fill="currentColor" mask="url(#lineMdTiktok0)"/>
                        </svg>
                    </NuxtLink>

                    <!-- YouTube -->
                    <NuxtLink
                        to="/"
                        class="hover:text-(--dark-red)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-opacity="0" d="M12 11L12 12L12 13z">
                                <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"/>
                                    <set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"/>
                            </path>
                            <path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z">
                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
                            </path>
                        </svg>
                    </NuxtLink>

                    <!-- LinkedIn -->
                    <NuxtLink
                        to="/"
                        class="hover:text-(--light-blue)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0">
                                <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1"/>
                            </circle>
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                                <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0"/>
                                </path>
                                <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0"/>
                                </path>
                                <path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0"/>
                                </path>
                            </g>
                        </svg>
                    </NuxtLink>


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
