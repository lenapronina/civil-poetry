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

const formValidator = new FormValidator();
formValidator.enableValidation();

const popupSuccess = document.querySelector('.popup_submit-success');
const popupAll = document.querySelectorAll('.popup');
const newsLink = document.querySelector('.popup__link');


const submitNewClaim = (claimProps) => {

  api.postNewClaim(claimProps)
    .then((res) => {
      popupSuccess.classList.add('popup_opened');
    })
    .catch(err => console.log(err))
}

newsLink.addEventListener('click', ()=>{
  popupAll.forEach(popup => {
    closePopup(popup);
  })
})


const form = new PopupWithForm('.popup_result', {
  submitForm: (claimProps)=>{
    submitNewClaim(claimProps);
    subCategory.deleteChildren();
  }, 
  closeAllPopup: ()=>{
    category.close()
  }
});

const claimContainer = document.querySelector('.claim-list');

const getClaimsData = (container) => {
  api.getClaims()
    .then( res => {
      const initialClaims = res;
      initialClaims.forEach( item => { 
        if(item.checked){
          const claimItem = new Claim('.claim-template', item);
          container.prepend(claimItem.createClaimElement())
        }   
      })
    })
    .catch( err => console.log(err) )

}

getClaimsData(claimContainer)


const popularText = document.querySelector('.popular__more');

const problemList = document.querySelector('.problems-list__wrapper');


// function renderClaim(claimArray, container) {
//   claimArray.forEach(item => {
//     const claimElement = document.querySelector('.claim-template').content.cloneNode(true);
//     const claimImage = claimElement.querySelector('.claim__id');
//     const claimHeader = claimElement.querySelector('.claim__cathegory');
//     const claimPreview = claimElement.querySelector('.claim__verse');
//     const claimBlock = claimElement.querySelector('.claim');
//     const author = claimElement.querySelector('.claim__author');

//     claimImage.src = item.image;
//     claimHeader.textContent = item.cathegory;
//     claimPreview.textContent = item.preview;

//     let claimClicked = false;

//     claimBlock.addEventListener('click', () => {
//       if (claimClicked === false) {
//         claimPreview.textContent = item.text;
//         claimClicked = true;
//         author.textContent = item.author
//       } else {
//         claimPreview.textContent = item.preview;
//         claimClicked = false;
//         author.textContent = ''
//       }
//     })
//     container.append(claimElement);
//   })
// }

// renderClaim(claimList.slice(0, 3), claimContainer)

// const moreClaimsButton = document.querySelector('.popular__button');
// moreClaimsButton.addEventListener('click', () => {
//   renderClaim(claimList.slice(3, 6), claimContainer);
//   popularText.textContent = "Чуть позже добавим еще новости!";
//   moreClaimsButton.style.display = 'none';
// })

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
    form.open(allData, defCategory);
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

