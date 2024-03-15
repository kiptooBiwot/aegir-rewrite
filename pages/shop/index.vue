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

const esriLinks = [
  {
    title: 'Infrastructure Location Intelligence System',
    description: 'Infrastructure Location Intelligence System for Utility Firms in Electrical, Telcoms, Roads and Highways, and Rail.',
    url: 'https://www.esri.com/en-us/arcgis-marketplace/listing/services/4d7aa074950f4bfb9c437d04badb82f9',
    imageUrl: 'https://ci3.googleusercontent.com/meips/ADKq_NbrP2sb46TD8DiMi2WIHkmxQy1n18UbKQrVhrmRiFGikbcny8qQqtgk_GuCvbz_YCzk_u4a-c3W4I_sqDQwd_q1An4AUKpTV-OPhQmicdCloEaK1qb4InlfjDw=s0-d-e1-ft#https://webapps-cdn.esri.com/CDN/business-partners/00P5x00001UIq4gEAD'
  },
  {
    title: 'Geo-AI Data',
    description: 'Sample data generated using AI from ortho-rectified imagery at 0.5 meter GSR for part of Nairobi. This includes 2D,3D,4D data.',
    url: 'https://www.esri.com/en-us/arcgis-marketplace/listing/products/b9352b3f112f46ffa30f5d02b3992118',
    imageUrl: 'https://ci3.googleusercontent.com/meips/ADKq_NZp1Zjg7dtkxQMGQlHHX6_8tW7qsjp2QGfbr49bhqdxgZbzGHg9MAIYY1ZGnNY0RfGXaROoskOiplgZpQ2UFcMs95NwjxmYEWuogQLd4O6-dtkuJKJexYAhL14nMpBXwXwEwbRbefH2bBNYl9vNYrh1QRxeFkp22M9ZkSpyFvXD9XINNwvKAz4=s0-d-e1-ft#https://www.arcgis.com/sharing/rest/content/listings/06a6d730a0324687919f3c4adf014be4/info/largethumbnail/blob.png'
  },
  {
    title: 'Enterprise System Development and Integration',
    description: 'Aegir Consult offers quality professional services for our clients using the waterfall methodology.',
    url: 'https://www.esri.com/en-us/arcgis-marketplace/listing/services/06a6d730a0324687919f3c4adf014be4',
    imageUrl: 'https://ci3.googleusercontent.com/meips/ADKq_NZp1Zjg7dtkxQMGQlHHX6_8tW7qsjp2QGfbr49bhqdxgZbzGHg9MAIYY1ZGnNY0RfGXaROoskOiplgZpQ2UFcMs95NwjxmYEWuogQLd4O6-dtkuJKJexYAhL14nMpBXwXwEwbRbefH2bBNYl9vNYrh1QRxeFkp22M9ZkSpyFvXD9XINNwvKAz4=s0-d-e1-ft#https://www.arcgis.com/sharing/rest/content/listings/06a6d730a0324687919f3c4adf014be4/info/largethumbnail/blob.png'
  },
]
</script>

<template>
  <div class="min-h-[2300px]">
    <div class=" w-full h-[300px]">
      <img src="@/assets/images/shop_image.jpg" alt="" class=" h-[300px] w-full object-cover top-0 ">
    </div>

    <div class=" max-w-6xl mx-auto py-10 h-auto main-content">
      <div class="space-y-5 px-10 lg:px-0">
        <h2 class="gs_reveal reveal_fromLeft text-5xl text-gray-700 font-display font-bold">Shop with Us.</h2>

        <h3>Our GIS Products</h3>
        <div class="gap-3 my-10 mx-12 md:mx-14 lg:mx-20 ">
          <div class="w-full">
            <ShopGisProductCard :products="esriLinks" />
          </div>
        </div>

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