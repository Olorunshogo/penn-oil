

<script lang="ts" setup>
  import { useHead } from 'nuxt/app';

  useHead({
    title: 'Penn Petro Energy Corporation - Human Energy',
    titleTemplate: '%s | Penn Petro Energy'
  });


  // import { watch, onMounted, onBeforeUnmount } from "vue";

  // // Close Menu on ESC key
  // const handleEscape = (e: KeyboardEvent) => {
  //   if (e.key === "Escape") isMenuOpen.value = false;
  // };

  // // Scroll will be locked when menu is open
  // watch(isMenuOpen, (open) => {
  //   document.body.style.overflow = open ? "hidden" : "";
  // });

  // onMounted(() => {
  //   document.addEventListener("keydown", handleEscape);
  // });

  // onBeforeUnmount(() => {
  //   document.removeEventListener("keydown", handleEscape);
  // });

</script>


<template>
  <div>

    

    <!--SearchBar  -->
    <div>
      <SearchBar />
    </div>

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
        title="Latest at Penn Petro Energy"
      />
    </div>

    <!-- Scroll To Top Button -->
      <!-- <button 
        v-if="showButton"
        class="fixed flex items-center justify-center bottom-8 right-8 py-2.5 px-5 bg-slate-300 w-12 h-12 text-(--white) rounded-lg cursor-pointer text-base"
        @click="scrollToTop"
      >
        <Icon name="mdi:arrow-up" />
        arrow
      </button> -->


  </div>
</template>


<style lang="css" scoped>

</style>