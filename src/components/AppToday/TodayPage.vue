<script setup>
import SettingAccBtn from '@/components/UI/SettingAccBtn.vue'
import TodaySvg from '@/components/AppToday/TodaySvg.vue'
import addTask from '@/components/Inbox/addTask.vue'
import ViewComp from '@/components/AppToday/ViewComp.vue'
import { useStore } from "../../store";
const store = useStore();
const weekDay = new Date().getDay();
const day = new Date().getDate();
const month = new Date().getMonth() + 1;

let haft = ''
let oy = ''
switch (weekDay) {
    case 1:
        haft = 'Mon'
        break;
    case 2:
        haft = 'Tue'
        break;
    case 3:
        haft = 'Wen'
        break;
    case 4:
        haft = 'Thur'
        break;
    case 5:
        haft = 'Fri'
        break;
    case 6:
        haft = 'Satur'
        break;
    case 7:
        haft = 'Sun'
        break;
}
switch (month) {
    case 1:
        oy = 'January'
        break;
    case 2:
        oy = 'February'
        break;
    case 3:
        oy = 'March'
        break;
    case 4:
        oy = 'April'
        break;
    case 5:
        oy = 'May'
        break;
    case 6:
        oy = 'June'
        break;
    case 7:
        oy = 'July'
        break;
    case 8:
        oy = 'August'
        break;
    case 9:
        oy = 'September'
        break;
    case 10:
        oy = 'October'
        break;
    case 11:
        oy = 'November'
        break;
    case 12:
        oy = 'December'
        break;
}
</script>

<template>
    <div class="md:w-4/5 z-20 md:pr-32 md:pl-28 overflow-x-hidden">
        <div class="flex items-end justify-between md:">
            <div class="flex items-center">
                <p class="text-xl font-bold">Today</p>
                <p class="text-xs md:mt-1 md:ml-2 text-gray-500">{{ haft }} {{ day }} {{ oy }}</p>
            </div>
            <div
                @click="store.viewComp = !store.viewComp"
                class="text-gray-500 rounded w-auto md:pt-0.5 md:pb-0.5 md:pl-1 md:pr-2 cursor-pointer hover:bg-gray-200  flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M15 14.5a2 2 0 011.936 1.498L19.5 16a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 17a.5.5 0 010-1l8.564-.002A2 2 0 0115 14.5zm-.982 1.81l.005-.025-.005.026-.003.014-.004.025-.007.061A.897.897 0 0014 16.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0016 16.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026a.998.998 0 00-1.843.043l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047zM9 9.5a2 2 0 011.936 1.498L19.5 11a.5.5 0 010 1l-8.563.001a2.001 2.001 0 01-3.874 0L4.5 12a.5.5 0 010-1l2.564-.002A2 2 0 019 9.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C8 11.441 8 11.471 8 11.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0010 11.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 009 10.5zm6-6a2 2 0 011.936 1.498L19.5 6a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 7a.5.5 0 010-1l8.564-.002A2 2 0 0115 4.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C14 6.441 14 6.471 14 6.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06C16 6.557 16 6.528 16 6.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0015 5.5z"
                        fill="currentColor" fill-rule="nonzero"></path>
                </svg>
                <p class="text-xs hover:cursor-pointer">View</p>
            </div>
        </div>
        <div>
            <view-comp></view-comp>
        </div>
        <div>
            <div class="flex md:mt-5 items-center add-task cursor-pointer">
                <svg class="text-red-500 svg" width="13" height="13">
                    <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
                        fill="currentColor" fill-rule="evenodd"></path>
                </svg>
                <p class="text-sm text md:ml-1 text-gray-500">Add task</p>
            </div>
            <div class="md:translate-x-[36%] md:mt-10">
                <today-svg></today-svg>
            </div>
            <div class="text-center mt-3">
                <p>Get a clear view of the day ahead</p>
                <p class="text-sm text-gray-500">All your tasks that are due today will show up here.</p>
                <button class="bg-red-500 md:mt-4 text-white rounded text-sm md:pr-3 md:pl-3 md:pt-1 md:pb-1">Add atask</button>
                <br>
                <div class=" rounded md:mt-5 text-sm md:pl-3 md:pt-1 md:pb-1 border md:w-1/4 inline-flex items-center">
                    <svg width="24" height="24">
                        <defs>
                            <path
                                d="M10.08 16h3.84c.85-2.15 2.58-3.17 2.58-5.5C16.5 8 14.5 6 12 6s-4.5 2-4.5 4.5c0 2.33 1.73 3.35 2.58 5.5zm3.57 1h-3.3l.37 1.84c.02.1.1.16.2.16h2.17a.2.2 0 0 0 .2-.16l.36-1.84zm-5.46-2.32l-.42-.62c-.88-1.29-1.27-2.24-1.27-3.56C6.5 7.45 8.95 5 12 5s5.5 2.45 5.5 5.5c0 1.32-.4 2.27-1.27 3.56l-.42.62c-.59.85-.9 1.4-1.08 2.02l-.47 2.34c-.1.56-.6.96-1.17.96H10.9a1.2 1.2 0 0 1-1.17-.96l-.46-2.3a7.23 7.23 0 0 0-1.09-2.06zm13.24-.82a.5.5 0 1 1-.38.93l-1.85-.77a.5.5 0 0 1 .38-.92l1.85.76zM19.58 7.9a.5.5 0 0 1-.38-.92l1.85-.77a.5.5 0 1 1 .38.93l-1.85.76zm-4.06-4.6a.5.5 0 0 1-.92-.38l.76-1.85a.5.5 0 1 1 .93.38l-.77 1.85zM9.4 2.92a.5.5 0 0 1-.92.38L7.7 1.45a.5.5 0 1 1 .93-.38l.76 1.85zM4.8 6.98a.5.5 0 0 1-.38.92l-1.85-.76a.5.5 0 1 1 .38-.93l1.85.77zm-1.85 7.8a.5.5 0 0 1-.38-.92l1.85-.76a.5.5 0 0 1 .38.92l-1.85.77z"
                                id="4971afb8-c365-4956-af3a-823b17fe66ee"></path>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <mask id="f0b1843e-0058-447e-908f-823b17fe66cb" fill="#fff">
                                <use xlink:href="#4971afb8-c365-4956-af3a-823b17fe66ee"></use>
                            </mask>
                            <g mask="url(#f0b1843e-0058-447e-908f-823b17fe66cb)" fill="#FF9233">
                                <path d="M0 0h24.12v24.12H0z"></path>
                            </g>
                        </g>
                    </svg>
                    <span>Establish a daily habit</span>
                </div>
                <br>
                <a href="#" class="text-red-500 md:mt-2  text-sm inline-flex items-center">
                    <svg width="17" height="17">
                        <path
                            d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm-.1-2.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM5.5 5.87c.06-1.32.9-2.37 2.53-2.37 1.47 0 2.47.95 2.47 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4H7.32V9.1c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H5.5z"
                            id="tick-a"></path>
                    </svg>
                    How to plan your day
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
.add-task:hover .svg {
    color: #fff;
    background: red;
    border-radius: 50%;
}

.add-task:hover .text {
    color: red;
}
</style>
