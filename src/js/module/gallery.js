import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function galleryAnim() {
  const galleryEl = document.getElementById('js-gallery');
  if(!galleryEl) return;

  ScrollTrigger.create({
    trigger: galleryEl,
    start: "top 70%",
    onEnter: self => {
      showGalleryItems();
      self.kill();
    }
  });
}

function showGalleryItems() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  [...galleryItems].forEach((el, index) => {
    const delayTime = 200;
    const delay = delayTime * (Math.floor(index / 4) + index % 4);
    setTimeout(() => {
      el.classList.add('is-animated');
    }, delay);
  });
}
