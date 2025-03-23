const swiper = new Swiper('.rating-list', {
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
const swiper1 = new Swiper('.daily-roulette-list', {
    // Optional parameters
    slidesPerView: 7,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        700:{
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 20,
        },


    },
});
$(function (){
    $('.mob-menu').on('click',function (){
        $('.menu').toggle();
    })
    $('.btn-arrow').on('click',function (){
        $('.gide-info-text').toggle();
        $('.btn-arrow').toggleClass('btn-arrow-close');


    });

    $( ".landing-banner-item:nth-child(3)" )
        .on( "mouseenter", function() {
            $(".landing-banner-item" ).addClass('hover');
        } )
        .on( "mouseleave", function() {
            $(".landing-banner-item" ).removeClass('hover');
        } );
})