// create private scope
;(function( window ) {
	'use strict';

	// shuffle
	Array.prototype.shuffle = function() {
		// the array that shuffle() was called on
		var arr = this;

		// looping from the end of the array
		for (var i = arr.length-1; i >=0; i--) {
			// select a random number from the current array position or lower
			var randomIndex = Math.floor(Math.random()*(i+1));
			// save the random index as an item from the array
			var itemAtIndex = arr[randomIndex];

			// the switcheroo
			// set the random item as the current item
			arr[randomIndex] = arr[i];
			// set the current item as the random item
			// (if it weren't for the line below, the current item would be in 2 places in the array
			arr[i] = itemAtIndex;
		}

		return arr;
	}

	function StrangerMemory( settings ) {
		// do stuff
	}

	// add StrangerMemory to global namespace
	window.StrangerMemory = StrangerMemory;

})( window );

var smGame = new StrangerMemory;
