<script setup>
import {ref} from "vue"
import SettingBar from '@/components/loginSetting/SettingBar.vue'
import SettingAccount from '@/views/SettingAccount.vue'
 </script>

<template>
    <div class="md:w-[80%] md:ml-auto md:mt-16 flex">
        <setting-bar/>
        <setting-account/>
    </div>
</template>