<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>
<style  scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>