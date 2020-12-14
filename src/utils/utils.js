import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Pagination]);

var mySwiper = new Swiper('.swiper-container', {
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

export { mySwiper };
