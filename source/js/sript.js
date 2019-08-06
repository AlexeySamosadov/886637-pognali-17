var menuButton = document.querySelector(".main-nav__toggle--open")
var menuButtonClose = document.querySelector(".main-nav__toggle--close");
var menuWrap = document.querySelector(".main-nav__wrapper");

menuButton.addEventListener("click", function() {
  menuWrap.classList.add("display-flex");
});

menuButtonClose.addEventListener("click", function () {
  menuWrap.classList.remove("display-flex");
})

document.addEventListener("keydown", function(event){
  if(event.keyCode == 27) {
    menuWrap.classList.remove("display-flex");
  }
});
