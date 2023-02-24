/*$('document').ready(function(){
	alert('hi');
})*/

$(document).ready(function(){
	var mouseIdle;
	var screensaverState = false;
	var timeIdle = 3;

	function displayScreensaver(){
		$('.screensaver').fadeIn();
		screensaverState = true;
	};

	function stopScreensaver(){
		$('.screensaver').fadeOut();
		screensaverState = false;
	};

	$(document).mousemove(function(){
		clearTimeout(mouseIdle);

		if (screensaverState) {
		stopScreensaver();
		}

		mouseIdle = setTimeout(function(){
			displayScreensaver();
		}, 1000 * timeIdle);
	});

	$(document).mousemove(function(){
		clearTimeout(mouseIdle);

		mouseIdle = setTimeout(function(){
			displayScreensaver();
		}, 1000 * timeIdle);
	});

});
