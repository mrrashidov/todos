<script setup>
    import {ref} from 'vue'
    import TitleDate from '@/components/AppUpcoming/TitleDate.vue'
    import TitleBtn from '@/components/AppUpcoming/TitleBtn.vue'
    import RunningDate from '@/components/AppUpcoming/RunningDate.vue'
    import UpcomingContent from '@/components/AppUpcoming/UpcomingContent.vue'

</script>

<template>
    <div class="z-20 w-full md:pr-24 relative md:pl-24">
        <div class="flex items-end justify-between md:-mt-12">
            <title-date/>
            <title-btn/>
        </div>
        <running-date/>
        <div>
            <upcoming-content/>
        </div>
    </div>
</template>