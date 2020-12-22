import sosediImg from '../images/problem-sosedi.svg';
import GKHImg from '../images/problem-gkh.svg';
import durakiImg from '../images/problem-duraki.svg';
import dorogiImg from '../images/problem-dorogi.svg';
import bedstviyaImg from '../images/problem-bedstviya.svg';
import ekologiaImg from '../images/problem-ekologia.svg';
import nalogiImg from '../images/problem-nalogi.svg';
import vlastImg from '../images/problem-vlast.svg';

  const categoriesList = [
    {
        name: 'Соседи',
        src: sosediImg,
        subcategories: [
            {
                name: 'Шумят',
                poems: ''
            }
        ]
    },
    {
        name: 'ЖКХ',
        src: GKHImg,
        subcategories: [
            {
                name: 'Отопление',
                poems: ''
            },
            {
                name: 'Свет',
                poems: ''
            },
            {
                name: 'Вода',
                poems: ''
            },
            {
                name: 'Сосульки',
                poems: ''
            },
            {
                name: 'Не убирают',
                poems: ''
            },
            {
                name: 'Не чинят',
                poems: ''
            },
        ]
    },
    {
        name: 'Дураки',
        src: durakiImg,
        subcategories: [
            {
                name: 'Ну дураки и дураки',
                poems: ''
            }
        ]
    },
    {
        name: 'Дороги',
        src: dorogiImg,
        subcategories: [
            {
                name: 'Снег',
                poems: ''
            },
            {
                name: 'Ямы',
                poems: ''
            },
            {
                name: 'Пробки',
                poems: ''
            },
            {
                name: 'Общественный транспорт',
                poems: ''
            }
        ]
    },
    {
        name: 'Бедствия',
        src: bedstviyaImg,
        subcategories: [
            {
                name: 'Мне плохо',
                poems: ''
            },
            {
                name: 'Другому плохо',
                poems: ''
            },
            {
                name: 'Пожар',
                poems: ''
            },
            {
                name: 'Потоп',
                poems: ''
            }
        ]
    },
    {
        name: 'Экология',
        src: ekologiaImg,
        subcategories: [
            {
                name: 'Пропали птицы',
                poems: ''
            },
            {
                name: 'Вырубают леса',
                poems: ''
            },
        ]
    },
    {
        name: 'Цены и налоги',
        src: nalogiImg,
        subcategories: [
            {
                name: 'Пропали птицы',
                poems: ''
            },
            {
                name: 'Вырубают леса',
                poems: ''
            },
        ]
    },
    {
        name: 'Гос. структуры',
        src: vlastImg,
        subcategories: [
            {
                name: 'Медицина',
                poems: ''
            },
            {
                name: 'Школы',
                poems: ''
            },
            {
                name: 'Бюрократия',
                poems: ''
            },
        ]
    },
  ]

  export { categoriesList };