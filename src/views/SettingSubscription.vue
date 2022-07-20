<script setup>
import { ref } from 'vue'
import SettingAccBtn from '@/components/UI/SettingAccBtn.vue'
</script>

<template>
    <div class="md:w-[65%] bg-white rounded-tr-lg md:h-[80vh] rounded-br-lg ">
        <div class="flex md:pl-10 pb-3 justify-between md:pt-5 md:pr-7">
            <p class="font-bold text-2xl">Subscription</p>
            <svg @click="closeAccSetting('/app/project')" viewBox="0 0 24 24"
                class="icon_close hover:bg-gray-300 rounded" width="24" height="24">
                <path fill="currentColor" fill-rule="nonzero"
                    d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z">
                </path>
            </svg>
        </div>
        <hr>
        <div class="overflow-y-scroll md:h-[68vh] md:pl-10 md:pt-4">
            <div class="flex items-center md:pb-5 justify-between md:pr-7">
                <div class="md:pt-2">
                    <p class="text-xl font-semibold">Plan</p>
                    <p class="font-bold text-xl">Todoist Free</p>
                </div>
                <div class="flex items-center">
                    <svg class="text-red-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8.38281 9.42188V9.10449C8.38281 8.5918 8.55859 8.31836 9.17871 7.95215C9.80371 7.57617 10.1992 7.03418 10.1992 6.26758C10.1992 5.26172 9.35938 4.5 8.12891 4.5C6.75684 4.5 6.05371 5.33984 6 6.39453H6.83496C6.88867 5.69629 7.35742 5.26172 8.09473 5.26172C8.82227 5.26172 9.29102 5.70605 9.29102 6.31152C9.29102 6.83398 9.07129 7.1416 8.50488 7.48828C7.83594 7.88867 7.52344 8.32812 7.52832 8.97266V9.42188H8.38281ZM8.02148 11.6875C8.41699 11.6875 8.69531 11.4043 8.69531 11.0088C8.69531 10.6084 8.41699 10.3252 8.02148 10.3252C7.62598 10.3252 7.34277 10.6084 7.34277 11.0088C7.34277 11.4043 7.62598 11.6875 8.02148 11.6875Z"
                            fill="currentColor"></path>
                    </svg>
                    <p class="text-red-500 md:ml-2">Billing and payments</p>
                </div>
            </div>
            <div class="border border-gray-300 rounded-lg  md:w-[90%] bg-gray-50 md:p-4">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="font-bold">Todoist Pro</p>
                        <p>Unlock features to do your best work, from $5/month.</p>
                    </div>
                    <setting-acc-btn bgColor="bg-red-500">
                        <p class="text-white">Upgrade now</p>
                    </setting-acc-btn>
                </div>
                <div class="grid grid-cols-2 gap-5 md:mt-7">
                    <div class="flex items-start">
                        <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><defs><filter x="-70%" y="-62.5%" width="240%" height="275%" filterUnits="objectBoundingBox" id="feature-reminder_svg__c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" in="shadowBlurOuter1"></feColorMatrix></filter><filter x="-5.3%" y="-5.6%" width="110.5%" height="111.1%" filterUnits="objectBoundingBox" id="feature-reminder_svg__f"><feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowInnerInner1"></feColorMatrix></filter><filter x="-12.5%" y="-12.5%" width="125%" height="125%" filterUnits="objectBoundingBox" id="feature-reminder_svg__h"><feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowInnerInner1"></feColorMatrix></filter><circle id="feature-reminder_svg__a" cx="4" cy="4" r="3.5"></circle><circle id="feature-reminder_svg__g" cx="19" cy="5" r="4"></circle><path id="feature-reminder_svg__d" d="M-1-4H9v8H-1z"></path><path d="M3.5 20a1 1 0 01-.8-1.6C4.2 16.6 5 13.4 5 9a7 7 0 1114 0c0 4.5.8 7.6 2.3 9.4a1 1 0 01-.8 1.6h-17z" id="feature-reminder_svg__e"></path></defs><g fill="none" fill-rule="evenodd"><path d="M-122-214h1200v800H-122z"></path><g transform="translate(6 15)"><mask id="feature-reminder_svg__b" fill="#fff"><use xlink:href="#feature-reminder_svg__a"></use></mask><use fill="#FF7847" fill-rule="nonzero" xlink:href="#feature-reminder_svg__a"></use><g fill-rule="nonzero" mask="url(#feature-reminder_svg__b)" fill="#000"><use filter="url(#feature-reminder_svg__c)" xlink:href="#feature-reminder_svg__d"></use></g></g><g fill-rule="nonzero" transform="translate(-2 -1)"><use fill="#FF8052" xlink:href="#feature-reminder_svg__e"></use><use fill="#000" filter="url(#feature-reminder_svg__f)" xlink:href="#feature-reminder_svg__e"></use></g><g fill-rule="nonzero" transform="translate(-2 -1)"><use fill="#991E33" xlink:href="#feature-reminder_svg__g"></use><use fill="#000" filter="url(#feature-reminder_svg__h)" xlink:href="#feature-reminder_svg__g"></use></g></g></svg>
                        <div class="md:ml-2">
                            <p class="font-bold">Unlimited reminders</p>
                            <p>Never forget an important date or deadline again.</p>
                        </div>
                    </div>
                     <div class="flex items-start">
                        <svg width="27" height="22" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><defs><path d="M12.9 0c1.8 0 2.4.2 3 .5.7.4 1.2.9 1.6 1.5.3.7.5 1.3.5 3.1V10c0 1.8-.2 2.4-.5 3-.4.7-.9 1.2-1.5 1.6l-1 .3v2a.5.5 0 01-.9.3L12 15H5.1c-1.8 0-2.4-.2-3-.5C1.3 14 .8 13.6.4 13c-.3-.7-.5-1.3-.5-3.1V5c0-1.8.2-2.4.5-3C1 1.3 1.4.8 2 .4 2.7.2 3.3 0 5.1 0H13z" id="feature-comments_svg__a"></path><path d="M6.9-4c1.8 0 2.4.2 3 .5.7.4 1.2.9 1.6 1.5.3.7.5 1.3.5 3.1V6c0 1.8-.2 2.4-.5 3-.4.7-.9 1.2-1.5 1.6-.7.3-1.3.5-3.1.5H0l-2.1 2.1a.5.5 0 01-.9-.3v-2c-.4 0-.7-.2-1-.3-.6-.6-1-1-1.5-1.6-.3-.7-.5-1.3-.5-3.1V1c0-1.8.2-2.4.5-3 .4-.7.9-1.2 1.5-1.6.7-.3 1.3-.5 3.1-.5H7z" id="feature-comments_svg__d"></path><path d="M12.9 1c1.8 0 2.4.2 3 .5.7.4 1.2.9 1.6 1.5.3.7.5 1.3.5 3.1V11c0 1.8-.2 2.4-.5 3-.4.7-.9 1.2-1.5 1.6-.7.3-1.3.5-3.1.5H6l-2.1 2.1a.5.5 0 01-.9-.3v-2c-.4 0-.7-.2-1-.3-.6-.6-1-1-1.5-1.6-.3-.7-.5-1.3-.5-3.1V6c0-1.8.2-2.4.5-3 .4-.7.9-1.2 1.5-1.6.7-.3 1.3-.5 3.1-.5H13z" id="feature-comments_svg__e"></path><filter x="-72.2%" y="-63.6%" width="244.4%" height="250.4%" filterUnits="objectBoundingBox" id="feature-comments_svg__c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" in="shadowBlurOuter1"></feColorMatrix></filter><filter x="-5.6%" y="-5.8%" width="111.1%" height="111.6%" filterUnits="objectBoundingBox" id="feature-comments_svg__f"><feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowInnerInner1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M-120-358h1200v800H-120z"></path><g transform="translate(6 4)"><mask id="feature-comments_svg__b" fill="#fff"><use xlink:href="#feature-comments_svg__a"></use></mask><use fill="#18677A" fill-rule="nonzero" xlink:href="#feature-comments_svg__a"></use><g fill-rule="nonzero" mask="url(#feature-comments_svg__b)" fill="#000"><use filter="url(#feature-comments_svg__c)" xlink:href="#feature-comments_svg__d"></use></g></g><g fill-rule="nonzero" transform="translate(0 -1)"><use fill="#55C2B0" xlink:href="#feature-comments_svg__e"></use><use fill="#000" filter="url(#feature-comments_svg__f)" xlink:href="#feature-comments_svg__e"></use></g></g></svg>
                        <div class="md:ml-2">
                            <p class="font-bold">Comments & Files</p>
                            <p>Add important details to your tasks and projects.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><defs><path d="M6.4 5.9h10L18 6l.9.5c.2.2.5.4 1 1.1l3.5 4.7c.4.6.6.8.6 1.1v1c0 .2-.2.5-.6 1l-3.5 4.8c-.5.7-.8.9-1 1.1l-1 .5H6.5c-1.3 0-1.8 0-2.3-.3-.5-.3-.8-.7-1.1-1.1-.3-.5-.4-1-.4-2.4V9.7c0-1.3.1-1.8.4-2.3.3-.5.6-.9 1.1-1.1.5-.3 1-.4 2.3-.4z" id="feature-label_svg__a"></path><path d="M7.5 3.4h10c.9 0 1.2 0 1.5.2.4 0 .7.2 1 .4l1 1.2 3.5 4.6c.4.6.6.9.6 1.2v.9c0 .3-.2.5-.6 1.1L21 17.7 20 19l-1 .4-1.5.1h-10c-1.3 0-1.8-.1-2.3-.4-.5-.2-.8-.6-1.1-1-.3-.6-.4-1-.4-2.4V7.3c0-1.3.1-1.8.4-2.3.3-.5.6-.9 1.1-1.2.5-.2 1-.4 2.3-.4z" id="feature-label_svg__d"></path><path d="M18 1.3l1 .5c.2.2.5.4 1 1.1l3.5 4.7c.4.6.6.8.6 1.1v1l-.6 1.1-3.5 4.7c-.5.7-.8.9-1 1.1l-1 .5H6.5c-1.3 0-1.8 0-2.3-.3-.5-.3-.8-.7-1.1-1.1-.3-.5-.4-1-.4-2.4V5c0-1.3.1-1.8.4-2.3.3-.5.6-.8 1.1-1.1.5-.3 1-.4 2.3-.4h10l1.5.1zm1.2 6.4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" id="feature-label_svg__e"></path><filter x="-60.5%" y="-68.7%" width="220.9%" height="262.5%" filterUnits="objectBoundingBox" id="feature-label_svg__c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" in="shadowBlurOuter1"></feColorMatrix></filter><filter x="-4.7%" y="-6.3%" width="109.3%" height="112.5%" filterUnits="objectBoundingBox" id="feature-label_svg__f"><feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowInnerInner1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M-120-261h1200v800H-120z"></path><g transform="translate(-1 -2.3)"><mask id="feature-label_svg__b" fill="#fff"><use xlink:href="#feature-label_svg__a"></use></mask><use fill="#3D5699" fill-rule="nonzero" transform="rotate(-42 13.3 13.9)" xlink:href="#feature-label_svg__a"></use><g fill-rule="nonzero" mask="url(#feature-label_svg__b)" transform="rotate(-20 14.4 11.4)" fill="#000"><use filter="url(#feature-label_svg__c)" xlink:href="#feature-label_svg__d"></use></g></g><g fill-rule="nonzero" transform="rotate(-20 13.4 9.2)"><use fill="#66ADFF" xlink:href="#feature-label_svg__e"></use><use fill="#000" filter="url(#feature-label_svg__f)" xlink:href="#feature-label_svg__e"></use></g></g></svg>
                        <div class="md:ml-2">
                            <p class="font-bold">Labels & Filters</p>
                            <p>Add richer context and create custom task views.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <svg width="37" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><defs><filter x="-5%" y="-5%" width="110%" height="110%" filterUnits="objectBoundingBox" id="feature-trend_svg__b"><feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowInnerInner1"></feColorMatrix></filter><path d="M9.7 2h4.6c2.7 0 3.7.3 4.6.8 1 .5 1.8 1.3 2.3 2.3.5 1 .8 2 .8 4.6v4.6c0 2.7-.3 3.7-.8 4.6-.5 1-1.3 1.8-2.3 2.3-1 .5-2 .8-4.6.8H9.7C7 22 6 21.7 5 21.2s-1.8-1.3-2.3-2.3c-.5-1-.8-2-.8-4.6V9.7C2 7 2.3 6 2.8 5s1.3-1.8 2.3-2.3C6 2.3 7 2 9.7 2z" id="feature-trend_svg__a"></path></defs><g fill="none" fill-rule="evenodd"><path d="M-120-407h1200v800H-120z"></path><g fill-rule="nonzero" transform="translate(0 -2)"><use fill="#FFB647" xlink:href="#feature-trend_svg__a"></use><use fill="#000" filter="url(#feature-trend_svg__b)" xlink:href="#feature-trend_svg__a"></use></g><path stroke="#802A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1.5 12h5L9 8l3 7 3-10 2.5 7h5"></path></g></svg>
                        <div class="md:ml-2">
                            <p class="font-bold">Productivity Trends</p>
                            <p>Visualize your weekly & monthly progress with color-coded charts.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><defs><filter x="-170%" y="-210%" width="400%" height="400%" filterUnits="objectBoundingBox" id="feature-backup_svg__c"><feOffset dx="-2" dy="-6" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" in="shadowBlurOuter1"></feColorMatrix></filter><filter x="-6.8%" y="-10%" width="113.6%" height="120%" filterUnits="objectBoundingBox" id="feature-backup_svg__e"><feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowInnerInner1"></feColorMatrix></filter><path d="M4 15a4 4 0 01-.7-8 2 2 0 012.8-2.7A5.5 5.5 0 0117 5a5 5 0 010 10z" id="feature-backup_svg__a"></path><path d="M5 18a4 4 0 01-.7-8 2 2 0 012.8-2.7A5.5 5.5 0 0118 8a5 5 0 010 10z" id="feature-backup_svg__f"></path><circle id="feature-backup_svg__d" cx="17" cy="10" r="5"></circle></defs><g fill="none" fill-rule="evenodd"><path d="M-121-312h1200v800H-121z"></path><g transform="translate(-1 -3)"><g transform="translate(1 3)"><mask id="feature-backup_svg__b" fill="#fff"><use xlink:href="#feature-backup_svg__a"></use></mask><use fill="#BCC3CC" fill-rule="nonzero" xlink:href="#feature-backup_svg__a"></use><g fill-rule="nonzero" mask="url(#feature-backup_svg__b)" fill="#000"><use filter="url(#feature-backup_svg__c)" xlink:href="#feature-backup_svg__d"></use></g></g><circle fill="#BCC3CC" fill-rule="nonzero" cx="18" cy="13" r="5"></circle><use filter="url(#feature-backup_svg__e)" xlink:href="#feature-backup_svg__f" opacity="0.2" fill-rule="nonzero" fill="#000"></use><path stroke="#2F3133" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M8 14l4-4 4 4m-4 8V11"></path></g></g></svg>
                        <div class="md:ml-2">
                            <p class="font-bold">Automatic Backups</p>
                            <p>Never worry about losing your important data.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><defs><filter x="-5%" y="-5%" width="110%" height="110%" filterUnits="objectBoundingBox" id="feature-more_svg__b"><feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowInnerInner1"></feColorMatrix></filter><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" id="feature-more_svg__a"></path></defs><g fill="none" fill-rule="evenodd"><path d="M-122-455h1200v800H-122z"></path><g transform="translate(-2 -2)"><circle fill="#2F3133" cx="12" cy="12" r="8"></circle><use fill="#BCC3CC" xlink:href="#feature-more_svg__a"></use><use fill="#000" filter="url(#feature-more_svg__b)" xlink:href="#feature-more_svg__a"></use></g></g></svg>
                        <div class="md:ml-3">
                            <p>10+ themes, <span class="text-red-500">and more</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="md:mt-3">Working with a team? <span class="text-red-500">Try the Business plan.</span></p>
            <p class="font-bold md:mt-4">Billing information</p>
            <div class="flex items-center justify-between md:pr-5 md:mt-3 md:mb-3">
                <p class="text-gray-500">Add your billing address and VAT ID so they appear on invoices.</p>
                <setting-acc-btn bgColor="bg-gray-200 hover:bg-gray-300">
                    <p>Update</p>
                </setting-acc-btn>
            </div>
        </div>
    </div>
</template>