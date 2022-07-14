<template>
  <div class="overflow-x-hidden">
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