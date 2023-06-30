<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, alpha, email, minLength, helpers } from '@vuelidate/validators'
import useBaseAPI from '../../composables/baseApiUrl';

const baseAPIURL = useBaseAPI()

const loading = ref(false)
const sent = ref(false)
const responseMessage = ref('')
let formData = reactive({
  firstName: '',
  lastName: '',
  myEmail: '',
  phoneNumber: '',
  service: '',
  message: ''
})

const rules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage('This field is required', required),
      alpha: helpers.withMessage('A name must have no numbers', alpha),
      minLength: minLength(3)
    },
    lastName: {
      required: helpers.withMessage('This field is required', required),
      alpha: helpers.withMessage('A name must have no numbers', alpha),
      minLength: minLength(3)
    },
    myEmail: {
      required: helpers.withMessage('This field is required', required),
      email: helpers.withMessage('Invalid email format', email)
    },
    phoneNumber: {
      required: helpers.withMessage('A phone number is required', required)
    },
    service: {
      required: helpers.withMessage('Please choose a service', required)
    },
    message: {
      required: helpers.withMessage('A message is required', required)
    }
  }
})

const v$ = useVuelidate(rules, formData)

const send = async () => {
  v$.value.$validate()
  if (!v$.value.$error) {
    loading.value = true //         // console.log(this.$mail.send)
    const response = await $fetch('/mail/send', {
      method: 'POST',
      baseURL: baseAPIURL.baseAPIURL,
      headers: {
        'Content-type': 'application/json'
      },
      body: {
        from: formData.myEmail,
        subject: formData.service,
        name: formData.firstName + ' ' + formData.lastName,
        tel: formData.phoneNumber,
        service: formData.service,
        text: formData.message,
        quote: true
      }
    })

    if (response) {
      loading.value = false
      sent.value = true
      responseMessage.value = response.message
    }
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
      class="shadow-md rounded-md relative bg-blue-200 p-4 md:p-10 space-y-6 my-10 mx-auto w-[100%] md:w-[80%] lg:w-[60%]">
      <h3 v-if="!sent" class="font-bold text-3xl text-gray-600">
        Get a Quote
      </h3>

      <form v-if="!sent" action="" class="space-y-6">
        <div class="md:flex-col">
          <div class="space-y-2">
            <label for="firstName">First Name</label>
            <input class="w-full px-4 py-3 bg-gray-100"
              :class="{ 'border-red-500 focus:border-red-500': v$.firstName.$error }" v-model="formData.firstName"
              name="firstName" type="text" placeholder="Please enter your first name" @change="v$.firstName.$touch">

            <span class="text-sm text-red-500" v-if="v$.firstName.$error">
              {{ v$.firstName.$errors[0].$message }}
            </span>
          </div>
          <div class="space-y-2">
            <label for="firstName">Last Name</label>
            <input class="w-full px-4 py-3 bg-gray-100"
              :class="{ 'border-red-500 focus:border-red-500': v$.lastName.$error }" v-model="formData.lastName"
              name="firstName" type="text" placeholder="Please enter your last name" @change="v$.lastName.$touch">

            <span class="text-sm text-red-500" v-if="v$.lastName.$error">
              {{ v$.lastName.$errors[0].$message }}
            </span>
          </div>
          <!-- <BaseInput :title="`First name`" :v$="v$" /> -->
          <!-- <BaseInput :title="`Last name`" :v$="v$" /> -->
        </div>
        <div class="md:flex-col">
          <div class="space-y-2">
            <label for="firstName">Email</label>
            <input class="w-full px-4 py-3 bg-gray-100"
              :class="{ 'border-red-500 focus:border-red-500': v$.myEmail.$error }" v-model="formData.myEmail"
              name="firstName" type="text" placeholder="Please enter your email address" @change="v$.myEmail.$touch">

            <span class="text-sm text-red-500" v-if="v$.myEmail.$error">
              {{ v$.myEmail.$errors[0].$message }}
            </span>
          </div>
          <div class="space-y-2">
            <label for="firstName">Phone Number</label>
            <input class="px-4 py-3 bg-gray-100 w-full"
              :class="{ 'border-red-500 focus:border-red-500': v$.phoneNumber.$error }" v-model="formData.phoneNumber"
              name="firstName" type="text" placeholder="Please enter your phone number" @change="v$.phoneNumber.$touch">

            <span class="text-sm text-red-500" v-if="v$.phoneNumber.$error">
              {{ v$.phoneNumber.$errors[0].$message }}
            </span>
          </div>
          <!-- <BaseInput :title="`Email`" :v$="v$" /> -->
          <!-- <BaseInput :title="`Phone number`" :v$="v$" /> -->
        </div>
        <div class="flex-col flex">
          <label for="service" class="text-sm font-semibold mb-2">Choose a service:</label>
          <select id="" v-model="formData.service" name="service" :class="{ 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500': v$.service.$error }
            " @change="v$.service.$touch()">
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
          <span class="text-sm text-red-500" v-if="v$.service.$error">
            {{ v$.service.$errors[0].$message }}
          </span>
        </div>
        <div class="flex flex-col">
          <label for="message" class="text-sm font-semibold mb-2">Message
          </label>
          <textarea id="" v-model="formData.message" name="message" cols="18" rows="8" class="border bg-gray-100 p-2"
            :class="{ 'border-red-500 focus:border-red-500': v$.message.$error }" />
          <span class="text-sm text-red-500" v-if="v$.message.$error">
            {{ v$.message.$errors[0].$message }}
          </span>
        </div>
        <button type="submit" class="rounded-lg py-4 text-white bg-[#df9f1f] hover:bg-[#d4a953] w-full"
          @click.prevent="send">
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
        <p class="font-display text-lg font-medium text-center text-gray-500">
          {{ responseMessage }}
        </p>
      </div>
    </div>
  </div>
</template>



<style></style>
