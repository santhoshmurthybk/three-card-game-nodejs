const {draw} = require('./deck') 

const order = "A23456789TJQK"

const getHandDetails = (hand) => {
    const cards = hand
    const faces = cards.map(a => String.fromCharCode([77 - order.indexOf(a[0])])).sort()
    const suits = cards.map(a => a[1]).sort()

    const flush = faces[0] === faces[4]

    const counts = faces.reduce(count, {})
    const pairs = Object.values(counts).reduce(count, {})

    const first = faces[0].charCodeAt(0)
    const straight = faces.every((f, index) => f.charCodeAt(0) - first === index)

    let rank =
        (flush && 1) ||
        (straight && 2) ||
        (pairs[2] && 3) || 4;

    return { rank, value: faces.sort(byCountFirst).join("") }

    function byCountFirst(a, b) {
        //Counts are in reverse order - bigger is better
        const countDiff = counts[b] - counts[a]
        if (countDiff) return countDiff // If counts don't match return
        return b > a ? -1 : b === a ? 0 : 1
    }

    function count(c, a) {
        c[a] = (c[a] || 0) + 1
        return c
    }
}

const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

const compareDrawLoop = (deck, index) => {
    console.log('Drawing a card for each player')
        const one = draw(deck, 1)
        console.log(`Card of Player ${index[0] + 1} is ${one.cards}`)
        const two = draw(one.deck, 1)
        console.log(`Card of Player ${index[1] + 1} is ${two.cards}`)
        if(one.cards < two.cards){
            return `The winner of the match is Player ${index[0] + 1} with high card`
        } else if (one.cards > two.cards){
            return `The winner of the match is Player ${index[1] + 1} with high card`
        } else {
            return compareDrawLoop(two.deck, index)
        }
}

const compareDraw = (play1, play2, index, typeOfHand, deck) => {
    console.log(index)
    if(play1.value < play2.value){
        return `The winner of the match is Player ${index[0] + 1} with ${typeOfHand}`
    } else if (play1.value > play2.value){
        return `The winner of the match is Player ${index[1] + 1} with ${typeOfHand}`
    } else {
        console.log(`The match was draw between Player ${index[0] + 1} and Player ${index[1] + 1} with ${typeOfHand}`)
        return compareDrawLoop(deck, index)
    }
}

const compareHands = (h1, h2, h3, h4, deck) => {
    let d1 = getHandDetails(h1)
    let d2 = getHandDetails(h2)
    let d3 = getHandDetails(h3)
    let d4 = getHandDetails(h4)

    const rankMap = new Map();

    rankMap.set(0, d1);
    rankMap.set(1, d2);
    rankMap.set(2, d3);
    rankMap.set(3, d4);

    const rankList = [d1.rank, d2.rank, d3.rank, d4.rank]

    console.log(rankList)
    console.log(rankMap)

    if (rankList.includes(1)) {
        const index = indexOfAll(rankList, 1)
        if (index.length > 2) {
            return `This match doesn't have any winners`
        } else if (index.length == 2) {
            const player1 = rankMap.get(index[0]);
            const player2 = rankMap.get(index[1]);

            return compareDraw(player1, player2, index, 'flush', deck)
        } else {
            return `The winner of the match is Player ${index[0] + 1} with flush`
        }
    }

    if (rankList.includes(2)) {
        const index = indexOfAll(rankList, 2)
        if (index.length > 2) {
            return `This match doesn't have any winners`
        } else if (index.length == 2) {
            const player1 = rankMap.get(index[0]);
            const player2 = rankMap.get(index[1]);

            return compareDraw(player1, player2, index, 'straight', deck)
        } else {
            return `The winner of the match is Player ${index[0] + 1} with straight`
        }
    }

    if (rankList.includes(3)) {
        const index = indexOfAll(rankList, 3)
        if (index.length > 2) {
            return `This match doesn't have any winners`
        } else if (index.length == 2) {
            const player1 = rankMap.get(index[0]);
            const player2 = rankMap.get(index[1]);

            return compareDraw(player1, player2, index, 'pair', deck)
        } else {
            return `The winner of the match is Player ${index[0] + 1} with pair`
        }
    }

    if (rankList.includes(4)) {
        return `This match doesn't have any winners`
    }
}

module.exports.compareHands = compareHands