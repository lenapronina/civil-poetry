import './styles/index.css';

import { generateId, animateTicker } from './utils/utils.js';
import FormValidator from './components/FormValidator.js';
import InitialSubcategories from './components/InitialSubcategories.js';
import InitialCategories from './components/InicialCategories.js'
import { categoriesList } from './utils/constants.js';

import { Claim } from './components/Claim.js';
import { Api } from './components/Api.js';

import { PopupWithForm } from './components/PopupWithForm.js'
import popupZnaki from './images/popup-znaki.jpg';
import popupBorba from './images/popup-borba.jpg';
import popupUborka from './images/popup-uborka.jpg';


const popupCookies = document.querySelector('.popup_cookies');

// new Api instanse
const api = new Api({
  baseUrl: 'https://civil-poetry-app.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

const popularButton = document.querySelector('.popular__button');
const popularMore = document.querySelector('.popular__more');


// form validation instance and validate method
const formValidator = new FormValidator('.popup__form');


const popupSuccess = document.querySelector('.popup_submit-success');
const popupAll = document.querySelectorAll('.popup');
const newsLink = document.querySelector('.popup__link');

const claimContainer = document.querySelector('.claim-list');

const problemList = document.querySelector('.problems-list__wrapper');

// пока так сделала прокрутку по клику, потом может перепишем на что-то получше
const arrowBottom = document.querySelector('.hello__arrow-bottom');
const problemsList = document.querySelector('.problems-list');

//элементы для бегущей строки (пока для одной, потом в класс перепишу)
const tickerArray = document.querySelectorAll('.ticker')

const newsPopup = document.querySelector('.popup_news');
const newsPopupButton = newsPopup.querySelector('.button');

const cardList = document.querySelector('.card-list');

if(!sessionStorage.getItem('id')){
  sessionStorage.setItem('id', generateId());
  popupCookies.classList.add('popup_opened')
}


formValidator.enableValidation();
const submitNewClaim = (claimProps) => {

  api.postNewClaim(claimProps)
    .then((res) => {
      if(res.checked === 'checked'){
        const claimItem = new Claim('.claim-template', res);
        claimContainer.prepend(claimItem.createClaimElement())
      }
      popupSuccess.classList.add('popup_opened');
    })
    .catch(err => console.log(err))
}


newsLink.addEventListener('click', ()=>{
  popupAll.forEach(popup => {
    closePopup(popup);
  })
})

const formPopup = new PopupWithForm('.popup_result', {
  submitForm: (claimProps)=>{
    submitNewClaim(claimProps);
    subCategory.deleteChildren();
  }, 
  closeAllPopup: () => {
    subCategory.close();
    formPopup.close();
  }
});


const getClaimsData = (container) => {
  api.getClaims()
    .then(res => {
      const allClaims = res.filter(item => item.checked === 'checked');
      let startElemntIndex = allClaims.length - 3;
      let lastElementIndex = allClaims.length;
      let initialClaims = allClaims.slice(startElemntIndex, lastElementIndex);
      initialClaims.forEach( item => { 
        const claimItem = new Claim('.claim-template', item);
        container.prepend(claimItem.createClaimElement());
      })
      popularButton.addEventListener('click', ()=> {
        if(!(startElemntIndex<=0)){
          let nextClaims = allClaims.slice(startElemntIndex - 3, lastElementIndex - 3);
        
          nextClaims.reverse().forEach( item => { 
            const claimItem = new Claim('.claim-template', item);
            container.append(claimItem.createClaimElement());
          })
          startElemntIndex = startElemntIndex - 3;
          lastElementIndex = lastElementIndex - 3;
        } else {
          popularMore.textContent = "Всё!";
        }
      })
    })
    .catch(err => console.log(err));
}

getClaimsData(claimContainer)


tickerArray.forEach(item => {
  animateTicker(item, '.ticker__line', 10000);
});

// стрелка из блока hello, надо переделать
arrowBottom.addEventListener('click', () => {
  problemsList.scrollIntoView();
});


const closePopup = (popupToClose) => {
  popupToClose.classList.remove('popup_opened');
};

const openPopup = (popupToOpen) => {
  popupToOpen.classList.add('popup_opened');
};


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

// категории, субкатегории, вот это всё
const subCategory = new InitialSubcategories('.popup_subcategories', {
  openPopupWithForm: (allData, defCategory)=> {
    formPopup.open(allData, defCategory);
  }
})

const createSubcategoryPopup = (data) => {
  subCategory.updatePopup(data);
};

categoriesList.forEach(category => {
  const categoryCard = new InitialCategories(
    category.name, 
    category.src, 
    category.subcategories, 
    '.problem-template', {
      createSubcategoryPopup: ()=> { 
        createSubcategoryPopup(category) 
      }
    });
  problemList.append(categoryCard.createCategory());
});

popupCookies.querySelector('.popup__go-button').addEventListener('click', () => {
  closePopup(popupCookies);
});