<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps(['products'])

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'KES' })

const cntx = ref()

onMounted(() => {
  cntx.value = gsap.context((self) => {

    if (props.products) {
      // SKEW ON SCROLL
      const productCard = document.querySelectorAll('.product-card')

      // console.log('PRODUCT CARD: ', productCard)

      productCard.forEach((item, index) => {
        gsap.to(item, {
          scrollTrigger: {
            id: index,
            trigger: item,
            refreshPriority: -1,
            // markers: true
          }
        })

        let proxy = { skew: 0 }
        let skewSetter = gsap.quickSetter(item, "skewY", "deg")
        let clamp = gsap.utils.clamp(-30, 30) // Don't let skew go beyond these degrees

        // console.log('PROXY: ', proxy);

        ScrollTrigger.create({
          trigger: item,
          start: '0 100%',
          end: '100% 0',
          onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -400);
            // console.log('SKEW WITH CLAMP: ', skew);
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
              proxy.skew = skew;
              gsap.to(proxy, {
                skew: 0,
                duration: 0.6,
                ease: "power2",
                overwrite: true,
                onUpdate: () => skewSetter(proxy.skew)
              });
            }
          }
        });

      })

      // console.log(digitalText);

      gsap.set(".product-card", { transformOrigin: "right center", force3D: true })
    }
  })
})


onUnmounted(() => {
  cntx.value.revert()
})

</script>

<template>
  <div>
    <div class="flex flex-wrap -mx-4">
      <div v-for="(product, index) in products" :key="index" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <div
          class="gs_reveal reveal_fromRight product-card block bg-white shadow-md hover:shadow-xl hover:scale-105 transition duration-700 ease-in-out rounded overflow-hidden">
          <NuxtLink :to="`/shop/product/${product._id}`">
            <div class="relative pb-48 overflow-hidden">
              <img class="absolute inset-0 h-full w-full object-cover" :src="product.imgUrl" alt="">
            </div>
            <div class="p-4">
              <span
                class="inline-block px-2 py-1 leading-none bg-[#f8e0b0] text-[#df9f1f] rounded-full font-semibold uppercase tracking-wide text-xs">New</span>
              <h2 class="mt-2 mb-2 font-display font-bold">
                {{ product.title }}
              </h2>
              <p class="text-sm overflow-ellipsis">
                {{ product.description.slice(0, 50) }}...
              </p>
              <div class="mt-3 flex items-center">
                <!-- <span class="text-sm font-semibold">Ksh.</span>&nbsp; -->
                <span class="font-bold font-display text-[#df9f1f] text-base">{{
                  formatter.format(product.price)
                }}</span>&nbsp;
                <!-- <span class="text-sm font-semibold">€</span> -->
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>


<style></style>
