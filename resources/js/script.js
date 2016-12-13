/* sticky navigation */

jQuery(document).ready(function() {
	
	/* create a variable with position (from the top) of point #first-section */
	var sectionOffset = jQuery("#sticky-header-section").offset().top;
	
	/* during scrolling */
	jQuery(window).scroll(function() {	
	
	/* creates variable which tells how far scrolled downwards from top */
	var scrollPos = jQuery(window).scrollTop();
	
	/* if scrollposition is higher or equal to the point of #first-section then add the class of fixed to the nav element */
	if(scrollPos >= sectionOffset) {
		
		jQuery("nav").addClass("fixed");
		
	}
	/* otherwise, remove the class fixed from the nav element */
	else {
		jQuery("nav").removeClass("fixed")
	}
	
	
	
	})

	
	
	
	
}, {
	/* do this 60px after the point #first-section is being hit */
	
offset : '60px;' }

);



$('.js---scroll-to-start').click(function() {
	$('html,body').animate({scrollTop: $('.js---section-plans').offset().top},1000);
});

