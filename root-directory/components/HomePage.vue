

<script lang="ts" setup>
  import { useHead } from 'nuxt/app';
  useHead({
    title: 'Penn Petro Energy PLC - Human Energy',
    titleTemplate: '%s | HomePage'
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
      <HomeNewsroom />
    </div>


  </div>
</template>


<style lang="css" scoped>

</style>