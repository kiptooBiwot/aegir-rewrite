<script setup>
import gsap from 'gsap'

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

const products = ref([
  {
    icon: 'M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 14v2h2v-2H4zM18 4v2h2V4h-2zm0 14v2h2v-2h-2z',
    title: 'SharePoint Intranets'
  },
  {
    icon: 'M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z',
    title: 'Geo-Portals'
  },
  {
    icon: 'M5 3v16h16v2H3V3h2zm14.94 2.94l2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3 3.94-3.94z',
    title: 'BI Workspaces'
  },
  {
    icon: 'M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z',
    title: 'Customer Relationship Management'
  },
  {
    icon: 'M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z',
    title: 'Visitor Management Systems'
  },
  {
    icon: 'M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm4 13a4 4 0 1 1 8 0H8zm4-5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',
    title: 'Leave Management Systems'
  },
  {
    icon: 'M11 7h2v10h-2V7zm4 4h2v6h-2v-6zm-8 2h2v4H7v-4zm8-9H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z',
    title: 'Performance Management Systems'
  },
  // {
  //   icon: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z',
  //   title: 'Payroll Systems'
  // },
  {
    icon: 'M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943z',
    title: 'Partner Portals'
  },
  // {
  //   icon: 'M9.55 11.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5zm.45 8.248V16.4c0-.488.144-.937.404-1.338a6.473 6.473 0 0 0-5.033 1.417A8.012 8.012 0 0 0 10 19.749zM4.453 14.66A8.462 8.462 0 0 1 9.5 13c1.043 0 2.043.188 2.967.532.878-.343 1.925-.532 3.033-.532 1.66 0 3.185.424 4.206 1.156a8 8 0 1 0-15.253.504zm14.426 1.426C18.486 15.553 17.171 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a7.996 7.996 0 0 0 6.88-3.914zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z',
  //   title: 'Community Portals'
  // },
  // {
  //   icon: 'M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z',
  //   title: 'Tenancy Management System'
  // },
  {
    icon: 'M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z',
    title: 'Contract Management Systems'
  },
  // {
  //   icon: 'M20 7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9h-2V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zM17.05 19.548a3.017 3.017 0 0 1 0-1.096l-1.014-.586 1-1.732 1.014.586c.278-.238.599-.425.95-.55V15h2v1.17c.351.125.672.312.95.55l1.014-.586 1 1.732-1.014.586a3.017 3.017 0 0 1 0 1.096l1.014.586-1 1.732-1.014-.586a2.997 2.997 0 0 1-.95.55V23h-2v-1.17a2.997 2.997 0 0 1-.95-.55l-1.014.586-1-1.732 1.014-.586zM20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  //   title: 'Mail Management Systems'
  // },
  {
    icon: 'M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19zm2-8h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2V7zm-4 0h2v2h-2V7z',
    title: 'Asset Management Systems'
  },
  {
    icon: 'M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2h2zm2 0h7V3.855L5 6.401V19zm14 0v-8.558l-5-1.667V19h5z',
    title: 'Facility Management Systems'
  },
  {
    icon: 'M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95V7zm2 6h4v-.285L18.992 10H17v3zm.5 6a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001zM7 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z',
    title: 'Fleet Tracking Systems'
  }
])


</script>

