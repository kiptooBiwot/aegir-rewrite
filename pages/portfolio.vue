<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import redcross from '~/assets/images/protfolio/redcross-emblem.svg'
// import rc_text from '~/assets/images/protfolio/redcross-logo.svg'
import ketraco from '~/assets/images/protfolio/ketraco.jpg'
import dawaLtd from '~/assets/images/protfolio/dawa_logo.svg'
import victoriaBank from '~/assets/images/protfolio/victoria_bank_logo.png'
import tradewinds from '~/assets/images/protfolio/tradewinds.png'
import ca from '~/assets/images/protfolio/CA_Logo.png'
import safariCollection from '~/assets/images/protfolio/The-Safari-Collection.jpg'
import tatuCity from '~/assets/images/protfolio/tatu-city.jpg'
import jms from '~/assets/images/protfolio/JointMedicalStores.png'
import kimfay from '~/assets/images/protfolio/KimfayLogo.png'
import montis from '~/assets/images/protfolio/MontisLogo.png'
import gertrudes from '~/assets/images/protfolio/gertrudes.jpg'
import gdc from '~/assets/images/protfolio/gdc_logo.webp'
import molad from '~/assets/images/protfolio/molad.jpg'
import papermills from '~/assets/images/protfolio/ea-paper-mill.jpg'
import amref from '~/assets/images/protfolio/Amref-Logo.webp'

definePageMeta({})

const portfolio = ref([
  {
    company: 'AMREF',
    service: 'Office 365 License Supply',
    logoUrl: amref,
  },
  {
    company: 'Synapsis Trade Network',
    service: 'New Sale Automation',
    // logoUrl: papermills,
  },
  {
    company: 'East African Paper Mills',
    service: 'Performance 365',
    logoUrl: papermills,
  },
  {
    company: 'Communications Authority',
    service: 'AMSS Study',
    logoUrl: ca,
  },
  {
    company: ' East African Paper Mills',
    service: 'OEE Automation',
    logoUrl: papermills,
  },
  {
    company: 'KETRACO',
    service: 'Geospatial Hardware Supply',
    logoUrl: ketraco,
  },
  {
    company: 'Ministry of Agriculture and Livestock',
    service: 'SMART-A',
    logoUrl: molad,
  },
  {
    company: 'Geothermal Development Company',
    service: 'Geospatial Hardware Supply',
    logoUrl: gdc,
  },
  {
    company: "Gertrude's Children's Hospital",
    service: 'Document Management System',
    logoUrl: gertrudes,
  },
  {
    company: 'Joint Medical Stores',
    service: 'Health Facility Mapping and Route Optimization',
    logoUrl: jms,
  },
  {
    company: 'Montis Homes',
    service: 'Tenancy Management Solution',
    logoUrl: montis,
  },
  {
    company: 'KIMFAY',
    service: 'Azure Cloud Server Optimization',
    logoUrl: kimfay,
  },
  {
    company: 'Communications Authority of Kenya',
    service: 'Digital Trunked Radio Networks Framework Project',
    logoUrl: ca,
  },
  {
    company: 'Tatu City',
    service: 'Performance 365 Implementation',
    logoUrl: tatuCity,
  },
  {
    company: 'Kenya Electricity Transmission Company',
    service: 'Visitor Management System',
    logoUrl: ketraco,
  },
  {
    company: 'The Safari Collection',
    service: 'SharePoint Intranet Portal',
    logoUrl: safariCollection,
  },
  {
    company: 'Communication Authority',
    service: 'Digital Access Gap Study',
    logoUrl: ca,
  },
  {
    company: 'Kenya Red Cross',
    service: 'Informal Settlement Mapping in Nairobi County',
    logoUrl: redcross,
  },
  {
    company: 'KETRACO',
    service: 'Integrated Location Intelligence System (ILIS)',
    logoUrl: ketraco,
  },
  {
    company: 'Dawa Limited',
    service: 'HR Intranet and Performance Appraisal Automation',
    logoUrl: dawaLtd,
  },
  {
    company: 'Victoria Commercial Bank',
    service: 'SharePoint Intranet with Company Pulse Solution',
    logoUrl: victoriaBank,
  },
  {
    company: 'Kenya Red Cross',
    service: 'Dadaab Refugee Camp Drone Image Processing',
    logoUrl: redcross,
  },
  {
    company: 'Tradewinds Aviation',
    service: 'Intranet DMS and Flight Tracking Solution',
    logoUrl: tradewinds,
  },
])

