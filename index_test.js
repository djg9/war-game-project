var expect = chai.expect;

describe('MyFunction', function() {
    describe('#createDeck', function() {
        it('should create a deck from given card values and suits', function() {
            var testDeck = new Deck();
            testDeck.values = ['2', '3'];
            testDeck.suits = ['Hearts', 'Diamonds'];

            var x = newDeck.createDeck();
            expect(x).to.equal('2 of Hearts', '3 of Hearts', '2 of Diamonds', 
                '3 of Diamonds');
        });

        it('should throw an error if some suits are not strings', function() {
            var testDeck = new Deck();
            testDeck.values = ['2', 3];
            testDeck.suits = ['Hearts', 'Diamonds'];

            expect(function() {
                newDeck.createDeck();
            }).to.throw(Error);
        });
    });
});