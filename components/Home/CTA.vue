<script setup>

</script>

<template>
  <div class=" mb-10 bg-[url('@/assets/images/aeigr_cta.jpg')] shadow-md border">
    <div
      class="lg:flex lg:items-center max-w-6xl lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h2 class="text-3xl font-extrabold font-display text-gray-700 sm:text-4xl space-y-3">
        <span class="gs_reveal reveal_fromLeft block max-w-3xl">
          Are you interested in any of our services?
        </span>
        <span class="gs_reveal reveal_fromLeft block text-xl text-[#df9f1f]">
          We'd love to hear from you.
        </span>
      </h2>
      <div class="gs_reveal reveal_fromRight lg:mt-0 lg:flex-shrink-0">
        <div class=" inline-flex rounded-md shadow">
          <NuxtLink to="/contact">
            <button type="button"
              class="py-4 px-6 uppercase  bg-[#df9f1f] hover:bg-[#c48e22]  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
              Talk to Us
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>