// TODO: Header
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.classList.toggle("header-sticky", window.scrollY > 0);
});

// TODO: Swipers
var introSwiper = new Swiper(".intro .swiper", {
  slidesPerView: 1,
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".intro .swiper-pagination",
    clickable: true,
  }
});

var catalogSwiper = new Swiper(".catalog .swiper", {
  slidesPerView: 6,
  spaceBetween: 25,
  navigation: {
    nextEl: ".catalog .btn-next",
    prevEl: ".catalog .btn-prev",
  }
});

