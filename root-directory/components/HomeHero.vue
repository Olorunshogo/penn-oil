<script setup lang="ts">

  import { homeHeroVideoBg } from "~/models/heroBgModels";

</script>

<template>
  <div>

    <!-- Section: Hero -->
    <div>
      <HeroSectionVideoBg
        :videoSrc="homeHeroVideoBg.videoSrc"
        :title="homeHeroVideoBg.title"
        :titleBgVideoSrc="homeHeroVideoBg.titleBgVideoSrc"
        :paragraph="homeHeroVideoBg.paragraph"
        :displayLink="homeHeroVideoBg.displayLink"
        :link="homeHeroVideoBg.link"
        :linkName="homeHeroVideoBg.linkName"
      />
    </div>

  </div>
</template>

<style lang="css" scoped>
  
</style>

