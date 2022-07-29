<script setup>
    import {ref} from 'vue'
    import TitleDate from '@/components/AppUpcoming/TitleDate.vue'
    import TitleBtn from '@/components/AppUpcoming/TitleBtn.vue'
    import RunningDate from '@/components/AppUpcoming/RunningDate.vue'

</script>

<template>
    <div class="z-20 md:-mt-80 w-full md:pr-24 md:pl-24">
        <div class="flex items-end justify-between md:-mt-12">
            <title-date/>
            <title-btn/>
        </div>
        <running-date/>
    </div>
</template>