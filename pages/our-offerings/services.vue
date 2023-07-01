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

const services = ref([
  {
    title: 'System Development',
    description:
      'Web and mobile applications afford modern business the flexibility and security of working from a common operating platform. We leverage industry-leading technologies to build custom web applications that suit your business needs, no matter your industry.'
  },
  {
    title: 'Location Intelligence',
    description:
      'Business intelligence that leverages on location-based data will reveal hidden patterns and trends. Our multi-criteria analysis models can help you determine the most advantageous location for your next project site. Location intelligence allows for the operationalization of your data, processes and objectives for enhanced business analytics and decision support capabilities.'
  },
  {
    title: 'Geo-Data Services',
    description:
      'Leverage the power of location to determine where your customers are, assess landed property value changes, determine socio-economic wellbeing, and monitor land-use for value chain analysis needed in economic development. Our solutions cover Geo-AI data, aerial and satellite imagery and geo-analytical data.'
  },
  // {
  //   title: 'Systems Integration'
  //   // description:
  //   //   'Leverage the power of location to determine where your customers are, assess landed property value changes, determine socio-economic wellbeing, and monitor land-use for value chain analysis needed in economic development. Our solutions cover Geo-AI data, aerial and satellite imagery and geo-analytical data.'
  // },
  // {
  // title: 'Systsem Audit Services'
  // description:
  //   'Leverage the power of location to determine where your customers are, assess landed property value changes, determine socio-economic wellbeing, and monitor land-use for value chain analysis needed in economic development. Our solutions cover Geo-AI data, aerial and satellite imagery and geo-analytical data.'
  // },
  {
    title: 'Equipment Supply',
    description:
      'Extend your business capabilities by utilizing the right tools while in the field. We offer key hardware technologies such as GPS handheld devices, mapping drones, barcode scanners and more. We also provide training services for the use of the equipment and maintenance works.'
  }
])

</script>

<template>
  <div class="h-auto bg-slate-50">
    <div class="w-full h-[350px] bg-[#f1f1e6] bg-[url('@/assets/images/services.jpg')] object-bottom py-5 relative">
      <div class="absolute inset-0 bg-[#000] bg-opacity-20 z-0"></div>
    </div>
    <div class="max-w-3xl mx-auto mb-20 pl-12 pr-7 md:px-0 main-content">
      <div class="py-10">
        <h4 class=" small-heading uppercase font-display tracking-widest text-[#df9f1f] font-bold">Our Offerings
        </h4>
        <h1 class="font-display font-bold text-5xl">Services</h1>
      </div>
      <div class=" text-xl text-gray-600">
        <p>
          We are committed to providing quality professional services to our
          customers. Our team has relevant experience to service different
          industries thereby ensuring we deliver a digital first approach to
          business.
        </p>
      </div>
    </div>

    <!-- SERVICES HERE! -->
    <div class="pb-10">
      <div class="w-full h-auto px-6 md:px-20 -z-50">
        <div v-for="(service, index) in services" :key="index"
          class="services-section inset-0 md:flex w-full p-8 border-b last:border-b-0 mb-5">
          <div class="large-number text-[110px] md:text-[180px] leading-none font-medium text-slate-300">
            0{{ index + 1 }}.
          </div>
          <div class="w-full h-full justify-center ml-2 space-y-6 items-center">
            <h2 class="large-title font-display text-gray-700 text-5xl">
              {{ service.title }}
            </h2>
            <p class="main-text">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

