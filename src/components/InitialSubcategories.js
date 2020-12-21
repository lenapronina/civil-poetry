export default class InitialSubcategories {
    
    constructor(cardName, resultPopup) {
      this._cardName = cardName;
      this._resultPopup = resultPopup;
    }
  
    _getSubcategoryTemplate() {
      return document
      .querySelector('.popup-subcategory-template')
      .content
      .children[0]
      .cloneNode(true);
    }
  
    _setEventListeners() {
      this._element.addEventListener('click', () => {
        this._resultPopup.classList.add('popup_opened');
      });
    }
  
    createElement() {
      this._element = this._getSubcategoryTemplate();
      console.log(this._element);
      this._element.querySelector('.problem__name').textContent = this._cardName;
      this._setEventListeners();
  
      return this._element;
    }
  }