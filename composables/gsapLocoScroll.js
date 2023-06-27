// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// export default function useGsapLocalScrcoll() {
//   const locoScroll = ref()

//   const scrollerGsapLoco =
//     setTimeout(async () => {
//       console.log('MOUNTED ****************************')
//       const scrollEl = document.querySelector('[data-scroll-container]')

//       locoScroll.value = new $locomotiveScroll({
//         el: scrollEl,
//         smooth: true,
//         multiplier: 0.55,
//         offset: ['30%', 0],
//         lerp: 0.07,
//         reloadOnContextChange: true,
//         smartphone: {
//           breakpoint: 0,
//         },
//         // for tablet smooth
//         tablet: { smooth: true },
//         // for mobile
//         smartphone: { smooth: true }
//       })

//       locoScroll.value.on('scroll', ScrollTrigger.update)
//       // locoScroll.value.on('scroll', ScrollTrigger.refresh())

//       ScrollTrigger.scrollerProxy(".smooth-scroll", {
//         // scrollTop(value) {
//         //   return arguments.length
//         //     ? locoScroll.value.scrollTo(value, { duration: 0, disableLerp: true })
//         //     : locoScroll.value.scroll.instance.scroll.y;
//         // },
//         scrollTop(value) {
//           // @ts-ignore
//           if (locoScroll.value) {
//             // @ts-ignore
//             //console.log(locoScroll.value.scrollTo(value, 0, 0), 'aa', locoScroll.value.scroll.instance.scroll.y);
//             return arguments.length
//               // @ts-ignore
//               ? locoScroll.value.scrollTo(value, 0)
//               // @ts-ignore
//               : locoScroll.value.scroll.instance.scroll.y;
//           }
//           return null;
//         },
//         getBoundingClientRect() {
//           return {
//             top: 0,
//             left: 0,
//             width: window.innerWidth,
//             height: window.innerHeight
//           };
//         },

//         pinType: document.querySelector(".smooth-scroll").style.transform
//           ? "transform"
//           : "fixed"
//       })

//       // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
//       ScrollTrigger.addEventListener("refresh", () => locoScroll.value.update());
//       ScrollTrigger.refresh()
//       ScrollTrigger.defaults({ scroller: ".smooth-scroll" })

//       // RUN ANIMATIONS ON SCROLL
//       const animateFrom = (elem, direction) => {
//         direction = direction || 1;
//         var x = 0,
//           y = direction * 100;
//         if (elem.classList.contains("reveal_fromLeft")) {
//           x = -100;
//           y = 0;
//         } else if (elem.classList.contains("reveal_fromRight")) {
//           x = 100;
//           y = 0;
//         }
//         elem.style.transform = "translate(" + x + "px, " + y + "px)";
//         elem.style.opacity = "0";
//         gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
//           duration: 1.25,
//           x: 0,
//           y: 0,
//           autoAlpha: 1,
//           ease: "expo",
//           overwrite: "auto",
//           // markers: true
//         });
//       }

//       const hide = (elem) => {
//         gsap.set(elem, { autoAlpha: 0 });
//       }

//       // window.addEventListener("DOMContentLoaded", () => {

//       gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
//         hide(elem); // assure that the element is hidden when scrolled into view

//         ScrollTrigger.create({
//           trigger: elem,
//           // markers: true,
//           onEnter: () => { animateFrom(elem) },
//           onEnterBack: () => { animateFrom(elem, -1) },
//           onLeave: () => { hide(elem) } // assure that the element is hidden when scrolled into view
//         });
//       });
//       // });

//     }, 100)

//   return {
//     scrollerGsapLoco
//   }


// }