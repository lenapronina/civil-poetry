export default class InitialSubcategories {

  constructor(popupSelector, { openPopupWithForm }) {
    this._popup = document.querySelector(popupSelector);
    this._heading = this._popup.querySelector('.popup__heading');
    this._backButton = this._popup.querySelector('.popup__wrapper_subcategories');
    this._childrenContainrer = this._popup.querySelector('.problems-list__wrapper_popup');

    this._openPopupWithForm = openPopupWithForm;
  }

  _updateHeading(data){
    this._heading.textContent = data.name;
  }

  updatePopup(data) {
    this._data = data;
    this._updateHeading(this._data);
    this.open();
    this._renderElements(Array.from(this._data.subcategories), this._data);
    this._setEventListeners();
  }

  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._heading.textContent = '';
    this.deleteChildren();
  }

  _getSubcategoryTemplate() {
    return document
      .querySelector('.popup-subcategory-template')
      .content
      .cloneNode(true);
  }

  _createChildElement(item) {

    this._element = this._getSubcategoryTemplate();
    this._element.querySelector('.problem__name').textContent = item.name;
    return this._element;
  }

  _renderElements(dataArray, category){
    dataArray.forEach( item => {
      const subType = this._createChildElement(item)
      const subTypeButton = subType.querySelector('.problem_popup')
      subTypeButton.addEventListener('click', ()=> {
        this._openPopupWithForm(item, category);
      })
      this._childrenContainrer.append(subType);
    })
  }

  _setEventListeners() {
    this._backButton.addEventListener('click', () => {
      this.close();
    });
  }

   deleteChildren(){
    while (this._childrenContainrer.firstChild) {
      this._childrenContainrer.removeChild(this._childrenContainrer.firstChild);
    }
  }
}
