

<script lang="ts" setup>
  import { useHead } from 'nuxt/app';

  useHead({
    title: 'Pennpetro Energy PLC Corporation - Human Energy',
    titleTemplate: '%s | Pennpetro Energy PLC'
  });

</script>


<template>
  <div> 

    <!--HomeHero  -->
    <div>
      <HomeHero />
    </div>

    <!--HomeWho  -->
    <div>
      <HomeWho />
    </div>       

    <!-- HomeWhat -->
    <div>
      <HomeWhat />
    </div>

    <!-- HomeNewsroom -->
    <div>
      <HomeNewsroom 
        category="newsroom"
        title="Latest at Pennpetro Energy PLC"
      />
    </div>

  </div>
</template>


<style lang="css" scoped>

</style>