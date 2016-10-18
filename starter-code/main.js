var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


if (cardOne === cardTwo) {
	alert ("You found a match!");
	} else {
	alert ("Sorry, try again.");
	}

if (cardThree === cardFour) {
	alert ("You found a match!");
		} else {
	alert ("Sorry, try again.");
		}
	

    var board = document.getElementById('board-game');

    function createCard() {
     for (var i=0; i<cards.length; i++) {
       var makeCardElement = document.createElement('div');

    makeCardElement.className = 'card';

    board.appendChild(makeCardElement);
    }
    }
    createCard(4);
