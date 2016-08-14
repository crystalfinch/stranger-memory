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

	// default settings
	StrangerMemory.prototype.settings = {
		wrapper : "sm-wrapper",
		cards : [
			{
				id: 1,
				name: "Barb",
				image: "images/barb.jpg"
			},
			{
				id: 2,
				name: "Chief Hopper",
				image: "images/chief-hopper.jpg"
			},
			{
				id: 3,
				name: "Connie",
				image: "images/connie.jpg"
			},
			{
				id: 4,
				name: "Dr. Brenner",
				image: "images/dr-brenner.jpg"
			},
			{
				id: 5,
				name: "Dustin",
				image: "images/dustin.jpg"
			},
			{
				id: 6,
				name: "Eggos",
				image: "images/eggos.jpg"
			},
			{
				id: 7,
				name: "Eleven",
				image: "images/eleven.jpg"
			},
			{
				id: 8,
				name: "Jonathan",
				image: "images/jonathan.jpg"
			},
			{
				id: 9,
				name: "Joyce",
				image: "images/joyce.jpg"
			},
			{
				id: 10,
				name: "Karen",
				image: "images/karen.jpg"
			},
			{
				id: 11,
				name: "Lucas",
				image: "images/lucas.jpg"
			},
			{
				id: 12,
				name: "Mike",
				image: "images/mike.jpg"
			},
			{
				id: 13,
				name: "The Monster",
				image: "images/monster.jpg"
			},
			{
				id: 14,
				name: "Mr. Clarke",
				image: "images/mr-clarke.jpg"
			},
			{
				id: 15,
				name: "Nancy",
				image: "images/nancy.jpg"
			},
			{
				id: 16,
				name: "Steve",
				image: "images/steve.jpg"
			},
			{
				id: 17,
				name: "Troy",
				image: "images/troy.jpg"
			},
			{
				id: 18,
				name: "Will",
				image: "images/will.jpg"
			}
		]
	}

	// add StrangerMemory to global namespace
	window.StrangerMemory = StrangerMemory;

})( window );

var smGame = new StrangerMemory;
