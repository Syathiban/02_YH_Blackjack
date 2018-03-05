var canvas;
var ctx;

var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var cardTypes = ["clubs", "spades", "hearts", "diamonds"];

var cards[52];



window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	ctx = canvas.getContext('2d');

	shuffle();
}

function shuffle() {


	for(var i = 0; i < 52; i++) {
		for(var j = 0; j < j; i++) {
			for(var k = 0; k < 13; k++) {
				cards[i] = (String)cardNumber[j] + cardTypes[k];
		}
	}
	}

	
}

