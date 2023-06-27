<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { $locomotiveScroll } = useNuxtApp()

const animation = ref()
const smoothscroll = ref()
const locoScroll = ref()

onMounted(() => {

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
      // scroller: '[data-scroll-container]',
      // markers: true,
      onEnter: () => { animateFrom(elem) },
      onEnterBack: () => { animateFrom(elem, -1) },
      onLeave: () => { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });

})


// onUnmounted(() => {
//   console.log('UNMOUNTED ****************************')
//   if (locoScroll.value) {
//     ScrollTrigger.removeEventListener('refresh', locoScroll.value.update())
//     locoScroll.value.destroy()
//     locoScroll.value = undefined
//   }

//   console.log('UNMOUNTED LocoSCroll.value: ', locoScroll.value);
//   // locoScroll.value.revert()
// })

</script>

<template>
  <div class=" relative p-0 overflow-x-hidden">
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