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
