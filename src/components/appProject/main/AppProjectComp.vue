      <script setup>
import { useStore } from "@/store";
import addTask from "@/components/appProject/Inbox/addTask.vue";
import Sidebar from "@/components/appProject/Sidebar.vue";
import InboxAdd from "@/components/appProject/Inbox/InboxAdd.vue";
import InboxSec from "@/components/appProject/Inbox/InboxSec.vue";
import TodayPage from '@/components/appProject/AppToday/TodayPage.vue'
import AccountSection from '@/components/AccountSection.vue'
const store = useStore();

</script>
<template>
  <div>
    <InboxSec />
    <div class="w-full flex">
      <Sidebar/>
      <router-view/>
    </div>
  </div>
</template>

