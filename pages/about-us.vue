<script setup>
import gsap from 'gsap'

definePageMeta({

})

const values = ref([
  'Innovation',
  'Integrity',
  'Respect',
  'Customer Focus',
])

const approaches = ref([
  'Solution-Based Approach',
  'Best-of-Breed Process',
  'On-Time and High Quality',
  'Maximum ROI',
])

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

useSeoMeta({
  title: 'About Us | Aegir Consult',
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
  <div>
    <div class="w-full h-[350px] bg-[#f1f1e6] bg-[url('@/assets/images/office_aeigr.jpg')] object-bottom py-5 relative">
      <div class="absolute inset-0 bg-[#000] bg-opacity-20 z-0"></div>
    </div>
    <div class="min-h-screen main-content">
      <div class="bg-slate-100">
        <div class="max-w-[1200px] mx-auto pl-7 pr-16 lg:px-0 py-16">
          <div class="max-w-4xl text-center mx-auto">
            <h4 class=" small-heading uppercase font-display tracking-widest text-[#df9f1f] font-bold">Who
              we are
            </h4>
            <h1 class="font-display font-bold text-5xl">About Us</h1>
          </div>
          <div
            class=" w-full h-auto md:mx-auto py-10 px-0 md:py-10 md:px-32 lg:px-52 leading-loose space-y-2 md:space-y-6 text-center">
            <p class="text-2xl font-display leading-relaxed font-semibold ">
              Welcome to Aegir Consult, your trusted technology partner in Nairobi, Kenya, and the Sub-Saharan region. We
              specialize in cutting-edge geo-informatics, enterprise systems, systems integration, and hardware supply and
              configuration. With an exceptional roster of experienced, dedicated and knowledgeable Team, we pride
              ourselves on delivering tailor-made solutions that perfectly align with your unique business needs.
            </p>
            <p>
              At Aegir Consult, we understand that every industry has its own challenges and requirements. That's why we
              take a client-centric approach, ensuring we thoroughly grasp your objectives and pain points before crafting
              personalized solutions. Whether you're in the public sector, healthcare, agriculture, finance, or any other
              industry, we always strive to create innovative and scalable solutions that drive success for your
              organization.
            </p>
            <p>
              Our commitment to excellence runs deep, and we go the extra mile to ensure that the solutions we offer are
              seamlessly integrated into your existing infrastructure. We believe that technology should empower, not
              impede, and our streamlined approach to implementation guarantees minimal disruption and maximum impact.
            </p>
            <p>
              Our portfolio is a testament to our dedication and the trust our clients place in us. We take immense pride
              in enabling organizations like yours to thrive in an ever-evolving digital landscape.
            </p>
            <p>
              Join hands with Aegir Consult and embark on a journey of innovation and growth. Together, we'll unlock the
              full potential of technology to create a brighter future for your business.
            </p>
            <p>
              Let's shape tomorrow, today!
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto py-10">
        <div class="mt-10 pl-7 pr-16 md:px-36 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div class="">
            <h3 class="font-display text-[#df9f1f] text-center font-bold text-3xl tracking-wider">
              The Vision
            </h3>
            <p class="text-base mt-5 text-center leading-relaxed text-gray-700">
              To provide world-class enterprise-ready solutions in management
              information system development and location intelligence services that
              enable organizations to maximize business decision support.
            </p>
          </div>
          <div class="">
            <h3 class="font-display text-[#df9f1f] text-center font-bold text-3xl tracking-wider">
              The Mission
            </h3>
            <p class="text-base mt-5 text-center leading-relaxed text-gray-700">
              To provide quality professional consulting services that both geo-enable
              and operationalize modern businesses with the aim of improving their
              business processes, work efficiency, system security, and reduction in
              operational costs.
            </p>
          </div>
          <div>
            <h3 class="font-display text-[#df9f1f] text-center font-bold text-3xl tracking-wider">
              Core Values
            </h3>

            <div class="flex justify-center text-lg mt-5 leading-relaxed text-gray-700 ">
              <ol class="">
                <div v-for="(value, index) in values" :key="index" class="flex items-center gap-4">
                  <div class="text-gray-200 font-bold text-3xl font-display">
                    <!-- 0{{ index + 1 }}. -->
                  </div>
                  <li class="text-base">{{ value }}</li>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-slate-100 py-16 mt-16">
        <div class="max-w-[1200px] pl-7 pr-16 mx-auto md:px-48 space-y-8">
          <h3 class="text-[#df9f1f] font-display text-center font-bold text-3xl tracking-wider">
            Our Approach
          </h3>
          <p class="text-center">
            We leverage our wide industry experience to deliver and innovate around
            location based enterprise systems that address socio-economic
            challenges.
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
            <img src="~/assets/images/approach.jpg" class=" w-96 rounded-lg mx-auto lg:mx-0" alt="">
            <div class="flex mx-auto items-center mt-5 md:mt-0">
              <ul class="">
                <div v-for="(approach, index) in approaches" :key="index" class="flex items-baseline gap-4 space-y-10">
                  <div class="text-gray-200 font-bold text-4xl md:text-5xl font-display">
                    0{{ index + 1 }}.
                  </div>
                  <li>{{ approach }}</li>
                </div>
              </ul>
            </div>
        </div>
      </div>
    </div>

  </div>
</div></template>


<style scoped></style>