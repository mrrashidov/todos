<template>
  <div class="w-screen max-w-full h-auto bg-[#FFF9F3] mt-10">
    <div
      class="footerImgSection w-screen max-w-full h-1/3 flex justify-center items-center"
    >
      <div class="mr-20">
        <img src="@/assets/footer.png" alt="img" class="w-96 mb-20" />
      </div>
      <div class="w-[300px] h-auto flex flex-wrap md:w-[500px]">
        <h1 class="font-bold text-[25px] md:text-[40px]">
          Achieve peace of mind with Todoist
        </h1>
        <button
          class="text-center w-32 h-8 bg-[#E44232] mt-5 rounded-xl text-white text-sm font-bold md:w-44 md:h-12 md:text-xl"
        >
          Open Todist
        </button>
      </div>
    </div>

    <!-- footer 2-part -->

    <div
      class="w-screen max-w-full flex flex-wrap h-auto border-t-2 mx-auto xl:w-3/4 xl:flex-wrap"
    >
      <!-- 2-part 1-stack -->
      <div
        class="w-screen mt-5 h-[100px] flex ml-10 p-4 md:p- md:w-1/2 md:ml-0 md:h-[200px]"
      >
        <div class="w-[300px] h-[150px] flex flex-wrap">
          <div class="w-12 rounded-md color-white">
            <svg
              height="32"
              width="127"
              xmlns="http://www.w3.org/2000/svg"
              class="VaTmTfAskY3Qi32pPFXh7"
            >
              <mask id="td-logo-wordmark_svg__a" fill="#fff">
                <path d="M0 0h32.042v32H0z" fill-rule="evenodd"></path>
              </mask>
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M4.005 0A4.014 4.014 0 000 4v24c0 2.2 1.802 4 4.005 4h24.032c2.203 0 4.005-1.8 4.005-4V4c0-2.2-1.802-4-4.005-4z"
                  fill="#000000"
                  mask="url(#td-logo-wordmark_svg__a)"
                ></path>
                <g fill="#fff">
                  <path
                    d="M6.792 15.157l12.865-7.479c.275-.16.289-.653-.02-.83-.308-.178-.893-.514-1.111-.643a1.004 1.004 0 00-.991.012c-.154.09-10.433 6.06-10.776 6.256-.412.236-.92.24-1.33 0L0 9.287v2.708c1.321.778 4.607 2.71 5.403 3.165.475.27.93.264 1.389-.003"
                  ></path>
                  <path
                    d="M6.792 25.717l12.865-7.479c.275-.16.289-.653-.02-.83-.308-.178-.893-.514-1.111-.643a1.004 1.004 0 00-.991.012c-.154.09-10.433 6.06-10.776 6.256-.412.236-.92.24-1.33 0L0 19.847v2.708c1.321.778 4.607 2.71 5.403 3.165.475.27.93.264 1.389-.003"
                  ></path>
                  <path
                    d="M6.792 20.277l12.865-7.479c.275-.16.289-.653-.02-.83-.308-.178-.893-.514-1.111-.643a1.004 1.004 0 00-.991.012c-.154.09-10.433 6.06-10.776 6.256-.412.236-.92.24-1.33 0L0 14.407v2.708c1.321.778 4.607 2.71 5.403 3.165.475.27.93.264 1.389-.003"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <p class="text-[18px] mt-5 md:text-lg">
            Join millions of people who organize work and life with Todoist.
          </p>
          <ul
            class="flex flex-wrap  w-44 items-center mt-5  justify-between ">
           <li v-for="item in images" :key="item.id">
            <a :href="item.href">
              <img :src="item.url" :alt="item.alt" :class="item.style" >
            </a>
           </li>
     
          </ul>
        </div>
      </div>

      <!-- 2-part 2-stack -->

       <div
        class="w-[200px] h-1/3 mt-20 flex flex-wrap ml-10 p-4 xl:mt-0 md:w-1/2 md:p-0 md:ml-0 md:mt-2 md:justify-evenly"
      >
        <ul class="mt-0 md:mt-0">
          <li
            class="mt-[15px] w-fit h-[30px] cursor-pointer"
            :class="[
              item.id == 1
                ? 'text-sm text-[#575757]'
                : ' text-[#1F1F1F] text-lg hover:border-b-2 border-black ',
            ]"
            v-for="item in footer_1"
            :key="item.id"
          >
            {{ item.name }}
          </li>
        </ul>
        <ul class="mt-10 md:mt-0">
          <li
            class="mt-[15px] w-fit h-[30px] cursor-pointer"
            :class="[
              item.id == 1
                ? 'text-sm text-[#575757] '
                : ' text-[#1F1F1F] text-lg hover:border-b-2 border-black ',
            ]"
            v-for="item in footer_2"
            :key="item"
          >
            {{ item.name }}
          </li>
        </ul>
        <ul class="mt-10 md:mt-0">
          <li
            class="mt-[15px] w-fit h-[30px] cursor-pointer"
            :class="[
              item.id == 1
                ? 'text-sm text-[#575757] '
                : ' text-[#1F1F1F] text-lg hover:border-b-2 border-black ',
            ]"
            v-for="item in footer_3"
            :key="item"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <!-- 3-part -->
    <div
      class="w-screen h-[60px] mt-10 max-w-full bg-[#0000000D] flex items-center justify-around"
    >
      <div
        class="w-[300px] flex justify-around items-center border-1 border-black"
      >
        <p class="text-lg text-[#575757] cursor-pointer">Security</p>
        <div
          class="border-[1px] border-solid border-[#6b6b6b] w-[0px] h-[12px]"
        ></div>
        <p class="text-lg text-[#575757] cursor-pointer">Privacy</p>
        <div
          class="border-[1px] border-solid border-[#6b6b6b] w-[0px] h-[12px]"
        ></div>
        <p class="text-lg text-[#575757] cursor-pointer">Terms</p>
        <img src="@/assets/copyright.png" alt="image" class="w-3 h-3 ml-3" />
        <p class="text-sm text-[#575757] cursor-pointer">Doist Inc</p>
      </div>
      <div
        class="xl:w-36 relative flex justify-evenly items-center bg-[#cdcdcd] rounded-lg"
      >
        <img src="@/assets/internet.png" alt="image" class="w-5 h-5 ml-3" />

        <select
          class="form-select cursor-pointer block w-full px-3 py-1.5 text-base focus:border-blue-600 font-normal text-gray-700 bg-[#cdcdcd] bg-clip-padding border-gray-300 rounded-lg transition ease-in-out outline-none m-0 focus:text-gray-700"
          aria-label="Default select example"
        >
          <option selected>English</option>
          <option value="1">Uzbek</option>
          <option value="2">Russian</option>
          <option value="3">Deutch</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";


