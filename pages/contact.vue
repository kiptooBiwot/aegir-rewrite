<script setup>

const loading = ref(false)
const sent = ref(false)
const responseMessage = ref('')
const name = ref('')
const email = ref('')
const message = ref('')


useSeoMeta({
  title: 'Contact | Aegir Consult',
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
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <div>
    <div class="w-full bg-[#f1f1e6] bg-[url('@/assets/images/map_aegir.png')] object-center py-5 relative">
      <div class="absolute inset-0 bg-[#0C3C60] bg-opacity-90 z-0"></div>
      <div class="h-auto mx-auto max-w-5xl mt-[150px] z-10 mb-10">
        <h1 class="gs_reveal reveal_fromLeft pb-5 font-display text-4xl font-bold text-gray-200 ">Get In Touch
        </h1>
        <div class="mt-5 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div class="gs_reveal space-y-3 text-white pb-3 border-b">
            <h3 class="uppercase font-bold font-display text-gray-200">email address</h3>
            <p>info@aegirconsult.systems</p>
          </div>
          <div class="gs_reveal space-y-3 text-white pb-3 border-b">
            <h3 class="uppercase font-bold font-display text-gray-200">phone number</h3>
            <p>+254-747-587-783</p>
          </div>
          <div class="gs_reveal space-y-3 text-white pb-3 border-b">
            <h3 class="uppercase font-bold font-display text-gray-200">Physical address</h3>
            <!-- <p>P. O. BOX 650-00606</p> -->
            <!-- <p>Nairobi, Kenya</p> -->
            <p>The Address, 7th Floor <br> Muthangari Drive. Nairobi</p>
          </div>
        </div>
      </div>
    </div>
    <div class="min-h-screen">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1250px] ml-auto">
        <div class="space-y-5">
          <div class="pt-10">
            <h2 class="gs_reveal reveal_fromLeft text-gray-800 font-bold text-[54px] font-display">Hi. Let's make your
              project a reality.</h2>
            <p class="gs_reveal text-xl font-medium">Fill out the form below or
              <a href="mailto:info@aegirconsult.systems" target="_blank" class="text-[#df9f1f]">
                Send us an email</a>
            </p>
            <div class="my-10 gs_reveal">
              <form v-if="!sent" action="POST" class="space-y-5">
                <BaseInput v-model="name" :title="`Full Name`" />
                <BaseInput v-model="email" :title="`Your Email Address`" />
                <div>
                  <label for="">
                    <p class="text-sm font-semibold">Message</p>
                    <textarea id="" v-model="message" class="w-full border-none bg-gray-200 px-4 py-4" name="message"
                      placeholder="Type in your message" cols="30" rows="6" />
                  </label>
                </div>
                <div class="flex justify-between mt-6">
                  <button type="submit"
                    class="rounded-[32px] py-4 px-10 bg-gray-800 text-white hover:bg-[#df9f1f] transition duration-700 ease-in-out flex items-center"
                    @click.prevent="send">
                    <span>Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="gs_reveal reveal_fromRight">
          <img src="@/assets/images/aeigr_contact.jpg" alt="" class="w-full object-contain">
        </div>
      </div>
      <!-- <div class="w-full z-0">
                                                                                                                                                                                                                  <iframe width="100%" height="400px"
                                                                                                                                                                                                                    src="https://api.mapbox.com/styles/v1/wahome23/cl25o1me3000d15qnnjdriyh9.html?title=false&access_token=pk.eyJ1Ijoid2Fob21lMjMiLCJhIjoiY2lvOHNqbzMzMDA3NHZybHljNmh2eDAxaCJ9.FVkImsec0AWNCJrbD3Q4dQ&zoomwheel=false#17.01/-1.259702/36.780974"
                                                                                                                                                                                                                    title="Blueprint-copy" style="border: none" />
                                                                                                                                                                                                                </div> -->
    </div>
  </div>
</template>


<style scoped></style>