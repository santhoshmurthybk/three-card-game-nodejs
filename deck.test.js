const { generateDeck, draw } = require('./deck');

describe('test for generating the deck', () => {
    test('should generate the deck', () => {
        const deck = generateDeck();
        const expectedDeck = [ 'AS', '2S', '3S', '4S', '5S', '6S', '7S',
        '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AH',
        '2H', '3H', '4H', '5H', '6H', '7H', '8H',
        '9H', 'TH', 'JH', 'QH', 'KH', 'AD', '2D',
        '3D', '4D', '5D', '6D', '7D', '8D', '9D',
        'TD', 'JD', 'QD', 'KD', 'AC', '2C', '3C',
        '4C', '5C', '6C', '7C', '8C', '9C', 'TC',
        'JC', 'QC', 'KC']

        expect(deck).toStrictEqual(expectedDeck);
    })
})

describe('test for drawing from deck', () => {
    test('should draw the number of card specified from the deck', () => {
        const deck = generateDeck();
        const playcard = draw(deck, 2)

        expect(playcard.cards.length).toEqual(2);
    });

    test('should throw error when deck is not having cards', () => {
        const deck =[]
        try{
            draw(deck, 2)
        } catch(e) {
            expect(e.message).toEqual('Deck: Cannot draw from deck, no cards remaining')
        }
    });

    test('should return empty when count is 0', () => {
        const deck =generateDeck();
        const playcard = draw(deck, 0)
        expect(playcard.cards.length).toEqual(0);
    });

})