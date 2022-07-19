<script setup>
import {ref} from "vue"
import SettingBar from '@/components/loginSetting/SettingBar.vue'
import SettingAccount from '@/views/SettingAccount.vue'
import SettingSubscription from '@/views/SettingSubscription.vue'
 </script>

<template>
    <div class="md:w-[80%] md:ml-auto md:mt-16 flex">
        <setting-bar/>
            <setting-subscription></setting-subscription>
        
    </div>
</template>