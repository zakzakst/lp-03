import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function aboutBgAnim() {
  gsap.to('.about__bg', {
    scrollTrigger: {
      trigger: '.section-about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: .3,
      // scrub: true,
      // markers: true,
    },
    y: -500,
  });
}
