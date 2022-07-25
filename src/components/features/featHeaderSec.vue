<template>
  <section class="
  sm:w-screen
  md:w-screen 
  bg-cover flex bg-features w-full bg-accent-dark">
      <div class="
      sm:w-3/4 sm:mt-40 
      md:w-3/6 md:my-12 
      mx-auto">
          <h1 class="
          sm:text-5xl sm:mb-6
          md:text-7xl md:mb-4
          font-bold text-center">
          From overwhelmed to on top of it
        </h1>
        <p class="
        sm:text-center sm:text-xl 
        md:ml-16  md:font-normal md:text-xl md:w-5/6
        text-center">
          Todoist gives you the confidence that everything’s organized and
          accounted for, so you can make progress on the things that are
          important to you.
        </p>
        <feat-overlay></feat-overlay>
        <overlayVideo></overlayVideo>
      </div>
  </section>
</template>

<script lang="ts">;
import featOverlay from './featHeaderImgCom.vue';
import overlayVideo from './overlayVideo.vue';
export default {
  components:{featOverlay,overlayVideo},
  name: "FeatFirstSec",
};
</script>

<style>
 .bg-features{
    background-image: url("public/images/features-hero-bg.webp");
    background-repeat: no-repeat;
 }
</style>