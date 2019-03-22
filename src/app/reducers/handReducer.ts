import { PlayingCard } from 'src/model/cardModel';

let handReducer: Reducer<Array<PlayingCard>> = (state: Array<PlayingCard>, action: Action) => {
  if (action.type === 'ADD') {
    state.push(action.payload);
  }
  if (action.type === 'PLAY') {
    state.splice(action.payload, 1);
  }
  if(action.type === 'CLEAR'){
    state = [];
  }
  return state;
};

export default handReducer;