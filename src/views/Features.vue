<template>
  <div>
    <navbar-comp></navbar-comp>
    <FeatureMain></FeatureMain>

    <Footer :showfooter="false" />
  </div>
</template>

<script >
import Header from "../components/Header.vue"
import FeatureMain from "../components/features/FeatureMain.vue";
import Footer from "../components/footer.vue"
import navbarComp from "../components/navbarComp.vue"
export default {
  components: { navbarComp, Header, FeatureMain ,Footer},
  name: "Feature",
};
</script>

<style>
</style>