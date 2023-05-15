window.addEventListener('scroll', function() {
  var menu = document.querySelector('.sticky-menu');
  var scrollPosition = window.scrollY;
  
  if (scrollPosition >= 100) {
    menu.classList.add('visible');
  } else {
    menu.classList.remove('visible');
  }

  
});