const images = ref([
  {
    id:1,
    url:'images/facebook.png',
    href:"https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjLx5TTgvb4AhWCAKIDHU-KBZcYABAAGgJsZQ&ae=2&ohost=www.google.com&cid=CAESbeD2NbuKhUP5SEruJ8pezeiOBQu4FCTwY7PPtNxKRfeVLqWJViL2bGqKkbBvrScyCBTSk2sq776_znWca63N0dhWRJ6uRuuzOldZuQYzxiSWLE-tKXejY2oOoMrzLN8-uBfWXcwQHx2uvVgcu7k&sig=AOD64_12y68Qde7QjRzI8P0NJAXCyBgQzA&q&adurl&ved=2ahUKEwjx3IzTgvb4AhWEw4sKHVJ6AboQ0Qx6BAgDEAE",
    alt:'facebook',
    style:'cursor-pointer w-6'
  },
    {
    id:2,
    url:'images/instagram.png',
    href:"https://www.instagram.com/",
    alt:'instagram',
    style:'cursor-pointer w-6 '
  },
    {
    id:3,
    url:'images/youtube.png',
    href:"https://www.youtube.com/",
    alt:'you tube',
    style:'cursor-pointer w-7'
  },
    {
    id:4,
    url:'images/twitter.png',
    href:"https://twitter.com/?lang=ru",
    alt:'twitter',
    style:'cursor-pointer w-6'
  }
])

const footer_1 = ref([
  {
    id: 1,
    name: "FEATURES",
  },
  {
    id: 2,
    name: "How It Works",
  },
  {
    id: 3,
    name: "For Teams",
  },
  {
    id: 4,
    name: "Pricing",
  },
  {
    id: 5,
    name: "Templates",
  },
]);
const footer_2 = ref([
  {
    id: 1,
    name: "RESOURCES",
  },

  {
    id: 2,
    name: "Download App",
  },
  {
    id: 3,
    name: "Help Center",
  },
  {
    id: 4,
    name: "Refer a Friend ",
  },
  {
    id: 5,
    name: "Integration",
  },
  {
    id: 6,
    name: "Channel Partners",
  },

  {
    id: 7,
    name: "Developer API",
  },
  {
    id: 8,
    name: "Status",
  },
]);

const footer_3 = ref([
  {
    id: 1,
    name: "ABOUT US",
  },
  {
    id: 2,
    name: "We are hiring",
  },
  {
    id: 3,
    name: "Blog",
  },
  {
    id: 4,
    name: "Press",
  },
  {
    id: 5,
    name: "Twist",
  },
]);
</script>