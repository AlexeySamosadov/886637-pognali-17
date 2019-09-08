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
  form.addEventListener("submit", function (evt) {
    if (!textarea.value) {
      evt.preventDefault();
      console.log("Заполните данный формы, пожалуйста!");
      console.log(login.value);
      console.log(email.value);
      console.log(textarea.value);
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
