<script setup>
import TodaySvg from '@/components/AppToday/TodaySvg.vue'
</script>

<template>
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
            <button class="bg-red-500 md:mt-4 text-white rounded text-sm md:pr-3 md:pl-3 md:pt-1 md:pb-1">Add
                atask</button>
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