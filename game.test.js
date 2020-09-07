const {threeCardGame} = require('./game');
const deck = require('./deck');
const evaluate = require('./evaluate')

jest.mock('./deck');
jest.mock('./evaluate');

describe('test for playing a game', () => {

    const decks = [ 'AS', '2S', '3S', '4S', '5S', '6S', '7S',
    '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AH',
    '2H', '3H', '4H', '5H', '6H', '7H', '8H',
    '9H', 'TH', 'JH', 'QH', 'KH', 'AD', '2D',
    '3D', '4D', '5D', '6D', '7D', '8D', '9D',
    'TD', 'JD', 'QD', 'KD', 'AC', '2C', '3C',
    '4C', '5C', '6C', '7C', '8C', '9C', 'TC',
    'JC', 'QC', 'KC']

    test('should show the result', () => {

        deck.generateDeck.mockReturnValue(decks)

        deck.shuffle.mockReturnValue(decks)
        
        deck.draw.mockReturnValue({cards:['JC', 'QC', 'KC'], deck: decks})

        const mockResult = 'This match doesnot have any winners'
        evaluate.compareHands.mockReturnValue(mockResult)

        const result = threeCardGame();
        console.log(result)

        expect(result).toEqual(mockResult)
    })
})

