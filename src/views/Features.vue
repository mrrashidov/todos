<template>

  <div class=" sm:ml-10 sm:mr-10 md:pl-0 md:pr-0">
    <features-second-sec/>
    <features-third-sec/>
    <features-fourth-sec/>
    <features-fifth-sec/>
  </div>
</template>

<script setup>
import FeaturesSecondSec from "../components/FeaturesSecondSec.vue";
import FeaturesThirdSec from "../components/FeaturesThirdSec.vue";
import FeaturesFourthSec from "../components/FeaturesFourthSec.vue";
import FeaturesFifthSec from "../components/FeaturesFifthSec.vue";
import Featuremain from '@/components/features/FeatureMain.vue'
export default {
  components: { Featuremain },
    name : "Feature"
}

</script>

<style>

</style>