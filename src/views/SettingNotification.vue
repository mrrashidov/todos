<script setup>
    import  {ref} from 'vue'
import  NotifItem from  '../components/loginNotification/NotifItem.vue';
const arr = ['Comments for you', 'Tasks assigned to you', 'Tasks completed', 'Tasks uncompleted', 'Collaborators joining project', 'Collaborators declining projects', 'Collaborators leaving project', 'Collaborators being removed from projects']
import NotifBottom from '@/components/loginNotification/NotifBottom.vue';
</script>

<template>
    <div class="md:w-[65%] bg-white rounded-tr-lg md:h-[80vh] rounded-br-lg ">
        <div class="flex md:pl-5 pb-3 justify-between md:pt-5 md:pr-7">
            <p class="font-bold text-2xl">Notifications</p>
            <svg @click="closeAccSetting('/app/project')" viewBox="0 0 24 24"
                class="icon_close hover:bg-gray-300 rounded" width="24" height="24">
                <path fill="currentColor" fill-rule="nonzero"
                    d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z">
                </path>
            </svg>
        </div>
        <hr>

        <div class="overflow-y-scroll md:h-[61.5vh] md:pl-5 md:pb-3 md:pt-4">
            <p>Stay on top of work and life, thanks to gentle nudges from Todoist.
                <a href="#" class="text-red-500">Learn more.</a>
            </p>
            <div class="flex items-center md:mt-5 md:mb-3">
                <input type="checkbox">
                <p class="text-md md:ml-2">Desktop and web notifications</p>
            </div>
            <hr>
            <div class="md:mt-5">
                <p class="font-bold md:text-base">Shared projects</p>
                <p class="text-sm font-light md:mt-1 text-gray-500">Keep work moving forward with notifications about teammate’s comments, completed
                    tasks, and
                    <a href="#" class="text-red-500">more</a>
                </p>
                <p class="text-end md:pr-10 font-bold">Alert style</p>
            </div>
            <div class="flex items-center justify-between md:pr-10 md:mt-5">
                <p class="font-bold">Send notifications about</p>
                <div class="flex">
                    <div class="flex md:mr-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 6h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2zm0 1a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1H6zm10.7 1.6a.5.5 0 01.6.8L12 13.1 6.7 9.4a.5.5 0 11.6-.8l4.7 3.3 4.7-3.3z"></path></svg>
                        <p>Email</p>
                    </div>
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.436 3c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v12.873c0 .892-.093 1.215-.267 1.54a1.81 1.81 0 01-.756.757c-.326.174-.65.267-1.54.267H8.563c-.892 0-1.215-.093-1.54-.267a1.81 1.81 0 01-.757-.756c-.16-.301-.252-.6-.265-1.345L6 5.564c0-.892.093-1.215.267-1.54a1.81 1.81 0 01.756-.757c.301-.16.6-.252 1.345-.265L15.436 3zm.17 1.001H8.394l-.305.01c-.305.018-.449.06-.594.138a.814.814 0 00-.346.346c-.05.093-.085.186-.109.321l-.023.186-.008.114-.008.278v13.212l.01.305c.018.305.06.449.138.594a.814.814 0 00.346.346c.093.05.186.085.321.109l.186.023.114.008.278.008h7.212l.278-.008.114-.008.186-.023c.135-.024.228-.059.321-.109a.814.814 0 00.346-.346c.05-.093.085-.186.109-.321l.023-.186.008-.114.008-.278V5.394l-.008-.278-.008-.114-.023-.186a1.007 1.007 0 00-.109-.321.814.814 0 00-.346-.346 1.007 1.007 0 00-.321-.109l-.186-.023-.114-.008-.278-.008zM9.359 17c.223 0 .304.023.385.067a.45.45 0 01.19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 01-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 01-.19-.189c-.043-.081-.066-.162-.066-.385v-.718c0-.223.023-.304.067-.385a.45.45 0 01.189-.19c.081-.043.162-.066.385-.066h.718zm3 0c.223 0 .304.023.385.067a.45.45 0 01.19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 01-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 01-.19-.189c-.043-.081-.066-.162-.066-.385v-.718c0-.223.023-.304.067-.385a.45.45 0 01.189-.19c.081-.043.162-.066.385-.066h.718zm3 0c.223 0 .304.023.385.067a.45.45 0 01.19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 01-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 01-.19-.189c-.043-.081-.066-.162-.066-.385v-.718c0-.223.023-.304.067-.385a.45.45 0 01.189-.19c.081-.043.162-.066.385-.066h.718zm-6-6c.223 0 .304.023.385.067a.45.45 0 01.19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 01-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 01-.19-.189c-.043-.081-.066-.162-.066-.385v-.718c0-.223.023-.304.067-.385a.45.45 0 01.189-.19c.081-.043.162-.066.385-.066h.718zm0-3c.223 0 .304.023.385.067a.45.45 0 01.19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 01-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 01-.19-.189C8.024 9.663 8 9.582 8 9.36v-.718c0-.223.023-.304.067-.385a.45.45 0 01.189-.19c.081-.043.162-.066.385-.066h.718zm3 0c.223 0 .304.023.385.067a.45.45 0 01.19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 01-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 01-.19-.189c-.043-.081-.066-.162-.066-.385v-.718c0-.223.023-.304.067-.385a.45.45 0 01.189-.19c.081-.043.162-.066.385-.066h.718zm-3-3c.223 0 .304.023.385.067a.45.45 0 01.19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 01-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 01-.19-.189C8.024 6.663 8 6.582 8 6.36v-.718c0-.223.023-.304.067-.385a.45.45 0 01.189-.19c.081-.043.162-.066.385-.066h.718zm3 0c.223 0 .304.023.385.067a.45.45 0 01.19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 01-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 01-.19-.189c-.043-.081-.066-.162-.066-.385v-.718c0-.223.023-.304.067-.385a.45.45 0 01.189-.19c.081-.043.162-.066.385-.066h.718zm3 0c.223 0 .304.023.385.067a.45.45 0 01.19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 01-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 01-.19-.189c-.043-.081-.066-.162-.066-.385v-.718c0-.223.023-.304.067-.385a.45.45 0 01.189-.19c.081-.043.162-.066.385-.066h.718z" fill="currentColor" fill-rule="nonzero"></path></svg>
                        <p>Mobile</p>
                    </div>
                </div>
            </div>
            <div class="md:mb-5">
                <notif-item v-for="item in arr" :key="item">
                    {{ item}}
                </notif-item>
            </div>
            <hr>
            <div class="md:mt-3">
                <p class="font-bold md:text-base">Todoist emails</p>
                <div class="md:mt-3">
                    <p class="text-gray-500 md:text-sm">Stay in-the-know about all things Todoist.</p>
                    <div class="flex items-center">
                        <input type="checkbox">
                        <p class="md:ml-2 text-sm">Daily digest</p>
                    </div>
                </div>
                <div class="md:mt-3">
                    <p class="text-gray-500 md:text-sm">Personalized productivity stats plus your tasks due today. Sent every morning.</p>
                    <div class="flex items-center">
                        <input type="checkbox">
                        <p class="md:ml-2 text-sm">What's new</p>
                    </div>
                </div>
                <div class="md:mt-3">
                    <p class="text-gray-500 md:text-sm">Exciting features and updates from the Todoist team. Sent no more than once a month.</p>
                    <div class="flex items-center">
                        <input type="checkbox">
                        <p class="md:ml-2 text-sm">Tips and trips</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <notif-bottom></notif-bottom>
        </div>
    </div>
</template>
