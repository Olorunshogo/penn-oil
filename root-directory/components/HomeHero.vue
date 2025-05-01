
<script setup lang='ts'>

    // import slide1 from '../public/images/heroSlides/slide1.jpg';
    // import slide2 from '../public/images/heroSlides/slide2.jpg';
    // import slide3 from '../public/images/heroSlides/slide3.jpg';
    // import slide4 from '../public/images/heroSlides/slide4.jpg';
    import slide5 from '../public/images/heroSlides/slide5.jpg';
    import slide6 from '../public/images/heroSlides/slide6.png';

    const imageUrls = [
        slide5, slide6
    ]

    // const imageUrls = [
    //     slide1, slide2, slide3, slide4, slide5, slide6
    // ]
    
</script>

<template>
    <section>
        
        <div class="relative w-full h-full overflow-hidden">
            <HomeHeroBgslider :images="imageUrls" />          
        </div>

    </section>
</template>

<style lang="css" scoped>

    .bg-video.active {
        opacity: 1;
        z-index: 1;
    }

    /* Fade */
    .fade {
        transition: opacity 1s ease-in-out;
    }

    /* Slide Left */
    .slide-left {
        transform: translateX(-100px);
    }

    /* Zoom */
    .zoom {
        transform: scale(1.2);
    }

</style>