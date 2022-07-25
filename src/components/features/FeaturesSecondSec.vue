<template>
  <div class="back h-screen">
    <div 
        class="
          md:pt-14 md:mt-5 md:ml-20
          sm:mt-[26%]">
      <img
        v-show="first"
        class="
          md:absolute md:w-1/2"
        src="public/images/features-sec-2.1.webp"
        alt=""
      />
      <img
        v-show="second"
        class="
          md:absolute md:w-1/2"
        src="public/images/features-sec-2.2.webp"
        alt=""
      />
      <img
        v-show="third"
        class="
          md:absolute md:w-1/3
          sm:w-[80%]  sm:h-[50%]"
        src="public/images/features-sec-2.3.webp"
        alt=""
      />
    </div>
    <div 
      class="
        md:w-1/3 md:ml-auto md:mr-5 md:right-0 md:relative md:top-0
        sm:absolute sm:w-full sm:pb-10 sm:top-[3%]">
      <p 
        class="
          md:text-4xl font-bold
          sm:text-3xl sm:pr-24">
        Start each day feeling calm and in control 
       </p> 
      <p 
        class="
          md:text-lg md:ml-1 md:pr-10
          sm:text-xl sm:pr-40">
        Get a clear overview of everything on your plate and never lose track of
        an important task.
      </p>
    </div>
    <div 
      class="
        relative md:mt-0
       sm:mt-10">
      <button
        ref="featBtn1"
        class="
          md:absolute md:mr-20 md:right-0 md:w-96 md:rounded-xl md:py-5 md:px-6 bg-red-200
          sm:w-[28%] sm:rounded-lg sm:p-1 sm:text-center"
        @click="replaceImg(true, false, false)">
        <div class="
          flex items-center 
          sm:pt-1 sm:pl-2">
          <img class="md:w-4 sm:w-[13px]" src="public/icons/plus.png" alt="" />
          <p class="
            md:text-xl ml-2 md:font-semibold 
            sm:text-md sm:font-semibold">Quick Add</p>
        </div>
        <p v-show="first" 
          class="
            md:ml-7 md:text-start md:text-base
            sm:text-xs sm:text-center">
          lets you capture and organize tasks in seconds.
        </p>
      </button>
      <button
        ref="featBtn2"
        class="
          md:absolute md:mr-20 md:right-0 md:mt-36 md:w-96 md:rounded-xl md:py-5 md:px-6 bg-gray-100
          sm:w-[33%] sm:rounded-lg sm:p-1 sm:ml-2"
        @click="replaceImg(false, true, false)">
        <div 
          class="
            flex items-center
            sm:pt-1 sm:pl-2">
          <img class="w-4" src="public/icons/loop.png" alt="" />
          <p 
            class="md:text-xl md:ml-2 md:font-semibold
            sm:text-md sm:ml-1.5 sm:font-semibold">Recurring due dates</p>
        </div>
        <p v-show="second" 
          class="md:ml-7 md:text-base md:w-80 md:text-start
          sm:text-xs sm:text-center">
          help you remember deadlines and build habits.
        </p>
      </button>
      <button
        ref="featBtn3"
        class="
          md:absolute md:mr-20 md:right-0 md:mt-60 md:w-96 md:rounded-xl md:py-5 md:px-6 bg-gray-100
          sm:w-[33%] sm:rounded-lg sm:p-1 sm:ml-2"
        @click="replaceImg(false, false, true)"
      >
        <div class="flex items-center">
          <img
            class="md:w-4 sm:w-[15px] sm:ml-1"
            src="public/icons/insert-template.png"
            alt=""
          />
          <p 
            class="
              md:text-xl ml-2 font-semibold">Sections & subtasks</p>
        </div>
        <p v-show="third" 
          class="
            md:ml-7 md:w-80 md:text-start md:text-base
            sm:text-xs sm:text-center">
          ensure that your projects stay neatly organized.
        </p>
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
    let first=  ref(true)
    let second= ref(false)
    let third= ref(false)

    function replaceImg(val1, val2, val3) {
      first = val1;
      second = val2;
      third = val3;
      if (val1) {
        replaseColor(
          $refs.featBtn1,
          $refs.featBtn2,
          $refs.featBtn3
        );
        if ($refs.featBtn3.classList.contains("bg-gray-100")) {
          $refs.featBtn2.classList.remove("md:mt-24");
          $refs.featBtn2.classList.add("md:mt-36");
          $refs.featBtn3.classList.add("md:mt-60");
          $refs.featBtn3.classList.remove("md:mt-48");
        }
      }
      if (val2) {
        replaseColor(
          $refs.featBtn2,
          $refs.featBtn1,
          $refs.featBtn3
        );
        if ($refs.featBtn3.classList.contains("md:mt-48")) {
          $refs.featBtn3.classList.remove("md:mt-48");
          $refs.featBtn3.classList.add("md:mt-60");
        }
        $refs.featBtn2.classList.remove("md:mt-32");
        $refs.featBtn2.classList.remove("md:mt-36");
        $refs.featBtn2.classList.add("md:mt-24");
        $refs.featBtn3.classList.add("md:mt-60");
        // console.log(this.$refs.featBtn3.classList)
      }
      if (val3) {
        this.replaseColor(
          this.$refs.featBtn3,
          this.$refs.featBtn1,
          this.$refs.featBtn2
        );
        if (this.$refs.featBtn3.classList.contains("md:mt-28")) {
          this.$refs.featBtn3.classList.remove("md:mt-28");
          this.$refs.featBtn3.classList.add("md:mt-60");
        }
        this.$refs.featBtn2.classList.remove("md:mt-36");
        this.$refs.featBtn2.classList.add("md:mt-24");
        this.$refs.featBtn3.classList.remove("md:mt-60");
        this.$refs.featBtn3.classList.add("md:mt-48");
      }
    };

    function replaseColor(btn1, btn2, btn3) {
      btn1.classList.remove("bg-gray-100");
      btn1.classList.add("bg-red-200");
      btn2.classList.remove("bg-red-200");
      btn3.classList.remove("bg-red-200");

      btn2.classList.add("bg-gray-100");
      btn3.classList.add("bg-gray-100");
    }

</script>
<style scoped>
.back {
  background-image: url("../assets/images/dots-bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
}

</style>