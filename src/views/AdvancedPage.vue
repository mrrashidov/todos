<script setup>
const show= ref(false)
const checked = ref(false)
const checked2 = ref(false)
import {ref} from 'vue'
import Label from "../components/UI/SlotForLabels.vue"
import HomeButton from "../components/UI/HomeButton.vue"

import {useStore} from '../store'
const store = useStore();
</script>


<template>
  <div v-show="store.advanced" class="w-2/4 bg-white rounded-tr-lg md:h-[80vh] rounded-br-lg">
        <div class="flex justify-between  border-b-2 pb-5 mt-6">
            <p class="font-bold text-xl ml-5">Advanced</p>
            <svg viewBox="0 0 24 24" class="icon_close mr-3" width="24" height="24"><path fill="currentColor" fill-rule="nonzero" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
        </div>

        <div class="ml-5 overflow-y-scroll md:h-[68vh]">
            <div>
            <Label class="mt-5">Auto accept invites</Label>
            <input v-model="show" @click="checked2 = !checked2" class="mt-3 mr-3" type="checkbox" id="check1">
            <label for="check1">{{ checked2 ? "On" : "Off" }}</label>
            <p class="text-gray-500 text-xs mt-3">Automatically accept invites from known collaborators.</p>
            </div>

        <div>
            <Label class="mt-5">Experimental features</Label>
            <div>
                <input @click="checked = !checked" class="mr-3" type="checkbox" id="checkbox"/>
                <label  for="checkbox">{{ checked ? "On" : "Off" }}</label>
            </div>
            <p class="text-gray-500 text-xs inline">Preview early versions of new features before anyone else.</p>
            <a class="text-red-500 text-xs ml-2 hover:underline" href="https://todoist.com/help/articles/experimental-features">Learn more</a>
        </div>

        <div class="border-t-2 flex justify-end mt-40 pt-5 pr-5" v-show="!show" >
            <div class="mr-7">
                 <button class="text-gray-600 rounded-lg hover:opacity-90 bg-gray-300 h-11 w-20">Cancel</button>
            </div>
            <div>
                <home-button class="">Update</home-button>
            </div>
        </div>
        </div>
  </div>
</template>