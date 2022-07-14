<template>
  <div class="back h-screen">
    <div class="pt-14 mt-5 ml-20">
      <img
        v-show="first"
        class="absolute w-1/2"
        src="../assets/images/mail-tasks.webp"
        alt=""
      />
      <img
        v-show="second"
        class="absolute w-1/2"
        src="../assets/images/comments-file.webp"
        alt=""
      />
      <img
        v-show="third"
        class="absolute w-1/3"
        src="../assets/images/calendar.webp"
        alt=""
      />
    </div>
    <div class="w-1/3 ml-auto mr-5">
      <p class="text-4xl font-bold">
        Centralize all your work in one place
      </p>
      <p class="text-lg ml-1 pr-10">
        Simplify your workflow by connecting Todoist to your email, calendar, and files.
      </p>
    </div>
    <div class="relative mt-10">
      <button
        ref="featBtn1"
        class="absolute mr-20 right-0 w-96 rounded-xl py-5 px-6 bg-red-200"
        @click="replaceImg(true, false, false)"
      >
        <div class="flex items-center">
          <img class="w-5" src="../../public/icons/envelop.png" alt="" />
          <p class="text-xl ml-2 font-semibold">Add tasks via email</p>
        </div>
        <p v-show="first" class="ml-7 text-start">
          by forwarding emails into Todoist as tasks or comments.
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
        @click="replaceImg(false, true, false)"
      >
        <div class="flex items-center">
          <img class="w-5" src="../../public/icons/bubble2.png" alt="" />
          <p class="text-xl ml-2 font-semibold">Comments & file uploads</p>
        </div>
        <p v-show="second" class="ml-7 w-80 text-start">
          (including voice notes) give rich context to your tasks.
        </p>
      </button>
      <button
        ref="featBtn3"
        class="
          absolute
          mr-20
          right-0
          mt-60
          rounded-xl
          py-5
          px-6
          w-96
          bg-gray-100
        "
        @click="replaceImg(false, false, true)"
      >
        <div class="flex items-center">
          <img
            class="w-5"
            src="../../public/icons/calendar.png"
            alt=""
          />
          <p class="text-xl ml-2 font-semibold">Calendar feeds</p>
        </div>
        <p v-show="third" class="ml-7 w-80 text-start">
          display your scheduled tasks inside your calendar of choice.
        </p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesFifthSec",
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
        console.log(this.$refs.featBtn3.classList)
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