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
import popupZnaki from './images/popup-znaki.jpg';
import popupBorba from './images/popup-borba.jpg';
import popupUborka from './images/popup-uborka.jpg';

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
          closePopup(popup);
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
const newsPopupButton = newsPopup.querySelector('.popup__news-wrapper');
const template = document.querySelector('.popup-news-template');

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

const subcategoryElements = subcategoryPopup.querySelectorAll('.problem_popup');

const removeSubcategoryElements = () => {
  subcategoryElements.forEach(elem => {
    elem.remove();
  });
};

const closePopup = (popupToClose) => {
  popupToClose.classList.remove('popup_opened');
};

const openPopup = (popupToOpen) => {
  popupToOpen.classList.add('popup_opened');
};

goBackToCategoriesButton.addEventListener('click', () => {
  removeSubcategoryElements();
  closePopup(subcategoryPopup);
});

goBackToSubcategoriesButton.addEventListener('click', () => {
  closePopup(resultPopup);
});

const cardList = document.querySelector('.card-list');
const createCardElement = (card, templateSelector) => {
  const element = document.querySelector('.card-template').content.cloneNode(true);
  element.querySelector('.card__heading').textContent = card.title;
  element.querySelector('.card__city').textContent = card.city;

  return element;
};

api.getNews()
  .then(res => {
  const resArray = Array.from(res);
  resArray.forEach((card) => {
    const cardElement = createCardElement(card);
    const backgroundCard = cardElement.querySelector(".card");

    backgroundCard.style.backgroundImage = `linear-gradient(1turn,#191919,#000 .01%,hsla(0,0%,62%,0) 82.21%),
    url(${card.link})`;

    backgroundCard.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("card")) {
        getCardElement(card);
        newsPopup.classList.add("popup_opened");
      }
    });

    const newsLikeButton = cardElement.querySelector(".card__like-button");
    let count = cardElement.querySelector(".card__like-counter").textContent;
    newsLikeButton.addEventListener("click", function () {
      newsLikeButton.classList.toggle("card__like-button_active");
      if (newsLikeButton.classList.contains("card__like-button_active")) {
        count = Number(count) + 1;
      } else {
        count = Number(count) - 1;
      }
      cardElement.querySelector(".card__like-counter").textContent = count;
    });

    cardList.append(cardElement);
  });

    newsPopupButton.addEventListener('click', function () {
      newsPopup.classList.remove('popup_opened');
    })

    const getCardElement = (card) => {
      const newsName = newsPopup.querySelector('.popup__heading');
      const newsInfo = newsPopup.querySelector('.popup__news-info');
      const newsCity = newsPopup.querySelector('.popup__news-city');
      newsName.textContent = card.title;
      newsInfo.textContent = card.description;
      newsCity.textContent = card.city;
      addPopupImage(card);
    }
  }
    )
  .catch(err => console.log(err))
;

function addPopupImage(card) {
  const newsPopupImage = newsPopup.querySelector('.popup__news-image');
  if (card.id == "5fe38d0d1b8497bea49b2772") {
    newsPopupImage.src = popupZnaki;
  }
  else if (card.id == "5fe38dac1b8497bea49b2773") {
    newsPopupImage.src = popupBorba;
  }
  else if (card.id == "5fe38dda1b8497bea49b2774") {
    newsPopupImage.src = popupUborka;
  }
}

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
  openPopup(subcategoryPopup);
};


const backToMainPageButton = resultPopup.querySelector('.popup__go-to-main-button');
const poemField = resultPopup.querySelector('.popup__text');
const arrowNextImage = arrowNext.querySelector('.popup__poem-button-icon');
const arrowPrevImage = arrowPrev.querySelector('.popup__poem-button-icon');

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
    poemField.innerHTML = poems[click];
  };

  let arrowPrevListener = (evt) => {
    evt.preventDefault();
    click--;
    toggleRightArrowState(click, poems);
    toggleLeftArrowState(click, poems);
    poemField.innerHTML = poems[click];
  };

  //объявляем функцию, которая отвечает за сосрояние стрелочки направо

  const toggleRightArrowState = (click, poems) => {
    if (click === poems.length - 1) {
      arrowNextImage.src = arrowNextInactive;
      arrowNext.removeEventListener('click', arrowNextListener);
    } else {
      arrowNextImage.src = arrowNextActive;
      arrowNext.addEventListener('click', arrowNextListener);
    };
  };

  //объявляем функцию, которая отвечает за сосрояние стрелочки налево

  const toggleLeftArrowState = (click, poems) => {
    if (click === 0) {
      arrowPrevImage.src = arrowPrevInactive;
      arrowPrev.removeEventListener('click', arrowPrevListener);
    } else {
      arrowPrevImage.src = arrowPrevActive;
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
      closePopup(popup);
    });
    removeSubcategoryElements();
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

  openPopup(resultPopup);

};

categoriesList.forEach(category => {
  const categoryCard = new InitialCategories(category.name, category.src, category.subcategories, '.problem-template', createSubcategoryPopup);
  problemList.append(categoryCard.createCategory());
});

