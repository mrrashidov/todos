<template>
  <div class="
  sm:max-w-xl sm:my-12 sm:mx-auto
  md:w-full md:flex">
    <button class="md:max-w-xl">
      <img src="public/images/video-preview-features.webp" alt="" class="md:w-full md:ml-64  md:mt-14">
    </button>
    <overlay-video></overlay-video>
  </div>
</template>

<script lang="ts">
import overlayVideo from "./overlayVideo.vue";
export default {
  name: "featOverlay",
  components: {
    overlayVideo,
  },
  computed: {
    // className() {
    //   return {
        
    //   };
    // },
  },
//   data() {
//     return {
//       clicked: this.$store.state.overlay,
//     };
//   },
//   mounted() {
//     console.log(this.clicked);
//   },
};
</script>

<style>
</style>