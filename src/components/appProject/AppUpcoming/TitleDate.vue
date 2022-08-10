<script setup>
import { useStore } from "@/store";
const store = useStore();
import { onMounted, ref } from "vue";
const date = ref(null);
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
let fullMonth = "";

const onFocus = () => {
  store.todayDataPic = !store.todayDataPic;
  if (store.todayDataPic) {
    date.value.showPicker();
  } else if (store.todayDataPic) {
    date.value.showPicker("hide");
  }
};

switch (month) {
  case 1:
    fullMonth = "January";
    break;
  case 2:
    fullMonth = "February";
    break;
  case 3:
    fullMonth = "March";
    break;
  case 4:
    fullMonth = "April";
    break;
  case 5:
    fullMonth = "May";
    break;
  case 6:
    fullMonth = "June";
    break;
  case 7:
    fullMonth = "July";
    break;
  case 8:
    fullMonth = "August";
    break;
  case 9:
    fullMonth = "September";
    break;
  case 10:
    fullMonth = "October";
    break;
  case 11:
    fullMonth = "November";
    break;
  case 12:
    fullMonth = "December";
    break;
}
</script>
<template>
  <div>
    <input type="date" class="w-0" id="date" ref="date" />
    <button @click="onFocus" class="">
      <p class="flex items-center text-xl">
        {{ fullMonth }} {{ year }}
        <span class="text-xl">
          <svg
            class="md:mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 10l-4 4-4-4"
              ></path>
            </g>
          </svg>
        </span>
      </p>
    </button>
  </div>
</template>