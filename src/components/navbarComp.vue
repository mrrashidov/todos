<template>
    <div class="lg:w-[90w] mx-auto py-2">
      <div
        class="
          flex
          w-[100vw]
          px-[10vw]
          py-2
          justify-between
          items-center
          fixed
          top-0
          bg-white
          z-50
        "
      >
        <div class="w-[70%] flex items-center">
          <logo class="mx-8"></logo>
          <ul class="flex">
            <li
              @click="goFeatures()"
              class="
                mx-1
                cursor-pointer
                py-2
                px-4
                rounded-lg
                opacity-80
                hover:bg-offwhite
              "
            >
              Features
            </li>
            <li
              class="
                mx-1
                cursor-pointer
                py-2
                px-4
                rounded-lg
                opacity-80
                hover:bg-offwhite
              "
            >
              Templates
            </li>
            <li
              class="
                mx-1
                cursor-pointer
                py-2
                px-4
                rounded-lg
                opacity-80
                hover:bg-offwhite
              "
            >
              For Teams
            </li>
            <li class="">
              <ResourcesDropdown />
            </li>
            <li
              class="
                mx-1
                cursor-pointer
                py-2
                px-4
                rounded-lg
                opacity-80
                hover:bg-offwhite
              "
            >
              Pricing
            </li>
          </ul>
        </div>
        <div class="w-1/5 flex">
          <button
            @click="goLogin"
            class="
              mx-1
              cursor-pointer
              py-2
              px-4
              rounded-lg
              opacity-80
              hover:bg-offwhite
            "
          >
            Log in
          </button>
          <home-button @click="goSignUp"></home-button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goLogin = () => {
  router.push("/auth/login");
};
const goSignUp = () => {
  router.push("/auth/signup");
};
const goFeatures = () => {
  router.push("/features");
};
</script>

<style>

</style>