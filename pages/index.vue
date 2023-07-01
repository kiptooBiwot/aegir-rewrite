<script setup>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const { $locomotiveScroll } = useNuxtApp()
// Locomotive scroll
// const scroll = new $locomotiveScroll()d


gsap.registerPlugin(ScrollTrigger)

definePageMeta({
  // title: 'Aegir Home Page',

})


const main = ref()
const tl = ref()
const ctx = ref()
const mySkew = ref()
const videoInfo = ref()
let locoScroll = ref()

const runSmoothScroll = () => {
  locoScroll.value = new $locomotiveScroll({
    el: document.querySelector('.smooth-scroll'),
    smooth: true,
    multiplier: 0.55,
    offset: ['30%', 0],
    lerp: 0.07,
    reloadOnContextChange: true,
    smartphone: {
      breakpoint: 0,
    },
    // for tablet smooth
    tablet: { smooth: true },
    // for mobile
    smartphone: { smooth: true }
  })
  console.log('LOCOSCROLL INDEX:', locoScroll.value);

  new ResizeObserver(() => locoScroll.value.update()).observe(document.querySelector("[data-scroll-container]"))

  locoScroll.value.on('scroll', ScrollTrigger.update)

  ScrollTrigger.scrollerProxy('.smooth-scroll', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.value.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.value.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  })

  ScrollTrigger.addEventListener('refresh', () => locoScroll.value.update())

  ScrollTrigger.refresh()
  new ResizeObserver(() => locoScroll.value.update()).observe(document.querySelector('[data-scroll-container]'))
}

onMounted(() => {
  // runSmoothScroll()
})

