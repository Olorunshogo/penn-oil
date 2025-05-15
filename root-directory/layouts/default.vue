
<script lang="ts" setup>
  import { useSeoMeta, useHead } from 'nuxt/app';
  import { showButton, scrollToTop } from '../stores/homepage';

  
  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/Logo/Logo_transparent_bg.png'
      }
    ]
  });

  useSeoMeta({
    title: 'Penn Petro Energy PLC - Human Energy | https://vercel.com/bom-projects/pen-oil.com',
    ogTitle: 'Penn Petro Energy Corporation - Leading Energy Solutions',
    description: 'Penn Petro Energy is one of the world’s leading integrated energy companies. Explore how we safely and responsibly develop energy that improves lives and powers the world forward.',
    ogDescription: 'Penn Petro Energy develops and delivers affordable, reliable, and ever-cleaner energy. Learn about our commitment to innovation, sustainability, and global energy leadership.',
    ogImage: '/images/Full_Penn_Petro_Energy_Logo.jpg',
    ogImageAlt: 'Penn Petro Energy oil refinery and clean energy infrastructure.',
    ogUrl: 'https://vercel.com/bom-projects/pen-oil',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Penn Petro Energy PLC - Energy for a Better Tomorrow',
    twitterDescription: 'At Penn Petro Energy PLC, we believe the future of energy is lower carbon. Discover our efforts in innovation, energy transition, and sustainability.',
    twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',
    
    keywords: 'Penn Petro Energy PLC, energy company, oil and gas, renewable energy, sustainability, clean energy, global energy solutions, carbon reduction, innovation, energy technology',
  
  }); 


</script>


<template>
  <div class="default-layout scroll-smooth">
    <NavBar class="sticky z-[99] inset-0 bottom-[unset] cursor-default bg-transparent" />

      <div>
        <slot></slot>
      </div>
      
    <HomeFooter/>
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