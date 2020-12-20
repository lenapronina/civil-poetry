const categoryIcons = Array.from(document.querySelectorAll('.problem'));
const subcategoryIcons = Array.from(document.querySelectorAll('.problem_popup'));
const resultPopup = document.querySelector('.popup_result');
const subcategoryPopup = document.querySelector('.popup_subcategories');
const goBackToCategoriesButton = document.querySelector('.popup__wrapper_subcategories');
const goBackToSubcategoriesButton = document.querySelector('.popup__wrapper_result');

categoryIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    subcategoryPopup.classList.add('popup_opened');
  });
});

subcategoryIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        resultPopup.classList.add('popup_opened');
    });
});

goBackToCategoriesButton.addEventListener('click', () => {
    subcategoryPopup.classList.remove('popup_opened');
});

goBackToSubcategoriesButton.addEventListener('click', () => {
    resultPopup.classList.remove('popup_opened');
});