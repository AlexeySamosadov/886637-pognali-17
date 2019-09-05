var menuButton = document.querySelector(".main-nav__toggle");
var menuWrap = document.querySelector(".main-nav__wrapper");
var svgOpen = document.querySelector(".main-nav__toggle-svg--open");
var svgClose = document.querySelector(".main-nav__toggle-svg--close");
var filter = document.querySelector(".filter-by-country__filter-title");
var filterShowAll = document.querySelector (".filter-by-country__filter-title--show-all");
var filterBlock = document.querySelector(".filter-by-country__block");
var filterButtonClose = document.querySelector(".filter-by-country__button-close");
var filterRegionList = document.querySelector(".filter-by-country__region-list");
var showAllSpan = document.querySelector (".filter-by-country__show-all");
var showAllIcon = document.querySelector (".filter-by-country__filter-icon3");
var showAllClose = document.querySelector (".filter-by-country__close");
var showAllIconClose = document.querySelector (".filter-by-country__svg-close");


document.addEventListener("DOMContentLoaded", function () {
  menuWrap.classList.remove("no-js");
  menuButton.classList.remove("main-nav__toggle--open");
  svgOpen.classList.toggle("main-nav__toggle-svg--open-modal");
  svgClose.classList.toggle("main-nav__toggle-svg--close-modal");
});

menuButton.addEventListener("click", function() {
  menuWrap.classList.toggle("main-nav__wrapper--opened");
  menuButton.classList.toggle("main-nav__toggle--open");
  svgOpen.classList.toggle("main-nav__toggle-svg--open-modal");
  svgClose.classList.toggle("main-nav__toggle-svg--close-modal");
});

document.addEventListener("keydown", function(event){
  if(event.keyCode == 27) {
    menuWrap.classList.remove("main-nav__wrapper--opened");
    menuButton.classList.remove("main-nav__toggle--open");
    svgOpen.classList.remove("main-nav__toggle-svg--open-modal");
    svgClose.classList.remove("main-nav__toggle-svg--close-modal");
    filterBlock.classList.remove("filter-by-country__block--active");
  }
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
