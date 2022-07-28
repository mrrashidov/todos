<script setup>
import { useStore } from "../../store";
import {ref} from 'vue'
const file = ref(null);
const onChange = function (e){
    (e) => file.value = URL.createObjectURL(e.target.files[0]);
    console.log(file);
}
const store = useStore();
import commentSvg from "./commentSvg.vue";
import InputField from "../UI/InputField.vue";
import buttonField from "../UI/buttonField.vue"
function commentBorder() {
  store.$state.commentClick = true;
  store.$state.activityClick = false;

}
function activityBorder() {
  store.$state.commentClick = false;
  store.$state.activityClick = true;
}
const FileValue  = null
</script>
<template>
  <div
    class="bg-black fixed top-0 left-0 opacity-70 flex items-center justify-center w-full h-full"
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
        <div class="flex justify-between">
          <div class="flex">
            <div class="mr-2 hover:bg-gray-400">
              <label for="Fileinput" class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.646 5.646c1.3-1.3 3.408-1.3 4.708 0 1.251 1.252 1.298 3.253.139 4.56l-.14.148-4.824 4.825c-.845.844-2.213.844-3.058 0-.802-.802-.842-2.078-.12-2.927l.12-.13 3.325-3.326c.196-.195.512-.195.708 0 .173.174.192.443.057.638l-.057.07-3.325 3.325c-.454.453-.454 1.189 0 1.642.42.422 1.085.452 1.541.09l.101-.09 4.825-4.825c.91-.909.91-2.383 0-3.292-.868-.868-2.25-.908-3.165-.119l-.127.119-6.175 6.175c-1.365 1.364-1.365 3.578 0 4.942 1.316 1.317 3.42 1.364 4.793.141l.15-.14 3.674-3.676c.196-.195.512-.195.708 0 .173.174.192.443.057.638l-.057.07-3.675 3.675c-1.756 1.755-4.602 1.755-6.358 0-1.7-1.701-1.753-4.425-.159-6.19l.16-.168 6.174-6.175z"
                  ></path>
                </svg>
              </label>
              <input @change="onChange" type="file" class="hidden" id="Fileinput" />
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
                <span class="text-white">
                    Comment
                </span>
            </button-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>