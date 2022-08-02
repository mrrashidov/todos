<script setup>
import { onMounted } from "vue";
import WeekDay from "@/components/AppUpcoming/WeekDay.vue";
import { useStore } from "@/store";
const week = new Date().getDay();
const store = useStore();
let weekArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
weekArr = weekArr.slice(week - 1).concat(weekArr.slice(0, week - 1));
let day = store.day;
const month = new Date().getMonth() + 1;
let juftMonth = ["February", "April", "June", "September", "November"];
let toqMonth = [
  "January",
  "March",
  "May",
  "July",
  "August",
  "October",
  "December",
];
let fullMonth = "";
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
  <div class="border-b border-gray-200 md:pb-0.5 flex">
    <week-day
      v-for="(week, index) in weekArr"
      :key="index"
      v-if="juftMonth.includes(fullMonth)"
    >
      <template #weekName>{{ week }}</template>
      <template #dayNum>{{
        store.day + index <= 30
          ? store.day + index
          : store.day + index - 30 * Math.floor((store.day + index) / 30)
      }}</template>
    </week-day>
    <week-day
      v-for="(week, index) in weekArr"
      :key="index"
      v-if="toqMonth.includes(fullMonth)"
    >
      <template #weekName>{{ week }}</template>
      <template #dayNum>{{
        store.day + index <= 31
          ? store.day + index
          : store.day + index - 31 * Math.floor((store.day + index) / 31)
      }}</template>
    </week-day>
  </div>
</template>