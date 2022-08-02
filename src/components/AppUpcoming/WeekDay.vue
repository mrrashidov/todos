<script setup>
</script>
 <template>
  <div class="text-center md:w-[10%] hover:bg-gray-200 md:pt-1 md:pb-1 md:ml-6">
    <p class="text-xs text-gray-500">
      <slot name="weekName"></slot>
    </p>
    <p class="text-lg">
      <slot name="dayNum"></slot>
    </p>
  </div>
</template>