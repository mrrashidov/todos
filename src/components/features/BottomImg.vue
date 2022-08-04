<script setup>
import { computed } from '@vue/runtime-core'
import HomeButton from '../UI/HomeButton.vue'

</script>

<template>
  <div class="text-gray-900 md:mt-20 bg-gray-100 md:flex md:flex-nowrap">
      <div class="md:ml-36 md:mt-24 md:w-2/5 | sm:my-auto pt-14">
          <h1 class="font-bold md:text-left md:text-2xl  | sm:text-center sm:text-2xl">Life shouldn't be chaos</h1>
          <h1 class="font-bold md:text-left md:text-5xl | sm:text-4xl sm:text-center">Keep it all together</h1>
          <h1 class="font-bold md:text-left md:text-5xl | sm:text-4xl sm:text-center">with Todoist.</h1>
          <home-button class="md:mt-12 md:mb-10 md:block | sm:hidden">Get started</home-button>
          <home-button class="md:mt-14 md:hidden | sm:mt-10 sm:mb-10 sm:ml-56">Get it from Microsoft</home-button>
    </div>
      <div class="md:w-3/5">
          <img class="md:w-4/5 md:ml-28 md:h-full md:block | sm:hidden" src="." alt="">
      </div>
  </div>
</template>

<style scoped>
.back{
    background-image: url('/_next/static/images/illus-keep-together_775034b….webp');
}
</style> 