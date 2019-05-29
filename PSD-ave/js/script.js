$(function(){
	$('.search1').on('click', function(){
		$('.fl_smenu .navbar-form').slideToggle();
	});
});




$(function () {
  $(' .button  button').click(function(){
    var get_id = this.id;
    var get_current = $('.img_content .' + get_id);

    $('.op1').not(get_current).hide(500);
      get_current.show(500);
  });

$('#popular').click(function(){
    $('.op1').show(500);
});

});
