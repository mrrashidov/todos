<script setup>
import { useStore } from "../../store";
import { ref } from "vue";
import commentSvg from "./commentSvg.vue";
import InputField from "../UI/InputField.vue";
import buttonField from "../UI/buttonField.vue";
import inputFile from "../UI/inputFile.vue";
import comment from './comment.vue'
const model = "";
const store = useStore();
function commentBorder() {
  store.$state.commentClick = true;
  store.$state.activityClick = false;
}
function activityBorder() {
  store.$state.commentClick = false;
  store.$state.activityClick = true;
}
const FileValue = null;

function removeItem(index){
  store.$state.documents.splice(index,1)
}
</script>
<template>
  <div
    class="
      bg-black
      top-0
      left-0
      opacity-70
      flex
      items-center
      justify-center
      w-full
      h-full
    "
  >
    <div class="opacity-100 bg-white w-5/12 p-5 rounded-md">
      <div class="flex justify-between">
        <div class="flex">
          <div class="mr-3 text-blue-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="project_icon project_icon_inbox"
            >
              <g fill="currentColor" fill-rule="nonzero">
                <path
                  d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                  opacity="0.1"
                ></path>
                <path
                  d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <span>Inbox</span>
          </div>
        </div>
        <div>
          <svg viewBox="0 0 24 24" class="icon_close" width="24" height="24">
            <path
              fill="currentColor"
              fill-rule="nonzero"
              d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="flex justify-between">
        <div @click="commentBorder" class="w-3/6">
          <div
            v-if="store.$state.commentClick"
            class="
              flex
              justify-center
              mr-2
              border-b-2 border-gray-700 border-solid
              p-2
            "
          >
            <span class="text-sm font-bold">Comments</span>
          </div>
          <div
            v-else
            class="
              flex
              justify-center
              mr-2
              border-b-2 border-gray-400 border-solid
              p-2
            "
          >
            <span class="text-sm font-bold text-gray-400 hover:text-gray-500"
              >Comments</span
            >
          </div>
        </div>
        <div @click="activityBorder" class="w-3/6">
          <div
            v-if="store.$state.activityClick"
            class="
              flex
              justify-center
              border-b-2 border-gray-700 border-solid
              p-2
            "
          >
            <span class="text-sm font-bold">Activity</span>
          </div>
          <div
            v-else
            class="
              flex
              justify-center
              border-b-2 border-gray-400 border-solid
              p-2
            "
          >
            <span class="text-sm font-bold text-gray-400 hover:text-gray-500"
              >Activity</span
            >
          </div>
        </div>
      </div>
      <div class="w-full p-24">
        <div class="text-center">
          <comment-svg></comment-svg>
          <span
            >Keep all your high-level information organized here with project
            comments.</span
          >
        </div>
      </div>
      <div class="w-full rounded-lg border-2 border-gray-400 border-solid p-5">
        <div>
          <input-field
            class="w-full border-none outline-none mb-5"
            placeholder="Comment"
          ></input-field>
        </div>
        <div
          v-for="(name,index) in store.$state.documents" :key="name"
          class="
            w-full flex rounded-md border-2 border-gray-300 bg-gray-200 py-2 px-3 mb-3  "
        >
          <span class="mr-4 hover:text-red-500" @click="removeItem(index)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <rect
                  width="14"
                  height="1"
                  x="5"
                  y="6"
                  fill="currentColor"
                  rx=".5"
                ></rect>
                <path
                  fill="currentColor"
                  d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"
                ></path>
                <path
                  stroke="currentColor"
                  d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"
                ></path>
              </g>
            </svg>
          </span>
          {{name}}
        </div>
        <comment></comment>
        <div class="flex justify-between">
          <div class="flex">
            <div class="mr-2 hover:bg-gray-400">
              <input-file></input-file>
            </div>
            <div class="mr-2 hover:bg-gray-400">
              <svg width="24" height="24">
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M17.5 10a.5.5 0 0 1 .492.41l.008.09V12a6 6 0 0 1-5.5 5.98V20h3a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.41.492L15.5 21h-7a.5.5 0 0 1-.09-.992L8.5 20h3v-2.02a6 6 0 0 1-5.495-5.745L6 12v-1.5a.5.5 0 0 1 .992-.09L7 10.5V12a5 5 0 0 0 9.995.217L17 12v-1.5a.5.5 0 0 1 .5-.5zM12 3a4 4 0 0 1 4 4v5a4 4 0 1 1-8 0V7a4 4 0 0 1 4-4zm0 1a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3z"
                ></path>
              </svg>
            </div>
            <div class="mr-2 hover:bg-gray-400">
              <svg width="24" height="24" class="hover:bg-gray-400">
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm2.45 8a.5.5 0 0 1 .49.6 3 3 0 0 1-5.88 0 .5.5 0 0 1 .49-.6h4.9zm.05-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <button-field class="bg-red-600">
              <span class="text-white"> Comment </span>
            </button-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>