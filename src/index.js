import "./sass/main.scss";

const themeToggleBtn = document.querySelector(".js-theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  this.classList.toggle("clicked");
  document.body.classList.toggle("darkmode");
});
