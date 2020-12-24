export default class InitialCategories {
  constructor(name, src, subcategories, categoryTemplateSelector, createSubcategoryPopup) {
    this._categoryTemplateSelector = categoryTemplateSelector;
    this._name = name;
    this._src = src;
    // this._id = id;
    this._subcategories = subcategories;
    this._createSubcategoryPopup = createSubcategoryPopup;
  }

  _getTemplate() {
    return document
      .querySelector(this._categoryTemplateSelector)
      .content
      .children[0]
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._createSubcategoryPopup(this._subcategories, this._name);
    });
  }

  createCategory() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.problem__image');
    this._elementImage.src = this._src;
    this._elementImage.alt = this._name;
    this._element.id = this._id;
    this._element.querySelector('.problem__name').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}