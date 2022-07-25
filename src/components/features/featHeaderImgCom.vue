<template>
  <div class="
  sm:max-w-xl sm:my-12 sm:mx-auto
  md:w-full md:flex">
    <button class="md:max-w-xl" @click="store.overlay = true">
      <img src="public/images/video-preview-features.webp" alt="" class="md:w-full md:ml-64  md:mt-14">
    </button>
  </div>
</template>

<script setup>
import overlayVideo from "./overlayVideo.vue";
import {useStore} from '../../store'
  const store = useStore()

</script>

<style>
</style>