
<script lang="ts" setup>
  import { useSeoMeta, useHead } from 'nuxt/app';
  
  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico'
      }
    ]
  });

  useSeoMeta({
    title: 'Chevron Corporation - Human Energy | chevron.com',
    ogTitle: 'Chevron Corporation - Leading Energy Solutions',
    description: 'Chevron is one of the world’s leading integrated energy companies. Explore how we safely and responsibly develop energy that improves lives and powers the world forward.',
    ogDescription: 'Chevron develops and delivers affordable, reliable, and ever-cleaner energy. Learn about our commitment to innovation, sustainability, and global energy leadership.',
    // ogImage: '/images/chevron-og-image.jpg',
    ogImageAlt: 'Chevron oil refinery and clean energy infrastructure.',
    ogUrl: 'https://vercel.com/bom-projects/pen-oil',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Chevron Corporation - Energy for a Better Tomorrow',
    twitterDescription: 'At Chevron, we believe the future of energy is lower carbon. Discover our efforts in innovation, energy transition, and sustainability.',
    twitterImage: '/images/chevron-twitter-card.jpg',
    
    keywords: 'Chevron, energy company, oil and gas, renewable energy, sustainability, clean energy, global energy solutions, carbon reduction, innovation, energy technology',
    
    author: 'Olorunshogo (Moses) BAMTEFA',
  }); 


</script>


<template>
  <div class="default-layout scroll-smooth">
    <HomeNavbar class="sticky z-[99] inset-0 bottom-[unset] cursor-default" />
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
    /* background-color: var(--primary-bg);
    color: black; */
  }
</style>