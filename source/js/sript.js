var menuButton = document.querySelector(".main-nav__toggle")
var menuWrap = document.querySelector(".main-nav__wrapper");
var svgOpen = document.querySelector(".main-nav__toggle-svg--open");
var svgClose = document.querySelector(".main-nav__toggle-svg--close");

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
  }
});
