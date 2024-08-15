<script setup>
import { useFetch } from 'nuxt/app'
import gsap from 'gsap'
import useBaseAPI from '../composables/baseApiUrl'
import { useVuelidate } from '@vuelidate/core'
import {
  required,
  alpha,
  email,
  minLength,
  helpers,
} from '@vuelidate/validators'

const baseAPIURL = useBaseAPI()

const loading = ref(false)
const sent = ref(false)
const responseMessage = ref('')

const formData = reactive({
  name: '',
  myEmail: '',
  message: '',
})

onMounted(() => {
  // Hide Logo and Text on scroll
  const tl = gsap.timeline()

  tl.to('.text-logo', {
    opacity: 0,
    // y: '-100%',
    // duration: 1,
    // scrub: 1,
    scrollTrigger: {
      trigger: '.hide-logo',
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
      trigger: '.hide-logo',
      start: 'top 30%',
      end: 'top 0%',
      // duration: 2,
      ease: 'power2.inOut',
      scrub: 1,
    },
  })
})

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Please enter your full name', required),
      // alpha: helpers.withMessage('A name must have no numbers', alpha),
      minLength: minLength(3),
    },
    myEmail: {
      required: helpers.withMessage('An email is requried', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    message: {
      required: helpers.withMessage('A message is required', required),
    },
  }
})

const v$ = useVuelidate(rules, formData)

