$(document).ready(function () {

  let menuBurger = document.querySelector ('.menu__burger');
  let headerNav = document.querySelector ('.header__navigation');

  // добавляем класс action при нажатии на burger
  menuBurger.onclick = function () {
    headerNav.classList.toggle ('active');
    menuBurger.classList.toggle ('active');
  };


  // открытие и закрыте аккордиона 
  let answerItem = document.querySelectorAll ('.answer__item');
  let answerText = document.querySelectorAll ('.answer__subtitle');
  let answerIcon = document.querySelectorAll ('.answer__icon');


  $('.answer__label').click(function () {
    $(this).next('.answer__content').slideToggle(300, function () {
      let parentItem = $(this).parent()[0];
      // parentItem[0].querySelector('.answer__subtitle')
      parentItem.querySelector('.answer__subtitle').classList.toggle('answer__subtitle--active');
      parentItem.querySelector('.answer__icon').classList.toggle('answer__icon--active');
    });
  })

}); //end 