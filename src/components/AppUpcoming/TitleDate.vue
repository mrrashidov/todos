<script setup>
    import {useStore} from '@/store'
    const store = useStore();
    import { onMounted, ref,} from 'vue';
    const date = ref(null);
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    let oy = ''

    const onFocus = () => {
        store.todayDataPic = !store.todayDataPic;
        if(store.todayDataPic){
            date.value.showPicker()
        }
        else if(store.todayDataPic){
            date.value.showPicker('hide')
        }
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
    <div>
        <input type="date" class="w-0" id="date" ref="date">
            <button  @click="onFocus"  class="" >
                <p class="flex items-center text-xl">
                    {{oy}} {{year}}
                    <span class="text-xl">
                    <svg class="md:mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 10l-4 4-4-4"></path></g></svg>
                </span></p>
            </button>
    </div>
</template>