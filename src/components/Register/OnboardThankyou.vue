<template>
  <div class="w-2/4 mt-24 mx-auto">
    <div class="w-full flex flex-wrap items-center justify-center text-center">
      <h1 class="font-primary text-xl md:text-2xl font-semibold">
        Thank for your answer
      </h1>
      <img
        src="images/congratulasion.png"
        alt="congratulasion"
        class="w-9 ml-2"
      />
    </div>
    <div
      class="text-lg md:text-xl font-primary flex justify-center flex-wrap items-center text-slate-500 mt-3"
    >
      <p>
        Congratulasions on taking the first step towards feeling more organized!
      </p>
      <p>Your personalized Todoist is now ready to go</p>
    </div>
    <form class="w-auto h-auto mx-auto mt-5 rounded-xl p-5">
      <div
        class="w-56 h-80 mx-auto border-2 rounded-xl py-5 pb-10 flex flex-wrap justify-center"
      >
        <h1 class="text-xl font-primary font-bold text-center">Your profile</h1>
        <div
          class="w-32 h-32 border rounded-full overflow-hidden flex justify-center bg-offwhite mt-5"
        >
          <img
            :src="previewImage"
            class="uploading-image object-cover w-32 h-32"
          />
        </div>
        <label
          for="file_choose"
          class="w-28 h-8 border rounded-md font-semibold mt-5 bg-offwhite justify-center flex items-center"
          >Upload photo
          <input
            id="file_choose"
            type="file"
            class="hidden"
            accept="image/*"
            @change="uploadImage"
          />
        </label>
        <input
          type="text"
          class="w-36 h-9 border-2 rounded-md outline-none text-center text-lg mt-3"
          placeholder="Add your name "
          v-model="name"
        />
      </div>

      <button
        type="submit"
        :disabled="name == ''"
        class="w-32 h-8 font-primary disabled:opacity-30 text-sm bg-redish font-semibold text-white flex items-center justify-center rounded-lg mx-auto mt-5"
      >
        Lounch Todoist
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "imageUpload",

  data() {
    return {
      previewImage: null,
      name: "",
    };
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
    },
  },
};
</script>
