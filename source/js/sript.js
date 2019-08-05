var menuButton = document.querySelector(".main-nav_toggle");
var menuWrap = document.querySelector(".main-nav__wrapper");

menuButton.addEventListener("click", function() {
  menuWrap.classList.add("display-flex")
});
