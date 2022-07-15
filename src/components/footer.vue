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
          <p class="text-[18px] md:text-lg">
            Join millions of people who organize work and life with Todoist.
          </p>
          <ul
            class="flex flex-wrap justify-between w-[130px] items-center mt-5"
          >
            <li v-for="item in footer_icons" :key="item.id">
              <a :href="item.href">
                <svg
                  :class="item.class"
                  :width="item.width"
                  :alt="item.alt"
                  :height="item.height"
                  :viewBox="item.viewBox"
                  :xmnls="item.xmlns"
                >
                  <path
                    :d="item.d"
                    :fill="item.fill"
                    :file-rule="item.fill_rule"
                    :clip-rule="item.clip_rule"
                  />
                </svg>
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
                ? 'text-sm text-[#575757] '
                : ' text-[#1F1F1F] text-lg hover:border-b-2 border-black w-auto',
            ]"
            v-for="item in footer_1"
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
const footer_icons = ref([
  {
    id: 1,
    class:
      "rounded-full transition ease-in-out delay-10 fill-none bg-[#575757] hover:bg-[#000000]",
    alt: "facebook",
    href: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjtyYy7m_P4AhWUBaIDHQcnCQgYABAAGgJsZQ&ae=2&ohost=www.google.com&cid=CAESbeD2qjc2RlMuLiXrGBxBMuM-QcqvlqRmrvKuMStQrLl_5X2FL7HJ-w96BlNMp8no2kCUDlYq05JB-aQruoODlhHxHSTkIu-f37EdKg5WHe7VSTR7iPm8c-lxIBfiYGg1Pq_ooW_bPsT3ZFJ8TbI&sig=AOD64_1mk0nfQ421sW_10x3nQXwKxXkxJQ&q&adurl&ved=2ahUKEwi9wIS7m_P4AhUDqYsKHUeaAp8Q0Qx6BAgDEAE",
    width: "25",
    height: "25",
    viewBox: "0 0 11 20",
    xmnls: "http://www.w3.org/2000/svg",
    d: "M10.2792 11.2494L10.8498 7.63H7.28305V5.28125C7.28305 4.29125 7.78113 3.32562 9.37869 3.32562H11V0.244375C11 0.244375 9.52888 0 8.12195 0C5.18485 0 3.26508 1.73375 3.26508 4.87187V7.63062H0V11.25H3.26508V20H7.28305V11.25L10.2792 11.2494Z",
    fill: "#fff",
  },
  {
    id: 2,
    class:
      "fill-[#575757] transition ease-in-out delay-10 hover:fill-[#000000]",
    alt: "instagram",
    href: "https://www.instagram.com/",
    width: "25",
    height: "25",
    viewBox: "0 0 20 20",
    xmnls: "http://www.w3.org/2000/svg",
    d: "M10.0022 4.87225C7.16453 4.87225 4.87563 7.16166 4.87563 10C4.87563 12.8383 7.16453 15.1277 10.0022 15.1277C12.8399 15.1277 15.1288 12.8383 15.1288 10C15.1288 7.16166 12.8399 4.87225 10.0022 4.87225ZM10.0022 13.3337C8.16843 13.3337 6.66927 11.8387 6.66927 10C6.66927 8.16133 8.16397 6.6663 10.0022 6.6663C11.8405 6.6663 13.3352 8.16133 13.3352 10C13.3352 11.8387 11.836 13.3337 10.0022 13.3337ZM16.5343 4.6625C16.5343 5.32746 15.9989 5.85853 15.3385 5.85853C14.6737 5.85853 14.1428 5.32299 14.1428 4.6625C14.1428 4.00201 14.6782 3.46647 15.3385 3.46647C15.9989 3.46647 16.5343 4.00201 16.5343 4.6625ZM19.9297 5.87638C19.8539 4.27424 19.488 2.85507 18.3146 1.68582C17.1456 0.516568 15.7267 0.150619 14.1249 0.070289C12.4741 -0.0234297 7.52593 -0.0234297 5.87507 0.070289C4.27775 0.146156 2.8589 0.512105 1.68544 1.68136C0.511991 2.85061 0.150586 4.26978 0.0702733 5.87192C-0.0234244 7.52315 -0.0234244 12.4724 0.0702733 14.1236C0.146124 15.7258 0.511991 17.1449 1.68544 18.3142C2.8589 19.4834 4.27328 19.8494 5.87507 19.9297C7.52593 20.0234 12.4741 20.0234 14.1249 19.9297C15.7267 19.8538 17.1456 19.4879 18.3146 18.3142C19.4835 17.1449 19.8494 15.7258 19.9297 14.1236C20.0234 12.4724 20.0234 7.52761 19.9297 5.87638ZM17.797 15.8953C17.449 16.7701 16.7752 17.4439 15.8963 17.7965C14.58 18.3186 11.4568 18.1981 10.0022 18.1981C8.54769 18.1981 5.41997 18.3142 4.1082 17.7965C3.23369 17.4484 2.55996 16.7745 2.20747 15.8953C1.68544 14.5788 1.80591 11.4549 1.80591 10C1.80591 8.54513 1.68991 5.41671 2.20747 4.10465C2.55549 3.22995 3.22922 2.55606 4.1082 2.2035C5.42443 1.68136 8.54769 1.80185 10.0022 1.80185C11.4568 1.80185 14.5845 1.68582 15.8963 2.2035C16.7708 2.5516 17.4445 3.22548 17.797 4.10465C18.319 5.42118 18.1985 8.54513 18.1985 10C18.1985 11.4549 18.319 14.5833 17.797 15.8953Z",
  },
  {
    id: 3,
    class:
      "fill-[#575757] transition ease-in-out delay-10 hover:fill-[#000000]",
    alt: "you tube",
    href: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjtyYy7m_P4AhWUBaIDHQcnCQgYABAAGgJsZQ&ae=2&ohost=www.google.com&cid=CAESbeD2qjc2RlMuLiXrGBxBMuM-QcqvlqRmrvKuMStQrLl_5X2FL7HJ-w96BlNMp8no2kCUDlYq05JB-aQruoODlhHxHSTkIu-f37EdKg5WHe7VSTR7iPm8c-lxIBfiYGg1Pq_ooW_bPsT3ZFJ8TbI&sig=AOD64_1mk0nfQ421sW_10x3nQXwKxXkxJQ&q&adurl&ved=2ahUKEwi9wIS7m_P4AhUDqYsKHUeaAp8Q0Qx6BAgDEAE",
    width: "29",
    height: "20",
    viewBox: "0 0 29 20",
    xmnls: "http://www.w3.org/2000/svg",
    d: "M28.3976 3.08479C28.2314 2.49051 27.9145 1.94921 27.4777 1.51333C27.0408 1.07744 26.4989 0.761728 25.9042 0.596762C23.6721 2.8529e-05 14.6987 2.86733e-05 14.6987 2.86733e-05C14.6987 2.86733e-05 5.74231 -0.014286 3.48689 0.596762C2.89319 0.762452 2.35228 1.07849 1.91644 1.51434C1.48059 1.95019 1.16455 2.4911 0.998857 3.08479C0.574971 5.36993 0.3662 7.68978 0.375284 10.0139C0.371148 12.3268 0.579886 14.6352 0.998857 16.9099C1.16508 17.5039 1.48122 18.0452 1.91691 18.4818C2.35261 18.9185 2.89324 19.2358 3.48689 19.4033C5.71905 20 14.6987 20 14.6987 20C14.6987 20 23.6497 20 25.9042 19.4033C26.4988 19.2365 27.0405 18.9195 27.4772 18.4828C27.9139 18.0462 28.2308 17.5045 28.3976 16.9099C28.8083 14.6366 29.0087 12.3248 28.9943 10.0139C29.0087 7.68779 28.8127 5.37242 28.3976 3.08479ZM11.8322 14.2966V5.71239L19.3017 10.0139L11.8322 14.2966Z",
    fill_rule: "evenodd",
    clip_rule: "evenodd",
  },
]);

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
