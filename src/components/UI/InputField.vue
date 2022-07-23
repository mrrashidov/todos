
<script setup>
import {ref} from 'vue'
import { useAttrs } from 'vue'
const props = defineProps(["value"])
const attrs =useAttrs()

</script>
<template>
 <div>
     <input
     class="border-black"
    v-bind="attrs"
    :value="value"
    @input="(event) => (value = event.target.value)"
  />
 </div>
</template>






