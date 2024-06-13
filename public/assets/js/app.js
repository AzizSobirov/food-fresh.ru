// TODO: Header
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.classList.toggle("header-sticky", window.scrollY > 0);
});


//** buy moscow **/
let buy = document.querySelector(".buy");
if (buy) {
  const dropwown = buy.querySelector(".buy__dropdown");
  const content = buy.querySelector(".buy__dropdown-content");
  const btn = buy.querySelector(".btn");

  btn.addEventListener("click", () => {
    const isActive = dropwown.classList.contains("active");

    if (!isActive) {
      dropwown.classList.add("active");
      dropwown.style.maxHeight = content.scrollHeight + "px";
      btn.innerHTML = "Скрыть";
    } else {
      dropwown.classList.remove("active");
      dropwown.style.maxHeight = "110px";
      btn.innerHTML = "Подробнее";
    }
  });
}


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

var specialSwiper = new Swiper(".special .swiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  navigation: {
    nextEl: ".special .btn-next",
    prevEl: ".special .btn-prev",
  }
});

var clientsSwiper = new Swiper(".clients .swiper", {
  slidesPerView: 8,
  spaceBetween: 65,
  navigation: {
    nextEl: ".clients .btn-next",
    prevEl: ".clients .btn-prev",
  }
});

var categoryLeaders = new Swiper(".category__leaders .swiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  navigation: {
    nextEl: ".category__leaders .btn-next",
    prevEl: ".category__leaders .btn-prev",
  }
});



