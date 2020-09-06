const { generateDeck, shuffle, draw } = require('./deck')
const { compareHands } = require('./evaluate')

const deckForGame = shuffle(generateDeck());

let remDeck;
console.log('main deck')
console.log(deckForGame);
const play1 = draw(deckForGame, 3)
const player1Cards = play1.cards;
remDeck = play1.deck;

console.log('player1')
console.log(player1Cards)
console.log(remDeck)

const play2 = draw(remDeck, 3)
const player2Cards = play2.cards;
remDeck = play2.deck;

console.log('player2')
console.log(player2Cards)
console.log(remDeck)

const play3 = draw(remDeck, 3)
const player3Cards = play3.cards;
remDeck = play3.deck;

console.log('player3')
console.log(player3Cards)
console.log(remDeck)

const play4 = draw(remDeck, 3)
const player4Cards = play4.cards;
remDeck = play4.deck;

console.log('player4')
console.log(player4Cards)
console.log(remDeck)

console.log(compareHands(player1Cards, player2Cards, player3Cards, player4Cards))


