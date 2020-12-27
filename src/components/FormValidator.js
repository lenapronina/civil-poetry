export default class FormValidator {
  constructor(formSelector) {
    this._formElement = document.querySelector(formSelector);   
  }


  _showInputError (inputElement, errorMessage){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_initial');
    inputElement.classList.add('popup__input_invalid');
    errorElement.classList.add('popup__caption_error');
    errorElement.textContent = errorMessage;
  }

  hideInputError (inputElement){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_invalid');
    errorElement.classList.remove('popup__caption_error');
    errorElement.textContent = '';
    if(inputElement.id =="email") {
      errorElement.textContent = 'На почту придёт уведомление о статусе жалобы';
      errorElement.classList.add('popup__caption_email');
      
    }
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      if(inputElement.id == 'email'){
        this._showInputError(inputElement, 'Проверьте правильность заполнения адреса почты');
      } else {
        this._showInputError(inputElement, 'Это обязательное поле');
      }
    } else {
      this.hideInputError(inputElement);
    };
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState() {
    if (!this._hasInvalidInput()) {
      this._buttonElement.classList.remove('popup__submit-button_inactive');
      this._buttonElement.removeAttribute('disabled', true);
    } else {
      this._buttonElement.classList.add('popup__submit-button_inactive');
      this._buttonElement.setAttribute('disabled', true);
    }
  };

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    this._buttonElement = this._formElement.querySelector('.popup__submit-button');

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }
}