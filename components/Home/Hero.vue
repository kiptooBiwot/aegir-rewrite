<script setup>
import { PlusIcon } from '@heroicons/vue/24/solid';

// import {  } from "@/assets/images/aeigr";
</script>

<template>
  <!-- #0c3c60 -->
  <div class="inset-0 bg-[#0c3c60] w-full  -z-10 ">
    <!-- <div class="text-white font-bold text-[550px] opacity-[0.05] -z-0 inset-0 text-center overflow-hidden">
                        A
                      </div> -->
    <div class="h-[100vh] w-full grid grid-cols-1 md:grid-cols-12 justify-center items-center px-20">

      <div class="hero-text col-span-8 md:p-10">
        <div class="pb-6">
          <h4 class="small-heading uppercase font-display tracking-widest text-[#df9f1f] font-bold">We are Aegir
            Consult
          </h4>
        </div>
        <div class=" md:pl-10 space-y-8">
          <h1 class="large-heading font-display text-6xl text-white font-extrabold">Developing Innovative
            Solutions. </h1>
          <h2 class="large-heading text-4xl font-display font-bold text-white pb-5">Achieving Growth</h2>
          <button
            class="hero-button flex items-center gap-5 uppercase text-sm text-white py-4 px-5 rounded-full border-[0.5px]">
            Get to Know Us
            <span>
              <PlusIcon class="w-4 h-4 text-white" />
            </span>
          </button>
        </div>
      </div>
      <div class="col-span-4">
        <div class="hero-image flex flex-col overflow-hidden leading-tight">
          <img src="@/assets/images/world.svg" alt="" class="w-full h-full object-cover opacity-90">
        </div>
        <!-- Some sort of image or anything fancy -->
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>