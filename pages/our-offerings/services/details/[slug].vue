<script setup>
import { useRoute } from "nuxt/app"
import gsap from "gsap"
import { useServicesStore } from '@/stores/services'

const servicesStore = useServicesStore()
const route = useRoute()
// const { service } = storeToRefs(servicesStore)

// let services = ref(null)

onMounted(async () => {
  await servicesStore.getOneService(route.params.slug)

  // Hide Logo and Text on scroll
  const tl = gsap.timeline()

  tl.to('.text-logo', {
    opacity: 0,
    // y: '-100%',
    // duration: 1,
    // scrub: 1,
    scrollTrigger: {
      trigger: '.main-content',
      start: 'top 30%',
      end: 'top 0%',
      // duration: 2,
      ease: 'power2.inOut',
      scrub: 1,
      // markers: true
    }

  })
    .to('.image-logo', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.main-content',
        start: 'top 30%',
        end: 'top 0%',
        // duration: 2,
        ease: 'power2.inOut',
        scrub: 1,
      }
    })

})

onBeforeUnmount(() => {
  servicesStore.service = []
})



</script>

<template>
  <div>
    <div class="w-full h-[350px] bg-[#f1f1e6] bg-[url('@/assets/images/services_new.jpg')] object-center py-5 relative">
      <div class="absolute inset-0 bg-[#000] bg-opacity-20 z-0"></div>
    </div>

    <div class="min-h-screen main-content">
      <div class="bg-slate-100 min-h-screen">
        <div class="max-w-3xl mx-auto pl-7 pr-16 lg:px-0 py-16">
          <!-- SERVICES from storeToRefs: {{ servicesStore.service }} -->
          <div v-if="servicesStore.service[0]" class="space-y-5">
            <h1 class=" font-medium text-5xl font-display">
              {{ servicesStore.service[0].title }}
            </h1>
            <p>
              {{ servicesStore.service[0].description }}
            </p>

            <h3 v-if="route.params.slug === 'hardware-and-equipment-supply'"></h3>
            <h3 v-else class="font-medium text-3xl font-display">What is {{ servicesStore.service[0].title }}?</h3>
            <p v-if="servicesStore.service[0].whatIs">{{ servicesStore.service[0].whatIs }}</p>

            <h3 v-if="route.params.slug === 'hardware-and-equipment-supply'"
              class="font-bold font-display text-[#df9f1f] text-3xl text-center">Our Hardware Selection</h3>
            <h3 v-else class="font-bold font-display text-[#df9f1f] text-3xl text-center">Our Approach</h3>
            <div v-for="(ourApproach, index) in servicesStore.service[0].approach" :key="index">
              <div class="space-y-5">
                <h3 class="font-display text-center font-bold text-xl">
                  <span>{{ index + 1 }}.</span> {{ ourApproach.title }}
                </h3>
                <p>{{ ourApproach.details }}</p>
              </div>
            </div>

            <h3 class="font-bold font-display text-[#df9f1f] text-3xl text-center">Why Choose Us?</h3>
            <div v-for="(whyChoose, i) in servicesStore.service[0].whyChooseUs" :key="i">
              <div class="space-y-5">
                <h3 class="font-display text-center font-bold text-xl">
                  <span>{{ i + 1 }}.</span> {{ whyChoose.title }}
                </h3>
                <p>{{ whyChoose.description }}</p>
              </div>
            </div>

            <div class="py-10">
              <p class="text-lg font-medium">
                {{ servicesStore.service[0].extra }}
              </p>
            </div>
          </div>
          <div v-else>
            <h3 class="text-2xl font-semibold font-display">Loading...</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>