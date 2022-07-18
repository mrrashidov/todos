<template>
  <div v-if="checked" class="absolute top-0">
    <div
      class="w-[30vw] h-[80vh] border-solid border-black border rounded-xl bg-white"
    >
      <div class="flex py-2 justify-between bg-zinc-50 border-b-2 rounded-t-xl">
        <span class="p-3">Add Project</span>
        <div class="p-3 cursor-pointer">
          <svg class="" width="24" height="24">
            <g fill="none" fill-rule="evenodd">
              <path
                fill="currentColor"
                d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"
              ></path>
              <circle cx="12" cy="12" r="7.5" stroke="currentColor"></circle>
            </g>
          </svg>
        </div>
      </div>
      <div class="h-[60vh] px-[2vw]">
        <div class="flex flex-col py-2">
          <label for="name">Name</label>
          <input
            class="border-zinc-100 border-[1px] border-solid rounded-xl"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div class="flex flex-col py-2">
          <span>Colors</span>
          <Listbox class="z-50" v-model="selectedPerson">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
              >
                <span class="block truncate">{{ selectedPerson.name }}</span>
                <span
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <SelectorIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="person in people"
                    :key="person.name"
                    :value="person"
                    as="template"
                  >
                    <li
                      :class="[
                        active
                          ? 'bg-amber-100 text-amber-900'
                          : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-10 pr-4',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ person.name }}</span
                      >
                      <span
                        v-if="selected"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                      >
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <div>
          <div class="py-2">
            <Switch
              v-model="enabled"
              :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
              class="relative inline-flex h-[20px] w-[62px] shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="enabled ? 'translate-x-9' : 'translate-x-0'"
                class="pointer-events-none inline-block h-[16px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
              />
            </Switch>
            <span class="p-4">Add to Favorites</span>
          </div>
        </div>
        <div class="flex">
          <div class="py-2 px-2">
            <label for="view">View</label>
            <div>
              <svg
                class="border-zinc-200 p-2 border-[1px] border-solid rounded-xl"
                width="160"
                height="102"
                viewBox="0 0 160 102"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(24 1)">
                    <rect fill="#EBEBEB" x="18" width="92" height="10" rx="5" />
                    <rect
                      fill="#EBEBEB"
                      x="18"
                      y="90"
                      width="92"
                      height="10"
                      rx="5"
                    />
                    <circle
                      stroke-opacity=".4"
                      stroke="#000"
                      cx="5"
                      cy="5"
                      r="5"
                    />
                    <circle
                      stroke-opacity=".4"
                      stroke="#000"
                      cx="5"
                      cy="95"
                      r="5"
                    />
                  </g>
                  <g transform="translate(24 31)">
                    <rect fill="#EBEBEB" x="18" width="92" height="10" rx="5" />
                    <circle
                      stroke-opacity=".4"
                      stroke="#000"
                      cx="5"
                      cy="5"
                      r="5"
                    />
                  </g>
                  <g transform="translate(24 61)">
                    <rect fill="#EBEBEB" x="18" width="92" height="10" rx="5" />
                    <circle
                      stroke-opacity=".4"
                      stroke="#000"
                      cx="5"
                      cy="5"
                      r="5"
                    />
                  </g>
                  <path
                    fill-opacity=".4"
                    fill="#000"
                    d="M0 50h160v1H0zM0 20h160v1H0zM0 80h160v1H0z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="py-2 px-2">
            <label for="board">Board</label>
            <div>
              <svg
                class="border-zinc-200 p-2 border-[1px] border-solid rounded-xl"
                width="155"
                height="115"
                viewBox="0 0 155 115"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path id="board_preview_light_path" d="M0 0h160v120H0z" />
                </defs>
                <g transform="translate(-5 -5)" fill="none" fill-rule="evenodd">
                  <mask id="board_preview_light_mask" fill="#fff">
                    <use xlink:href="#board_preview_light_path" />
                  </mask>
                  <g mask="url(#board_preview_light_mask)">
                    <g transform="translate(6 6)">
                      <rect
                        stroke-opacity=".4"
                        stroke="#000"
                        width="64"
                        height="30"
                        rx="4"
                      />
                      <rect
                        fill="#EBEBEB"
                        x="26"
                        y="10"
                        width="30"
                        height="10"
                        rx="5"
                      />
                      <circle
                        stroke-opacity=".4"
                        stroke="#000"
                        cx="13"
                        cy="15"
                        r="5"
                      />
                    </g>
                  </g>
                  <g mask="url(#board_preview_light_mask)">
                    <g transform="translate(6 42)">
                      <rect
                        stroke-opacity=".4"
                        stroke="#000"
                        width="64"
                        height="30"
                        rx="4"
                      />
                      <rect
                        fill="#EBEBEB"
                        x="26"
                        y="10"
                        width="30"
                        height="10"
                        rx="5"
                      />
                      <circle
                        stroke-opacity=".4"
                        stroke="#000"
                        cx="13"
                        cy="15"
                        r="5"
                      />
                    </g>
                  </g>
                  <g mask="url(#board_preview_light_mask)">
                    <g transform="translate(76 42)">
                      <rect
                        stroke-opacity=".4"
                        stroke="#000"
                        width="64"
                        height="30"
                        rx="4"
                      />
                      <rect
                        fill="#EBEBEB"
                        x="26"
                        y="10"
                        width="30"
                        height="10"
                        rx="5"
                      />
                      <circle
                        stroke-opacity=".4"
                        stroke="#000"
                        cx="13"
                        cy="15"
                        r="5"
                      />
                    </g>
                  </g>
                  <g mask="url(#board_preview_light_mask)">
                    <g transform="translate(76 78)">
                      <rect
                        stroke-opacity=".4"
                        stroke="#000"
                        width="64"
                        height="30"
                        rx="4"
                      />
                      <rect
                        fill="#EBEBEB"
                        x="26"
                        y="10"
                        width="30"
                        height="10"
                        rx="5"
                      />
                      <circle
                        stroke-opacity=".4"
                        stroke="#000"
                        cx="13"
                        cy="15"
                        r="5"
                      />
                    </g>
                  </g>
                  <g mask="url(#board_preview_light_mask)">
                    <g transform="translate(76 114)">
                      <rect
                        stroke-opacity=".4"
                        stroke="#000"
                        width="64"
                        height="30"
                        rx="4"
                      />
                      <rect
                        fill="#EBEBEB"
                        x="26"
                        y="10"
                        width="30"
                        height="10"
                        rx="5"
                      />
                      <circle
                        stroke-opacity=".4"
                        stroke="#000"
                        cx="13"
                        cy="15"
                        r="5"
                      />
                    </g>
                  </g>
                  <g mask="url(#board_preview_light_mask)">
                    <g transform="translate(76 6)">
                      <rect
                        stroke-opacity=".4"
                        stroke="#000"
                        width="64"
                        height="30"
                        rx="4"
                      />
                      <rect
                        fill="#EBEBEB"
                        x="26"
                        y="10"
                        width="30"
                        height="10"
                        rx="5"
                      />
                      <circle
                        stroke-opacity=".4"
                        stroke="#000"
                        cx="13"
                        cy="15"
                        r="5"
                      />
                    </g>
                  </g>
                  <g mask="url(#board_preview_light_mask)">
                    <g transform="translate(146 6)">
                      <rect
                        stroke-opacity=".4"
                        stroke="#000"
                        width="64"
                        height="30"
                        rx="4"
                      />
                      <rect
                        fill="#EBEBEB"
                        x="26"
                        y="10"
                        width="30"
                        height="10"
                        rx="5"
                      />
                      <circle
                        stroke-opacity=".4"
                        stroke="#000"
                        cx="13"
                        cy="15"
                        r="5"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <span
          >View is synced between teammates in shared projects. Learn
          more.</span
        >
      </div>
      <div class="flex justify-end border-t-2">
        <button
          @click="disableChecker"
          class="py-1 px-2 my-3 mx-1 border bg-zinc-100 border-zinc-300 rounded-md"
        >
          Cancel
        </button>
        <button
          class="py-1 px-2 my-3 mx-1 border bg-zinc-100 border-zinc-300 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

const selectedPerson = ref(people[0]);
const enabled = ref(false);
let checked = true;

const disableChecker = () => {
  checked = !checked;
  console.log(checked);
};
</script>
