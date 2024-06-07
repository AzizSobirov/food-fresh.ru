// TODO: Header
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.classList.toggle("header-sticky", window.scrollY > 60);
});