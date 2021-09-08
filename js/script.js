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