<script setup>
import { useStore } from "@/store";
const store = useStore();
const editTask = () => {
  s;
};
</script>

<template>
  <div
    class="
      flex
      items-center
      item
      justify-between
      md:pl-2 md:pr-3
      cursor-pointer
      md:pt-2 md:pb-3
    "
  >
    <div class="flex items-center">
      <svg height="24" width="24" class="hover-show">
        <path
          d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z"
          fill="currentColor"
        ></path>
      </svg>
      <input type="radio" />
      <p class="text-sm md:ml-3">
        <slot></slot>
      </p>
    </div>
    <div>
      <div class="flex items-center">
        <button
          @click="editTask"
          class="md:mr-1 hover-show"
          aria-label="Edit"
          data-action-hint="task-edit"
          data-reach-tooltip-trigger=""
          data-state="tooltip-hidden"
          type="button"
        >
          <svg height="24" width="24">
            <g fill="none" fill-rule="evenodd">
              <path
                d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
                fill="currentColor"
              ></path>
              <path
                d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                stroke="currentColor"
              ></path>
            </g>
          </svg>
        </button>
        <button
          aria-expanded="false"
          class="due_date_controls md:mr-1 hover-show"
          data-action-hint="task-scheduler"
          data-reach-tooltip-trigger=""
          data-state="tooltip-hidden"
          type="button"
        >
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12 10a1 1 0 11-2 0 1 1 0 012 0zM7 8a.5.5 0 000 1h10a.5.5 0 000-1H7z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
        <a
          aria-label="Comment"
          class="task_list_item__comments_link md:mr-2 hover-show"
          data-action-hint="task-comment"
          data-reach-tooltip-trigger=""
          data-state="tooltip-hidden"
        >
          <svg
            data-svgs-path="sm1/comments.svg"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"
              fill="currentColor"
              fill-rule="nonzero"
            ></path>
          </svg>
        </a>
        <button
          aria-expanded="false"
          aria-label="More task actions"
          class="more_actions_button md:mr-1"
          data-action-hint="task-overflow-menu"
          data-reach-tooltip-trigger=""
          data-state="tooltip-hidden"
          data-testid="more_menu"
          type="button"
        >
          <svg height="3" width="15">
            <path
              d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>