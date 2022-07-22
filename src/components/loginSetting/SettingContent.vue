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


import {useStore} from '../../store'

const store = useStore();
function changeSetting(val1, val2){
    store.account = val1
    store.subs = val2
}
 </script>

<template>
    <div class="md:w-[80%] md:ml-auto md:mt-16 flex">
        <setting-bar>
            <account @click="changeSetting(true, false)"/>
            <general/>
            <Advanced/>
            <subscription @click="changeSetting(false, true)"/>
            <theme/>
            <productivity/>
            <reminders/>
            <notification/>
            <backups/>
            <intagrations/>
        </setting-bar>
        <setting-account v-show="store.account"></setting-account>
        <setting-subscription v-show="store.subs"></setting-subscription>
<!--        <setting-notification v-show="true"></setting-notification>-->
    </div>
</template>