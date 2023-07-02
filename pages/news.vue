<script setup>
import gsap from 'gsap'

import one from '../assets/images/news/CIO_100_2021.jpg'
import two from '../assets/images/news/3d_mapping_2.jpg'
import three from '../assets/images/news/ketraco_ilis_3.jpg'
import four from '../assets/images/news/ketraco_4.jpg'
import five from '../assets/images/news/CIO_20Awards_5.jpg'
import six from '../assets/images/news/CIO_20Awards_6.jpg'
import seven from '../assets/images/news/Poster_7.jpg'
import eight from '../assets/images/news/CIO100_8.jpg'
import nine from '../assets/images/news/GIS Day_9.jpg'
import ten from '../assets/images/news/gis4R&D_10.jpg'
import eleven from '../assets/images/news/esri_partner_group.png'
import twelve from '../assets/images/news/twelve.jpeg'

onMounted(() => {
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


const activities = ref([
  {
    title: 'dx100 Symposium and Awards 2022',
    description:
      'Aegir Consult celebrated with Tradewinds Aviation Services on their Ivory Mark Award at the inaugural dx100 Symposium and Awards (formerly CIO100) held at Leisure Lodge Beach & Golf Resort, Diani, Mombasa. We are proud to have designed, development, and deployed their MayFly Flight Tracking System. The Award recognizes adoption of enterprise information technology by modern businesses.',
    image: twelve,
    date: 'November 2022'
  },
  {
    title: 'Inaugural ESRI Partner Group Conference & KUGC Sponsors',
    description:
      'Aegir Consult was one of the key partners participating in the Esri Eastern Africa Partner Conference on March 30th at the Mombasa Continental Resort. The primary goal of the conference, was to bring together all the regional partners under one roof to learn, discuss, explore business development strategies, opportunities, and strategic partnerships positioning. Aegir was also a key sponsor of the subsequent ESRI Kenya User Group on March 31st where we interacted, enlightened, and celebrated the positive gains of the Geospatial Industry in Kenya and Eastern Africa.',
    image: eleven,
    date: 'March 2022'
  },
  {
    title: 'CIO 100 Awards 2021',
    description:
      'Aegir Consult celebrated with Dawa Life Sciences on their Ivory Mark Award at the 2021 CIO 100 Awards held at Savora Whitesands, Mombasa. We are proud to have designed, development, and deployed their Performance Appraisal System. \n The award recognizes adoption of enterprise information technology by modern businesses.',
    image: one,
    date: 'November 2021'
  },
  {
    title: 'Redefining 3D Mapping',
    description:
      'Aegir Consult is pleased to announce our partnership with Cubic 3D, a local start-up that deals with professional 3D printing services. \n 3D modeling is a key component of location intelligence vital for suitability analysis, situation awareness, urban planning and more. \n Visit our online shop to view and purchase our quality 3D printed products today!',
    image: two,
    date: 'September 2021'
  },
  {
    title: 'KETRACO ILIS Launch',
    description:
      'Aegir Consult celebrated the launch of the Integrated Location Intelligence System with the Kenya Electricity Transmission Company Limited. We are proud to have designed, development, and deployed this enterprise technology solution that automates wayleave acquisition and engineering construction and maintenance operations. \n The theme for the event was Driving Digital Transformation.',
    image: three,
    date: 'August 2021'
  },
  {
    title: 'CIO 100 Symposium & Awards',
    description:
      "Aegir Consult was represented at the CIO 100 EA Symposium & Awards held in Naivasha, Kenya on the 19th and 20th November 2020. Our nomination for automating KETRACO's transmission line route selection was honored under the Infrastructure category where it won the Gold Mark. The solution was in line with the theme of the event: Celebrating IT leadership in an accelerated digital age.",
    image: four,
    date: 'November 2020'
  },
  {
    title: 'QGIS Kenya User Group Support',
    description:
      "Aegir's aim is to promote and support the geospatial community to improve geospatial readiness in Kenya and Eastern Africa. We work alongside key development partners and innovators to promote geospatial standards in mapping and spatial analytics. \n We are proud sponsors of the QGIS Kenya User Group where these goals can be articulated.",
    image: five,
    date: 'July 2020'
  },
  {
    title: 'CIO 100 Symposium and Awards',
    description:
      "Aegir Consult was represented at the CIO 100 EA Awards held in Naivasha, Kenya. Our nomination for automating KETRACO's transmission line route selection was honored under the Infrastructure category where it won Bronze. The solution was in line with the theme of the event: Harnessing Innovation in the Age of Automation.",
    image: six,
    date: 'November 2019'
  },
  {
    title: 'Youth Speak Forum',
    description:
      'Aegir Consult Founder, Victor Wahome, was an invited guest speaker at the Accelevate Leads sponsored event whose theme was titled Transforming Education for Youth Employment. \n Aegir supports youth empowerment and the implementation of CBET in order to bridge the existing gap in skills transfer between industry and academic spaces.',
    image: seven,
    date: 'October 2019'
  },
  {
    title: 'CIO 100 2018',
    description:
      'Aegir Consult presented the CIO 100 Kenya 2018 Infrastructure Category Gold Award to KETRACO for the Integrated Location intelligence System.\n From left (Mr. Fernandes Barasa, MD KETRACO; Mr. David Thuo, GIS Managing Coordinator; Mr David Kariuki, ICT Manager; Mr. Victor Wahome, CEO Aegir Consult)',
    image: eight,
    date: 'December 2018'
  },
  {
    title: 'JKUAT GIS Day 2018',
    description:
      'Aegir Consult celebrated the 2018 GIS Day alongside fellow GIS professionals, enthusiasts, students and the larger community at Jomo Kenyatta University of Agriculture and Technology (JKUAT) who hosted the event. \n We embrace spatial technologies as we roll-out our quality Location Intelligence services within Eastern Africa.',
    image: nine,
    date: 'November 2018'
  },
  {
    title: 'GIS for Research and Development',
    description:
      'Aegir Consult Founder, Victor Wahome, was the invited guest speaker at Marist Research Center in Karen, Nairobi organized by Botlab. \n His talk was titled A Transformative Approach To Research and Development Using GIS. ',
    image: ten,
    date: 'March 2019'
  }
])


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
</script>

<template>
  <div class="min-h-screen bg-slate-100">
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

      <div>
        <div v-for="(activity, index) in activities" :key="index" class="panel my-auto">
          <div class="h-screen w-full justify-center items-center grid grid-cols-1 lg:grid-cols-12 md:my-8">
            <div class="col-span-8">
              <img :src="activity.image"
                class="gs_reveal reveal_fromLeft object-fill w-full h-[250px] md:h-[350px] lg:h-[500px]  border-[#df9f1f] border-4"
                alt="">
            </div>
            <div class="gs_reveal reveal_fromRight px-1 col-span-4 items-center md:px-5 py-2 space-y-8 my-auto">
              <h2 class="gs_reveal text-4xl font-display font-semibold text-gray-700">
                {{ activity.title }}
              </h2>
              <p class="gs_reveal leading-loose text-sm">
                {{ activity.description }}
              </p>
              <h5 class=" font-bold text-[#df9f1f] text-sm uppercase tracking-tight">
                {{ activity.date }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>