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
import { Api } from './components/Api.js';
import PopupWithForm from './components/PopupWithForm.js'

// new Api instanse
const api = new Api({
  baseUrl: 'https://civil-poetry-app.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

const popupSuccess = document.querySelector('.popup_submit-success');
const popupAll = document.querySelectorAll('.popup');
const newsLink = document.querySelector('.popup__link');

const submitNewClaim = (claimProps) => {

  api.postNewClaim(claimProps)
    .then((res) => {
      popupSuccess.classList.add('popup_opened');
      newsLink.addEventListener('click', ()=>{
        popupAll.forEach(popup => {
          popup.classList.remove('popup_opened');
        })
      })
    })
    .catch(err => console.log(err))
}

const form = new PopupWithForm('.popup_result', submitNewClaim);
form.setEventListeners();



const claimContainer = document.querySelector('.claim-list');
const popularText = document.querySelector('.popular__more');

const resultPopup = document.querySelector('.popup_result');

const problemList = document.querySelector('.problems-list__wrapper');
const subcategoriesList = document.querySelector('.problems-list__wrapper_popup');
const arrowNext = resultPopup.querySelector('.popup__poem-button_next');
const arrowPrev = resultPopup.querySelector('.popup__poem-button_prev');

const subcategoryPopup = document.querySelector('.popup_subcategories');
const subcategoryPopupHeading = subcategoryPopup.querySelector('.popup__heading');
const goBackToCategoriesButton = document.querySelector('.popup__wrapper_subcategories');
const goBackToSubcategoriesButton = document.querySelector('.popup__wrapper_result');

const newsCards = Array.from(document.querySelectorAll('.card'));
const newsPopup = document.querySelector('.popup_news');
const newsPopupButton = newsPopup.querySelector('.button');


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

goBackToCategoriesButton.addEventListener('click', () => {
  subcategoryPopup.querySelectorAll('.problem_popup').forEach(elem => {
    elem.remove();
  });
  subcategoryPopup.classList.remove('popup_opened');

});

goBackToSubcategoriesButton.addEventListener('click', () => {
  resultPopup.classList.remove('popup_opened');
});

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

//категории


const createSubcategoryPopup = (subcategories, categoryName) => {
  subcategories.forEach(subcategory => {
    const subcategoryCard = new InitialSubcategories(subcategory.name, subcategory.poems, openResultPopup);
    subcategoriesList.append(subcategoryCard.createElement());
  });
  subcategoryPopupHeading.textContent = categoryName;
  subcategoryPopup.classList.add('popup_opened');
};


const backToMainPageButton = resultPopup.querySelector('.popup__go-to-main-button');

//настраиваем и открываем попап со стихотворениями
//принимаем в функцию массив стихотворений по данной субкатегории и выстраиваем попап с результатом

const openResultPopup = (poems) => {
  formValidator.resetValidation();

  //объявляем переменную, которая будет считать клики по стрелочкам налево (+1) и направо (-1)
  //значения click соответствуют индексу стихотворения в массиве

  let click = 0;

  //объявляем переменные, в которые записана реакция на клик по стрелочкам. 

  let arrowNextListener = (evt) => {
    evt.preventDefault();
    click++;
    toggleRightArrowState(click, poems);
    toggleLeftArrowState(click, poems);
    resultPopup.querySelector('.popup__text').innerHTML = poems[click];
  };

  let arrowPrevListener = (evt) => {
    evt.preventDefault();
    click--;
    toggleRightArrowState(click, poems);
    toggleLeftArrowState(click, poems);
    resultPopup.querySelector('.popup__text').innerHTML = poems[click];
  };

  //объявляем функцию, которая отвечает за сосрояние стрелочки направо

  const toggleRightArrowState = (click, poems) => {
    if (click === poems.length - 1) {
      arrowNext.querySelector('.popup__poem-button-icon').src = arrowNextInactive;
      arrowNext.removeEventListener('click', arrowNextListener);
    } else {
      arrowNext.querySelector('.popup__poem-button-icon').src = arrowNextActive;
      arrowNext.addEventListener('click', arrowNextListener);
    }
  };

  //объявляем функцию, которая отвечает за сосрояние стрелочки налево

  const toggleLeftArrowState = (click, poems) => {
    if (click === 0) {
      arrowPrev.querySelector('.popup__poem-button-icon').src = arrowPrevInactive;
      arrowPrev.removeEventListener('click', arrowPrevListener);
    } else {
      arrowPrev.querySelector('.popup__poem-button-icon').src = arrowPrevActive;
      arrowPrev.addEventListener('click', arrowPrevListener);
    }
  };

  //вставляем в разметку первое стихотворение

  resultPopup.querySelector('.popup__text').innerHTML = poems[click];

  //объявляем eventListeners

  arrowNext.addEventListener('click', arrowNextListener);
  arrowPrev.addEventListener('click', arrowPrevListener);
  backToMainPageButton.addEventListener('click', () => {
    popupAll.forEach(popup => {
      popup.classList.remove('popup_opened');
    });
  });

  goBackToSubcategoriesButton.addEventListener('click', () => {
    resultPopup.classList.remove('popup_opened');
    arrowNext.removeEventListener('click', arrowNextListener);
    arrowPrev.removeEventListener('click', arrowPrevListener);
  });
  

  //переключаем состояние стрелочек на актуальное

  toggleRightArrowState(click, poems);
  toggleLeftArrowState(click, poems);


  //после всех этих настроек открываем попап

  resultPopup.classList.add('popup_opened');

};

categoriesList.forEach(category => {
  const categoryCard = new InitialCategories(category.name, category.src, category.subcategories, '.problem-template', createSubcategoryPopup);
  problemList.append(categoryCard.createCategory());
});