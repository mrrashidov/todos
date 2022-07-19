<template>
  <div class="bg-redish flex px-[3vw] py-1 justify-between">
    <div class="flex items-center">
      <div class="hover:bg-appHeaderHover rounded-md p-1 mx-0.5 cursor-pointer">
        <svg
          class="menu_icon text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"
          ></path>
        </svg>
      </div>
      <div class="hover:bg-appHeaderHover rounded-md p-1 cursor-pointer">
        <svg
          class="text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M12.527 3.075c.35.104.64.263 1.27.876L19.1 9.123c.374.364.49.505.601.678.11.174.185.351.232.552.042.178.062.34.066.742L20 17.718c0 .446-.046.607-.134.77a.906.906 0 01-.378.378c-.163.088-.324.134-.77.134H14v-4.718c0-.446-.046-.607-.134-.77a.906.906 0 00-.378-.378c-.142-.077-.284-.122-.616-.132L12.718 13h-1.436c-.446 0-.607.046-.77.134a.906.906 0 00-.378.378c-.077.142-.122.284-.132.616l-.002.154V19H5.282c-.446 0-.607-.046-.77-.134a.906.906 0 01-.378-.378c-.088-.163-.134-.324-.134-.77v-6.462c0-.522.02-.703.067-.903.047-.2.121-.378.232-.552l.077-.113c.098-.134.233-.282.524-.565l5.304-5.172c.629-.613.92-.772 1.269-.876a1.82 1.82 0 011.054 0zm-.286.958a.825.825 0 00-.482 0c-.18.054-.326.139-.63.418l-.227.216L5.598 9.84c-.3.293-.385.39-.456.5a.76.76 0 00-.102.242c-.026.112-.037.224-.04.531l.002 6.807.005.073.074.006L8.999 18 9 14.268l.003-.17c.013-.448.083-.749.249-1.058a1.9 1.9 0 01.788-.788c.306-.164.6-.234 1.043-.249l.199-.003h1.45l.17.003c.448.013.749.083 1.058.249.337.18.608.45.788.788.164.306.234.6.249 1.043l.003.199L14.999 18l3.92-.002.073-.006.006-.073.002-.2v-6.615l-.005-.218a1.494 1.494 0 00-.035-.305.747.747 0 00-.102-.242l-.059-.084a3.571 3.571 0 00-.294-.315l-5.407-5.273c-.425-.414-.604-.545-.798-.615l-.06-.019z"
          ></path>
        </svg>
      </div>
      <div>
        <div class="relative rounded-md shadow-sm mx-0.5">
          <input
            type="text"
            name="price"
            id="price"
            class="placeholder-white cursor-pointer p-1 focus:ring-indigo-500 focus:border-indigo-500 bg-appHeaderHover block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Search"
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <label for="currency" class="sr-only">Currency</label>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="hover:bg-appHeaderHover rounded-md p-1 mx-0.5 cursor-pointer">
        <svg class="text-white" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" fill-rule="evenodd" transform="translate(4 3)">
            <mask id="jd4FBg" fill="#fff">
              <path
                d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"
              ></path>
            </mask>
            <g mask="url(#jd4FBg)">
              <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
            </g>
          </g>
        </svg>
      </div>
      <div
        class="flex text-white hover:bg-appHeaderHover rounded-md p-1 cursor-pointer"
      >
        <svg
          viewBox="-2 -2 4 4"
          style="transform: rotate(-90deg); width: 24px; height: 24px"
        >
          <circle
            cx="0"
            cy="0"
            r="1.4"
            fill="none"
            visibility="visible"
            stroke="currentColor"
            stroke-width="0.2"
          ></circle>
          <path
            fill="currentColor"
            d="M 1 0 A 1 1 0 1 1 -0.8090169943749475 -0.587785252292473 L 0 0"
          ></path>
        </svg>
        <span>3/5</span>
      </div>
      <div
        class="text-white hover:bg-appHeaderHover rounded-md p-1 mx-0.5 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 3a9 9 0 11-.001 18.001A9 9 0 0112 3zm0 1a8 8 0 100 16 8 8 0 000-16zm-.093 10.794c.47 0 .802.355.802.856 0 .495-.331.85-.802.85-.471 0-.808-.355-.808-.85 0-.501.337-.856.808-.856zm.128-7.294c1.465 0 2.465.954 2.465 2.213 0 .96-.47 1.639-1.215 2.11-.738.458-.948.8-.948 1.443v.397H11.32v-.562c-.006-.808.366-1.358 1.163-1.86.674-.433.936-.818.936-1.473 0-.758-.559-1.314-1.425-1.314-.878 0-1.436.544-1.5 1.418H9.5c.064-1.32.901-2.372 2.535-2.372z"
            fill="currentColor"
            fill-rule="nonzero"
          ></path>
        </svg>
      </div>
      <div
        class="text-white hover:bg-appHeaderHover rounded-md p-1 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3a5.75 5.75 0 015.75 5.75c0 3.24.682 5.875 2.03 7.927A1.5 1.5 0 0118.525 19H14.5a2.5 2.5 0 01-5 0H5.475a1.501 1.501 0 01-1.254-2.323C5.568 14.625 6.25 11.989 6.25 8.75A5.75 5.75 0 0112 3zm1.5 16h-3a1.5 1.5 0 003 0zM12 4a4.75 4.75 0 00-4.75 4.75c0 3.423-.731 6.248-2.193 8.476a.5.5 0 00.418.774h13.05a.5.5 0 00.418-.774c-1.462-2.227-2.193-5.053-2.193-8.476A4.75 4.75 0 0012 4z"
            fill="currentColor"
            fill-rule="nonzero"
          ></path>
        </svg>
      </div>
      <div class="user_avatar big settings_avatar mx-0.5">
        <img
          @click="showAcc = !showAcc"
          class="h-10 rounded-full m-1 cursor-pointer"
          src="https://dcff1xvirvpfp.cloudfront.net/08f9e3289a7c459d80f17786674c0794_big.jpg"
          alt="Rustam"
        />
      </div>
    </div>
  </div>
  <Sidebar />
  <account-section v-if="showAcc"></account-section>
</template>

<script setup >
import {ref} from 'vue'
import Sidebar from "./UI/Sidebar.vue";
import AccountSection from './AccountSection.vue'
let showAcc = ref(false);
function nima(){
  showAcc = !showAcc
  console.log(showAcc)
 }
</script>
