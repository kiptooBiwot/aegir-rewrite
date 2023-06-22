<template>
  <div class="w-full shadow-sm text-gray-500 bg-gray-50">
    <div
      class="flex top-0 left-0 right-0 mx-1 md:mx-8 lg:mx-20 py-2 md:py-4 justify-between items-center relative"
    >
      <div class="flex">
        <div
          class="flex cursor-pointer transition duration-700 hover:scale-110 ml-10"
        >
          <img
            class="w-18 h-12 md:w-12 md:h-18 mr-1"
            src="~/assets/images/aegir_logo2.png"
            alt="Aegir Logo"
          >
          <div
            class="font-title font-bold text-gray-700 text-lg md:text-xl leading-tight md:leading-none items-center"
          >
            <NuxtLink to="/">
              <span class="text-xl md:text-4xl">AEGIR</span> <br>
              Solutions
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex space-y-3 m-5 md:ml-16">
        <ul
          class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-20 duration-700 ease-in bg-white md:bg-transparent my-3 md:my-0 mr-4"
          :class="[showMobileMenu ? 'right-0' : 'right-[-100%]']"
        >
          <li
            v-for="(item, i) in menuItems"
            :key="i"
            class="hover:border-t-2 hover:border-[#43b0f1] text-sm uppercase font-semibold tracking-wide pt-2 my-2 md:my-0 md:pt-3 mx-2"
            @click.prevent="
              [item.linkUrl == '' ? (subMenuIsVisible = !subMenuIsVisible) : '']
            "
          >
            <div v-if="item.linkUrl" class="hover:text-gray-400">
              <NuxtLink :to="item.linkUrl">
                {{ item.title }}
              </NuxtLink>
            </div>
            <div v-else class="items-center relative">
              <div class="flex">
                {{ item.title }}
                <button v-if="item.children" class="right-0 p-1 items-center">
                  <svg
                    v-if="!subMenuIsVisible"
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <svg
                    v-else
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div
                v-if="subMenuIsVisible"
                class="shadow-md bg-white ml-5 absolute left-0"
              >
                <ul v-if="item.children">
                  <li
                    v-for="(child, index) in item.children"
                    :key="index"
                    class="hover:bg-blue-400 hover:text-gray-100 px-6 py-2 text-xs md:text-xs font-medium my-3 md:py-3 uppercase transition duration-700 ease-in-out"
                    @click.prevent="subMenuIsVisible = !subMenuIsVisible"
                  >
                    <NuxtLink :to="child.linkUrl" @click.stop>
                      {{ child.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div class="mr-3 md:mr-0 md:block roght-0 left-0 top-0 relative">
          <NuxtLink to="/shop/cart">
            <svg
              class="w-8 h-8 hover:text-[#43b0f1] hover:scale-105"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div
              class="absolute -right-3 -top-3 w-6 h-6 p-2 flex justify-center items-center bg-orange-500 rounded-full text-white text-xs font-semibold"
            >
              {{ cartLength }}
            </div>
          </NuxtLink>
        </div>
        <div class="md:hidden flex cursor-pointer">
          <svg
            class="w-8 h-8"
            :class="[showMobileMenu ? 'hidden' : 'block']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            @click.prevent="toggleMobileMenu"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <svg
            class="w-8 h-8"
            :class="[showMobileMenu ? 'block' : 'hidden']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            @click.prevent="toggleMobileMenu"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    showMobileMenu: false,
    subMenuIsVisible: false,
    menuItems: [
      { title: 'Home', linkUrl: '/' },
      { title: 'About', linkUrl: '/about-us' },
      {
        title: 'Our Offerings',
        linkUrl: '',
        children: [
          { title: 'Services', linkUrl: '/our-offerings/services' },
          { title: 'Solutions', linkUrl: '/our-offerings/solutions' },
          { title: 'Products', linkUrl: '/our-offerings/products' }
        ]
      },
      { title: 'Portfolio', linkUrl: '/portfolio' },
      { title: 'Shop', linkUrl: '/shop' },
      { title: 'Contact', linkUrl: '/contact' }
      // { title: 'Login', linkUrl: '/shop/login' }
      // { title: 'Register', linkUrl: '/shop/register' },
      // { title: 'Register', linkUrl: '/shop/register' },
    ]
  }),
  computed: {
    ...mapGetters('Product', ['cartLength'])
  },
  methods: {
    toggleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
    },
    closeMobileMenu () {
      if (this.open) {
        this.open = !this.open
      }
    }
  }
}
</script>

<style></style>
3
