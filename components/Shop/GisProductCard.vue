<script setup>
const props = defineProps(['products'])

</script>

<template>
  <div class="flex flex-wrap -mx-4">
    <div v-for="(product, index) in products" :key="index" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div
        class="gs_reveal reveal_fromRight product-card block bg-white shadow-md hover:shadow-xl hover:scale-105 transition duration-700 ease-in-out rounded overflow-hidden cursor-pointer">
        <NuxtLink :to="product.url" target="_blank">
          <div class="relative pb-48 overflow-hidden">
            <img class="absolute inset-0 h-full w-full object-cover" :src="product.imageUrl" alt="">
          </div>

          <div class="p-4">
            <span
              class="inline-block px-2 py-1 leading-none bg-[#f8e0b0] text-[#df9f1f] rounded-full font-semibold uppercase tracking-wide text-xs">New</span>
            <h2 class="mt-2 mb-2 font-display font-bold">
              {{ product.title }}
            </h2>
            <p class="text-sm overflow-ellipsis">
              {{ product.description.slice(0, 80) }}...
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
