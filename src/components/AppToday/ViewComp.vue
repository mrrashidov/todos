<script setup>
let groupArr = [
  "Default",
  "Due date",
  "Assignee",
  "Date added",
  "Priority",
  "Label",
  "Project",
];
let sortArr = [
  "Default",
  "Alphabetically",
  "Assignee",
  "Due date",
  "Date added",
  "Priority",
  "Project",
];
let assigne = ["Default", "No one", "Only me"];
import { useStore } from "@/store";
const store = useStore();
</script>

<template>
  <div
    v-show="store.viewComp"
    class="w-1/5 border md:mt-2 h-auto z-30 absolute md:right-20 rounded md:p-2"
  >
    <p class="font-bold md:pl-2">Sort</p>
    <div
      class="
        flex
        items-center
        rounded
        md:p-1
        justify-between
        hover:bg-gray-200
        group
      "
    >
      <div class="text-gray-500 flex items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12zm0 1H6a2 2 0 00-1.995 1.85L4 6v12a2 2 0 001.85 1.994L6 20h12a2 2 0 001.994-1.85L20 18V6a2 2 0 00-1.85-1.995L18 4zm-3 4.5A1.5 1.5 0 0013.5 7h-5A1.5 1.5 0 007 8.5v5A1.5 1.5 0 008.5 15h5a1.5 1.5 0 001.5-1.5v-5zM8.5 8h5l.09.008A.5.5 0 0114 8.5v5l-.008.09a.5.5 0 01-.492.41h-5l-.09-.008A.5.5 0 018 13.5v-5l.008-.09A.5.5 0 018.5 8zm.585 8a1.5 1.5 0 001.415 1h5a1.5 1.5 0 001.5-1.5v-5a1.5 1.5 0 00-1-1.415V15.5a.5.5 0 01-.5.5H9.085z"
            fill="currentColor"
          ></path>
        </svg>
        <p class="text-sm">Group by</p>
      </div>
      <select class="select text-gray-500 w-20 text-sm">
        <option v-for="item in groupArr" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div
      class="
        flex
        md:mt-1
        items-center
        rounded
        md:p-1
        justify-between
        hover:bg-gray-200
        group
      "
    >
      <div class="text-gray-500 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16.854 5.146l3 3a.502.502 0 01-.708.708L17 6.707V18.5a.5.5 0 01-1 0V6.707l-2.146 2.147a.502.502 0 01-.708-.708l3-3a.502.502 0 01.708 0zM7.5 5a.5.5 0 01.5.5v11.791l2.146-2.145a.502.502 0 01.708.708l-3 3a.502.502 0 01-.708 0l-3-3a.502.502 0 01.708-.708L7 17.293V5.5a.5.5 0 01.5-.5z"
          ></path>
        </svg>
        <p class="text-sm">Sort by</p>
      </div>
      <select class="select text-gray-500 w-20 text-sm">
        <option v-for="item in sortArr" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div
      class="
        flex
        md:mt-1
        items-center
        rounded
        md:p-1
        justify-between
        hover:bg-gray-200
        group
      "
    >
      <div class="text-gray-500 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12 13.5c3.323 0 5.803.697 7.427 2.119A2.5 2.5 0 0117.78 20H6.22a2.5 2.5 0 01-1.647-4.381C6.197 14.197 8.677 13.5 12 13.5zm0 1c-3.102 0-5.353.633-6.768 1.871A1.5 1.5 0 006.22 19h11.56a1.502 1.502 0 00.989-2.629C17.352 15.133 15.101 14.5 12 14.5zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 1a3 3 0 100 6 3 3 0 000-6z"
            fill-rule="evenodd"
          ></path>
        </svg>
        <p class="text-sm">Assigned to</p>
      </div>
      <select class="select text-gray-500 w-20 text-sm">
        <option v-for="item in assigne" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>
<style scoped>
.group:hover .select {
  background-color: rgb(229 231 235);
}
</style>