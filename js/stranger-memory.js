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
		// initialize!
		this._init();
	}

	// default settings
	StrangerMemory.prototype.settings = {
		wrapper : "wrapper",
		tiles : [
			{
				id: 1,
				name: "Barb's Bandage",
				image: "images/tiles/barb-bandage.jpg"
			},
			{
				id: 2,
				name: "Barb with beer",
				image: "images/tiles/barb-beer.jpg"
			},
			{
				id: 3,
				name: "Barb in the car",
				image: "images/tiles/barb-car.jpg"
			},
			{
				id: 4,
				name: "Barb at the house",
				image: "images/tiles/barb-house.jpg"
			},
			{
				id: 5,
				name: "Barb at the pool",
				image: "images/tiles/barb-pool.jpg"
			},
			{
				id: 6,
				name: "Barb",
				image: "images/tiles/barb.jpg"
			},
			{
				id: 7,
				name: "Bullies",
				image: "images/tiles/bullies.jpg"
			},
			{
				id: 8,
				name: "Chief Hopper",
				image: "images/tiles/chief-hopper.jpg"
			},
			{
				id: 9,
				name: "Connie",
				image: "images/tiles/connie-smile.jpg"
			},
			{
				id: 10,
				name: "Connie",
				image: "images/tiles/connie.jpg"
			},
			{
				id: 11,
				name: "Dr. Brenner and Eleven",
				image: "images/tiles/dr-brenner-eleven.jpg"
			},
			{
				id: 12,
				name: "Dr. Brenner in suit",
				image: "images/tiles/dr-brenner-suit.jpg"
			},
			{
				id: 13,
				name: "Dr. Brenner in suit",
				image: "images/tiles/dr-brenner-suit2.jpg"
			},
			{
				id: 14,
				name: "Dr. Brenner",
				image: "images/tiles/dr-brenner.jpg"
			},
			{
				id: 15,
				name: "Dustin and the bullies",
				image: "images/tiles/dustin-bullies.jpg"
			},
			{
				id: 16,
				name: "Dustin",
				image: "images/tiles/dustin-smiling.jpg"
			},
			{
				id: 17,
				name: "Dustin",
				image: "images/tiles/dustin.jpg"
			},
			{
				id: 18,
				name: "Eggos",
				image: "images/tiles/eggos.jpg"
			},
			{
				id: 19,
				name: "Eleven",
				image: "images/tiles/eleven-door.jpg"
			},
			{
				id: 20,
				name: "Eleven",
				image: "images/tiles/eleven-fries.jpg"
			},
			{
				id: 21,
				name: "Eleven and Mike",
				image: "images/tiles/eleven-mike.jpg"
			},
			{
				id: 22,
				name: "Eleven",
				image: "images/tiles/eleven-mouthbreather.jpg"
			},
			{
				id: 23,
				name: "Eleven pointing",
				image: "images/tiles/eleven-pointing.jpg"
			},
			{
				id: 24,
				name: "Eleven in the rain",
				image: "images/tiles/eleven-rain.jpg"
			},
			{
				id: 25,
				name: "Eleven in the tank",
				image: "images/tiles/eleven-tank.jpg"
			},
			{
				id: 26,
				name: "Eleven with wig",
				image: "images/tiles/eleven-wig.jpg"
			},
			{
				id: 27,
				name: "Friends hugging",
				image: "images/tiles/friends-hugging.jpg"
			},
			{
				id: 28,
				name: "Jonathan and Nancy",
				image: "images/tiles/jonathan-nancy.jpg"
			},
			{
				id: 29,
				name: "Jonathan",
				image: "images/tiles/jonathan-pillow.jpg"
			},
			{
				id: 30,
				name: "Jonathan",
				image: "images/tiles/jonathan.jpg"
			},
			{
				id: 31,
				name: "Joyce with the flashlight",
				image: "images/tiles/joyce-flashlight.jpg"
			},
			{
				id: 32,
				name: "Joyce and the lights",
				image: "images/tiles/joyce-lights.jpg"
			},
			{
				id: 33,
				name: "Joyce and the lights",
				image: "images/tiles/joyce-lights2.jpg"
			},
			{
				id: 34,
				name: "Joyce on the phone",
				image: "images/tiles/joyce-phone.jpg"
			},
			{
				id: 35,
				name: "Joyce scared",
				image: "images/tiles/joyce-scared.jpg"
			},
			{
				id: 36,
				name: "Joyce smoking",
				image: "images/tiles/joyce-smoking.jpg"
			},
			{
				id: 37,
				name: "Joyce",
				image: "images/tiles/joyce.jpg"
			},
			{
				id: 38,
				name: "Karen",
				image: "images/tiles/karen.jpg"
			},
			{
				id: 39,
				name: "Lucas",
				image: "images/tiles/lucas-walkie.jpg"
			},
			{
				id: 40,
				name: "Lucas",
				image: "images/tiles/lucas.jpg"
			},
			{
				id: 41,
				name: "Lucas",
				image: "images/tiles/lucas2.jpg"
			},
			{
				id: 42,
				name: "Mike",
				image: "images/tiles/mike-walkie.jpg"
			},
			{
				id: 43,
				name: "Mike",
				image: "images/tiles/mike.jpg"
			},
			{
				id: 44,
				name: "The Monster",
				image: "images/tiles/monster.jpg"
			},
			{
				id: 45,
				name: "The Monster",
				image: "images/tiles/monster2.jpg"
			},
			{
				id: 46,
				name: "Mr. Clarke explaining",
				image: "images/tiles/mr-clarke-explaining.jpg"
			},
			{
				id: 47,
				name: "Mr. Clarke",
				image: "images/tiles/mr-clarke.jpg"
			},
			{
				id: 48,
				name: "Mr. Clarke",
				image: "images/tiles/mr-clarke2.jpg"
			},
			{
				id: 49,
				name: "Nancy and Jonathan",
				image: "images/tiles/nancy-jonathan.jpg"
			},
			{
				id: 50,
				name: "Nancy on the phone",
				image: "images/tiles/nancy-phone.jpg"
			},
			{
				id: 51,
				name: "Nancy scared",
				image: "images/tiles/nancy-scared.jpg"
			},
			{
				id: 52,
				name: "Nancy in the Upside Down",
				image: "images/tiles/nancy-upside-down.jpg"
			},
			{
				id: 53,
				name: "Nancy in the Upside Down",
				image: "images/tiles/nancy-upside-down2.jpg"
			},
			{
				id: 54,
				name: "Nancy",
				image: "images/tiles/nancy.jpg"
			},
			{
				id: 55,
				name: "Hawkins Police",
				image: "images/tiles/police.jpg"
			},
			{
				id: 56,
				name: "Steve",
				image: "images/tiles/steve.jpg"
			},
			{
				id: 57,
				name: "Train tracks",
				image: "images/tiles/train-tracks.jpg"
			},
			{
				id: 58,
				name: "Troy",
				image: "images/tiles/troy.jpg"
			},
			{
				id: 59,
				name: "The Upside Down",
				image: "images/tiles/upside-down.jpg"
			},
			{
				id: 60,
				name: "Will with the gun",
				image: "images/tiles/will-gun.jpg"
			},
			{
				id: 61,
				name: "Will on the phone",
				image: "images/tiles/will-phone.jpg"
			},
			{
				id: 62,
				name: "Will",
				image: "images/tiles/will.jpg"
			}
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
		this.startScreen.className = "sm-start-screen sm-alert";
		document.getElementById("smBoard").appendChild(this.startScreen);

		setTimeout(function() {
			// fade in start screen
			document.querySelector(".sm-start-screen").classList.add('fadeIn');
		}, 500);

		this._setupGame();
	}

	StrangerMemory.prototype._setupGame = function() {
		var self = this;
		this.gameState = 1;
		this.tiles = this.settings.tiles.shuffle();
		this.tile1 = "";
		this.tile2 = "";
		this.tile1id = "";
		this.tile2id = "";
		this.tile1flipped = false;
		this.tile2flipped = false;
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
			'<ul class="sm-level-select">' +
				'<li data-level="1">Level 1</li>' +
				'<li data-level="2">Level 2</li>' +
				'<li data-level="3">Level 3</li>' +
			'</ul>' +
			'<p class="warning"><span>Instructions:</span> After choosing your level, you will use your arrow keys to move the cube.</p>';
		this.startScreen.innerHTML = this.startScreenHTML;

		this._startScreenEvents();
	}

	StrangerMemory.prototype._startScreenEvents = function() {
		var self = this;
		var levelsNodes = this.startScreen.querySelectorAll(".sm-alert ul li[data-level]");

		for (var i = 0, len = levelsNodes.length; i < len; i++) {
			var levelNode = levelsNodes[i];

			levelNode.addEventListener("click", function(e) {
				e.preventDefault();
				if (self.gameState === 1) {
					self._setupGameWrapper(this);
				}
			});
		}
	}

	StrangerMemory.prototype._setupGameWrapper = function(levelNode) {
		var self = this;
		this.chosenLevel = levelNode.getAttribute("data-level");

		// fade start screen out
		if (document.querySelector(".sm-start-screen.fadeIn") !== null) {
			this.startScreen.classList.remove('fadeIn');
		}
		// remove start screen
		if (this.startScreen.parentNode !== null) {
			this.startScreen.parentNode.removeChild(this.startScreen);
		}

		// add level class to board
		this.board.classList.add("sm-level-" + this.chosenLevel);

		// utilities markup & append to utility bar
		this.utilities = '<div class="inside">' +
				'<div class="sm-utility__meta sm-utility__meta--level">' +
					'Level <span class="sm-utility__meta__digit"></span>' +
				'</div>' +
				'<div class="sm-utility__meta sm-utility__meta--moves">' +
					'Moves: <span class="sm-utility__meta__digit">0</span>' +
				'</div>' +
				'<button id="resetGameBtn" class="sm-utility__button sm-utility__button--reset">Start Over</button>' +
			'</div>';
		this.utilityBar.innerHTML = this.utilities;

		// display level in utility bar
		if (document.querySelector(".sm-utility .sm-utility__meta--level .sm-utility__meta__digit") !== null) {
			document.querySelector(".sm-utility .sm-utility__meta--level .sm-utility__meta__digit").innerHTML = this.chosenLevel;
		}

		// call resetGame when reset button clicked
		if (document.getElementById("resetGameBtn") !== null) {
			document.getElementById("resetGameBtn").addEventListener("click", function(e) {
				// fade out cube wrap
				if (document.querySelector(".sm-cube-wrap.fadeIn") !== null) {
					document.querySelector(".sm-cube-wrap").classList.remove('fadeIn');
				}
				// fade out utilities
				if (document.querySelector(".sm-utility .inside.fadeIn") !== null) {
					document.querySelector(".sm-utility .inside").classList.remove('fadeIn');
				}
				setTimeout(function() {
					self.resetGame();
				}, 500);
			});
		}

		this._renderTiles();
	}

	StrangerMemory.prototype._renderTiles = function() {
		this.tileImages = 0;
		this.newTiles = [];
		var faceNum = 1; // used for the number at the end of each cube face's class

		switch(parseInt(this.chosenLevel)) {
			case 1:
				this.tileImages = 12; // 6 faces of 4 tiles (24 tiles), 12 images needed
				break;
			case 2:
				this.tileImages = 27; // 6 faces of 9 tiles (54 tiles), 27 images needed
				break;
			case 3:
				this.tileImages = 48; // 6 faces of 16 tiles (96 tiles), 48 images needed
				break;
		}

		for (var i = 0, len = this.tileImages; i < len; i++) {
			// push the tiles into the newTiles array twice
			this.newTiles.push(this.tiles[i], this.tiles[i]);
		}

		// shuffle so the duplicate tiles aren't right next to eachother
		this.newTiles.shuffle();

		// tiles markup
		this.tilesHTML = '<div class="cube__face cube__face--' + faceNum +'">' +
			'<div class="inside">' +
				'<ul class="tiles">';

		for (var i = 0; i < this.newTiles.length; i++) {
			var num = i + 1;
			var cubeFaces = this.newTiles.length / 6; // 6 faces of the cube

			this.tilesHTML += '<li class="tile" data-id="' + this.newTiles[i].id + '">' +
				'<img src="' + this.newTiles[i].image + '" alt="">' +
			'</li>';

			// Split into 6 faces
			// if divisible by 6 and not the last item
			if (num % cubeFaces == 0 && num != this.newTiles.length) {
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

		// fade in cube wrap
		setTimeout(function() {
			if (document.querySelector(".sm-cube-wrap") !== null) {
				document.querySelector(".sm-cube-wrap").classList.add('fadeIn');
			}
		}, 100);

		// fade in utilities
		setTimeout(function() {
			document.querySelector(".sm-utility .inside").classList.add('fadeIn');
		}, 100);

		this.gameState = 2;
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
				if (self.tile1flipped === false && self.tile2flipped === false) { // if no tiles are flipped
					this.classList.add("flipped");
					self.tile1 = this;
					self.tile1id = this.getAttribute("data-id");
					self.tile1flipped = true;
				} else if (self.tile1flipped === true && self.tile2flipped === false) { // if 1 tile is flipped
					this.classList.add("flipped");
					self.tile2 = this;
					self.tile2id = this.getAttribute("data-id");
					self.tile2flipped = true;
					// do the 2 tiles match?
					if (self.tile1id == self.tile2id) {
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

		window.setTimeout(function() {
			// add 'match' class
			self.tile1.classList.add("match");
			self.tile2.classList.add("match");
			// reset game variables so a new pair of tiles can be evaluated
			self._resetGameVars();
			// add 2 more to the total flipped tile count
			self.flippedTiles = self.flippedTiles + 2;
			// if all the tiles are flipped, you win!
			if (self.flippedTiles == self.newTiles.length) {
				self._winGame();
			}
		}, 1000);

		// increment the Moves counter
		this._gameCounterPlusOne();
	}

	StrangerMemory.prototype._tilesMismatch = function() {
		var self = this;

		window.setTimeout(function(){
			// remove 'flipped' class
			self.tile1.classList.remove("flipped");
			self.tile2.classList.remove("flipped");
			// reset game variables so a new pair of tiles can be evaluated
			self._resetGameVars();
		}, 1000);

		// increment the Moves counter
		this._gameCounterPlusOne();
	}

	StrangerMemory.prototype._resetGameVars = function() {
		// reset game variables so a new pair of tiles can be evaluated
		this.tile1 = "";
		this.tile2 = "";
		this.tile1id = "";
		this.tile2id = "";
		this.tile1flipped = false;
		this.tile2flipped = false;
	}

	StrangerMemory.prototype._gameCounterPlusOne = function() {
		// keep track of how many moves have been made
		this.numMoves = this.numMoves + 1;
		document.querySelector(".sm-utility .sm-utility__meta--moves .sm-utility__meta__digit").innerHTML = this.numMoves;
	}

	StrangerMemory.prototype._clearGame = function() {
		var self = this;

		// fade out cube wrap
		if (document.querySelector(".sm-cube-wrap.fadeIn") !== null) {
			document.querySelector(".sm-cube-wrap").classList.remove('fadeIn');
		}
		// fade out utilities
		if (document.querySelector(".sm-utility .inside.fadeIn") !== null) {
			document.querySelector(".sm-utility .inside").classList.remove('fadeIn');
		}

		// remove the cube
		if (this.cube.parentNode !== null) {
			this.cubeWrap.removeChild(this.cube);
		}
		// remove the cube wrap
		if (this.cubeWrap.parentNode !== null) {
			this.board.removeChild(this.cubeWrap);
		}
		// remove the utilities
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
			this.gameWinMsg.className = "sm-win-msg sm-alert";
			this.gameWinMsg.innerHTML = '<ul class="lights">' +
					'<li></li>' +
					'<li></li>' +
					'<li></li>' +
					'<li></li>' +
					'<li></li>' +
					'<li></li>' +
				'</ul>' +
				'<h2>You won with ' + this.numMoves + ' moves!</h2>' +
				'<button id="playAgainBtn" class="sm-utility__button sm-utility__button--reset">Play Again</button>';
			document.getElementById("smBoard").appendChild(this.gameWinMsg);

			setTimeout(function() {
				// fade in win message
				document.querySelector(".sm-win-msg").classList.add('fadeIn');
			}, 500);

			// New Game button event listener
			document.getElementById("playAgainBtn").addEventListener("click", function(e) {
				// remove the game win message
				if (self.gameWinMsg.parentNode !== null) {
					self.board.removeChild(self.gameWinMsg);
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

		if (document.querySelector(".sm-cube") !== null) {
			document.querySelector(".sm-cube").style.transform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
		}

	}, false);

	// add StrangerMemory to global namespace
	window.StrangerMemory = StrangerMemory;

})( window );
