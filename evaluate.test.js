const deck = require('./deck');
const {compareHands} = require('./evaluate');

jest.mock('./deck');

describe('test for comparing hands', () => {
    test('should say no winners when rank of all hands are 4', () => {
        const decks = [
            'JS', 'KS', 'TC', '8H', 'AD', 'KH',
            '7D', '7S', 'AS', '5C', '8C', 'AH',
            '7C', '4H', '2D', 'QS', 'JD', 'TH',
            '4D', 'TS', 'TD', 'KD', '6C', 'QD',
            '9S', '2C', '5H', '9D', '6S', 'JC',
            '3S', 'AC', '4S', '9H', '7H', '2H',
            '3C', '6H', '9C', '3H'
          ]
        const result = compareHands([ '8D', 'QC', 'JH' ],[ '6D', 'QH', 'KC' ], [ '4C', '5S', '8S' ],[ '5D', '2S', '3D' ], decks)
        expect(result).toEqual(`This match doesn't have any winners`)
    })

    test('should say which player is a winner', () => {
        const decks = [
            '7D', 'QC', '4D', '9H', '3H', 'AS',
            '2D', '9C', '5C', 'AD', '5H', '4C',
            '4S', 'JH', '5D', 'TH', 'QH', '7C',
            '8C', 'KH', '2H', '7H', 'QS', '9S',
            '4H', '8H', '8D', 'JS', '3D', '3S',
            'JC', '2C', 'QD', '6H', '7S', 'AC',
            '8S', 'TS', 'TD', '3C'
          ]
        const result = compareHands([ 'TC', 'JD', '6S' ],[ '6D', '2S', '6C' ], [ 'AH', 'KD', 'KC' ],[ '9D', '5S', 'KS' ], decks)
        expect(result).toEqual(`The winner of the match is Player 3 with pair`)
    })

    test('should say which player is a winner', () => {
        const decks = [
            '8S', 'QH', '5H', '3S', '6D', '8H',
            'KC', '4S', '9C', 'TC', 'AD', '4H',
            '2H', '2D', '8C', '9S', '5S', '5C',
            'JC', 'QS', 'JH', 'AH', '7D', '3H',
            'QC', '7C', '4D', '5D', 'TD', 'KH',
            'QD', '4C', 'JD', '6C', 'AS', 'KD',
            '7H', '7S', 'KS', 'JS'
          ]
        const result = compareHands([ '9D', '9H', 'TS' ],[ 'TH', '6S', '2C' ], [ '3D', 'AC', '8D' ],[ '2S', '3C', '6H' ], decks)
        expect(result).toEqual(`The winner of the match is Player 1 with pair`)
    })

    test('should say which player is a winner', () => {
        const decks = [
            'TC', '6C', '3C', '9H', '8D', 'JC',
            '2H', 'KD', 'AC', 'KH', 'AS', '8S',
            '2S', '3S', 'QS', 'JD', '2C', '4S',
            'KS', 'QC', 'QD', 'JS', 'JH', 'KC',
            '7C', '5H', '9C', '8C', '4D', '3H',
            '6H', '5S', '8H', '5C', 'TH', 'TD',
            '7D', '9S', 'AH', 'QH'
          ]
        const result = compareHands([ '4H', '3D', '2D' ],[ '9D', '6S', 'AD' ], [ '6D', '7S', 'TS' ],[ '4C', '5D', '7H' ], decks)
        expect(result).toEqual(`The winner of the match is Player 1 with straight`)
    })
})