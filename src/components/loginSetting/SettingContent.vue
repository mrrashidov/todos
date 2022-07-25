<script setup>
import {ref} from "vue"
import SettingBar from '@/components/loginSetting/SettingBar.vue'
import Account from '@/components/loginSetting//BarBtns/Account.vue'
import General from '@/components/loginSetting//BarBtns/General.vue'
import Advanced from '@/components/loginSetting//BarBtns/Advanced.vue'
import Subscription from '@/components/loginSetting//BarBtns/Subscription.vue'
import Productivity from '@/components/loginSetting//BarBtns/Productivity.vue'
import Theme from '@/components/loginSetting//BarBtns/Theme.vue'
import Reminders from '@/components/loginSetting//BarBtns/Reminders.vue'
import Notification from '@/components/loginSetting//BarBtns/Notification.vue'
import Backups from '@/components/loginSetting//BarBtns/Backups.vue'
import Intagrations from '@/components/loginSetting//BarBtns/Intagrations.vue'
import SettingAccount from '@/views/SettingAccount.vue'
import SettingSubscription from '@/views/SettingSubscription.vue'
import SettingNotification from '@/views/SettingNotification.vue'
import  SettingBackups from '@/views/SettingBackups.vue'
import  SettingIntagration from '@/views/SettingIntagration.vue'


import {useStore} from '../../store'
const store = useStore();
function changeSetting(val1, val2, val3, val4, val5){
    store.account = val1;
    store.subs = val2;
    store.notif = val3;
    store.backups = val4
    store.intag = val5
}
 </script>

<template>
    <div class="md:w-[80%] md:ml-auto md:mt-16 flex">
        <setting-bar>
            <account @click="changeSetting(true, false, false, false, false)"/>
            <general/>
            <Advanced/>
            <subscription @click="changeSetting(false, true, false, false, false)"/>
            <theme/>
            <productivity/>
            <reminders/>
            <notification @click="changeSetting(false, false, true, false, false)"/>
            <backups @click="changeSetting(false, false, false, true, false)"/>
            <intagrations @click="changeSetting(false, false, false, false, true)"/>
        </setting-bar>
        <setting-account/>
        <setting-subscription/>
        <setting-notification/>
        <setting-backups/>
        <setting-intagration/>
    </div>
</template>