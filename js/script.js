// --+++Переменные для скролла по нажатию кнопки в шапке+++--
const detailsBtn = document.querySelector('.button_place_header');
const detailsInfo = document.querySelector('.title_place_about');
// ----------------------------------------------------------

// --+++Функция скролла по нажатию кнопки в шапке+++--
detailsBtn.onclick = () => detailsInfo.scrollIntoView({
  block: "start",
  behavior: "smooth"
});
// ---------------------------------------------------

// --+++Инициализация Swiper JS для слайдера с карточками+++--
const textCardsSlider = new Swiper('.slider-cards', {
  // Параметры
  wrapperClass: 'slider-cards__wrapper',
  slideClass: 'slider-cards__item',
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,

  // Пагинация
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet_active',
    clickable: false,
  },
});
// -----------------------------------------------------------

// --+++Инициализация Swiper JS для слайдера с картинками+++--
const imageCardsSlider = new Swiper('.slider-img', {
  // Параметры
  wrapperClass: 'slider-img__wrapper',
  slideClass: 'slider-img__item',
  direction: 'horizontal',
  loop: false,
  spaceBetween: 60,

  // Пагинация
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet_active',
    clickable: false,
  },
});
// ------------------------------------------------------------