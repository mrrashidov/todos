<script setup>
import HomeButton from "../components/UI/HomeButton.vue"

import {useStore} from '../store'
const store = useStore();
</script>

<template>
    <div v-show="store.reminders" class="w-8/12 bg-white rounded-tr-lg md:h-[80vh]  rounded-br-lg mb-96">
        <div class="flex justify-between rounded border-b-2 pb-3 bg-white w-full">
            <p class="font-bold text-xl mt-5 ml-5">Reminders</p>
            <svg viewBox="0 0 24 24" class="icon_close mr-5 mt-5" width="24" height="24"><path fill="currentColor" fill-rule="nonzero" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
        </div>
        <div class="flex mt-5">
              <p class="text-sm text-gray-700 block ml-5">The secret to  remembering everything? Upgrade and let Todoist Pro or Business remind you.</p>
             <a class="text-red-700 text-sm hover:underline ml-2" href="https://todoist.com/help/articles/how-to-use-the-productivity-view">Learn more</a>
        </div>
        <div>
            <home-button class="mt-5 h-10 ml-5"><a href="https://todoist.com/pricing/upgrade"></a>Upgrade now</home-button>
        </div>
    </div>
</template>