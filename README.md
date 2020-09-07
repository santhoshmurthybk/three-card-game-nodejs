# three-card-game-nodejs

The festival season is here and you realise it's hard to play all those complicated card games when you're drunk.
Creating a simple luck-based game for people to play when they have limited motor and sensory control.

Basic Rules:
- Use a standard deck of cards (no Joker).
- Each player is dealt only three cards.
- 'A' is considered to have a number value of 1.
- 'A' is considered the top card in a face-off. So the order is A > K > Q > J > 10...2

Victory:
- FLUSH - Three cards of the same number is the highest possible combination. (Rank:1)
- STRAIGHT - The next highest is a sequence (numbers in order, e.g., 4,5,6. A is considered to have a value of 1). (Rank:2)
- PAIR - The next highest is a pair of cards (e.g.: two Kings or two 10s). (Rank:3)
- If all else fails,the game doesn't have any winners. (Rank:4)
- If there is a tie for more than 2 players, the game doesn't have any winners.
- If there is a tie, the top card (by number value wins). 
- If the top card has the same value, each of the tied players draws a single card from the deck until a winner is found.
- Only the newly drawn cards are compared to decide a tie. The top card wins a tie. 
- For now the suit (spades/hearts etc...), does not matter. 

How to run the module:
- Clone the repo 
- Run "npm install" to install all the packages
- Run "npm run start" to start the game

Note: Consoles has been added to know the deck and the cards and to know who is the winner and how the winner is being determined. 
All the consoles will be removed once this is has been integrated with the UI