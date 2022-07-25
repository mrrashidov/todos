<template>
<div v-show="store.overlay" @click="store.overlay = false"
      class="w-screen h-screen bg-black flex z-20 my-0 mx-auto opacity-90 items-center justify-center fixed top-0 left-0">
    <div >
      <button @click="niam">sdhd</button>
    <iframe
      class=" opacity-100"      
      width="1143"
      height="526"
      src="https://www.youtube.com/embed/8ZKq0r-g87M"
      title="What's Todoist?"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</div>
  
</template>

<script setup>

  import {useStore} from '../../store'
  const store = useStore()
  
</script>

<style>
</style>