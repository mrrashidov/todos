<template>
  <div>
    <InboxSec />
    <div class="w-full flex flex-nowrap items-center">
      <Sidebar />
      <inbox-add></inbox-add>
    </div>
    <add-task></add-task>
  </div>
</template>

<script setup  lang="ts">
import { ref } from "vue";
import addTask from "../components/Inbox/addTask.vue"
import Sidebar from "./UI/Sidebar.vue";
import InboxAdd from "../components/Inbox/InboxAdd.vue";
import InboxSec from "./Inbox/InboxSec.vue";

let showAcc = ref(false);
</script>
