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
    <div class="w-full h-[350px] bg-[#f1f1e6] py-5 relative">
      <img v-if="servicesStore.service[0]" :src="servicesStore.service[0].coverImg" alt=""
        class="absolute inset-0 w-full h-full object-cover">
      <div v-else>Loading....</div>
      <div class="absolute inset-0 bg-[#000] bg-opacity-20 z-0"></div>
    </div>

    <div class="min-h-screen main-content">
      <div v-if="servicesStore.service[0]">
        <div class="bg-slate-100 py-10 md:py-20">
          <div class="max-w-3xl mx-auto pl-7 pr-16 lg:px-0 py-16 space-y-7">
            <h1 class=" font-medium text-5xl text-center font-display">
              {{ servicesStore.service[0].title }}
            </h1>
            <p class="text-center">
              {{ servicesStore.service[0].description }}
            </p>

            <h3 v-if="route.params.slug === 'hardware-and-equipment-supply'"></h3>
            <h3 v-else class="font-medium text-center text-3xl font-display">What is {{ servicesStore.service[0].title }}?
            </h3>
            <p v-if="servicesStore.service[0].whatIs" class="text-center">{{ servicesStore.service[0].whatIs }}</p>
          </div>
        </div>
        <div class="bg-white py-10">
          <div class="max-w-screen mx-auto pl-7 pr-16 lg:px-0 py-16">
            <h3 v-if="route.params.slug === 'hardware-and-equipment-supply'"
              class="font-bold font-display text-[#df9f1f] text-3xl text-center">Our Hardware Selection</h3>
            <h3 v-else class="font-bold font-display text-[#df9f1f] text-3xl text-center">Our Approach</h3>

            <div class="max-w-6xl mx-auto grid grid-cols-12 py-10  lg:gap-10 ">
              <div class="col-span-12 lg:col-span-5">
                <!-- :src="`../../../../assets/images/services/${servicesStore.service[0].image}.jpg`" -->
                <img v-if="servicesStore.service[0].image" :src="servicesStore.service[0].image" alt=""
                  class="rounded-2xl h-full w-full object-cover">
              </div>
              <div class="col-span-12 lg:col-span-7">
                <div v-for="(ourApproach, index) in servicesStore.service[0].approach" :key="index" class="my-8">
                  <div class="space-y-3">
                    <h3 class="font-display font-bold text-xl">
                      <span>{{ index + 1 }}.</span>
                      {{ ourApproach.title }}
                    </h3>
                    <p>{{ ourApproach.details }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-100 py-10 md:py-20">
          <div class="max-w-3xl mx-auto pl-7 pr-16 lg:px-0 py-16 space-y-7">
            <h3 class="font-bold font-display text-[#df9f1f] text-3xl text-center">Why Choose Us?</h3>
            <div v-for="(whyChoose, i) in servicesStore.service[0].whyChooseUs" :key="i">
              <div class="md:flex md:gap-5">
                <div>
                  <h1
                    class="text-[48px] md:text-[80px] lg:text-[108px] font-display text-medium text-gray-400 hidden md:block">
                    0{{ i + 1 }}.
                  </h1>
                </div>
                <div class="space-y-7">
                  <div class="flex items-baseline">
                    <h1 class="text-[48px] font-display text-medium text-gray-400 md:hidden">
                      0{{ i + 1 }}.
                    </h1>
                    <h3 class="font-display font-bold text-xl">
                      {{ whyChoose.title }}
                    </h3>
                  </div>
                  <p>{{ whyChoose.description }}</p>
                </div>
              </div>
            </div>

            <div class="py-10">
              <p class="text-xl text-justify font-medium">
                {{ servicesStore.service[0].extra }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h3 class="text-2xl font-semibold font-display">Loading...</h3>
      </div>
    </div>
  </div>
</template>


<style scoped></style>