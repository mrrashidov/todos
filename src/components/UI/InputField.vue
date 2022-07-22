
<script setup>
const props = defineProps(["value"]);
</script>
<template>
 <div>
     <input
     class="border-black"
    v-bind="$attrs"
    :value="value"
    @input="(event) => (value = event.target.value)"
  />
 </div>
</template>






