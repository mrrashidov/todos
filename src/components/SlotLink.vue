<template>
    <a class="text-blue-600 hover:underline text-xs" :href="link">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: {
        link: String 
    }
    
}
</script>

<style>

</style>