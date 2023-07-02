<script setup>
import { PlusIcon } from '@heroicons/vue/24/solid'

</script>

<template>
  <!-- #0c3c60 -->
  <div class="inset-0 bg-[#0c3c60] w-full  -z-10 ">
    <!-- <div class="text-white font-bold text-[550px] opacity-[0.05] -z-0 inset-0 text-center overflow-hidden">
                        A
                      </div> -->
    <div
      class="min-h-screen md:h-[100vh] w-full grid grid-cols-1 md:grid-cols-12 justify-center items-center pl-7 pr-16 md:px-20 py-[130px] md:py-0">

      <div class="hero-text col-span-7 md:p-10">
        <div class="pb-6">
          <h4 class="small-heading uppercase font-display tracking-widest text-[#df9f1f] font-bold">We are...
          </h4>
        </div>
        <div class=" md:pl-10 space-y-8">
          <div>
            <h1 class="large-heading font-display text-6xl md:text-7xl text-white font-extrabold">Developing
              Innovative
              Solutions </h1>
          </div>
          <!-- <h2 class="large-heading text-3xl md:text-4xl font-display font-bold text-white pb-5">Achieving Growth</h2> -->
          <div>
            <NuxtLink to="/about-us">
              <button
                class="hero-button mt-10 md:mt-0 flex items-center gap-5 uppercase text-sm text-white py-4 px-5 rounded-full border-[0.5px] hover:text-white hover:bg-[#df9f1f] hover:border-[#df9f1f] transform duration-500 ease-in-out">
                Get to Know Us
                <span>
                  <PlusIcon class="w-4 h-4 text-white" />
                </span>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="col-span-5">
        <div class="hero-image flex-col overflow-hidden leading-tight hidden md:flex">
          <img src="@/assets/images/world.svg" alt="" class="w-full h-full object-cover opacity-90">
        </div>
        <!-- Some sort of image or anything fancy -->
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>