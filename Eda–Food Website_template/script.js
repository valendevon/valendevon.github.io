
$(function () {
  $(' .button  button').click(function(){
    var get_id = this.id;
    var get_current = $('.post_portfolio .' + get_id);

    $('.post_item').not(get_current).hide(500);
      get_current.show(500);
  });

$('#new').click(function(){
    $('.post_item').show(500);
});

});





$(document).ready(function() {

  $('.slider_block').owlCarousel({
    loop:true, //прокручивание элементов по кругу
    margin: 0, //отступы межу элементами
    nav:true,
    dots:false,
     navText:[], //отобразить элементы управления
    responsive:{
      0:{
        items:3,
        nav:false,
        dots:true
      }, //при ширине окна < 992 отображать 1 элемент
      600:{
        items:10
      }, 
    }
  });

});