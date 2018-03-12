var img11 = document.getElementById('11');
var img12 = document.getElementById('12');
var img13 = document.getElementById('13');
var img14 = document.getElementById('14');
var img15 = document.getElementById('15');


var img21 = document.getElementById('21');
var img22 = document.getElementById('22');
var img23 = document.getElementById('23');
var img24 = document.getElementById('24');
var img25 = document.getElementById('25');


var cards;

function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}


window.onload = function() {
	img11 = document.getElementById('11');
	img12 = document.getElementById('12');
	img13 = document.getElementById('13');
	img14 = document.getElementById('14');
	img15 = document.getElementById('15');


	img21 = document.getElementById('21');
	img22 = document.getElementById('22');
	img23 = document.getElementById('23');
	img24 = document.getElementById('24');
	img25 = document.getElementById('25');
	
	cards = deck();
	shuffle();
	setImage();
	
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
	this.suits = ['H','D','S','C'];
	var cards = [];
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }

    return cards;
}

function startGame() {
	for(var i = 0; i < cards.length; i++) {
		setImage(cards[i].value, cards[i].suits);
	}
}

function setImage(val, suit, img) {
	
	switch(img) {
		case 11: 
			img11.src = val + suit + ".png";
			break;
		case 12:
			img12.src = val + suit + ".png";
			break;
		case 13: 
			img13.src = val + suit + ".png";
			break;
		case 14:
			img14.src = val + suit + ".png";
			break;
		case 15: 
			img15.src = val + suit + ".png";
			break;
		case 21:
			img21.src = val + suit + ".png";
			break;
		case 22:
			img22.src = val + suit + ".png";
			break;
		case 23:
			img23.src = val + suit + ".png";
			break;
		case 24:
			img24.src = val + suit + ".png";
			break;
		case 25:
			img25.src = val + suit + ".png";
			break;
	}
	
}


/*




*/
