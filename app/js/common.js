
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
		navSetColor();
	 }
 

	$('.page__nav a, .page__bot-nav a, .empty').on('click', function(e) {
		e.preventDefault();
		setPage($(this).attr('href'));
	});


	//light box
	lightbox.option({
		'alwaysShowNavOnTouchDevices': false,
		'albumLabel': 'Изображение %1 из %2',
		'wrapAround': true
	  });

	$('.btn-tgl').on('click', function(e){
		e.preventDefault();
		$('.vacancy__body').slideToggle('slow');
		$('.vacancy__box').toggleClass('active');
	});
	///end


	function navSetColor(){
		if( $('.page__nav [href = "#history" ]').hasClass('active') ) {
			$('.page__nav').addClass('hist');
		} else if ($('.page__nav')){
			$('.page__nav').removeClass('hist');
		};
	};

	//label
	$('.close-form, .popup__overlay, .btn-hollow').on('click', function(){
		$('.popup').fadeToggle()
	});

	$('.form-input, .form-text').focusout(function(){
		console.log($(this).val())
		if($(this).val().length > 0) {
			$(this).parents('.form-field').find('label').addClass('showUp');
		}
		else {
			$(this).parents('.form-field').find('label').removeClass('showUp');
		}
	});

	$('.pop-form').submit(function(e){
		e.preventDefault();
		var allInputs = $('.pop-form input, .pop-form .form-text');
		  
		allInputs.each(function(element) {
			if(!$(allInputs[element]).val()){
				$(allInputs[element]).parents('.form-field').addClass('error');
			}
			else {
				$(allInputs[element]).parents('.form-field').removeClass('error');
			}
		});

		
		return false;
	})
});
