$(function() {
    console.log('dima2')
	if(window.location.hash) {
		setPage(window.location.hash);
	}
	else {
		var firstContainerID = $('.fullpage-container').attr('id');
		setPage(firstContainerID);
	}

	function setPage(id) {
		id = id.replace('#','','g');
		$('.fullpage-container').removeClass('active');
		$(`#${id}`).addClass('active');
		window.location.hash = id;
		var offset = $(`#${id}`).position().top;
		console.log(id, offset);
		$('.fullpage-track').css({'transform': `translateY(-${offset}px)`});
	}


	$('.full-page-nav button').on('click', function() {
		setPage($(this).attr('hash'));
	})


});