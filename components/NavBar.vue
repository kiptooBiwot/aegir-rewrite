<script setup>
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const showMenu = ref(false)

const showHideMenu = () => {
  // setTimeout(() => {
  showMenu.value = !showMenu.value
  // }, 0)
}

onMounted(() => {
  const elementToHide = document.getElementById('hide-on-scroll')

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)

    if (scrollPosition > 0.8) {
      elementToHide.style.display = 'none'
    } else {
      elementToHide.style.display = ''
    }
  })
})
</script>

<template>
  <div class="shadow-sm w-full">
    <div
      class="nav-bar fixed z-10 left-0 top-0 right-0 flex justify-between py-[48px] max-w-7xl px-7 lg:px-0 items-center mx-auto">
      <NuxtLink to="/">
        <div class="flex items-center gap-2 md:gap-5">
          <div class="image-logo">
            <img src="@/assets/images/aeigr_logo.png" alt="" class="w-8 md:w-10">
          </div>
          <div v-if="!showMenu" class="text-logo font-bold text-xl md:text-3xl text-white font-display">
            Aegir Consult
          </div>
        </div>
      </NuxtLink>
      <div class="flex gap-6 items-center">
        <NuxtLink to="/bookings">
          <p id="hide-on-scroll"
            class="uppercase border-b-[0.5px] pb-2 text-xs md:text-sm text-white border-white font-medium font-display tracking-wide cursor-pointer hover:text-[#df9f1f] hover:scale-105 hover:border-[#df9f1f] transform duration-500 ease-in-out">
            Book A Demo
          </p>
        </NuxtLink>
        <!-- <div class="rounded-full bg-white w-10 h-10 relative flex items-center justify-center" @click="showHideMenu()">
                <XMarkIcon class="w-6 h-6 text-black rotate-180" />
              </div> -->
        <div
          class="rounded-full bg-white w-10 h-10 relative flex items-center justify-center hover:bg-gray-300 hover:scale-125 transform duration-500 ease-in-out"
          @click="showHideMenu()">
          <Bars3CenterLeftIcon
            class="w-6 h-6 stroke-w-1 absolute text-black rotate-180 hover:text-[#df9f1f] hover:scale-105 transform duration-500 ease-in-out" />
        </div>
      </div>
    </div>
    <div v-if="showMenu">
      <Menu @closeMenu="showHideMenu" />
    </div>
  </div>
</template>

<style scoped></style>