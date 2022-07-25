<script setup>
    import {ref} from 'vue'
    import SettingAccBtn from '@/components/UI/SettingAccBtn.vue'
    import  SectionTitle from '@/components/UI/SectionTitle.vue'
    let urlICal = ref('https://ext.todoist.com/export/ical/todoist?user_id=40260399&ical_token=df23a9f5eb4a68d049e2b70700eda325193f0014fbeb7a15cae8f725092afcb2&r_factor=4247');
    const copyClipboard = () => {
        navigator.clipboard.writeText(urlICal.value);
        alert("Copied the text: ");
    }
</script>

<template>
    <div class="md:w-[65%] bg-white rounded-tr-lg md:h-[80vh] rounded-br-lg ">
        <section-title>
            Integration
        </section-title>
        <hr>
        <div class="overflow-y-scroll md:h-[68vh] md:pl-5 md:pt-4">
            <div>
                <p class="text-sm">Make Todoist your one-stop, productivity hub with integrations for all your favorite apps.</p>
                <setting-acc-btn bgColor="bg-red-500 md:w-[27%] text-white md:mt-3 hover:bg-red-400">
                    Discover integrations
                </setting-acc-btn>
            </div>
            <div class="md:mt-3 md:mb-3">
                <p class="font-bold">Your integrations</p>
                <p class="text-sm">You have no applications authorized to access your account.</p>
            </div>
            <hr>
            <div class="flex items-center md:mt-3 md:mb-3">
                <img src="../../public/images/intag-img-1.png" class="w-10" alt="">
                <div class="md:ml-2">
                    <p class="text-sm font-bold">Google Calendar</p>
                    <p class="text-gray-500 text-sm">Enjoy a 2-way sync between your scheduled Todoist tasks and your Google Calendar.</p>
                </div>
            </div>
            <hr>
            <setting-acc-btn bgColor="bg-gray-200 md:w-1/4 hover:bg-gray-300 md:mt-2">
                Connect calendar
            </setting-acc-btn>
            <p class="text-sm font-bold md:mt-2">Already have an IFTTT/Zapier calendar connection?</p>
            <p class="text-gray-500 text-xs md:mt-1 md:mb-3">With this new 2-way sync, some of your existing tasks may end up duplicated. We strongly recommend stopping your previous integration first to minimize duplicates.</p>
            <hr>
            <div class="md:mt-6">
                <p class="font-bold">Calendar feed URL</p>
                <p class="text-sm mt-1">Need a snapshot of your scheduled tasks? Download a static view of your upcoming to-dos as a ICS file.
                    <a href="#" class="text-red-500">Learn more.</a>
                </p>
                <div class="flex items-center md:mt-3 md:mb-5">
                    <setting-acc-btn bgColor="bg-gray-200 hover:bg-gray-300 md:w-auto flex text-center">
                        Apple calendar
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 14.293V4.5a.5.5 0 00-1 0v9.793l-2.146-2.147a.5.5 0 00-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L12.5 14.293zM19.53 19c.26 0 .47-.224.47-.5s-.21-.5-.47-.5H4.47c-.26 0-.47.224-.47.5s.21.5.47.5h15.06z" fill="currentColor"></path></svg>
                    </setting-acc-btn>
                    <setting-acc-btn bgColor="bg-gray-200 hover:bg-gray-300 md:w-auto md:ml-3 flex text-center">
                        Outlook
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 14.293V4.5a.5.5 0 00-1 0v9.793l-2.146-2.147a.5.5 0 00-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L12.5 14.293zM19.53 19c.26 0 .47-.224.47-.5s-.21-.5-.47-.5H4.47c-.26 0-.47.224-.47.5s.21.5.47.5h15.06z" fill="currentColor"></path></svg>
                    </setting-acc-btn>
                </div>
            </div>
            <div class="flex items-center justify-between md:pr-5">
                <p class="font-bold">Calendar Subscription URL (iCal)</p>
                <setting-acc-btn v-on:click.stop="copyClipboard" bgColor=" md:w-auto md:ml-3 flex items-center hover:bg-gray-200">
                    <p class="text-sm">Copy to clipboard</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.26756 5H18C18.5523 5 19 5.44772 19 6V16.7324C19.5978 16.3866 20 15.7403 20 15V6C20 4.89543 19.1046 4 18 4H9C8.25972 4 7.61337 4.4022 7.26756 5ZM15 7H6C4.89543 7 4 7.89543 4 9V18C4 19.1046 4.89543 20 6 20H15C16.1046 20 17 19.1046 17 18V9C17 7.89543 16.1046 7 15 7ZM5 9C5 8.44772 5.44772 8 6 8H15C15.5523 8 16 8.44772 16 9V18C16 18.5523 15.5523 19 15 19H6C5.44772 19 5 18.5523 5 18V9ZM8 13H7V14H8V13ZM10 13H11V14H10V13ZM14 13H13V14H14V13Z" fill="currentColor"></path></svg>
                </setting-acc-btn>
            </div>
            <div class="md:pr-5 md:mt-4 md:pb-4">
                <input
                        type="text"
                        class="border md:w-full rounded text-sm p-1"
                        v-model="urlICal"
                        id="urlInput"
                >
            </div>
            <hr>

            <div>
                <p class="font-bold md:mt-5">API token</p>
                <input
                        type="text"
                        value="f5eb421b58e263d28b1b350673259dd104825dcc"
                        class="md:w-1/2 border rounded rounded text-sm p-1 md:mt-3"
                >
            </div>
            <div class="flex items-center justify-start md:mt-5 pb-3">
                <setting-acc-btn bgColor="bg-gray-100 text-sm md:w-auto">
                    Copy to clipboard
                </setting-acc-btn>
                <setting-acc-btn bgColor="text-red-500 border-red-500 text-sm md:auto md:ml-2">
                    Issue new API token
                </setting-acc-btn>
            </div>
        </div>
    </div>
</template>