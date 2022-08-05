<script setup>

</script>

<template>
    <div class="flex md:mt-5 items-center add-task cursor-pointer">
        <svg class="text-red-500 svg" width="13" height="13">
            <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
                  fill="currentColor" fill-rule="evenodd"></path>
        </svg>
        <p class="text-sm text md:ml-1 text-gray-500">Add task</p>
    </div>
</template>

<style scoped>
    .add-task:hover .svg {
        color: #fff;
        background: red;
        border-radius: 50%;
    }

    .add-task:hover .text {
        color: red;
    }
</style>