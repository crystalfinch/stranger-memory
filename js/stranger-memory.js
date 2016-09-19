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
		this._init();
	}

	// default settings
	StrangerMemory.prototype.settings = {
		wrapper : "wrapper",
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

	StrangerMemory.prototype._init = function() {

		// board
		this.board = document.createElement("div");
		this.board.id = "smBoard";
		this.board.className = "board";
		document.getElementById(this.settings.wrapper).appendChild(this.board);

		// utility bar
		this.utilityBar = document.createElement("div");
		this.utilityBar.className = "utility";
		document.getElementById("smBoard").appendChild(this.utilityBar);

		// start screen
		this.startScreen = document.createElement("div");
		this.startScreen.id = "smStartScreen";
		this.startScreen.className = "start-screen";
		document.getElementById("smBoard").appendChild(this.startScreen);

		// tile wrapper
		this.tileWrapper = document.createElement("ul");
		this.tileWrapper.className = "tiles";

		this._setupGame();
	}

	StrangerMemory.prototype._setupGame = function() {
		var self = this;
		this.gameState = 1;
		this.cards = this.settings.cards.shuffle();
		//console.table(this.cards);
		this.card1 = "";
		this.card2 = "";
		this.card1flipped = false;
		this.card2flipped = false;
		this.flippedTiles = 0;
		this.chosenLevel = "";
		this.numMoves = 0;

		this.utilities = '<div class="utility__meta">' +
				'Level: <span class="utility__meta__digit">4</span>' +
			'</div>' +
			'<div class="utility__meta">' +
				'Moves: <span class="utility__meta__digit">6</span>' +
			'</div>' +
			'<button id="resetGameBtn" class="utility__button utility__button--reset">Reset Game</button>';
		this.utilityBar.innerHTML = this.utilities;
		this.board.appendChild(this.utilityBar);

		this.startScreenHTML = '<h2>Select Level</h2>' +
			'<ul>' +
				'<li data-level="1">Level 1</li>' +
				'<li data-level="2">Level 2</li>' +
				'<li data-level="3">Level 3</li>' +
			'<ul>';
		this.startScreen.innerHTML = this.startScreenHTML;
		this.board.appendChild(this.startScreen);

		document.getElementById("resetGameBtn").addEventListener("click", function(e) {
			self.resetGame();
		});

		this._startScreenEvents();
	}

	StrangerMemory.prototype._startScreenEvents = function() {
		var self = this;
		var levelsNodes = this.startScreen.querySelectorAll(".start-screen ul li[data-level]");

		levelsNodes.forEach((levelNode) => {
			levelNode.addEventListener("click", function(e) {
				//console.log("You selected " + levelNode.innerHTML);
				if (self.gameState === 1) {
					//console.log("Game State is 1");
					self._setupGameWrapper(this);
				}
			});
		});
	}

	StrangerMemory.prototype._setupGameWrapper = function(levelNode) {
		this.level = levelNode.getAttribute("data-level");
		this.startScreen.parentNode.removeChild(this.startScreen);
		this.board.classList.add("sm-level-" + this.level);
		this.board.appendChild(this.tileWrapper);

		this.chosenLevel = this.level;
		console.log("Your chosen level is " + this.chosenLevel);
	}

	// add StrangerMemory to global namespace
	window.StrangerMemory = StrangerMemory;

})( window );

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
});
