<template>
  <header>
    <div class="lg:w-[1200px] mx-auto py-2">
      <div class="w-full flex justify-between items-center">
        <div class="w-[70%] flex items-center">
          <logo class="mx-8"></logo>
          <ul class="flex">
            <li
              class="mx-1 cursor-pointer py-2 px-4 rounded-lg opacity-80 hover:bg-[#f2f2f2]"
            >
              Features
            </li>
            <li
              class="mx-1 cursor-pointer py-2 px-4 rounded-lg opacity-80 hover:bg-[#f2f2f2]"
            >
              Templates
            </li>
            <li
              class="mx-1 cursor-pointer py-2 px-4 rounded-lg opacity-80 hover:bg-[#f2f2f2]"
            >
              For Teams
            </li>
            <li class="">
              <ResourcesDropdown />
            </li>
            <li
              class="mx-1 cursor-pointer py-2 px-4 rounded-lg opacity-80 hover:bg-[#f2f2f2]"
            >
              Pricing
            </li>
          </ul>
        </div>
        <div class="w-1/5 flex">
          <button
            @click="goLogin()"
            class="mx-1 cursor-pointer py-2 px-4 rounded-lg opacity-80 hover:bg-[#f2f2f2]"
          >
            Log in
          </button>
          <home-button></home-button>
        </div>
      </div>
      <div class="w-full flex flex-col items-center justify-center my-40">
        <h1
          class="text-[52px] leading-[57px] mb-4 font-semibold w-[500px] font-primary text-center"
        >
          Organize your work and life, finally.
        </h1>
        <h3
          class="w-[475px] mb-6 h-[57px] text-[19px] text-center font-primary px-1"
        >
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </h3>
        <home-button></home-button>
      </div>

      <div class="w-full mt-40 relative flex justify-between items-center">
        <img
          src="/images/bg-left_ec42cae325f6e50083f84e73af60ebc0.webp"
          class="h-[430px] w-[30%]"
          alt="bg-left"
        />
        <img
          src="/images/illustration_w_1415.webp"
          class="absolute left-[10%] bottom-0 h-[540px] w-[80%]"
          alt="bg-"
        />
        <img
          src="/images/bg-right_e970a806f622dc0514e793511e4fdf0c.webp"
          class="h-[430px] w-[30%]"
          alt="bg-left"
        />
      </div>
    </div>
    <section>
      <img
        class="-bottom-[400px] absolute h-[50px] bg-cover bg-no-repeat"
        src="images/divider_f625c1fef62e9c77f1e13273b39a5512.webp"
        alt=""
      />
    </section>
    <section
      class="h-[220px] bg-[url('images/bg-bottom_a7658f3d5a0484f945cf163403fa36d4.webp')] bg-cover bg-no-repeat"
    >
      <div class="lg:w-[600px] flex justify-between mx-auto py-2">
        <div>
          <p class="font-primary text-[12px] font-medium mb-2">
            300,000+ REVIEWS
          </p>
          <p class="font-primary text-[18px] font-semibold mb-2">★★★★★</p>
          <p class="font-primary text-[18px] font-semibold">
            App Store and Google Play
          </p>
        </div>
        <div>
          <p class="font-primary text-[12px] font-medium">
            USED BY INDIVIDUALS AND TEAMS AT
          </p>
          <SvgLogos />
        </div>
      </div>
    </section>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResourcesDropdown from "./UI/ResourcesDropdown.vue";

export default defineComponent({
  components: { ResourcesDropdown },
  methods: {
    goLogin() {
      this.$router.push("/auth/login");
    },
  },
});
</script>
