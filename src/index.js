import './styles/index.css';

import { animateTicker } from './utils/utils.js';
import claimList from './datasets/claims.js';
import FormValidator from './components/FormValidator.js';
import InitialSubcategories from './components/InitialSubcategories.js';
import InitialCategories from './components/InicialCategories.js'
import { categoriesList } from './utils/constants.js';


import arrowNextInactive from './images/right-arrow-inactive.png';
import arrowPrevInactive from './images/left-arrow-inactive.png';
import arrowNextActive from './images/right-arrow.png';
import arrowPrevActive from './images/left-arrow.png';


const claimContainer = document.querySelector('.claim-list');
const popularText = document.querySelector('.popular__more');


function renderClaim(claimArray, container) {
  claimArray.forEach(item => {
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

    claimBlock.addEventListener('click', () => {
      if (claimClicked === false) {
        claimPreview.textContent = item.text;
        claimClicked = true;
        author.textContent = item.author
      } else {
        claimPreview.textContent = item.preview;
        claimClicked = false;
        author.textContent = ''
      }
    })
    container.append(claimElement);
  })
}

renderClaim(claimList.slice(0, 3), claimContainer)

const moreClaimsButton = document.querySelector('.popular__button');
moreClaimsButton.addEventListener('click', () => {
  renderClaim(claimList.slice(3, 6), claimContainer);
  popularText.textContent = "Чуть позже добавим еще новости!";
  moreClaimsButton.style.display = 'none';
})

// пока так сделала прокрутку по клику, потом может перепишем на что-то получше
const arrowBottom = document.querySelector('.hello__arrow-bottom');
const problemsList = document.querySelector('.problems-list');

//элементы для бегущей строки (пока для одной, потом в класс перепишу)
const tickerContainer = document.querySelector('.ticker');
const tickerLine = tickerContainer.querySelector('.ticker__line');

const tickerArray = document.querySelectorAll('.ticker')

tickerArray.forEach(item => {
  animateTicker(item, '.ticker__line', 10000);
});


arrowBottom.addEventListener('click', () => {
  problemsList.scrollIntoView();
});

//popop eventListeners

const categoryIcons = Array.from(document.querySelectorAll('.problem'));
const resultPopup = document.querySelector('.popup_result');
const subcategoryPopup = document.querySelector('.popup_subcategories');
const subcategoryPopupHeading = subcategoryPopup.querySelector('.popup__heading');
const goBackToCategoriesButton = document.querySelector('.popup__wrapper_subcategories');
const goBackToSubcategoriesButton = document.querySelector('.popup__wrapper_result');
const subcategoriesContainer = document.querySelector('.problems-list__wrapper_popup');

goBackToCategoriesButton.addEventListener('click', () => {
  subcategoryPopup.querySelectorAll('.problem_popup').forEach(elem => {
    elem.remove();
  });
  subcategoryPopup.classList.remove('popup_opened');

});

goBackToSubcategoriesButton.addEventListener('click', () => {
  resultPopup.classList.remove('popup_opened');
  formValidator.resetValidation();
});

const newsCards = Array.from(document.querySelectorAll('.card'));
const newsPopup = document.querySelector('.popup_news');
const newsPopupButton = newsPopup.querySelector('.button');

newsCards.forEach((card) => {
  card.addEventListener('click', () => {
    newsPopup.classList.add('popup_opened');
  })
})

newsPopupButton.addEventListener('click', function () {
  newsPopup.classList.remove('popup_opened');
})

//enable form validation

const formValidator = new FormValidator();
formValidator.enableValidation();

//переключатель стихотворений

// const poemSwitchToPrevButton = document.querySelector('.popup__poem-button_prev');
// const poemSwitchToNextButton = document.querySelector('.popup__poem-button_next');

// poemSwitchToNextButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   alert('Стихотворение переключится на следующее');
// });

// poemSwitchToPrevButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   alert('Стихотворениме переключится на предыдущее');
// });

//категории

const problemList = document.querySelector('.problems-list__wrapper');
const subcategoriesList = document.querySelector('.problems-list__wrapper_popup');
const arrowNext = resultPopup.querySelector('.popup__poem-button_next');
const arrowPrev = resultPopup.querySelector('.popup__poem-button_prev');

const toggleRightArrowState = (click, poems) => {
  if (poems[click + 1] == undefined) {
    arrowNext.querySelector('.popup__poem-button-icon').src = arrowNextInactive;
  } else {
    arrowNext.querySelector('.popup__poem-button-icon').src = arrowNextActive;
  }
};

const toggleLefttArrowState = (click, poems) => {
  if (poems[click - 1] == undefined) {
    arrowPrev.querySelector('.popup__poem-button-icon').src = arrowPrevInactive;
  } else {
    arrowPrev.querySelector('.popup__poem-button-icon').src = arrowPrevActive;
  }
};

const createSubcategoryPopup = (subcategories, categoryName) => {
  subcategories.forEach(subcategory => {
    const subcategoryCard = new InitialSubcategories(subcategory.name, subcategory.poems, openResultPopup);
    subcategoriesList.append(subcategoryCard.createElement());
  });
  subcategoryPopupHeading.textContent = categoryName;
  subcategoryPopup.classList.add('popup_opened');
};

const openResultPopup = (poems) => {
  let click = 0;
  resultPopup.querySelector('.popup__text').innerHTML = poems[click];

  toggleRightArrowState(click, poems);
  toggleLefttArrowState(click, poems);

  arrowNext.addEventListener('click', (evt) => {
    evt.preventDefault();
    click++;
    toggleRightArrowState(click, poems);
    toggleLefttArrowState(click, poems);
    resultPopup.querySelector('.popup__text').innerHTML = poems[click];
  });

  arrowPrev.addEventListener('click', (evt) => {
    evt.preventDefault();
    click--;
    resultPopup.querySelector('.popup__text').innerHTML = poems[click];
    toggleRightArrowState(click, poems);
    toggleLefttArrowState(click, poems);
  });

  resultPopup.classList.add('popup_opened');
};

categoriesList.forEach(category => {
  const categoryCard = new InitialCategories(category.name, category.src, category.subcategories, '.problem-template', createSubcategoryPopup);
  problemList.append(categoryCard.createCategory());
});

class InitialPoem {
  constructor(poem) {
    this._poem = poem;
  }
}