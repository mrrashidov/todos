<script setup>
import { useAttrs } from 'vue'
const attrs = useAttrs()
    const props = defineProps(["showTitle"])
</script>
<template>
    <div  v-if="showTitle" class="py-2 px-2 rounded-md bg-gray-800 text-white text-xs" v-bind="attrs">
        <slot></slot>
    </div>
</template>