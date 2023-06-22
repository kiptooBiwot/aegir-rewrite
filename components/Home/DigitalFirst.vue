<script setup>

import collaboration from '~/assets/images/digital_first/collaboration.jpg'
import insights from '~/assets/images/digital_first/insights.jpg'
import mobility from '~/assets/images/digital_first/mobility.jpg'
import security from '~/assets/images/digital_first/security.jpg'


const digitalApproach = ref([
  {
    title: 'Collaboration',
    description:
      "Work closely within departments or project groups within a our workbench solutions to achieve your company's performance goals.",
    image: collaboration,
    bgColor: 'bg-[#f2bf5e]'
  },
  {
    title: 'Insights',
    description:
      'Leverage our Content Management Solutions and BI to make sense of your business data for informed decision support. ',
    image: insights,
    bgColor: 'bg-[#ff6161]'
  },
  {
    title: 'Mobility',
    description:
      'Utilize our mobile applications optimized to extend your operational and reporting space to accommodate field-to-office workflows and vice versa.',
    image: mobility,
    bgColor: 'bg-[#536eb7]'
  },
  {
    title: 'Security',
    description:
      'Work from any platform system on secured and reliable networks and through managed in-built security features that extend to hardware devices.',
    image: security,
    bgColor: 'bg-[#75cba8]'
  }
])
</script>

<template>
  <!-- bg-[#daf3ff] -->
  <section class="digital-section w-full min-h-screen  py-20">
    <div class="max-w-5xl space-y-10 mx-auto">
      <div class="space-y-5">
        <h1 class="digital-text gs_reveal text-3xl font-display text-gray-800 font-bold">Why Choose a Digital First
          Approach?</h1>
        <p class="gs_reveal text-[18px]">Technology and innovation affords modern business a competitive edge to grow
          business in a
          structured and sustainable way. </p>
      </div>

      <!-- <img :src="digitalApproach.image" alt=""> -->
      <div class="gs_reveal max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="(item, i) in digitalApproach" :key="i" class="digital-items">
          <div class="mb-4">
            <img :src="item.image" alt="" class="object-cover w-full h-[400px]">
          </div>
          <div class="p-5">
            <h3 class=" font-bold text-[#df9f1f] font-display text-lg mb-6">
              + {{ item.title }}
            </h3>
            <p class="leading-normal items-start text-lg">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>