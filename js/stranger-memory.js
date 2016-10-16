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
			}/*,

			// NEED IMAGES
			{
				id: 19,
				name: "Nineteen",
				image: "images/will.jpg"
			},
			{
				id: 20,
				name: "Twenty",
				image: "images/will.jpg"
			},
			{
				id: 21,
				name: "Twenty-one",
				image: "images/will.jpg"
			},
			{
				id: 22,
				name: "Twenty-two",
				image: "images/will.jpg"
			},
			{
				id: 23,
				name: "Twenty-three",
				image: "images/will.jpg"
			},
			{
				id: 24,
				name: "Twenty-four",
				image: "images/will.jpg"
			},
			{
				id: 25,
				name: "Twenty-five",
				image: "images/will.jpg"
			},
			{
				id: 26,
				name: "Twenty-six",
				image: "images/will.jpg"
			},
			{
				id: 27,
				name: "Twenty-seven",
				image: "images/will.jpg"
			},
			{
				id: 28,
				name: "Twenty-eight",
				image: "images/will.jpg"
			},
			{
				id: 29,
				name: "Twenty-nine",
				image: "images/will.jpg"
			},
			{
				id: 30,
				name: "Thirty",
				image: "images/will.jpg"
			},
			{
				id: 31,
				name: "Thirty-one",
				image: "images/will.jpg"
			},
			{
				id: 32,
				name: "Thirty-two",
				image: "images/will.jpg"
			},
			{
				id: 33,
				name: "Thirty-three",
				image: "images/will.jpg"
			},
			{
				id: 34,
				name: "Thirty-four",
				image: "images/will.jpg"
			},
			{
				id: 35,
				name: "Thirty-five",
				image: "images/will.jpg"
			},
			{
				id: 36,
				name: "Thirty-six",
				image: "images/will.jpg"
			},
			{
				id: 37,
				name: "Thirty-seven",
				image: "images/will.jpg"
			},
			{
				id: 38,
				name: "Thirty-eight",
				image: "images/will.jpg"
			},
			{
				id: 39,
				name: "Thirty-nine",
				image: "images/will.jpg"
			},
			{
				id: 40,
				name: "Forty",
				image: "images/will.jpg"
			},
			{
				id: 41,
				name: "Forty-one",
				image: "images/will.jpg"
			},
			{
				id: 42,
				name: "Forty-two",
				image: "images/will.jpg"
			},
			{
				id: 43,
				name: "Forty-three",
				image: "images/will.jpg"
			},
			{
				id: 44,
				name: "Forty-four",
				image: "images/will.jpg"
			},
			{
				id: 45,
				name: "Forty-five",
				image: "images/will.jpg"
			},
			{
				id: 46,
				name: "Forty-six",
				image: "images/will.jpg"
			},
			{
				id: 47,
				name: "Forty-seven",
				image: "images/will.jpg"
			},
			{
				id: 48,
				name: "Forty-eight",
				image: "images/will.jpg"
			}*/
		],
		onGameStart : function() { return false; },
		onGameEnd : function() { return false; }
	}

	StrangerMemory.prototype._init = function() {

		// board
		this.board = document.createElement("div");
		this.board.id = "smBoard";
		this.board.className = "sm-board";
		document.getElementById(this.settings.wrapper).appendChild(this.board);

		this._startScreen();
	}

	StrangerMemory.prototype._startScreen = function() {

		// start screen
		this.startScreen = document.createElement("div");
		this.startScreen.id = "smStartScreen";
		this.startScreen.className = "sm-start-screen";
		document.getElementById("smBoard").appendChild(this.startScreen);

		this._setupGame();
	}

	StrangerMemory.prototype._setupGame = function() {
		var self = this;
		this.gameState = 1;
		this.cards = this.settings.cards.shuffle();
		this.card1 = "";
		this.card2 = "";
		this.card1id = "";
		this.card2id = "";
		this.card1flipped = false;
		this.card2flipped = false;
		this.flippedTiles = 0;
		this.chosenLevel = "";
		this.numMoves = 0;

		// utility bar
		this.utilityBar = document.createElement("div");
		this.utilityBar.className = "sm-utility";
		document.getElementById("smBoard").appendChild(this.utilityBar);

		// create cube wrap
		this.cubeWrap = document.createElement("div");
		this.cubeWrap.id = "smCubeWrap";
		this.cubeWrap.className = "sm-cube-wrap";

		// create cube
		this.cube = document.createElement("div");
		this.cube.id = "smCube";
		this.cube.className = "sm-cube";

		// append cube wrap and cube
		document.getElementById("smBoard").appendChild(this.cubeWrap);
		document.getElementById("smCubeWrap").appendChild(this.cube);

		// start screen markup
		this.startScreenHTML = '<h2>Select Level</h2>' +
			'<ul>' +
				'<li data-level="1">Level 1</li>' +
				'<li data-level="2">Level 2</li>' +
				'<li data-level="3">Level 3</li>' +
			'<ul>';
		this.startScreen.innerHTML = this.startScreenHTML;

		this._startScreenEvents();
	}

	StrangerMemory.prototype._startScreenEvents = function() {
		var self = this;
		var levelsNodes = this.startScreen.querySelectorAll(".sm-start-screen ul li[data-level]");

		for (var i = 0, len = levelsNodes.length; i < len; i++) {
			var levelNode = levelsNodes[i];

			levelNode.addEventListener("click", function(e) {
				e.preventDefault();
				if (self.gameState === 1) {
					self._setupGameWrapper(this);
				}
			});
		}

		/*
		levelsNodes.forEach((levelNode) => {
			levelNode.addEventListener("click", function(e) {
				//console.log("You selected " + levelNode.innerHTML);
				if (self.gameState === 1) {
					//console.log("Game State is 1");
					self._setupGameWrapper(this);
				}
			});
		});
		*/
	}

	StrangerMemory.prototype._setupGameWrapper = function(levelNode) {
		var self = this;
		this.chosenLevel = levelNode.getAttribute("data-level");

		// remove start screen
		this.startScreen.parentNode.removeChild(this.startScreen);

		// add level class to board
		this.board.classList.add("sm-level-" + this.chosenLevel);

		// utilities markup & append to utility bar
		this.utilities = '<div class="sm-utility__meta sm-utility__meta--level">' +
				'Level: <span class="sm-utility__meta__digit"></span>' +
			'</div>' +
			'<div class="sm-utility__meta sm-utility__meta--moves">' +
				'Moves: <span class="sm-utility__meta__digit">0</span>' +
			'</div>' +
			'<button id="resetGameBtn" class="sm-utility__button sm-utility__button--reset">Start Over</button>';
		this.utilityBar.innerHTML = this.utilities;

		// display level in utility bar
		document.querySelector(".sm-utility .sm-utility__meta--level .sm-utility__meta__digit").innerHTML = this.chosenLevel;

		// call resetGame when reset button clicked
		document.getElementById("resetGameBtn").addEventListener("click", function(e) {
			self.resetGame();
		});

		this._renderTiles();
	}

	StrangerMemory.prototype._renderTiles = function() {
		this.tileImages = 0;
		this.newCards = [];
		var faceNum = 1; // used for the number at the end of each cube face's class

		switch(parseInt(this.chosenLevel)) {
			case 1:
				this.tileImages = 12; // 6 faces of 4 tiles (24 tiles), 12 images needed
				console.log('Level 1 chosen, so ' + (this.tileImages * 2) + ' tiles');
				break;
			case 2:
				this.tileImages = 27; // 6 faces of 9 tiles (54 tiles), 27 images needed
				console.log('Level 2 chosen, so ' + (this.tileImages * 2) + ' tiles');
				break;
			case 3:
				this.tileImages = 48; // 6 faces of 16 tiles (96 tiles), 48 images needed
				console.log('Level 3 chosen, so ' + (this.tileImages * 2) + ' tiles');
				break;
		}

		for (var i = 0, len = this.tileImages; i < len; i++) {
			// push the tiles into the newCards array twice
			this.newCards.push(this.cards[i], this.cards[i]);
		}

		// shuffle so the duplicate cards aren't right next to eachother
		this.newCards.shuffle();

		// tiles markup
		this.tilesHTML = '<div class="cube__face cube__face--' + faceNum +'">' +
			'<div class="inside">' +
				'<ul class="tiles">';

		for (var i = 0; i < this.newCards.length; i++) {
			var num = i + 1;
			var cubeFaces = this.newCards.length / 6; // 6 faces of the cube

			this.tilesHTML += '<li class="tile" data-id="' + this.newCards[i].id + '">' +
				'<img src="' + this.newCards[i].image + '" alt="">' +
			'</li>';

			// Split into 6 faces
			// if divisible by 6 and not the last item
			if (num % cubeFaces == 0 && num != this.newCards.length) {
				faceNum++;

				this.tilesHTML += '</ul>' +
					'</div>' + // .inside closing tag
				'</div>' + // .cube__face closing tag
				'<div class="cube__face cube__face--' + faceNum + '">' +
					'<div class="inside">' +
						'<ul class="tiles">';
			}

		}
		this.tilesHTML += '</ul>';
		this.cube.innerHTML = this.tilesHTML;
		this.gameState = 2;
		// UNCOMMENT LINE BELOW WHEN FINISHED
		//this.settings.onGameStart();
		this._gamePlay();
	}

	StrangerMemory.prototype._gamePlay = function() {
		var tiles = document.querySelectorAll(".tile");

		// set up tile events for each tile
		for (var i = 0, len = tiles.length; i < len; i++) {
			var tile = tiles[i];
			this._tileEvents(tile);
		}
	}

	StrangerMemory.prototype._tileEvents = function(tile) {
		var self = this;

		tile.addEventListener("click", function(e) {
			if (!this.classList.contains("flipped")) { // if the tile does not have the 'flipped' class
				if (self.card1flipped === false && self.card2flipped === false) { // if no tiles are flipped
					this.classList.add("flipped");
					self.card1 = this;
					self.card1id = this.getAttribute("data-id");
					self.card1flipped = true;
				} else if (self.card1flipped === true && self.card2flipped === false) { // if 1 tile is flipped
					this.classList.add("flipped");
					self.card2 = this;
					self.card2id = this.getAttribute("data-id");
					self.card2flipped = true;
					// do the 2 tiles match?
					if (self.card1id == self.card2id) {
						// matchey!
						self._tilesMatch();
					} else {
						// no matchey!
						self._tilesMismatch();
					}
				}
			}
		});
	}

	StrangerMemory.prototype._tilesMatch = function() {
		var self = this;
		//console.log('match!');

		window.setTimeout(function() {
			// add 'match' class
			self.card1.classList.add("match");
			self.card2.classList.add("match");
			// reset game variables so a new pair of tiles can be evaluated
			self._resetGameVars();
			// add 2 more to the total flipped tile count
			self.flippedTiles = self.flippedTiles + 2;
			// if all the tiles are flipped, you win!
			if (self.flippedTiles == self.newCards.length) {
				self._winGame();
			}
		}, 1000);

		// increment the Moves counter
		this._gameCounterPlusOne();
	}

	StrangerMemory.prototype._tilesMismatch = function() {
		var self = this;
		//console.log('no matchey!');

		window.setTimeout(function(){
			// remove 'flipped' class
			self.card1.classList.remove("flipped");
			self.card2.classList.remove("flipped");
			// reset game variables so a new pair of tiles can be evaluated
			self._resetGameVars();
		}, 1000);

		// increment the Moves counter
		this._gameCounterPlusOne();
	}

	StrangerMemory.prototype._resetGameVars = function() {
		// reset game variables so a new pair of tiles can be evaluated
		this.card1 = "";
		this.card2 = "";
		this.card1id = "";
		this.card2id = "";
		this.card1flipped = false;
		this.card2flipped = false;
	}

	StrangerMemory.prototype._gameCounterPlusOne = function() {
		// keep track of how many moves have been made
		this.numMoves = this.numMoves + 1;
		document.querySelector(".sm-utility .sm-utility__meta--moves .sm-utility__meta__digit").innerHTML = this.numMoves;
	}

	StrangerMemory.prototype._clearGame = function() {
		// remove the cube
		if (this.cube.parentNode !== null) {
			this.cubeWrap.removeChild(this.cube);
		}
		// remove the cube wrap
		if (this.cubeWrap.parentNode !== null) {
			this.board.removeChild(this.cubeWrap);
		}
		// remove the utility bar
		if (this.utilityBar.parentNode !== null) {
			this.board.removeChild(this.utilityBar);
		}
	}

	StrangerMemory.prototype._winGame = function() {
		var self = this;

		if (this.settings.onGameEnd() === false) { // if no onGameEnd defined other than the default in settings
			this._clearGame();

			// game win message
			this.gameWinMsg = document.createElement("div");
			this.gameWinMsg.id = "smWinMsg";
			this.gameWinMsg.className = "sm-win-msg";
			this.gameWinMsg.innerHTML = '<p>You won with ' + this.numMoves + ' moves!</p>' +
				'<p>Play Again?</p>' +
				'<button id="playAgainBtn" class="sm-utility__button sm-utility__button--reset">New Game</button>';
			document.getElementById("smBoard").appendChild(this.gameWinMsg);

			// New Game button event listener
			document.getElementById("playAgainBtn").addEventListener("click", function(e) {
				// remove the game win message
				if (this.gameWinMsg.parentNode !== null) {
					this.board.removeChild(this.gameWinMsg);
				}
				self.resetGame();
			});
		} else { // if an onGameEnd defined to override the default, call it
			this.settings.onGameEnd();
		}
	}

	StrangerMemory.prototype.resetGame = function() {
		this._clearGame();

		// remove level class from board
		this.board.classList.remove("sm-level-" + this.chosenLevel);

		this._startScreen();
	}

	// Cube Rotation
	var xAngle = 0, yAngle = 0;
	document.addEventListener('keydown', function(e) {
		var eCode = e.charCode || e.keyCode;

		switch (eCode) {
			case 37: // Left arrow pressed
				yAngle -= 90;
				break;
			case 38: // Up arrow pressed
				xAngle += 90;
				break;
			case 39: // Right arrow pressed
				yAngle += 90;
				break;
			case 40: // Down arrow pressed
				xAngle -= 90;
				break;
		}
		document.querySelector(".sm-cube").style.transform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	}, false);

	// add StrangerMemory to global namespace
	window.StrangerMemory = StrangerMemory;

})( window );