const contxt = ref()

onMounted(() => {
  // onNuxtReady(() => {
  contxt.value = gsap.context((self) => {
    // SKEW ON SCROLL
    const card = document.querySelectorAll('.card')

    card.forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          id: index,
          // stagger: 0.2,
          trigger: item,
          refreshPriority: -1,
          // markers: true
        },
      })

      let proxy = { skew: 0 }
      let skewSetter = gsap.quickSetter(item, 'skewY', 'deg')
      let clamp = gsap.utils.clamp(-30, 30) // Don't let skew go beyond these degrees

      // console.log('PROXY: ', proxy);

      ScrollTrigger.create({
        trigger: item,
        start: '0 100%',
        end: '100% 0',
        onUpdate: (self) => {
          let skew = clamp(self.getVelocity() / -400)
          // console.log('SKEW WITH CLAMP: ', skew);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew
            gsap.to(proxy, {
              skew: 0,
              duration: 0.6,
              stagger: 0.2,
              ease: 'power2',
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            })
          }
        },
      })
    })

    // console.log(digitalText);

    gsap.set('.card', { transformOrigin: 'right center', force3D: true })

    // usage:
    batch('.card', {
      interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
      batchMax: 3, // maximum batch size (targets)
      onEnter: (batch) =>
        gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
      onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { autoAlpha: 0, overwrite: true }),
      // you can also define things like start, end, etc.
    })

    // the magical helper function (no longer necessary in GSAP 3.3.1 because it was added as ScrollTrigger.batch())...
    function batch(targets, vars) {
      let varsCopy = {},
        interval = vars.interval || 0.1,
        proxyCallback = (type, callback) => {
          let batch = [],
            delay = gsap
              .delayedCall(interval, () => {
                callback(batch)
                batch.length = 0
              })
              .pause()
          return (self) => {
            batch.length || delay.restart(true)
            batch.push(self.trigger)
            vars.batchMax && vars.batchMax <= batch.length && delay.progress(1)
          }
        },
        p
      for (p in vars) {
        varsCopy[p] =
          ~p.indexOf('Enter') || ~p.indexOf('Leave')
            ? proxyCallback(p, vars[p])
            : vars[p]
      }
      gsap.utils.toArray(targets).forEach((target) => {
        let config = {}
        for (p in varsCopy) {
          config[p] = varsCopy[p]
        }
        config.trigger = target
        ScrollTrigger.create(config)
      })
    }
  })
  // })

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
    },
  }).to('.image-logo', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.main-content',
      start: 'top 30%',
      end: 'top 0%',
      // duration: 2,
      ease: 'power2.inOut',
      scrub: 1,
    },
  })
})

onUnmounted(() => {
  contxt.value.revert()
})

