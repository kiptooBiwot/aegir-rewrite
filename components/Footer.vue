<script setup>
const menuItems = reactive([
  // { title: 'Home', link: '/' },
  { title: 'About Us', link: '/about-us' },
  { title: 'Services', link: '/our-offerings/services' },
  // { title: 'News', link: '/news' },
  // { title: 'Portfolio', link: '/portfolio' },
  { title: 'Shop', link: '/shop' },
  { title: 'Contact', link: '/contact' },
])
</script>

<template>
  <footer class="bg-gray-800 relative bottom-0 left-0 right-0 pt-10">
    <div class="mx-auto w-full max-w-screen-xl px-7 md:px-4 py-6 lg:py-8">
      <div class="md:flex">
        <div class="mb-16 md:mb-0 md:mr-40">
          <NuxtLink to="/" class="flex items-center">
            <img
              src="@/assets/images/aeigr_logo.png"
              class="h-8 mr-3"
              alt="FlowBite Logo"
            />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap font-display text-white"
              >Aegir Consult</span
            >
          </NuxtLink>
        </div>
        <div
          class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 md:space-y-0 md:justify-between"
        >
          <div>
            <h2
              class="mb-6 text-sm font-display font-semibold uppercase text-white"
            >
              Quick Links
            </h2>
            <ul class="text-gray-400 font-medium">
              <li v-for="(item, index) in menuItems" :key="index" class="mb-4">
                <NuxtLink :to="item.link" class="hover:underline">{{
                  item.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-display font-semibold uppercase text-white"
            >
              Legal
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <NuxtLink to="/privacy-policy" class="hover:underline"
                  >Privacy Policy</NuxtLink
                >
              </li>
              <li class="mb-4">
                <NuxtLink to="/code-of-conduct" class="hover:underline"
                  >Code of Conduct</NuxtLink
                >
              </li>
              <li class="mb-4">
                <NuxtLink to="/anti-corruption-policy" class="hover:underline"
                  >Anti-Bribery and Corruption Policy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/terms-of-use" class="hover:underline"
                  >Terms &amp; Conditions</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="text-gray-400 font-medium space-y-4">
            <div>
              <h2
                class="mb-6 text-sm font-display font-semibold uppercase text-white"
              >
                Address
              </h2>
            </div>
            <div class="flex">
              <span class="my-auto mr-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              P. O. BOX 650-00606 <br />
              Nairobi, Kenya
            </div>
            <div class="flex">
              <span class="my-auto mr-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </span>
              7th Floor The Address, <br />
              Muthangari Drive
            </div>
            <div class="flex">
              <span class="my-auto mr-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              info@aegirconsult.systems
            </div>
            <!-- <div class="flex">
              <span class="my-auto mr-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              +254-110-681-999
            </div> -->
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© {{ new Date().getFullYear() }}
          <a href="https://aegirconsult.systems" class="hover:underline"
            >Aegir Consult Limited</a
          >. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
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
              class="text-gray-500 hover:text-white bi bi-youtube"
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
            class="text-gray-500 hover:text-white"
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
          <a
            href="tel:+254110681999"
            target="_blank"
            class="text-gray-500 hover:text-white"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
          <a
            href="mailto:info@aegirconsult.systems"
            target="_blank"
            class="text-gray-500 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
              />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/aegir-consult-limited/about/"
            target="_blank"
            class="text-gray-500 hover:text-white"
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
  </footer>
</template>

<style scoped></style>
