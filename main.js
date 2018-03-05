var canvas;
var ctx;

var cards;

function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}



window.onload = function() {
	var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];

	canvas = document.getElementById('gameCanvas');
	ctx = canvas.getContext('2d');

	canvas.width = dimension[0];
	canvas.height = dimension[1];
	cards = deck();
	shuffle();
	console.log(cards[2].suit + " " + cards[2].name);
	draw();
	
}


function shuffle () {
  var i = 0
  var j = 0
  var temp = null

  for (i = cards.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = cards[i]
    cards[i] = cards[j]
    cards[j] = temp
  }
}


function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }

    return cards;
}

function draw() {
	ctx.beginPath();
	ctx.moveTo(0, canvas.height/2);
	ctx.lineTo(canvas.width, canvas.height/2);
	ctx.stroke();

	ctx.rect(canvas.width/2 - 75, 100, 150, 200);
	ctx.stroke();

}

function newCardUp() {
	setInterval(function() {
		
	}, 1000/30);
}
