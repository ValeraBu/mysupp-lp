jQuery(document).ready(function($){
	$('#select').select2();

 var regularHight = $('.regulationsItem').height();
  $('.regulationsItem').height(85);

 $('.more').click(function (event) {
      if ($('.regulationsItem').hasClass('show')) {
        $('.regulationsItem').parent('.regulations').find('.regulationsItem').removeClass('show').animate({
      height: 85 + "px"
    }, 400, function() {});
      }else{
        $('.regulationsItem').parent('.regulations').find('.regulationsItem').addClass('show').animate({
      height: regularHight + "px"
    }, 400, function() {});
      }
});

	$('.slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true
	});

	$('.kindsItem__silhouette').click(function (event) {
      $(this).parent('.kindsItem').find('.about-kinds').addClass('open');
      $(this).parent('.kindsItem').find('.kindsItem__silhouette').addClass('open');
      $(this).parent('.kindsItem').siblings().find('.about-kinds').removeClass('open');
      $(this).parent('.kindsItem').siblings().find('.kindsItem__silhouette').removeClass('open');
     });
});

$(document).mouseup(function (e) {
   var aboutKinds = $(".about-kinds");
   if (aboutKinds.has(e.target).length === 0){
     $(".about-kinds").removeClass('open');
   }
 });
