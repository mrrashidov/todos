<template>
  <div class="back h-screen">
    <div class=" pt-1 ml-72">
      <img
        v-show="first"
        class="absolute w-1/4"
        src="../assets/images/delegate-tasks.webp"
        alt=""
      />
      <img
        v-show="second"
        class="absolute w-1/4"
        src="../assets/images/notifications.webp"
        alt=""
      />
    </div>
    <div class="w-1/3 ml-auto mt-28 mr-20">
      <p class="text-4xl font-bold">
        Share the workload
      </p>
      <p class="text-lg ml-1 pr-10">
       From business ventures to grocery lists, divide and conquer your daily tasks in shared projects.
      </p>
    </div>
    <div class="relative mt-10 mr-16">
      <button
        ref="featBtn1"
        class="absolute mr-20 right-0 w-96 rounded-xl py-5 px-6 bg-red-200"
        @click="replaceImg(true, false)"
      >
        <div class="flex items-center">
          <img class="w-5" src="../../public/icons/user-plus.png" alt="" />
          <p class="text-xl ml-2 font-semibold">Delegate tasks</p>
        </div>
        <p v-show="first" class="ml-7 text-start">
          to other people and free up your mental space.
        </p>
      </button>
      <button
        ref="featBtn2"
        class="
          absolute
          mr-20
          right-0
          mt-36
          rounded-xl
          py-5
          px-6
          w-96
          bg-gray-100
        "
        @click="replaceImg(false, true)"
      >
        <div class="flex items-center">
          <img class="w-4" src="../../public/icons/bell.png" alt="" />
          <p class="text-xl ml-2 font-semibold">Notifications</p>
        </div>
        <p v-show="second" class="ml-7 w-80 text-start">
          let you know when people post comments, complete tasks, and more.
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
        this.$refs.featBtn2.classList.remove("mt-24");
        this.$refs.featBtn2.classList.add("mt-32");
      }
      if (val2) {
        this.replaseColor(this.$refs.featBtn2, this.$refs.featBtn1);
        this.$refs.featBtn2.classList.remove("mt-32");
        this.$refs.featBtn2.classList.add("mt-24");
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