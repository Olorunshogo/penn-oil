

<script lang="ts" setup>
  import { useHead } from 'nuxt/app';
  useHead({
    title: 'Pennpetro Energy PLC - Human Energy',
    titleTemplate: '%s | HomePagey'
  });

</script>


<template>
  <div>

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