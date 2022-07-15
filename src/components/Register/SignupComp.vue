<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const backHome = () => {
  router.push("/");
};
const goLogin = () => {
  router.push("/auth/login");
};
const goUseCase = () => {
  router.push("/app/onboard/usecase");
};
</script>

<template>
  <div class="w-[70%] p-4 mx-auto">
    <button @click="backHome" class="flex justify-start items-center">
      <img
        class="w-[33px] h-[35px]"
        src="images/pngwing.com.png"
        alt="todoist"
      />
      <h1 class="font-bold text-2xl mx-3 text-red-600">todoist</h1>
    </button>
    <div class="w-full flex justify-between items-center">
      <div class="w-[47%] px-1 pt-10">
        <h1 class="mt-20 mb-8 font-bold text-3xl text-black">Sign up</h1>
        <button
          @click="goUseCase"
          class="w-full border-solid border border-slate-300 py-3 rounded-[10px] hover:bg-zinc-200 font-bold my-3 flex justify-center items-center"
        >
          <img
            class="w-[20px] h-[20px] mx-2"
            src="icons/google-svgrepo-com.svg"
            alt="google"
          />
          Continue with Google
        </button>
        <button
          class="w-full border-solid border border-slate-300 py-3 rounded-[10px] hover:bg-zinc-200 font-bold my-3 flex justify-center items-center"
        >
          <img
            class="w-[20px] h-[20px] mx-2"
            src="icons/facebook_network_communication_internet_interaction_svgrepo.svg"
            alt="facebook"
          />
          Continue with Facebook
        </button>
        <button
          class="w-full border-solid border border-slate-300 py-3 rounded-[10px] hover:bg-zinc-200 font-bold my-3 flex justify-center items-center"
        >
          <img
            class="w-[20px] h-[20px] mx-2"
            src="icons/apple-macbook-iphone-svgrepo-com.svg"
            alt="apple"
          />
          Continue with Apple
        </button>
        <div class="w-full bg-zinc-200 h-[1px] my-4"></div>
        <form class="w-full">
          <label
            for="emailInp"
            class="w-full block text-[14px] border-solid border border-slate-300 py-1 px-3 rounded-[10px] mt-3"
          >
            Email
            <input
              id="emailInp"
              type="emial"
              placeholder="Enter your email..."
              class="w-full text-base border-0 outline-0"
            />
          </label>
          <p class="m-0 text-xs text-red-600 hidden">
            Please enter a valid email address.
          </p>
          <p class="m-0 text-xs text-red-600 hidden">
            Oh no, this email address is unavailable! Please try a different
            address.
          </p>
          <label
            for="passwordInp"
            class="w-full block text-[14px] border-solid border border-slate-300 py-1 px-3 rounded-[10px] mt-4"
          >
            Password
            <input
              id="passwordInp"
              type="password"
              placeholder="Enter your password..."
              class="w-full text-base border-0 outline-0"
            />
          </label>
          <p class="m-0 text-xs text-red-600 hidden">
            Passwords must be at least 8 characters long.
          </p>
          <input
            @click="goUseCase"
            type="submit"
            value="Sign up with Email"
            class="w-full text-md bg-red-600 text-white border-0 rounded-[10px] py-3 hover:bg-red-700 font-bold my-4 cursor-pointer"
          />
        </form>
        <p class="text-[14px] my-3">
          By continuing with Google, Apple, or Email, you agree to Todoist’s
          <a class="underline cursor-pointer"> Terms of Service</a> and
          <a class="underline cursor-pointer">Privacy Policy.</a>
        </p>
        <div class="w-full bg-zinc-200 h-[1px] my-4"></div>
        <div class="w-full text-center my-4">
          <p class="text-[14px]">
            Already signed up?
            <a @click="goLogin" class="underline cursor-pointer">Go to login</a>
          </p>
        </div>
      </div>
      <div class="w-2/5 flex flex-col-reverse justify-start items-center">
        <img
          class="w-full object-cover"
          src="images/146cee1560ccce6fd533995fcd90e295.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
