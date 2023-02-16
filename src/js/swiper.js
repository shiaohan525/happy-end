var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        // type: "progressbar",
    },
});

var swiper2 = new Swiper(".mySwiper-vote", {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween:10,
        slidesPerGroup: 1,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 35,
        slidesPerGroup: 1,
      },
    },
});
var elements = document.getElementsByClassName('swiper-button-lock');
$(window).on('load',function(){
    $(elements).removeClass('swiper-button-lock');
});
  