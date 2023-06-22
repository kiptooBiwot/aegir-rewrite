<script setup>
import equipment1 from '~/assets/images/services/drone_equipmt.jpg'
import geoData from '~/assets/images/services/geo_data.jpg'
import enterpriseSys from '~/assets/images/services/enterprise_systems.jpg'
import locationIntelligence1 from '~/assets/images/services/location_intelligence.jpg'
import sysAudit from '~/assets/images/services/sys_audit.jpg'
import sysIntegration from '~/assets/images/services/sys_integration.jpg'

const services = ref([
  {
    title: 'Enterprise System Development',
    imageUrl: enterpriseSys,
    description:
      'Web and mobile applications afford modern business the flexibility and security of working from a common operating platform. We leverage industry-leading technologies to build custom web applications that suit your business needs, no matter your industry.'
  },
  {
    title: 'Location Intelligence',
    imageUrl: locationIntelligence1,
    description:
      'Business intelligence that leverages on location-based data will reveal hidden patterns and trends. Our multi-criteria analysis models can help you determine the most advantageous location for your next project site. Location intelligence allows for the operationalization of your data, processes and objectives for enhanced business analytics and decision support capabilities.'
  },
  {
    title: 'Geo-Data Services',
    imageUrl: geoData,
    description:
      'Leverage the power of location to determine where your customers are, assess landed property value changes, determine socio-economic wellbeing, and monitor land-use for value chain analysis needed in economic development. Our solutions cover Geo-AI data, aerial and satellite imagery and geo-analytical data.'
  },
  {
    title: 'Systems Integration',
    imageUrl: sysIntegration
  },
  {
    title: 'System Audit Services',
    imageUrl: sysAudit
  },
  {
    title: 'Equipment Supply',
    imageUrl: equipment1,
    description:
      'Extend your business capabilities by utilizing the right tools while in the field. We offer key hardware technologies such as GPS handheld devices, mapping drones, barcode scanners and more. We also provide training services for the use of the equipment and maintenance works.'
  }
],)

</script>

<template>
  <section class="wrapper h-screen overflow-hidden w-full bg-[#df9f1f]">
    <video loop class="absolute inset-0 w-full h-screen object-cover" autoplay>
      <source src="~/assets/videos/scroll_video.mp4">
    </video>
  </section>

  <div class="services-container absolute overflow-hidden inset-0 ">
    <h1 class="text-white text-5xl text-center font-bold py-16">
      Our Services
    </h1>
    <div ref="videoInfo" class="services-wrapper absolute overflow-y-hidden flex w-[600vw]">
      <div v-for="(service, index) in services" :key="index"
        class="service h-full space-y-10 mt-6 md:mt-10 lg:mt-16 overflow-y-hidden w-[100%]">
        <div class="">
          <!-- <img
                                            class="w-32 h-32 md:w-42 md:h-42 lg:w-56 lg:h-56 mx-auto object-cover rounded-3xl border-8 border-[#43b0f1]"
                                            :src="service.imageUrl" alt=""> -->
        </div>
        <div class=" w-full h-auto flex items-center justify-center">
          <div class="max-w-lg">
            <p class="text-lg lg:text-xl mr-5 text-white font-bold">
              {{ index + 1 }} / {{ services.length }}.
            </p>
            <h2 class="text-xl md:text-4xl lg:text-6xl pb-2 text-white font-medium">
              {{ service.title }}
            </h2>
          </div>
        </div>
        <!-- <div class="flex items-baseline w-full justify-center">
                                        <p class="text-lg lg:text-xl mr-5 text-white font-bold">
                                          {{ index + 1 }} / {{ services.length }}.
                                        </p>
                                        <h2 class="text-xl md:text-4xl lg:text-5xl pb-2 text-white font-medium">
                                          {{ service.title }}
                                        </h2>
                                      </div> -->
      </div>
    </div>
  </div>
</template>


<style scoped></style>