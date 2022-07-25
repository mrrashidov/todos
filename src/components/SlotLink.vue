<script setup>
const props = defineProps(["link"])
</script>   


<template>
    <a class="text-blue-600 hover:underline text-xs" :href="link">
        <slot></slot>
    </a>
</template>