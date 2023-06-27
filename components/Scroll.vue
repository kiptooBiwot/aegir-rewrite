<script setup>

const scrollText = ref(null)

onMounted(() => {
  // Get the element you want to hide
  const elementToHide = document.getElementById('to-hide-element');

  // Add a scroll event listener to the window
  window.addEventListener('scroll', function () {
    // Calculate the scroll position relative to the page height
    const scrollPosition = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Check if the scroll position is over 80%
    if (scrollPosition > 0.8) {
      // Hide the element
      elementToHide.style.display = 'none';
    } else {
      // Show the element
      elementToHide.style.display = '';
    }
  })
})



</script>

<template>
  <div id="to-hide-element" ref="scrollText"
    class="to-hide-element right-0 p-0 md:right-3 bottom-16 items-center h-auto fixed z-10 flex flex-col space-y-[100px]  text-gray-300 ">
    <div class="vertical-text transform text-xs">
      <!-- <slot></slot> -->
      Welcome to Aeigr Consult
    </div>
    <div class="flex flex-col gap-20 justify-center ">
      <div class="animate-bounce transform duration-300 ease-in-out">
        <hr class=" border-gray-300 border-[1px] px-0 md:px-10 rotate-90">
      </div>
      <p class="text-[10px] md:text-[13px] tracking-widest uppercase  rotate-90 animate-pulse">SCROLL</p>
    </div>
  </div>
</template>


<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
}
</style>