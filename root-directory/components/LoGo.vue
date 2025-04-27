
<template>
    <div>
        <!-- Mobile Logo -->
        <NuxtLink 
            to="/"
            class="flex sm:hidden items-center gap-1"
        >
            <div class="flex items-center justify-center rounded-lg shadow-lg font-Roboto text-lg text-(--white) p-2 bg-(--primary-heading) h-9 w-fit font-bold">C</div>
            <div class="flex items-center font-Inter text-lg p-1 text-transparent bg-clip-text bg-gradient-to-r from-(--secondary-heading) to-red-500 hover:text-(--color-peach-700) font-bold">vron</div>
        </NuxtLink>

        <!-- Desktop Logo -->
        <NuxtLink 
            to="/"
            class="hidden sm:flex items-center"
        >
            <!-- <div class="flex items-center justify-center rounded-lg shadow-lg font-Roboto text-lg text-(--white) p-2 bg-(--primary-heading) h-9 w-fit font-bold">GIA</div> -->
            <div class="flex items-center justify-center font-Inter text-lg p-1 text-transparent bg-clip-text bg-gradient-to-r from-(--secondary-heading) to-(--primary-heading) hover:text-(--theme-peach) font-bold">CHE</div>
            <div class="flex items-center font-Inter text-lg p-1 text-transparent bg-clip-text bg-gradient-to-r from-(--secondary-heading) to-(--primary-heading) hover:text-(--theme-peach) font-bold">| VRON</div>
        </NuxtLink>
    </div>
</template>
  
<style>

</style>