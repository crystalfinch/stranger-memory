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

	var panelToggle = document.querySelector(".panel .trigger");
	panelToggle.addEventListener('click', function() {
		if (this.parentNode.classList.contains('in')) {
			this.parentNode.classList.remove('in');
			this.title = 'Open Music Panel';
		} else {
			this.parentNode.classList.add('in');
			this.title = 'Close Music Panel';
		}
	});
});
