import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function featureAnim() {
  showImages();
  parallaxText();
  parallaxDecos();
}

function showImages() {
  const featureImgEl = document.querySelectorAll('.feature__img');
  if(!featureImgEl.length) return;

  [...featureImgEl].forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 70%",
      onEnter: self => {
        el.classList.add('is-animated');
        self.kill();
      }
    });
  })

}

function parallaxText() {
  const featureItemEl = document.querySelectorAll('.feature__bg');
  if(!featureItemEl.length) return;

  [...featureItemEl].forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: .5,
        // scrub: true,
        // markers: true,
      },
      xPercent: (index, target) => {
        const bgLeft = target.classList.contains('feature__bg--left');
        return bgLeft ? 50 : -50;
      },
    });
  })
}

function parallaxDecos() {
  const featureImgWrapEl = document.querySelectorAll('.feature__img-wrapper');
  if(!featureImgWrapEl.length) return;

  [...featureImgWrapEl].forEach(el => {
    const decoEl = el.lastElementChild;
    gsap.to(decoEl.children, {
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        // scrub: true,
        // markers: true,
      },
      y: index => {
        return  - (index + 1) * 40;
      },
    });
  })
}
