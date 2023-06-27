<script setup>
import { onMounted } from 'vue'
import { useShopStore } from '@/stores/shop'

definePageMeta({

})

const shopStore = useShopStore()

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'KSH' })

const cart = ref()
const cartTotalPrice = ref()
const quantity = ref(1)

onMounted(() => {
  cart.value = shopStore.cart

  cartTotalPrice.value = shopStore.cartTotalPrice
})

useSeoMeta({
  title: 'Cart | Aegir Consult',
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
  <div class="w-full max-w-7xl mx-auto mt-[150px] h-full my-10 text-gray-500">
    <!-- Product {{ cart }} -->
    <div class="lg:flex shadow-md mx-2 md:mx-20 md:my-10">
      <div class="w-full lg:w-3/4 border bg-white px-4 md:px-7 lg:px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">
            Shopping Cart
          </h1>
          <h2 v-if="cart" class="font-semibold text-2xl">
            {{ cart.length }} Item(s)
          </h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
            Product Details
          </h3>
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
            Quantity
          </h3>
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center hidden md:block">
            Price
          </h3>
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
            Total
          </h3>
        </div>
        <div v-for="(item, index) in cart" :key="index" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5">
            <!-- product -->
            <div class="w-20">
              <img class="h-24" :src="item.product.imgUrl" alt="">
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{{ item.product.title }}</span>
              <span class="text-red-500 text-xs">SKU: {{ item.product._id }}</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path
                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>

            <input class="mx-2 border text-center w-8" type="text" :value="item.product.quantity">

            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm hidden md:block">{{ formatter.format(item.product.price)
          }}</span>
          <span class="text-center w-1/5 font-semibold text-sm">{{
            formatter.format(item.product.price)
          }}</span>
        </div>

        <NuxtLink to="/shop" href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
            <path
              d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </NuxtLink>
      </div>

      <div id="summary" class="w-full lg:w-1/4 border px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">
          Order Summary
        </h1>
        <div class="flex justify-between mt-10 mb-5">
          <span v-if="cart" class="font-semibold text-sm uppercase">Items {{ cart.length }}</span>
          <span class="font-semibold text-sm">{{
            formatter.format(cartTotalPrice)
          }}</span>
        </div>
        <!-- <div>
                                                                                          <label
                                                                                            class="font-medium inline-block mb-3 text-sm uppercase"
                                                                                            >Shipping</label>
                                                                                              <select class="block p-2 text-gray-600 w-full text-sm">
                                                                                                <option>Standard shipping - $10.00</option>
                                                                                              </select>
                                                                                            </div> -->
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input id="promo" type="text" placeholder="Enter your code" class="p-2 border text-sm w-full">
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
          Apply
        </button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{{ formatter.format(cartTotalPrice) }}</span>
          </div>
          <button disabled
            class="bg-[#43b0f1] font-semibold disabled:bg-gray-400 hover:bg-[#67bbeb] py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>