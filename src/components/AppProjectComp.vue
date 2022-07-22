<template>
  <div>
    <InboxSec />
    <div class="w-full flex flex-nowrap items-center">
      <Sidebar />
      <inbox-add></inbox-add>
    </div>
    <input-field class="bg-red-500"></input-field>
  </div>
</template>

<script setup  lang="ts">
import { ref } from "vue";
import InputField from "../components/UI/InputField.vue"
import Sidebar from "./UI/Sidebar.vue";
import InboxAdd from "../components/Inbox/InboxAdd.vue";
import InboxSec from "./Inbox/InboxSec.vue";

let showAcc = ref(false);
</script>
