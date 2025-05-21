<script setup lang='ts'>

    defineProps({
        navLink: {
            type: String,
        },
        linkName: {
            type: String,
            default: 'Default link Name'
        },
    });

</script>

<template>
    <div>        
        <a 
            :href="navLink"
            class="font-bold text-sm w-full h-full text-(--white) *:hover:opacity-70 *:duration-500 *:ease-in-out *:transition-all"
        >
            <span>{{ linkName }}</span>
        </a>
    </div>
</template>


<style lang="css" scoped>

</style>