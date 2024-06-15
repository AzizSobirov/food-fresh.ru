// TODO: Header
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.classList.toggle("header-sticky", window.scrollY > 0);
});

// TODO: Buy from Moscow
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
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".catalog .btn-next",
    prevEl: ".catalog .btn-prev",
  }
  ,
  breakpoints: {
    476: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    769: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 25
    }
  }
});

var specialSwiper = new Swiper(".special .swiper", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: ".special .btn-next",
    prevEl: ".special .btn-prev",
  },
  breakpoints: {
    641: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 25
    }
  }
});

var leadersSwiper = new Swiper(".leaders .swiper", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: ".leaders .btn-next",
    prevEl: ".leaders .btn-prev",
  },
  breakpoints: {
    641: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 25
    }
  }
});

var clientsSwiper = new Swiper(".clients .swiper", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: ".clients .btn-next",
    prevEl: ".clients .btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1025: {
      slidesPerView: 6,
      spaceBetween: 65,
    },
    1441: {
      slidesPerView: 8,
      spaceBetween: 65
    }
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