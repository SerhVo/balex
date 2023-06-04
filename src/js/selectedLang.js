// // Получаем все кнопки переключателя языка
// const langButtons = document.querySelectorAll('.lang-btn');

// // Получаем все элементы, которые нужно перевести
// const translateElements = document.querySelectorAll('.translate');

// // Обработчик события при нажатии на кнопку переключателя языка
// langButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // Удаляем класс "active" у всех кнопок
//     langButtons.forEach((btn) => btn.classList.remove('activeLang'));

//     // Добавляем класс "active" к выбранной кнопке
//     button.classList.add('activeLang');

//     // Получаем выбранный язык из атрибута data-lang
//     const selectedLang = button.getAttribute('data-lang');

//     // Перебираем все текстовые элементы и меняем их содержимое в соответствии с выбранным языком
//     translateElements.forEach((element) => {
//       const langText = element.getAttribute(`data-lang-${selectedLang}`);
//       element.textContent = langText;
//     });
//   });
// });


// Получаем все кнопки переключателя языка
const langButtons = document.querySelectorAll('.lang-btn');

// Получаем все элементы, которые нужно перевести
const translateElements = document.querySelectorAll('.translate');

// Получаем все элементы, для которых нужно менять изображения
const imageElements = document.querySelectorAll('.image');

// Обработчик события при нажатии на кнопку переключателя языка
langButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Удаляем класс "active" у всех кнопок
        langButtons.forEach((btn) => btn.classList.remove('activeLang'));
        // Добавляем класс "active" к выбранной кнопке
        button.classList.add('activeLang');

        // Получаем выбранный язык из атрибута data-lang
        const selectedLang = button.getAttribute('data-lang');

        // Перебираем все текстовые элементы и меняем их содержимое в соответствии с выбранным языком
        translateElements.forEach((element) => {
            const langText = element.getAttribute(`data-lang-${selectedLang}`);
            element.textContent = langText;
        });

        // Переключение картинок
        const imageElements = document.querySelectorAll('.image');
        imageElements.forEach((element) => {
            const langImage = element.getAttribute(`data-image-${selectedLang}`);
            element.setAttribute('src', langImage);
        });
    });
});