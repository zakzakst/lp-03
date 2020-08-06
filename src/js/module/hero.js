import { gsap } from "gsap";

export function heroAnim() {
  splitTextBySpan();
  showWords();
  const testBtn = document.getElementById('js-test');
  setInterval(bgAnim, 5000);
}

function splitTextBySpan() {
  const heroWords = document.querySelectorAll('.hero__text-word');
  [...heroWords].forEach(wordEl => {
    wordEl.innerHTML = wordEl.textContent.replace(/(.)/g, '<span>$1</span>');
  });
}

function showWords() {
  const letters = document.querySelectorAll('.hero__text-word > span');
  let count = 0;
  const showLetter = (letter) => {
    setTimeout(() => {
      letter.classList.add('is-animated');
      count++;
      if(count < letters.length) {
        showLetter(letters[count]);
      }
    }, 100);
  }
  const tl = gsap.timeline({
    onComplete: () => {
      showLetter(letters[0]);
    }
  });
  tl.set('.hero__text-word', {
    opacity: 1,
  });
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
      console.log(bgItems[activeNum]);
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
      console.log(bgItems[nextNum]);
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
