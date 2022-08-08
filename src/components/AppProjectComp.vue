      <script setup>


import TodayPage from '@/components/AppToday/TodayPage.vue'
import AccountSection from '@/components/AccountSection.vue'
const store = useStore();
</script>
<template>
  <div>
    <InboxSec />
    <div class="w-full flex flex-nowrap items-center relative">
      <Sidebar/>
      <inbox-add v-show="false"></inbox-add>
      <account-section></account-section>
      <today-page></today-page>
      <add-task
        :showAddTask="store.$state.addBtn"
        class="absolute z-10 top-0"
      ></add-task>
    </div>
  </div>
</template>

