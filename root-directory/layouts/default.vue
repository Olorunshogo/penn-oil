
<script lang="ts" setup>
  import { ref, onMounted, onBeforeMount } from 'vue';
  import { useSeoMeta, useHead } from 'nuxt/app';
  
  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/Logo/Logo_transparent_bg.png'
      }
    ]
  });

  useSeoMeta({
    title: 'Penn Petro Energy PLC - Human Energy | https://vercel.com/bom-projects/pen-oil.com',
    ogTitle: 'Penn Petro Energy Corporation - Leading Energy Solutions',
    description: 'Penn Petro Energy is one of the world’s leading integrated energy companies. Explore how we safely and responsibly develop energy that improves lives and powers the world forward.',
    ogDescription: 'Penn Petro Energy develops and delivers affordable, reliable, and ever-cleaner energy. Learn about our commitment to innovation, sustainability, and global energy leadership.',
    ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
    ogImageAlt: 'Penn Petro Energy oil refinery and clean energy infrastructure.',
    ogUrl: 'https://vercel.com/bom-projects/pen-oil',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Penn Petro Energy PLC - Energy for a Better Tomorrow',
    twitterDescription: 'At Penn Petro Energy PLC, we believe the future of energy is lower carbon. Discover our efforts in innovation, energy transition, and sustainability.',
    twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
    
    keywords: 'Penn Petro Energy PLC, energy company, oil and gas, renewable energy, sustainability, clean energy, global energy solutions, carbon reduction, innovation, energy technology',
  
  }); 

  const topButton = ref<boolean>(false);

  // Show and hide Button based on it's viewHeight
  function handleScroll() {
    const scrollY = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollY / totalHeight;

    topButton.value = scrollPercentage > 0.4;
  };

  // Scroll to the Top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start scroll event listener
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  // Remove event listener when the component is unmounted
  onBeforeMount(() => {
    window.removeEventListener('scroll', handleScroll);
  });


</script>


<template>
  <div class="default-layout scroll-smooth">
    <NavBar class="sticky z-[99] inset-0 bottom-[unset] cursor-default bg-transparent" />
      
      <!--SearchBar  -->
      <div>
        <SearchBar />
      </div>

      <div>
        <slot></slot>
      </div>

      <!-- Scroll To Top Button -->
      <button
        v-if="topButton"
        @click="scrollToTop"
        class="fixed flex items-center justify-center bottom-20 right-8 bg-gradient-to-br from-(--dark-red) to-(--dark-orange) hover:scale-102 w-12 h-20 text-(--white) rounded-lg shadow-lg z-99 cursor-pointer opacity-100 hover:opacity-85 ease-in-out duration-300 transition-all"
      >
        <Icon 
          name="line-md:arrow-up" 
          class="font-bold text-2xl text-(--white)" 
        />

        
      </button>
      
    <FooTer/>
  </div>
</template>


<style lang="css" scoped>
  .default-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: max-content minmax(0, 1fr) max-content;
    min-height: 100vh;
    min-height: 100dvh;
    width: 100vw;
    background-color: none;
    color: black;
  }
</style>