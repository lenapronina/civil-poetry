import { mySwiper } from './utils/utils.js'
import './styles/index.css';

// пока так сделала прокрутку по клику, потом может перепишем на что-то получше
const arrowBottom = document.querySelector('.hello__arrow-bottom');
const problemsList = document.querySelector('.problems-list');

arrowBottom.addEventListener('click', () => {
  problemsList.scrollIntoView();
});

