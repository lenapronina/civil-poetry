import './styles/index.css';
import { animateTicker } from './utils/utils.js';
import claimList from './datasets/claims.js';



const claimContainer = document.querySelector('.claim-list');
console.log(claimContainer)

function renderClaim (claimArray, container){
  claimArray.forEach( item => {
    const claimElement = document.querySelector('.claim-template').content.cloneNode(true);
    const claimImage = claimElement.querySelector('.claim__id');
    const claimHeader = claimElement.querySelector('.claim__cathegory');
    const claimPreview = claimElement.querySelector('.claim__verse');
    
    claimImage.src = item.image;
    claimHeader.textContent = item.cathegory;
    claimPreview.textContent = item.preview;
    
    container.append(claimElement);
  })
}

renderClaim(claimList.slice(0,3), claimContainer)

const moreClaimsButton = document.querySelector('.popular__button');
moreClaimsButton.addEventListener('click', ()=>{
  renderClaim(claimList.slice(3,6), claimContainer)
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

const categoryIcon = document.querySelectorAll('.problem');

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
    });
});

goBackToCategoriesButton.addEventListener('click', () => {
    subcategoryPopup.classList.remove('popup_opened');
});

goBackToSubcategoriesButton.addEventListener('click', () => {
    resultPopup.classList.remove('popup_opened');
});

categoryIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    subcategoryPopup.classList.add('popup_opened');
  });
});