function ready(fn) {
	// IE9 support
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(function() {
	var smGame = new StrangerMemory;
	var popoverToggle = document.querySelector(".music-widget .trigger");
	var popoverClose = document.querySelector(".music-widget .close");

	popoverToggle.addEventListener('click', function(e) {
		e.preventDefault();
		if (this.parentNode.classList.contains('in')) {
			this.parentNode.classList.remove('in');
		} else {
			this.parentNode.classList.add('in');
		}
	});

	popoverClose.addEventListener('click', function(e) {
		e.preventDefault();
		if (document.querySelector(".music-widget").classList.contains('in')) {
			document.querySelector(".music-widget").classList.remove('in');
		} else {
			document.querySelector(".music-widget").add('in');
		}
	});

	// when images are loaded
	window.onload = function() {
		// after .5 seconds
		setTimeout(function(){
			// fade out
			document.querySelector(".loading").classList.add("fadeOut");
			// fade in
			document.getElementById("main").classList.add("fadeIn");
		}, 500);
	};
});
