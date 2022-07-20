<template>
    <main>
        <feat-header-sec></feat-header-sec>
        <connect-todo-sec></connect-todo-sec>
        <feat-every-where-sec></feat-every-where-sec>
    </main>
</template>

<script lang="ts">  
import featHeaderSec from '@/components/features/featHeaderSec.vue'
import connectTodoSec from '@/components/features/connectTodoSec.vue'
import featEveryWhereSec from '@/components/features/featEveryWhereSec.vue'
export default {
  components: { featHeaderSec,connectTodoSec,featEveryWhereSec },
    name : "FeatureMain"
}
</script>

<style>

</style>