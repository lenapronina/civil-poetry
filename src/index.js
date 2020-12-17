import { mySwiper, animateTicker } from './utils/utils.js'
import './styles/index.css';

// пока так сделала прокрутку по клику, потом может перепишем на что-то получше
const arrowBottom = document.querySelector('.hello__arrow-bottom');
const problemsList = document.querySelector('.problems-list');

//элементы для бегущей строки (пока для одной, потом в класс перепишу)
const tickerContainer = document.querySelector('.ticker');
const tickerLine = tickerContainer.querySelector('.ticker__line');

animateTicker('.ticker', '.ticker__line', 10000);

arrowBottom.addEventListener('click', () => {
  problemsList.scrollIntoView();
});

