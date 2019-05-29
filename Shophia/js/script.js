

$(document).ready(function(){

$('.slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:true,
     navText:[],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1
        },
    }
    });
});


$(function(){

     new WOW().init();
});