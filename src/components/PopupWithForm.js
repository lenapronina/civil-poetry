import arrowNextInactive from '../images/right-arrow-inactive.png';
import arrowPrevInactive from '../images/left-arrow-inactive.png';
import arrowNextActive from '../images/right-arrow.svg';
import arrowPrevActive from '../images/left-arrow.svg';

class PopupWithForm{
  
  constructor(popupSelector, { submitForm, closeAllPopup }) {
    this._popup = document.querySelector(popupSelector);
    this._submitForm = submitForm;
    this._closeAllPopup = closeAllPopup;
    
    this._form = this._popup.querySelector('.popup__form');
    this._backButton = this._popup.querySelector('.popup__wrapper_result');
    this._backToMainPageButton = this._popup.querySelector('.popup__go-to-main-button');
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._checkbox = this._popup.querySelector('.popup__checkbox');
    this._poem = this._form.querySelector('.popup__text');

    this._prevPoemButton = this._form.querySelector('.popup__poem-button_prev');
    this._nextPoemButton = this._form.querySelector('.popup__poem-button_next');  
    
    this.count = 0;
    this._setNextPoem = this.setNewPoem.bind(this);
    this._setPrevPoem = this.setPrevPoem.bind(this);
  }

  open(item, category) {
  
    this._item = item;
    this._poems = this._item.poems;
    
    this._submitButton.classList.add('popup__submit-button_inactive');
    this._checkedPoemsLength(this._poems);
    this._setPoem(item.poems, this.count);
    
    this._popup.classList.add('popup_opened');
    this.setEventListeners(this._item.poems, category);
  }

  close() {
    this._popup.classList.remove('popup_opened');
  
    this._nextPoemButton.removeEventListener('click', this._setNextPoem);
    this._prevPoemButton.removeEventListener('click', this._setPrevPoem);
  
    this.count = 0;
    this._form.reset();
  }

  _checkedPoemsLength(poems){
    if(poems.length <= 1) {
      this._disableNextButton();
      this._disablePrevButton();
    } else {
      this._disablePrevButton();
      this._enableNextButton();
    }
  }
   
  _setPoem(poems, index){
    this._poem.innerHTML = poems[index];
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

  setNewPoem(){
    if((this._poems.length > this.count) && (this._poems.length > (this.count + 2))) {
      this._enablePrevButton();
      this._setPoem(this._poems, this.count + 1);
    } else {
      this._setPoem(this._poems, this.count + 1);
      this._enablePrevButton();
      this._disableNextButton();
    }
    this._setPoem(this._poems, (this.count + 1));
    this.count =  this.count + 1;   
  }

  setPrevPoem(){
    if(this.count <= 1) {
      this._setPoem(this._poems, this.count - 1);
      this._disablePrevButton();
      this._enableNextButton();
    } else {
      this._setPoem(this._poems, this.count - 1);
      this._enableNextButton();
    }
    this.count =  this.count - 1;    
  }

  setEventListeners(category){

    this._backButton.addEventListener('click', () => {
      this._form.reset();
      this.close();
    });

    this._backToMainPageButton.addEventListener('click', () => {
      this._closeAllPopup();
    });

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues(category, this._poems));
      this._form.reset();
    });

    this._nextPoemButton.addEventListener('click', this._setNextPoem)
    this._prevPoemButton.addEventListener('click',  this._setPrevPoem)
  }
}

export { PopupWithForm };
