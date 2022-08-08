<script setup>
    import {useStore} from "../../store"
    const store = useStore()
    const    props = defineProps(["array"])
    console.log();
    let arr = store.$state.comments
</script>

<template>
  <div>
    <div v-for="name in array" :key="name">
         <div class="flex mb-3">
      <div class=" mr-3">
        <img src="public/images/video-preview-features.webp" class="  rounded-full h-12 w-12" alt="" />
      </div>
      <div class="mr-3">
        <div>example@gmail.com 
        </div>
        <div>commentValue</div>
      </div>
      <div>{{name.lastModifiedDate.toLocaleString()}}</div>
    </div>
    <div class="flex p-2 rounded-md border-2 border-gray-300 w-3/6">
      <div class="mr-3">
        <svg
          data-svgs-path="ft/ft_generic.svg"
          class="file_icon"
          width="24"
          height="29"
          viewBox="0 0 24 29"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M0 2C0 .9.9 0 2 0h14l8 8v19a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"
              fill="#C0C6CC"
            ></path>
            <path
              d="M1 2c0-.6.5-1 1-1h13.6L23 8.4V27c0 .6-.4 1-1 1H2a1 1 0 0 1-1-1V2z"
              fill="#FFF"
            ></path>
            <path
              d="M16 0v8h8v1h-8a1 1 0 0 1-1-1V0h1zM7 21v2h10v-2h1v2c0 .6-.5 1-1 1H7a1 1 0 0 1-1-1v-2h1z"
              fill="#C0C6CC"
            ></path>
            <path
              d="M11 17v-4.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5V17h2l-3 4-3-4h2z"
              fill="#8397A9"
            ></path>
          </g>
        </svg>
      </div>
      <div>
        <a href="name.fileUrl" class="no-underline hover:opacity-80">
            {{name.name}}
        </a>
      </div>
    </div>
    </div>
  </div>
</template>