<template>
  <div class="bg-slate-100 pb-10">
    <div
      class="w-full h-[350px] bg-[#f1f1e6] bg-[url('@/assets/images/products.jpg')] object-cover object-bottom py-5 relative">
      <div class="absolute inset-0 bg-[#000] bg-opacity-20 z-0"></div>
    </div>

    <div class="max-w-4xl mx-auto py-10 space-y-7 my-10 pl-7 pr-16 lg:px-0 main-content">
      <div>
        <h4 class=" small-heading uppercase font-display tracking-widest text-[#df9f1f] font-bold">What tech do you need?
        </h4>
        <h1 class="font-display font-bold text-5xl">Our Products</h1>
      </div>
      <p class="text-xl">
        At Aegir we strive to deliver high quality product solutions for our
        clients. Our Solutions a tailored for key industries and are
        enterprise-ready to ensure easier roll-out and support.
      </p>
    </div>
    <!-- GRID PRODUCT OFFERINGS -->
    <div class="flex flex-col w-[100%] space-y-5 lg:space-y-0">
      <div class="service-one lg:flex w-full h-auto lg:h-100">
        <div class="image1-part inset-0 w-full lg:w-1/2 h-full">
          <img class="object-cover object-center w-full h-80" src="@/assets/images/infrastructure.jpg" alt="">
        </div>
        <div
          class="inset-0 w-full lg:w-1/2 h-full lg:justify-center lg:text-center items-center space-y-5 mt-5 lg:mt-0 pl-12 pr-7 md:p-10">
          <h3 class="large-title1 font-display text-3xl font-bold text-gray-700">
            Infrastructure Location Intelligence Systems
          </h3>
          <p class="main-text1">
            Infrastructure development plays a pivotal role in the
            socio-economic development of a country. Our ILIS solutions are
            custom designed to handle business processes tied to the technical
            services required to fulfill an organization's key mandate of
            infrastructure development.
          </p>
        </div>
      </div>
      <div class="service-two lg:flex w-full h-auto lg:h-100">
        <div
          class="w-full lg:w-1/2 h-full justify-center space-y-5 lg:text-center items-center p-2 mt-5 lg:mt-0 pl-12 pr-7 md:p-10 order-2 lg:order-2">
          <h3 class="large-title2 font-display text-3xl font-bold text-gray-700">
            Content Management Intranet Portals
          </h3>
          <p class="main-text2">
            Our CMS are powerhouse workbench solutions that are designed and
            developed to serve an entire Organization by digitizing their core
            business needs into one common operating platform. From the Intranet
            solution users can further extend their daily support processes
            while ensuring they can work efficiently to achieve the company's
            performance goals.
          </p>
        </div>
        <div class="inset-0 w-full lg:w-1/2 h-full order-1 lg:order-2">
          <img class="image2-part object-cover object center w-full h-80" src="@/assets/images/internet_portals.jpg"
            alt="">
        </div>
      </div>
      <div class="service-three lg:flex w-full h-auto lg:h-100 space-y-10">
        <div class="image3-part inset-0 w-full lg:w-1/2 h-full">
          <img class="object-cover object center w-full h-100" src="@/assets/images/real_estate.jpg" alt="">
        </div>
        <div
          class="w-full lg:w-1/2 h-full justify-center space-y-5 lg:text-center items-center mt-5 md:mt-0 pl-12 pr-7 lg:p-10">
          <h3 class="large-title3 font-display text-3xl font-bold text-gray-700">
            Tenancy Management System
          </h3>
          <p class="main-text3">
            Our enterprise solution allows users to manage apartments, tenancy
            agreements and monthly billing with automated reports and bank
            integration. The Solution provides a bridge between landlords and
            tenants to better harmonize all activities tied to property tenancy,
            use and maintenance.
          </p>
        </div>
      </div>
      <div class="service-four lg:flex w-full h-auto lg:h-100 space-y-10">
        <div
          class="w-full lg:w-1/2 h-full justify-center space-y-5 lg:text-center items-center mt-5 lg:mt-0 pl-12 pr-7 lg:p-10 order-last lg:order-1">
          <h3 class="large-title4 font-display text-3xl font-bold text-gray-700">
            Land Administration and Management System
          </h3>
          <p class="main-text4">
            Our solution carters for land administration and enterprise mapping
            for land and landed property to ensure businesses have an up-to-date
            cadastre and associated transactional information on change of use
            as well as ownership in a centralized, secure and report driven
            system.
          </p>
        </div>
        <div class="image4-part inset-0 w-full lg:w-1/2 h-full order-first lg:order-2">
          <img class="object-cover object center w-full h-80" src="@/assets/images/land_mgt.jpg" alt="">
        </div>
      </div>
    </div>

    <!-- More Services -->
    <div class="w-[100%] h-auto my-10 px-8 md:px-14 lg:px-20 py-10">
      <h2 class="font-bold font-display  text-4xl py-10 text-center">
        More Products
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(product, index) in products" :key="index" class="text-center shadow-xl bg-white p-10">
          <div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mx-auto fill-[#df9f1f]" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" :d="product.icon" />
              </svg>
            </div>
            <div class="font-display font-bold text-xl mt-6">
              {{ product.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


