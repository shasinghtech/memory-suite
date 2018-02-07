$(document).ready(function(){
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    if (scroll >= 100) {
	        $(".navbar-fixed-top").addClass("dark-header");
	    } else {
	        $(".navbar-fixed-top").removeClass("dark-header");
	    }
	});

	$('#topSlider').bxSlider({
	  slideWidth: 300,
	  autoReload: true,
	  pager: true,
	  controls: false,
	  auto: true,
	  minSlides: 4,
	  maxSlides: 4,
	  //moveSlides: 1,
	  
	 /* breaks: [{screen:0, slides:1, pager:false},{screen:460, slides:2},{screen:768, slides:3}]*/
	});
});