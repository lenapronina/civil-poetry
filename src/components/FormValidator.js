export default class FormValidator {
  constructor(formSelector) {
    this._formElement = document.querySelector(formSelector);   
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      inputElement.classList.add('popup__input_invalid');
    } else {
      inputElement.classList.remove('popup__input_invalid');
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