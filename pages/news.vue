<script setup>
import gsap from 'gsap'
import { useNewsStore } from '@/stores/news.js'

const newsStore = useNewsStore()


onMounted(() => {
  if (newsStore.selectedActivities) {
    newsStore.selectedActivities
  } else {
    newsStore.selectedActivities = newsStore.activities
  }
  // Hide Logo and Text on scroll
  const tl = gsap.timeline()

  tl.to('.text-logo', {
    opacity: 0,
    // y: '-100%',
    // duration: 1,
    // scrub: 1,
    scrollTrigger: {
      trigger: '.main-content',
      start: 'top 30%',
      end: 'top 0%',
      // duration: 2,
      ease: 'power2.inOut',
      scrub: 1,
      // markers: true
    }

  })
    .to('.image-logo', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.main-content',
        start: 'top 30%',
        end: 'top 0%',
        // duration: 2,
        ease: 'power2.inOut',
        scrub: 1,
      }
    })
})



useSeoMeta({
  title: 'News | Aegir Consult',
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

const yearButtons = newsStore.yearButtons
const selectedYearIndex = newsStore.selectedYearIndex
const selectedActivities = newsStore.selectedActivities


const activityDetails = newsStore.activityDetails
const newsModal = newsStore.newsModal


</script>

<template>
  <div class="bg-slate-100">
    <div class="h-[300px] w-full relative">
      <img src="@/assets/images/news/news_2.jpg" alt="" class=" object-cover  h-[300px] w-full">
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>

    <div class="max-w-6xl py-10 mx-auto pl-7 pr-16 xl:px-0 main-content">
      <div class="mb-10 md:mb-0">
        <h2 class="gs_reveal font-bold font-display text-gray-800 text-[54px]">
          News
        </h2>
        <p class="gs_reveal">Here are a part of our achievements, awards, and major projects that we've had the pleasure
          of
          being a part of.
        </p>
      </div>
      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-2">
        <template v-for="(button, index) in yearButtons" :key="index">
          <div type="button"
            class="px-3 py-1.5 text-sm md:text-base md:px-3 md:py-1.5 rounded-3xl border-[#0C3C60] bg-[#0C3C60] cursor-pointer text-white transition duration-300 ease-in-out hover:bg-[#2698f0] hover:text-gray-100 hover:shadow-lg hover:scale-105"
            :class="[selectedYearIndex === index ? 'bg-[#2698f0] text-gray-100 shadow-lg' : '']"
            @click="newsStore.getYearNews(index, button.value)">
            {{ button.title }}
          </div>

        </template>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <!-- {{ newsStore.selectedActivities }} -->

        <div v-for="(activity, i) in newsStore.selectedActivities" :key="i" class="">
          <div class="relative h-64 cursor-pointer">
            <img class="h-full absolute inset-0 w-full rounded-lg object-cover" :src="activity.image" alt="">

            <div class=" inset-0 absolute bg-[#213f9a] hover:opacity-90 space-y-4 opacity-0 transition duration-1000
          ease-in-out px-6 py-4">
              <div class="text-xs font-display uppercase font-bold tracking-wider text-[#df9f1f]">
                Achievement
              </div>
              <div class="flex">
                <p class="text-white font-display font-bold text-xl hover:opacity-100">
                  {{ activity.title }}
                </p>
                <div>
                  <svg class="w-12 h-12 text-[#e6ae17] ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <div>
                <p class="text-[#df9f1f] font-display font-bold text-lg hover:opacity-100">{{ activity.date }}</p>
              </div>
              <!-- @click.prevent="showActivityDetails(activity.title)" -->
              <NuxtLink :to="`/news-details/${activity.id}`">
                <button
                  class="px-4 py-2 bg-[#e6ae17] rounded-sm text-white text-sm absolute bottom-10 right-4 hover:bg-[#edda32]">
                  Read More
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

