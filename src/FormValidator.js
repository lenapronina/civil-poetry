export default class FormValidator {
    constructor() {
      this._inputList = Array.from(document.querySelectorAll('.popup__input'));
      this._buttonElement = document.querySelector('.popup__submit-button');
      this._formElement = document.querySelector('.popup__form');
    //   this._errors = this._formElement.querySelectorAll(this._inputErrorClass);
    }
  
    _setEventListeners() {
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._isValid(inputElement);
          this._toggleButtonState();
        });
      });
  
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this.resetValidation();
      });
    };
  
    _isValid(inputElement) {
      if (!inputElement.validity.valid) {
        // this._showInputError(inputElement, inputElement.validationMessage);
        inputElement.classList.add('popup__input_invalid');
      } else {
        // this._hideInputError(inputElement);
        inputElement.classList.remove('popup__input_invalid');
      };
    };
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    };
  
    _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    };
  
    _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add('popup__submit-button_inactive');
      } else {
        this._buttonElement.classList.remove('popup__submit-button_inactive');
      };
    };
  
    _hasInvalidInput() {
      return this._inputList.some( (inputElement) => {
        return !inputElement.validity.valid;
      });
    };
  
    resetValidation() {
      
      // this._errors.forEach((error) => {
      //   error.classList.remove(this._errorClass);
      //   this._hideInputError(form, input);
      // });
      this._inputList.forEach((inputElement) => {
        // this._hideInputError(inputElement);
        // inputElement.classList.remove('popup__input_invalid');
        inputElement.value = '';
        this._isValid(inputElement);
      });

      this._toggleButtonState();
    };
  
    enableValidation() {
      this._setEventListeners();
    }
  }
