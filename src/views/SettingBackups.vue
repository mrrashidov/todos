<script setup>
import SettingAccBtn from '@/components/UI/SettingAccBtn.vue'
import  SectionTitle from '@/components/UI/SectionTitle.vue'
import {useStore} from '../store'
const store = useStore();
</script>

<template>
<div
    v-show="store.backups"
    class="md:w-[65%] bg-white rounded-tr-lg md:h-[80vh] rounded-br-lg ">
    <section-title>
        Backups
    </section-title>
    <hr>
    <div class="md:pl-5 md:mt-3">
        <p class="text-sm">Automatic backups mean never worrying about losing your data. Upgrade now for peace of mind</p>
        <setting-acc-btn bgColor="bg-red-500 md:w-1/5 text-white md:mt-3 hover:bg-red-400">
            Upgrade now
        </setting-acc-btn>
    </div>
</div>
</template>