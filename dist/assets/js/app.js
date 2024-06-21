// TODO: Header
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.classList.toggle("header-sticky", window.scrollY > 0);
});

function toggleCatalog() {
  const btn = document.querySelector('.header__nav-btn')
  const categories = document.querySelector(".header__nav .categories");
  if (categories.classList.contains("active")) {
    categories.classList.remove("active");
    categories.style.animation = 'hideCatalog 0.3s ease-in-out'
    setTimeout(() => {
      categories.style.display = "none";
    }, 300)
  } else {
    categories.classList.add("active");
    categories.style.display = "flex";
    categories.style.animation = 'showCatalog 0.3s ease-in-out'
  }

  document.addEventListener('click', event => {
    const isClickInside = btn.contains(event.target)

    if (!isClickInside) {
      categories.classList.remove("active");
      categories.style.animation = 'hideCatalog 0.3s ease-in-out'
      setTimeout(() => {
        categories.style.display = "none";
      }, 300)
    }
  })
}

function toggleCategories() {
  const categories = document.querySelector(".mobile__categories");
  categories.classList.toggle("active");
}

function toggleContacts() {
  const socials = document.querySelector('.mobile__tabs .socials')
  const btns = socials.querySelectorAll('a')
  const btnsReversed = [...btns].reverse()

  if (socials.classList.contains('active')) {
    socials.classList.remove('active')
    btns.forEach((el, idx) => {
      el.style.opacity = 0
      el.style.transitionDelay = `0.${idx}s`
      setTimeout(() => {
        el.style.display = 'none'
      }, 350);
    })
  } else {
    socials.classList.add('active')
    btnsReversed.forEach((el, idx) => {
      el.style.display = 'flex'
      setTimeout(() => {
        el.style.opacity = 1
        el.style.transitionDelay = `0.${idx}s`
      }, 10);
    })
  }
}

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

// TODO: Popup
[].forEach.call(document.querySelectorAll(".v-mask"), function (input) {
  let keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      newValue = newValue.slice(0, i);
    }
    let reg = matrix
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (
      !reg.test(this.value) ||
      this.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
    )
      this.value = newValue;
    if (event.type == "blur" && this.value.length < 5) this.value = "";

    if (this.value.length == 18 || this.value.length == 0) {
      input.dataset.numbervalid = "true";
    } else {
      input.dataset.numbervalid = "false";
    }
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false);
});

class Popup {
  constructor(name, data) {
    this.popup = document.querySelector(name);
    this.body = document.querySelector("body");
    this.data = data;
  }
  open() {
    this.popup.style.display = "flex";
    setTimeout(() => {
      this.popup.style.opacity = "1";
      this.popup.style.transform = "scale(1)";
      this.body.classList.add("overflow-hidden");
    }, 50);
  }
  close() {
    this.popup.style.opacity = "0";
    this.popup.style.transform = "scale(0.85)";
    this.body.classList.remove("overflow-hidden");

    setTimeout(() => {
      this.popup.style.display = "none";
    }, 500);
  }
}

const openPopup = (name, data) => {
  new Popup(`.popup--${name}`, data).open();
};

const closePopup = (name, data) => {
  new Popup(`.popup--${name}`, data).close();
};

const popupForm = document.querySelector(".popup form");
popupForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = popupForm.querySelector("#name");
  let email = popupForm.querySelector("#email");
  let phone = popupForm.querySelector("#phone");

  if (phone.dataset.numbervalid === "true") {
    // alert("Спасибо за заявку. В ближайшее время с вами свяжутся.");
    let content = document.querySelector(".popup #form-content");
    let success = document.querySelector(".popup #form-success");

    content.style.display = "none";
    success.style.display = "flex";

    setTimeout(() => {
      closePopup('form');
      content.style.display = "flex";
      success.style.display = "none";
    }, 3000);
  }
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
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: ".category__leaders .btn-next",
    prevEl: ".category__leaders .btn-prev",
  },
  breakpoints: {
    641: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1381: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  }
});