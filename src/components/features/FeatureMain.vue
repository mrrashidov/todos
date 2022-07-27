<template>
  <main>
    <feat-header-sec></feat-header-sec>
    <div class="sm:ml-10 sm:mr-10 md:pl-0 md:pr-0">
      <features-second-sec></features-second-sec>
      <features-third-sec></features-third-sec>
      <features-fourth-sec></features-fourth-sec>
      <features-fifth-sec></features-fifth-sec>
    </div>
    <connect-todo-sec></connect-todo-sec>
    <feat-every-where-sec></feat-every-where-sec>
    <top-img></top-img>
    <footer-text></footer-text>
    <bottom-img></bottom-img>
  </main>
</template>

<script >

import featHeaderSec from "./featHeaderSec.vue";
import connectTodoSec from "./connectTodoSec.vue";
import featEveryWhereSec from "./featEveryWhereSec.vue";
import FeaturesSecondSec from "./FeaturesSecondSec.vue";
import FeaturesThirdSec from "./FeaturesThirdSec.vue";
import FeaturesFourthSec from "./FeaturesFourthSec.vue";
import FeaturesFifthSec from "./FeaturesFifthSec.vue";
import TopImg from "./TopImg.vue"
import FooterText from "./FooterText.vue"
import BottomImg from "./BottomImg.vue"
export default {
  components: { featHeaderSec, connectTodoSec, featEveryWhereSec, FeaturesSecondSec ,FeaturesThirdSec,FeaturesFifthSec,FeaturesFourthSec,TopImg, FooterText, BottomImg},
  name: "FeatureMain",
};
</script>

<style>
</style>