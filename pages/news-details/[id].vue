<script setup>
import { useNewsStore } from '@/stores/news.js'

const newsStore = useNewsStore()

const route = useRoute()

onMounted(() => {
  console.log(route.params.id);
  newsStore.getActivityDetails(route.params.id)

})

onUnmounted(() => {
  newsStore.activityDetails = null
})

</script>

<template>
  <div class="bg-slate-100">
    <div class="h-[300px] w-full relative">
      <img src="@/assets/images/news/news_2.jpg" alt="" class=" object-cover  h-[300px] w-full">
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
    <div class="min-h-screen max-w-3xl py-10 mx-auto pl-7 pr-16 xl:px-0 main-content">
      <div v-if="newsStore.activityDetails" class="mb-10 md:mb-0 space-y-5">
        <h2 class="gs_reveal font-bold font-display text-gray-800 text-3xl">

          {{ newsStore.activityDetails.title }}
        </h2>

        <img :src="newsStore.activityDetails.image" alt="" class="w-auto mx-auto object-cover rounded-xl">
        <div v-html="newsStore.activityDetails.description" class="text-details"></div>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-details h3 {
  color: red;
  /* color: rgb(56, 55, 55); */
  font-weight: bold;
  font-size: 18px;
}
</style>
