$(document).ready(function() {

  let menuBurger = document.querySelector('.menu__burger');
  let headerNav = document.querySelector('.header__navigation');

  // добавляем класс action при нажатии на 
  menuBurger.onclick = function() {
    headerNav.classList.toggle('active');
    menuBurger.classList.toggle('active');
  };

}); //end 