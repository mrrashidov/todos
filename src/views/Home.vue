<template>
  <div class="home">
    <h1>Home</h1>
    <home-button></home-button>
    <p>This is the home page</p>
  </div>
</template>

<script>
import HomeButton from '@/components/UI/HomeButton.vue'

export default {
  components: {
    HomeButton
  }
}
</script>