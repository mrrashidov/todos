<script setup>
import {ref} from 'vue'
let changeLab = ref(false)
let changeLab2 = ref(false)
let showProductivityBottomDiv = ref(false)
import Label from "../components/UI/SlotForLabels.vue"
import HomeButton from '../components/UI/HomeButton.vue'
import {useStore} from '../store'
const store = useStore();
</script>

<template>
     <div 
        v-show="store.productivity"
        class="w-3/4 bg-white rounded-tr-lg overflow-y-scroll  md:h-[80vh] rounded-br-lg pb-10">
        <div class="flex justify-between border-b-2 pb-4 fixed z-10 bg-white w-7/12">
            <p class="font-bold text-xl ml-5 mt-2">Productivity</p>
            <svg viewBox="0 0 24 24" class="icon_close  mt-2" width="24" height="24"><path fill="currentColor" fill-rule="nonzero" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
        </div>
        <div class="mt-16">
            <p class="text-sm text-gray-700 block ml-5">Celebrating your progress goes a long way toward achieving long-term success. And setting goals can help you stay on track!</p>
             <a class="text-red-700 text-sm hover:underline ml-5" href="https://todoist.com/help/articles/how-to-use-the-productivity-view">Learn more</a>
        </div>
        <div class="mt-5 border-b-2 pb-5 ml-5">
            <Label>Todoist Karma</Label>
            <input @click="changeLab = !changeLab" class="mt-5" type="checkbox" id="karma">
            <label class="ml-2" for="karma">{{changeLab ? 'On' : 'Off'}}</label>
             <p class="text-sm mt-3 text-gray-500">Stay motivated and accountable with Todoist Karma. Achieve new levels by earning points for completing tasks, reaching your daily and weekly goals, and using advanced features like recurring due dates.<a class="text-red-700 ml-2 text-sm hover:underline" href="https://todoist.com/help/articles/introduction-to-karma">Learn more</a></p>
        </div>
        <div class="mt-5 ml-5">
            <Label>Goals</Label>
            <p class=" text-gray-500 text-sm mt-3">Small steps add up to big achievements. Set task goals to keep your momentum.</p>
        </div>
        <div class="mt-5 ml-5">
            <Label>Daily tasks</Label>
            <input class="border-2 mt-3 " placeholder="5" type="number">
        </div>
        <div class="mt-5 border-b-2 pb-5 ml-5">
            <Label>Weekly tasks</Label>
            <input class="border-2 mt-3 " placeholder="30" type="number">
        </div>
        <div class="mt-5 border-b-2 pb-5 ml-5">
            <Label>Days off</Label>
            <ul class="flex mt-5">
                <li @click="showProductivityBottomDiv = !showProductivityBottomDiv" class="mr-5"><input class="mr-2" type="checkbox">Mon</li>
                <li @click="showProductivityBottomDiv = !showProductivityBottomDiv" class="mr-5"><input class="mr-2" type="checkbox">Tue</li>
                <li @click="showProductivityBottomDiv = !showProductivityBottomDiv" class="mr-5"><input class="mr-2" type="checkbox">Wed</li>
                <li @click="showProductivityBottomDiv = !showProductivityBottomDiv" class="mr-5"><input class="mr-2" type="checkbox">Thu</li>
                <li @click="showProductivityBottomDiv = !showProductivityBottomDiv"  class="mr-5"><input class="mr-2" type="checkbox">Fri</li>
                <li class="mr-5"><input checked class="mr-2" type="checkbox">Sat</li>
                <li class="mr-5"><input checked class="mr-2" type="checkbox">Sun</li>
            </ul>
             <p class=" text-gray-500 text-sm mt-3">When you take a break, your Karma and streaks can take a break too.</p>
        </div>
        <div class="mt-5 ml-5">
            <Label>Vocation mode</Label>
            <input @click="changeLab2 = !changeLab2" id="vocation" class="mt-3" type="checkbox">
            <label class="ml-2" for="vocation">{{changeLab2 ? 'On' : 'Off'}}</label>
            <p class=" text-gray-500 text-sm mt-1">Time off means your streaks and Karma stay, even if you don't hit your task goals.</p>
        </div>

        <div class="border-t-2 flex justify-end p-5" v-show="showProductivityBottomDiv">
            <div class="mr-7">
                <button class="text-gray-600 rounded-lg hover:opacity-90 bg-gray-300 h-11 w-20">Cancel</button>
            </div>
        <div>
            <home-button>Update</home-button>
        </div>
        
        </div>
    </div>
</template>