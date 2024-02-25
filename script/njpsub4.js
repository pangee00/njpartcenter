document.addEventListener('DOMContentLoaded', () => {

    // swiper slide >> 추가
    var swiperMini = new Swiper(".swiperMini", {
        loop: true,
        slidesPerView: 1,

        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });
    
    var swiperMain = new Swiper(".swiperMain", {
        loop: true,
        slidesPerView: 1,

        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    swiperMini.controller.control = swiperMain;
    swiperMain.controller.control = swiperMini;
});