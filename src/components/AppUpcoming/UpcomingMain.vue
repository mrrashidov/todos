<script setup>
import { ref } from "vue";
import TitleDate from "@/components/AppUpcoming/TitleDate.vue";
import TitleBtn from "@/components/AppUpcoming/TitleBtn.vue";
import RunningDate from "@/components/AppUpcoming/RunningDate.vue";
import UpcomingContent from "@/components/AppUpcoming/UpcomingContent.vue";
</script>

<template>
  <div class="z-20 sticky top-1/2 w-3/4 md:pr-24 md:pl-24">
    <div class="flex items-end justify-between md:-mt-60">
      <title-date />
      <title-btn />
    </div>
    <running-date />
    <div>
      <upcoming-content />
    </div>
  </div>
</template>