<script setup>
</script>


<template>
    <div class="md:mt-2">
        <hr>
        <div class="md:mt-2 flex items-center justify-between">
            <p>
                <slot></slot>
            </p>
            <div class="md:pr-10">
                <input class="md:mr-28" type="checkbox" checked>
                <input type="checkbox" checked>
            </div>
        </div>
    </div>
</template>