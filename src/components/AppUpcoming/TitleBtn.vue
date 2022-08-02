<script setup>
import { onMounted } from "vue";
import { useStore } from "@/store";
const store = useStore();
function nextWeek() {
  store.day = store.day + 7;
}
</script>

<template>
  <div class="flex items-center">
    <div>
      <button class="border hover:bg-gray-200 rounded-tl rounded-bl">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <g fill="none" fill-rule="evenodd">
            <path d="M24 0v24H0V0z"></path>
            <path
              fill="currentColor"
              fill-rule="nonzero"
              d="M10.707 12l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L10.707 12z"
            ></path>
          </g>
        </svg>
      </button>
      <button
        class="border hover:bg-gray-200 rounded-tr rounded-br md:ml-0.5"
        @click="nextWeek"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <g fill="none" fill-rule="evenodd">
            <path d="M0 24V0h24v24z"></path>
            <path
              fill="currentColor"
              fill-rule="nonzero"
              d="M13.293 12L9.646 8.354a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 12z"
            ></path>
          </g>
        </svg>
      </button>
    </div>
    <button
      class="
        rounded
        border
        md:-mt-1.5 md:ml-1
        text-sm
        md:pr-1 md:pl-1 md:pt-0.5 md:pb-0.5
        text-gray-600
        hover:bg-gray-200
      "
    >
      Today
    </button>
  </div>
</template>