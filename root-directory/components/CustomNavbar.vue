<script lang="ts" setup>
import { watch, onMounted, onBeforeUnmount } from "vue";

// Close Menu on ESC key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape") isMenuOpen.value = false;
};

// Scroll will be locked when menu is open
watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleEscape);
});

import {
  isMenuOpen,
  isSearchOpen,
  backMobile,
  closeAside,

  isWhoOpen,
  isWhoHovered,
  openMobileWho, 
  openDesktopWho,
  closeDesktopWho,
  

  isWhatOpen,
  isWhatHovered,
  openDesktopWhat,
  openMobileWhat,
  closeDesktopWhat,


  isSustainabilityOpen,
  isSustainabilityHovered,
  openMobileSustainability,
  openDesktopSustainability,
  closeDesktopSustainability,

  isInvestorsOpen,
  isInvestorsHovered,
  openMobileInvestors,
  openDesktopInvestors,
  closeDesktopInvestors
} from "../stores/navbar";




</script>

<template>
  <div>
    <header>
      <nav aria-label="Main navigation" class="w-full h-full relative z-99 bg-opacity-50">
        <!-- Navigation -->
        <div class="max-w-7xl mx-auto h-(--navabr-h)">
          <!-- Mobile Nav  -->
          <div
            class="flex lg:hidden *:text-(--white) items-center justify-between gap-2 h-(--navbar-h) px-(--section-px)"
          >
            <!-- Hamburger Menu -->
            <button
              @click="isMenuOpen = true"
              class="flex items-center justify-center bg-transparent p-2 text-3xl cursor-pointer duration-300 ease-in-out transition-all"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <Icon name="mdi:menu" />
            </button>

            <!-- Mobile Logo -->
            <NuxtLink to="/" class="relative flex flex-col items-center justify-center">
              <NuxtImg
                src="/images/Logo/Logo_transparent_bg.png"
                alt="Penn Petro Energy Logo"
                class="object-cover w-18 h-16"
              />
              <div class="hidden sm:flex items-center justify-center font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-(--light-blue) to-red-500">
                Penn Petro Energy
              </div>
            </NuxtLink>

            <button
              @click="isSearchOpen = !isSearchOpen"
              class="flex items-center justify-center cursor-pointer duration-300 ease-in-out transition-all bg-transparent text-(--black) text-3xl"
            >
              <Icon name="mdi:search" />
            </button>
          </div>

          <!-- Mobile Slide-in Menu Panel: Left -->
          <aside
            id="mobile-menu"
            class="fixed top-0 left-0 w-full h-full z-90 flex flex-col gap-12 font-normal text-2xl bg-(--primary-bg) p-8 text-(--white) transition-transform duration-300 ease-in-out *:duration-300 *:ease-in-out *:transition-all"
            :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
            role="dialog"
            aria-modal="true"
          >
            <button
              class="flex items-center ml-auto w-12 h-12 cursor-pointer hover:text-(--light-blue)"
              @click="isMenuOpen = false"
              aria-label="Close menu"
            >
              <Icon name="mdi:close" />
            </button>

            <!-- Who we are -->
            <button
              @click="openMobileWho"
              class="flex *:flex items-center *:items-center justify-between cursor-pointer hover:text-(--light-blue) transition-transform duration-300 ease-in-out"
            >
              <span>Who we are</span>
              <span>
                <Icon name="mdi:chevron-right" />
              </span>
            </button>

            <!-- What we do -->
            <button
              @click="openMobileWhat"
              class="flex *:flex items-center *:items-center justify-between cursor-pointer hover:text-(--light-blue) transition-transform duration-300 ease-in-out"
            >
              <span>What we do</span>
              <span>
                <Icon name="mdi:chevron-right" />
              </span>
            </button>

            <!-- Sustainability -->
            <button
              @click="openMobileSustainability"
              class="flex *:flex items-center *:items-center justify-between cursor-pointer hover:text-(--light-blue) transition-transform duration-300 ease-in-out"
            >
              <span>Sustainability</span>
              <span>
                <Icon name="mdi:chevron-right" />
              </span>
            </button>

            <!-- Investors -->
            <button
              @click="openMobileInvestors"
              class="flex *:flex items-center *:items-center justify-between cursor-pointer hover:text-(--light-blue) transition-transform duration-300 ease-in-out"
            >
              <span>Investors</span>
              <span>
                <Icon name="mdi:chevron-right" />
              </span>
            </button>

            <!-- Newsroom -->
            <NuxtLink
              to="/"
              class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
            >
              Newsroom
            </NuxtLink>

            <!-- Careers -->
            <NuxtLink
              to="/"
              class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
            >
              Careers
            </NuxtLink>
          </aside>

          <!-- Mobile Panels -->
          <div>
            <!-- Who we are panel -->
            <aside
              id="mobile-menu"
              class="fixed top-0 left-0 w-full h-full z-20 flex flex-col gap-8 font-normal text-2xl bg-(--primary-bg) p-8 text-(--white) transition-transform duration-300 ease-in-out *:ease-in-out *:duration-300 *:transition-all"
              :class="isWhoOpen ? 'translate-x-0' : '-translate-x-full'"
              role="dialog"
              aria-modal="true"
            >
              <div
                class="flex items-center justify-between *:ease-in-out *:duration-300 *:transition-all"
              >
                <button
                  class="flex items-center justify-end hover:text-(--light-blue)"
                  @click="backMobile"
                  aria-label="Back Button"
                >
                  <Icon name="mdi:arrow-left" />
                </button>
                <span>Who we are</span>
                <button
                  class="flex items-center justify-end hover:text-(--light-blue)"
                  @click="closeAside"
                  aria-label="Close menu"
                >
                  <Icon name="mdi:close" />
                </button>
              </div>

              <!-- Overview -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Overview
              </NuxtLink>

              <!-- Our culture -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Our culture
              </NuxtLink>

              <!-- Our brands -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Our brands
              </NuxtLink>

              <!-- Our leadership -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Our leadership
              </NuxtLink>

              <!-- Our history -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Our history
              </NuxtLink>

              <!-- Contact us -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Contact us
              </NuxtLink>
            </aside>

            <!-- What we do panel -->
            <aside
              id="mobile-menu"
              class="fixed top-0 left-0 w-full h-full z-20 flex flex-col gap-8 font-normal text-2xl bg-(--primary-bg) p-8 text-(--white) transition-transform duration-300 ease-in-out *:ease-in-out *:duration-300 *:transition-all"
              :class="isWhatOpen ? 'translate-x-0' : '-translate-x-full'"
              role="dialog"
              aria-modal="true"
            >
              <div
                class="flex items-center justify-between *:ease-in-out *:duration-300 *:transition-all"
              >
                <button
                  class="flex items-center justify-end hover:text-(--light-blue) cursor-pointer"
                  @click="backMobile"
                  aria-label="Back Button"
                >
                  <Icon name="mdi:arrow-left" />
                </button>
                <span>What we do</span>
                <button
                  class="flex items-center justify-end hover:text-(--light-blue) cursor-pointer"
                  @click="closeAside"
                  aria-label="Close menu"
                >
                  <Icon name="mdi:close" />
                </button>
              </div>

              <!-- Overview -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Overview
              </NuxtLink>

              <!-- Energy -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Energy
              </NuxtLink>

              <!--   Technology and innovation -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Technology and innovation
              </NuxtLink>

              <!-- Penn Petro Energy around the world -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
              Penn Petro Energy around the world
              </NuxtLink>
            </aside>

            <!-- Sustainability panel -->
            <aside
              id="mobile-menu"
              class="fixed top-0 left-0 w-full h-full z-20 flex flex-col gap-8 font-normal text-2xl bg-(--primary-bg) p-8 text-(--white) transition-transform duration-300 ease-in-out *:ease-in-out *:duration-300 *:transition-all"
              :class="isSustainabilityOpen ? 'translate-x-0' : '-translate-x-full'"
              role="dialog"
              aria-modal="true"
            >
              <div
                class="flex items-center justify-between *:ease-in-out *:duration-300 *:transition-all"
              >
                <button
                  class="flex items-center justify-end hover:text-(--light-blue) cursor-pointer"
                  @click="backMobile"
                  aria-label="Back Button"
                >
                  <Icon name="mdi:arrow-left" />
                </button>
                <span>Sustainability</span>
                <button
                  class="flex items-center justify-end hover:text-(--light-blue) cursor-pointer"
                  @click="closeAside"
                  aria-label="Close menu"
                >
                  <Icon name="mdi:close" />
                </button>
              </div>

              <!-- Overview -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Overview
              </NuxtLink>

              <!-- Climate -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Climate
              </NuxtLink>

              <!--   Environment -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Environment
              </NuxtLink>

              <!-- Social investment -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Social investment
              </NuxtLink>
            </aside>

            <!-- Investors panel -->
            <aside
              id="mobile-menu"
              class="fixed top-0 left-0 w-full h-full z-20 flex flex-col gap-8 font-normal text-2xl bg-(--primary-bg) p-8 text-(--white) transition-transform duration-300 ease-in-out *:ease-in-out *:duration-300 *:transition-all"
              :class="isInvestorsOpen ? 'translate-x-0' : '-translate-x-full'"
              role="dialog"
              aria-modal="true"
            >
              <div
                class="flex items-center justify-between *:ease-in-out *:duration-300 *:transition-all"
              >
                <button
                  class="flex items-center justify-end hover:text-(--light-blue) cursor-pointer"
                  @click="backMobile"
                  aria-label="Back Button"
                >
                  <Icon name="mdi:arrow-left" />
                </button>
                <span>Investors</span>
                <button
                  class="flex items-center justify-end hover:text-(--light-blue) cursor-pointer"
                  @click="closeAside"
                  aria-label="Close menu"
                >
                  <Icon name="mdi:close" />
                </button>
              </div>

              <!-- Overview -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Overview
              </NuxtLink>

              <!-- Events and presentations -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Events and presentations
              </NuxtLink>

              <!--  Corporate governance -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Corporate governance
              </NuxtLink>

              <!-- esg a-z index -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                esg a-z index
              </NuxtLink>

              <!-- Reports and fillings -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Reports and fillings
              </NuxtLink>

              <!--  Stock and dividend -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Stock and dividend
              </NuxtLink>

              <!-- Contact us -->
              <NuxtLink
                to="/"
                class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
              >
                Contact us
              </NuxtLink>
            </aside>
          </div>

          <!-- Desktop Nav -->
          <div
            class="relative hidden lg:flex items-center z-90 justify-between text-base text-(--black) font-normal px-(--section-px-lg) h-(--navbar-h)"
          >
            <div class="flex items-center gap-8 *:hover:text-(--black) *:duration-300 *:ease-in-out *:transition-all">
              <NuxtLink
                to="/"
                class="group relative flex duration-500 ease-in transition-all"
                @mouseenter="openDesktopWho"
                @mouseleave="closeDesktopWho"
              >
                <span class="group-hover:underline-text">Who we are</span>
              </NuxtLink>

              <NuxtLink
                to="/"
                class="group relative flex duration-500 ease-in transition-all"
                @mouseenter="openDesktopWhat"
                @mouseleave="closeDesktopWhat"
              >
                <span class="group-hover:underline-text">What we do</span>
              </NuxtLink>

              <NuxtLink
                to="/"
                class="group relative flex duration-500 ease-in transition-all"
                @mouseenter="openDesktopSustainability"
                @mouseleave="closeDesktopSustainability"
              >
                <span class="group-hover:underline-text">Sustainability</span>
              </NuxtLink>

              <NuxtLink
                to="/"
                class="group relative flex duration-500 ease-in transition-all"
                @mouseenter="openDesktopInvestors"
                @mouseleave="closeDesktopInvestors"
              >
                <span class="group-hover:underline-text">Investors</span>
              </NuxtLink>
            </div>

            <!-- Mobile Logo -->
            <NuxtLink to="/" class="relative flex flex-col items-center justify-center">
              <NuxtImg
                src="/images/Logo/Logo_transparent_bg.png"
                alt="Penn Petro Energy Logo"
                class="object-cover w-18 h-16"
              />
              <div class="hidden sm:flex items-center justify-center font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-(--light-blue) to-red-600">
                Penn Petro Energy
              </div>
            </NuxtLink>

            <!-- Desktop Right Links -->
            <div class="hidden lg:flex items-center gap-8 *:flex *:hover:text-(--light-blue) *:duration-300 *:ease-in-out *:transition-all">
              <NuxtLink
                to="/"
                class="group text-base"
              >
                <span class="group-hover:underline-text">Sustainability</span>
              </NuxtLink>

              <NuxtLink
                to="/"
                class="group text-base"
              >
                <span class="group-hover:underline-text">Investors</span>
              </NuxtLink>

              <button
                @click="isSearchOpen = !isSearchOpen"
                class="flex items-center justify-center cursor-pointer duration-300 ease-in-out transition-all bg-transparent text-(--white) text-3xl"
              >
                <Icon name="mdi:search" />
              </button>
            </div>
          </div>

            <!-- Desktop Panels -->
            <div
              class="text-3xl"
            >

                <!-- Who panel -->
                <aside
                id="who-desktop-mobile-menu"
                class="fixed top-0 -left-18 w-1/2 h-full z-80 flex flex-col font-normal text-3xl bg-(--primary-bg) pt-32 px-(--section-px-lg) text-(--white) transition-transform duration-300 ease-in-out *:ease-in-out *:duration-300 *:transition-all"
                :class="isWhoHovered ? 'translate-x-18' : '-translate-x-full'"
                role="dialog"
                aria-modal="true"
                @mouseenter="openDesktopWho"
                @mouseleave="closeDesktopWho"
                >
                    <div class="flex flex-col gap-8 max-w-7xl mx-auto">

                        <!-- Our culture -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Our culture
                        </NuxtLink>

                        <!-- Our brands -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Our brands
                        </NuxtLink>

                        <!-- Our leadership -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Our leadership
                        </NuxtLink>

                        <!-- Our history -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Our history
                        </NuxtLink>

                        <!-- Contact us -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Contact us
                        </NuxtLink>

                    </div>

                </aside>

                <!-- What we do panel -->
                <aside
                id="what-desktop-mobile-menu"
                class="fixed top-0 -left-18 w-1/2 h-full z-80 flex flex-col gap-8 font-normal bg-(--primary-bg) pt-32 px-(--section-px-lg) text-(--white) transition-transform duration-300 ease-in-out *:ease-in-out *:duration-300 *:transition-all"
                :class="isWhatHovered ? 'translate-x-18' : '-translate-x-full'"
                role="dialog"
                aria-modal="true"
                @mouseenter="openDesktopWhat"
                @mouseleave="closeDesktopWhat"
                >
                    <div class="flex flex-col gap-8 max-w-7xl mx-auto">

                        <!-- Energy -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Energy
                        </NuxtLink>

                        <!--   Technology and innovation -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Technology and innovation
                        </NuxtLink>

                        <!-- Social investment -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                        Penn Petro Energy around the world
                        </NuxtLink>
                    </div>
                </aside>

                <!-- Sustainability panel -->
                <aside
                id="sustainability-desktop-mobile-menu"
                class="fixed top-0 -left-18 w-1/2 h-full z-80 flex flex-col gap-8 font-normal bg-(--primary-bg) pt-32 px-(--section-px-lg) text-(--white) transition-transform duration-300 ease-in-out *:ease-in-out *:duration-300 *:transition-all"
                :class="isSustainabilityHovered ? 'translate-x-18' : '-translate-x-full'"
                role="dialog"
                aria-modal="true"
                @mouseenter="openDesktopSustainability"
                @mouseleave="closeDesktopSustainability"
                >
                    <div class="flex flex-col gap-8 max-w-7xl mx-auto">

                        <!-- Climate -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Climate
                        </NuxtLink>

                        <!--   Environment -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Environment
                        </NuxtLink>

                        <!-- Social investment -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Social investment
                        </NuxtLink>
                    </div>
                </aside>

                <!-- Investors panel -->
                <aside
                id="investors-desktop-mobile-menu"
                class="fixed top-0 -left-18 w-1/2 h-full z-80 flex flex-col gap-8 font-normal bg-(--primary-bg) pt-32 px-(--section-px-lg) text-(--white) transition-transform duration-300 ease-in-out *:ease-in-out *:duration-300 *:transition-all"
                :class="isInvestorsHovered ? 'translate-x-18' : '-translate-x-full'"
                role="dialog"
                aria-modal="true"
                @mouseenter="openDesktopInvestors"
                @mouseleave="closeDesktopInvestors"
                >
                    <div class="flex flex-col gap-8 max-w-7xl mx-auto">
                        <!-- Events and presentations -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Events and presentations
                        </NuxtLink>

                        <!--  Corporate governance -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Corporate governance
                        </NuxtLink>

                        <!-- esg a-z index -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            esg a-z index
                        </NuxtLink>

                        <!-- Reports and fillings -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Reports and fillings
                        </NuxtLink>

                        <!--  Stock and dividend -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Stock and dividend
                        </NuxtLink>

                        <!-- Contact us -->
                        <NuxtLink
                            to="/"
                            class="flex *:flex items-center *:items-center justify-between hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                        >
                            Contact us
                        </NuxtLink>
                    </div>

                </aside>

            </div>

        </div>


        <Transition name="slide-down">
          <div
            v-if="isSearchOpen"
            class="relative flex flex-col justify-center max-w-7xl mx-auto px-8 bg-(--white) lg:px-12 text-base text-(--black) w-full h-(--navbar-h) top-0"
          >
            <div
              class="flex items-center gap-4 text-base h-12 text-(--black) border-b-2 border-(--border-gray) w-5/5 lg:w-4/5 *:flex *:items-center"
            >
            <Icon name="mdi:search" class="flex-none text-2xl" />

              <input
                type="search"
                name="search"
                id="search"
                placeholder="What can we help you find"
                class="flex-1 placeholder-shown:text-lg h-full ease-in-out duration-300 focus:outline-none focus:border-1 focus:border-dotted transition-all"
              />

            <Icon name="mdi:arrow-right" class="flex-none text-2xl" />
            </div>
          </div>
        </Transition>
        
        
      </nav>
    </header>
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


    .group-hover\:underline-text {
    position: relative;
    display: inline-block;
    }

    .group-hover\:underline-text::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: white;
    transition: width 0.5s ease-in-out;
    }

    .group:hover .group-hover\:underline-text::after {
    width: 100%;
    }

    .arrow-icon {
    transition: transform 1s ease-in-out;
    }

    .group:hover .arrow-icon {
    transform: translateX(12px);
    }

    .group-hover\:arrow-move {
    animation: moveArrow 3s infinite alternate ease-in-out;
    }
</style>