useSeoMeta({
  title: 'Contact | Aegir Consult',
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

// SEND Email to Server
const send = async () => {
  // this.$v.$touch()
  v$.value.$validate()

  if (!v$.value.$error) {
    loading.value = true
    // console.log(this.$mail.send)
    const response = await $fetch('/mail/send', {
      method: 'POST',
      baseURL: baseAPIURL.baseAPIURL,
      body: {
        from: formData.myEmail,
        name: formData.name,
        text: formData.message,
        quote: false,
      },
    })

    // console.log(response)

    if (response) {
      loading.value = false
      sent.value = true
      responseMessage.value = response.message
    }
  }
}
</script>

<template>
  <div class="">
    <div
      class="w-full h-screen md:h-[400px] bg-[#f1f1e6] bg-[url('@/assets/images/map_aegir.png')] object-center py-10 relative"
    >
      <div class="absolute inset-0 bg-[#0C3C60] bg-opacity-90 z-0">
        <div
          class="h-auto mx-auto pl-7 pr-16 md:pl-7 md:pr-16 lg:px-0 max-w-6xl mt-[150px] z-50 mb-10"
        >
          <!--  -->
          <h1
            class="gs_reveal reveal_fromLeft pb-5 font-display text-4xl font-bold text-gray-200 hide-logo"
          >
            Get In Touch
          </h1>
          <div
            class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            <!-- gs_reveal -->
            <div class="gs_reveal space-y-3 text-white pb-3 border-b">
              <h3 class="uppercase font-bold font-display text-gray-200">
                email address
              </h3>
              <p>info@aegirconsult.systems</p>
            </div>
            <!-- gs_reveal -->
            <!-- <div class="gs_reveal space-y-3 text-white pb-3 border-b">
              <h3 class="uppercase font-bold font-display text-gray-200">phone number</h3>
              <p>+254-110-681-999</p>
            </div> -->
            <!-- gs_reveal -->
            <div class="gs_reveal space-y-3 text-white pb-3 border-b">
              <h3 class="uppercase font-bold font-display text-gray-200">
                Physical address
              </h3>
              <!-- <p>P. O. BOX 650-00606</p> -->
              <!-- <p>Nairobi, Kenya</p> -->
              <p>
                The Address, 7th Floor <br />
                Muthangari Drive. Nairobi
              </p>
            </div>
            <!-- gs_reveal -->
            <div class="gs_reveal space-y-3 text-white pb-3 border-b">
              <h3 class="uppercase font-bold font-display text-gray-200">
                Follow Us
              </h3>
              <div class="flex mt-4 space-x-6 sm:mt-0">
                <a
                  href="https://www.youtube.com/@aegirconsult"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    style=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="text-white hover:text-[#df9f1f] bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                      fill=""
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/AegirConsult"
                  target="_blank"
                  class="text-white hover:text-[#df9f1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    />
                  </svg>
                </a>
                <!-- <a href="tel:+254725587783" target="_blank" class="text-white hover:text-[#df9f1f]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href="mailto:info@aegirconsult.systems" target="_blank" class="text-white hover:text-[#df9f1f]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a> -->

                <a
                  href="https://www.linkedin.com/company/aegir-consult-limited/about/"
                  target="_blank"
                  class="text-white hover:text-[#df9f1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="min-h-screen">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1250px] ml-auto">
        <div class="space-y-5 pl-7 pr-16 lg:pl-7 lg:pr-0">
          <div class="pt-10">
            <h2
              class="gs_reveal reveal_fromLeft big-heading text-gray-800 font-bold text-[54px] font-display"
            >
              Hi. Let's make your project a reality.
            </h2>
            <p class="gs_reveal text-xl font-medium">
              Fill out the form below or
              <a
                href="mailto:info@aegirconsult.systems"
                target="_blank"
                class="text-[#df9f1f]"
              >
                Send us an email</a
              >
            </p>
            <div class="my-10 gs_reveal">
              <form v-if="!sent" action="POST" class="space-y-5">
                <div class="space-y-2">
                  <label for="">Full Name</label>
                  <input
                    class="w-full px-4 py-3 bg-gray-100"
                    :class="{
                      'border-red-500 focus:border-red-500': v$.name.$error,
                    }"
                    v-model="formData.name"
                    name="firstName"
                    type="text"
                    placeholder="Please enter your full name"
                    @change="v$.name.$touch"
                  />

                  <span class="text-sm text-red-500" v-if="v$.name.$error">
                    {{ v$.name.$errors[0].$message }}
                  </span>
                </div>
                <div class="space-y-2">
                  <label for="">Email</label>
                  <input
                    class="w-full px-4 py-3 bg-gray-100"
                    :class="{
                      'border-red-500 focus:border-red-500': v$.myEmail.$error,
                    }"
                    v-model="formData.myEmail"
                    name="firstName"
                    type="text"
                    placeholder="Please enter your email address"
                    @change="v$.myEmail.$touch"
                  />

                  <span class="text-sm text-red-500" v-if="v$.myEmail.$error">
                    {{ v$.myEmail.$errors[0].$message }}
                  </span>
                </div>
                <!-- <BaseInput v-model="name" :title="`Full Name`" />
                <BaseInput v-model="email" :title="`Your Email Address`" /> -->
                <div class="space-y-2">
                  <label for="" class="font">Message </label>
                  <textarea
                    id=""
                    v-model="formData.message"
                    class="w-full px-4 py-4 bg-gray-100 border border-gray-200"
                    name="message"
                    :class="{
                      'border border-red-500 focus:border-red-500':
                        v$.message.$error,
                    }"
                    placeholder="Type in your message"
                    cols="30"
                    rows="6"
                  />
                  <span class="text-sm text-red-500" v-if="v$.message.$error">
                    {{ v$.message.$errors[0].$message }}
                  </span>
                </div>
                <div class="flex justify-between mt-6">
                  <button
                    type="submit"
                    class="rounded-[32px] py-4 px-10 bg-gray-800 text-white hover:bg-[#df9f1f] transition duration-700 ease-in-out flex items-center"
                    @click.prevent="send"
                  >
                    <span>Send</span>
                  </button>
                </div>
              </form>
              <div
                v-if="loading"
                class="absolute top-0 left-0 right-0 bottom-52 z-30 w-full h-full justify-center items-center"
              >
                <Spinner />
              </div>
              <div v-if="sent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto fill-green-500 w-24 h-24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477
        10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76
        11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"
                  />
                </svg>
                <p
                  class="font-display text-lg font-medium text-center text-gray-500"
                >
                  {{ responseMessage }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="gs_reveal reveal_fromRight hidden lg:block">
          <img
            src="@/assets/images/aeigr_contact.jpg"
            alt=""
            class="w-full object-contain"
          />
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
