<script setup>
import { ref } from 'vue'
import SettingAccBtn from '@/components/UI/SettingAccBtn.vue'
const file = ref(null);
function onChange(e) {
    file.value = URL.createObjectURL(e.target.files[0]);
}
</script>
<template>
    <div class="md:w-[65%] bg-white rounded-tr-lg md:h-[80vh] rounded-br-lg ">
        <div class="flex md:pl-10 pb-3 justify-between md:pt-5 md:pr-7">
            <p class="font-bold text-2xl">Account</p>
            <svg viewBox="0 0 24 24" class="icon_close hover:bg-gray-300 rounded" width="24" height="24">
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
                <setting-acc-btn bgColor="bg-gray-200 hover:bg-gray-300">
                    <p class="">Manage plan</p>
                </setting-acc-btn>
            </div>
            <hr>
            <div class="pt-5">
                <p class="md:text-xl md:font-semibold md:mb-3">Photo</p>
                <div class="flex items-center">
                    <div class="rounded-full overflow-hidden bg-cover md:w-24 md:h-24 border-2">
                        <img :src="file" v-if="file" class="object-cover scale-110 w-full h-full" alt="">
                        <p v-show="!file" class="md:text-8xl md:ml-3 md:-mt-2">d</p>
                    </div>
                    <div class="md:ml-3 flex">
                        <div>
                            <input type="file" @change="onChange" class="hidden" id="file">
                            <label for="file">
                                <setting-acc-btn bgColor="bg-gray-200 hover:bg-gray-300 text-center">
                                    <p v-show="!file">Upload photo</p>
                                    <p v-show="file">Change photo</p>
                                </setting-acc-btn>
                            </label>
                        </div>
                        <setting-acc-btn v-show="file" @click="file = null" bgColor="border-red-500 ml-3 text-center">
                            <p class="text-red-500">Remove photo</p>
                        </setting-acc-btn>
                    </div>
                </div>
                <div>
                    <p class="md:text-xl md:font-semibold md:mt-3">Name</p>
                    <input value="username" type="text"
                        class="md:pl-2 md:w-3/4 md:h-[30px] border-2 mt-1 rounded-md outline-none">
                </div>
                <div class="md:mt-5">
                    <p class="md:text-xl md:font-semibold md:mt-3">Email</p>
                    <p class="font-mono">userExample@gmail.com</p>
                    <setting-acc-btn bgColor="md:w-[18%] md:mt-3 bg-gray-200 hover:bg-gray-300">
                        <p class="">Change email</p>
                    </setting-acc-btn>
                </div>
                <div class="md:mb-4">
                    <p class="md:text-xl md:font-semibold md:mt-3">Password</p>
                    <setting-acc-btn bgColor="md:w-1/4 md:mt-3 bg-gray-200 hover:bg-gray-300">
                        <p class="">Change password</p>
                    </setting-acc-btn>
                </div>
            </div>
            <hr>
            <div class="md:mt-6">
                <p class="text-xl font-semibold">Connected accaunts</p>
                <p class="text-sm md:mt-2">Log in to Todoist with your Google, Facebook, or Apple account</p>
                <p class="md:mt-4">You can log in to Todoist with your Google account
                    <strong>userExample@gmail.com.</strong>
                </p>
            </div>
            <setting-acc-btn class="md:w-1/2 md:mt-6 rounded bg-gray-200 md:pr-24 hover:bg-gray-300">
                <div class="flex item-center justify-between">
                    <svg width="25" height="24" class="text-start" fill="none" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.14 12.205c0-.639-.057-1.252-.164-1.841H12.5v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                            fill="#4285F4"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M18.456 18.82l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H4.457v2.332A8.997 8.997 0 0012.5 21c2.43 0 4.467-.806 5.956-2.18z"
                            fill="#0F9D58"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.464 13.71A5.41 5.41 0 017.182 12c0-.593.102-1.17.282-1.71V7.958H4.457A8.996 8.996 0 003.5 12c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                            fill="#FFCD40"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.5 6.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C16.963 3.891 14.926 3 12.5 3a8.997 8.997 0 00-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71z"
                            fill="#EA4335"></path>
                    </svg>
                    <p>Disconnect Google</p>
                </div>
            </setting-acc-btn>
            <setting-acc-btn class="md:w-1/2 md:mt-4 rounded bg-gray-200 md:pr-24 hover:bg-gray-300">
                <div class="flex item-center justify-between">
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="icon-facebook_svg__a" maskUnits="userSpaceOnUse" x="3" y="3" width="19" height="18">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.501 3H21.5v17.89h-18V3z" fill="#fff">
                            </path>
                        </mask>
                        <g mask="url(#icon-facebook_svg__a)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M21.5 12a9 9 0 10-10.406 8.89v-6.288H8.809V12h2.285v-1.983c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V12h2.496l-.399 2.602h-2.097v6.289A9.002 9.002 0 0021.5 12z"
                                fill="#1877F2"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16.003 14.602l.4-2.602h-2.497v-1.688c0-.712.349-1.406 1.467-1.406h1.135V6.691s-1.03-.175-2.015-.175c-2.056 0-3.4 1.246-3.4 3.501V12H8.81v2.602h2.285v6.289a9.066 9.066 0 002.812 0V14.6h2.097z"
                            fill="#fff"></path>
                    </svg>
                    <p>Login with facebook</p>
                </div>

            </setting-acc-btn>
            <setting-acc-btn class="md:w-1/2 md:mb-4 md:mt-4 rounded bg-gray-200 md:pr-24 hover:bg-gray-300">
                <div class="flex item-center justify-between">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16.017 2c.128 1.123-.344 2.25-1.05 3.061-.704.81-1.86 1.44-2.993 1.357-.154-1.1.418-2.248 1.07-2.966.73-.809 1.957-1.413 2.973-1.452zm3.66 6.542c-.175.101-2.194 1.268-2.17 3.641.028 2.855 2.596 3.836 2.704 3.877l.003.001-.005.015a10.301 10.301 0 01-1.39 2.711c-.842 1.169-1.714 2.332-3.09 2.355-.66.012-1.1-.17-1.56-.357-.48-.198-.98-.403-1.77-.403-.827 0-1.35.211-1.853.415-.436.176-.858.347-1.452.369-1.329.047-2.338-1.263-3.186-2.426-1.733-2.38-3.057-6.724-1.278-9.657a4.98 4.98 0 014.174-2.401c.74-.015 1.456.255 2.082.49.478.18.904.34 1.249.34.309 0 .723-.155 1.207-.336.761-.285 1.693-.633 2.654-.541.658.027 2.504.253 3.69 1.902l-.008.005z"
                            fill="currentColor"></path>
                    </svg>
                    <p>Login with facebook</p>
                </div>

            </setting-acc-btn>
            <hr>
            <div class="md:mt-6 md:pb-5">
                <p class="text-xl font-semibold">Connected accaunts</p>
                <p class="text-sm md:mt-3">This will immediately delete all of your data including tasks, projects,
                    comments, and more. This can’t be undone. <a href="#" class="text-red-500">Learn more.</a></p>
                <setting-acc-btn bgColor="md:w-1/5 md:mt-3 border-red-500">
                    <p class="text-red-500">Delete account</p>
                </setting-acc-btn>
            </div>
        </div>
    </div>
</template>