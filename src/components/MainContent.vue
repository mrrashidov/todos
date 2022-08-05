<template>
  <section class="bg-white">
    <div class="lg:w-[1024px] mx-auto">
      <div class="w-[60px] h-[1.2px] bg-red-600"></div>
      <div class="w-full py-8">
        <h1 class="font-bold w-4/5 text-3xl my-1.5 text-[#1F1F1F]">
          Delightfully simple and deceptively powerful task management
        </h1>
        <p
          class="w-4/5 text-[22px] font-normal leading-7 my-1.5 text-[#575757]"
        >
          30 million+ people organize billions of tasks in Todoist for their
          work, education, and personal life.
        </p>
        <div class="w-full flex flex-wrap justify-between items-center">
          <div
            v-for="mainData in mainDatas"
            :key="mainData.id"
            class="w-[45%] my-4"
          >
            <img
              class="w-[100px] h-[90px]"
              :src="mainData.img"
              alt="todoist-main-img"
            />
            <h3 class="my-1.5 font-medium text-2xl">
              {{ mainData.headTitle }}
            </h3>
            <p class="text-base font-normal leading-7 my-1.5 text-[#575757]">
              {{ mainData.title }}
            </p>
            <a
              class="no-underline text-1xl text-[#378AEE] hover:underline"
              href=""
              >{{ mainData.link }}</a
            >
          </div>
        </div>
      </div>
      <div class="w-[60px] h-[1.2px] bg-red-600"></div>
      <div class="w-full py-8">
        <div class="w-full flex justify-between items-center">
          <div class="w-[30%]">
            <h1 class="font-bold text-3xl my-1.5">
              A task manager you can trust for life
            </h1>
            <p class="text-[18px] font-normal leading-7 my-1.5 text-[#575757]">
              We’ve been building Todoist for 15 years and 160 days.
              <a
                class="no-underline text-1xl text-[#378AEE] hover:underline"
                href=""
                >We're in it for the long haul.</a
              >
            </p>
          </div>
          <div v-for="mainTask in mainTasks" :key="mainTask.id" class="w-[15%]">
            <img
              class="w-[150px]"
              :src="mainTask.img"
              alt="{{mainTask.title}}"
            />
            <h3 class="my-1 font-bold text-[20px]">{{ mainTask.headTitle }}</h3>
            <p class="text-base font-normal leading-7 my-1 text-[#575757]">
              {{ mainTask.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup  lang="ts">
import { ref } from "vue";
const mainDatas = ref([
  {
    id: 1,
    img: "images/icon-1_ad640abe99c49ae1a0c9eb05bb104956.webp",
    headTitle: "With you everywhere",
    title:
      "Use Todoist’s apps, extensions and widgets on any device or platform.",
    link: "-> Download apps",
  },
  {
    id: 2,
    img: "images/icon-2_4210d085bc16b95d19ee9605ca20a8d5.webp",
    headTitle: "There’s a template for that",
    title:
      "Hundreds of templates are available to get you started with whatever’s on your plate.",
    link: "-> Start with templates",
  },
  {
    id: 3,
    img: "images/icon-3_934c1a18c604c9a66c9b964a973bea5f.webp",
    headTitle: "Make Todoist yours",
    title:
      "Customize your to-do list with filters, labels, priorities, and more.",
    link: "-> See all features",
  },
  {
    id: 4,
    img: "images/icon-4_f546eb9c7155fd7ea242af71babeeeca.webp",
    headTitle: "Connect with your other tools",
    title:
      "Link Todoist with your calendar, voice assistant, and 30+ other tools.",
    link: "-> Install integrations",
  },
  {
    id: 5,
    img: "images/icon-5_e69e3f0df7d5163b16ea9cd82df9bec9.webp",
    headTitle: "Productivity Methods",
    title:
      "Personal productivity recommendations based on your unique traits and strengths.",
    link: "-> Take the quiz",
  },
]);

const mainTasks = ref([
  {
    id: 1,
    img: "images/icon-6_f82782a12a887c709e39ecf02741af8a.webp",
    headTitle: "30 million+",
    title: "app download",
  },
  {
    id: 2,
    img: "images/icon-7_3cdfd11975b2d14cf4ee942720cd1cc7.webp",
    headTitle: "2 billion+",
    title: "tasks completed",
  },
  {
    id: 3,
    img: "images/icon-8_3909c68a367c5cce654cd2d9ae010f52.webp",
    headTitle: "160 countries+",
    title: "user locations",
  },
  {
    id: 4,
    img: "images/icon-9_a178c84304f35d44c31fbc4aa3f660f5.webp",
    headTitle: "1 million+",
    title: "pro users",
  },
]);
</script>