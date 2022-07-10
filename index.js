class Deck {
    constructor() {
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 
            'Jack', 'Queen', 'King'];
        this.suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
        this.deck = [];
        this.player1Hand = [];
        this.player2Hand = [];
    }

    createDeck() {
        for(let i = 0; i < this.suits.length; i++) {
            for(let j = 0; j < this.values.length; j++) {
                this.deck.push(`${this.values[j]} of ${this.suits[i]}`);
            }
        }

        return this.deck;
    }

    dealCards() {
        while(this.deck.length !== 0) {
            let card1Index = Math.floor(Math.random() * this.deck.length);
            this.player1Hand.push(this.deck[card1Index]);
            this.deck.splice(card1Index, 1);

            let card2Index = Math.floor(Math.random() * this.deck.length);
            this.player2Hand.push(this.deck[card2Index]);
            this.deck.splice(card2Index, 1);
        }

        let hands = [this.player1Hand, this.player2Hand];
        return hands;
    }
}

var newDeck = new Deck();
newDeck.createDeck();
var playerHands = newDeck.dealCards();


class Game {
    constructor() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.player1Hand = playerHands[0];
        this.player2Hand = playerHands[1];
    }

    start() {
        alert(`
            Welcome to the game of War. 
            Today we have Player 1 taking on Player 2.`);

        while(this.player1Hand.length !== 0 && this.player2Hand.length !== 0) {
            let player1Card = this.player1Hand[0];
            let player2Card = this.player2Hand[0];
            let player1Sub = player1Card.substring(0, 2); //used instead of
            let player2Sub = player2Card.substring(0, 2); //charAt(0) to
            let player1Value = 0;                          //account for 10s
            let player2Value = 0;

            //convert strings to numbers
            switch(player1Sub) {
                case '2 ':
                    player1Value = 2;
                    break;
                case '3 ':
                    player1Value = 3;
                    break;
                case '4 ':
                    player1Value = 4;
                    break;
                case '5 ':
                    player1Value = 5;
                    break;
                case '6 ':
                    player1Value = 6;
                    break;
                case '7 ':
                    player1Value = 7;
                    break;
                case '8 ':
                    player1Value = 8;
                    break;
                case '9 ':
                    player1Value = 9;
                    break;
                case '10':
                    player1Value = 10;
                    break;
                case 'Ja':
                    player1Value = 11;
                    break;
                case 'Qu':
                    player1Value = 12;
                    break;
                case 'Ki':
                    player1Value = 13;
                    break;
                case 'Ac':
                    player1Value = 14;
            }

            //convert strings to numbers
            switch(player2Sub) {
                case '2 ':
                    player2Value = 2;
                    break;
                case '3 ':
                    player2Value = 3;
                    break;
                case '4 ':
                    player2Value = 4;
                    break;
                case '5 ':
                    player2Value = 5;
                    break;
                case '6 ':
                    player2Value = 6;
                    break;
                case '7 ':
                    player2Value = 7;
                    break;
                case '8 ':
                    player2Value = 8;
                    break;
                case '9 ':
                    player2Value = 9;
                    break;
                case '10':
                    player2Value = 10;
                    break;
                case 'Ja':
                    player2Value = 11;
                    break;
                case 'Qu':
                    player2Value = 12;
                    break;
                case 'Ki':
                    player2Value = 13;
                    break;
                case 'Ac':
                    player2Value = 14;
            }

            //compare cards and determine round winner
            if(player1Value > player2Value) {
                this.player1Score += 1;
                alert(`
                    Draw:
                    ----------------
                    Player 1:  ${player1Card}
                    Player 2:  ${player2Card}

                    ${player1Card} beats ${player2Card}.
                    Player 1 wins the round.

                    Score:
                    ----------------
                    Player 1:  ${this.player1Score}
                    Player 2:  ${this.player2Score}`);
            } else if(player2Value > player1Value) {
                this.player2Score += 1;
                alert(`
                    Draw:
                    ----------------
                    Player 1:  ${player1Card}
                    Player 2:  ${player2Card}

                    ${player2Card} beats ${player1Card}.
                    Player 2 wins the round.

                    Score:
                    ----------------
                    Player 1:  ${this.player1Score}
                    Player 2:  ${this.player2Score}`);
            } else {
                alert(`
                    Draw:
                    ----------------
                    Player 1:  ${player1Card}
                    Player 2:  ${player2Card}

                    ${player1Card} and ${player2Card} are equal.
                    The round is a tie.
                    
                    Score:
                    ----------------
                    Player 1:  ${this.player1Score}
                    Player 2:  ${this.player2Score}`);
            }

            this.player1Hand.splice(0, 1);
            this.player2Hand.splice(0, 1);
        }

        //determine overall winner
        if(this.player1Score > this.player2Score) {
            alert(`
                Player 1 wins the game.
            
                Score:
                ----------------
                Player 1:  ${this.player1Score}
                Player 2:  ${this.player2Score}`);
        } else if(this.player2Score > this.player1Score) {
            alert(`
                Player 2 wins the game.
            
                Score:
                ----------------
                Player 1:  ${this.player1Score}
                Player 2:  ${this.player2Score}`);
        } else {
            alert(`
                The game is a tie.
            
                Score:
                ----------------
                Player 1:  ${this.player1Score}
                Player 2:  ${this.player2Score}`);
        }
    }
}

var newGame = new Game();
newGame.start();
 