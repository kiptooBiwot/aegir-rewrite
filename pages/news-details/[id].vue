<script setup>
import { useNewsStore } from '@/stores/news.js'

const newsStore = useNewsStore()

const route = useRoute()

onMounted(() => {
  console.log(route.params.id)
  newsStore.getActivityDetails(route.params.id)
})

onUnmounted(() => {
  newsStore.activityDetails = null
})
</script>

<template>
  <div class="bg-slate-100">
    <div class="h-[300px] w-full relative">
      <img
        src="@/assets/images/news/news_2.jpg"
        alt=""
        class="object-cover h-[300px] w-full"
      />
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
    <div
      class="min-h-screen max-w-3xl py-10 mx-auto pl-7 pr-16 xl:px-0 main-content"
    >
      <div v-if="newsStore.activityDetails" class="mb-10 md:mb-0 space-y-5">
        <h2 class="gs_reveal font-bold font-display text-gray-800 text-3xl">
          {{ newsStore.activityDetails.title }}
        </h2>

        <!-- <div v-if="newsStore.activityDetails.fileType === 'pdf'">
          <div
            v-html="newsStore.activityDetails.description"
            class="text-details"
          ></div>
          <div class="py-10">
            <img
              :src="newsStore.activityDetails.image"
              alt=""
              class="w-[200px] mx-auto object-contain rounded-xl"
            />
          </div>
          <div class="flex items-center gap-5 mt-5">
            <img
              :src="newsStore.activityDetails.image"
              class="w-10 object-contain"
              alt=""
            />
            <a
              href="https://shorturl.at/bdlu3"
              class="text-lg underline hover:shadow-md"
              >Download the Press Release</a
            >
          </div>
        </div> -->
        <div v-if="newsStore.activityDetails.fileType === 'pdf'">
          <div
            v-html="newsStore.activityDetails.description"
            class="text-details"
          ></div>

          <!-- Inline PDF preview -->
          <div class="my-10">
            <iframe
              :src="newsStore.activityDetails.fileUrl"
              class="w-full h-[600px] border rounded-xl"
            ></iframe>
          </div>

          <!-- Download option -->
          <div class="flex items-center gap-5 mt-5">
            <img
              :src="newsStore.activityDetails.image"
              class="w-10 object-contain"
              alt=""
            />
            <a
              :href="newsStore.activityDetails.fileUrl"
              download
              class="text-lg underline hover:shadow-md"
            >
              Download the Press Release
            </a>
          </div>
        </div>

        <div v-else>
          <div
            v-html="newsStore.activityDetails.description"
            class="text-details"
          ></div>
          <div class="py-10">
            <img
              :src="newsStore.activityDetails.image"
              alt=""
              class="w-auto mx-auto object-cover rounded-xl"
            />
          </div>
        </div>
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
