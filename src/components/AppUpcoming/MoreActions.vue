<script setup>
import Tomorrow from "@/components/AppUpcoming/UpcomingSvgs/Tomorrow.vue";
import Weekend from "@/components/AppUpcoming/UpcomingSvgs/Weekend.vue";
import NextWeek from "@/components/AppUpcoming/UpcomingSvgs/NextWeek.vue";
import NoDate from "@/components/AppUpcoming/UpcomingSvgs/NoDate.vue";
import More from "@/components/AppUpcoming/UpcomingSvgs/More.vue";
import Flag from "@/components/AppUpcoming/UpcomingSvgs/Flag.vue";
import Reminders from "@/components/AppUpcoming/UpcomingSvgs/Reminders.vue";
import MoveProject from '@/components/AppUpcoming/UpcomingSvgs/MoveProject.vue'
import Dublicate from '@/components/AppUpcoming/UpcomingSvgs/Dublicate.vue'
import CopyLink from '@/components/AppUpcoming/UpcomingSvgs/CopyLink.vue'
import Delete from '@/components/AppUpcoming/UpcomingSvgs/Delete.vue'
import { useStore } from "@/store";
const store = useStore();
</script>

<template>
  <div
    v-show="store.moreAction"
    class="
      border
      md:w-1/4 md:p-2
      border-gray-200
      h-auto
      absolute
      right-20
      -top-16
      bg-white
      rounded
    "
  >
    <div
      class="
        flex
        items-center
        md:pl-2 md:pr-2 md:pt-1 md:pb-1
        rounded
        justify-between
        cursor-pointer
        hover:bg-gray-100
      "
    >
      <div class="flex items-center">
        <svg width="24" height="24">
          <g fill="none" fill-rule="evenodd">
            <path
              fill="currentColor"
              d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
            ></path>
            <path
              stroke="currentColor"
              d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
            ></path>
          </g>
        </svg>
        <p class="text-sm md:ml-1">Edit task</p>
      </div>
      <p class="text-xs text-gray-500">Ctr E</p>
    </div>
    <div
      class="
        flex
        items-center
        md:pl-2 md:pr-2 md:pt-1 md:pb-1 md:mb-1
        rounded
        justify-between
        cursor-pointer
        hover:bg-gray-100
      "
    >
      <div class="flex items-center">
        <svg width="24" height="24">
          <path
            fill="currentColor"
            d="M10 11.5c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm0-8c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm-4 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
          ></path>
        </svg>
        <p class="text-sm md:ml-1">Edit task</p>
      </div>
      <p class="text-xs text-gray-400">&Uparrow; G</p>
    </div>
    <hr />
    <div
      class="
        flex
        items-center
        md:pl-2 md:pr-2 md:pt-2 md:pb-1 md:mb-1
        justify-between
      "
    >
      <div class="flex items-center">
        <p class="text-xs md:ml-1">Due date</p>
      </div>
      <p class="text-xs text-gray-400">T</p>
    </div>
    <div class="flex md:mt-2 md:ml-2">
      <Tomorrow />
      <Weekend class="md:ml-2" />
      <NextWeek class="md:ml-2" />
      <NoDate class="md:ml-2" />
      <More class="md:ml-2" />
    </div>

    <div
      class="
        flex
        items-center
        md:pl-2 md:pr-2 md:pt-3 md:pb-1 md:mb-1
        justify-between
      "
    >
      <div class="flex items-center">
        <p class="text-xs md:ml-1">Priority</p>
      </div>
      <p class="text-xs text-gray-400">Y</p>
    </div>
    <div class="flex md:ml-2 nd:mt-2 md:mb-2">
      <Flag class="text-red-500" />
      <Flag class="text-orange-500 md:ml-4" />
      <Flag class="text-blue-500 md:ml-4" />
      <Flag class="text-black md:ml-4 border rounded" />
    </div>
    <hr />
    <div
      class="
        flex
        items-center
        hover:bg-gray-100
        md:pl-2
        rounded
        md:mt-2 md:pt-1 md:pb-1 md:mb-1
        justify-start
      "
    >
      <Reminders />
      <p class="text-xs md:ml-1">Priority</p>
    </div>
    <div
      class="
        flex
        items-center
        md:pl-2 md:pr-2 md:pt-1 md:pb-1 md:mb-1
        rounded
        justify-between
        cursor-pointer
        hover:bg-gray-100
      "
    >
      <div class="flex items-center">
        <MoveProject/>
        <p class="text-sm md:ml-1">Move to project</p>
      </div>
      <p class="text-xs text-gray-400">V</p>
    </div>
    <div
      class="
        flex
        items-center
        md:pl-2 md:pr-2 md:pt-1 md:pb-1 md:mb-1
        rounded
        justify-between
        cursor-pointer
        hover:bg-gray-100
      "
    >
      <div class="flex items-center">
        <CopyLink/>
        <p class="text-sm md:ml-1">Dublicate</p>
      </div>
      <p class="text-xs text-gray-400">&Uparrow; Ctrl , </p>
    </div>
    <hr>
    <div
      class="
        flex
        items-center
        md:pl-2 md:pr-2 md:pt-1 md:pb-1 md:mt-1
        rounded
        delete
        justify-between
        cursor-pointer
        hover:bg-gray-100
      "
    >
      <div class="flex items-center">
        <Delete class="del"/>
        <p class="text-sm del md:ml-1">Delete</p>
      </div>
      <p class="text-xs text-gray-400">&Uparrow; Delete</p>
    </div>
  </div>
</template>

<style scoped> 
  .delete:hover .del{
    color: rgb(185, 35, 35);
  }
</style>