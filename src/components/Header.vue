<script setup lang="ts">
import ResourcesDropdown from "./UI/ResourcesDropdown.vue";
import SvgLogos from "./UI/SvgLogos.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goLogin = () => {
  router.push("/auth/login");
};
const goSignUp = () => {
  router.push("/auth/signup");
};
</script>

<template>
  <header>
    <div class="lg:w-[90w] mx-auto py-2">
      <div
        class="flex w-[100vw] px-[10vw] py-2 justify-between items-center fixed top-0 bg-white z-50"
      >
        <div class="w-[70%] flex items-center">
          <logo class="mx-8"></logo>
          <ul class="flex">
            <li
              class="mx-1 cursor-pointer py-2 px-4 rounded-lg opacity-80 hover:bg-offwhite"
            >
              Features
            </li>
            <li
              class="mx-1 cursor-pointer py-2 px-4 rounded-lg opacity-80 hover:bg-offwhite"
            >
              Templates
            </li>
            <li
              class="mx-1 cursor-pointer py-2 px-4 rounded-lg opacity-80 hover:bg-offwhite"
            >
              For Teams
            </li>
            <li class="">
              <ResourcesDropdown />
            </li>
            <li
              class="mx-1 cursor-pointer py-2 px-4 rounded-lg opacity-80 hover:bg-offwhite"
            >
              Pricing
            </li>
          </ul>
        </div>
        <div class="w-1/5 flex">
          <button
            @click="goLogin"
            class="mx-1 cursor-pointer py-2 px-4 rounded-lg opacity-80 hover:bg-offwhite"
          >
            Log in
          </button>
          <home-button @click="goSignUp"></home-button>
        </div>
      </div>
      <div class="w-full flex flex-col items-center justify-center my-40">
        <h1
          class="text-5xl leading-none mb-4 font-semibold w-[40vw] font-primary text-center"
        >
          Organize your work and life, finally.
        </h1>
        <h3 class="w-[35vw] mb-6 h-14 text-lg text-center font-primary px-1">
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </h3>
        <home-button></home-button>
      </div>

      <div class="w-[full] mt-40 relative flex justify-between items-center">
        <img
          src="/images/bg-left_ec42cae325f6e50083f84e73af60ebc0.webp"
          class="h-[65vh] w-[30%]"
          alt="bg-left"
        />
        <img
          src="/images/illustration_w_1415.webp"
          class="absolute left-[10%] bottom-0 h-[85vh] w-[80%]"
          alt="bg-"
        />
        <img
          src="/images/bg-right_e970a806f622dc0514e793511e4fdf0c.webp"
          class="h-[65vh] w-[30%]"
          alt="bg-left"
        />
      </div>
    </div>
    <section>
      <img
        class="-bottom-[52.5vh] absolute h-[9vh] bg-cover bg-no-repeat"
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
