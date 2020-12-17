import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Pagination]);

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    draggable: true,
  },
  spaceBetween: 1,

  // width: 320,
  // height: 238,
});

const animateTicker = (containerSelector, innerElementSelector, duration) => {
  const outerElement = document.querySelector(containerSelector);
  const innerEl = outerElement.querySelector(innerElementSelector);
  const innerWidth = innerEl.offsetWidth;
  const cloneEl = innerEl.cloneNode(true);
  outerElement.appendChild(cloneEl);

  let start = performance.now();
  let progress;
  let translateX;

  requestAnimationFrame(function step(now) {
    progress = (now - start) / duration;

    if (progress > 1) {
      progress %= 1;
      start = now;
    }

    translateX = innerWidth * progress;

    innerEl.style.transform = `translate(-${translateX}px, 0 )`;
    cloneEl.style.transform = `translate(-${translateX}px, 0 )`;
    requestAnimationFrame(step);
  });
}

export { mySwiper, animateTicker};