useSeoMeta({
  title: 'Portfolio | Aegir Consult',
  description:
    'We are a technology firm that deals in geo-informatics, information systems, system integration and geospatial technologies to both improve business efficacy and management operations',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <div class="bg-slate-100">
    <div
      class="w-full h-[350px] bg-[#f1f1e6] bg-[url('@/assets/images/services.jpg')] object-bottom py-5 relative"
    >
      <div class="absolute inset-0 bg-[#000] bg-opacity-20 z-0"></div>
    </div>

    <div
      class="max-w-4xl mx-auto mt-10 space-y-5 px-7 md:pl-7 md:pr-16 main-content"
    >
      <div class="">
        <h4
          class="small-heading uppercase font-display tracking-widest text-[#df9f1f] font-bold"
        >
          Our Esteemed Partners
        </h4>
        <h1 class="font-display font-bold text-5xl">Portfolio</h1>
      </div>
      <div class="text-xl text-gray-600">
        <p>Making each of our clients happy, one project at a time.</p>
      </div>
    </div>

    <div class="max-w-5xl py-10 mx-auto min-h-screen">
      <div
        class="portfolio-section grid md:grid-cols-2 lg:grid-cols-3 gap-5 ml-5 mr-16 mt-10 -z-10"
      >
        <div
          v-for="(item, index) in portfolio"
          :key="index"
          class="card shadow-sm px-6 py-10 bg-white relative hover:-translate-y-3 transition duration-1000 ease-in-out hover:shadow-xl"
        >
          <div
            class="inset-0 absolute bg-[#213f9a] hover:opacity-90 space-y-4 opacity-0 transition duration-1000 ease-in-out px-6 py-4"
          >
            <div
              class="text-xs font-display uppercase font-bold tracking-wider text-[#df9f1f]"
            >
              Project
            </div>
            <div class="flex">
              <p
                class="text-white font-display font-bold text-2xl hover:opacity-100"
              >
                {{ item.service }}
              </p>
              <div>
                <svg
                  class="w-12 h-12 text-[#e6ae17] ml-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <!-- <button
                  class="px-6 py-3 bg-[#e6ae17] rounded-sm text-white hover:bg-[#edda32]"
                >
                  Read More
                </button> -->
          </div>
          <div class="">
            <img
              :src="item.logoUrl"
              class="mx-auto object-contain w-48 h-24"
              alt=""
            />
          </div>
          <div class="">
            <div
              class="text-xs font-display uppercase font-bold tracking-wider text-[#df9f1f] mt-5"
            >
              Company
            </div>
            <div class="text-xl font-display font-bold">
              {{ item.company }}
            </div>
            <div
              class="text-xs font-dispaly uppercase font-bold tracking-wider md:hidden text-[#df9f1f] mt-5"
            >
              Project
            </div>
            <div class="md:hidden">
              {{ item.service }}
            </div>
          </div>

          <!-- <div v-for="(property, index) in portfolio" :key="index"
          class="w-full md:w-1/2 lg:w-1/3 h-[400px] relative mt-10 hover:-translate-y-3 transition duration-1000 ease-in-out hover:shadow-lg">
          <img :src="property.logoUrl" class="inset-0 absolute h-[400px] w-full object-cover object-center" alt="">
          <div
            class="inset-0 absolute bg-[#213f9a] hover:opacity-60 flex justify-center items-center space-y-4 opacity-0 transition duration-1000 ease-in-out">
            <p class="text-white font-title text-4xl">
              {{ property.company }}
            </p>
            <div>
              <svg class="w-12 h-12 text-[#e6ae17] ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <button
                class="px-6 py-3 bg-[#e6ae17] rounded-sm text-white hover:bg-[#edda32]"
              >
                Read More
              </button> -->
        </div>
        <!-- </div> -->
        <!-- <div v-for="(item, index) in portfolio" :key="index"
          class="card px-5 py-7 shadow-md max-w-sm rounded-lg bg-white hover:shadow-xl">
          <div class="">
            <img :src="item.logoUrl" class="mx-auto object-contain w-48 h-24" alt="">
          </div>
          <div class="">
            <div class="text-xs font-display uppercase font-bold tracking-wider text-[#df9f1f] mt-5">
              Company
            </div>
            <div class="text-xl font-display font-bold">
              {{ item.company }}
            </div>
            <div class="text-xs font-dispaly uppercase font-bold tracking-wider text-[#df9f1f] mt-5">
              Project
            </div>
            <div class="">
              {{ item.service }}
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
