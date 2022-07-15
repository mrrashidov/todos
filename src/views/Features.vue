<template>
  <div class="md:overflow-x-hidden sm:ml-10 sm:mr-10 md:ml-0 md:mr-0">
    <features-second-sec/>
    <features-third-sec/>
    <features-fourth-sec/>
    <features-fifth-sec/>
  </div>
</template>

<script>
import FeaturesSecondSec from "../components/FeaturesSecondSec.vue";
import FeaturesThirdSec from "../components/FeaturesThirdSec.vue";
import FeaturesFourthSec from "../components/FeaturesFourthSec.vue";
import FeaturesFifthSec from "../components/FeaturesFifthSec.vue";
export default {
  name: 'Features',
  components: {
      FeaturesFifthSec,
      FeaturesFourthSec,
      FeaturesThirdSec,
      FeaturesSecondSec
  }
}
</script>

<style>

</style>