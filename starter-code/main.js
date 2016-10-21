// Define card variables prev assignment
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

// Define card variables
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// Create game board //

var board = document.getElementById('board-game');

function createCard() {
  for (var i=0; i<cards.length; i++) {
    var makeCardElement = document.createElement('div');
		makeCardElement.className = 'card';
		}
  }

createCard(4);

// Create listener for card click and display 2 cards
cardElement.addEventListener('click', isTwoCards);
board.appendChild(makeCardElement);
board.appendChild(makeCardElement);

// Check to see if 2 cards in play
function isTwoCards() {
cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if(this.getAttribute('data-card') === 'queen') {
		this.innerHTML = '<img src="images/queen.png" alt = "Queen of Hearts"/>';
	} else {
		this.innerHTML = '<img src="images/king.png" alt = "King of Spades"/>';
}

// Check for match
if (cardsinPlay.length === 2) {
isMatch(cardsinPlay);
}

function isMarch(cards) {
	if ((cards[0] === cards[1])||(cards[2] === cards[3])) {
	    	alert("You found a match!");
	  	} else {
				alert("Sorry, try again.");
		 }
	 }

/*if (cardOne === cardTwo) {
	alert ("You found a match!");
	} else {
	alert ("Sorry, try again.");
	}

if (cardThree === cardFour) {
	alert ("You found a match!");
		} else {
	alert ("Sorry, try again.");
		}
*/

//Clear cards
cardsInPlay = [];
}

}

/* code hints from assignment 11

// DONE set up cars variable
	var cards [queen, queen, king, king]

// DONE declare cardsInPlay variable as an empty array
    var cardsInPlay = []

 // set up each card during createBoard function
 	function createBoard () {
 		for (var i=0; i<cards.length; i++ {
 		cardElement.setAttribute('data-card', cards [i]);
 	}

 // DONE when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards)
 	}

//DONE create a function called isTwoCards
//checks to see if 2 cards in play
 	function isTwoCards() {

 // DONE add card to array of cards in play
 	cardsInPlay.push(this.getAttribute('data-card'));

 // DONE if 2 cards in play check for match
 	if (cardsinPlay.length === 2) {
 		isMarch(cardsInPlay);

 // DONE clear cards in array for next try
 	cardsInPlay = [];
 	}

 	}
*/
