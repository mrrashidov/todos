<script setup>
    import { useStore } from "@/store";
    const store = useStore();
    import {onMounted} from 'vue'
    const month = new Date().getMonth() + 1;
    const weekDay = new Date().getDay();
    let week = '';
    let fullMonth = '';
    switch (weekDay) {
        case 1:
            week = 'Monday';
            break;
        case 2:
            week = 'Tuesday';
            break;
        case 3:
            week = 'Wednesday';
            break;
        case 4:
            week = 'Thursday';
            break;
        case 5:
            week = 'Friday';
            break;
        case 6:
            week = 'Saturday';
            break;
        case 7:
            week = 'Sunday';
            break;
    }
    switch (month) {
        case 1:
            fullMonth = 'January';
            break;
        case 2:
            fullMonth = 'February';
            break;
        case 3:
            fullMonth = 'March';
            break;
        case 4:
            fullMonth = 'April';
            break;
        case 5:
            fullMonth = 'May';
            break;
        case 6:
            fullMonth = 'June';
            break;
        case 7:
            fullMonth = 'July';
            break;
        case 8:
            fullMonth = 'August';
            break;
        case 9:
            fullMonth = 'September';
            break;
        case 10:
            fullMonth = 'October';
            break;
        case 11:
            fullMonth = 'November';
            break;
        case 12:
            fullMonth = 'December'
            break;
    }
    onMounted(()=>{
        console.log(store.day, fullMonth, week)
    })
</script>

<template>
    <div>
     <p class="font-bold text-base text-gray-500 md:pb-1 md:pt-6">{{store.day}} {{fullMonth}} {{week}}</p>
        <hr>
    </div>
</template>