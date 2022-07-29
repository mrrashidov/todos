<script setup>
    import {onMounted} from 'vue'
    import WeekDay from '@/components/AppUpcoming/WeekDay.vue'
    import {useStore} from '@/store'
    const week = new Date().getDay();
    const store = useStore();
    let weekArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    weekArr = weekArr.slice((week -1)).concat(weekArr.slice(0, (week-1)));
    let day = store.day;
    const month = new Date().getMonth() + 1;
    let juftMonth = ['February', 'April', 'June', 'September', 'November'];
    let toqMonth = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
    let haft = '';
    let oy = '';
    switch (week) {
        case 1:
            haft = 'Mon';
            break;
        case 2:
            haft = 'Tue';
            break;
        case 3:
            haft = 'Wen';
            break;
        case 4:
            haft = 'Thu';
            break;
        case 5:
            haft = 'Fri';
            break;
        case 6:
            haft = 'Sat';
            break;
        case 7:
            haft = 'Sun';
            break;
    }
    switch (month) {
        case 1:
            oy = 'January'
            break;
        case 2:
            oy = 'February'
            break;
        case 3:
            oy = 'March'
            break;
        case 4:
            oy = 'April'
            break;
        case 5:
            oy = 'May'
            break;
        case 6:
            oy = 'June'
            break;
        case 7:
            oy = 'July'
            break;
        case 8:
            oy = 'August'
            break;
        case 9:
            oy = 'September'
            break;
        case 10:
            oy = 'October'
            break;
        case 11:
            oy = 'November'
            break;
        case 12:
            oy = 'December'
            break;
    }

</script>

<template>
    <div class="border-b border-gray-200 md:pb-0.5 flex ">
        <week-day v-for="(week,index) in weekArr" v-if="juftMonth.includes(oy)">
            <template #weekName>{{week }}</template>
            <template #dayNum>{{
                store.day + index <= 30 ? store.day + index : ((store.day + index)-30*(Math.floor((store.day + index)/30)))
                }}</template>
        </week-day>
        <week-day v-for="(week,index) in weekArr" v-if="toqMonth.includes(oy)">
            <template #weekName>{{week }}</template>
            <template #dayNum>{{
                store.day + index <= 31 ? store.day + index : ((store.day + index)-31*(Math.floor((store.day + index)/31)))
                }}</template>
        </week-day>
    </div>
</template>