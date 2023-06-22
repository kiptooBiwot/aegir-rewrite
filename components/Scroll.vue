<script setup>

</script>

<template>
  <div class="right-3 bottom-16 items-center h-auto fixed z-10 flex flex-col space-y-[100px]  text-gray-300 ">
    <div class="vertical-text transform text-xs ">
      <slot></slot>
    </div>
    <div class="flex flex-col gap-20 justify-center ">
      <div class="animate-bounce transform duration-300 ease-in-out">
        <hr class=" border-gray-300 border-[1px] px-10 rotate-90">
      </div>
      <p class="text-[13px] tracking-widest uppercase  rotate-90 animate-pulse">SCROLL</p>
    </div>
  </div>
</template>


<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
}
</style>