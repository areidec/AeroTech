
$(function() {
		///search form
	$('.header__search-loop').on('click', function(){
		$('.search-form').toggleClass('active');

	});
	///search form
	
	//page scroll
	
	if(window.location.hash) {
		setPage(window.location.hash);

	}
	else {
		var firstContainerID = $('.page-section').attr('id');
		setPage(firstContainerID);
	}

	function setPage(id) {
		id = id.replace('#','','g');
		$('.page-section').removeClass('active');
		$('#'+id).addClass('active');
		window.location.hash = id;
		var offset = $('#'+id).position().top;
		$('.page__track').css({'transform': 'translateY(-'+ Math.abs(offset) +'px)'});
		$('.page__nav a').removeClass('active');
		$('.page__nav [href = "#' + id + '" ] ').addClass('active'); 
	 }
 

	$('.page__nav a, .page__bot-nav a').on('click', function(e) {
		e.preventDefault();
		setPage($(this).attr('href'));
	});


	//light box
	lightbox.option({
		'alwaysShowNavOnTouchDevices': false,
		'albumLabel': 'Изображение %1 из %2',
		'wrapAround': true
	  });

	///end



});
