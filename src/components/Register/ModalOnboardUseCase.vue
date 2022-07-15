<template>
  <div>
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-2/4 lg:w-1/4 md:2/3 y-6">
        <!--content-->

        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div class="flex p-6 justify-between">
            <p class="font-bold">Time zone setting</p>
            <img
              @click="toggleModal()"
              src="images/close.png"
              alt="image"
              class="w-6 cursor-pointer"
            />
          </div>
          <div class="text-center p-6 flex-auto cursor-pointer">
            <p class="font-semibold">Changing time zone to Europa/Moskow?</p>
          </div>
          <!--footer-->
          <div class="flex flex-wrap items-center justify-center p-6 rounded-b">
            <button
              class="bg-red w-48 rounded-md text-white h-9"
              type="button"
              v-on:click="toggleModal()"
            >
              Yes, update my setting
            </button>
            <p class="text-red mt-3 cursor-pointer">
              Don't update setting / View my settings
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  name: "large-modal",
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>
