<template>
  <section class="md:container md:pt-10 md:px-28 " >
    <div class="md:flex  md:justify-between  md:w-full md:my-5 md:mx-auto">
      <div class=" md:flex md:items-end md:justify-center ">
        <h1 class="
         sm:text-3xl sm:mb-6 sm:text-center
        font-bold md:text-4xl">Connect Todoist to your world</h1>
            <p class="
            sm:text-center
            md:hidden 
            text-lg">Link Todoist with the apps you already use and make it your central, organized hub for getting things done. </p>
      </div>
      <div class="
      sm:hidden
      md:flex items-center md:justify-center">
        <img src="public/images/integrations-illus.webp" 
        title="Woman using her mobile phone to grocery shop"
         class="md:w-3/4 md:ml-28"
          alt="">
      </div>
    </div>
    <div class="sm:text-center flex sm:flex-wrap justify-between sm:3/6 md:w-full px-8">
        <div class="p-9">
            <img src="public/images/logo_calendar.webp" alt="" class="w-16">
        </div>
        <div class="p-9">
            <img src="public/images/logo_zapier.webp" alt="" class="w-28">
        </div>
        <div class="p-11">
            <img src="public/images/logo_ifttt.webp" alt="" class="w-28">
        </div>
        <div class="sm:ml-40 p-9">
            <img src="public/images/logo_amazon.webp" alt="" class=" w-56">
        </div>
    </div>
    <p class="sm:hidden text-lg">Link Todoist with the apps you already use and make it your central, organized hub for getting things done. </p>
                <br>
            <a href="#" class="sm:ml-16 text-blue-400 my-4 hover:border-black hover:border-solid">
                &rightarrow;See all integrations
            </a>
  </section>
</template>

<script lang="ts">
export default {
  name: "connectTodoSec",
};
</script>

<style>
</style>