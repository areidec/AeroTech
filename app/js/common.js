
$(function() {
		///search form
	$('.header__search-loop').on('click', function(){
		$('.search-form').toggleClass('active');

	});
	$('.history').removeClass('init');
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
		console.log(id, offset);
		$('.page__track').css({'transform': 'translateY(-'+ Math.abs(offset) +'px)'});
		console.log({'transform': 'translateY(-'+ (parseInt(offset) ) +'px)'})
	}


	$('.page__nav a').on('click', function(e) {
		e.preventDefault();
		setPage($(this).attr('href'));
	});

	///end



});
