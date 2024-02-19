<script setup>
import gsap from 'gsap'
import { useServicesStore } from '@/stores/services'

const servicesStore = useServicesStore()

onMounted(() => {
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

  // console.log('FROM STORE:', servicesStore.services)
})

</script>

<template>
  <div class="h-auto bg-slate-50">
    <div class="w-full h-[350px] bg-[#f1f1e6] bg-[url('@/assets/images/services.jpg')] object-bottom py-5 relative">
      <div class="absolute inset-0 bg-[#000] bg-opacity-20 z-0"></div>
    </div>
    <div class="max-w-3xl mx-auto mb-20 pl-7 pr-16 md:px-0 main-content">
      <div class="py-10">
        <h4 class=" small-heading uppercase font-display tracking-widest text-[#df9f1f] font-bold">Our Offerings
        </h4>
        <h1 class="font-display font-bold text-5xl">Services</h1>
      </div>
      <div class=" text-xl text-gray-600">
        <p>
          We are committed to providing quality professional services to our
          customers. Our team has relevant experience to service different
          industries thereby ensuring we deliver a digital first approach to
          business.
        </p>
      </div>
    </div>

    <!-- SERVICES HERE! -->
    <div class="pb-10">
      <div class="w-full h-auto px-0 lg:px-20 -z-50">
        <div v-for="(service, index) in servicesStore.services" :key="index"
          class="services-section inset-0 md:flex-col w-full p-8 border-b last:border-b-0 mb-5">
          <div class="md:flex">
            <div class="large-number text-[60px] md:text-[110px] lg:text-[180px] leading-none font-medium text-slate-300">
              0{{ index + 1 }}.
            </div>
            <div class="w-full h-full justify-center ml-2 space-y-6 items-center">
              <h2 class="large-title font-display text-gray-700 text-3xl lg:text-5xl">
                {{ service.title }}
              </h2>
              <p class="main-text">
                {{ service.description }}
              </p>
              <NuxtLink :to="`services/details/${service.slug}`">
                <button
                  class="py-5 text-sm font-semibold font-display  text-[#df9f1f] uppercase hover:scale-105  hover: transform duration-500 ease-in-out">Read
                  More...</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

