      <script setup>
import addTask from "@/components/Inbox/addTask.vue";
import Sidebar from "@/components/UI/Sidebar.vue";
import InboxAdd from "@/components/Inbox/InboxAdd.vue";
import InboxSec from "@/compoents/Inbox/InboxSec.vue";
import TodayPage from "@/components/AppToday/TodayPage.vue";
import AccountSection from "@/components/AccountSection.vue";
import UpcomingMain from "@/components/AppUpcoming/UpcomingMain.vue";
import { useStore } from "@/store";
const store = useStore();
</script>
<template>
  <div>
    <InboxSec />
    <div class="w-full flex flex-nowrap items-center relative">
      <Sidebar />
      <inbox-add v-show="false"></inbox-add>
      <account-section />
      <!--      <today-page/>-->
      <upcoming-main />
      <add-task
        :showAddTask="store.$state.addBtn"
        class="absolute z-10 top-0"
      ></add-task>
    </div>
  </div>
</template>

