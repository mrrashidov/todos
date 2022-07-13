<template>
  <Header />
  <div class="lg:w-[1200px] mx-auto"></div>
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
