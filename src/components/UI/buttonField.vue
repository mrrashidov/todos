<script setup>
import { useAttrs } from "vue";
const attrs = useAttrs();
const props = defineProps(["disabled"])
</script>
<template>
  <button v-bind="attrs" :disabled="disabled" class="rounded-md outline-none border-transparent pt-2 px-3">
    <slot></slot>
  </button>
</template>