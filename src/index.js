import './styles/index.css';
import FormValidator from './FormValidator.js';
import { animateTicker } from './utils/utils.js'

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

//popop eventListener

const categoryIcons = Array.from(document.querySelectorAll('.problem'));
const subcategoryIcons = Array.from(document.querySelectorAll('.problem_popup'));
const resultPopup = document.querySelector('.popup_result');
const subcategoryPopup = document.querySelector('.popup_subcategories');
const goBackToCategoriesButton = document.querySelector('.popup__wrapper_subcategories');
const goBackToSubcategoriesButton = document.querySelector('.popup__wrapper_result');

categoryIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    subcategoryPopup.classList.add('popup_opened');
  });
});

subcategoryIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        resultPopup.classList.add('popup_opened');
        formValidator.resetValidation();
    });
});

goBackToCategoriesButton.addEventListener('click', () => {
    subcategoryPopup.classList.remove('popup_opened');
    
});

goBackToSubcategoriesButton.addEventListener('click', () => {
    resultPopup.classList.remove('popup_opened');
    formValidator.resetValidation();
});

//enable form validation
const formValidator = new FormValidator();
formValidator.enableValidation();


// form submit
