import gkh from '../images/claim-gkh.svg';
import price from '../images/claim-prices.svg';
import roads from '../images/claim-roads.svg';
import roommate from '../images/claim-roommate.svg';
import auth from '../images/claim-auth.svg';
import disaster from '../images/claim-disaster.svg';
import fools from '../images/claim-fools.svg';
import ecology from '../images/claim-ecology.svg';


class Claim {
  
  constructor(templateSelector, data) {
    this._templateSelector = document.querySelector(templateSelector);
    this._data = data;

    this._claimImage = this._templateSelector.querySelector('.claim__id');
    this._claimHeader =this._templateSelector.querySelector('.claim__cathegory');
    this._claimPreview = this._templateSelector.querySelector('.claim__verse');
    this._claimBlock = this._templateSelector.querySelector('.claim');
    this._author = this._templateSelector.querySelector('.claim__author');
  
  }

  _imageCondition(category){
    let imageSrc = '';
    switch (category) {
      case "Соседи":
        imageSrc = roommate;
        break;
      case "ЖКХ":
        imageSrc = gkh;
        break;
      case "Дураки":
        imageSrc = fools;
        break;
      case "Дороги":
        imageSrc = roads;
        break;
      case "Бедствия":
        imageSrc = disaster;
        break;
      case "Экология":
        imageSrc = ecology;
        break;
      case "Цены и налоги":
        imageSrc = price;
        break;
      case "Гос. структуры":
        imageSrc = auth;
        break;
      default:
        imageSrc = gkh;
    }
    return imageSrc;
  }

  _getTemplate() {
    return this._templateSelector.content.cloneNode(true);
  }

  createClaimElement() {

      this._element = this._getTemplate();

      const poemsArray =  this._data.poems.split('<br>');
      this._element.querySelector('.claim__cathegory').textContent = `${this._data.applicant},`;
      this._element.querySelector('.claim__verse').innerHTML = poemsArray[0];
      this._element.querySelector('.claim__city').innerHTML = this._data.location;
    
      this._element.querySelector('.claim__id').src = this._imageCondition(this._data.type)
     
      return this._element;
  }

  // open(item, category) {
  //   this._subCategory = item;
  //   this._category = category;
  //   this._popup.classList.add('popup_opened');
  //   this._submitButton.classList.add('popup__submit-button_inactive');
  //   this._setPoem(this._subCategory.poems);
  //   this.setEventListeners(this._subCategory.poems, this._category);
  // }

  

  // close() {
  //   this._popup.classList.remove('popup_opened');
  //   this._form.reset();
  // }

  // _setPoem(subcategory){
    
  //   if(subcategory.length <= 1){
  //     this._poem.innerHTML = subcategory[this.count];
  //     this._disablePrevButton();
  //     this._disableNextButton()
  //   } else if(subcategory.length == 2){
  //     this._poem.innerHTML = subcategory[this.count];
  //     this._disablePrevButton();
  //   } else {
  //     this._poem.innerHTML = subcategory[this.count];
  //     this._disablePrevButton();
  //   }
  // }

  
  // _isChecked(){
  //   if (this._checkbox.checked){
  //     return 'checked'
  //   } else {
  //     return 'none'
  //   }
  // }

  // _getInputValues(category) {
  //   const type = category;
  //   this._formValues = {};
  //   this._inputList = this._form.querySelectorAll('.popup__input');
  //   this._inputList.forEach(input => this._formValues[input.name] = input.value);
  //   this._formValues.poems = this._poem.textContent;
  //   this._formValues.type = type.name;
  //   this._formValues.checked = this._isChecked();
  //   return this._formValues;
  // }

  // setEventListeners(poems, category){

  //   this._poems = poems;

  //   this._backButton.addEventListener('click', () => {
  //     this.close();
  //   });

  //   this._backToMainPageButton.addEventListener('click', () => {
  //     this.close();
  //     this._closeAllPopup();
  //   });

  //   this._form.addEventListener('submit', (evt) => {
  //     evt.preventDefault();
  //     this._submitForm(this._getInputValues(category));
  //     this._form.reset();
  //   });

  //   this._nextPoemButton.addEventListener('click', () => {
  
  //     if((this._poems.length > this.count) && (this._poems.length > (this.count + 2))) {
  //       this._enablePrevButton();
  //       this._setNextPoem(this.count);
  //     } else {
  //       this._enablePrevButton();
  //       this._setNextPoem(this.count);
  //       this._disableNextButton();
  //     }
  //     this.count =  this.count + 1
  //   })

  //   this._prevPoemButton.addEventListener('click', () => {
      
  //     if(this.count <= 1) {
  //       this._setPrevPoem(this.count);
  //       this._disablePrevButton();
  //       this._enableNextButton();
  //     } else {
  //       this._setPrevPoem(this.count);
  //       this._enableNextButton();
  //     }
  //     this.count =  this.count - 1
  //   })
  // }
}

export { Claim };