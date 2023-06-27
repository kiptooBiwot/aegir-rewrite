<script setup>
import { XCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid';
import { gsap } from 'gsap';

// const props = defineProps(['closeMenu'])
const emit = defineEmits(['closeMenu'])


let context = ref()

const subMenuIsVisible = ref(false)
const services = ref([
  {
    title: 'Enterprise System Development',
    linkUrl: '/our-offerings/services'
  },
  { title: 'Location Intelligence', linkUrl: '/our-offerings/services' },
  { title: 'Geo-Data Services', linkUrl: '/our-offerings/services' },
  { title: 'Equipment Supply', linkUrl: '/our-offerings/services' },
  { title: 'Systems Integration', linkUrl: '/our-offerings/services' },
  { title: 'System Audit Services', linkUrl: '/our-offerings/services' }
])
const menuItems = ref([
  { title: 'Home', linkUrl: '/' },
  { title: 'About', linkUrl: '/about-us' },
  {
    title: 'Our Offerings',
    linkUrl: '',
    children: [
      { title: 'Services', linkUrl: '/our-offerings/services' },
      // { title: 'Solutions', linkUrl: '/our-offerings/solutions' },
      { title: 'Products', linkUrl: '/our-offerings/products' }
    ]
  },
  { title: 'Portfolio', linkUrl: '/portfolio' },
  { title: 'News', linkUrl: '/news' },
  { title: 'Shop', linkUrl: '/shop' },
  { title: 'Contact', linkUrl: '/contact' }
  // { title: '' }
])


onMounted(() => {
  context.value = gsap.context((self) => {
    const tl = gsap.timeline()

    // tl.to('#full_page_menu', {
    //   duration: 0,
    //   display: 'block',
    //   ease: 'Expo.easeInOut'
    // })

    tl.from('#menu_bg', {
      duration: 1.5,
      x: '100%',
      stagger: 0.1,
      ease: 'Expo.easeInOut',
      autoAlpha: 0
    })

    // tl.from('#menu_items', {
    //   duration: 1.5,
    //   y: '100%',
    //   stagger: 0.2,
    //   ease: 'Expo.easeInOut'
    // }, '-=0.5')

    // tl.from('#services', {
    //   duration: 1.5,
    //   y: '100%',
    //   stagger: 0.2,
    //   ease: 'Expo.easeInOut'
    // }, '-=0.5')
  })
})

onUnmounted(() => {
  context.value.revert() // <- Easy Cleanup!
})

</script>

<template>
  <div>
    <div id="menu_bg" class="fixed inset-0 w-full min-h-screen z-20 bg-[#0C3C60] py-20">
      <!-- <NavBar /> -->
      <div id="menu_bg" class="fixed left-0 top-0 right-0 flex justify-between py-[48px] max-w-7xl items-center mx-auto">
        <NuxtLink to="/">
          <div class="flex items-center gap-5">
            <div class="image-logo">
              <img src="@/assets/images/aeigr_logo.png" alt="" class="w-10">
            </div>
            <!-- <div class="text-logo font-bold text-3xl text-white font-display">
                                                                                                                                                                Aegir Consult
                                                                                                                                                              </div> -->
          </div>
        </NuxtLink>
        <div
          class="rounded-full bg-white w-10 h-10 relative flex items-center justify-center hover:scale-125 hover:bg-gray-300 transform duration-700 ease-in-out"
          @click.prevent="$emit('closeMenu')">
          <XMarkIcon
            class="w-6 h-6 text-black rotate-180 hover:scale-125 hover:text-[#df9f1f] transform duration-700 ease-in-out" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto text-white min-h-screen py-5 md:pl-20">
        <div class="space-y-5">
          <h4 class="uppercase font-bold font-display text-title text-xs md:text-sm">
            Menu
          </h4>
          <ul class="">
            <li id="menu_items" v-for="(item, i) in menuItems" :key="i"
              class="hover:text-white text-xl md:text-2xl font-bold py-1 md:py-4 transform duration-500 ease-in-out hover:translate-x-[50px]"
              @click.prevent="
                [
                  item.linkUrl == ''
                    ? (subMenuIsVisible = !subMenuIsVisible)
                    : $emit('closeMenu'),
                ]
                ">
              <div v-if="item.linkUrl" class="text-[32px] font-bold font-display">
                <NuxtLink :to="item.linkUrl">
                  {{ item.title }}
                </NuxtLink>
              </div>
              <div v-else class="items-center">
                <div class="flex items-center gap-10 text-[32px] font-bold font-display">
                  <div>{{ item.title }}</div>
                  <button v-if="item.children" class="right-0 p-1">
                    <svg v-if="!subMenuIsVisible" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div v-if="subMenuIsVisible" class="border-l border-gray-500 pl-10 ml-9 mt-8 space-y-3">
                  <ul v-if="item.children" class="space-y-2">
                    <li v-for="(child, index) in item.children" :key="index"
                      class="hover:text-white text-lg md:text-[20px] font-bold py-1 md:py-2 transform duration-300 ease-in-out hover:translate-x-[10px]"
                      @click.prevent="$emit('closeMenu')">
                      <NuxtLink :to="child.linkUrl">
                        {{ child.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div class="space-y-5">
            <h4 class="uppercase font-bold font-display text-title text-xs md:text-sm">
              Our Services
            </h4>
            <ul class="space-y-4">
              <li id="services" v-for="(service, i) in services" :key="i"
                class="text-xl md:text-2xl font-bold hover:text-white items-center transform duration-500 ease-in-out hover:translate-x-[20px]"
                @click.prevent="$emit('closeMenu')">
                <nuxt-link :to="service.linkUrl">
                  <span class="text-4xl opacity-30 text-bold mr-4">0{{ i + 1 }}. </span>
                  {{ service.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
#menu_bg {
  visibility: hidden;
}
</style>