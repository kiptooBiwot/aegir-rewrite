<script setup>

// logos
import atdi from '@/assets/images/partners/ATDI.jpg'
import cubic from '~/assets/images/partners/Cubic.png'
// import eldama from '~/assets/images/partners/Eldama.png'
import flotilla from '~/assets/images/partners/flotilla.png'
// import ibm from '~/assets/images/partners/ibm-logo.png'
import ibm from '~/assets/images/partners/IBM_silver_partner.jpg'
import microsoft from '~/assets/images/partners/Microsoft-logo.jpg'
import ujumbe from '~/assets/images/partners/Ujumbe-Logo-01.png'
import esri from '~/assets/images/partners/esri_partner_horizontal.png'

const partners = reactive([
  // { title: 'ATDI', logoImg: atdi },
  { title: 'IBM', logoImg: ibm },
  { title: 'Esri East Africa', logoImg: esri },
  { title: 'Flotilla', logoImg: flotilla },
  { title: 'Cubic 3D', logoImg: cubic },
  // { title: 'Microsoft', logoImg: microsoft },
  // { title: 'Ujumbe', logoImg: ujumbe },
])
</script>

<template>
  <!-- PARTNERS  -->
  <section class="bg-[#f1faff]">
    <div class="partners-section max-w-5xl mx-auto px-5 md:px-10 py-20">
      <h3 class="partners-title gs_reveal text-3xl font-bold text-center font-display mb-10 text-gray-700">
        Our Business Partners
      </h3>
      <div id="partners" class="gs_reveal grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
        <div v-for="(partner, index) in partners" :key="index"
          class="logo-image hover:scale-105 hover:shadow-lg  rounded-none overflow-hidden transition duration-400 ease-in-out">
          <img :src="partner.logoImg" class="gs_reveal object-contain h-[130px]" alt="">
          <!-- <p class="font-semibold text-sm text-center font-title text-gray-500 uppercase">
                                                  {{ partner.title }}
                                                </p> -->
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>