import gkh from '../images/claim-gkh.svg';
import price from '../images/claim-prices.svg';
import roads from '../images/claim-roads.svg';
import roommate from '../images/claim-roommate.svg';
import auth from '../images/claim-auth.svg';
import disaster from '../images/claim-disaster.svg';
import fools from '../images/claim-fools.svg';
import ecology from '../images/claim-ecology.svg';


class Claim {
  
  constructor(templateSelector, data) {
    this._templateSelector = document.querySelector(templateSelector);
    this._data = data;
    this._opened = false;  
  }

  _imageCondition(category){
    let imageSrc = '';
    switch (category) {
      case "Соседи":
        imageSrc = roommate;
        break;
      case "ЖКХ":
        imageSrc = gkh;
        break;
      case "Дураки":
        imageSrc = fools;
        break;
      case "Дороги":
        imageSrc = roads;
        break;
      case "Бедствия":
        imageSrc = disaster;
        break;
      case "Экология":
        imageSrc = ecology;
        break;
      case "Цены и налоги":
        imageSrc = price;
        break;
      case "Гос. структуры":
        imageSrc = auth;
        break;
      default:
        imageSrc = gkh;
    }
    return imageSrc;
  }

  _getTemplate() {
    return this._templateSelector.content.cloneNode(true);
  }

  _setEventListeners(element, data, array){
    const button = element.querySelector('.claim__open-button');
    const poemView = element.querySelector('.claim__verse');
  
    button.addEventListener('click', ()=>{
      if(this._opened == false){
        button.style.transform = 'rotate(0deg)';
        poemView.innerHTML = data.poems;
        this._opened = true;
      } else {
        button.style.transform = 'rotate(180deg)';
        poemView.innerHTML = array[0];
        this._opened = false;
      }
      return this._opened
    }) 
  }


  createClaimElement() {

      this._element = this._getTemplate();
      this._poemsArray = this._data.poems.split('<br>');
      
      this._poemView = this._element.querySelector('.claim__verse');

      this._poemView.innerHTML = this._poemsArray[0];
      
      this._element.querySelector('.claim__cathegory').textContent = `${this._data.applicant},`;
      
      this._element.querySelector('.claim__city').innerHTML = this._data.location;
    
      this._element.querySelector('.claim__id').src = this._imageCondition(this._data.type);

      this._setEventListeners(this._element, this._data, this._poemsArray);
     
      return this._element;
  }
}

export { Claim };