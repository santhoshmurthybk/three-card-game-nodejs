const { generator } = require('./util')

const suits = ['S', 'H', 'D', 'C'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];

const generateDeck = () => {
    const deck = [];

    suits.forEach(suit => {
        ranks.forEach(rank => {
            deck.push(`${rank}${suit}`)
        })
    })

    return deck;
}

module.exports.generateDeck = generateDeck;

/*istanbul ignore next */
const shuffle = (deck) => {
    const randInt = generator(2);
    for (let i = deck.length - 1, j; i > 0; i--) {
        let j = randInt(i);
        let tmp = deck[i];
        deck[i] = deck[j];
        deck[j] = tmp;
    }

    return deck;

}

module.exports.shuffle = shuffle;

const draw = (deck, count) => {
    if (!deck.length) {
        throw new Error('Deck: Cannot draw from deck, no cards remaining');
    }

    if (count <= 0) {
        const cards = []
        return {deck, cards};
    }

    const cards = deck.splice(0, count);
    return { deck, cards };
}

module.exports.draw = draw;