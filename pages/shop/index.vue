<script setup>
import gsap from 'gsap'
import { useShopStore } from "@/stores/shop.js"
import { onMounted } from "vue";


const shopStore = useShopStore()

onMounted(() => {
  shopStore.getProducts()

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


useSeoMeta({
  title: 'Shop | Aegir Consult',
  description: 'We are a technology firm that deals in geo-informatics, information systems, system integration and geospatial technologies to both improve business efficacy and management operations',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <div class="min-h-[2300px]">
    <div class=" w-full h-[300px]">
      <img src="@/assets/images/cart.jpg" alt="" class=" h-[300px] w-full object-cover top-0 ">
    </div>

    <div class=" max-w-6xl mx-auto py-10 h-auto main-content">
      <div class="space-y-5">
        <h2 class="gs_reveal reveal_fromLeft text-5xl text-gray-700 font-display font-bold">Shop with Us.</h2>
        <p class="gs_reveal">Order online for a printed copy for your home, office or even home office.</p>
      </div>
      <div v-if="!shopStore.loading" class="gap-3 my-10 mx-12 md:mx-14 lg:mx-20 ">
        <div class="w-full">
          <ShopProductCard :products="shopStore.products" />
        </div>
        <div class="w-full">
          <ShopRequestQuote />
        </div>
      </div>
      <div v-else class="flex gap-3 mx-12 md:mx-14 lg:mx-20">
        <div class="w-full mt-[100px] flex items-center h-full justify-center">
          <Spinner />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>