<script setup>
import { ref } from "vue";
let taskInput = ref(null);
import { useStore } from "@/store";
const store = useStore();

const addTask = () => {
  if (store.taskItem) {
    store.upcomingTasks.push(store.taskItem);
    store.taskDesc.push(store.description);
    store.taskItem = "";
  }
};
</script>
<template>
  <div>
    <div
      class="w-full rounded-xl bg-white border border-gray-200 md:p-3 md:mt-3">
      <textarea
        ref="taskInput"
        v-model="store.taskItem"
        class="w-full text-sm border-0 outline-none"
        placeholder="e.g.,Buy gift tomorrow at 6pm p1 #Errands"
      ></textarea>
      <input
        type="text"
        class="w-full text-sm border-0 outline-none"
        placeholder="Description"
        v-model="store.description"
      />
      <div class="flex items-center justify-between md:mt-3">
        <div class="flex">
          <div
            class="
              flex
              items-center
              text-sm
              md:p-0.5
              text-green-500
              border
              w-16
              rounded
              hover:bg-gray-200
            "
          >
            <span>
              <svg
                data-svgs-path="sm1/calendar_small.svg"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"
                ></path>
              </svg>
            </span>
            <p>Today</p>
          </div>
          <div
            class="
              flex
              ml-2
              items-center
              text-sm
              md:p-0.5
              border
              w-16
              rounded
              hover:bg-gray-200
              cursor-pointer
            "
            @mouseenter="store.inboxTitle = !store.inboxTitle"
            @mouseleave="store.inboxTitle = !store.inboxTitle"
          >
            <span class="text-blue-500">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                class="project_icon projectSectionPill--icon project_icon_inbox"
              >
                <g fill="currentColor">
                  <path
                    d="M13.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V9.5h3.75a1.75 1.75 0 003.5 0h3.75z"
                    opacity="0.1"
                  ></path>
                  <path
                    d="M10.491 2a2 2 0 011.923 1.45l1.509 5.28a2 2 0 01.077.55V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.28a2 2 0 01.077-.55l1.509-5.28A2 2 0 015.509 2h4.982zm0 1H5.51a1 1 0 00-.962.725l-1.509 5.28A1 1 0 003 9.28V12a1 1 0 001 1h8a1 1 0 001-1V9.28a1 1 0 00-.038-.275l-1.51-5.28a1 1 0 00-.96-.725zM6.25 9a.5.5 0 01.5.5 1.25 1.25 0 002.5 0 .5.5 0 01.5-.5h1.75a.5.5 0 110 1h-1.306a2.25 2.25 0 01-4.388 0H4.5a.5.5 0 010-1z"
                  ></path>
                </g>
              </svg>
            </span>
            <p>Inbox</p>
          </div>
        </div>
        <div class="flex">
          <div
            @mouseenter="store.labelTitle = !store.labelTitle"
            @mouseleave="store.labelTitle = !store.labelTitle"
          >
            <svg
              class="text-gray-500 md:mr-1 hover:bg-gray-200 rounded-sm"
              data-svgs-path="sm1/label_outline.svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
              ></path>
            </svg>
          </div>
          <div
            @mouseenter="store.priorityTitle = !store.priorityTitle"
            @mouseleave="store.priorityTitle = !store.priorityTitle"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-gray-500 Gw1i-E3 md:mr-1 hover:bg-gray-200 rounded-sm"
              data-icon-name="priority-icon"
              data-priority="4"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5a.5.5 0 01.223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.822 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0120 4.5V13a.5.5 0 01-.223.416c-1.09.727-2.518 1.084-4.277 1.084-1.113 0-1.92-.197-3.658-.776C10.204 13.178 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777V19.5a.5.5 0 01-1 0V5zm4.5 7c-1.367 0-2.535.216-3.5.654V5.277c.886-.515 2.05-.777 3.5-.777.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.367 0 2.535-.216 3.5-.654v7.377c-.886.515-2.05.777-3.5.777-.97 0-1.704-.178-3.342-.724C10.421 12.196 9.613 12 8.5 12z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            @mouseenter="store.remindersTitle = !store.remindersTitle"
            @mouseleave="store.remindersTitle = !store.remindersTitle"
          >
            <svg
              class="text-gray-500 hover:bg-gray-200 rounded-sm"
              data-svgs-path="sm1/reminder.svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-1">
      <div
        class="
          bg-gray-200
          md:w-20
          text-center
          cursor-pointer
          rounded
          md:pt-1 md:pb-1
        "
        @click="store.showTask = !store.showTask"
      >
        <p>Cancel</p>
      </div>
      <div
        class="
          bg-red-500
          hover:bg-red-400
          md:ml-2 md:w-20
          cursor-pointer
          text-center
          rounded
          md:pt-1 md:pb-1
        "
        @click="addTask"
      >
        <p class="text-white">Add task</p>
      </div>
    </div>
  </div>
</template>