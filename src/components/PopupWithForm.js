import arrowNextInactive from '../images/right-arrow-inactive.png';
import arrowPrevInactive from '../images/left-arrow-inactive.png';
import arrowNextActive from '../images/right-arrow.png';
import arrowPrevActive from '../images/left-arrow.png';

class PopupWithForm{
  
  constructor(popupSelector, { submitForm, closeAllPopup }) {
    this._popup = document.querySelector(popupSelector);
    this._submitForm = submitForm;
    this._closeAllPopup =closeAllPopup;

    this._form = this._popup.querySelector('.popup__form');
    this._backButton = this._popup.querySelector('.popup__wrapper_result');
    this._backToMainPageButton = this._popup.querySelector('.popup__go-to-main-button');
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._checkbox = this._popup.querySelector('.popup__checkbox');
    this._poem = this._form.querySelector('.popup__text');

    this._prevPoemButton = this._popup.querySelector('.popup__poem-button_prev');
    this._nextPoemButton = this._popup.querySelector('.popup__poem-button_next');  
    
    this.count = 0
  }

  open(item, category) {
    this._subCategory = item;
    this._category = category;
    this._popup.classList.add('popup_opened');
    this._submitButton.classList.add('popup__submit-button_inactive');
    this._setPoem(this._subCategory.poems);
    this.setEventListeners(this._subCategory.poems, this._category);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._form.reset();
  }

  _setPoem(subcategory){
    
    if(subcategory.length <= 1){
      this._poem.innerHTML = subcategory[this.count];
      this._disablePrevButton();
      this._disableNextButton()
    } else if(subcategory.length == 2){
      this._poem.innerHTML = subcategory[this.count];
      this._disablePrevButton();
    } else {
      this._poem.innerHTML = subcategory[this.count];
      this._disablePrevButton();
    }
  }

  _disablePrevButton(){
    this._prevPoemButton.disabled = true;
    this._prevPoemButton.querySelector('.popup__poem-button-icon').src = arrowPrevInactive;
  }

  _disableNextButton(){
    this._nextPoemButton.disabled = true;
    this._nextPoemButton.querySelector('.popup__poem-button-icon').src = arrowNextInactive;
  }

  _enablePrevButton(){
    this._prevPoemButton.disabled = false;
    this._prevPoemButton.querySelector('.popup__poem-button-icon').src = arrowPrevActive;
  }

  _enableNextButton(){
    this._nextPoemButton.disabled = false;
    this._nextPoemButton.querySelector('.popup__poem-button-icon').src = arrowNextActive;
  }

  _setNextPoem(poemIndex){
    this._poem.innerHTML = this._poems[poemIndex + 1];
  }

  _setPrevPoem(poemIndex){
    this._poem.innerHTML = this._poems[poemIndex-1];
  }


  _isChecked(){
    if (this._checkbox.checked){
      return 'checked'
    } else {
      return 'none'
    }
  }

  _getInputValues(category, poems) {
    const type = category;
    const poemsList = poems;
    this._formValues = {};
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    this._formValues.poems = poemsList[this.count];
    this._formValues.type = type.name;
    this._formValues.checked = this._isChecked();
    return this._formValues;
  }

  setEventListeners(poems, category){

    this._poems = poems;

    this._backButton.addEventListener('click', () => {
      this.close();
    });

    this._backToMainPageButton.addEventListener('click', () => {
      this.close();
      this._closeAllPopup();
    });

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues(category, this._poems));
      this._form.reset();
    });

    this._nextPoemButton.addEventListener('click', () => {
  
      if((this._poems.length > this.count) && (this._poems.length > (this.count + 2))) {
        this._enablePrevButton();
        this._setNextPoem(this.count);
      } else {
        this._enablePrevButton();
        this._setNextPoem(this.count);
        this._disableNextButton();
      }
      this.count =  this.count + 1
    })

    this._prevPoemButton.addEventListener('click', () => {
      
      if(this.count <= 1) {
        this._setPrevPoem(this.count);
        this._disablePrevButton();
        this._enableNextButton();
      } else {
        this._setPrevPoem(this.count);
        this._enableNextButton();
      }
      this.count =  this.count - 1
    })
  }
}

export { PopupWithForm };