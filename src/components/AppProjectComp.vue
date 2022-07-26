      <script setup>
import { useStore } from "../store";
import addTask from "../components/Inbox/addTask.vue";
import Sidebar from "./UI/Sidebar.vue";
import InboxAdd from "../components/Inbox/InboxAdd.vue";
import InboxSec from "./Inbox/InboxSec.vue";
const store = useStore();
</script>
<template>
  <div>
    <InboxSec />
    <div class="w-full flex flex-nowrap items-center relative">
      <Sidebar />
      <inbox-add></inbox-add>
      <add-task
        :showAddTask="store.$state.addBtn"
        class="absolute z-40 top-0"
      ></add-task>
    </div>
  </div>
</template>

