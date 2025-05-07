      
<script setup lang='ts'>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Who We Are Leadership',
        titleTemplate: '%s | Penn Petro Energy PLC'
    });

    definePageMeta({
        layout: 'custom'
    });

</script>


<template>
<div>
<!-- Section: PageWhoLeadership -->
<section>
    <div class="grid bg-(--white) gap-12 w-full h-full overflow-hidden py-(--section-py) lg:py-(--section-py-lg)">
        
        <div class="flex flex-col gap-4 items-center justify-center py-12 max-w-4xl mx-auto">
            <h2 class="text-(--dark-blue) text-center font-bold text-4xl lg:text-7xl">
                Page Who Leadership
            </h2>
            
        </div>                

        <HomeNewsroom />


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
