<template>
  <div class="back h-screen">
    <div 
      class="
        md:pt-14 md:mt-5 md:-ml-36
        sm:pt-32 sm:translate-x-1/3 sm:ml-0">
      <img
        v-show="first"
        class="
          md:absolute md:w-1/5
          sm:w-1/3"
        src="../assets/images/delegate-tasks.webp"
        alt=""
      />
      <img
        v-show="second"
        class="
          md:absolute md:w-1/4
          sm:w-1/3"
        src="../assets/images/notifications.webp"
        alt=""
      />
    </div>
    <div 
      class="
        md:w-1/3 md:ml-auto md:mr-5 md:right-0 md:relative md:top-0
        sm:absolute sm:w-full sm:pb-10 sm:top-[210%]">
      <p class="text-4xl font-bold">
        Share the workload
      </p>
      <p class="text-lg ml-1 pr-10">
       From business ventures to grocery lists, divide and conquer your daily tasks in shared projects.
      </p>
    </div>
    <div  
        class="relative mt-10 md:mr-10
        sm:ml-10">
      <button
        ref="featBtn1"
        class="
          md:absolute md:mr-20 md:right-0 md:w-96 md:rounded-xl md:py-5 md:px-6 bg-red-200
          sm:w-[45%] sm:rounded-lg sm:p-1 sm:text-center"
        @click="replaceImg(true, false)">
        <div class="
          flex items-center 
          sm:pt-1 sm:pl-2">
          <img class="md:w-4 sm:w-[15px]" src="../../public/icons/user-plus.png" alt="" />
          <p class="
            md:text-xl ml-2 md:font-semibold 
            sm:text-md sm:font-semibold">Delegate tasks</p>
        </div>
        <p v-show="first" 
          class="
            md:ml-7 md:text-start md:text-base
            sm:text-xs sm:text-start sm:ml-7">
          to other people and free up your mental space.
        </p>
      </button>
      <button
        ref="featBtn2"
        class="
          md:absolute md:mr-20 md:right-0 md:mt-36 md:w-96 md:rounded-xl md:py-5 md:px-6 bg-gray-100
          sm:w-[45%] sm:rounded-lg sm:p-1 sm:ml-2"
        @click="replaceImg(false, true)">
        <div 
          class="
            flex items-center
            sm:pt-1 sm:pl-2">
          <img class="w-4" src="../../public/icons/loop.png" alt="" />
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
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesFourthSec",
  data() {
    return {
      first: true,
      second: false,
    };
  },
  methods: {
    replaceImg(val1, val2) {
      this.first = val1;
      this.second = val2;
      if (val1) {
        this.replaseColor(this.$refs.featBtn1, this.$refs.featBtn2);
        this.$refs.featBtn2.classList.remove("md:mt-24");
        this.$refs.featBtn2.classList.add("md:mt-36");
      }
      if (val2) {
        this.replaseColor(this.$refs.featBtn2, this.$refs.featBtn1);
        this.$refs.featBtn2.classList.remove("md:mt-36");
        this.$refs.featBtn2.classList.add("md:mt-24");
      }
    },
    replaseColor(btn1, btn2) {
      btn1.classList.remove("bg-gray-100");
      btn1.classList.add("bg-red-200");
      btn2.classList.remove("bg-red-200");
      btn2.classList.add("bg-gray-100");
    },
  },
};
</script>
<style scoped>
.back {
  background-image: url("../assets/images/dots-bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>