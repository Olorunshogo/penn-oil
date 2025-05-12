

<script lang="ts" setup>
  import { useHead } from 'nuxt/app';
  useHead({
    title: 'Penn Petro Energy Corporation - Human Energy',
    titleTemplate: '%s | Penn Petro Energy'
  });

</script>


<template>
  <div>
    <!-- HomeHero -->
    <HomeHero />

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
      <HomeNewsroom title="Latest at Penn Petro Energy"/>
    </div>


  </div>
</template>


<style lang="css" scoped>

</style>