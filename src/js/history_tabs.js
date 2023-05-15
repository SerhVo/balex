var tabs = document.querySelectorAll('.services_tab-li');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    // Удалить класс 'active' у всех карточек
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
      tab.classList.remove('fade-in');
    });
    // Добавить класс 'active' и 'fade-in' к текущей карточке
    this.classList.add('active');
    this.classList.add('fade-in');
  });
});


 tabs = document.querySelectorAll('.tab-pane-p');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    // Удалить класс 'active' у всех карточек
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
      tab.classList.remove('fade-in');
    });
    // Добавить класс 'active' и 'fade-in' к текущей карточке
    this.classList.add('active');
    this.classList.add('fade-in');
  });
});