var swiper = new Swiper(".cardSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 5000,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});