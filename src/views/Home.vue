<template>
  <Header />
  <MainContentImg />
  <MainContent />
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/footer.vue";
import MainContent from "@/components/MainContent.vue";
import MainContentImg from "@/components/MainContentImg.vue";
export default {
  components: {
    Header,
    Footer,
    MainContent,
    MainContentImg,
  },
};
</script>
