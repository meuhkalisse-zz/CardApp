import { PlayingCard } from 'src/model/cardModel';
import { Suit } from 'src/model/suitEnum';
import { CardValue } from 'src/model/cardValueEnum';

function shuffle(deck: Array<PlayingCard>) {
  for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
  }
};

function getNewDeck(): PlayingCard[] {
  let cards: PlayingCard[] = [];
  for (let suit in Suit) {
      for (let value in CardValue) {
          cards.push(new PlayingCard(suit, value));
      }
  }
  return cards;
}

let cardReducer: Reducer<Array<PlayingCard>> = (state: Array<PlayingCard>, action: Action) => {
  if (action.type === 'NEW') {
    state = getNewDeck();
  }
  if (action.type === 'SHUFFLE') {
    shuffle(state);
  }
  return state;
};

export default cardReducer;