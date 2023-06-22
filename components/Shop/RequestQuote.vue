<script setup>
// import usebaseAPIURL from "~/composables/apiBaseComposable.js"

// const baseAPIURL = usebaseAPIURL()

const loading = ref(false)
const sent = ref(false)
const responseMessage = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phoneNumber = ref('')
const service = ref('')
const message = ref('')

const send = async () => {
  loading.value = true //         // console.log(this.$mail.send)
  const response = await $fetch('/mail/send', {
    method: 'POST',
    baseURL: baseAPIURL.baseAPIURL,
    headers: {
      'Content-type': 'application/json'
    },
    body: {
      from: email,
      subject: service,
      name: firstName + ' ' + lastName,
      tel: phoneNumber,
      service: service,
      text: message,
      quote: true
    }
  })

  if (response) {
    loading.value = false
    sent.value = true
    responseMessage.value = response.message
  }
}
//   methods: {
//     async send () {
//       this.$v.$touch()

//       if (!this.$v.$invalid) {
//         this.loading = true
//         // console.log(this.$mail.send)
//         const response = await this.$axios.$post('/mail/send', {
//           from: this.email,
//           subject: this.service,
//           name: this.firstName + ' ' + this.lastName,
//           tel: this.phoneNumber,
//           service: this.service,
//           text: this.message,
//           quote: true
//         })

//         if (response) {
//           this.loading = false
//           this.sent = true
//           this.responseMessage = response.message
//         }
//       }
//     }
//   }
// }
</script>

<template>
  <div>
    <div
      class="shadow-md rounded-md relative bg-[#84a6d1] p-4 md:p-10 space-y-6 my-10 mx-auto w-[100%] md:w-[80%] lg:w-[60%]">
      <h3 v-if="!sent" class="font-bold text-3xl text-gray-600">
        Get a Quote
      </h3>
      <form v-if="!sent" action="" class="space-y-6">
        <div class="md:flex-col">
          <BaseInput :title="`First name`" />
          <BaseInput :title="`Last name`" />
          <!-- <label for="first-name" class="text-xs">
                                                  Frist name
                                                  <input id="" v-model="firstName" type="text" name="first-time" placeholder="First Name" class="w-full">
                                                </label>
                                                <label for="last-name" class="text-xs md:ml-0">
                                                  Last name
                                                  <input id="" v-model="lastName" type="text" name="last-time" placeholder="Last Name" class="w-full">
                                                </label> -->
        </div>
        <div class="md:flex-col">
          <BaseInput :title="`Email`" />
          <BaseInput :title="`Phone number`" />
          <!-- <label for="first-name" class="text-xs">
                                                  Email
                                                  <input id="" v-model="email" type="email" name="email" placeholder="Email" class="w-full">
                                                </label>
                                                <label for="last-name" class="text-xs md:ml-0">
                                                  Phone
                                                  <input id="" v-model="phoneNumber" type="tel" name="phone" placeholder="Phone number" class="w-full">
                                                </label> -->
        </div>
        <div class="flex-col flex">
          <label for="service" class="text-sm font-semibold mb-2">Choose a service:</label>
          <select id="" v-model="service" name="service">
            <option value="">
              --Please choose a service --
            </option>
            <option value="3D Printing Services">
              3D Printing Services
            </option>
            <option value="Batch Production Services">
              Batch Production Services
            </option>
            <option value="High Precision 3D Printing Services">
              High Precision 3D Printing Services
            </option>
            <option value="3D Modelling Services">
              3D Modelling Services
            </option>
            <option value="Drone Digital Image Processing">
              Drone Digital Image Processing
            </option>
          </select>
        </div>
        <div class="flex flex-col">
          <label for="message" class="text-sm font-semibold mb-2">Message
          </label>
          <textarea id="" v-model="message" name="message" cols="18" rows="8" class="border bg-gray-100 p-2" />
        </div>
        <button type="submit" class="rounded-lg py-4 text-white bg-[#df9f1f] hover:bg-[#d4a953] w-full" @click.prevent="">
          Send
        </button>
      </form>
      <div v-if="loading" class="absolute top-0 left-0 right-0 bottom-52 z-30 w-full h-full justify-center items-center">
        <Spinner />
      </div>
      <div v-if="sent">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto fill-green-500 w-24 h-24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477
                                                          10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76
                                                          11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
        </svg>
        <p class="font-title text-lg font-medium text-center text-gray-500">
          {{ responseMessage }}
        </p>
      </div>
    </div>
  </div>
</template>



<style></style>
