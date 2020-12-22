const animateTicker = (item, innerElementSelector, duration) => {
  const outerElement = item;
  const innerEl = outerElement.querySelector(innerElementSelector);
  const innerWidth = innerEl.offsetWidth;
  const cloneEl = innerEl.cloneNode(true);
  outerElement.appendChild(cloneEl);

  let start = performance.now();
  let progress;
  let translateX;

  requestAnimationFrame(function step(now) {
    progress = (now - start) / duration;

    if (progress > 1) {
      progress %= 1;
      start = now;
    }

    translateX = innerWidth * progress;

    innerEl.style.transform = `translate(-${translateX}px, 0 )`;
    cloneEl.style.transform = `translate(-${translateX}px, 0 )`;
    requestAnimationFrame(step);
  });
}


const categoriesList = {
  roads: {
      name: 'Дороги',
      subcategories: ['Снег', 'Ямы', 'Пробки', 'Общественный транспорт']
  },

  homeService: {
      name: 'ЖКХ',
      subcategories: ['Отопление', 'Свет', 'Вода', 'Сосульки', 'Не убирают', 'Не чинят']
  },

  neighbors: {
      name: 'Соседи',
      subcategories: ['Шумят']
  },

  idiots: {
      name: 'Дураки',
      subcategories: ['Ну дураки и дураки']
  },

  disasters: {
      name: 'Бедствия',
      subcategories: ['Мне плохо', 'Другому плохо', 'Пожар', 'Потоп']
  },

  ecology: {
      name: 'Экология',
      subcategories: ['Пропали птицы']
  },

  prices: {
    name: 'Цены и налоги',
    subcategories: ['Отопление', 'Свет', 'Вода', 'Сосульки', 'Не убирают', 'Не чинят']
  },

  governance: {
    name: 'Гос. структуры',
    subcategories: ['Бюрократия', 'Свободы нет', 'Врачи', 'Школы']
  },
};

export { animateTicker };
