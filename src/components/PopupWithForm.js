export default class PopupWithForm{
  constructor(popupSelector, submitForm) {
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._submitForm = submitForm;
    this._poem = this._form.querySelector('.popup__text')
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    this._formValues.poems = this._poem.textContent;
    return this._formValues;
  }

  setEventListeners(){
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }
}