<script setup>
const props = defineProps(["position", "showTitle"]);
</script>
<template>
  <div
    :class="position"
    class="md:pl-2 rounded w-auto bg-gray-700 text-white text-xs flex md:p-1"
  >
    <p>
      <slot name="text"></slot>
    </p>
    <div class="bg-gray-500 rounded-sm md:pl-1 md:pr-1 md:ml-2">
      <slot name="icon"></slot>
    </div>
  </div>
</template>