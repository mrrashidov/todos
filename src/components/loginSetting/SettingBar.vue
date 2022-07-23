<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="md:w-1/5 md:h-[80vh] md:pt-5 rounded-tl-lg rounded-bl-lg md:pr-1 bg-gray-100 md:pl-8">
        <p class="font-bold text-2xl">Settings</p>
        <div>
            <slot></slot>
        </div>
    </div>
</template>