<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const { $locomotiveScroll } = useNuxtApp()

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const locoScroll = ref()

// Cookie Control
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions
} = useCookieControl()

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      (!previous?.includes('google-analytics') &&
        current?.includes('google-analytics'))
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true }
)



// function setVh() {
//   const windowHeight = window.innerHeight;
//   gsap.set(document.documentElement, { '--vh': `${windowHeight / 100}px` });
// }

// function disableScrollRestoration() {
//   if (history.scrollRestoration) {
//     history.scrollRestoration = 'manual';
//   }
// }

// onMounted(() => {
//   $smoothScroll.disable();
//   setVh()
//   disableScrollRestoration()
//   $smoothScroll.enable()
//   window.addEventListener('resize', setVh);
// })


// onMounted(() => {
//   // setTimeout(async () => {
//   console.log('MOUNTED ****************************')
//   // locoScroll.value = null
//   const scrollEl = document.querySelector('[data-scroll-container]')

//   locoScroll.value = new $locomotiveScroll({
//     el: scrollEl,
//     smooth: true,
//     multiplier: 0.55,
//     offset: ['30%', 0],
//     lerp: 0.07,
//     reloadOnContextChange: true,
//     smartphone: {
//       breakpoint: 0,
//     },
//     // for tablet smooth
//     tablet: { smooth: true },
//     // for mobile
//     smartphone: { smooth: true }
//   })

//   locoScroll.value.on('scroll', ScrollTrigger.update)
//   // locoScroll.value.on('scroll', ScrollTrigger.refresh())

//   // console.log('LOCOSCROLL OBJECT', locoScroll);

//   ScrollTrigger.scrollerProxy(locoScroll.value.el, {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.value.scrollTo(value, { duration: 0, disableLerp: true })
//         : locoScroll.value.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight
//       };
//     },

//     pinType: locoScroll.value.el.style.transform
//       ? "transform"
//       : "fixed"
//   })

//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.value.update());
//   ScrollTrigger.refresh()
//   ScrollTrigger.defaults({ scroller: ".smooth-scroll" })


//   // });

//   // }, 100)


// })

// onBeforeUnmount(() => {
//   console.log('*****************BEFORE UNMOUNT! **************************');
//   window.removeEventListener('resize', setVh)

// })

</script>


<template>
  <KeepAlive>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <CookieControl locale="en" />
    </div>
  </KeepAlive>
</template>

<style>
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #64748b #111827;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #64748b;
  border-radius: 60px;
}

*::-webkit-scrollbar-thumb {
  background-color: #111827;
  border-radius: 20px;
  border: 3px solid #111827;
}
</style>