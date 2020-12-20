import './styles/index.css';

import { animateTicker } from './utils/utils.js';
import claimList from './datasets/claims.js';
import FormValidator from './FormValidator.js';

const claimContainer = document.querySelector('.claim-list');
const popularText = document.querySelector('.popular__more');


function renderClaim (claimArray, container){
  claimArray.forEach( item => {
    const claimElement = document.querySelector('.claim-template').content.cloneNode(true);
    const claimImage = claimElement.querySelector('.claim__id');
    const claimHeader = claimElement.querySelector('.claim__cathegory');
    const claimPreview = claimElement.querySelector('.claim__verse');
    const claimBlock = claimElement.querySelector('.claim');
    const author = claimElement.querySelector('.claim__author');
    
    claimImage.src = item.image;
    claimHeader.textContent = item.cathegory;
    claimPreview.textContent = item.preview;

    let claimClicked = false;
    
    claimBlock.addEventListener('click', ()=>{
      if(claimClicked === false){
        claimPreview.textContent = item.text;
        claimClicked = true;
        author.textContent =item.author
      } else {
        claimPreview.textContent = item.preview;
        claimClicked = false;
        author.textContent =''
      } 
    })
    container.append(claimElement);
  })
}

renderClaim(claimList.slice(0,3), claimContainer)

const moreClaimsButton = document.querySelector('.popular__button');
moreClaimsButton.addEventListener('click', ()=>{
  renderClaim(claimList.slice(3,6), claimContainer);
  popularText.textContent = "Чуть позже добавим еще новости!";
  moreClaimsButton.style.display = 'none';
})

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
const submitButton = document.querySelector('.popup__submit-button');

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


categoryIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    subcategoryPopup.classList.add('popup_opened');
  });
});

const newsCards = Array.from(document.querySelectorAll('.card'));
const newsPopup = document.querySelector('.popup_news');
const newsPopupButton = newsPopup.querySelector('.button');

newsCards.forEach((card) => {
  card.addEventListener('click', () => {
    newsPopup.classList.add('popup_opened');
  })
})

newsPopupButton.addEventListener('click', function() {
  newsPopup.classList.remove('popup_opened');
})

//enable form validation
const formValidator = new FormValidator();
formValidator.enableValidation();

//переключатель стихотворений
const poemSwitchToPrevButton = document.querySelector('.popup__poem-button_prev');
const poemSwitchToNextButton = document.querySelector('.popup__poem-button_next');

poemSwitchToNextButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  alert('Стихотворение переключится на следующее');
});

poemSwitchToPrevButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  alert('Стихотворениме переключится на предыдущее');
});
