var menuButton = document.querySelector(".main-nav__toggle");
var menuWrap = document.querySelector(".main-nav__wrapper");
var svgOpen = document.querySelector(".main-nav__toggle-svg-open");
var svgClose = document.querySelector(".main-nav__toggle-svg-close");
var filter = document.querySelector(".filter-by-country__filter-title");
var filterShowAll = document.querySelector (".filter-by-country__filter-title--show-all");
var filterBlock = document.querySelector(".filter-by-country__block");
var filterButtonClose = document.querySelector(".filter-by-country__button-close");
var filterRegionList = document.querySelector(".filter-by-country__region-list");
var showAllSpan = document.querySelector (".filter-by-country__show-all");
var showAllIcon = document.querySelector (".filter-by-country__filter-icon3");
var showAllClose = document.querySelector (".filter-by-country__close");
var showAllIconClose = document.querySelector (".filter-by-country__svg-close");
var form = document.querySelector(".add-plan__form");
var tariffButton = document.querySelector(".add-profile__show-all-tariff");
var tariffPopup = document.querySelector(".add-profile-popup");
var tariffButtonClose = document.querySelector(".add-profile-popup__button-close");
var textareaFirst = document.querySelector(".add-plan__textarea--first-country");
var textareaSecond = document.querySelector(".add-plan__textarea--second-country");

document.addEventListener("DOMContentLoaded", function () {
  menuWrap.classList.remove("main-nav__wrapper-no-js");
  menuButton.classList.remove("main-nav__toggle--open");
  svgOpen.classList.toggle("main-nav__toggle-svg-open--modal");
  svgClose.classList.toggle("main-nav__toggle-svg-close--modal");
});

if (tariffPopup) {
  document.addEventListener("DOMContentLoaded", function () {
    tariffPopup.classList.remove("popup-no-js");
  });
}

menuButton.addEventListener("click", function() {
  menuWrap.classList.toggle("main-nav__wrapper--opened");
  menuButton.classList.toggle("main-nav__toggle--open");
  svgOpen.classList.toggle("main-nav__toggle-svg-open--modal");
  svgClose.classList.toggle("main-nav__toggle-svg-close--modal");
});

document.addEventListener("keydown", function(event){
  if(event.keyCode == 27) {
    menuWrap.classList.remove("main-nav__wrapper--opened");
    menuButton.classList.remove("main-nav__toggle--open");
    svgOpen.classList.remove("main-nav__toggle-svg-open--modal");
    svgClose.classList.remove("main-nav__toggle-svg-close--modal");
    tariffPopup.classList.remove("add-profile-popup--active");
  }
});

if(filter) {
  document.addEventListener("DOMContentLoaded", function () {
    filterBlock.classList.remove("filter-by-country__block--active");
  });


  filter.addEventListener("click", function(event) {
    filterBlock.classList.toggle("filter-by-country__block--active");
    filterRegionList.classList.toggle("filter-by-country__region-list--active");
  });

  filterShowAll.addEventListener("click", function () {
    filterBlock.classList.toggle("filter-by-country__block--active");
    filterRegionList.classList.toggle("filter-by-country__region-list--active");
    showAllSpan.classList.toggle("filter-by-country__show-all--active");
    showAllIcon.classList.toggle("filter-by-country__filter-icon3--active");
    showAllClose.classList.toggle("filter-by-country__close--active");
    showAllIconClose.classList.toggle("filter-by-country__svg-close--active");
  });

  filterButtonClose.addEventListener("click", function() {
    filterBlock.classList.remove("filter-by-country__block--active")
  });

  showAllIcon.addEventListener("clik", function () {
    console.log("клик работает!")
  });

  document.addEventListener("keydown", function(event){
    if(event.keyCode == 27) {
      filterBlock.classList.remove("filter-by-country__block--active");
    }
  });

}

if (form) {
  var textErrorFirst = document.querySelector(".add-plan__error--first-country");
  var textErrorSecond = document.querySelector(".add-plan__error--second-country");

  form.addEventListener("submit", function (evt) {
    if (!textareaFirst.value || !textareaSecond.value) {
      evt.preventDefault();
    }

    if (!textareaFirst.value) {
      evt.preventDefault();
      textareaFirst.classList.add("add-plan__textarea--error");
      textErrorFirst.classList.add("add-plan__error--active");
      console.log("Заполните данные первой формы, пожалуйста!");
    }

    if (!textareaSecond.value) {
      evt.preventDefault();
      textareaSecond.classList.add("add-plan__textarea--error");
      textErrorSecond.classList.add("add-plan__error--active");
      console.log("Заполните данные второй формы, пожалуйста!");
    }

  });
}

if (tariffButton) {
  tariffButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    tariffPopup.classList.add("add-profile-popup--active")
  });

  tariffButtonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    tariffPopup.classList.remove("add-profile-popup--active")
  })
}
