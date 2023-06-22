<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { $locomotiveScroll } = useNuxtApp()

const animation = ref()
const smoothscroll = ref()
const locoScroll = ref()

onMounted(() => {
  const scrollEl = document.querySelector('[data-scroll-container]')

  locoScroll.value = new $locomotiveScroll({
    el: scrollEl,
    smooth: true,
    multiplier: 0.7,
    offset: ['30%', 0],
    lerp: 0.05,
    reloadOnContextChange: true,
    smartphone: {
      breakpoint: 0,
    },
    // for tablet smooth
    tablet: { smooth: true },
    // for mobile
    smartphone: { smooth: true }
  })

  locoScroll.value.on('scroll', ScrollTrigger.update)

  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.value.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.value.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },

    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed"
  })

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.value.update());
  ScrollTrigger.refresh()
  ScrollTrigger.defaults({ scroller: ".smooth-scroll" })


  // RUN ANIMATIONS ON SCROLL
  const animateFrom = (elem, direction) => {
    direction = direction || 1;
    var x = 0,
      y = direction * 100;
    if (elem.classList.contains("reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
      // markers: true
    });
  }

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  }

  // window.addEventListener("DOMContentLoaded", () => {

  gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      // markers: true,
      onEnter: () => { animateFrom(elem) },
      onEnterBack: () => { animateFrom(elem, -1) },
      onLeave: () => { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
  // });

})


onUnmounted(() => {
  locoScroll.value.revert()
})

</script>

<template>
  <div class="relative p-0">
    <header>
      <NavBar />
    </header>
    <Scroll />
    <div class="smooth-scroll max-w-8xl mx-auto" data-scroll-container>
      <main>
        <slot />
      </main>
      <footer class="left-0 bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  </div>
</template>


<style scoped></style>