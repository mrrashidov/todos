<template>
  <div class="back h-screen w-screen mt-20 pl-20">
    <div>
      <div class="w-1/3 ml-10 pb-5">
        <p class="text-4xl font-bold">Focus your energy on the right things</p>
        <p class="text-lg ml-1 pr-10">
          Todoist surfaces the right tasks at the right times so you always know
          what to focus on next.
        </p>
      </div>
      <div class="ml-10 relative">
        <button
          ref="featBtn1"
          class="absolute left-0 w-96 rounded-xl py-5 px-6 bg-red-200"
          @click="replaceImg(true, false, false)"
        >
          <div class="flex items-center">
            <img class="w-4" src="../../public/icons/flag.png" alt="" />
            <p class="text-xl ml-2 font-semibold">Priority levels</p>
          </div>
          <p v-show="first" class="ml-7 text-start">
            highlight the day’s most important tasks.
          </p>
        </button>
        <button
          ref="featBtn2"
          class="absolute left-0 mt-36 rounded-xl py-5 px-6 w-96 bg-gray-100"
          @click="replaceImg(false, true, false)"
        >
          <div class="flex items-center">
            <img class="w-4" src="../../public/icons/heart.svg" alt="" />
            <p class="text-xl ml-2 font-semibold">Favorites</p>
          </div>
          <p v-show="second" class="ml-7 w-80 text-start">
            keep key projects, labels, or filters top of mind.
          </p>
        </button>
        <button
          ref="featBtn3"
          class="absolute left-0 mt-60 rounded-xl py-5 px-6 w-96 bg-gray-100"
          @click="replaceImg(false, false, true)"
        >
          <div class="flex items-center">
            <img
              class="w-4"
              src="../../public/icons/alarm.svg"
              alt=""
            />
            <p class="text-xl ml-2 font-semibold">
                Reminders
                <span class="border-solid rounded-lg border-2 text-xs font-extralight border-slate-400 p-0.5">PRO PLAN</span>
            </p>
          </div>
          <p v-show="third" class="ml-7 w-80 text-start">
            ensure that your projects stay neatly organized.
          </p>
        </button>
      </div>
    </div>
    <div class="translate-x-1/3 pl-36 -translate-y-40">
      <img
        v-show="first"
        class="absolute w-1/2"
        src="../assets/images/features-sec-3.1.webp"
        alt=""
      />
      <img
        v-show="second"
        class="absolute w-1/2"
        src="../assets/images/features-sec-2.2.webp"
        alt=""
      />
      <img
        v-show="third"
        class="absolute w-1/3 -mt-10"
        src="../assets/images/features-sec-3.3.webp"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesThirdSec",
  data() {
    return {
      first: true,
      second: false,
      third: false,
    };
  },
  methods: {
    replaceImg(val1, val2, val3) {
      this.first = val1;
      this.second = val2;
      this.third = val3;
      if (val1) {
        this.replaseColor(
          this.$refs.featBtn1,
          this.$refs.featBtn2,
          this.$refs.featBtn3
        );
        if (this.$refs.featBtn3.classList.contains("bg-gray-100")) {
          this.$refs.featBtn2.classList.remove("mt-24");
          this.$refs.featBtn2.classList.add("mt-36");
          this.$refs.featBtn3.classList.add("mt-60");
          this.$refs.featBtn3.classList.remove("mt-48");
        }
      }
      if (val2) {
        this.replaseColor(
          this.$refs.featBtn2,
          this.$refs.featBtn1,
          this.$refs.featBtn3
        );
        if (this.$refs.featBtn3.classList.contains("mt-48")) {
          this.$refs.featBtn3.classList.remove("mt-48");
          this.$refs.featBtn3.classList.add("mt-60");
        }
        this.$refs.featBtn2.classList.remove("mt-32");
        this.$refs.featBtn2.classList.remove("mt-36");
        this.$refs.featBtn2.classList.add("mt-24");
        this.$refs.featBtn3.classList.add("mt-60");
        console.log(this.$refs.featBtn3.classList);
      }
      if (val3) {
        this.replaseColor(
          this.$refs.featBtn3,
          this.$refs.featBtn1,
          this.$refs.featBtn2
        );
        if (this.$refs.featBtn3.classList.contains("mt-28")) {
          this.$refs.featBtn3.classList.remove("mt-28");
          this.$refs.featBtn3.classList.add("mt-60");
        }
        this.$refs.featBtn2.classList.remove("mt-36");
        this.$refs.featBtn2.classList.add("mt-24");
        this.$refs.featBtn3.classList.remove("mt-60");
        this.$refs.featBtn3.classList.add("mt-48");
        console.log(this.$refs.featBtn3.classList);
      }
    },
    replaseColor(btn1, btn2, btn3) {
      btn1.classList.remove("bg-gray-100");
      btn1.classList.add("bg-red-200");
      btn2.classList.remove("bg-red-200");
      btn3.classList.remove("bg-red-200");

      btn2.classList.add("bg-gray-100");
      btn3.classList.add("bg-gray-100");
    },
    moveBtn(val1, val2) {},
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