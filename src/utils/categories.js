// const categoryRoads = [
//     {
//         name: 'Снег',
//         link: ''
//     },
//     {
//         name: 'Ямы',
//         link: ''
//     },
//     {
//         name: 'Пробки',
//         link: ''
//     },
//     {
//         name: 'Общественный транспорт',
//         link: ''
//     },
//   ];
  
//   const categoryHomeService = [
//     {
//         name: 'отопление',
//         link: ''
//     },
//     {
//         name: 'свет',
//         link: ''
//     },
//     {
//         name: 'вода',
//         link: ''
//     },
//     {
//         name: 'сосульки',
//         link: ''
//     },
//     {
//         name: 'не убирают',
//         link: ''
//     },
//     {
//         name: 'не чинят',
//         link: ''
//     },
//   ];
  
//   const categorySos = [
//     {
//         name: 'Мне плохо',
//         link: ''
//     },
//     {
//         name: 'другому плохо',
//         link: ''
//     },
//     {
//         name: 'Пожар',
//         link: ''
//     },
//     {
//         name: 'Потоп',
//         link: ''
//     },
//   ];
  
//   const categorySos = [
//     {
//         name: 'Мне плохо',
//         link: ''
//     },
//     {
//         name: 'другому плохо',
//         link: ''
//     },
//     {
//         name: 'Пожар',
//         link: ''
//     },
//     {
//         name: 'Потоп',
//         link: ''
//     },
//   ];
  
// const categoryPublicServices = [
//     {
//         name: 'Бюрократия',
//         link: ''
//     },
//     {
//         name: 'Врачи',
//         link: ''
//     },
// ]  

const categoriesList = {
    roads: {
        name: 'Дороги',
        subcategories: ['Снег', 'Ямы', 'Пробки', 'Общественный транспорт']
    },

    homeService: {
        name: 'ЖКХ',
        subcategories: ['Отопление', 'Свет', 'Вода', 'Сосульки', 'Не убирают', 'Не чинят']
    },

    roads: {
        name: 'Дороги',
        subcategories: ['Снег', 'Ямы', 'Пробки', 'Общественный транспорт']
    },

    homeService: {
        name: 'ЖКХ',
        subcategories: ['Отопление', 'Свет', 'Вода', 'Сосульки', 'Не убирают', 'Не чинят']
    },

    roads: {
        name: 'Дороги',
        subcategories: ['Снег', 'Ямы', 'Пробки', 'Общественный транспорт']
    },

    homeService: {
        name: 'ЖКХ',
        subcategories: ['Отопление', 'Свет', 'Вода', 'Сосульки', 'Не убирают', 'Не чинят']
    },
};



class InitialSubcategories {
    constructor(categoriesList, category, popupSelector, subcategoriesSelector) {
        this._categoriesList = categoriesList;
        this._category = category;
        this._popup = document.querySelector(popupSelector);
        this._subcategory = this._popup.querySelector(subcategoriesSelector);
        this._popupHeading = this._popup.querySelector('.popup__heading').textContent;
    }

    createPopup() {
        
        console.log(this._categoriesList.this._category.name);
    }

}

const subcatPopup = new InitialSubcategories(categoriesList, roads, '.popup_subcategories', '.problem_popup');
subcatPopup.createPopup();