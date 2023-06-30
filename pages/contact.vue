<script setup>
import { useFetch } from "nuxt/app"
import gsap from 'gsap'
import useBaseAPI from "../composables/baseApiUrl"
import { useVuelidate } from '@vuelidate/core'
import { required, alpha, email, minLength, helpers } from '@vuelidate/validators'

const baseAPIURL = useBaseAPI()

const loading = ref(false)
const sent = ref(false)
const responseMessage = ref('')

const formData = reactive({
  name: '',
  myEmail: '',
  message: ''
})

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Please enter your full name', required),
      // alpha: helpers.withMessage('A name must have no numbers', alpha),
      minLength: minLength(3)
    },
    myEmail: {
      required: helpers.withMessage('An email is requried', required),
      email: helpers.withMessage('Invalid email format', email)
    },
    message: {
      required: helpers.withMessage('A message is required', required)
    },
  }
})

const v$ = useVuelidate(rules, formData)

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
      href: '/favicon.ico'
    }
  ]
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
        quote: false
      }
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
    <div class="w-full bg-[#f1f1e6] bg-[url('@/assets/images/map_aegir.png')] object-center py-5 relative">
      <div class="absolute inset-0 bg-[#0C3C60] bg-opacity-90 z-0"></div>
      <div class="h-auto mx-auto pl-12 pr-7 md:px-0 max-w-5xl mt-[150px] z-30 mb-10">
        <!--  -->
        <h1 class="gs_reveal reveal_fromLeft pb-5 font-display text-4xl font-bold text-gray-200 ">Get In Touch
        </h1>
        <div class="mt-5 grid grid-cols-1 gap-10 md:grid-cols-3">
          <!-- gs_reveal -->
          <div class="gs_reveal space-y-3 text-white pb-3 border-b">
            <h3 class="uppercase font-bold font-display text-gray-200">email address</h3>
            <p>info@aegirconsult.systems</p>
          </div>
          <!-- gs_reveal -->
          <div class="gs_reveal space-y-3 text-white pb-3 border-b">
            <h3 class="uppercase font-bold font-display text-gray-200">phone number</h3>
            <p>+254-747-587-783</p>
          </div>
          <!-- gs_reveal -->
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
        <div class="space-y-5 pl-12 pr-7 md:px-0">
          <div class="pt-10">
            <h2 class="gs_reveal reveal_fromLeft text-gray-800 font-bold text-[54px] font-display">Hi. Let's make your
              project a reality.</h2>
            <p class="gs_reveal text-xl font-medium">Fill out the form below or
              <a href="mailto:info@aegirconsult.systems" target="_blank" class="text-[#df9f1f]">
                Send us an email</a>
            </p>
            <div class="my-10 gs_reveal">
              <form v-if="!sent" action="POST" class="space-y-5">
                <div class="space-y-2">
                  <label for="">Full Name</label>
                  <input class="w-full px-4 py-3 bg-gray-100"
                    :class="{ 'border-red-500 focus:border-red-500': v$.name.$error }" v-model="formData.name"
                    name="firstName" type="text" placeholder="Please enter your full name" @change="v$.name.$touch">

                  <span class="text-sm text-red-500" v-if="v$.name.$error">
                    {{ v$.name.$errors[0].$message }}
                  </span>
                </div>
                <div class="space-y-2">
                  <label for="">Email</label>
                  <input class="w-full px-4 py-3 bg-gray-100"
                    :class="{ 'border-red-500 focus:border-red-500': v$.myEmail.$error }" v-model="formData.myEmail"
                    name="firstName" type="text" placeholder="Please enter your email address"
                    @change="v$.myEmail.$touch">

                  <span class="text-sm text-red-500" v-if="v$.myEmail.$error">
                    {{ v$.myEmail.$errors[0].$message }}
                  </span>
                </div>
                <!-- <BaseInput v-model="name" :title="`Full Name`" />
                <BaseInput v-model="email" :title="`Your Email Address`" /> -->
                <div class="space-y-2">
                  <label for="" class="font">Message </label>
                  <textarea id="" v-model="formData.message" class="w-full px-4 py-4 bg-gray-100 border border-gray-200"
                    name="message" :class="{ 'border border-red-500 focus:border-red-500': v$.message.$error }"
                    placeholder="Type in your message" cols="30" rows="6" />
                  <span class="text-sm text-red-500" v-if="v$.message.$error">
                    {{ v$.message.$errors[0].$message }}
                  </span>
                </div>
                <div class="flex justify-between mt-6">
                  <button type="submit"
                    class="rounded-[32px] py-4 px-10 bg-gray-800 text-white hover:bg-[#df9f1f] transition duration-700 ease-in-out flex items-center"
                    @click.prevent="send">
                    <span>Send</span>
                  </button>
                </div>
              </form>
              <div v-if="loading"
                class="absolute top-0 left-0 right-0 bottom-52 z-30 w-full h-full justify-center items-center">
                <Spinner />
              </div>
              <div v-if="sent">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto fill-green-500 w-24 h-24" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477
        10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76
        11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                </svg>
                <p class="font-display text-lg font-medium text-center text-gray-500">
                  {{ responseMessage }}
                </p>
              </div>
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