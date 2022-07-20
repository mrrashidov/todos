<template>
  <div class="back md:h-screen md:w-screen md:mt-20  md:pl-20">
    <div>
      <div class="
          md:w-1/3 md:ml-10 md:pb-5
          ">
        <p class="
            md:text-4xl font-bold
            sm:text-3xl">
          Focus your energy on the right things
        </p>
        <p class="
            md:text-lg md:ml-1 md:pr-10
            sm:text-xl">
          Todoist surfaces the right tasks at the right times so you always know
          what to focus on next.
        </p>
      </div>
      <div class="
            md:ml-10 md:absolute md:-mt-5
            sm:mt-80">
        <button ref="featBtn1" class="
              md: md:mr-20 md:right-0 md:w-96 md:rounded-xl md:py-5 md:px-6 bg-red-200
              sm:w-[28%] sm:rounded-lg sm:p-1 sm:text-center" @click="replaceImg(true, false, false)">
          <div class="
          flex items-center 
          sm:pt-1 sm:pl-2">
            <img class="md:w-4 sm:w-[13px]" src="../../public/icons/flag.png" alt="" />
            <p class="
            md:text-xl ml-2 md:font-semibold 
            sm:text-md sm:font-semibold">Priority levels</p>
          </div>
          <p v-show="first" class="
            md:ml-7 md:text-start md:text-base
            sm:text-xs sm:text-center">
            highlight the day’s most important tasks.
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
          <img class="w-4" src="../../public/icons/heart.svg" alt="" />
          <p 
            class="md:text-xl md:ml-2 md:font-semibold
            sm:text-md sm:ml-1.5 sm:font-semibold">Favorites</p>
        </div>
        <p v-show="second" 
          class="md:ml-7 md:text-base md:w-80 md:text-start
          sm:text-xs sm:text-center">
          keep key projects, labels, or filters top of mind.
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
            src="../../public/icons/alarm.svg"
            alt=""
          />
          <p 
            class="
              md:text-xl ml-2 font-semibold">
                Reminders
                <span class="border-solid rounded-lg border-2 text-xs font-extralight border-slate-400 p-0.5">PRO PLAN</span>
          </p>
        </div>
        <p v-show="third" 
          class="
            md:ml-7 md:w-80 md:text-start md:text-base
            sm:text-xs sm:text-center">
          alert you about your most time-sensitive tasks.
        </p>
      </button>
      </div>
    </div>
    <div class="
          md:translate-x-1/3 md:pl-36 md:-translate-y-40 
          sm:pl-0 sm:translate-x-1/4 sm:-translate-y-[350px]">
      <img v-show="first" class="absolute w-1/2" src="../assets/images/features-sec-3.1.webp" alt="" />
      <img v-show="second" class="absolute w-1/2" src="../assets/images/features-sec-2.2.webp" alt="" />
      <img v-show="third" class="absolute w-1/3 -mt-10" src="../assets/images/features-sec-3.3.webp" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
    let first= ref(true)
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
      }
      if (val3) {
        replaseColor(
          $refs.featBtn3,
          $refs.featBtn1,
          $refs.featBtn2
        );
        if ($refs.featBtn3.classList.contains("md:mt-28")) {
          $refs.featBtn3.classList.remove("md:mt-28");
          $refs.featBtn3.classList.add("md:mt-60");
        }
        $refs.featBtn2.classList.remove("md:mt-36");
        $refs.featBtn2.classList.add("md:mt-24");
        $refs.featBtn3.classList.remove("md:mt-60");
        $refs.featBtn3.classList.add("md:mt-48");
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