<script setup>
import UpcomingTaskTitle from "@/components/AppUpcoming/UpcomingTaskTitle.vue";
import hoverAddTask from "@/components/UI/hoverAddTask.vue";
import UpcomingTask from "@/components/AppUpcoming/UpcomingTask.vue";
import hoverDescription from "@/components/AppUpcoming/hoverDescription.vue";
import TaskItem from "@/components/AppUpcoming/TaskItem.vue";
import { useStore } from "@/store";
const store = useStore();
</script>

<template>
  <div>
    <div>
      <upcoming-task-title />
      <div>
        <task-item v-for="item in store.upcomingTasks" :key="item">
          {{ item }}
        </task-item>
        <hover-add-task
          v-show="!store.showTask"
          @click="store.showTask = true"
        />
        <upcoming-task v-show="store.showTask" />
        <div class="flex items-center justify-between md:w-[70%] md:-mt-9">
          <hover-description
            v-show="store.inboxTitle"
            position="forInbox md:w-32 md:ml-14 md:mt-2 absolute"
          >
            <template #text> Select a project </template>
            <template #icon class="bg-gray-500">
              <p>#</p>
            </template>
          </hover-description>
          <div class="flex md:-mt-4">
            <hover-description
              v-show="store.labelTitle"
              position="forLabelSvg md:w-28 right-28 absolute"
            >
              <template #text> Add label(s) </template>
              <template #icon class="bg-gray-500">
                <p>@</p>
              </template>
            </hover-description>
            <hover-description
              v-show="store.priorityTitle"
              position="forInbox md:w-32 absolute md:right-20"
            >
              <template #text> Set the priority </template>
              <template #icon class="bg-gray-500">
                <p>p1</p>
              </template>
            </hover-description>
            <hover-description
              v-show="store.remindersTitle"
              position="md:w-32 absolute md:right-12"
            >
              <template #text> Add reminder(s) </template>
              <template #icon class="bg-gray-500">
                <p>&</p>
              </template>
            </hover-description>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

components/icons/icon-name.vue
components/icons/base-icon.vue
name String