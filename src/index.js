import './styles/index.css';

import { animateTicker } from './utils/utils.js';
import FormValidator from './components/FormValidator.js';
import InitialSubcategories from './components/InitialSubcategories.js';
import InitialCategories from './components/InicialCategories.js'
import { categoriesList } from './utils/constants.js';

import { Claim } from './components/Claim.js';
import { Api } from './components/Api.js';
import { PopupWithForm } from './components/PopupWithForm.js'

// new Api instanse
const api = new Api({
  baseUrl: 'https://civil-poetry-app.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

// form validation instance and validate method
const formValidator = new FormValidator('.popup__form');
formValidator.enableValidation();

const popupSuccess = document.querySelector('.popup_submit-success');
const popupAll = document.querySelectorAll('.popup');
const newsLink = document.querySelector('.popup__link');

const claimContainer = document.querySelector('.claim-list');

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
  console.log(123)
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
    category.close();
  }
});

const popularButton = document.querySelector('.popular__button');
const popularMore = document.querySelector('.popular__more');

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

const problemList = document.querySelector('.problems-list__wrapper');

// пока так сделала прокрутку по клику, потом может перепишем на что-то получше
const arrowBottom = document.querySelector('.hello__arrow-bottom');
const problemsList = document.querySelector('.problems-list');

//элементы для бегущей строки (пока для одной, потом в класс перепишу)
const tickerArray = document.querySelectorAll('.ticker')
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

const newsCards = Array.from(document.querySelectorAll('.card'));
const newsPopup = document.querySelector('.popup_news');
const newsPopupButton = newsPopup.querySelector('.button');

newsCards.forEach((card) => {
  card.addEventListener('click', () => {
    openPopup(newsPopup);
  })
})

newsPopupButton.addEventListener('click', function () {
  closePopup(newsPopup);
});

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