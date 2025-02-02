const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 20,
        },


    },
});
$(function (){
    $('.mob-menu').on('click',function (){
        $('.menu').toggle();
    })
})