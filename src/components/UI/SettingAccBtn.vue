<script setup>
import {ref} from 'vue'
const props = defineProps(['bgColor'])

</script>

<template>
    <div>
        <div :class="bgColor" @click="$emit('click', $event)" class="cursor-pointer border text-center rounded md:pr-3 md:pl-3 md:pt-1 md:pb-1">
           <slot></slot>
        </div>
    </div>
</template>