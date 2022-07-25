<template>
  <div>
    <navbar-comp></navbar-comp>
    <FeatureMain></FeatureMain>
    <Footer :showfooter="false"/>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue"
import FeatureMain from "../components/features/FeatureMain.vue";
import Footer from "../components/footer.vue"
import navbarComp from "../components/navbarComp.vue"
</script>

<style>
</style>