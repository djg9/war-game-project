class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
}

class Deck {
    constructor() {
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 
            'Jack', 'Queen', 'King'];
        this.suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
        this.deck = [];
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
        let player1Hand = [];
        let player2Hand = [];
        while(this.deck.length !== 0) {
            let card1Index = Math.floor(Math.random() * 
                (this.deck.length + 1));
            player1Hand.push(this.deck[card1Index]);
            this.deck.splice(this.deck[card1Index], 1);

            let card2Index = Math.floor(Math.random() * 
                (this.deck.length + 1));
            player2Hand.push(this.deck[card2Index]);
            this.deck.splice(this.deck[card2Index], 1);
        }

        let hands = [player1Hand, player2Hand];
        return hands;
    }
}

var newDeck = new Deck();
newDeck.createDeck();
newDeck.dealCards();
