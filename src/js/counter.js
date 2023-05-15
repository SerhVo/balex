// Получаем все элементы с классом "counter"
const counters = document.querySelectorAll(".counter");
const animationDuration = 3000;
// Создаем экземпляр IntersectionObserver и передаем ему колбэк-функцию
const observer = new IntersectionObserver(entries => {
  // Перебираем каждый элемент
  entries.forEach(entry => {
    // Если элемент находится в области видимости
    if (entry.isIntersecting) {
counters.forEach(counter => {
  const countTarget = +counter.getAttribute("data-count");
  const animationStart = Date.now(); // время начала анимации
  const animationEnd = animationStart + animationDuration; // время окончания анимации

  let countValue = 0; // начальное значение счетчика
  const updateCounter = () => {
    const timeElapsed = Date.now() - animationStart; // время прошедшее с начала анимации
    const progress = Math.min(timeElapsed / animationDuration, 1); // прогресс анимации от 0 до 1
    const currentValue = Math.floor(countTarget * progress); // текущее значение счетчика, основанное на прогрессе и целевом значении

    counter.innerText = currentValue; // обновляем значение на странице

    if (timeElapsed < animationDuration) { // продолжаем анимацию, если время еще не закончилось
      const speedFactor = 1 + (100 - countTarget) / 100; // коэффициент скорости, зависящий от значения countTarget
      const interval = Math.max(10, 1000 / (countTarget * speedFactor)); // вычисляем интервал на основе значения countTarget и коэффициента скорости
      setTimeout(updateCounter, interval); // запускаем функцию обновления через определенный интервал
    }
  };

  updateCounter(); // запускаем анимацию счетчика
}); // Интервал в миллисекундах между обновлениями счетчика

      // Удаляем observer после запуска счетчика, чтобы он больше не отслеживал элемент
      observer.unobserve(counter);
    }
  });
});

// Перебираем каждый элемент и добавляем его в observer
counters.forEach(counter => {
  observer.observe(counter);
});
