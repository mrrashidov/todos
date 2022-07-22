
<script setup>
import { defineComponent } from '@vue/composition-api'
const props = defineProps(["value"])
</script>
<template>
    <input v-bind="$attrs" 
    :value="value"

    >
</template>




