<script setup lang='ts'>

    defineProps({
        navLink: {
            type: String,
            default: '/pdfs/Penn_business_conduct_ethics_code.pdf'
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