onMounted(() => {

  ctx.value = gsap.context((self) => {
    const smallHeading = self.selector?.('.small-heading')

    const tl = gsap.timeline()

    tl.from('.hero', {
      // opacity: 0,
      // x: '-100%',
      // duration: 0.5
      autoAlpha: 0
    })
      .from('.nav-bar', {
        opacity: 0,
        y: '-100%',
        duration: 1,
      })
      .from('.small-heading', {
        opacity: 0,
        y: 50,
        ease: 'easeInOut',
        duration: 1
      })
      .from('.large-heading', {
        opacity: 0,
        y: '-100%',
        ease: 'power2.inOut',
        duration: 1
      }, '<')
      .from('.hero-image', {
        opacity: 0,
        x: '100%',
        ease: 'power2.inOut',
        stagger: 0.1,
        duration: 1
      }, '<')
    // .from('.hero-button', {
    //   opacity: 0,
    //   y: '100%',
    //   ease: 'power2.inOut',
    //   duration: 1
    // }, '<=0.5')


    const tl1 = gsap.timeline()

    // tl1.to('.text-logo, .image-logo', {
    //   opacity: 0,
    //   // y: '-100%',
    //   // duration: 1,
    //   // scrub: 1,
    //   scrollTrigger: {
    //     trigger: '.small-heading',
    //     start: 'top 30%',
    //     end: 'top 0%',
    //     // duration: 2,
    //     ease: 'power2.inOut',
    //     scrub: 1,
    //     // markers: true
    //   }

    // })
    // .from('.image-logo', {
    //   opacity: 0,
    //   // y: '-100%',
    //   // duration: 1,
    //   // scrub: 1,
    //   scrollTrigger: {
    //     trigger: '.small-heading',
    //     start: 'top 30%',
    //     end: 'top 0%',
    //     // duration: 2,
    //     ease: 'power2.inOut',
    //     scrub: 1,
    //     // markers: true
    //   }

    // })

    // ABOUT SECTION Animation
    // const tl2 = gsap.timeline()

    // tl2.from('.about-section', {
    //   // y: '100%',
    //   opacity: 0,
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: '.about-section',
    //     start: 'top 80%',
    //     // end: 'top 40%',
    //     // ease: 'power2.inOut',
    //     // toggleActions: 'play none play none',
    //     // scrub: 4,
    //     // pin: '.about-section',
    //     // duration: 4,
    //     // end: 'top'
    //     markers: true
    //   }
    // })

    //   .from('.about-decoration', {
    //     x: '100%',
    //     opacity: 0,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: '.about-section',
    //       start: 'top 50%',
    //       scrub: true
    //     }
    //   }, '<')
    //   .from('.about-small-header', {
    //     y: '-50',
    //     // opacity: 0,
    //     duration: 2,
    //     scrollTrigger: {
    //       trigger: '.about-section',
    //       start: 'top 50%',
    //       scrub: true
    //     }
    //   }, '<')
    //   .from('.about-large-header', {
    // opacity: 0,
    //   y: '50',
    //     duration: 2,
    //       scrollTrigger: {
    //     trigger: '.about-section',
    //       start: 'top 50%',
    //         scrub: true
    //   }
    // }, '<')


    // SERVICES SECTION Animation
    // tl3 = gsap.timeline()

    // VERTICAL & HORIZONTAL SCROLLING
    const services = [...document.querySelectorAll('.service')]
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        pin: true,
        scrub: 1,
        end: () => window.innerWidth * services.length //videoInfo.offsetWidth // - innerWidth, //* services.length, // () => 400 * (services.length - 1), // this.$refs.videoInfo.offsetWidth, // '+=3200',
        // markers: true
      }
    })

    // const width = videoInfo.offsetWidth * services.length
    // console.log(`Offset Width: ${videoInfo.offsetWidth}`)
    // console.log(`Offset Width: ${window.innerWidth}`)
    // console.log(`Full Offset Width: ${width}`)

    scrollTimeline.to(services, {
      xPercent: -100 * (services.length - 1), // * (services.length - 1), // -100
      scrollTrigger: {
        trigger: '.services-wrapper',
        start: 'center center',
        pin: true,
        // horizontal: true,
        // pinSpacing:false,
        // markers: true,
        scrub: 3,
        // snap: 1 / (services.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: () => `+=${smallFactsContainer.offsetWidth}`
        end: () => window.innerWidth * services.length //videoInfo.offsetWidth // * services.length // 100 * (services.length - 1) // '+=3200' // 4320
      },
      x: () => '-600', // -500
      ease: 'none'
    })

    //  BUSINESS PARTNERS



    // SKEW ON SCROLL
    const digitalText = document.querySelectorAll('.digital-items')

    digitalText.forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          id: index,
          trigger: item,
          refreshPriority: -1,
          // markers: true
        }
      })

      let proxy = { skew: 0 }
      let skewSetter = gsap.quickSetter(item, "skewY", "deg")
      let clamp = gsap.utils.clamp(-30, 30) // Don't let skew go beyond these degrees

      // console.log('PROXY: ', proxy);

      ScrollTrigger.create({
        trigger: item,
        start: '0 100%',
        end: '100% 0',
        onUpdate: (self) => {
          let skew = clamp(self.getVelocity() / -400);
          // console.log('SKEW WITH CLAMP: ', skew);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.6,
              ease: "power2",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew)
            });
          }
        }
      });

    })

    // console.log(digitalText);

    gsap.set(".digital-text", { transformOrigin: "right center", force3D: true });
  });

})

onBeforeUnmount(() => {
  // locoScroll.value.destroy()
  ctx.value.revert() // <- Easy Cleanup!
})


useSeoMeta({
  title: 'Home | Aegir Consult',
  description: 'Index | We are a technology firm that deals in geo-informatics, information systems, system integration and geospatial technologies to both improve business efficacy and management operations',
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
  <!-- {{ $locomotiveScroll }} -->
  <!-- {{ $gscrollClass }} -->
  <main id="home" class="GScroll mx-auto bg-slate-100">
    <!-- <scroll>
      Welcome to Aeigr Consult
    </scroll> -->
    <div class="hero relative">
      <HomeHero />
    </div>
    <HomeAbout />
    <div class="relative">
      <HomeVideoScroll />
    </div>
    <HomePartners />
    <HomeDigitalFirst />
    <HomeCTA />
  </main>
</template>


<style scoped>
.hero {
  visibility: hidden;
}
</style>