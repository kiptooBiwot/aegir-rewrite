<script setup>
import { useShopStore } from "@/stores/shop.js";
const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'KES' })

const shopStore = useShopStore()
const route = useRoute()

definePageMeta({

})

const product = ref(null)
const tab = ref(1)
const quantity = ref(1)

onMounted(() => {
  const singleProduct = shopStore.products.filter((product) => product._id === route.params.id)

  product.value = singleProduct[0]
})

const currentTab = (index) => {
  tab.value = index
}

const addToCart = () => {
  shopStore.addProductToCart({ product: product.value, quantity })
}

useSeoMeta({
  title: 'Product',
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
  <div class="min-h-[1000px]">
    <div class="bg-[#0C3C60] h-[150px]"></div>
    <div class="w-full max-w-5xl mx-auto text-gray-500">
      <div v-if="product" class="md:flex gap-6 mx-8 md:mx-20 mt-10">
        <div class="w-full md:w-1/2">
          <img :src="product.imgUrl" class="inset-0 w-full h-full" alt="">
        </div>
        <div class="w-full md:w-1/2 space-y-2 md:space-y-5 px-5 mt-6 md:mt-0 md:px-16">
          <h2 class="text-4xl font-display font-bold">
            {{ product.title }}
          </h2>
          <div class="text-[#df9f1f] tracking-wider text-2xl font-light">
            <!-- <span class="">KSh.</span> -->
            <span class="">{{ formatter.format(product.price) }}</span>
          </div>
          <div class="text-sm font-medium leading-loose">
            <p>
              {{ product.description }}
            </p>
          </div>
          <div class="flex">
            <div>
              <input v-model="quantity" type="number"
                class="border border-gray-800 text-xs h-auto w-20 bg-white relative py-4 pl-4">
            </div>
          </div>
          <div class="flex space-x-4">
            <button
              class="border border-gray-800 text-xs uppercase h-auto bg-white relative py-4 px-6 hover:text-[#df9f1f] hover:border-[#df9f1f] hover:shadow-lg transition duration-700 ease-in-out"
              @click.prevent="addToCart">
              Add to Cart
            </button>
            <NuxtLink to="/shop/cart">
              <button
                class="border border-[#dda536] text-xs text-gray-100 uppercase h-auto bg-[#df9f1f] relative py-4 px-8 hover:border-[#dda536] hover:bg-[#dda536] hover:text-gray-50 hover:shadow-lg transition duration-700 ease-in-out">
                Buy Now
              </button>
            </NuxtLink>
          </div>
          <div>
            <div class="flex items-center">
              <span class="uppercase font-bold tracking-wide text-xs">Categories</span>: &nbsp;
              <span v-for="(category, i) in product.categories" :key="i" class="text-xs">{{ category }}</span>
            </div>
            <div class="flex items-center">
              <span class="uppercase font-bold tracking-wide text-xs">SKU</span>:
              &nbsp;
              <span class="text-xs">{{ product._id }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 mb-16 mx-5 md:mx-20">
        <div class="mt-4 text-gray-600 text-sm">
          <div class="flex md:ml-10 w-full space-x-6 md:space-x-16">
            <button class="py-2 px-1 text-lg md:text-xl font-semibold" :class="{
              'text-gray-500 bg-white': tab !== 1,
              'text-[#df9f1f] border-[#df9f1f] border-b-2': tab === 1,
            }" @click.prevent="currentTab(1)">
              Description
            </button>
            <button class="py-2 px-1 text-lg md:text-xl font-semibold" :class="{
              'text-gray-500 bg-white': tab !== 2,
              'text-[#df9f1f] border-[#df9f1f] border-b-2': tab === 2,
            }" @click.prevent="currentTab(2)">
              Additional Information
            </button>
            <button class="py-2 px-1 text-lg md:text-xl font-semibold" :class="{
              'text-gray-500 bg-white': tab !== 3,
              'text-[#df9f1f] border-[#df9f1f] border-b-2': tab === 3,
            }" @click.prevent="currentTab(3)">
              Reviews
            </button>
          </div>
          <hr class="text-gray-200">
        </div>
        <div>
          <div v-if="tab === 1" class="text-gray-500 py-5">
            <span class="">The product is fully described above </span>
          </div>
          <div v-if="tab === 2" class="text-gray-500 py-5">
            <span class="">No additional information about the product</span>
          </div>
          <div v-if="tab === 3" class="text-gray-500 py-5">
            <span class="">There are no customer reviews yet.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>