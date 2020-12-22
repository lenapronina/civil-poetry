export default class InitialSubcategories {
    
    constructor(cardName, poems, openResultPopup) {
      this._cardName = cardName;
      this._openResultPopup = openResultPopup;
      this._poems = poems;
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
        this._openResultPopup(this._poems);
      });
    }
  
    createElement() {
      this._element = this._getSubcategoryTemplate();
      this._element.querySelector('.problem__name').textContent = this._cardName;
      this._setEventListeners();
  
      return this._element;
    }
  }