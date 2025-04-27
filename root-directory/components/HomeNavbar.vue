
<script lang="ts" setup>
    import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
    const isMenuOpen = ref<boolean>(false);

    // Close Menu on ESC key
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') isMenuOpen.value = false;
    };

    // Scroll will be locked when menu is open
    watch(isMenuOpen, (open) => {
        document.body.style.overflow = open ? 'hidden': '';
    })

    onMounted(() => {
        document.addEventListener('keydown', handleEscape);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('keydown', handleEscape);
    });

</script>


<template>
    <div>
        <header>
            <nav aria-label="Main navigation">
                <!-- Mobile Navigation -->
                <div class="max-w-7xl mx-auto grid sm:hidden grid-cols-1 px-(--padding-x) border-b-1 border-(--theme-peach) gap-4 h-(--navbar-h) bg-gradient-to-r from-(--color-peach-100) to-(--nav-bg)">
                    
                    <div class="flex items-center justify-between gap-2">
                        <!-- Logo -->
                        <div>
                            <LoGo />
                        </div>

                        <!-- Hamburger Menu -->
                        <button 
                            @click="isMenuOpen = true"
                            class="secondary-btn"
                            aria-label="Open menu"
                            aria-expanded="false"
                            aria-controls="mobile-menu"
                        >
                            <Icon name="mdi:menu" />
                        </button>
                    </div>

                    <!-- Slide-in Menu Panel: Left -->
                    <aside 
                        id="mobile-menu"
                        class="fixed top-0 left-0 w-2/3 h-full z-20) bg-white transition-transform duration-300 ease-in-out"
                        :class="isMenuOpen ? 'translate-x-0': '-translate-x-full'"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div class="grid sm:hidden grid-cols-1 gap-4 h-(--navbar-h) bg-gradient-to-r from-(--color-peach-100) to-(--nav-bg)">
                            <div class="flex items-center justify-between h-(--navbar-h) border-b-1 border-(--theme-peach) gap-2 px-4">
                                <div>
                                    <LoGo />
                                </div>

                                <button 
                                    class="secondary-btn"
                                    @click="isMenuOpen = false"
                                    aria-label="Close menu"
                                >
                                    <Icon name="mdi:close" />
                                </button>
                            </div>

                            <!-- Main Content -->
                            <div class="grid grid-cols-1 gap-4 px-2">

                                <!-- CTA Buttons -->
                                <div class="grid gap-4 mt-2 *:p-3">

                                    <button 
                                        class="secondary-btn"
                                    >
                                        Book a call
                                    </button>

                                    <button 
                                        class="primary-btn"
                                    >
                                        Work With Me
                                    </button>

                                </div>

                                <!-- Page Links -->
                                <div class="grid gap-2 *:p-3">
                                    <NuxtLink
                                        to="/"
                                        class="flex items-center justify-center p-2 font-semibold text-sm rounded-lg text-(--primary-heading) hover:bg-(--secondary-btn-hover) duration-300 ease-in-out transition-all"
                                    >
                                    About Me
                                    </NuxtLink>

                                    <NuxtLink
                                        to="/"
                                        class="flex items-center justify-center p-2 font-semibold text-sm rounded-lg text-(--primary-heading) hover:bg-(--secondary-btn-hover) duration-300 ease-in-out transition-all"
                                    >
                                    Contact
                                    </NuxtLink>
                                </div>

                    
                            </div>
                        </div>
                    </aside>

                    <!-- Slide-in Menu Panel: Right -->
                    <aside 
                        @click="isMenuOpen = false"
                        class="fixed top-0 right-0 w-1/3 h-full z-20 backdrop-blur-sm bg-black/50 duration-300 ease-in-out transition-all"
                        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
                        aria-hidden="true"
                    ></aside>

                </div>

                <!-- Desktop Navigation -->
                <div class="max-w-7xl mx-auto hidden sm:flex align-items justify-between px-(--padding-x) md:px-(--padding-x-md) border-b-2 border-(--theme-peach) gap-4 h-(--navbar-h) bg-gradient-to-r from-(--color-peach-100) to-(--nav-bg)">

                    <!-- Logo -->
                    <div class="flex items-center justify-center">
                        <LoGo />
                    </div>

                    <!-- Page Links -->
                    <div class="flex items-center justify-center gap-1 *:p-2">
                        <NuxtLink
                            to="/"
                            class="flex items-center justify-center p-2 font-semibold text-sm rounded-lg text-(--primary-heading) hover:bg-(--secondary-btn-hover) duration-300 ease-in-out transition-all"
                        >
                        About Me
                        </NuxtLink>

                        <NuxtLink
                            to="/"
                            class="flex items-center justify-center p-2 font-semibold text-sm rounded-lg text-(--primary-heading) hover:bg-(--secondary-btn-hover) duration-300 ease-in-out transition-all"
                        >
                        Contact
                        </NuxtLink>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex items-center justify-center gap-1 *:p-2">

                        <button 
                            class="secondary-btn"
                        >
                            Book a call
                        </button>

                        <button 
                            class="primary-btn"
                        >
                            Work With Me
                        </button>

                    </div>

                </div>        

            </nav>
        </header>

    </div>
</template>



<style lang="css" scoped>

</style>