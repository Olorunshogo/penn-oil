<script setup lang='ts'>
    import { useSearchState } from '~/composables/useSearchState';

    const { isSearchOpen } = useSearchState()
</script>

<template>
  <div>
    <div class="absolute w-full top-(--navbar-h) h-(--navbar-h) left-0 z-1">
    
      <Transition name="slide-down">
        <div
          v-if="isSearchOpen"
          class="relative flex flex-col justify-center max-w-7xl mx-auto px-8 bg-(--white) lg:px-12 text-base text-(--black) w-full h-full top-0"
        >
          <div
            class="flex items-center gap-4 text-base h-12 text-(--black) border-b-2 border-(--border-gray) w-5/5 lg:w-4/5 *:flex *:items-center"
          >
            <Icon name="mdi:search" class="flex-none text-xl md:text-2xl" />

              <input
                type="search"
                name="search"
                id="search"
                placeholder="What can we help you find"
                class="flex-1 placeholder-shown:text-sm h-full ease-in-out duration-300 focus:outline-none focus:border-1 focus:border-dotted transition-all"
              />

            <Icon name="mdi:arrow-right" class="flex-none text-xl md:text-2xl" />
          </div>
        </div>
      </Transition>
       
    </div>
  </div>
</template>

<style lang="css" scoped>
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: max-height 0.4s ease, opacity 0.4s ease;
    overflow: hidden;
  }

  .slide-down-enter-from,
  .slide-down-leave-to {
    max-height: 0;
    opacity: 0;
  }

  .slide-down-enter-to,
  .slide-down-leave-from {
    max-height: 112px;
    opacity: 1;
  }
</style>