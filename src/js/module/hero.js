import { gsap } from "gsap";

export function heroAnim() {
  setTimeout(() => {
    // 初回だけページ表示1秒後に発火
    bgAnim();
    setInterval(bgAnim, 5000);
  }, 1000);
}

function bgAnim() {
  const bgItems = document.querySelectorAll('.hero__bg-item');
  let activeNum = [...bgItems].indexOf(document.querySelector('.hero__bg-item.is-active'));
  let nextNum = activeNum === bgItems.length - 1 ? 0 : activeNum + 1;

  const activeItemTl = gsap.timeline();
  activeItemTl.to(bgItems[activeNum], {
    duration: 1.5,
    xPercent: -100,
    rotateY: 90,
    ease: 'Power4.easeIn',
    onComplete: () => {
      bgItems[activeNum].classList.remove('is-active');
    }
  });

  const nextItemTl = gsap.timeline();
  nextItemTl.set(bgItems[nextNum], {
    zIndex: 1,
    scale: 1.5,
  }).to(bgItems[nextNum], {
    delay: .7,
    duration: 1.5,
    ease: 'Power1.easeOut',
    scale: 1,
    onComplete: () => {
      bgItems[nextNum].classList.add('is-active');
    }
  });

  const tl = gsap.timeline({
    onComplete() {
      activeNum = nextNum;
      nextNum = activeNum === bgItems.length - 1 ? 0 : activeNum + 1;
      gsap.set(bgItems, {
        clearProps: 'all',
      });
    }
  });

  tl.add(activeItemTl, 0);
  tl.add(nextItemTl, 0);
}
